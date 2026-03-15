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
Map-like access to blocks in a level by position.
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

Map-like access to blocks in a level by position.

### Properties

| Property | Description |
| --- | --- |
| `level` | The Level containing the blocks |

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

Get the Block at a position.

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

Set a Block at a position using its default state.

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

Fill a region with a Block using its default state.

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

Map-like access to block states in a level by position.

### Properties

| Property | Description |
| --- | --- |
| `level` | The Level containing the blocks |

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

Get the BlockState at a position.

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

Set a BlockState at a position.

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

Fill a region with a BlockState.

</ApiMemberCard>

</ApiMemberCard>

