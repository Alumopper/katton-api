---
title: LivingBehaviorEvent
outline: [2, 2]
---

<ApiDocPage
  title="LivingBehaviorEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/LivingBehaviorEvent.kt"
>
Living entity behavior events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LivingBehaviorEvent&quot;,&quot;href&quot;:&quot;#livingbehaviorevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onElytraAllow&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onelytraallow&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onElytraCustom&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onelytracustom&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowSleeping&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowsleeping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onStartSleeping&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onstartsleeping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onStopSleeping&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onstopsleeping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowBed&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowbed&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowNearbyMonsters&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallownearbymonsters&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowResettingTime&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowresettingtime&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onModifySleepingDirection&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onmodifysleepingdirection&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowSettingSpawn&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowsettingspawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onSetBedOccupationState&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onsetbedoccupationstate&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onModifyWakeUpPosition&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onmodifywakeupposition&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onPlayerWakeUp&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onplayerwakeup&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LivingBehaviorEvent

<ApiMemberCard
  id="livingbehaviorevent"
  name="LivingBehaviorEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object LivingBehaviorEvent
```

Living entity behavior events for Fabric platform.

This object provides events related to living entity behaviors including
elytra flight, sleeping, animal taming, and baby spawning.

### LivingBehaviorEvent.onElytraAllow

<ApiMemberCard
  id="livingbehaviorevent-onelytraallow"
  name="LivingBehaviorEvent.onElytraAllow"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onElytraAllow
```

Event triggered to check if an entity is allowed to use elytra.

### Returns

true to allow elytra usage, false to deny.

</ApiMemberCard>

### LivingBehaviorEvent.onElytraCustom

<ApiMemberCard
  id="livingbehaviorevent-onelytracustom"
  name="LivingBehaviorEvent.onElytraCustom"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onElytraCustom
```

Event triggered to provide custom elytra flight behavior.

### Returns

true if custom behavior is applied, false to use default.

</ApiMemberCard>

### LivingBehaviorEvent.onAllowSleeping

<ApiMemberCard
  id="livingbehaviorevent-onallowsleeping"
  name="LivingBehaviorEvent.onAllowSleeping"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowSleeping
```

Event triggered to check if a player is allowed to sleep.

### Returns

BedSleepingProblem if sleep is denied, null to allow.

</ApiMemberCard>

### LivingBehaviorEvent.onStartSleeping

<ApiMemberCard
  id="livingbehaviorevent-onstartsleeping"
  name="LivingBehaviorEvent.onStartSleeping"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onStartSleeping
```

Event triggered when a player starts sleeping.

</ApiMemberCard>

### LivingBehaviorEvent.onStopSleeping

<ApiMemberCard
  id="livingbehaviorevent-onstopsleeping"
  name="LivingBehaviorEvent.onStopSleeping"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onStopSleeping
```

Event triggered when a player stops sleeping.

</ApiMemberCard>

### LivingBehaviorEvent.onAllowBed

<ApiMemberCard
  id="livingbehaviorevent-onallowbed"
  name="LivingBehaviorEvent.onAllowBed"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowBed
```

Event triggered to check if a player is allowed to use a bed.

### Returns

EventResult indicating the result of the check.

</ApiMemberCard>

### LivingBehaviorEvent.onAllowNearbyMonsters

<ApiMemberCard
  id="livingbehaviorevent-onallownearbymonsters"
  name="LivingBehaviorEvent.onAllowNearbyMonsters"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowNearbyMonsters
```

Event triggered to check if nearby monsters prevent sleeping.

### Returns

EventResult indicating whether monsters should prevent sleep.

</ApiMemberCard>

### LivingBehaviorEvent.onAllowResettingTime

<ApiMemberCard
  id="livingbehaviorevent-onallowresettingtime"
  name="LivingBehaviorEvent.onAllowResettingTime"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowResettingTime
```

Event triggered to check if time should reset after sleeping.

### Returns

true to allow time reset, false to prevent it.

</ApiMemberCard>

### LivingBehaviorEvent.onModifySleepingDirection

<ApiMemberCard
  id="livingbehaviorevent-onmodifysleepingdirection"
  name="LivingBehaviorEvent.onModifySleepingDirection"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onModifySleepingDirection
```

Event triggered to modify the sleeping direction when entering a bed.

### Returns

The modified direction for the player to face.

</ApiMemberCard>

### LivingBehaviorEvent.onAllowSettingSpawn

<ApiMemberCard
  id="livingbehaviorevent-onallowsettingspawn"
  name="LivingBehaviorEvent.onAllowSettingSpawn"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowSettingSpawn
```

Event triggered to check if spawn point should be set when sleeping.

### Returns

true to allow setting spawn, false to prevent it.

</ApiMemberCard>

### LivingBehaviorEvent.onSetBedOccupationState

<ApiMemberCard
  id="livingbehaviorevent-onsetbedoccupationstate"
  name="LivingBehaviorEvent.onSetBedOccupationState"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onSetBedOccupationState
```

Event triggered to set the bed occupation state.

### Returns

true if the state was handled, false for default behavior.

</ApiMemberCard>

### LivingBehaviorEvent.onModifyWakeUpPosition

<ApiMemberCard
  id="livingbehaviorevent-onmodifywakeupposition"
  name="LivingBehaviorEvent.onModifyWakeUpPosition"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onModifyWakeUpPosition
```

Event triggered to modify the player's wake-up position.

### Returns

The modified Vec3 wake-up position.

</ApiMemberCard>

### LivingBehaviorEvent.onPlayerWakeUp

<ApiMemberCard
  id="livingbehaviorevent-onplayerwakeup"
  name="LivingBehaviorEvent.onPlayerWakeUp"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onPlayerWakeUp
```

Event triggered when a player wakes up from sleeping.

</ApiMemberCard>

</ApiMemberCard>

