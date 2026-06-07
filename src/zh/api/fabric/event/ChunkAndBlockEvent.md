---
title: ChunkAndBlockEvent
outline: [2, 2]
---

<ApiDocPage
  title="ChunkAndBlockEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ChunkAndBlockEvent.kt"
>
Fabric平台的区块、方方块实体和方方块事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ChunkAndBlockEvent&quot;,&quot;href&quot;:&quot;#chunkandblockevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkLoad&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkUnload&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkLevelTypeChange&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkleveltypechange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBlockEntityLoad&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onblockentityload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBlockEntityUnload&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onblockentityunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBeforeBlockBreak&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onbeforeblockbreak&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onAfterBlockBreak&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onafterblockbreak&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onCanceledBlockBreak&quot;,&quot;href&quot;:&quot;#chunkandblockevent-oncanceledblockbreak&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onExplosionStart&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onexplosionstart&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onExplosionDetonate&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onexplosiondetonate&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ChunkAndBlockEvent

<ApiMemberCard
  id="chunkandblockevent"
  name="ChunkAndBlockEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ChunkAndBlockEvent
```

Fabric平台的区块、方方块实体和方方块事件。

该对象提供与块加载/卸载相关的事件，
方方块实体生命周期、方块破坏和爆炸。

### ChunkAndBlockEvent.onChunkLoad

<ApiMemberCard
  id="chunkandblockevent-onchunkload"
  name="ChunkAndBlockEvent.onChunkLoad"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onChunkLoad
```

加载块时触发的事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkUnload

<ApiMemberCard
  id="chunkandblockevent-onchunkunload"
  name="ChunkAndBlockEvent.onChunkUnload"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onChunkUnload
```

卸载块时触发的事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkLevelTypeChange

<ApiMemberCard
  id="chunkandblockevent-onchunkleveltypechange"
  name="ChunkAndBlockEvent.onChunkLevelTypeChange"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onChunkLevelTypeChange
```

当块的完整状态发生变化时触发事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onBlockEntityLoad

<ApiMemberCard
  id="chunkandblockevent-onblockentityload"
  name="ChunkAndBlockEvent.onBlockEntityLoad"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBlockEntityLoad
```

加载方块实体时触发的事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onBlockEntityUnload

<ApiMemberCard
  id="chunkandblockevent-onblockentityunload"
  name="ChunkAndBlockEvent.onBlockEntityUnload"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBlockEntityUnload
```

卸载方块实体时触发的事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onBeforeBlockBreak

<ApiMemberCard
  id="chunkandblockevent-onbeforeblockbreak"
  name="ChunkAndBlockEvent.onBeforeBlockBreak"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBeforeBlockBreak
```

玩家打破方块之前触发的事件。

### 返回值

true 允许中断， false 取消中断。

</ApiMemberCard>

### ChunkAndBlockEvent.onAfterBlockBreak

<ApiMemberCard
  id="chunkandblockevent-onafterblockbreak"
  name="ChunkAndBlockEvent.onAfterBlockBreak"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterBlockBreak
```

玩家打破方块后触发的事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onCanceledBlockBreak

<ApiMemberCard
  id="chunkandblockevent-oncanceledblockbreak"
  name="ChunkAndBlockEvent.onCanceledBlockBreak"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onCanceledBlockBreak
```

取消块中断时触发的事件。

</ApiMemberCard>

### ChunkAndBlockEvent.onExplosionStart

<ApiMemberCard
  id="chunkandblockevent-onexplosionstart"
  name="ChunkAndBlockEvent.onExplosionStart"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onExplosionStart
```

爆炸开始时触发事件。
可以取消以防止爆炸。

</ApiMemberCard>

### ChunkAndBlockEvent.onExplosionDetonate

<ApiMemberCard
  id="chunkandblockevent-onexplosiondetonate"
  name="ChunkAndBlockEvent.onExplosionDetonate"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onExplosionDetonate
```

爆炸发生时触发事件。
使用它来修改受影响的块/实体。

</ApiMemberCard>

</ApiMemberCard>

