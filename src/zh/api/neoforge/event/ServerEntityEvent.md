---
title: ServerEntityEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEntityEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerEntityEvent.kt"
>
NeoForge 平台的服务器实体生命周期事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEntityEvent&quot;,&quot;href&quot;:&quot;#serverentityevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEntityLoad&quot;,&quot;href&quot;:&quot;#serverentityevent-onentityload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEntityUnload&quot;,&quot;href&quot;:&quot;#serverentityevent-onentityunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEquipmentChange&quot;,&quot;href&quot;:&quot;#serverentityevent-onequipmentchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onAfterEntityChangeLevel&quot;,&quot;href&quot;:&quot;#serverentityevent-onafterentitychangelevel&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onAfterPlayerChangeLevel&quot;,&quot;href&quot;:&quot;#serverentityevent-onafterplayerchangelevel&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEntityTeleport&quot;,&quot;href&quot;:&quot;#serverentityevent-onentityteleport&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEndermanAnger&quot;,&quot;href&quot;:&quot;#serverentityevent-onendermananger&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerEntityEvent

<ApiMemberCard
  id="serverentityevent"
  name="ServerEntityEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = top.katton.Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

NeoForge 平台的服务器实体生命周期事件。

该对象提供与实体生命周期相关的事件，包括
装载、卸载、装备更换、传送和末影人愤怒。

### ServerEntityEvent.onEntityLoad

<ApiMemberCard
  id="serverentityevent-onentityload"
  name="ServerEntityEvent.onEntityLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEntityLoad
```

当实体加入世界（服务器端）时触发的事件。
可以取消以防止实体加入。

</ApiMemberCard>

### ServerEntityEvent.onEntityUnload

<ApiMemberCard
  id="serverentityevent-onentityunload"
  name="ServerEntityEvent.onEntityUnload"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEntityUnload
```

当实体离开世界时触发事件。

</ApiMemberCard>

### ServerEntityEvent.onEquipmentChange

<ApiMemberCard
  id="serverentityevent-onequipmentchange"
  name="ServerEntityEvent.onEquipmentChange"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEquipmentChange
```

当实体的装备发生变化时触发事件。

</ApiMemberCard>

### ServerEntityEvent.onAfterEntityChangeLevel

<ApiMemberCard
  id="serverentityevent-onafterentitychangelevel"
  name="ServerEntityEvent.onAfterEntityChangeLevel"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterEntityChangeLevel
```

实体更改世界/维度后触发的事件。
注意：这是 NeoForge 兼容性的占位符。

</ApiMemberCard>

### ServerEntityEvent.onAfterPlayerChangeLevel

<ApiMemberCard
  id="serverentityevent-onafterplayerchangelevel"
  name="ServerEntityEvent.onAfterPlayerChangeLevel"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterPlayerChangeLevel
```

玩家更改世界/维度后触发的事件。
注意：这是 NeoForge 兼容性的占位符。

</ApiMemberCard>

### ServerEntityEvent.onEntityTeleport

<ApiMemberCard
  id="serverentityevent-onentityteleport"
  name="ServerEntityEvent.onEntityTeleport"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEntityTeleport
```

当实体传送时触发事件。
可以取消以防止传送。

</ApiMemberCard>

### ServerEntityEvent.onEndermanAnger

<ApiMemberCard
  id="serverentityevent-onendermananger"
  name="ServerEntityEvent.onEndermanAnger"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEndermanAnger
```

当末影人被玩家激怒时触发事件。
可以取消以防止愤怒。

</ApiMemberCard>

</ApiMemberCard>

