---
title: ServerEntityCombatEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEntityCombatEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerEntityCombatEvent.kt"
>
Server entity combat events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEntityCombatEvent&quot;,&quot;href&quot;:&quot;#serverentitycombatevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onAfterKilledOtherEntity&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-onafterkilledotherentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onShieldBlock&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-onshieldblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerEntityCombatEvent

<ApiMemberCard
  id="serverentitycombatevent"
  name="ServerEntityCombatEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ServerEntityCombatEvent
```

Server entity combat events for Fabric platform.

This object provides events related to entity combat including
entity kills, critical hits, and shield blocking.

### ServerEntityCombatEvent.onAfterKilledOtherEntity

<ApiMemberCard
  id="serverentitycombatevent-onafterkilledotherentity"
  name="ServerEntityCombatEvent.onAfterKilledOtherEntity"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterKilledOtherEntity
```

Event triggered after an entity kills another entity.
This is a notification event that cannot be cancelled.

</ApiMemberCard>

### ServerEntityCombatEvent.onShieldBlock

<ApiMemberCard
  id="serverentitycombatevent-onshieldblock"
  name="ServerEntityCombatEvent.onShieldBlock"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onShieldBlock
```

Event triggered when an entity blocks with a shield.
Can be used to modify the amount of damage blocked.

### Returns

The amount of damage that should be blocked.

</ApiMemberCard>

</ApiMemberCard>

