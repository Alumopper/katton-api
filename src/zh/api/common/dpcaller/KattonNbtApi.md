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
从数字值创建数字标签。
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

从数字值创建数字标签。

### 参数

| 参数 | 说明 |
| --- | --- |
| `value` | 要转换的数值 |

### 返回值

适当的NumericTag子类型

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

将标签安全地投射到特定的TagType。

尽可能执行自动类型转换：
- 数字标签可以在数字类型之间转换
- 字符串标签可以解析成其他类型
- 集合标签可以在数组类型之间转换

### 参数

| 参数 | 说明 |
| --- | --- |
| `tagType` | 目标TagType |

### 返回值

转换后的 Tag 或 null（如果无法转换）

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

将标签安全地投射到特定的TagType。

尽可能执行自动类型转换：
- 数字标签可以在数字类型之间转换
- 字符串标签可以解析成其他类型
- 集合标签可以在数组类型之间转换

### 参数

| 参数 | 说明 |
| --- | --- |
| `tagType` | 目标TagType |

### 返回值

转换后的 Tag 或 null（如果无法转换）

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

使用默认后备安全地从标签获取值。

尽可能执行自动类型转换：
- 数字标签返回数值
- 字符串标签返回字符串值
- 集合标签返回列表

### 参数

| 参数 | 说明 |
| --- | --- |
| `default` | 转换失败时返回的默认值 |

### 返回值

转换后的值或默认值

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

使用默认后备安全地从标签获取值。

尽可能执行自动类型转换：
- 数字标签返回数值
- 字符串标签返回字符串值
- 集合标签返回列表

### 参数

| 参数 | 说明 |
| --- | --- |
| `default` | 转换失败时返回的默认值 |

### 返回值

转换后的值或默认值

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
| `nbt` | NBT 要解析的字符串 |

### 返回值

已解析CompoundTag

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

获取实体的完整NBT数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |

### 返回值

CompoundTag 代表实体的数据

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

替换实体的NBT数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `tag` | 在实体上设置的CompoundTag |

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

获取方块实体的NBT数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 目标BlockEntity |

### 返回值

CompoundTag 代表区方块实体的数据

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

替换方块实体的NBT数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `block` | 目标BlockEntity |
| `tag` | 在方块实体上设置的CompoundTag |

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

如果某个位置有方方块实体，则获取该方块的NBT数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 查询世界 |
| `pos` | 块的位置 |

### 返回值

如果不存在方块实体，则CompoundTag或 null

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

在给定位置设置方块实体的NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 修改世界 |
| `pos` | 块位置 |
| `tag` | CompoundTag 设置 |

### 返回值

如果设置成功则为 true，如果不存在方块实体则为 false

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

通过标识符获取存储的命令存储NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 存储标识符 |

### 返回值

CompoundTag 存储在 id 处

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

通过标识符设置存储命令存储NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 存储标识符 |
| `tag` | CompoundTag 存储 |

</ApiMemberCard>

