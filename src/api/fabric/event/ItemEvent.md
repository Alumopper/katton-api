---
title: ItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="ItemEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ItemEvent.kt"
>
Item interaction events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemEvent&quot;,&quot;href&quot;:&quot;#itemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ItemEvent.onUseOn&quot;,&quot;href&quot;:&quot;#itemevent-onuseon&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ItemEvent.onUse&quot;,&quot;href&quot;:&quot;#itemevent-onuse&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ItemEvent

<ApiMemberCard
  id="itemevent"
  name="ItemEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ItemEvent
```

Item interaction events for Fabric platform.

This object provides events related to item usage and tossing.
Events are triggered when players interact with items in the world.

### ItemEvent.onUseOn

<ApiMemberCard
  id="itemevent-onuseon"
  name="ItemEvent.onUseOn"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUseOn
```

Event triggered when an item is used on a block (right-click on block).

### Returns

InteractionResult to control the interaction outcome.
Return a non-null value to override default behavior.

</ApiMemberCard>

### ItemEvent.onUse

<ApiMemberCard
  id="itemevent-onuse"
  name="ItemEvent.onUse"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUse
```

Event triggered when an item is used (right-click in air or on entity).

### Returns

InteractionResult to control the interaction outcome.
Return a non-null value to override default behavior.

</ApiMemberCard>

</ApiMemberCard>

