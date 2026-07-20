---
title: EntityRenderer
outline: [2, 2]
---

<ApiDocPage
  title="EntityRenderer"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/EntityRenderer.kt"
>
为脚本注册的实体类型注册自定义实体渲染器。 这是 [registerNativeEntity] 在客户端侧的配套 API。完成实体类型注册后， 在客户端调用这里的方法，就能为实体提供可视化外观。 [rendererFactory] 会接收一个 [EntityRendererProvider.Context]，其中可访问 实体渲染分发器、物品渲染器、资源管理器和实体模型集，足以构造标准 [EntityRenderer]。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerEntityRenderer&quot;,&quot;href&quot;:&quot;#registerentityrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerEntityRenderer&quot;,&quot;href&quot;:&quot;#registerentityrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerEntityModelLayer&quot;,&quot;href&quot;:&quot;#registerentitymodellayer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBakedModelPart&quot;,&quot;href&quot;:&quot;#getbakedmodelpart&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KeyframeEvent&quot;,&quot;href&quot;:&quot;#keyframeevent&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;registerAnimatedEntityRenderer&quot;,&quot;href&quot;:&quot;#registeranimatedentityrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerEntityRenderer

<ApiMemberCard
  id="registerentityrenderer"
  name="registerEntityRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun <T : Entity> registerEntityRenderer(entityType: EntityType<T>, rendererFactory: EntityRendererProvider<T>)
```

为脚本注册的实体类型注册自定义实体渲染器。
这是 [registerNativeEntity] 在客户端侧的配套 API。完成实体类型注册后，
在客户端调用这里的方法，就能为实体提供可视化外观。
[rendererFactory] 会接收一个 [EntityRendererProvider.Context]，其中可访问
实体渲染分发器、物品渲染器、资源管理器和实体模型集，足以构造标准 [EntityRenderer]。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entityType` | 实体类型，来源于 [registerNativeEntity] 的返回值。 |
| `rendererFactory` | 创建 [EntityRenderer] 实例的工厂函数。 |

</ApiMemberCard>
## registerEntityRenderer

<ApiMemberCard
  id="registerentityrenderer"
  name="registerEntityRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun <T : Entity> registerEntityRenderer(entityTypeId: String, rendererFactory: EntityRendererProvider<T>)
```

通过实体类型 ID 注册自定义实体渲染器。
这是一个便捷重载，会根据给定的 [entityTypeId] 从内置注册表中解析 [EntityType]。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entityTypeId` | 实体类型标识符，例如 "mymod:ghost"。 |
| `rendererFactory` | 创建 [EntityRenderer] 实例的工厂函数。 |

### 异常

| 异常 | 说明 |
| --- | --- |
| `IllegalStateException` | 当实体类型未注册时抛出。 |

</ApiMemberCard>

## registerEntityModelLayer

<ApiMemberCard
  id="registerentitymodellayer"
  name="registerEntityModelLayer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerEntityModelLayer(layer: ModelLayerLocation, definition: () -> LayerDefinition)
```

为实体模型渲染注册 [ModelLayerLocation] 及其对应的 [LayerDefinition]。
在 Minecraft 1.21.11+ 中，[net.minecraft.client.model.geom.EntityModelSet] 内部使用
ImmutableMap，因此通过这种方式注册的模型层无法再用 `context.bakeLayer()` 解析。
请改用 [getBakedModelPart] 获取预烘焙的 [ModelPart]，并直接传给模型构造器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `layer` | 模型层位置，例如 `ModelLayerLocation(id("mymod:ghost"), "main")`。 |
| `definition` | 创建层定义的工厂函数。 |

</ApiMemberCard>

## getBakedModelPart

<ApiMemberCard
  id="getbakedmodelpart"
  name="getBakedModelPart"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun getBakedModelPart(layer: ModelLayerLocation): ModelPart
```

返回通过 [registerEntityModelLayer] 注册的模型层所对应的预烘焙 [ModelPart]。
由于 Minecraft 1.21.11+ 的模型层使用 ImmutableMap 存储，`context.bakeLayer()`
无法解析动态注册的层，因此应改用这个方法直接获取烘焙后的根节点。

</ApiMemberCard>

## KeyframeEvent

<ApiMemberCard
  id="keyframeevent"
  name="KeyframeEvent"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class KeyframeEvent( val animName: String, val timeSeconds: Float, val action: (entity: Mob, model: EntityModel<*>, state: LivingEntityRenderState, bakedAnims: Map<String, KeyframeAnimation>) -> Unit )
```

一个带时间戳的回调，会在实体动画的特定时刻触发。
它按实体类型创建，并放在 [registerAnimatedEntityRenderer] 的 [keyframeEvents] 列表中。
回调会接收动画模型、实体、渲染状态和预烘焙动画；如需在骨骼位置获取 ExecutionContext，
可使用 [top.katton.api.createBoneExecution]。

### 属性

| 属性 | 说明 |
| --- | --- |
| `animName` | 与 [registerAnimatedEntityRenderer.animations] 中某个键对应的动画名称。 |
| `timeSeconds` | 从动画开始算起，回调触发的时间点（秒）。 |
| `action` | 回调函数（实体、模型、状态、预烘焙动画）。 |

</ApiMemberCard>

## registerAnimatedEntityRenderer

<ApiMemberCard
  id="registeranimatedentityrenderer"
  name="registerAnimatedEntityRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun <S : LivingEntityRenderState, M : EntityModel<S>> registerAnimatedEntityRenderer(entityTypeId: String, modelLayer: ModelLayerLocation, bodyLayer: () -> LayerDefinition, modelFactory: (ModelPart) -> M, texture: Identifier, renderStateFactory: () -> S = { @Suppress("UNCHECKED_CAST") (LivingEntityRenderState() as S) }, shadowRadius: Float = 0.5f, animations: Map<String, AnimationDefinition> = emptyMap(), animate: ((M, Mob, S, Map<String, KeyframeAnimation>) -> Unit)? = null, keyframeEvents: List<KeyframeEvent> = emptyList())
```

简化的实体渲染器注册接口，支持动画。
一次调用即可完成模型层、渲染器构造和动画绑定。
内部使用 Mob 作为实体类型，避免脚本重载期间出现 ClassCastException。
动画状态通过 [KattonBridge] 共享。

**实体侧** - 在 `tick()` 中发布动画状态：
```kotlin
KattonBridge["anim:$id:idle"] = idleAnimationState
KattonBridge["anim:$id:walk"] = walkAnimationState
```

**客户端侧** - 一次调用即可：
```kotlin
registerAnimatedEntityRenderer<Zombie1RenderState, Zombie1Model<Zombie1RenderState>>(
entityTypeId = "test:zombie1",
modelLayer = Zombie1Model.LAYER_LOCATION,
bodyLayer = { Zombie1Model.createBodyLayer() },
modelFactory = { root -> Zombie1Model(root) },
texture = id("test", "textures/entity/zombie1.png"),
renderStateFactory = { Zombie1RenderState() },
animations = mapOf(
"idle" to Zombie1Animation.idle,
"walk" to Zombie1Animation.walkforward
)
)
```

**自定义动画逻辑** - 传入 `animate` 回调即可。它会接收模型、实体、渲染状态
以及预烘焙动画映射：
```kotlin
animate = { model, entity, state, baked ->
model.resetPose()
// your custom logic...
baked["walk"]?.apply(walkAnimState, state.ageInTicks)
}
```

### 参数

| 参数 | 说明 |
| --- | --- |
| `animations` | 名称到 AnimationDefinition 的映射。默认逻辑会在移动时播放 "walk"，否则播放 "idle"。<br><br>名称到 AnimationDefinition 的映射。默认逻辑会在移动时播放 "walk"，否则播放 "idle"。<br>动画状态从 `KattonBridge["anim:&lt;entityId&gt;:&lt;name&gt;"]` 中读取。 |

</ApiMemberCard>
