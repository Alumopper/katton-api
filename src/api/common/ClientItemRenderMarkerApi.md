---
title: ClientItemRenderMarkerApi
outline: [2, 2]
---

<ApiDocPage
  title="ClientItemRenderMarkerApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ClientItemRenderMarkerApi.kt"
>
A lightweight client-side item model rendered directly in the world.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ClientItemRenderMarker&quot;,&quot;href&quot;:&quot;#clientitemrendermarker&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;itemRenderMarker&quot;,&quot;href&quot;:&quot;#itemrendermarker&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;showItemRenderMarker&quot;,&quot;href&quot;:&quot;#showitemrendermarker&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;showItemRenderMarker&quot;,&quot;href&quot;:&quot;#showitemrendermarker&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;showItemRenderMarker&quot;,&quot;href&quot;:&quot;#showitemrendermarker&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeItemRenderMarker&quot;,&quot;href&quot;:&quot;#removeitemrendermarker&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeItemRenderMarker&quot;,&quot;href&quot;:&quot;#removeitemrendermarker&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearItemRenderMarkers&quot;,&quot;href&quot;:&quot;#clearitemrendermarkers&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearItemRenderMarkers&quot;,&quot;href&quot;:&quot;#clearitemrendermarkers&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playItemRenderAnimationSet&quot;,&quot;href&quot;:&quot;#playitemrenderanimationset&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;stopItemRenderAnimationSet&quot;,&quot;href&quot;:&quot;#stopitemrenderanimationset&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playItemRenderAnimationSet&quot;,&quot;href&quot;:&quot;#playitemrenderanimationset&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;stopItemRenderAnimationSet&quot;,&quot;href&quot;:&quot;#stopitemrenderanimationset&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearItemRenderMarkersInRange&quot;,&quot;href&quot;:&quot;#clearitemrendermarkersinrange&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## ClientItemRenderMarker

<ApiMemberCard
  id="clientitemrendermarker"
  name="ClientItemRenderMarker"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientItemRenderMarker( val id: UUID, val level: ResourceKey<Level>, val pos: Vec3, val stack: ItemStack, val displayContext: ItemDisplayContext
```

A lightweight client-side item model rendered directly in the world.

It has no server entity, collision, selector target, persistence, or vanilla
entity sync. The server only sends this marker to clients that should see it.

</ApiMemberCard>

## itemRenderMarker

<ApiMemberCard
  id="itemrendermarker"
  name="itemRenderMarker"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun itemRenderMarker(level: ResourceKey<Level>, pos: Vec3, stack: ItemStack, displayContext: ItemDisplayContext = ItemDisplayContext.GROUND, scale: Float = 1.0f, yaw: Float = 0.0f, pitch: Float = 0.0f, roll: Float = 0.0f, fullBright: Boolean = false, maxDistance: Double = 64.0, lifetimeTicks: Int = -1, animations: Map<String, ClientItemRenderAnimationSetBuilder.() -> Unit> = emptyMap(), playingAnimationID: List<String> = emptyList(), id: UUID = UUID.randomUUID()): ClientItemRenderMarker
```

Build a [ClientItemRenderMarker] with a generated id.

</ApiMemberCard>

## showItemRenderMarker

<ApiMemberCard
  id="showitemrendermarker"
  name="showItemRenderMarker"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun showItemRenderMarker(marker: ClientItemRenderMarker): UUID
```

Add or update a client-side item marker for every connected player.

Returns the marker id so scripts can later remove or update it.

</ApiMemberCard>

## showItemRenderMarker

<ApiMemberCard
  id="showitemrendermarker"
  name="showItemRenderMarker"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun showItemRenderMarker(player: ServerPlayer, marker: ClientItemRenderMarker): UUID
```

Add or update a client-side item marker for one player.

</ApiMemberCard>

## showItemRenderMarker

<ApiMemberCard
  id="showitemrendermarker"
  name="showItemRenderMarker"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun showItemRenderMarker(player: ServerPlayer, stack: ItemStack, x: Double, y: Double, z: Double, level: ResourceKey<Level> = player.level().dimension(), displayContext: ItemDisplayContext = ItemDisplayContext.GROUND, scale: Float = 1.0f, yaw: Float = 0.0f, pitch: Float = 0.0f, roll: Float = 0.0f, fullBright: Boolean = false, maxDistance: Double = 64.0, lifetimeTicks: Int = -1, animations: Map<String, ClientItemRenderAnimationSetBuilder.() -> Unit> = emptyMap(), playingAnimationID: List<String> = emptyList(), id: UUID = UUID.randomUUID()): UUID
```

Convenience overload for one player using raw coordinates.

</ApiMemberCard>

## removeItemRenderMarker

<ApiMemberCard
  id="removeitemrendermarker"
  name="removeItemRenderMarker"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeItemRenderMarker(id: UUID)
```

Remove a client-side item marker from every connected player.

</ApiMemberCard>

## removeItemRenderMarker

<ApiMemberCard
  id="removeitemrendermarker"
  name="removeItemRenderMarker"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeItemRenderMarker(player: ServerPlayer, id: UUID)
```

Remove a client-side item marker from one player.

</ApiMemberCard>

## clearItemRenderMarkers

<ApiMemberCard
  id="clearitemrendermarkers"
  name="clearItemRenderMarkers"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearItemRenderMarkers()
```

Clear all client-side item markers from every connected player.

</ApiMemberCard>

## clearItemRenderMarkers

<ApiMemberCard
  id="clearitemrendermarkers"
  name="clearItemRenderMarkers"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearItemRenderMarkers(player: ServerPlayer)
```

Clear all client-side item markers from one player.

</ApiMemberCard>

## playItemRenderAnimationSet

<ApiMemberCard
  id="playitemrenderanimationset"
  name="playItemRenderAnimationSet"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playItemRenderAnimationSet(id: UUID, animationSetId: String)
```

Start playing one animation set on a tracked marker for every viewer that
originally received it. Playback starts from the beginning on the client.

</ApiMemberCard>

## stopItemRenderAnimationSet

<ApiMemberCard
  id="stopitemrenderanimationset"
  name="stopItemRenderAnimationSet"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun stopItemRenderAnimationSet(id: UUID, animationSetId: String)
```

Stop playing one animation set on a tracked marker for every viewer that
originally received it.

</ApiMemberCard>

## playItemRenderAnimationSet

<ApiMemberCard
  id="playitemrenderanimationset"
  name="playItemRenderAnimationSet"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playItemRenderAnimationSet(player: ServerPlayer, id: UUID, animationSetId: String)
```

Start playing one animation set for a single player. This is intentionally
per-viewer and does not mutate the server-side tracked marker state.

</ApiMemberCard>

## stopItemRenderAnimationSet

<ApiMemberCard
  id="stopitemrenderanimationset"
  name="stopItemRenderAnimationSet"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun stopItemRenderAnimationSet(player: ServerPlayer, id: UUID, animationSetId: String)
```

Stop playing one animation set for a single player. This is intentionally
per-viewer and does not mutate the server-side tracked marker state.

</ApiMemberCard>

## clearItemRenderMarkersInRange

<ApiMemberCard
  id="clearitemrendermarkersinrange"
  name="clearItemRenderMarkersInRange"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearItemRenderMarkersInRange(level: ResourceKey<Level>, center: Vec3, radius: Double): Int
```

Clear tracked item markers in [radius] blocks around [center] and notify
the clients that were originally sent those markers.

</ApiMemberCard>

