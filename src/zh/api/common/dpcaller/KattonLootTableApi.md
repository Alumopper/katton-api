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
获得方块的掉落物，就好像它被工具破坏一样。
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

获得方块的掉落物，就好像它被工具破坏一样。

### 参数

| 参数 | 说明 |
| --- | --- |
| `pos` | 块位置 |
| `tool` | 用于打破方块的工具ItemStack |

### 返回值

ItemStack 掉落列表

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

获得一个实体的掉落物，就像它被杀死一样。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `killer` | 可选的杀手实体（可能会影响掉落） |

### 返回值

ItemStack 掉落列表

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

从LootTable生成宝箱战利品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `lootTable` | LootTable 滚动 |

### 返回值

生成的列表ItemStack

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

从LootTable生成钓鱼战利品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `lootTable` | LootTable 滚动 |
| `pos` | 战利品上下文的原始位置 |
| `tool` | 使用工具ItemStack |

### 返回值

生成的列表ItemStack

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

尝试将物品堆叠放入容器块中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 容器块位置 |
| `itemStacks` | 存入的ItemStack列表（可能会修改） |

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

用给定的物品堆栈替换容器块中的一系列插槽。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 集装箱位置 |
| `i` | 起始槽索引 |
| `j` | 要更换的插槽数量 |
| `itemStacks` | 要放置的 ItemStacks 列表（较短的列表用空填充） |

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

向玩家提供物品堆栈（将副本添加到库存中）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标ServerPlayer |
| `itemStacks` | 给予的ItemStack列表 |

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

将物品堆栈设置到实体槽中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `i` | 起始槽索引 |
| `j` | 要设置的槽数 |
| `itemStacks` | 要设置的ItemStacks列表 |

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

将物品堆叠放入世界中的某个位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 世界水平 |
| `pos` | 下降位置 |
| `itemStacks` | 要生成的 ItemStack 列表 |

</ApiMemberCard>

