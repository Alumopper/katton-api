---
title: KattonBlockEntityApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonBlockEntityApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonBlockEntityApi.kt"
>
类似于地图的按位置访问世界中的方块实体。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;KattonLevelBlockEntityCollection&quot;,&quot;href&quot;:&quot;#kattonlevelblockentitycollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelblockentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockEntityCollection.set&quot;,&quot;href&quot;:&quot;#kattonlevelblockentitycollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockEntityCollection.set&quot;,&quot;href&quot;:&quot;#kattonlevelblockentitycollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;nbt&quot;,&quot;href&quot;:&quot;#nbt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## KattonLevelBlockEntityCollection

<ApiMemberCard
  id="kattonlevelblockentitycollection"
  name="KattonLevelBlockEntityCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonLevelBlockEntityCollection( val level: Level )
```

类似于地图的按位置访问世界中的方块实体。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含方块实体的世界 |

### KattonLevelBlockEntityCollection.get

<ApiMemberCard
  id="kattonlevelblockentitycollection-get"
  name="KattonLevelBlockEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(blockPos: BlockPos): BlockEntity?
```

在某个位置获取BlockEntity。

</ApiMemberCard>

### KattonLevelBlockEntityCollection.set

<ApiMemberCard
  id="kattonlevelblockentitycollection-set"
  name="KattonLevelBlockEntityCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun set(blockPos: BlockPos, blockEntity: BlockEntity)
```

在特定位置设置BlockEntity。

方块实体的位置必须与目标位置匹配。

</ApiMemberCard>

### KattonLevelBlockEntityCollection.set

<ApiMemberCard
  id="kattonlevelblockentitycollection-set"
  name="KattonLevelBlockEntityCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun set(blockEntity: BlockEntity)
```

在世界中其自身位置设置一个BlockEntity。

</ApiMemberCard>

</ApiMemberCard>

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
var BlockEntity.nbt: CompoundTag
```

用于获取/设置 BlockEntity 上的 NBT 数据的扩展属性。

</ApiMemberCard>

