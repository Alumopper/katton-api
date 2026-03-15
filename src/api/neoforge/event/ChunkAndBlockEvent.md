---
title: ChunkAndBlockEvent
outline: [2, 2]
---

<ApiDocPage
  title="ChunkAndBlockEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ChunkAndBlockEvent.kt"
>
Chunk, block, and explosion events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ChunkAndBlockEvent&quot;,&quot;href&quot;:&quot;#chunkandblockevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkLoad&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkUnload&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkDataLoad&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkdataload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkDataSave&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkdatasave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkWatch&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkwatch&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkSent&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunksent&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkUnWatch&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkunwatch&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onChunkLevelTypeChange&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onchunkleveltypechange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBlockEntityLoad&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onblockentityload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBlockEntityUnload&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onblockentityunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBlockBreak&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onblockbreak&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onBlockPlace&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onblockplace&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onExplosionStart&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onexplosionstart&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.onExplosionDetonate&quot;,&quot;href&quot;:&quot;#chunkandblockevent-onexplosiondetonate&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.NeoChunkDataLoadArg&quot;,&quot;href&quot;:&quot;#chunkandblockevent-neochunkdataloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.NeoChunkDataSaveArg&quot;,&quot;href&quot;:&quot;#chunkandblockevent-neochunkdatasavearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.NeoChunkWatchArg&quot;,&quot;href&quot;:&quot;#chunkandblockevent-neochunkwatcharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChunkAndBlockEvent.NeoChunkUnWatchArg&quot;,&quot;href&quot;:&quot;#chunkandblockevent-neochunkunwatcharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ChunkAndBlockEvent

<ApiMemberCard
  id="chunkandblockevent"
  name="ChunkAndBlockEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

Chunk, block, and explosion events for NeoForge platform.

This object provides events related to chunk loading/unloading,
block breaking/placing, and explosions.

### ChunkAndBlockEvent.onChunkLoad

<ApiMemberCard
  id="chunkandblockevent-onchunkload"
  name="ChunkAndBlockEvent.onChunkLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onChunkUnload
```

Event triggered when a chunk is unloaded.

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkDataLoad

<ApiMemberCard
  id="chunkandblockevent-onchunkdataload"
  name="ChunkAndBlockEvent.onChunkDataLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onChunkDataLoad
```

Event triggered when chunk data is loaded from disk.

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkDataSave

<ApiMemberCard
  id="chunkandblockevent-onchunkdatasave"
  name="ChunkAndBlockEvent.onChunkDataSave"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onChunkDataSave
```

Event triggered when chunk data is saved to disk.

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkWatch

<ApiMemberCard
  id="chunkandblockevent-onchunkwatch"
  name="ChunkAndBlockEvent.onChunkWatch"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onChunkWatch
```

Event triggered when a player starts watching a chunk.

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkSent

<ApiMemberCard
  id="chunkandblockevent-onchunksent"
  name="ChunkAndBlockEvent.onChunkSent"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onChunkSent
```

Event triggered when a chunk is sent to a player.

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkUnWatch

<ApiMemberCard
  id="chunkandblockevent-onchunkunwatch"
  name="ChunkAndBlockEvent.onChunkUnWatch"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onChunkUnWatch
```

Event triggered when a player stops watching a chunk.

</ApiMemberCard>

### ChunkAndBlockEvent.onChunkLevelTypeChange

<ApiMemberCard
  id="chunkandblockevent-onchunkleveltypechange"
  name="ChunkAndBlockEvent.onChunkLevelTypeChange"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onChunkLevelTypeChange
```

Event triggered when a chunk's level type changes.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### ChunkAndBlockEvent.onBlockEntityLoad

<ApiMemberCard
  id="chunkandblockevent-onblockentityload"
  name="ChunkAndBlockEvent.onBlockEntityLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onBlockEntityLoad
```

Event triggered when a block entity is loaded.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### ChunkAndBlockEvent.onBlockEntityUnload

<ApiMemberCard
  id="chunkandblockevent-onblockentityunload"
  name="ChunkAndBlockEvent.onBlockEntityUnload"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onBlockEntityUnload
```

Event triggered when a block entity is unloaded.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### ChunkAndBlockEvent.onBlockBreak

<ApiMemberCard
  id="chunkandblockevent-onblockbreak"
  name="ChunkAndBlockEvent.onBlockBreak"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onBlockBreak
```

Event triggered when a player breaks a block.
Can be cancelled to prevent the break.

</ApiMemberCard>

### ChunkAndBlockEvent.onBlockPlace

<ApiMemberCard
  id="chunkandblockevent-onblockplace"
  name="ChunkAndBlockEvent.onBlockPlace"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onBlockPlace
```

Event triggered when a player places a block.
Can be cancelled to prevent the placement.

</ApiMemberCard>

### ChunkAndBlockEvent.onExplosionStart

<ApiMemberCard
  id="chunkandblockevent-onexplosionstart"
  name="ChunkAndBlockEvent.onExplosionStart"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onExplosionStart
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onExplosionDetonate
```

Event triggered when an explosion detonates.
Use this to modify affected blocks/entities.

</ApiMemberCard>

### ChunkAndBlockEvent.NeoChunkDataLoadArg

<ApiMemberCard
  id="chunkandblockevent-neochunkdataloadarg"
  name="ChunkAndBlockEvent.NeoChunkDataLoadArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class NeoChunkDataLoadArg( val level: ServerLevel, val chunk: ChunkAccess, val data: SerializableChunkData, val type: ChunkType )
```

Argument class for NeoForge chunk data load events.

### Properties

| Property | Description |
| --- | --- |
| `level` | The server level |
| `chunk` | The chunk being loaded |
| `data` | The serializable chunk data |
| `type` | The chunk type |

</ApiMemberCard>

### ChunkAndBlockEvent.NeoChunkDataSaveArg

<ApiMemberCard
  id="chunkandblockevent-neochunkdatasavearg"
  name="ChunkAndBlockEvent.NeoChunkDataSaveArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class NeoChunkDataSaveArg( val level: ServerLevel, val chunk: ChunkAccess, val data: SerializableChunkData )
```

Argument class for NeoForge chunk data save events.

### Properties

| Property | Description |
| --- | --- |
| `level` | The server level |
| `chunk` | The chunk being saved |
| `data` | The serializable chunk data |

</ApiMemberCard>

### ChunkAndBlockEvent.NeoChunkWatchArg

<ApiMemberCard
  id="chunkandblockevent-neochunkwatcharg"
  name="ChunkAndBlockEvent.NeoChunkWatchArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class NeoChunkWatchArg( val player: ServerPlayer, val level: ServerLevel, val chunk: LevelChunk )
```

Argument class for NeoForge chunk watch events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player watching the chunk |
| `level` | The server level |
| `chunk` | The level chunk being watched |

</ApiMemberCard>

### ChunkAndBlockEvent.NeoChunkUnWatchArg

<ApiMemberCard
  id="chunkandblockevent-neochunkunwatcharg"
  name="ChunkAndBlockEvent.NeoChunkUnWatchArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class NeoChunkUnWatchArg( val player: ServerPlayer, val level: ServerLevel, val pos: ChunkPos )
```

Argument class for NeoForge chunk unwatch events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player stopping watching the chunk |
| `level` | The server level |
| `pos` | The chunk position |

</ApiMemberCard>

</ApiMemberCard>

