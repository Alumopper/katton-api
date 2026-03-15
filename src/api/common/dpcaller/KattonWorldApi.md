---
title: KattonWorldApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonWorldApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonWorldApi.kt"
>
Map-like access to all server levels by ResourceKey.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;KattonLevelMap&quot;,&quot;href&quot;:&quot;#kattonlevelmap&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelMap.overworld&quot;,&quot;href&quot;:&quot;#kattonlevelmap-overworld&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;KattonLevelMap.nether&quot;,&quot;href&quot;:&quot;#kattonlevelmap-nether&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;KattonLevelMap.end&quot;,&quot;href&quot;:&quot;#kattonlevelmap-end&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;levels&quot;,&quot;href&quot;:&quot;#levels&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;players&quot;,&quot;href&quot;:&quot;#players&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;blockEntities&quot;,&quot;href&quot;:&quot;#blockentities&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;entities&quot;,&quot;href&quot;:&quot;#entities&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;blocks&quot;,&quot;href&quot;:&quot;#blocks&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;blockStates&quot;,&quot;href&quot;:&quot;#blockstates&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;setBlock&quot;,&quot;href&quot;:&quot;#setblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setBlock&quot;,&quot;href&quot;:&quot;#setblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;fill&quot;,&quot;href&quot;:&quot;#fill&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;fill&quot;,&quot;href&quot;:&quot;#fill&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;fillBiome&quot;,&quot;href&quot;:&quot;#fillbiome&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;locateStructure&quot;,&quot;href&quot;:&quot;#locatestructure&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;locateStructure&quot;,&quot;href&quot;:&quot;#locatestructure&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;locateBiome&quot;,&quot;href&quot;:&quot;#locatebiome&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;locateBiome&quot;,&quot;href&quot;:&quot;#locatebiome&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;placeFeature&quot;,&quot;href&quot;:&quot;#placefeature&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;placeJigsaw&quot;,&quot;href&quot;:&quot;#placejigsaw&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;placeStructure&quot;,&quot;href&quot;:&quot;#placestructure&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playSound&quot;,&quot;href&quot;:&quot;#playsound&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;randomSample&quot;,&quot;href&quot;:&quot;#randomsample&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetSequence&quot;,&quot;href&quot;:&quot;#resetsequence&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetSequence&quot;,&quot;href&quot;:&quot;#resetsequence&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetAllSequences&quot;,&quot;href&quot;:&quot;#resetallsequences&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetAllSequencesAndSetNewDefaults&quot;,&quot;href&quot;:&quot;#resetallsequencesandsetnewdefaults&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setTickingRate&quot;,&quot;href&quot;:&quot;#settickingrate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tickQuery&quot;,&quot;href&quot;:&quot;#tickquery&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tickSprint&quot;,&quot;href&quot;:&quot;#ticksprint&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setTickFreeze&quot;,&quot;href&quot;:&quot;#settickfreeze&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tickStep&quot;,&quot;href&quot;:&quot;#tickstep&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tickStopStepping&quot;,&quot;href&quot;:&quot;#tickstopstepping&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tickStopSprinting&quot;,&quot;href&quot;:&quot;#tickstopsprinting&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getDuration&quot;,&quot;href&quot;:&quot;#getduration&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setClear&quot;,&quot;href&quot;:&quot;#setclear&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setRain&quot;,&quot;href&quot;:&quot;#setrain&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setThunder&quot;,&quot;href&quot;:&quot;#setthunder&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWorldBorderDamageBuffer&quot;,&quot;href&quot;:&quot;#setworldborderdamagebuffer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWorldBorderDamageAmount&quot;,&quot;href&quot;:&quot;#setworldborderdamageamount&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWorldBorderWarningTime&quot;,&quot;href&quot;:&quot;#setworldborderwarningtime&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWorldBorderWarningDistance&quot;,&quot;href&quot;:&quot;#setworldborderwarningdistance&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getWorldBorderSize&quot;,&quot;href&quot;:&quot;#getworldbordersize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWorldBorderSize&quot;,&quot;href&quot;:&quot;#setworldbordersize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## KattonLevelMap

<ApiMemberCard
  id="kattonlevelmap"
  name="KattonLevelMap"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonLevelMap( private val server: MinecraftServer ) : Map<ResourceKey<Level>, ServerLevel>
```

Map-like access to all server levels by ResourceKey.

### KattonLevelMap.overworld

<ApiMemberCard
  id="kattonlevelmap-overworld"
  name="KattonLevelMap.overworld"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val overworld: ServerLevel
```

Quick access to the Overworld level.

</ApiMemberCard>

### KattonLevelMap.nether

<ApiMemberCard
  id="kattonlevelmap-nether"
  name="KattonLevelMap.nether"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val nether: ServerLevel
```

Quick access to the Nether level.

</ApiMemberCard>

### KattonLevelMap.end

<ApiMemberCard
  id="kattonlevelmap-end"
  name="KattonLevelMap.end"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val end: ServerLevel
```

Quick access to the End level.

</ApiMemberCard>

</ApiMemberCard>

## levels

<ApiMemberCard
  id="levels"
  name="levels"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val levels: KattonLevelMap
```

Map-like access to all server levels.

</ApiMemberCard>

## players

<ApiMemberCard
  id="players"
  name="players"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val ServerLevel.players: KattonLevelPlayerCollection
```

Access to players in a level.

</ApiMemberCard>

## blockEntities

<ApiMemberCard
  id="blockentities"
  name="blockEntities"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val ServerLevel.blockEntities: KattonLevelBlockEntityCollection
```

Access to block entities in a level.

</ApiMemberCard>

## entities

<ApiMemberCard
  id="entities"
  name="entities"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val ServerLevel.entities: KattonLevelEntityCollection
```

Access to entities in a level.

</ApiMemberCard>

## blocks

<ApiMemberCard
  id="blocks"
  name="blocks"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val Level.blocks: KattonLevelBlockCollection
```

Access to blocks in a level.

</ApiMemberCard>

## blockStates

<ApiMemberCard
  id="blockstates"
  name="blockStates"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val Level.blockStates: KattonLevelBlockStateCollection
```

Access to block states in a level.

</ApiMemberCard>

## setBlock

<ApiMemberCard
  id="setblock"
  name="setBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setBlock(level: Level, pos: BlockPos, state: BlockState)
```

Set a block at position to a specific BlockState.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | level to modify |
| `pos` | block position |
| `state` | BlockState to set |

</ApiMemberCard>

## setBlock

<ApiMemberCard
  id="setblock"
  name="setBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setBlock(level: Level, pos: BlockPos, block: Block)
```

Set a block at position using a Block type's default state.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | level to modify |
| `pos` | block position |
| `block` | block type to set |

</ApiMemberCard>

## fill

<ApiMemberCard
  id="fill"
  name="fill"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun fill(level: Level, start: BlockPos, end: BlockPos, state: BlockState)
```

Fill a region with a given BlockState.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | level to modify |
| `start` | start position (inclusive) |
| `end` | end position (inclusive) |
| `state` | BlockState to place |

</ApiMemberCard>

## fill

<ApiMemberCard
  id="fill"
  name="fill"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun fill(level: Level, start: BlockPos, end: BlockPos, block: Block)
```

Fill a region with a given Block type using its default state.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | level to modify |
| `start` | start position (inclusive) |
| `end` | end position (inclusive) |
| `block` | block type to place |

</ApiMemberCard>

## fillBiome

<ApiMemberCard
  id="fillbiome"
  name="fillBiome"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun fillBiome(level: Level, start: BlockPos, end: BlockPos, biome: Identifier, biomePredicate: (Holder<Biome>) -> Boolean)
```

Fill a region's biome using a predicate on biome holder.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server-level to modify |
| `start` | start position |
| `end` | end position |
| `biome` | biome identifier to apply |
| `biomePredicate` | predicate to further filter biome application |

</ApiMemberCard>

## locateStructure

<ApiMemberCard
  id="locatestructure"
  name="locateStructure"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun locateStructure(structureKey: ResourceKey<Structure>, level: ServerLevel, startPos: BlockPos = BlockPos.ZERO): BlockPos?
```

Locate a structure by ResourceKey.

### Parameters

| Parameter | Description |
| --- | --- |
| `structureKey` | structure resource key |
| `level` | server level to search in |
| `startPos` | starting position for search |

### Returns

nearest BlockPos of the structure or null if not found

</ApiMemberCard>

## locateStructure

<ApiMemberCard
  id="locatestructure"
  name="locateStructure"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun locateStructure(structureKey: TagKey<Structure>, level: ServerLevel, startPos: BlockPos = BlockPos.ZERO): BlockPos?
```

Locate a structure by TagKey.

### Parameters

| Parameter | Description |
| --- | --- |
| `structureKey` | structure tag key |
| `level` | server level to search in |
| `startPos` | starting position |

### Returns

nearest BlockPos or null if not found

</ApiMemberCard>

## locateBiome

<ApiMemberCard
  id="locatebiome"
  name="locateBiome"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun locateBiome(biomeKey: ResourceKey<Biome>, level: ServerLevel, startPos: BlockPos = BlockPos.ZERO): Pair<BlockPos, Holder<Biome>>?
```

Find closest biome by resource key.

### Parameters

| Parameter | Description |
| --- | --- |
| `biomeKey` | biome resource key |
| `level` | server level to search |
| `startPos` | starting position |

### Returns

Pair of BlockPos and biome Holder, or null if not found

</ApiMemberCard>

## locateBiome

<ApiMemberCard
  id="locatebiome"
  name="locateBiome"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun locateBiome(biomeKey: TagKey<Biome>, level: ServerLevel, startPos: BlockPos = BlockPos.ZERO): Pair<BlockPos, Holder<Biome>>?
```

Find closest biome by tag key.

### Parameters

| Parameter | Description |
| --- | --- |
| `biomeKey` | biome tag key |
| `level` | server level to search |
| `startPos` | starting position |

### Returns

Pair of BlockPos and biome Holder, or null if not found

</ApiMemberCard>

## placeFeature

<ApiMemberCard
  id="placefeature"
  name="placeFeature"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun placeFeature(feature: Identifier, pos: BlockPos)
```

Place a configured feature at a position.

### Parameters

| Parameter | Description |
| --- | --- |
| `feature` | feature identifier |
| `pos` | position to place |

</ApiMemberCard>

## placeJigsaw

<ApiMemberCard
  id="placejigsaw"
  name="placeJigsaw"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun placeJigsaw(templatePool: Identifier, start: Identifier, depth: Int, pos: BlockPos)
```

Place a jigsaw structure from a template pool.

### Parameters

| Parameter | Description |
| --- | --- |
| `templatePool` | pool identifier |
| `start` | starting template identifier |
| `depth` | placement depth |
| `pos` | starting position |

</ApiMemberCard>

## placeStructure

<ApiMemberCard
  id="placestructure"
  name="placeStructure"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun placeStructure(structure: Identifier, pos: BlockPos)
```

Place a structure by identifier at a position.

### Parameters

| Parameter | Description |
| --- | --- |
| `structure` | structure identifier |
| `pos` | position to place |

</ApiMemberCard>

## playSound

<ApiMemberCard
  id="playsound"
  name="playSound"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playSound(level: ServerLevel, players: Collection<ServerPlayer>, sound: Identifier, soundSource: SoundSource, pos: Vec3, volume: Float = 1.0f, pitch: Float = 1.0f, minVolume: Float = 0.0f)
```

Play a sound to a set of players, performing distance attenuation and minimum volume handling.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `players` | players to send sound to |
| `sound` | sound identifier |
| `soundSource` | sound category/source |
| `pos` | sound origin position |
| `volume` | base volume |
| `pitch` | playback pitch |
| `minVolume` | minimum audible volume when out of range |

</ApiMemberCard>

## randomSample

<ApiMemberCard
  id="randomsample"
  name="randomSample"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun randomSample(randomSequence: Identifier? = null, broadcast: Boolean = false, min: Int = Int.MIN_VALUE, max: Int = Int.MAX_VALUE): Int?
```

Sample a random integer in [min, max] using optional random sequence.

### Parameters

| Parameter | Description |
| --- | --- |
| `randomSequence` | optional identifier for random sequence |
| `broadcast` | whether to broadcast the result to players |
| `min` | inclusive minimum |
| `max` | inclusive maximum |

### Returns

sampled integer or null on invalid range

</ApiMemberCard>

## resetSequence

<ApiMemberCard
  id="resetsequence"
  name="resetSequence"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetSequence(level: ServerLevel, randomSequence: Identifier)
```

Reset a named random sequence for a level to its default seed.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `randomSequence` | sequence identifier |

</ApiMemberCard>

## resetSequence

<ApiMemberCard
  id="resetsequence"
  name="resetSequence"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetSequence(level: ServerLevel, randomSequence: Identifier, seed: Int, includeWorldSeed: Boolean = true, includeSequenceID: Boolean = true)
```

Reset a named random sequence with a specific seed and behavior flags.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `randomSequence` | sequence identifier |
| `seed` | integer seed |
| `includeWorldSeed` | whether to include world seed |
| `includeSequenceID` | whether to include sequence id |

</ApiMemberCard>

## resetAllSequences

<ApiMemberCard
  id="resetallsequences"
  name="resetAllSequences"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetAllSequences(level: ServerLevel)
```

Clear all random sequences for a level.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |

</ApiMemberCard>

## resetAllSequencesAndSetNewDefaults

<ApiMemberCard
  id="resetallsequencesandsetnewdefaults"
  name="resetAllSequencesAndSetNewDefaults"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetAllSequencesAndSetNewDefaults(level: ServerLevel, seed: Int, includeWorldSeed: Boolean = true, includeSequenceID: Boolean = true)
```

Reset all sequences and set new defaults.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `seed` | seed to set as default |
| `includeWorldSeed` | whether to include world seed |
| `includeSequenceID` | whether to include sequence id |

</ApiMemberCard>

## setTickingRate

<ApiMemberCard
  id="settickingrate"
  name="setTickingRate"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setTickingRate(f: Float)
```

Set the server ticking rate.

### Parameters

| Parameter | Description |
| --- | --- |
| `f` | new tick rate (ticks per second) |

</ApiMemberCard>

## tickQuery

<ApiMemberCard
  id="tickquery"
  name="tickQuery"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tickQuery(): Float
```

Query current tickrate.

### Returns

current tickrate value

</ApiMemberCard>

## tickSprint

<ApiMemberCard
  id="ticksprint"
  name="tickSprint"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tickSprint(i: Int)
```

Request the server to sprint tick advancement by given ticks.

### Parameters

| Parameter | Description |
| --- | --- |
| `i` | number of ticks to sprint |

</ApiMemberCard>

## setTickFreeze

<ApiMemberCard
  id="settickfreeze"
  name="setTickFreeze"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setTickFreeze(freeze: Boolean)
```

Freeze or unfreeze server tick processing.

### Parameters

| Parameter | Description |
| --- | --- |
| `freeze` | true to freeze, false to unfreeze |

</ApiMemberCard>

## tickStep

<ApiMemberCard
  id="tickstep"
  name="tickStep"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tickStep(i: Int)
```

Step the server forward a number of ticks while paused.

### Parameters

| Parameter | Description |
| --- | --- |
| `i` | number of ticks to step |

</ApiMemberCard>

## tickStopStepping

<ApiMemberCard
  id="tickstopstepping"
  name="tickStopStepping"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tickStopStepping(): Boolean
```

Stop stepping mode on the tick manager.

### Returns

true if stepping was stopped

</ApiMemberCard>

## tickStopSprinting

<ApiMemberCard
  id="tickstopsprinting"
  name="tickStopSprinting"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tickStopSprinting(): Boolean
```

Stop sprinting mode on the tick manager.

### Returns

true if sprinting was stopped

</ApiMemberCard>

## getDuration

<ApiMemberCard
  id="getduration"
  name="getDuration"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getDuration(level: ServerLevel, i: Int, intProvider: IntProvider): Int
```

Resolve duration: if i == -1 use IntProvider sampled value; otherwise return i.

### Parameters

| Parameter | Description |
| --- | --- |
| `i` | provided duration (-1 means sample) |
| `intProvider` | provider to sample from |

### Returns

resolved duration

</ApiMemberCard>

## setClear

<ApiMemberCard
  id="setclear"
  name="setClear"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setClear(level: ServerLevel, i: Int)
```

Set clear weather for specified duration (or sample when -1).

### Parameters

| Parameter | Description |
| --- | --- |
| `i` | duration ticks or -1 to sample |

</ApiMemberCard>

## setRain

<ApiMemberCard
  id="setrain"
  name="setRain"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setRain(level: ServerLevel, i: Int)
```

Set rain weather for specified duration (or sample when -1).

### Parameters

| Parameter | Description |
| --- | --- |
| `i` | duration ticks or -1 to sample |

</ApiMemberCard>

## setThunder

<ApiMemberCard
  id="setthunder"
  name="setThunder"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setThunder(level: ServerLevel, i: Int)
```

Set thunder weather for specified duration (or sample when -1).

### Parameters

| Parameter | Description |
| --- | --- |
| `i` | duration ticks or -1 to sample |

</ApiMemberCard>

## setWorldBorderDamageBuffer

<ApiMemberCard
  id="setworldborderdamagebuffer"
  name="setWorldBorderDamageBuffer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWorldBorderDamageBuffer(level: ServerLevel, distance: Double)
```

Set world border safe-zone buffer.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level whose border to modify |
| `distance` | safe distance buffer |

</ApiMemberCard>

## setWorldBorderDamageAmount

<ApiMemberCard
  id="setworldborderdamageamount"
  name="setWorldBorderDamageAmount"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWorldBorderDamageAmount(level: ServerLevel, damage: Double)
```

Set world border damage per block amount.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `damage` | damage per block |

</ApiMemberCard>

## setWorldBorderWarningTime

<ApiMemberCard
  id="setworldborderwarningtime"
  name="setWorldBorderWarningTime"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWorldBorderWarningTime(level: ServerLevel, time: Int)
```

Set world border warning time.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `time` | warning time in seconds |

</ApiMemberCard>

## setWorldBorderWarningDistance

<ApiMemberCard
  id="setworldborderwarningdistance"
  name="setWorldBorderWarningDistance"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWorldBorderWarningDistance(level: ServerLevel, distance: Int)
```

Set world border warning distance in blocks.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `distance` | warning distance |

</ApiMemberCard>

## getWorldBorderSize

<ApiMemberCard
  id="getworldbordersize"
  name="getWorldBorderSize"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getWorldBorderSize(level: ServerLevel): Double
```

Get the current world border size.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |

### Returns

world border size (double)

</ApiMemberCard>

## setWorldBorderSize

<ApiMemberCard
  id="setworldbordersize"
  name="setWorldBorderSize"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWorldBorderSize(level: ServerLevel, size: Double, time: Long = 0L)
```

Set world border size, optionally over time.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `size` | target border size |
| `time` | time in ticks to lerp to new size (0 for instant) |

</ApiMemberCard>

