---
title: KattonItemApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonItemApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonItemApi.kt"
>
用于获取/设置 ItemStack 上的 NBT 数据的扩展属性。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;nbt&quot;,&quot;href&quot;:&quot;#nbt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;modifyBlockItem&quot;,&quot;href&quot;:&quot;#modifyblockitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyEntityItem&quot;,&quot;href&quot;:&quot;#modifyentityitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setBlockItem&quot;,&quot;href&quot;:&quot;#setblockitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setEntityItem&quot;,&quot;href&quot;:&quot;#setentityitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlockItem&quot;,&quot;href&quot;:&quot;#getblockitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getEntityItem&quot;,&quot;href&quot;:&quot;#getentityitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;applyModifier&quot;,&quot;href&quot;:&quot;#applymodifier&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## nbt

<ApiMemberCard
  id="nbt"
  name="nbt"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var ItemStack.nbt: CompoundTag
```

用于获取/设置 ItemStack 上的 NBT 数据的扩展属性。

</ApiMemberCard>

## modifyBlockItem

<ApiMemberCard
  id="modifyblockitem"
  name="modifyBlockItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun modifyBlockItem(pos: BlockPos, slot: Int, modifier: LootItemFunction)
```

将 LootItemFunction 修饰符应用于块容器槽。

### 参数

| 参数 | 说明 |
| --- | --- |
| `pos` | 容器的块位置 |
| `slot` | 要修改的槽位索引 |
| `modifier` | LootItemFunction 申请 |

</ApiMemberCard>

## modifyEntityItem

<ApiMemberCard
  id="modifyentityitem"
  name="modifyEntityItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun modifyEntityItem(entity: Entity, slot: Int, modifier: LootItemFunction)
```

将LootItemFunction应用于实体设备槽。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `slot` | 装备槽位索引 |
| `modifier` | LootItemFunction 申请 |

</ApiMemberCard>

## setBlockItem

<ApiMemberCard
  id="setblockitem"
  name="setBlockItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setBlockItem(pos: BlockPos, slot: Int, itemStack: ItemStack)
```

将物品设置到容器块槽中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `pos` | 块位置 |
| `slot` | 槽位索引 |
| `itemStack` | ItemStack 设置 |

</ApiMemberCard>

## setEntityItem

<ApiMemberCard
  id="setentityitem"
  name="setEntityItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setEntityItem(entity: Entity, slot: Int, itemStack: ItemStack)
```

将物品设置到实体槽中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `slot` | 槽位索引 |
| `itemStack` | ItemStack 设置 |

</ApiMemberCard>

## getBlockItem

<ApiMemberCard
  id="getblockitem"
  name="getBlockItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlockItem(pos: BlockPos, slot: Int): ItemStack?
```

从容器块槽中获取一个物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `pos` | 块位置 |
| `slot` | 槽位索引 |

### 返回值

ItemStack 或 null（如果无效）

</ApiMemberCard>

## getEntityItem

<ApiMemberCard
  id="getentityitem"
  name="getEntityItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getEntityItem(entity: Entity, slot: Int): ItemStack?
```

从实体槽获取一个物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `slot` | 槽位索引 |

### 返回值

ItemStack 如果槽缺失则为 null

</ApiMemberCard>

## applyModifier

<ApiMemberCard
  id="applymodifier"
  name="applyModifier"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun applyModifier(itemStack: ItemStack, modifier: LootItemFunction): ItemStack
```

将 LootItemFunction 应用于 ItemStack 并返回修改后的堆栈。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemStack` | 要修改的物品 |
| `modifier` | 应用功能 |

### 返回值

修改ItemStack（大小限制）

</ApiMemberCard>

