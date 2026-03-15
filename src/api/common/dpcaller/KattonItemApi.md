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
Extension property to get/set NBT data on an ItemStack.
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

Extension property to get/set NBT data on an ItemStack.

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

Applies a LootItemFunction modifier to a block container slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `pos` | Block position of the container |
| `slot` | Slot index to modify |
| `modifier` | LootItemFunction to apply |

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

Applies a LootItemFunction to an entity equipment slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | Target entity |
| `slot` | Equipment slot index |
| `modifier` | LootItemFunction to apply |

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

Sets an item into a container block slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `pos` | Block position |
| `slot` | Slot index |
| `itemStack` | ItemStack to set |

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

Sets an item into an entity slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | Target entity |
| `slot` | Slot index |
| `itemStack` | ItemStack to set |

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

Gets an item from a container block slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `pos` | Block position |
| `slot` | Slot index |

### Returns

ItemStack or null if invalid

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

Gets an item from an entity slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | Target entity |
| `slot` | Slot index |

### Returns

ItemStack or null if slot missing

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

Applies a LootItemFunction to an ItemStack and returns the modified stack.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemStack` | Item to modify |
| `modifier` | Function to apply |

### Returns

Modified ItemStack (size-limited)

</ApiMemberCard>

