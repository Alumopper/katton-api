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
NeoForge 平台的区块、方块和爆炸事件。 此对象提供与区块加载/卸载、方块破坏/放置以及爆炸相关的事件。
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

NeoForge 平台的区块、方块和爆炸事件。
此对象提供与区块加载/卸载、方块破坏/放置以及爆炸相关的事件。

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

当区块加载时触发。

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

当区块卸载时触发。

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

当区块数据从磁盘加载时触发。

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

当区块数据保存到磁盘时触发。

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

当玩家开始监视某个区块时触发。

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

当区块被发送给玩家时触发。

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

当玩家停止监视某个区块时触发。

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

当区块的维度类型发生变化时触发。
这是为了 NeoForge API 兼容性保留的占位事件。

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

当方块实体加载时触发。
这是为了 NeoForge API 兼容性保留的占位事件。

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

当方块实体卸载时触发。
这是为了 NeoForge API 兼容性保留的占位事件。

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

当玩家破坏方块时触发。
可取消以阻止破坏。

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

当玩家放置方块时触发。
可取消以阻止放置。

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

当爆炸开始时触发。
可取消以阻止爆炸。

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

当爆炸引爆时触发。
可用于修改受影响的方块或实体。

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

NeoForge 区块数据加载事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 服务端维度。 |
| `chunk` | 正在加载的区块。 |
| `data` | 可序列化的区块数据。 |
| `type` | 区块类型。 |

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

NeoForge 区块数据保存事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 服务端维度。 |
| `chunk` | 正在保存的区块。 |
| `data` | 可序列化的区块数据。 |

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

NeoForge 区块监视事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 正在监视该区块的玩家。 |
| `level` | 服务端维度。 |
| `chunk` | 正在被监视的区块。 |

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

NeoForge 区块取消监视事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 停止监视该区块的玩家。 |
| `level` | 服务端维度。 |
| `pos` | 区块坐标。 |

</ApiMemberCard>

</ApiMemberCard>

