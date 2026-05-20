# Events

In Katton, events are a powerful way to react to various actions and changes in the game. They allow you to execute custom code when specific events occur, such as player interactions, world changes, or entity updates.

To listen to an event, you can use the Katton's event API. You can find all available events in the [Fabric API documentation](../api/fabric/), the [NeoForge API documentation](../api/neoforge/), or the [Paper API documentation](../api/paper/). Each event has its own set of arguments that provide information about the event and allow you to interact with it.

Here is a simple example of how to listen to the `onPlayerJoin` event and send a welcome message to the player. This example is the same as the one in the [Getting Started](./get-started) section.

<!--@include: ../example/quickstart/get-started/01.md-->

Each event has its own set of arguments that provide information about the event and allow you to interact with it. You can find the detailed arguments for each event in [the API documentation](../api/common/event/KattonEventsArg).

## Detailed Event List

Events provided for Fabric, NeoForge, and Paper are listed in the table below.

> [!NOTE]
> Paper also supports **managed events** — you can use `registerEvent<T>` to listen to any Bukkit event directly. See the [Paper API documentation](../api/paper/) for details.

| Event Category | Event Name | Fabric | NeoForge | Paper |
| :--- | :--- | :---: | :---: | :---: |
| **Chunk and Block** | onAfterBlockBreak | ✅ | - | ✅ |
| | onBeforeBlockBreak | ✅ | - | ✅ |
| | onBlockBreak | - | ✅ | ✅ |
| | onBlockEntityLoad | ✅ | ✅ | ✅ |
| | onBlockEntityUnload | ✅ | ✅ | ✅ |
| | onBlockPlace | - | ✅ | ✅ |
| | onCanceledBlockBreak | ✅ | - | ✅ |
| | onChunkDataLoad | - | ✅ | ✅ |
| | onChunkDataSave | - | ✅ | ✅ |
| | onChunkLevelTypeChange | ✅ | ✅ | ✅ |
| | onChunkLoad | ✅ | ✅ | ✅ |
| | onChunkSent | - | ✅ | ✅ |
| | onChunkUnload | ✅ | ✅ | ✅ |
| | onChunkUnWatch | - | ✅ | ✅ |
| | onChunkWatch | - | ✅ | ✅ |
| | onExplosionDetonate | ✅ | ✅ | ✅ |
| | onExplosionStart | ✅ | ✅ | ✅ |
| **Item Component** | onAllowEnchanting | ✅ | ✅ | ✅ |
| | onModifyComponent | ✅ | ✅ | ✅ |
| | onModifyEnchantment | ✅ | ✅ | ✅ |
| **Item** | onUse | ✅ | ✅ | ✅ |
| | onUseOn | ✅ | ✅ | ✅ |
| **Living Behavior** | onAllowBed | ✅ | ✅ | ✅ |
| | onAllowNearbyMonsters | ✅ | ✅ | ✅ |
| | onAllowResettingTime | ✅ | ✅ | ✅ |
| | onAllowSettingSpawn | ✅ | ✅ | ✅ |
| | onAllowSleeping | ✅ | ✅ | ✅ |
| | onAnimalTame | - | ✅ | ✅ |
| | onBabySpawn | - | ✅ | ✅ |
| | onElytraAllow | ✅ | ✅ | ✅ |
| | onElytraCustom | ✅ | ✅ | ✅ |
| | onModifySleepingDirection | ✅ | ✅ | ✅ |
| | onModifyWakeUpPosition | ✅ | ✅ | ✅ |
| | onPlayerWakeUp | ✅ | ✅ | ✅ |
| | onSetBedOccupationState | ✅ | ✅ | ✅ |
| | onStartSleeping | ✅ | ✅ | ✅ |
| | onStopSleeping | ✅ | ✅ | ✅ |
| **Living Use Item** | onUseItemFinish | ✅ | ✅ | ✅ |
| | onUseItemStart | ✅ | ✅ | ✅ |
| | onUseItemStop | ✅ | ✅ | ✅ |
| | onUseItemTick | ✅ | ✅ | ✅ |
| **Loot Table** | onLootTableAllLoad | ✅ | ✅ | ✅ |
| | onLootTableModify | ✅ | ✅ | ✅ |
| | onLootTableModifyDrops | ✅ | ✅ | ✅ |
| | onLootTableReplace | ✅ | ✅ | ✅ |
| **Player** | onAttackBlock | ✅ | - | ✅ |
| | onAttackEntity | ✅ | ✅ | ✅ |
| | onBlockInteract | ✅ | ✅ | ✅ |
| | onDestroyItem | ✅ | ✅ | ✅ |
| | onEntityInteract | ✅ | ✅ | ✅ |
| | onItemInteract | ✅ | ✅ | ✅ |
| | onLeftClickBlock | - | ✅ | ✅ |
| | onUseItemOn | ✅ | - | ✅ |
| | onUseWithoutItem | ✅ | - | ✅ |
| **Server Entity Combat** | onAfterKilledOtherEntity | ✅ | ✅ | ✅ |
| | onCriticalHit | - | ✅ | ✅ |
| | onShieldBlock | ✅ | ✅ | ✅ |
| **Server Entity** | onAfterEntityChangeLevel | ✅ | ✅ | ✅ |
| | onAfterEntityLoad | ✅ | - | ✅ |
| | onAfterPlayerChangeLevel | ✅ | ✅ | ✅ |
| | onEndermanAnger | ✅ | ✅ | ✅ |
| | onEntityLoad | - | ✅ | ✅ |
| | onEntityTeleport | - | ✅ | ✅ |
| | onEntityUnload | ✅ | ✅ | ✅ |
| | onEquipmentChange | ✅ | ✅ | ✅ |
| **Server** | onAfterSave | ✅ | ✅ | ✅ |
| | onBeforeSave | ✅ | ✅ | ✅ |
| | onEndDatapackReload | ✅ | ✅ | ✅ |
| | onEndServerTick | ✅ | ✅ | ✅ |
| | onEndWorldTick | ✅ | ✅ | ✅ |
| | onLevelLoad | - | ✅ | ✅ |
| | onLevelSave | - | ✅ | ✅ |
| | onLevelUnload | - | ✅ | ✅ |
| | onServerStarted | ✅ | ✅ | ✅ |
| | onServerStarting | ✅ | ✅ | ✅ |
| | onServerStopped | ✅ | ✅ | ✅ |
| | onServerStopping | ✅ | ✅ | ✅ |
| | onStartDatapackReload | ✅ | ✅ | ✅ |
| | onStartServerTick | ✅ | ✅ | ✅ |
| | onStartWorldTick | ✅ | ✅ | ✅ |
| | onSyncDatapackContents | ✅ | ✅ | ✅ |
| **Server Living Entity** | onAfterDamage | ✅ | ✅ | ✅ |
| | onAfterDeath | ✅ | ✅ | ✅ |
| | onAllowDamage | ✅ | ✅ | ✅ |
| | onAllowDeath | ✅ | ✅ | ✅ |
| | onLivingDrops | - | ✅ | - |
| | onLivingFall | ✅ | ✅ | ✅ |
| | onLivingHurt | ✅ | ✅ | ✅ |
| | onLivingJump | - | ✅ | ✅ |
| | onMobConversion | ✅ | ✅ | ✅ |
| **Server Message** | onAllowChatMessage | ✅ | - | ✅ |
| | onAllowCommandMessage | ✅ | - | ✅ |
| | onAllowGameMessage | ✅ | - | ✅ |
| | onChatMessage | ✅ | - | ✅ |
| | onCommandMessage | ✅ | - | ✅ |
| | onGameMessage | ✅ | - | ✅ |
| | onServerChat | - | ✅ | ✅ |
| **Server Mob Effect** | onAfterAdd | ✅ | - | ✅ |
| | onAfterRemove | ✅ | - | ✅ |
| | onAllowAdd | ✅ | - | ✅ |
| | onAllowEarlyRemove | ✅ | - | ✅ |
| | onBeforeAdd | ✅ | - | ✅ |
| | onBeforeRemove | ✅ | - | ✅ |
| | onMobEffectAdd | - | ✅ | ✅ |
| | onMobEffectApplicable | - | ✅ | ✅ |
| | onMobEffectExpire | - | ✅ | ✅ |
| | onMobEffectRemove | - | ✅ | ✅ |
| **Server Player** | onAfterPlayerRespawn | ✅ | ✅ | ✅ |
| | onItemPickupPost | - | ✅ | - |
| | onItemPickupPre | - | ✅ | - |
| | onItemToss | - | ✅ | - |
| | onPickFromBlock | ✅ | ✅ | ✅ |
| | onPickFromEntity | ✅ | ✅ | ✅ |
| | onPlayerCopy | ✅ | ✅ | ✅ |
| | onPlayerItemCrafted | - | ✅ | - |
| | onPlayerItemSmelted | - | ✅ | - |
| | onPlayerJoin | ✅ | ✅ | ✅ |
| | onPlayerLeave | ✅ | ✅ | ✅ |
| | onPlayerLoadFromFile | - | ✅ | - |
| | onPlayerPickupXp | ✅ | ✅ | ✅ |
| | onPlayerSaveToFile | - | ✅ | - |
| | onPlayerSpawnPhantoms | - | ✅ | - |
| | onPlayerXpChange | ✅ | ✅ | ✅ |
| | onPlayerXpLevelChange | ✅ | ✅ | ✅ |
| | onStartTracking | - | ✅ | - |
| | onStopTracking | - | ✅ | - |
