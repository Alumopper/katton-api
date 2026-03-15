---
title: PlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="PlayerEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/PlayerEvent.kt"
>
Player interaction events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;PlayerEvent&quot;,&quot;href&quot;:&quot;#playerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onAttackEntity&quot;,&quot;href&quot;:&quot;#playerevent-onattackentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onEntityInteract&quot;,&quot;href&quot;:&quot;#playerevent-onentityinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onBlockInteract&quot;,&quot;href&quot;:&quot;#playerevent-onblockinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onItemInteract&quot;,&quot;href&quot;:&quot;#playerevent-oniteminteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onLeftClickBlock&quot;,&quot;href&quot;:&quot;#playerevent-onleftclickblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onDestroyItem&quot;,&quot;href&quot;:&quot;#playerevent-ondestroyitem&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## PlayerEvent

<ApiMemberCard
  id="playerevent"
  name="PlayerEvent"
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

Player interaction events for NeoForge platform.

This object provides events related to player interactions including
attacking entities, interacting with blocks/entities, and item destruction.

### PlayerEvent.onAttackEntity

<ApiMemberCard
  id="playerevent-onattackentity"
  name="PlayerEvent.onAttackEntity"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onAttackEntity
```

Event triggered when a player attacks (left-clicks) an entity.
Can be cancelled to prevent the attack.

</ApiMemberCard>

### PlayerEvent.onEntityInteract

<ApiMemberCard
  id="playerevent-onentityinteract"
  name="PlayerEvent.onEntityInteract"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEntityInteract
```

Event triggered when a player interacts (right-clicks) with an entity.
Can be cancelled to prevent the interaction.

</ApiMemberCard>

### PlayerEvent.onBlockInteract

<ApiMemberCard
  id="playerevent-onblockinteract"
  name="PlayerEvent.onBlockInteract"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onBlockInteract
```

Event triggered when a player interacts (right-clicks) with a block.
Can be cancelled to prevent the interaction.

</ApiMemberCard>

### PlayerEvent.onItemInteract

<ApiMemberCard
  id="playerevent-oniteminteract"
  name="PlayerEvent.onItemInteract"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemInteract
```

Event triggered when a player uses (right-clicks) an item.
Can be cancelled to prevent item use.

</ApiMemberCard>

### PlayerEvent.onLeftClickBlock

<ApiMemberCard
  id="playerevent-onleftclickblock"
  name="PlayerEvent.onLeftClickBlock"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onLeftClickBlock
```

Event triggered when a player left-clicks a block.
Can be cancelled to prevent the action.

</ApiMemberCard>

### PlayerEvent.onDestroyItem

<ApiMemberCard
  id="playerevent-ondestroyitem"
  name="PlayerEvent.onDestroyItem"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onDestroyItem
```

Event triggered when a player's item is destroyed (e.g., tool breaking).

</ApiMemberCard>

</ApiMemberCard>

