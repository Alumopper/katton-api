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
Registers a custom entity renderer for a script-registered entity type.
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

Registers a custom entity renderer for a script-registered entity type.

This is the client-side counterpart to [registerNativeEntity]. After
registering an entity type with [registerNativeEntity], call this on the
client to give your entity a visual appearance.

The [rendererFactory] receives an [EntityRendererProvider.Context], which
provides access to the entity render dispatcher, item renderer, resource
manager, and entity model set — everything you need to construct a standard
[EntityRenderer].

### Parameters

| Parameter | Description |
| --- | --- |
| `entityType` | the entity type (obtained from [registerNativeEntity]'s return value) |
| `rendererFactory` | factory that creates the [EntityRenderer] instance |

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

Registers a custom entity renderer by entity type ID.

Convenience overload that resolves the [EntityType] from the built-in
registry using the given [entityTypeId].

### Parameters

| Parameter | Description |
| --- | --- |
| `entityTypeId` | the entity type identifier (e.g., `"mymod:ghost"`) |
| `rendererFactory` | factory that creates the [EntityRenderer] instance |

### Throws

| Exception | Description |
| --- | --- |
| `IllegalStateException` | if the entity type is not registered |

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

Registers a [ModelLayerLocation] and its [LayerDefinition] for entity model rendering.

In Minecraft 1.21.11+, [net.minecraft.client.model.geom.EntityModelSet] uses an
ImmutableMap internally, so model layers registered this way cannot be resolved
via `context.bakeLayer()`. Instead, use [getBakedModelPart] to retrieve the
pre-baked [ModelPart] and pass it directly to your model constructor.

### Parameters

| Parameter | Description |
| --- | --- |
| `layer` | the model layer location (e.g., `ModelLayerLocation(id("mymod:ghost"), "main")`) |
| `definition` | factory that creates the layer definition |

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

Returns the pre-baked [ModelPart] for a model layer registered with
[registerEntityModelLayer].

Since Minecraft 1.21.11+ uses an ImmutableMap for model layers,
`context.bakeLayer()` cannot resolve dynamically registered layers.
Use this function instead to obtain the baked root directly.

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

A time-stamped callback that fires at a specific point during an entity animation.

Created per-entity-type in [registerAnimatedEntityRenderer]'s [keyframeEvents] list.
The callback receives the animated model, entity, render state, and pre-baked animations —
use [top.katton.api.createBoneExecution] to get an ExecutionContext at a bone position.

### Properties

| Property | Description |
| --- | --- |
| `animName` | the animation name matching a key in [registerAnimatedEntityRenderer.animations] |
| `timeSeconds` | time in seconds from animation start when the callback should fire |
| `action` | the callback (entity, model, state, baked animations) |

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

Simplified entity renderer registration with animation support.

One call handles model layer, renderer construction, and animation wiring.
Uses [Mob] as entity type internally to avoid ClassCastException across
script reloads. Animation state is shared through [KattonBridge].

**Entity side** — publish animation states in `tick()`:
```kotlin
KattonBridge["anim:$id:idle"] = idleAnimationState
KattonBridge["anim:$id:walk"] = walkAnimationState
```

**Client side** — one call:
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

**Custom animation logic** — pass an `animate` callback. It receives
the model, entity, render state, and a map of pre-baked animations:
```kotlin
animate = { model, entity, state, baked ->
model.resetPose()
// your custom logic...
baked["walk"]?.apply(walkAnimState, state.ageInTicks)
}
```

### Parameters

| Parameter | Description |
| --- | --- |
| `animations` | map of name → AnimationDefinition. Default logic plays<br>"walk" when moving and "idle" otherwise. Animation states are read from<br>KattonBridge["anim:<entityId>:<name>"]. |

</ApiMemberCard>

