---
title: ServerEntityEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEntityEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerEntityEvent.kt"
>
Fabric 平台的服务器实体生命周期事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEntityEvent&quot;,&quot;href&quot;:&quot;#serverentityevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onAfterEntityLoad&quot;,&quot;href&quot;:&quot;#serverentityevent-onafterentityload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEntityUnload&quot;,&quot;href&quot;:&quot;#serverentityevent-onentityunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEquipmentChange&quot;,&quot;href&quot;:&quot;#serverentityevent-onequipmentchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onAfterEntityChangeLevel&quot;,&quot;href&quot;:&quot;#serverentityevent-onafterentitychangelevel&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onAfterPlayerChangeLevel&quot;,&quot;href&quot;:&quot;#serverentityevent-onafterplayerchangelevel&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityEvent.onEndermanAnger&quot;,&quot;href&quot;:&quot;#serverentityevent-onendermananger&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerEntityEvent

<ApiMemberCard
  id="serverentityevent"
  name="ServerEntityEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object ServerEntityEvent
```

Fabric 平台的服务器实体生命周期事件。

该对象提供与实体生命周期相关的事件，包括
装载、卸载、设备变更以及世界/世界变更。

### ServerEntityEvent.onAfterEntityLoad

<ApiMemberCard
  id="serverentityevent-onafterentityload"
  name="ServerEntityEvent.onAfterEntityLoad"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterEntityLoad
```

实体加载到世界后触发的事件。

</ApiMemberCard>

### ServerEntityEvent.onEntityUnload

<ApiMemberCard
  id="serverentityevent-onentityunload"
  name="ServerEntityEvent.onEntityUnload"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onEntityUnload
```

当实体从世界中卸载时触发事件。

</ApiMemberCard>

### ServerEntityEvent.onEquipmentChange

<ApiMemberCard
  id="serverentityevent-onequipmentchange"
  name="ServerEntityEvent.onEquipmentChange"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
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
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterEntityChangeLevel
```

实体更改世界/维度后触发的事件。

</ApiMemberCard>

### ServerEntityEvent.onAfterPlayerChangeLevel

<ApiMemberCard
  id="serverentityevent-onafterplayerchangelevel"
  name="ServerEntityEvent.onAfterPlayerChangeLevel"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterPlayerChangeLevel
```

玩家更改世界/维度后触发的事件。

</ApiMemberCard>

### ServerEntityEvent.onEndermanAnger

<ApiMemberCard
  id="serverentityevent-onendermananger"
  name="ServerEntityEvent.onEndermanAnger"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onEndermanAnger
```

当末影人被玩家激怒时触发事件。
可以取消以防止愤怒。

</ApiMemberCard>

</ApiMemberCard>

