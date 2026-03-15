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
List-like access to all online players.
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

List-like access to all online players.

### Properties

| Property | Description |
| --- | --- |
| `playerList` | The underlying PlayerList |

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

Find a player by name.

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

Find a player by UUID.

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

Collection of players within a specific level.

### Properties

| Property | Description |
| --- | --- |
| `level` | The ServerLevel containing the players |

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

Find a player by UUID in this level.

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

Add an item to a player's inventory.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to receive the item |
| `item` | the Item type to add |
| `amount` | the quantity to add |

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

Clear a player's inventory.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player whose inventory will be cleared |

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

Set an item into a player's inventory slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to modify |
| `slot` | inventory slot index |
| `itemStack` | item stack to set |

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

Get the item from a player's inventory slot.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to query |
| `slot` | inventory slot index |

### Returns

ItemStack in the slot

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

Try to give an item stack to a player.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to receive the item |
| `itemStack` | the ItemStack to give |

### Returns

true if added to inventory, false if full

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

Check if a player has a specific item type in their inventory.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to check |
| `item` | the Item type to search for |

### Returns

true if the player has the item, false otherwise

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

Find the slot index of an item in player's inventory.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to search |
| `item` | item type to find |

### Returns

slot index or -1 if not found

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

Remove a count of items from player's inventory.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the Player to modify |
| `item` | item type to remove |
| `count` | amount to remove |

### Returns

true if removal succeeded, false otherwise

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

Enchant an ItemStack with an enchantment.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemStack` | target ItemStack |
| `enchantment` | enchantment holder to apply |
| `level` | enchantment level |

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

Enchant the item in an entity's main hand if present.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target LivingEntity |
| `enchantment` | enchantment holder to apply |
| `level` | enchantment level |

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

Give experience points to a player.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target Player |
| `points` | experience points to add |

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

Give experience levels to a player.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target Player |
| `levels` | levels to add |

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

Set a player's experience level.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target Player |
| `level` | level value to set |

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

Get a player's experience level.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target Player |

### Returns

current experience level

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

Get a player's experience progress (fraction).

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target Player |

### Returns

experience progress as float (0..1)

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

Set spawn point for a collection of players.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | collection of ServerPlayer to set |
| `level` | server level for dimension |
| `pos` | respawn position |
| `rot` | rotation vector (pitch,x / yaw,y) |

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

Set the world spawn and respawn orientation for a level.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `blockPos` | spawn position |
| `rot` | rotation vector (pitch,x / yaw,y) |

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

Make a player spectate a target entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | spectator ServerPlayer |
| `target` | entity to spectate, or null to stop |

### Returns

true if spectation succeeded, false otherwise

</ApiMemberCard>

