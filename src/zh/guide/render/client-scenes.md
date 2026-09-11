# 镜头演出与世界特效

Katton Alpha 0.5.0 为 Fabric 和 NeoForge（Minecraft 26.1.2 与 26.2）新增客户端演出 API。它覆盖镜头路径、跟随与注视、震动、FOV 过渡、粒子发射器、世界空间几何、光束、拖尾，以及把它们组合起来的 Kotlin 时间线。Paper 仍然是纯服务端，不提供这些渲染能力。

## 使用条件

镜头演出和自定义世界渲染要求客户端安装 Katton。服务端可以触发已注册的演出，但实际渲染由接收端客户端执行。仅安装服务端时，可以使用原版标题、ActionBar、Boss 血条和其他标准客户端数据包，不能运行此渲染 API。

本地接口必须在**客户端线程**调用，服务端触发接口必须在**服务端线程**调用。

## 镜头效果

`playCameraPath`、`followCamera`、`shakeCamera` 和 `transitionCameraFov` 可以单独使用。镜头位置使用世界坐标，角度使用度，时长使用 tick（正常运行时每秒 20 tick）。

```kotlin
import net.minecraft.world.phys.Vec3
import top.katton.api.scene.*

playCameraPath(
    listOf(
        CameraKeyframe(0, CameraPose(Vec3(0.0, 72.0, 8.0), 180f, 10f)),
        CameraKeyframe(
            60,
            CameraPose(Vec3(8.0, 75.0, 0.0), 90f, 18f),
            SceneEasing.SMOOTH,
        ),
    ),
    CameraOptions(
        interpolation = CameraInterpolation.CATMULL_ROM,
        lookAt = EffectAnchor.Position(Vec3(0.0, 70.0, 0.0)),
    ),
)
```

| 类型 | 参数与行为 |
|---|---|
| `CameraPath` | 从 tick 0 开始的递增关键帧。位置使用线性或 Catmull–Rom 插值，旋转使用四元数最短路径插值。 |
| `CameraFollow` | 锚点、时长、可选注视目标，以及可选的固定 yaw/pitch 偏移。目标失效时结束。 |
| `CameraShake` | 时长、角度强度与频率，随时间衰减，不锁定输入。 |
| `CameraFov` | 起止 FOV（1–179 度）、时长与缓动。只影响渲染 FOV，不写入持久化视频设置。 |

`CameraPose` 接收 `position`、`yaw`、`pitch`、`roll` 和可选的 `fov`。`CameraKeyframe` 在此基础上加入 tick 与缓动函数（`LINEAR`、`SMOOTH`、`EASE_IN`、`EASE_OUT`）。

完整镜头路径可以屏蔽移动、攻击、使用物品和鼠标转向。设置 `lockInput = false` 可以保留玩家操作。Escape 只取消当前观众的镜头演出。独立震动和 FOV 效果不会锁定输入。

## 锚点

效果通过 `EffectAnchor` 定位：

| 锚点 | 含义 |
|---|---|
| `EffectAnchor.Position(position)` | 固定世界坐标。 |
| `EffectAnchor.Origin(offset)` | 演出原点加偏移，适合编写可复用的相对演出。 |
| `EffectAnchor.Entity(id, offset)` | 实体 UUID 加偏移；省略 UUID 时使用 `SceneContext.target`。 |

实体锚点不会加载区块；目标不可用时会结束演出，而不会留下失效的镜头。

## 粒子与几何

`ParticleEmitter` 使用 Minecraft 的 `ParticleOptions`，包括脚本注册的粒子类型。形状包括 `Point`、`Line(end)`、`Ring(radius)`、`Sphere(radius)` 和 `Helix(radius, height, turns)`。

```kotlin
import net.minecraft.core.particles.ParticleTypes
import top.katton.api.scene.*

playClientEffect(
    ParticleEmitter(
        ParticleTypes.END_ROD,
        ParticleShape.Ring(2.5),
        durationTicks = 40,
        countPerTick = 24,
        velocity = Vec3(0.0, 0.08, 0.0),
    ),
)
```

几何效果包括：

| 几何 | 说明 |
|---|---|
| `Line(end)` | 从锚点出发的单段线。 |
| `Curve(points, segments)` | 穿过 2–128 个点的 Catmull–Rom 曲线。 |
| `Ring(radius, segments)` | 锚点局部 XY 平面上的圆环。 |
| `Plane(width, depth)` | 水平贴图或纯色平面。 |
| `Face(points)` | 共面凸多边形，使用扇形三角剖分。 |
| `Box(size, wireframe)` | 实心或线框盒体。 |
| `Sphere(radius, segments, rings)` | 实心或线框球体。 |
| `Cylinder(radius, height, segments, topRadius)` | 将 `topRadius` 设为 `0.0` 即圆锥。 |

`BeamEffect(from, to)` 在两个锚点之间绘制光束；`TrailEffect(anchor, durationTicks, maxPoints, teleportDistance)` 采样有界拖尾，实体传送时会断开。

几何顶点相对于锚点；用 `GeometryEffect` 的 `yaw`、`pitch`、`roll` 旋转平面、圆环和盒体。

`EffectMaterial` 控制外观：

| 字段 | 默认值 | 含义 |
|---|---|---|
| `color` | `-1`（白色） | ARGB 颜色。 |
| `width` | `0.05` | 线宽，单位为方块。 |
| `texture` | `null` | 贴图平面的资源 ID。 |
| `throughWalls` | `false` | 是否透视渲染；默认开启深度遮挡。 |
| `blend` | `EffectBlend.ALPHA` | `ALPHA` 或 `ADDITIVE`。 |
| `fadeOutTicks` | `10` | 在最后 N tick 内渐隐。 |

Katton 提供两个内置贴图：

- `katton:textures/effect/white.png`
- `katton:textures/effect/circle.png`

自定义贴图放在脚本包的 `assets/<namespace>/textures/` 下，并使用资源 ID 引用。

## 时间线

使用 `registerClientScene` 注册可重复播放的定义。每次播放都会创建独立实例。

```kotlin
registerClientScene("demo:intro") {
    repeats = 1
    parallel {
        effect(CameraShake(durationTicks = 12, strength = 2f))
        effect(CameraFov(75f, 62f, 20))
    }
    waitTicks(10)
    at(30) {
        effect(CameraFov(62f, 75f, 15))
    }
}

val handle = playClientScene("demo:intro", SceneContext(origin = player.position()))
handle.onEnd { reason -> println(reason) }
```

构建器默认顺序执行。`parallel { ... }` 会同时启动其直接分支；`at(tick) { ... }` 把代码块放到相对父构建器的显式偏移处。`parallel` 内的 `sequential { ... }` 会形成一条自身有序的并行分支。

```kotlin
registerClientScene("demo:sequence") {
    repeats = 2
    effect(CameraShake(10))
    parallel {
        effect(CameraFov(75f, 60f, 20))
        sequential {
            waitTicks(5)
            effect(CameraShake(15))
        }
    }
    at(40) { effect(CameraFov(60f, 75f, 10)) }
}
```

动态工厂可以拿到实例的 `SceneContext`，因此定义可以构建相对镜头路径：

```kotlin
effect(80) { context ->
    CameraPath(
        listOf(
            CameraKeyframe(0, CameraPose(context.origin.add(0.0, 2.0, 5.0), fov = 75f)),
            CameraKeyframe(40, CameraPose(context.origin.add(5.0, 3.0, 0.0), fov = 60f)),
            CameraKeyframe(80, CameraPose(context.origin.add(0.0, 5.0, -5.0), fov = 75f)),
        ),
        CameraOptions(interpolation = CameraInterpolation.CATMULL_ROM, lookAt = EffectAnchor.Origin(Vec3(0.0, 1.0, 0.0))),
    )
}
```

工厂返回的效果时长必须等于声明的轨道时长。每个实例有自己的时钟与上下文。单个演出最多 4,096 条轨道，最多重复 1,000 次，累计最长 72,000 tick。单机暂停时时钟停止推进。`unregisterClientScene(id)` 会停止该定义的实例并注销定义。

句柄：

```kotlin
val scene = playClientScene("demo:sequence", SceneContext(origin = player.position()))
scene.pause()
scene.resume()
scene.cancel()
println(scene.isActive)
println(scene.endReason)

val effect = playClientEffect(CameraShake(12, 2f))
effect.onEnd { reason -> println("shake ended: $reason") }
```

`EffectEndReason` 取值为 `COMPLETED`、`CANCELLED`、`REPLACED`、`TARGET_LOST`、`WORLD_CHANGED`、`RELOAD`、`ERROR`、`BUDGET` 或 `REJECTED`。新的完整镜头会替换拥有上一完整镜头的演出及其子效果；独立 FOV 轨道使用相同规则。震动可以叠加，单轴总角度上限为 45 度。回调在所属脚本上下文中执行；回调抛错会记录日志，清理仍会完成。

## 服务端触发

服务端可以向一名玩家播放演出，也可以向指定维度和半径内的当前玩家播放演出。

```kotlin
import top.katton.api.scene.*
import top.katton.util.ScriptExecutionContext

val remote = playPlayerScene(player, "demo:intro")
val nearby = playNearbyScene(
    player.level(),
    player.position(),
    32.0,
    "demo:intro",
)

remote.cancel()
```

定义默认以注册脚本包的代码哈希作为版本。服务端与客户端必须使用相同的定义 ID 和版本。没有脚本上下文时默认版本为 `"1"`，两侧也可以显式传入版本。命令等不传播 owner 的回调，应在注册时捕获版本并传入：

```kotlin
@ServerScriptEntrypoint(ServerPhase.READY)
fun registerSceneCommand() {
    val revision = requireNotNull(ScriptExecutionContext.currentScriptRevision())
    registerCommand("intro") {
        executes { command ->
            val player = command.source.playerOrException
            playPlayerScene(player, "demo:intro", SceneContext(player.position(), player.uuid), revision)
            1
        }
    }
}
```

游戏通道只传输开始/停止命令与上下文；定义和资源沿用脚本包同步。客户端会检查定义 ID、版本、维度、实例 ID 和目标实体。播放从收到时开始，不承诺不同客户端逐帧同步，后来加入或进入范围的玩家不会补播。过期定义、错误维度、缺失目标和重复实例会被拒绝。远程句柄只向原接收者发送停止消息，不提供完成确认。Escape 只跳过当前观众。

## 预算与清理

客户端默认允许 256 个活动效果、每 tick 4,096 次粒子发射和每帧 65,536 个几何顶点。使用 `setClientEffectBudgets` 可以修改：

```kotlin
setClientEffectBudgets(
    EffectBudgets(
        activeEffects = 128,
        particlesPerTick = 2048,
        verticesPerFrame = 32768,
    ),
)
```

预算由客户端上所有脚本包共享。启动时容量不足会拒绝新演出；后续轨道超限时会跳过该效果并继续时间线。超出的粒子发射与顶点会被跳过。日志限频，不会阻塞时钟或恢复。

取消演出会移除几何效果并停止发射新粒子。已经发射的原版粒子按自身生命周期消失。死亡、换维度、断线、目标失效、取消和重载替换都会恢复原版镜头与输入。

镜头与输入处理属于客户端表现，不提供免伤、服务端冻结或区块加载。

## 运行示例

仓库在 `examples/client-scenes` 提供四个示例。把该包复制到世界的 `kattonpacks/` 目录，执行 `/katton reload`，然后使用：

| 命令 | 效果 |
|---|---|
| `/kattonscene impact` | 震屏、粒子环与几何圆环 |
| `/kattonscene trail` | 实体拖尾与光束——移动即可看到拖尾 |
| `/kattonscene cutscene` | 关键帧镜头与法阵；Esc 跳过 |
| `/kattonscene geometry` | 曲线、线框盒体、球体与圆锥 |

客户端需要安装匹配版本的 Katton 并接受脚本包同步。
