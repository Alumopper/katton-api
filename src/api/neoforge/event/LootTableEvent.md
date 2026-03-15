---
title: LootTableEvent
outline: [2, 2]
---

<ApiDocPage
  title="LootTableEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/LootTableEvent.kt"
>
Loot table events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LootTableEvent&quot;,&quot;href&quot;:&quot;#loottableevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableReplace&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablereplace&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableModify&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablemodify&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableAllLoad&quot;,&quot;href&quot;:&quot;#loottableevent-onloottableallload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableModifyDrops&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablemodifydrops&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LootTableEvent

<ApiMemberCard
  id="loottableevent"
  name="LootTableEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
object LootTableEvent
```

Loot table events for NeoForge platform.

### LootTableEvent.onLootTableReplace

<ApiMemberCard
  id="loottableevent-onloottablereplace"
  name="LootTableEvent.onLootTableReplace"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableReplace
```

Event triggered to replace a loot table entirely.

### Returns

The replacement LootTable, or null to keep the original.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### LootTableEvent.onLootTableModify

<ApiMemberCard
  id="loottableevent-onloottablemodify"
  name="LootTableEvent.onLootTableModify"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableModify
```

Event triggered to modify a loot table's contents.
Use this to add or remove loot pool entries.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### LootTableEvent.onLootTableAllLoad

<ApiMemberCard
  id="loottableevent-onloottableallload"
  name="LootTableEvent.onLootTableAllLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableAllLoad
```

Event triggered when all loot tables have been loaded.
Use this for post-processing after all tables are available.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### LootTableEvent.onLootTableModifyDrops

<ApiMemberCard
  id="loottableevent-onloottablemodifydrops"
  name="LootTableEvent.onLootTableModifyDrops"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableModifyDrops
```

Event triggered to modify the drops from a loot table.
Use this to customize what items are actually dropped.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

</ApiMemberCard>

