---
title: KattonLootTableApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonLootTableApi"
  module="Common"
  module-key="common"
  package-name=""
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonLootTableApi.kt"
>
获取方块在使用工具破坏时的掉落物。
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

获取方块在使用工具破坏时的掉落物。

### 参数

| 参数 | 说明 |
| --- | --- |
| `pos` | 方块位置。 |
| `tool` | 用于破坏方块的工具 ItemStack。 |

### 返回值

返回掉落的 ItemStack 列表。

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

获取实体在被击杀时会掉落的物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `killer` | 可选的击杀实体，可能影响掉落结果。 |

### 返回值

返回掉落的 ItemStack 列表。

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

从 LootTable 生成容器战利品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `lootTable` | 要抽取的 LootTable。 |

### 返回值

返回生成的 ItemStack 列表。

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

从 LootTable 生成钓鱼战利品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `lootTable` | 要抽取的 LootTable。 |
| `pos` | 战利品上下文的原点位置。 |
| `tool` | 使用的工具 ItemStack。 |

### 返回值

返回生成的 ItemStack 列表。

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

尝试将 ItemStack 放入容器方块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 容器方块的位置。 |
| `itemStacks` | 要放入的 ItemStack 列表，可能会被修改。 |

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

使用给定的 ItemStack 替换容器方块中的一段槽位。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 容器位置。 |
| `i` | 起始槽位索引。 |
| `j` | 要替换的槽位数量。 |
| `itemStacks` | 要放置的 ItemStack 列表，较短的列表会以空物品补足。 |

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

将 ItemStack 给予玩家，并把副本加入背包。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标 ServerPlayer。 |
| `itemStacks` | 要给予的 ItemStack 列表。 |

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

将 ItemStack 设置到实体槽位中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `i` | 起始槽位索引。 |
| `j` | 要设置的槽位数量。 |
| `itemStacks` | 要设置的 ItemStack 列表。 |

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

将 ItemStack 掉落到世界中的指定位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 世界维度。 |
| `pos` | 掉落位置。 |
| `itemStacks` | 要生成的 ItemStack 列表。 |

</ApiMemberCard>

