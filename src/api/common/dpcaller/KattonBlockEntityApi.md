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
Map-like access to block entities in a level by position.
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

Map-like access to block entities in a level by position.

### Properties

| Property | Description |
| --- | --- |
| `level` | The Level containing the block entities |

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

Get the BlockEntity at a position.

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

Set a BlockEntity at a specific position.

The block entity's position must match the target position.

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

Set a BlockEntity in the level at its own position.

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

Extension property to get/set NBT data on a BlockEntity.

</ApiMemberCard>

