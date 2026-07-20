---
title: KattonBlockEntityApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonBlockEntityApi"
  module="Common"
  module-key="common"
  package-name=""
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonBlockEntityApi.kt"
>
以类似 Map 的方式按位置访问关卡中的方块实体。
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

以类似 Map 的方式按位置访问关卡中的方块实体。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含这些方块实体的 Level。 |

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

获取方块Entity at a 位置。

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

在指定位置设置一个方块实体。
方块实体自身的位置必须与目标位置一致。

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

在关卡中按方块实体自身的位置设置它。

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

用于读取或设置方块实体 NBT 数据的扩展属性。

</ApiMemberCard>

