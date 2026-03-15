---
title: KattonLootTableApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonLootTableApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonLootTableApi.kt"
>
Get drops for a block as if it were broken with a tool.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;dropBlockLoot&quot;,&quot;href&quot;:&quot;#dropblockloot&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropKillLoot&quot;,&quot;href&quot;:&quot;#dropkillloot&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropChestLoot&quot;,&quot;href&quot;:&quot;#dropchestloot&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropFishingLoot&quot;,&quot;href&quot;:&quot;#dropfishingloot&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropToBlock&quot;,&quot;href&quot;:&quot;#droptoblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropToBlockReplace&quot;,&quot;href&quot;:&quot;#droptoblockreplace&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropToPlayer&quot;,&quot;href&quot;:&quot;#droptoplayer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropToEntity&quot;,&quot;href&quot;:&quot;#droptoentity&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dropTo&quot;,&quot;href&quot;:&quot;#dropto&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## dropBlockLoot

<ApiMemberCard
  id="dropblockloot"
  name="dropBlockLoot"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropBlockLoot(pos: BlockPos, tool: ItemStack): List<ItemStack>
```

Get drops for a block as if it were broken with a tool.

### Parameters

| Parameter | Description |
| --- | --- |
| `pos` | block position |
| `tool` | tool ItemStack used to break the block |

### Returns

list of ItemStack drops

</ApiMemberCard>

## dropKillLoot

<ApiMemberCard
  id="dropkillloot"
  name="dropKillLoot"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropKillLoot(entity: Entity, killer: Entity?): List<ItemStack>
```

Get drops for an entity as if it were killed.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `killer` | optional killer entity (may influence drops) |

### Returns

list of ItemStack drops

</ApiMemberCard>

## dropChestLoot

<ApiMemberCard
  id="dropchestloot"
  name="dropChestLoot"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropChestLoot(lootTable: LootTable): List<ItemStack>
```

Generate chest loot from a LootTable.

### Parameters

| Parameter | Description |
| --- | --- |
| `lootTable` | LootTable to roll |

### Returns

list of generated ItemStack

</ApiMemberCard>

## dropFishingLoot

<ApiMemberCard
  id="dropfishingloot"
  name="dropFishingLoot"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropFishingLoot(lootTable: LootTable, pos: BlockPos, tool: ItemStack): List<ItemStack>
```

Generate fishing loot from a LootTable.

### Parameters

| Parameter | Description |
| --- | --- |
| `lootTable` | LootTable to roll |
| `pos` | origin position for loot context |
| `tool` | tool ItemStack used |

### Returns

list of generated ItemStack

</ApiMemberCard>

## dropToBlock

<ApiMemberCard
  id="droptoblock"
  name="dropToBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropToBlock(block: BlockPos, itemStacks: List<ItemStack>)
```

Attempt to deposit item stacks into a container block.

### Parameters

| Parameter | Description |
| --- | --- |
| `block` | container block position |
| `itemStacks` | list of ItemStack to deposit (may be modified) |

</ApiMemberCard>

## dropToBlockReplace

<ApiMemberCard
  id="droptoblockreplace"
  name="dropToBlockReplace"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropToBlockReplace(block: BlockPos, i: Int, j: Int, itemStacks: List<ItemStack>)
```

Replace a range of slots in a container block with given item stacks.

### Parameters

| Parameter | Description |
| --- | --- |
| `block` | container position |
| `i` | start slot index |
| `j` | number of slots to replace |
| `itemStacks` | list of ItemStacks to place (shorter lists fill with empty) |

</ApiMemberCard>

## dropToPlayer

<ApiMemberCard
  id="droptoplayer"
  name="dropToPlayer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropToPlayer(player: ServerPlayer, itemStacks: List<ItemStack>)
```

Give item stacks to players (adds copies to inventory).

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target ServerPlayer |
| `itemStacks` | list of ItemStack to give |

</ApiMemberCard>

## dropToEntity

<ApiMemberCard
  id="droptoentity"
  name="dropToEntity"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropToEntity(entity: Entity, i: Int, j: Int, itemStacks: List<ItemStack>)
```

Set item stacks into entity slots.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `i` | starting slot index |
| `j` | number of slots to set |
| `itemStacks` | list of ItemStacks to set |

</ApiMemberCard>

## dropTo

<ApiMemberCard
  id="dropto"
  name="dropTo"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dropTo(level: Level, pos: Vec3, itemStacks: List<ItemStack>)
```

Drop item stacks into the world at a position.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | world level |
| `pos` | drop position |
| `itemStacks` | list of ItemStack to spawn |

</ApiMemberCard>

