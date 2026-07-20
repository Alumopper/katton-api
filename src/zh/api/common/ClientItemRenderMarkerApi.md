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
直接在世界中渲染的轻量级客户端物品模型。
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

直接在世界中渲染的轻量级客户端物品模型。

它没有服务端实体、碰撞、选择器目标、持久化或原版实体同步。
服务端只会把这个标记发送给需要看到它的客户端。

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

使用生成的 id 构建一个 [ClientItemRenderMarker]。

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

为所有已连接玩家添加或更新一个客户端物品标记。

返回标记 id，方便脚本后续移除或更新它。

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

为单个玩家添加或更新一个客户端物品标记。

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

使用原始坐标为单个玩家创建标记的便捷重载。

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

从所有已连接玩家的客户端移除一个物品标记。

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

从单个玩家的客户端移除一个物品标记。

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

从所有已连接玩家的客户端清除全部物品标记。

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

从单个玩家的客户端清除全部物品标记。

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

在最初收到该标记的所有查看者客户端上播放一个动画集。
播放会从客户端的起点重新开始。

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

在最初收到该标记的所有查看者客户端上停止播放一个动画集。

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

只为单个玩家播放一个动画集。此操作按查看者单独生效，
不会修改服务端记录的标记状态。

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

只为单个玩家停止播放一个动画集。此操作按查看者单独生效，
不会修改服务端记录的标记状态。

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

清除 [center] 周围 [radius] 个方块内记录的物品标记，
并通知最初收到这些标记的客户端。

</ApiMemberCard>

