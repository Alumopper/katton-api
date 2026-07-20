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
以类似 Map 的方式按 ResourceKey 访问所有服务端关卡。
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

以类似 Map 的方式按 ResourceKey 访问所有服务端关卡。

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

快速访问主世界关卡。

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

快速访问下界关卡。

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

快速访问末地关卡。

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

以类似 Map 的方式访问所有服务端关卡。

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

访问关卡中的玩家。

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

访问关卡中的方块实体。

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

访问关卡中的实体。

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

访问关卡中的方块。

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

访问关卡中的方块状态。

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

在指定位置设置特定方块状态。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改的关卡。 |
| `pos` | 方块位置。 |
| `state` | 要设置的方块状态。 |

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

使用方块类型的默认状态在指定位置设置方块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改的关卡。 |
| `pos` | 方块位置。 |
| `block` | 要设置的方块类型。 |

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

使用给定方块状态填充一个区域。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改的关卡。 |
| `start` | 起始位置（包含）。 |
| `end` | 结束位置（包含）。 |
| `state` | 要放置的方块状态。 |

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

使用给定方块类型的默认状态填充一个区域。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改的关卡。 |
| `start` | 起始位置（包含）。 |
| `end` | 结束位置（包含）。 |
| `block` | 要放置的方块类型。 |

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

使用给定谓词筛选生物群系 Holder，并填充区域内的生物群系。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改的服务端关卡。 |
| `start` | 起始位置。 |
| `end` | 结束位置。 |
| `biome` | 要应用的生物群系标识符。 |
| `biomePredicate` | 用于进一步筛选生物群系应用范围的谓词。 |

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

按 ResourceKey 定位结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `structureKey` | 结构资源键。 |
| `level` | 要搜索的服务端关卡。 |
| `startPos` | 搜索起始位置。 |

### 返回值

返回结构所在的 BlockPos；找不到时返回 null。

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

按 TagKey 定位结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `structureKey` | 结构标签键。 |
| `level` | 要搜索的服务端关卡。 |
| `startPos` | 起始位置。 |

### 返回值

返回 BlockPos；找不到时返回 null。

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

按 ResourceKey 查找最近的生物群系。

### 参数

| 参数 | 说明 |
| --- | --- |
| `biomeKey` | 生物群系资源键。 |
| `level` | 要搜索的服务端关卡。 |
| `startPos` | 起始位置。 |

### 返回值

返回方块位置和生物群系 Holder 的 Pair；找不到则返回 null。

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

按 TagKey 查找最近的生物群系。

### 参数

| 参数 | 说明 |
| --- | --- |
| `biomeKey` | 生物群系标签键。 |
| `level` | 要搜索的服务端关卡。 |
| `startPos` | 起始位置。 |

### 返回值

返回方块位置和生物群系 Holder 的 Pair；找不到则返回 null。

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

在指定位置放置已配置特性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `feature` | 特性标识符。 |
| `pos` | 放置位置。 |

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

从模板池放置拼图结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `templatePool` | 池标识符。 |
| `start` | 起始模板标识符。 |
| `depth` | 放置深度。 |
| `pos` | 起始位置。 |

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

按标识符在指定位置放置结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `structure` | 结构标识符。 |
| `pos` | 放置位置。 |

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

向一组玩家播放声音，并处理距离衰减和最小音量。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `players` | 要接收声音的玩家。 |
| `sound` | 声音标识符。 |
| `soundSource` | 声音类别或来源。 |
| `pos` | 声音来源位置。 |
| `volume` | 基础音量。 |
| `pitch` | 播放音高。 |
| `minVolume` | 超出范围时的最小可听音量。 |

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

使用可选随机序列在 [min, max] 范围内抽取随机整数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `randomSequence` | 随机序列的可选标识符。 |
| `broadcast` | 是否向玩家广播结果。 |
| `min` | 包含的最小值。 |
| `max` | 包含的最大值。 |

### 返回值

返回随机整数；范围无效时返回 null。

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

将关卡中的命名随机序列重置为默认种子。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `randomSequence` | 序列标识符。 |

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

使用指定种子和行为标志重置命名随机序列。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `randomSequence` | 序列标识符。 |
| `seed` | 整数种子。 |
| `includeWorldSeed` | 是否包含世界种子。 |
| `includeSequenceID` | 是否包含序列 ID。 |

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

清除关卡中的所有随机序列。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |

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

重置所有随机序列并设置新的默认值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `seed` | 要设为默认值的种子。 |
| `includeWorldSeed` | 是否包含世界种子。 |
| `includeSequenceID` | 是否包含序列 ID。 |

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

设置服务器 tick 速率。

### 参数

| 参数 | 说明 |
| --- | --- |
| `f` | 新的 tick 速率（每秒刻数）。 |

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

查询当前 tick 速率。

### 返回值

返回 tick 速率值。

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

请求服务器按给定 tick 数快速推进。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 要快速推进的 tick 数。 |

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

冻结或解除冻结服务器 tick 处理。

### 参数

| 参数 | 说明 |
| --- | --- |
| `freeze` | true 表示冻结，false 表示解除冻结。 |

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

服务器暂停时按指定 tick 数步进。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 要步进的 tick 数。 |

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

停止 tick 管理器的步进模式。

### 返回值

如果已停止步进则返回 true。

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

停止 tick 管理器的快速推进模式。

### 返回值

如果已停止快速推进则返回 true。

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

解析持续时间：如果 [i] 为 -1，则从 [intProvider] 抽样；否则返回 [i]。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 提供的持续时间，-1 表示抽样。 |
| `intProvider` | 用于抽样的 IntProvider。 |

### 返回值

返回持续时间。

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

设置晴朗天气的持续时间；传入 -1 时从 IntProvider 抽样。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 持续 tick 数，或 -1 表示抽样。 |

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

设置降雨天气的持续时间；传入 -1 时从 IntProvider 抽样。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 持续 tick 数，或 -1 表示抽样。 |

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

设置雷暴天气的持续时间；传入 -1 时从 IntProvider 抽样。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 持续 tick 数，或 -1 表示抽样。 |

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

设置世界边界安全缓冲区。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改世界边界的服务端关卡。 |
| `distance` | 安全距离缓冲区。 |

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

设置世界边界每格伤害值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `damage` | 每格伤害值。 |

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

设置世界边界警告时间。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `time` | 警告时间，单位为秒。 |

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

设置世界边界警告距离，单位为方块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `distance` | 警告距离。 |

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

获取当前世界边界大小。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |

### 返回值

返回世界边界大小。

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

设置世界边界大小，可选在一段时间内渐变。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `size` | 目标边界大小。 |
| `time` | 插值到新大小的 tick 数，0 表示立即生效。 |

</ApiMemberCard>

