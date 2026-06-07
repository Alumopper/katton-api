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
通过ResourceKey对所有服务器世界进行类似地图的访问。
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

通过ResourceKey对所有服务器世界进行类似地图的访问。

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

快速进入主世界世界。

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

快速进入下界。

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

快速进入最终世界。

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

对所有服务器世界的类似地图的访问。

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

访问某个世界中的玩家。

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

访问世界中的方块实体。

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

访问世界中的实体。

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

访问世界中的方块。

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

访问世界中的方方块状态。

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

将位置处的块设置为特定的BlockState。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 修改世界 |
| `pos` | 块位置 |
| `state` | BlockState 设置 |

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

使用块类型的默认状态在位置设置块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 修改世界 |
| `pos` | 块位置 |
| `block` | 要设置的块类型 |

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

用给定的 BlockState 填充一个区域。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 修改世界 |
| `start` | 起始位置（含） |
| `end` | 结束位置（含） |
| `state` | BlockState 放置 |

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

使用给定块类型的默认状态填充区域。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 修改世界 |
| `start` | 起始位置（含） |
| `end` | 结束位置（含） |
| `block` | 要放置的块类型 |

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

使用生物群系持有者的谓词填充区域的生物群系。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界修改 |
| `start` | 起始位置 |
| `end` | 结束位置 |
| `biome` | 要应用的生物群系标识符 |
| `biomePredicate` | 进一步过滤生物群系应用的谓词 |

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

通过ResourceKey定位结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `structureKey` | 结构资源键 |
| `level` | 要搜索的服务器世界 |
| `startPos` | 搜索的起始位置 |

### 返回值

结构中最近的 BlockPos，如果未找到则为 null

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

通过TagKey定位结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `structureKey` | 结构标签键 |
| `level` | 要搜索的服务器世界 |
| `startPos` | 起始位置 |

### 返回值

最接近的 BlockPos 或 null（如果未找到）

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

通过资源键查找最近的生物群系。

### 参数

| 参数 | 说明 |
| --- | --- |
| `biomeKey` | 生物群系资源键 |
| `level` | 服务器世界的搜索 |
| `startPos` | 起始位置 |

### 返回值

一对 BlockPos 和生物群系支架，如果未找到则为 null

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

通过标签键查找最近的生物群系。

### 参数

| 参数 | 说明 |
| --- | --- |
| `biomeKey` | 生物群系标签键 |
| `level` | 服务器世界的搜索 |
| `startPos` | 起始位置 |

### 返回值

一对 BlockPos 和生物群系支架，如果未找到则为 null

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

将已配置的功能放置在某个位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `feature` | 特征标识符 |
| `pos` | 放置的位置 |

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

从模板池中放置一个拼图结构。

### 参数

| 参数 | 说明 |
| --- | --- |
| `templatePool` | 池标识符 |
| `start` | 起始模板标识符 |
| `depth` | 放置深度 |
| `pos` | 起始位置 |

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

通过标识符将结构放置在某个位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `structure` | 结构标识符 |
| `pos` | 放置的位置 |

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

向一组玩家播放声音，执行距离衰减和最小音量处理。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `players` | 发送声音的玩家 |
| `sound` | 声音识别器 |
| `soundSource` | 声音类别/来源 |
| `pos` | 声音原点位置 |
| `volume` | 基本体积 |
| `pitch` | 播放音调 |
| `minVolume` | 超出范围时的最小可听音量 |

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

使用可选的随机序列对 [min, max] 中的随机整数进行采样。

### 参数

| 参数 | 说明 |
| --- | --- |
| `randomSequence` | 随机序列的可选标识符 |
| `broadcast` | 是否将结果广播给玩家 |
| `min` | 包容性最小值 |
| `max` | 包含最大值 |

### 返回值

采样整数或无效范围内的 null

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

将某个世界的命名随机序列重置为其默认种子。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `randomSequence` | 序列标识符 |

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

使用特定种子和行为标志重置命名随机序列。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `randomSequence` | 序列标识符 |
| `seed` | 整数种子 |
| `includeWorldSeed` | 是否包含世界种子 |
| `includeSequenceID` | 是否包含序列id |

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

清除一个世界的所有随机序列。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |

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

重置所有序列并设置新的默认值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `seed` | 设置为默认的种子 |
| `includeWorldSeed` | 是否包含世界种子 |
| `includeSequenceID` | 是否包含序列id |

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

设置服务器tick率。

### 参数

| 参数 | 说明 |
| --- | --- |
| `f` | 新的tick率（每秒tick数） |

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

查询当前tick率。

### 返回值

当前tick率值

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

请求服务器按照给定的tick来冲刺tick前进。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 冲刺的tick数 |

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

冻结或解冻服务器tick处理。

### 参数

| 参数 | 说明 |
| --- | --- |
| `freeze` | true 表示冻结， false 表示解冻 |

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

暂停时，服务器向前移动多个tick。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 步数 |

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

停止tick管理器上的步进模式。

### 返回值

如果停止步进则为 true

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

停止tick管理器上的冲刺模式。

### 返回值

true 如果冲刺停止

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

解析持续时间：如果 i == -1 使用 IntProvider 采样值；否则返回i。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 提供的持续时间（-1 表示样本） |
| `intProvider` | 提供样品的供应商 |

### 返回值

解决持续时间

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

设置指定持续时间的晴朗天气（或在 -1 时采样）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 持续时间tick或 -1 进行采样 |

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

设置指定持续时间的降雨天气（或在 -1 时采样）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 持续时间tick或 -1 进行采样 |

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

设置指定持续时间的雷雨天气（或在 -1 时采样）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `i` | 持续时间tick或 -1 进行采样 |

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

设置世界边界安全区缓冲区。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要修改其边界的服务器世界 |
| `distance` | 安全距离缓冲区 |

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

设置每块数量的世界边界伤害。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `damage` | 每块伤害 |

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
| `level` | 服务器世界 |
| `time` | 警告时间（以秒为单位） |

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

以块为单位设置世界边界警告距离。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `distance` | 警告距离 |

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
| `level` | 服务器世界 |

### 返回值

世界边界尺寸（双倍）

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

设置世界边界大小，可以选择随时间变化。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `size` | 目标边框尺寸 |
| `time` | 达到新大小的时间（以tick为单位）（0 表示即时） |

</ApiMemberCard>

