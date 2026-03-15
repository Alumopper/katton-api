---
title: KattonNbtApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonNbtApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonNbtApi.kt"
>
Create a numeric Tag from a Number value.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;numericTagOf&quot;,&quot;href&quot;:&quot;#numerictagof&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getValue&quot;,&quot;href&quot;:&quot;#getvalue&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;invoke&quot;,&quot;href&quot;:&quot;#invoke&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getOrValue&quot;,&quot;href&quot;:&quot;#getorvalue&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;invoke&quot;,&quot;href&quot;:&quot;#invoke&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;toBoolean&quot;,&quot;href&quot;:&quot;#toboolean&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;parseNbt&quot;,&quot;href&quot;:&quot;#parsenbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getEntityNbt&quot;,&quot;href&quot;:&quot;#getentitynbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setEntityNbt&quot;,&quot;href&quot;:&quot;#setentitynbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlockNbt&quot;,&quot;href&quot;:&quot;#getblocknbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setBlockNbt&quot;,&quot;href&quot;:&quot;#setblocknbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlockNbt&quot;,&quot;href&quot;:&quot;#getblocknbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setBlockNbt&quot;,&quot;href&quot;:&quot;#setblocknbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getStorageNbt&quot;,&quot;href&quot;:&quot;#getstoragenbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setStorageNbt&quot;,&quot;href&quot;:&quot;#setstoragenbt&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## numericTagOf

<ApiMemberCard
  id="numerictagof"
  name="numericTagOf"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Number> numericTagOf(value: T)
```

Create a numeric Tag from a Number value.

### Parameters

| Parameter | Description |
| --- | --- |
| `value` | The numeric value to convert |

### Returns

The appropriate NumericTag subtype

</ApiMemberCard>

## getValue

<ApiMemberCard
  id="getvalue"
  name="getValue"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Tag> Tag?.getValue(tagType: TagType<T>): T?
```

Safely cast a Tag to a specific TagType.

Performs automatic type conversion where possible:
- Numeric tags can be converted between numeric types
- String tags can be parsed into other types
- Collection tags can be converted between array types

### Parameters

| Parameter | Description |
| --- | --- |
| `tagType` | The target TagType |

### Returns

The casted Tag or null if conversion is not possible

</ApiMemberCard>

## invoke

<ApiMemberCard
  id="invoke"
  name="invoke"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@Suppress("UNCHECKED_CAST")
@Suppress("UNCHECKED_CAST") operator fun <T : Tag> Tag?.invoke(tagType: TagType<T>): T?
```

Safely cast a Tag to a specific TagType.

Performs automatic type conversion where possible:
- Numeric tags can be converted between numeric types
- String tags can be parsed into other types
- Collection tags can be converted between array types

### Parameters

| Parameter | Description |
| --- | --- |
| `tagType` | The target TagType |

### Returns

The casted Tag or null if conversion is not possible

</ApiMemberCard>

## getOrValue

<ApiMemberCard
  id="getorvalue"
  name="getOrValue"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <V> Tag?.getOrValue(default: V): V
```

Safely get a value from a Tag with a default fallback.

Performs automatic type conversion where possible:
- Numeric tags return numeric values
- String tags return string values
- Collection tags return lists

### Parameters

| Parameter | Description |
| --- | --- |
| `default` | The default value to return if conversion fails |

### Returns

The converted value or the default

</ApiMemberCard>

## invoke

<ApiMemberCard
  id="invoke"
  name="invoke"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@Suppress("UNCHECKED_CAST")
@Suppress("UNCHECKED_CAST") operator fun <V> Tag?.invoke(default: V): V
```

Safely get a value from a Tag with a default fallback.

Performs automatic type conversion where possible:
- Numeric tags return numeric values
- String tags return string values
- Collection tags return lists

### Parameters

| Parameter | Description |
| --- | --- |
| `default` | The default value to return if conversion fails |

### Returns

The converted value or the default

</ApiMemberCard>

## toBoolean

<ApiMemberCard
  id="toboolean"
  name="toBoolean"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun ByteTag?.toBoolean(): Boolean
```

Convert a ByteTag to a Boolean value.

</ApiMemberCard>

## parseNbt

<ApiMemberCard
  id="parsenbt"
  name="parseNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun parseNbt(nbt: String): CompoundTag
```

Parse an NBT string into a CompoundTag.

### Parameters

| Parameter | Description |
| --- | --- |
| `nbt` | NBT string to parse |

### Returns

parsed CompoundTag

</ApiMemberCard>

## getEntityNbt

<ApiMemberCard
  id="getentitynbt"
  name="getEntityNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getEntityNbt(entity: Entity): CompoundTag
```

Get the full NBT data of an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the target entity |

### Returns

CompoundTag representing the entity's data

</ApiMemberCard>

## setEntityNbt

<ApiMemberCard
  id="setentitynbt"
  name="setEntityNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setEntityNbt(entity: Entity, tag: CompoundTag)
```

Replace the NBT data of an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the target entity |
| `tag` | the CompoundTag to set on the entity |

</ApiMemberCard>

## getBlockNbt

<ApiMemberCard
  id="getblocknbt"
  name="getBlockNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlockNbt(block: BlockEntity): CompoundTag
```

Get the NBT data of a block entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `block` | the target BlockEntity |

### Returns

CompoundTag representing the block entity's data

</ApiMemberCard>

## setBlockNbt

<ApiMemberCard
  id="setblocknbt"
  name="setBlockNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setBlockNbt(block: BlockEntity, tag: CompoundTag)
```

Replace the NBT data of a block entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `block` | the target BlockEntity |
| `tag` | the CompoundTag to set on the block entity |

</ApiMemberCard>

## getBlockNbt

<ApiMemberCard
  id="getblocknbt"
  name="getBlockNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlockNbt(level: Level, pos: BlockPos): CompoundTag?
```

Get the NBT data of a block at a position if it has a block entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | level to query |
| `pos` | position of the block |

### Returns

CompoundTag or null if no block entity exists

</ApiMemberCard>

## setBlockNbt

<ApiMemberCard
  id="setblocknbt"
  name="setBlockNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setBlockNbt(level: Level, pos: BlockPos, tag: CompoundTag): Boolean
```

Set the NBT of a block entity at the given position.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | level to modify |
| `pos` | block position |
| `tag` | CompoundTag to set |

### Returns

true if set succeeded, false if no block entity present

</ApiMemberCard>

## getStorageNbt

<ApiMemberCard
  id="getstoragenbt"
  name="getStorageNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getStorageNbt(id: Identifier): CompoundTag
```

Get stored command storage NBT by identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | storage identifier |

### Returns

CompoundTag stored at id

</ApiMemberCard>

## setStorageNbt

<ApiMemberCard
  id="setstoragenbt"
  name="setStorageNbt"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setStorageNbt(id: Identifier, tag: CompoundTag)
```

Set stored command storage NBT by identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | storage identifier |
| `tag` | CompoundTag to store |

</ApiMemberCard>

