---
title: LivingUseItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="LivingUseItemEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/LivingUseItemEvent.kt"
>
Living entity use item events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LivingUseItemEvent&quot;,&quot;href&quot;:&quot;#livinguseitemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStart&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstart&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemTick&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStop&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstop&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemFinish&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemfinish&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LivingUseItemEvent

<ApiMemberCard
  id="livinguseitemevent"
  name="LivingUseItemEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

Living entity use item events for NeoForge platform.

This object provides events related to living entities using items including
start, tick, stop, and finish of item use.

### LivingUseItemEvent.onUseItemStart

<ApiMemberCard
  id="livinguseitemevent-onuseitemstart"
  name="LivingUseItemEvent.onUseItemStart"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemStart
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemTick
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemStop
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemFinish
```

Event triggered when a living entity finishes using an item.

</ApiMemberCard>

</ApiMemberCard>

