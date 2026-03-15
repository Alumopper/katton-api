---
title: PlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="PlayerEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/PlayerEvent.kt"
>
Player interaction events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;PlayerEvent&quot;,&quot;href&quot;:&quot;#playerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onUseItemOn&quot;,&quot;href&quot;:&quot;#playerevent-onuseitemon&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onUseWithoutItem&quot;,&quot;href&quot;:&quot;#playerevent-onusewithoutitem&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onAttackBlock&quot;,&quot;href&quot;:&quot;#playerevent-onattackblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onAttackEntity&quot;,&quot;href&quot;:&quot;#playerevent-onattackentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onBlockInteract&quot;,&quot;href&quot;:&quot;#playerevent-onblockinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onEntityInteract&quot;,&quot;href&quot;:&quot;#playerevent-onentityinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onItemInteract&quot;,&quot;href&quot;:&quot;#playerevent-oniteminteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onDestroyItem&quot;,&quot;href&quot;:&quot;#playerevent-ondestroyitem&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## PlayerEvent

<ApiMemberCard
  id="playerevent"
  name="PlayerEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object PlayerEvent
```

Player interaction events for Fabric platform.

This object provides events related to player interactions including
attacking blocks/entities, using items, and interacting with blocks/entities.

### PlayerEvent.onUseItemOn

<ApiMemberCard
  id="playerevent-onuseitemon"
  name="PlayerEvent.onUseItemOn"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUseItemOn
```

Event triggered when a player uses an item on a block.

### Returns

InteractionResult.PASS to allow default behavior, or other result to override.

</ApiMemberCard>

### PlayerEvent.onUseWithoutItem

<ApiMemberCard
  id="playerevent-onusewithoutitem"
  name="PlayerEvent.onUseWithoutItem"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUseWithoutItem
```

Event triggered when a player interacts with a block without holding an item.

### Returns

InteractionResult.PASS to allow default behavior, or other result to override.

</ApiMemberCard>

### PlayerEvent.onAttackBlock

<ApiMemberCard
  id="playerevent-onattackblock"
  name="PlayerEvent.onAttackBlock"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAttackBlock
```

Event triggered when a player attacks (left-clicks) a block.

### Returns

InteractionResult.PASS to allow default behavior, or other result to cancel/override.

</ApiMemberCard>

### PlayerEvent.onAttackEntity

<ApiMemberCard
  id="playerevent-onattackentity"
  name="PlayerEvent.onAttackEntity"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAttackEntity
```

Event triggered when a player attacks (left-clicks) an entity.

### Returns

InteractionResult.PASS to allow default behavior, or other result to cancel/override.

</ApiMemberCard>

### PlayerEvent.onBlockInteract

<ApiMemberCard
  id="playerevent-onblockinteract"
  name="PlayerEvent.onBlockInteract"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBlockInteract
```

Event triggered when a player interacts (right-clicks) with a block.

### Returns

InteractionResult.PASS to allow default behavior, or other result to override.

</ApiMemberCard>

### PlayerEvent.onEntityInteract

<ApiMemberCard
  id="playerevent-onentityinteract"
  name="PlayerEvent.onEntityInteract"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onEntityInteract
```

Event triggered when a player interacts (right-clicks) with an entity.

### Returns

InteractionResult.PASS to allow default behavior, or other result to override.

</ApiMemberCard>

### PlayerEvent.onItemInteract

<ApiMemberCard
  id="playerevent-oniteminteract"
  name="PlayerEvent.onItemInteract"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onItemInteract
```

Event triggered when a player uses (right-clicks) an item.

### Returns

InteractionResult.PASS to allow default behavior, or other result to override.

</ApiMemberCard>

### PlayerEvent.onDestroyItem

<ApiMemberCard
  id="playerevent-ondestroyitem"
  name="PlayerEvent.onDestroyItem"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onDestroyItem
```

Event triggered when a player's item is destroyed (e.g., tool breaking).

</ApiMemberCard>

</ApiMemberCard>

