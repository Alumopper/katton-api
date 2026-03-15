---
title: ServerPlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerPlayerEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerPlayerEvent.kt"
>
Server player events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerPlayerEvent&quot;,&quot;href&quot;:&quot;#serverplayerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerJoin&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerjoin&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerLeave&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerleave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onAfterPlayerRespawn&quot;,&quot;href&quot;:&quot;#serverplayerevent-onafterplayerrespawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerCopy&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayercopy&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxpchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpLevelChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxplevelchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerPickupXp&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerpickupxp&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onStartTracking&quot;,&quot;href&quot;:&quot;#serverplayerevent-onstarttracking&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onStopTracking&quot;,&quot;href&quot;:&quot;#serverplayerevent-onstoptracking&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerLoadFromFile&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerloadfromfile&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerSaveToFile&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayersavetofile&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onItemToss&quot;,&quot;href&quot;:&quot;#serverplayerevent-onitemtoss&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onItemPickupPre&quot;,&quot;href&quot;:&quot;#serverplayerevent-onitempickuppre&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onItemPickupPost&quot;,&quot;href&quot;:&quot;#serverplayerevent-onitempickuppost&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerItemCrafted&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayeritemcrafted&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerItemSmelted&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayeritemsmelted&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerSpawnPhantoms&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerspawnphantoms&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromBlock&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromEntity&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerTrackingArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playertrackingarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerFileArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playerfilearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerItemPickupPreArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playeritempickupprearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerItemPickupPostArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playeritempickuppostarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerCraftedItemArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playercrafteditemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerSmeltedItemArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playersmelteditemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerSpawnPhantomsArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playerspawnphantomsarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ServerPlayerEvent

<ApiMemberCard
  id="serverplayerevent"
  name="ServerPlayerEvent"
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

Server player events for NeoForge platform.

This object provides events related to server player lifecycle including
join/leave/respawn, XP events, item pickup/toss, crafting, and more.

### ServerPlayerEvent.onPlayerJoin

<ApiMemberCard
  id="serverplayerevent-onplayerjoin"
  name="ServerPlayerEvent.onPlayerJoin"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPlayerJoin
```

Event triggered when a player joins the server.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerLeave

<ApiMemberCard
  id="serverplayerevent-onplayerleave"
  name="ServerPlayerEvent.onPlayerLeave"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPlayerLeave
```

Event triggered when a player leaves the server.

</ApiMemberCard>

### ServerPlayerEvent.onAfterPlayerRespawn

<ApiMemberCard
  id="serverplayerevent-onafterplayerrespawn"
  name="ServerPlayerEvent.onAfterPlayerRespawn"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterPlayerRespawn
```

Event triggered after a player respawns.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerCopy

<ApiMemberCard
  id="serverplayerevent-onplayercopy"
  name="ServerPlayerEvent.onPlayerCopy"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPlayerCopy
```

Event triggered when player data is copied (e.g., on respawn or dimension change).

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpChange

<ApiMemberCard
  id="serverplayerevent-onplayerxpchange"
  name="ServerPlayerEvent.onPlayerXpChange"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerXpChange
```

Event triggered when a player's XP changes.
Can be cancelled to prevent the change.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpLevelChange

<ApiMemberCard
  id="serverplayerevent-onplayerxplevelchange"
  name="ServerPlayerEvent.onPlayerXpLevelChange"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerXpLevelChange
```

Event triggered when a player's XP level changes.
Can be cancelled to prevent the change.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerPickupXp

<ApiMemberCard
  id="serverplayerevent-onplayerpickupxp"
  name="ServerPlayerEvent.onPlayerPickupXp"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerPickupXp
```

Event triggered when a player picks up an XP orb.
Can be cancelled to prevent pickup.

</ApiMemberCard>

### ServerPlayerEvent.onStartTracking

<ApiMemberCard
  id="serverplayerevent-onstarttracking"
  name="ServerPlayerEvent.onStartTracking"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onStartTracking
```

Event triggered when a player starts tracking an entity.

</ApiMemberCard>

### ServerPlayerEvent.onStopTracking

<ApiMemberCard
  id="serverplayerevent-onstoptracking"
  name="ServerPlayerEvent.onStopTracking"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onStopTracking
```

Event triggered when a player stops tracking an entity.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerLoadFromFile

<ApiMemberCard
  id="serverplayerevent-onplayerloadfromfile"
  name="ServerPlayerEvent.onPlayerLoadFromFile"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerLoadFromFile
```

Event triggered when a player data is loaded from file.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerSaveToFile

<ApiMemberCard
  id="serverplayerevent-onplayersavetofile"
  name="ServerPlayerEvent.onPlayerSaveToFile"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerSaveToFile
```

Event triggered when a player data is saved to file.

</ApiMemberCard>

### ServerPlayerEvent.onItemToss

<ApiMemberCard
  id="serverplayerevent-onitemtoss"
  name="ServerPlayerEvent.onItemToss"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemToss
```

Event triggered when a player tosses an item.

</ApiMemberCard>

### ServerPlayerEvent.onItemPickupPre

<ApiMemberCard
  id="serverplayerevent-onitempickuppre"
  name="ServerPlayerEvent.onItemPickupPre"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemPickupPre
```

Event triggered before a player picks up an item.
Can modify whether the pickup is allowed.

</ApiMemberCard>

### ServerPlayerEvent.onItemPickupPost

<ApiMemberCard
  id="serverplayerevent-onitempickuppost"
  name="ServerPlayerEvent.onItemPickupPost"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemPickupPost
```

Event triggered after a player picks up an item.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerItemCrafted

<ApiMemberCard
  id="serverplayerevent-onplayeritemcrafted"
  name="ServerPlayerEvent.onPlayerItemCrafted"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerItemCrafted
```

Event triggered when a player crafts an item.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerItemSmelted

<ApiMemberCard
  id="serverplayerevent-onplayeritemsmelted"
  name="ServerPlayerEvent.onPlayerItemSmelted"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerItemSmelted
```

Event triggered when a player smelts an item.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerSpawnPhantoms

<ApiMemberCard
  id="serverplayerevent-onplayerspawnphantoms"
  name="ServerPlayerEvent.onPlayerSpawnPhantoms"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerSpawnPhantoms
```

Event triggered when phantoms are about to spawn for a player.
Can modify the number of phantoms and the spawn result.

</ApiMemberCard>

### ServerPlayerEvent.onPickFromBlock

<ApiMemberCard
  id="serverplayerevent-onpickfromblock"
  name="ServerPlayerEvent.onPickFromBlock"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPickFromBlock
```

Event triggered when a player picks an item from a block (middle-click).

### Returns

The ItemStack to be picked, or null for default behavior.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### ServerPlayerEvent.onPickFromEntity

<ApiMemberCard
  id="serverplayerevent-onpickfromentity"
  name="ServerPlayerEvent.onPickFromEntity"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPickFromEntity
```

Event triggered when a player picks an item from an entity (middle-click).

### Returns

The ItemStack to be picked, or null for default behavior.
Note: This is a placeholder for NeoForge compatibility.

</ApiMemberCard>

### ServerPlayerEvent.PlayerTrackingArg

<ApiMemberCard
  id="serverplayerevent-playertrackingarg"
  name="ServerPlayerEvent.PlayerTrackingArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerTrackingArg( val player: ServerPlayer, val target: Entity )
```

Argument class for player tracking events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player tracking the target |
| `target` | The entity being tracked |

</ApiMemberCard>

### ServerPlayerEvent.PlayerFileArg

<ApiMemberCard
  id="serverplayerevent-playerfilearg"
  name="ServerPlayerEvent.PlayerFileArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerFileArg( val player: ServerPlayer, val playerDirectory: File, val playerUUID: String )
```

Argument class for player file operations.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player being loaded/saved |
| `playerDirectory` | The directory containing player data |
| `playerUUID` | The UUID of the player |

</ApiMemberCard>

### ServerPlayerEvent.PlayerItemPickupPreArg

<ApiMemberCard
  id="serverplayerevent-playeritempickupprearg"
  name="ServerPlayerEvent.PlayerItemPickupPreArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerItemPickupPreArg( val player: ServerPlayer, val item: ItemEntity, var canPickup: TriState )
```

Argument class for item pickup pre events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player picking up the item |
| `item` | The item entity being picked up |
| `canPickup` | Whether the pickup is allowed (modifiable) |

</ApiMemberCard>

### ServerPlayerEvent.PlayerItemPickupPostArg

<ApiMemberCard
  id="serverplayerevent-playeritempickuppostarg"
  name="ServerPlayerEvent.PlayerItemPickupPostArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerItemPickupPostArg( val player: ServerPlayer, val item: ItemEntity, val originalStack: ItemStack, val currentStack: ItemStack )
```

Argument class for item pickup post events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player who picked up the item |
| `item` | The item entity that was picked up |
| `originalStack` | The original item stack |
| `currentStack` | The current item stack after pickup |

</ApiMemberCard>

### ServerPlayerEvent.PlayerCraftedItemArg

<ApiMemberCard
  id="serverplayerevent-playercrafteditemarg"
  name="ServerPlayerEvent.PlayerCraftedItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerCraftedItemArg( val player: ServerPlayer, val item: ItemStack, val inventory: Container )
```

Argument class for player crafted item events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player who crafted the item |
| `item` | The crafted item stack |
| `inventory` | The inventory where the item was crafted |

</ApiMemberCard>

### ServerPlayerEvent.PlayerSmeltedItemArg

<ApiMemberCard
  id="serverplayerevent-playersmelteditemarg"
  name="ServerPlayerEvent.PlayerSmeltedItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerSmeltedItemArg( val player: ServerPlayer, val item: ItemStack, val amountRemoved: Int )
```

Argument class for player smelted item events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player who smelted the item |
| `item` | The smelted item stack |
| `amountRemoved` | The amount removed from the input |

</ApiMemberCard>

### ServerPlayerEvent.PlayerSpawnPhantomsArg

<ApiMemberCard
  id="serverplayerevent-playerspawnphantomsarg"
  name="ServerPlayerEvent.PlayerSpawnPhantomsArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerSpawnPhantomsArg( val player: ServerPlayer, var phantomsToSpawn: Int, var result: PlayerSpawnPhantomsEvent.Result )
```

Argument class for phantom spawn events.

### Properties

| Property | Description |
| --- | --- |
| `player` | The player for whom phantoms are spawning |
| `phantomsToSpawn` | The number of phantoms to spawn (modifiable) |
| `result` | The spawn result (modifiable) |

</ApiMemberCard>

</ApiMemberCard>

