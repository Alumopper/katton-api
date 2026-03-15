---
title: LivingUseItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="LivingUseItemEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/LivingUseItemEvent.kt"
>
Living entity use item events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LivingUseItemEvent&quot;,&quot;href&quot;:&quot;#livinguseitemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStart&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstart&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemTick&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStop&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstop&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemFinish&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemfinish&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LivingUseItemEvent

<ApiMemberCard
  id="livinguseitemevent"
  name="LivingUseItemEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object LivingUseItemEvent
```

Living entity use item events for Fabric platform.

This object provides events related to living entities using items.
Note: These events are placeholders for NeoForge compatibility as
Fabric does not have direct equivalents for all item use events.

### LivingUseItemEvent.onUseItemStart

<ApiMemberCard
  id="livinguseitemevent-onuseitemstart"
  name="LivingUseItemEvent.onUseItemStart"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemStart
```

Event triggered when a living entity starts using an item.
Can be cancelled to prevent item use.

</ApiMemberCard>

### LivingUseItemEvent.onUseItemTick

<ApiMemberCard
  id="livinguseitemevent-onuseitemtick"
  name="LivingUseItemEvent.onUseItemTick"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemTick
```

Event triggered each tick while a living entity is using an item.
Can be cancelled to stop item use.

</ApiMemberCard>

### LivingUseItemEvent.onUseItemStop

<ApiMemberCard
  id="livinguseitemevent-onuseitemstop"
  name="LivingUseItemEvent.onUseItemStop"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemStop
```

Event triggered when a living entity stops using an item.
Can be cancelled to continue item use.

</ApiMemberCard>

### LivingUseItemEvent.onUseItemFinish

<ApiMemberCard
  id="livinguseitemevent-onuseitemfinish"
  name="LivingUseItemEvent.onUseItemFinish"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemFinish
```

Event triggered when a living entity finishes using an item.

</ApiMemberCard>

</ApiMemberCard>

