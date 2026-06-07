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
为脚本注册的实体类型注册自定义实体渲染器。
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

这是 [registerNativeEntity] 的客户端对应项。之后
用 [registerNativeEntity] 注册一个实体类型，在
客户端为您的实体提供视觉外观。

[rendererFactory]收到一个[EntityRendererProvider.Context]，其中
提供对实体渲染调度程序、物品渲染器、资源的访问
管理器和实体模型集 - 构建标准所需的一切
[EntityRenderer]。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entityType` | 实体类型（从[registerNativeEntity]的返回值获得） |
| `rendererFactory` | 创建 [EntityRenderer] 实例的工厂 |

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

按实体类型 ID 注册自定义实体渲染器。

方便的重载解决了内置的 [EntityType]
使用给定的 [entityTypeId] 进行注册表。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entityTypeId` | 实体类型标识符（例如，`"mymod:ghost"`） |
| `rendererFactory` | 创建 [EntityRenderer] 实例的工厂 |

### 异常

| 异常 | 说明 |
| --- | --- |
| `IllegalStateException` | 如果实体类型未注册 |

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

注册一个[ModelLayerLocation]及其[LayerDefinition]用于实体模型渲染。

在 Minecraft 1.21.11+ 中，[net.minecraft.client.model.geom.EntityModelSet] 使用
内部ImmutableMap，因此无法解析以这种方式注册的模型层
通过`context.bakeLayer()`。相反，使用 [getBakedModelPart] 来检索
预烘焙 [ModelPart] 并将其直接传递给您的模型构造函数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `layer` | 模型层位置（例如，`ModelLayerLocation(id("mymod:ghost"), "main")`） |
| `definition` | 创建层定义的工厂 |

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

返回注册模型层的预烘焙 [ModelPart]
[registerEntityModelLayer]。

由于 Minecraft 1.21.11+ 使用 ImmutableMap 作为模型层，
`context.bakeLayer()` 无法解析动态注册的图层。
使用此函数可以直接获取烘焙后的根。

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

在实体动画期间的特定点触发的带时间戳的回调。

在 [registerAnimatedEntityRenderer] 的 [keyframeEvents] 列表中创建了每个实体类型。
回调接收动画模型、实体、渲染状态和预烘焙动画 -
使用 [top.katton.api.createBoneExecution] 在骨骼位置获得 ExecutionContext。

### 属性

| 属性 | 说明 |
| --- | --- |
| `animName` | 与[registerAnimatedEntityRenderer.animations]中的关键点匹配的动画名称 |
| `timeSeconds` | 从动画开始到回调应该触发的时间（以秒为单位） |
| `action` | 回调（实体、模型、状态、烘焙动画） |

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

通过动画支持简化实体渲染器注册。

一次调用即可处理模型层、渲染器构造和动画连线。
在内部使用 [Mob] 作为实体类型以避免 ClassCastException 交叉
脚本重载。动画状态通过[KattonBridge]共享。

**实体端** — 在 `tick()` 中发布动画状态：
```kotlin
KattonBridge["anim:$id:idle"] = idleAnimationState
KattonBridge["anim:$id:walk"] = walkAnimationState
```

**客户端** — 一次调用：
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

**自定义动画逻辑** — 传递 `animate` 回调。它接收
模型、实体、渲染状态和预烘焙动画的地图：
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
| `animations` | 名称地图 → AnimationDefinition。默认逻辑在移动时播放<br>"walk"，否则播放"idle"。动画状态从<br>KattonBridge["anim:&lt;entityId&gt;:&lt;name&gt;"]读取。 |

</ApiMemberCard>
