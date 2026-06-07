---
title: KattonPlayerApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonPlayerApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonPlayerApi.kt"
>
对所有在线玩家的类似列表的访问。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;KattonPlayerList&quot;,&quot;href&quot;:&quot;#kattonplayerlist&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonPlayerList.get&quot;,&quot;href&quot;:&quot;#kattonplayerlist-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonPlayerList.get&quot;,&quot;href&quot;:&quot;#kattonplayerlist-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelPlayerCollection&quot;,&quot;href&quot;:&quot;#kattonlevelplayercollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelPlayerCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelplayercollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addItem&quot;,&quot;href&quot;:&quot;#additem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearInventory&quot;,&quot;href&quot;:&quot;#clearinventory&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setItem&quot;,&quot;href&quot;:&quot;#setitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getItem&quot;,&quot;href&quot;:&quot;#getitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;giveItem&quot;,&quot;href&quot;:&quot;#giveitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;hasItem&quot;,&quot;href&quot;:&quot;#hasitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;findItem&quot;,&quot;href&quot;:&quot;#finditem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeItem&quot;,&quot;href&quot;:&quot;#removeitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;enchant&quot;,&quot;href&quot;:&quot;#enchant&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;enchantMainHand&quot;,&quot;href&quot;:&quot;#enchantmainhand&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addXpPoints&quot;,&quot;href&quot;:&quot;#addxppoints&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addXpLevels&quot;,&quot;href&quot;:&quot;#addxplevels&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setXpLevel&quot;,&quot;href&quot;:&quot;#setxplevel&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getXpLevel&quot;,&quot;href&quot;:&quot;#getxplevel&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getXpProgress&quot;,&quot;href&quot;:&quot;#getxpprogress&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;spawnPoint&quot;,&quot;href&quot;:&quot;#spawnpoint&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWorldSpawn&quot;,&quot;href&quot;:&quot;#setworldspawn&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;spectate&quot;,&quot;href&quot;:&quot;#spectate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## KattonPlayerList

<ApiMemberCard
  id="kattonplayerlist"
  name="KattonPlayerList"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonPlayerList( val playerList: PlayerList ) : List<ServerPlayer> by playerList.players
```

对所有在线玩家的类似列表的访问。

### 属性

| 属性 | 说明 |
| --- | --- |
| `playerList` | 底层PlayerList |

### KattonPlayerList.get

<ApiMemberCard
  id="kattonplayerlist-get"
  name="KattonPlayerList.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(name: String): ServerPlayer?
```

按名字查找球员。

</ApiMemberCard>

### KattonPlayerList.get

<ApiMemberCard
  id="kattonplayerlist-get"
  name="KattonPlayerList.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(uuid: UUID): ServerPlayer?
```

通过UUID查找玩家。

</ApiMemberCard>

</ApiMemberCard>

## KattonLevelPlayerCollection

<ApiMemberCard
  id="kattonlevelplayercollection"
  name="KattonLevelPlayerCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonLevelPlayerCollection( val level: ServerLevel ) : List<ServerPlayer> by level.players
```

特定世界内的玩家集合。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含玩家的ServerLevel |

### KattonLevelPlayerCollection.get

<ApiMemberCard
  id="kattonlevelplayercollection-get"
  name="KattonLevelPlayerCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(uuid: UUID): Player?
```

在此世界中找到UUID的玩家。

</ApiMemberCard>

</ApiMemberCard>

## addItem

<ApiMemberCard
  id="additem"
  name="addItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun Player.addItem(item: Item, amount: Int)
```

将物品添加到玩家的库存中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 玩家接收物品 |
| `item` | 要添加的物品类型 |
| `amount` | 添加数量 |

</ApiMemberCard>

## clearInventory

<ApiMemberCard
  id="clearinventory"
  name="clearInventory"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearInventory(player: Player)
```

清除玩家的库存。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 库存将被清除的玩家 |

</ApiMemberCard>

## setItem

<ApiMemberCard
  id="setitem"
  name="setItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setItem(player: Player, slot: Int, itemStack: ItemStack)
```

将物品放入玩家的物品栏中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要修改的播放器 |
| `slot` | 库存槽位索引 |
| `itemStack` | 要设置的物品堆栈 |

</ApiMemberCard>

## getItem

<ApiMemberCard
  id="getitem"
  name="getItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getItem(player: Player, slot: Int): ItemStack
```

从玩家的库存槽中获取该物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要查询的播放器 |
| `slot` | 库存槽位索引 |

### 返回值

ItemStack 在插槽中

</ApiMemberCard>

## giveItem

<ApiMemberCard
  id="giveitem"
  name="giveItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun giveItem(player: Player, itemStack: ItemStack): Boolean
```

尝试为玩家提供一个物品堆栈。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 玩家接收物品 |
| `itemStack` | 给予的ItemStack |

### 返回值

如果添加到库存则为 true，如果已满则为 false

</ApiMemberCard>

## hasItem

<ApiMemberCard
  id="hasitem"
  name="hasItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun hasItem(player: Player, item: Item): Boolean
```

检查玩家的库存中是否有特定的物品类型。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要检查的玩家 |
| `item` | 要搜索的物品类型 |

### 返回值

如果玩家拥有该物品，则为 true，否则为 false

</ApiMemberCard>

## findItem

<ApiMemberCard
  id="finditem"
  name="findItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun findItem(player: Player, item: Item): Int
```

查找玩家库存中物品的槽位索引。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要搜索的播放器 |
| `item` | 要查找的物品类型 |

### 返回值

槽索引，如果未找到则为 -1

</ApiMemberCard>

## removeItem

<ApiMemberCard
  id="removeitem"
  name="removeItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeItem(player: Player, item: Item, count: Int): Boolean
```

从玩家的库存中删除一定数量的物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要修改的播放器 |
| `item` | 要删除的物品类型 |
| `count` | 去除量 |

### 返回值

如果删除成功则为 true，否则为 false

</ApiMemberCard>

## enchant

<ApiMemberCard
  id="enchant"
  name="enchant"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun enchant(itemStack: ItemStack, enchantment: Holder<Enchantment>, level: Int)
```

用结界对 ItemStack 进行附魔。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemStack` | 目标ItemStack |
| `enchantment` | 要申请的结界持有者 |
| `level` | 附魔等级 |

</ApiMemberCard>

## enchantMainHand

<ApiMemberCard
  id="enchantmainhand"
  name="enchantMainHand"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun enchantMainHand(entity: LivingEntity, enchantment: Holder<Enchantment>, level: Int)
```

为实体的主手上的物品（如果存在）附魔。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标LivingEntity |
| `enchantment` | 要申请的结界持有者 |
| `level` | 附魔等级 |

</ApiMemberCard>

## addXpPoints

<ApiMemberCard
  id="addxppoints"
  name="addXpPoints"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addXpPoints(player: Player, points: Int)
```

为玩家提供经验值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家 |
| `points` | 需要添加的经验值 |

</ApiMemberCard>

## addXpLevels

<ApiMemberCard
  id="addxplevels"
  name="addXpLevels"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addXpLevels(player: Player, levels: Int)
```

为玩家提供经验等级。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家 |
| `levels` | 要添加的世界 |

</ApiMemberCard>

## setXpLevel

<ApiMemberCard
  id="setxplevel"
  name="setXpLevel"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setXpLevel(player: Player, level: Int)
```

设置玩家的经验等级。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家 |
| `level` | 要设置的电平值 |

</ApiMemberCard>

## getXpLevel

<ApiMemberCard
  id="getxplevel"
  name="getXpLevel"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getXpLevel(player: Player): Int
```

获取玩家的经验等级。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家 |

### 返回值

目前的经验水平

</ApiMemberCard>

## getXpProgress

<ApiMemberCard
  id="getxpprogress"
  name="getXpProgress"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getXpProgress(player: Player): Float
```

获取玩家的经验进度（分数）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家 |

### 返回值

体验浮动进度 (0..1)

</ApiMemberCard>

## spawnPoint

<ApiMemberCard
  id="spawnpoint"
  name="spawnPoint"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun spawnPoint(player: MutableCollection<ServerPlayer>, level: ServerLevel, pos: BlockPos, rot: Vec2)
```

为一组玩家设置生成点。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 设置ServerPlayer的集合 |
| `level` | 维度的服务器世界 |
| `pos` | 重生位置 |
| `rot` | 旋转矢量（俯仰，x / 偏航，y） |

</ApiMemberCard>

## setWorldSpawn

<ApiMemberCard
  id="setworldspawn"
  name="setWorldSpawn"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWorldSpawn(level: ServerLevel, blockPos: BlockPos, rot: Vec2)
```

设置世界的世界生成和重生方向。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `blockPos` | 产卵位置 |
| `rot` | 旋转矢量（俯仰，x / 偏航，y） |

</ApiMemberCard>

## spectate

<ApiMemberCard
  id="spectate"
  name="spectate"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun spectate(player: ServerPlayer, target: Entity?): Boolean
```

让玩家观看目标实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 旁观者ServerPlayer |
| `target` | 要观看的实体，或 null 以停止 |

### 返回值

如果观察成功则为 true，否则为 false

</ApiMemberCard>

