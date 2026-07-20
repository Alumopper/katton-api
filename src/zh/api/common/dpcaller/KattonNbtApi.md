---
title: KattonNbtApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonNbtApi"
  module="Common"
  module-key="common"
  package-name=""
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonNbtApi.kt"
>
根据 Number 值创建数值类型的 Tag。
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

根据 Number 值创建数值类型的 Tag。

### 参数

| 参数 | 说明 |
| --- | --- |
| `value` | 要转换的数值。 |

### 返回值

返回对应的 NumericTag 子类型。

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

将 Tag 安全转换为指定的 TagType。
在可能的情况下会自动进行类型转换：
- 数值标签可在不同数值类型之间转换
- 字符串标签可解析为其他类型
- 集合标签可转换为数组类型

### 参数

| 参数 | 说明 |
| --- | --- |
| `tagType` | 目标 TagType。 |

### 返回值

转换成功则返回对应的 Tag，无法转换则返回 null。

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

将 Tag 安全转换为指定的 TagType。
在可能的情况下会自动进行类型转换：
- 数值标签可在不同数值类型之间转换
- 字符串标签可解析为其他类型
- 集合标签可转换为数组类型

### 参数

| 参数 | 说明 |
| --- | --- |
| `tagType` | 目标 TagType。 |

### 返回值

转换成功则返回对应的 Tag，无法转换则返回 null。

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

从 Tag 中安全读取值，并在读取失败时回退到默认值。
在可能的情况下会自动进行类型转换：
- 数值标签返回数值
- 字符串标签返回字符串
- 集合标签返回列表

### 参数

| 参数 | 说明 |
| --- | --- |
| `default` | 转换失败时返回的默认值。 |

### 返回值

返回转换后的值，或默认值。

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

从 Tag 中安全读取值，并在读取失败时回退到默认值。
在可能的情况下会自动进行类型转换：
- 数值标签返回数值
- 字符串标签返回字符串
- 集合标签返回列表

### 参数

| 参数 | 说明 |
| --- | --- |
| `default` | 转换失败时返回的默认值。 |

### 返回值

返回转换后的值，或默认值。

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

将 ByteTag 转换为布尔值。

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

将 NBT 字符串解析为 CompoundTag。

### 参数

| 参数 | 说明 |
| --- | --- |
| `nbt` | 要解析的 NBT 字符串。 |

### 返回值

返回 CompoundTag。

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

获取实体的完整 NBT 数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |

### 返回值

返回表示该实体数据的 CompoundTag。

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

替换实体的 NBT 数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `tag` | 要设置到实体上的 CompoundTag。 |

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

获取方块实体的 NBT 数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 目标方块实体。 |

### 返回值

返回表示该方块实体数据的 CompoundTag。

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

替换方块实体的 NBT 数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 目标方块实体。 |
| `tag` | 要设置到方块实体上的 CompoundTag。 |

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

获取指定位置方块实体的 NBT 数据，如果该方块没有方块实体则返回空。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要查询的维度。 |
| `pos` | 方块位置。 |

### 返回值

如果不存在方块实体，则返回 null。

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

设置指定位置方块实体的 NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改的维度。 |
| `pos` | 方块位置。 |
| `tag` | 要设置的 CompoundTag。 |

### 返回值

设置成功返回 true；如果没有方块实体则返回 false。

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

通过标识符获取已存储的命令存储 NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 存储标识符。 |

### 返回值

返回该标识符下存储的 NBT。

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

通过标识符设置命令存储中的 NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 存储标识符。 |
| `tag` | 要存储的 CompoundTag。 |

</ApiMemberCard>

