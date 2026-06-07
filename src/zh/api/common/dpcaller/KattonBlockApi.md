---
title: KattonBlockApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonBlockApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonBlockApi.kt"
>
像映射一样按位置访问世界中的方块。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;KattonLevelBlockCollection&quot;,&quot;href&quot;:&quot;#kattonlevelblockcollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelblockcollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockCollection.set&quot;,&quot;href&quot;:&quot;#kattonlevelblockcollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockCollection.set&quot;,&quot;href&quot;:&quot;#kattonlevelblockcollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockStateCollection&quot;,&quot;href&quot;:&quot;#kattonlevelblockstatecollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockStateCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelblockstatecollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockStateCollection.set&quot;,&quot;href&quot;:&quot;#kattonlevelblockstatecollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelBlockStateCollection.set&quot;,&quot;href&quot;:&quot;#kattonlevelblockstatecollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## KattonLevelBlockCollection

<ApiMemberCard
  id="kattonlevelblockcollection"
  name="KattonLevelBlockCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonLevelBlockCollection( val level: Level )
```

像映射一样按位置访问世界中的方块。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含方块的世界 |

### KattonLevelBlockCollection.get

<ApiMemberCard
  id="kattonlevelblockcollection-get"
  name="KattonLevelBlockCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(blockPos: BlockPos): Block
```

获取指定位置的方块。

</ApiMemberCard>

### KattonLevelBlockCollection.set

<ApiMemberCard
  id="kattonlevelblockcollection-set"
  name="KattonLevelBlockCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun set(blockPos: BlockPos, block: Block)
```

使用默认状态在指定位置设置方块。

</ApiMemberCard>

### KattonLevelBlockCollection.set

<ApiMemberCard
  id="kattonlevelblockcollection-set"
  name="KattonLevelBlockCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun set(start: BlockPos, end: BlockPos, block: Block)
```

使用方块的默认状态填充区域。

</ApiMemberCard>

</ApiMemberCard>

## KattonLevelBlockStateCollection

<ApiMemberCard
  id="kattonlevelblockstatecollection"
  name="KattonLevelBlockStateCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonLevelBlockStateCollection( val level: Level )
```

像地图一样按位置访问方方块状态。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含方块的世界 |

### KattonLevelBlockStateCollection.get

<ApiMemberCard
  id="kattonlevelblockstatecollection-get"
  name="KattonLevelBlockStateCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(blockPos: BlockPos): BlockState
```

在某个位置获取BlockState。

</ApiMemberCard>

### KattonLevelBlockStateCollection.set

<ApiMemberCard
  id="kattonlevelblockstatecollection-set"
  name="KattonLevelBlockStateCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun set(blockPos: BlockPos, blockState: BlockState)
```

在某个位置设置BlockState。

</ApiMemberCard>

### KattonLevelBlockStateCollection.set

<ApiMemberCard
  id="kattonlevelblockstatecollection-set"
  name="KattonLevelBlockStateCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun set(start: BlockPos, end: BlockPos, blockState: BlockState)
```

用 BlockState 填充区域。

</ApiMemberCard>

</ApiMemberCard>

