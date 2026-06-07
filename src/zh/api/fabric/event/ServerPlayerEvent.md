---
title: ServerPlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerPlayerEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerPlayerEvent.kt"
>
Fabric平台的服务器玩家事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerPlayerEvent&quot;,&quot;href&quot;:&quot;#serverplayerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerJoin&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerjoin&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerLeave&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerleave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onAfterPlayerRespawn&quot;,&quot;href&quot;:&quot;#serverplayerevent-onafterplayerrespawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerCopy&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayercopy&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxpchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpLevelChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxplevelchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerPickupXp&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerpickupxp&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromBlock&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromEntity&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerPlayerEvent

<ApiMemberCard
  id="serverplayerevent"
  name="ServerPlayerEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ServerPlayerEvent
```

Fabric平台的服务器玩家事件。

该对象提供与服务器玩家生命周期相关的事件，包括
加入/离开/重生、XP事件和物品拾取事件。

### ServerPlayerEvent.onPlayerJoin

<ApiMemberCard
  id="serverplayerevent-onplayerjoin"
  name="ServerPlayerEvent.onPlayerJoin"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onPlayerJoin
```

当玩家加入服务器时触发的事件。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerLeave

<ApiMemberCard
  id="serverplayerevent-onplayerleave"
  name="ServerPlayerEvent.onPlayerLeave"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onPlayerLeave
```

当玩家离开服务器时触发的事件。

</ApiMemberCard>

### ServerPlayerEvent.onAfterPlayerRespawn

<ApiMemberCard
  id="serverplayerevent-onafterplayerrespawn"
  name="ServerPlayerEvent.onAfterPlayerRespawn"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterPlayerRespawn
```

玩家重生后触发的事件。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerCopy

<ApiMemberCard
  id="serverplayerevent-onplayercopy"
  name="ServerPlayerEvent.onPlayerCopy"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onPlayerCopy
```

复制玩家数据时触发的事件（例如，重生或尺寸更改时）。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpChange

<ApiMemberCard
  id="serverplayerevent-onplayerxpchange"
  name="ServerPlayerEvent.onPlayerXpChange"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onPlayerXpChange
```

当玩家的XP发生变化时触发事件。
可以取消以防止更改。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpLevelChange

<ApiMemberCard
  id="serverplayerevent-onplayerxplevelchange"
  name="ServerPlayerEvent.onPlayerXpLevelChange"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onPlayerXpLevelChange
```

当玩家的XP等级发生变化时触发事件。
可以取消以防止更改。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerPickupXp

<ApiMemberCard
  id="serverplayerevent-onplayerpickupxp"
  name="ServerPlayerEvent.onPlayerPickupXp"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onPlayerPickupXp
```

当玩家拾取 XP 球体时触发事件。
可以取消以防止取货。

</ApiMemberCard>

### ServerPlayerEvent.onPickFromBlock

<ApiMemberCard
  id="serverplayerevent-onpickfromblock"
  name="ServerPlayerEvent.onPickFromBlock"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onPickFromBlock
```

当玩家从块中选取一个物品（中键单击）时触发事件。

### 返回值

要选取的 ItemStack，或默认行为为 null。

</ApiMemberCard>

### ServerPlayerEvent.onPickFromEntity

<ApiMemberCard
  id="serverplayerevent-onpickfromentity"
  name="ServerPlayerEvent.onPickFromEntity"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onPickFromEntity
```

当玩家从实体中选取物品（中键单击）时触发事件。

### 返回值

要选取的 ItemStack，或默认行为为 null。

</ApiMemberCard>

</ApiMemberCard>

