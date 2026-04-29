# 实体教程

从 BlockBench 模型到游戏内自定义动画实体——完整分步指南。

## 总览

创建自定义实体需要四个部分：

| 部分 | 位置 | 格式 |
|---|---|---|
| **模型** | BlockBench 导出 → `.kt` | `EntityModel` 子类 |
| **动画** | BlockBench 导出 → `.kt` | `AnimationDefinition` 定义 |
| **实体类** | 脚本中 | `Monster` 子类 + `AnimationState` 字段 |
| **纹理** | 资源包或 kattonpacks | `.png` 文件 |

## 步骤 1：BlockBench 创建模型

1. 在 [BlockBench](https://www.blockbench.net/) 中设计模型
2. 文件 → 导出 → 导出 Java 实体模型
3. 选 **Mojang mappings**，Minecraft 版本 **1.19+**
4. 保存为 `.java`，然后在 IDEA 中右键选择"将 Java 文件转换为 Kotlin 文件"，重命名为 `.kt`（Katton 用 `.kt` 后缀 IDE 支持更好）

导出产物类似这样（转为 `.kt` 后）：

```kotlin
class Zombie1Model<T : EntityRenderState>(root: ModelPart) : EntityModel<T>(root) {
    companion object {
        val LAYER_LOCATION = ModelLayerLocation(id("test", "zombie1"), "main")
        fun createBodyLayer(): LayerDefinition { ... }
    }
}
```

> [!TIP]
> Java → Kotlin 转换后可能需要手动补一些 import（如 `ModelPart`、`ModelLayerLocation`、`LayerDefinition`），以及修正一些语法问题（如 `EntityModel<T>` 而非 `EntityModel<T?>`）。

> [!IMPORTANT]
> **改 namespace**——导出文件的 `LAYER_LOCATION` 里默认 `"modid"` 要改成你的实际命名空间（如 `"test"`）。这个 ID 必须和实体注册时一致。

## 步骤 2：导出动画

1. BlockBench 切换到 **动画** 模式
2. 创建动画（idle、walk、attack 等）
3. 导出 → 导出 Java 动画
4. 保存为 `.java`，然后和模型一样转为 `.kt`

> [!CAUTION]
> **骨骼名不匹配**常见崩溃原因。动画里引用的骨骼名如果模型里不存在（如 BlockBench 定位器导出的 `"item_display"`），`bake()` 会抛异常。要么在模型里加空占位骨骼，要么从动画文件删掉对应的 channel。

## 步骤 3：实体类

```kotlin
class Zombie1Entity(type: EntityType<out Monster>, level: Level) : Monster(type, level) {
    val idle = AnimationState()
    val walk = AnimationState()
    init { idle.start(tickCount) }

    override fun tick() {
        super.tick()
        if (level().isClientSide) {
            // 通过跨 ClassLoader 桥发布动画状态
            KattonBridge["anim:${id}:idle"] = idle
            KattonBridge["anim:${id}:walk"] = walk
            if (deltaMovement.horizontalDistanceSqr() > 1.0e-7) {
                walk.startIfStopped(tickCount); idle.stop()
            } else {
                idle.startIfStopped(tickCount); walk.stop()
            }
        }
    }
}
```

> [!CAUTION]
> ### 关键：ClassLoader 隔离问题
>\
> Katton 用**不同的 ClassLoader** 编译服务端和客户端脚本。这意味着：
> - 不能跨端做类型转换（cast）
> - 脚本类里的静态字段 ClassLoader 隔离
>
> **解决方案**：用 `KattonBridge` 共享数据。桥在 mod ClassLoader 里，两端看同一份。
>
> ```kotlin
> // 实体侧（服务端或客户端脚本）：
> KattonBridge["anim:${entity.id}:idle"] = idleAnimationState
>
> // 渲染侧（registerAnimatedEntityRenderer 自动处理）：
> val state = KattonBridge["anim:${entityId}:idle"] as? AnimationState
> ```

## 步骤 4：注册实体（服务端）

```kotlin
@ServerScriptEntrypoint
fun initZombie() {
    registerNativeEntity("test:zombie1", RegisterMode.RELOADABLE,
        configure = {
            dimensions(0.6f, 1.95f); maxHealth(20.0); movementSpeed(0.23)
            attackDamage(3.0); withSpawnEgg(); followRange(64.0)
        }
    ) { props ->
        EntityType.Builder.of(::Zombie1Entity, MobCategory.MONSTER)
            .sized(props.dimensions.width, props.dimensions.height)
            .build(ResourceKey.create(Registries.ENTITY_TYPE, props.id))
    }
}
```

## 步骤 5：注册渲染器 + 动画（客户端）

`registerAnimatedEntityRenderer` 一步搞定模型层、渲染器和动画：

```kotlin
@ClientScriptEntrypoint
fun initZombieRenderer() {
    registerAnimatedEntityRenderer<LivingEntityRenderState, Zombie1Model<LivingEntityRenderState>>(
        entityTypeId = "test:zombie1",
        modelLayer = Zombie1Model.LAYER_LOCATION,
        bodyLayer = { Zombie1Model.createBodyLayer() },
        modelFactory = { root -> Zombie1Model(root) },
        texture = id("test", "textures/entity/zombie1.png"),
        animations = mapOf(
            "idle" to Zombie1Animation.idle,
            "walk" to Zombie1Animation.walkforward
        )
    )
}
```

> [!NOTE]
> `animations` 完全灵活——想加几个加几个。默认逻辑：移动时播 `"walk"`，静止时播 `"idle"`。自定义逻辑传 `animate` 回调即可。

## 步骤 6：纹理

纹理路径在注册时指定：`id("test", "textures/entity/zombie1.png")` ——对应资源包里的 `assets/test/textures/entity/zombie1.png`。

## MC 26.1 动画 API 变化

| 旧 API (1.21.11) | 新 API (26.1) |
|---|---|
| `EntityModel.animate(state, def, age)` | `def.bake(model.root()).apply(animState, age)` |
| `AnimationDefinition` 直接用 | 必须先 `bake()` 成 `KeyframeAnimation` |
| 模型上调用 `animate()` | `KeyframeAnimation` 上调用 `apply()` |

**每帧必调 `model.resetPose()`** ——否则动画变换累积导致模型混乱。

## 常见坑

### "实体隐形"

1. **客户端脚本没跑** — 首次进世界需要 `/katton reload`（或重启等自动触发）
2. **ClassLoader crash** — 用 `registerAnimatedEntityRenderer` 自动规避；手写渲染器用 `Monster` 而非实体类做泛型
3. **纹理缺失** — 检查 `assets/<ns>/textures/entity/<name>.png`
4. **模型层 namespace 不匹配**

### "动画乱七八糟"

1. 缺 `resetPose()`
2. 同时叠加播放 idle + walk
3. `bake()` 因缺骨骼抛异常

### "重载崩溃"

1. 删 `<游戏目录>/.katton/compiled-script-cache/` 缓存
2. 重载后杀旧实体重生

### "动画不播放"

1. `AnimationState` 没调用 `start()`
2. Bridge key 不一致

## 完整示例

```kotlin
package qwq

import model.Zombie1Animation
import model.Zombie1Model
import net.minecraft.client.renderer.entity.state.LivingEntityRenderState
import net.minecraft.core.registries.Registries
import net.minecraft.resources.ResourceKey
import net.minecraft.world.entity.AnimationState
import net.minecraft.world.entity.EntityType
import net.minecraft.world.entity.MobCategory
import net.minecraft.world.entity.monster.Monster
import net.minecraft.world.level.Level
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.registry.registerAnimatedEntityRenderer
import top.katton.api.registry.registerNativeEntity
import top.katton.bridge.KattonBridge
import top.katton.registry.RegisterMode
import top.katton.registry.id

class Zombie1Entity(type: EntityType<out Monster>, level: Level) : Monster(type, level) {
    val idle = AnimationState()
    val walk = AnimationState()
    init { idle.start(tickCount) }
    override fun tick() {
        super.tick()
        if (level().isClientSide) {
            KattonBridge["anim:${id}:idle"] = idle
            KattonBridge["anim:${id}:walk"] = walk
            if (deltaMovement.horizontalDistanceSqr() > 1.0e-7) {
                walk.startIfStopped(tickCount); idle.stop()
            } else { idle.startIfStopped(tickCount); walk.stop() }
        }
    }
}

@ServerScriptEntrypoint
fun initZombie() {
    registerNativeEntity("test:zombie1", RegisterMode.RELOADABLE,
        configure = { dimensions(0.6f, 1.95f); maxHealth(20.0); movementSpeed(0.23); attackDamage(3.0); withSpawnEgg(); followRange(64.0) }
    ) { p -> EntityType.Builder.of(::Zombie1Entity, MobCategory.MONSTER).sized(p.dimensions.width, p.dimensions.height).build(ResourceKey.create(Registries.ENTITY_TYPE, p.id)) }
}

@ClientScriptEntrypoint
fun initZombieRenderer() {
    registerAnimatedEntityRenderer<LivingEntityRenderState, Zombie1Model<LivingEntityRenderState>>(
        entityTypeId = "test:zombie1",
        modelLayer = Zombie1Model.LAYER_LOCATION,
        bodyLayer = { Zombie1Model.createBodyLayer() },
        modelFactory = { root -> Zombie1Model(root) },
        texture = id("test", "textures/entity/zombie1.png"),
        animations = mapOf("idle" to Zombie1Animation.idle, "walk" to Zombie1Animation.walkforward)
    )
}
```
