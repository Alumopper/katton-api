---
title: KattonPlayerApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonPlayerApi"
  module="Common"
  module-key="common"
  package-name=""
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonPlayerApi.kt"
>
以类似 List 的方式访问所有在线玩家。
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

以类似 List 的方式访问所有在线玩家。

### 属性

| 属性 | 说明 |
| --- | --- |
| `playerList` | 底层 PlayerList。 |

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

按名称查找玩家。

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

按 UUID 查找玩家。

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

指定关卡中的玩家集合。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含这些玩家的 ServerLevel。 |

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

在当前关卡中按 UUID 查找玩家。

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

向玩家背包添加物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 接收物品的玩家。 |
| `item` | 要添加的物品类型。 |
| `amount` | 要添加的数量。 |

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

清空玩家背包。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 背包将被清空的玩家。 |

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

将物品设置到玩家背包槽位中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要修改的玩家。 |
| `slot` | 背包槽位索引。 |
| `itemStack` | 要设置的物品堆栈。 |

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

从玩家背包槽位中获取物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要查询的玩家。 |
| `slot` | 背包槽位索引。 |

### 返回值

返回该槽位中的物品堆。

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

尝试给予玩家一个 ItemStack。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 接收物品的玩家。 |
| `itemStack` | 要给予的 ItemStack。 |

### 返回值

如果已添加到背包，则返回 true；如果背包已满，则返回 false。

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

检查玩家背包中是否有指定物品类型。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要检查的玩家。 |
| `item` | 要查找的物品类型。 |

### 返回值

如果玩家持有该物品，则返回 true；否则返回 false。

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

在玩家背包中查找某种物品所在的槽位索引。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要搜索的玩家。 |
| `item` | 要查找的物品类型。 |

### 返回值

返回槽位索引；未找到时返回 -1。

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

从玩家背包中移除指定数量的物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要修改的玩家。 |
| `item` | 要移除的物品类型。 |
| `count` | 要移除的数量。 |

### 返回值

如果移除成功则返回 true，否则返回 false。

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

使用附魔为 ItemStack 添加魔咒。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemStack` | 目标 ItemStack。 |
| `enchantment` | 要应用的附魔 Holder。 |
| `level` | 附魔等级。 |

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

如果实体主手有物品，则为该物品添加魔咒。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标 LivingEntity。 |
| `enchantment` | 要应用的附魔 Holder。 |
| `level` | 附魔等级。 |

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

给予玩家经验点数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标 Player。 |
| `points` | 要增加的经验点数。 |

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

给予玩家经验等级。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标 Player。 |
| `levels` | 要增加的等级数。 |

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
| `player` | 目标 Player。 |
| `level` | 要设置的等级值。 |

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
| `player` | 目标 Player。 |

### 返回值

返回经验等级。

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

获取玩家经验进度（小数）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标 Player。 |

### 返回值

返回经验进度，范围为 0 到 1。

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

为一组玩家设置重生点。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要设置的 ServerPlayer 集合。 |
| `level` | 提供维度信息的服务端关卡。 |
| `pos` | 重生位置。 |
| `rot` | 旋转向量（x 为 pitch，y 为 yaw）。 |

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

设置关卡的世界出生点和重生朝向。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务端关卡。 |
| `blockPos` | 生成位置。 |
| `rot` | 旋转向量（x 为 pitch，y 为 yaw）。 |

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

让玩家观战目标实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 作为观战者的 ServerPlayer。 |
| `target` | 要观战的实体；传入 null 表示停止观战。 |

### 返回值

如果观战成功则返回 true，否则返回 false。

</ApiMemberCard>

