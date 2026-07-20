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
NeoForge 平台的服务端实体生命周期事件。 此对象提供与实体生命周期相关的事件，包括加载、卸载、装备变化、传送和末影人愤怒。
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

NeoForge 平台的服务端实体生命周期事件。
此对象提供与实体生命周期相关的事件，包括加载、卸载、装备变化、传送和末影人愤怒。

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

当实体加入某个维度（服务端）时触发。
可取消以阻止实体加入。

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

当实体离开某个维度时触发。

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

当实体的装备发生变化时触发。

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

当实体切换维度/世界后触发。
这是为了 NeoForge API 兼容性保留的占位事件。

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

当玩家切换维度/世界后触发。
这是为了 NeoForge API 兼容性保留的占位事件。

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

当实体传送时触发。
可取消以阻止传送。

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

当末影人被玩家激怒时触发。
可取消以阻止激怒。

</ApiMemberCard>

</ApiMemberCard>

