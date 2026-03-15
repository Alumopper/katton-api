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
Server entity lifecycle events for Fabric platform.
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

Server entity lifecycle events for Fabric platform.

This object provides events related to entity lifecycle including
loading, unloading, equipment changes, and level/world changes.

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

Event triggered after an entity is loaded into a world.

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

Event triggered when an entity is unloaded from a world.

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

Event triggered when an entity's equipment changes.

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

Event triggered after an entity changes levels/dimensions.

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

Event triggered after a player changes levels/dimensions.

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

Event triggered when an Enderman is angered by a player.
Can be cancelled to prevent the anger.

</ApiMemberCard>

</ApiMemberCard>

