---
title: ServerLivingEntityEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerLivingEntityEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerLivingEntityEvent.kt"
>
Server-side living entity events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerLivingEntityEvent&quot;,&quot;href&quot;:&quot;#serverlivingentityevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingHurt&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivinghurt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAllowDamage&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onallowdamage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAfterDamage&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onafterdamage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAllowDeath&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onallowdeath&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAfterDeath&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onafterdeath&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingFall&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivingfall&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onMobConversion&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onmobconversion&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerLivingEntityEvent

<ApiMemberCard
  id="serverlivingentityevent"
  name="ServerLivingEntityEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ServerLivingEntityEvent
```

Server-side living entity events for Fabric platform.

This object provides events related to living entity lifecycle including
damage, death, and mob conversion events.

### ServerLivingEntityEvent.onLivingHurt

<ApiMemberCard
  id="serverlivingentityevent-onlivinghurt"
  name="ServerLivingEntityEvent.onLivingHurt"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onLivingHurt
```

Event triggered when a living entity is hurt.
Can be cancelled to prevent the damage.

</ApiMemberCard>

### ServerLivingEntityEvent.onAllowDamage

<ApiMemberCard
  id="serverlivingentityevent-onallowdamage"
  name="ServerLivingEntityEvent.onAllowDamage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowDamage
```

Event triggered to allow or deny damage to a living entity.

### Returns

true to allow the damage, false to cancel it.

</ApiMemberCard>

### ServerLivingEntityEvent.onAfterDamage

<ApiMemberCard
  id="serverlivingentityevent-onafterdamage"
  name="ServerLivingEntityEvent.onAfterDamage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterDamage
```

Event triggered after a living entity takes damage.

</ApiMemberCard>

### ServerLivingEntityEvent.onAllowDeath

<ApiMemberCard
  id="serverlivingentityevent-onallowdeath"
  name="ServerLivingEntityEvent.onAllowDeath"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowDeath
```

Event triggered to allow or deny death of a living entity.

### Returns

true to allow the death, false to cancel it.

</ApiMemberCard>

### ServerLivingEntityEvent.onAfterDeath

<ApiMemberCard
  id="serverlivingentityevent-onafterdeath"
  name="ServerLivingEntityEvent.onAfterDeath"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterDeath
```

Event triggered after a living entity dies.

</ApiMemberCard>

### ServerLivingEntityEvent.onLivingFall

<ApiMemberCard
  id="serverlivingentityevent-onlivingfall"
  name="ServerLivingEntityEvent.onLivingFall"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onLivingFall
```

Event triggered when a living entity falls.
Can be cancelled to prevent fall damage processing.

</ApiMemberCard>

### ServerLivingEntityEvent.onMobConversion

<ApiMemberCard
  id="serverlivingentityevent-onmobconversion"
  name="ServerLivingEntityEvent.onMobConversion"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onMobConversion
```

Event triggered when a mob is converted to another type
(e.g., zombie villager curing, piglin zombification).

</ApiMemberCard>

</ApiMemberCard>

