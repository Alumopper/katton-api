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
Chunk, block entity, and block events for Fabric platform.
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

Chunk, block entity, and block events for Fabric platform.

This object provides events related to chunk loading/unloading,
block entity lifecycle, block breaking, and explosions.

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

Event triggered when a chunk is loaded.

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

Event triggered when a chunk is unloaded.

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

Event triggered when a chunk's full status changes.

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

Event triggered when a block entity is loaded.

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

Event triggered when a block entity is unloaded.

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

Event triggered before a player breaks a block.

### Returns

true to allow the break, false to cancel it.

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

Event triggered after a player breaks a block.

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

Event triggered when a block break is canceled.

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

Event triggered when an explosion starts.
Can be cancelled to prevent the explosion.

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

Event triggered when an explosion detonates.
Use this to modify affected blocks/entities.

</ApiMemberCard>

</ApiMemberCard>

