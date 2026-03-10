# Events

In Katton, events are a powerful way to react to various actions and changes in the game. They allow you to execute custom code when specific events occur, such as player interactions, world changes, or entity updates.

To listen to an event, you can use the `KattonEvents` API. You can find all available events in the [API documentation](../kdoc/kts4mc-template-1.21.11/top.katton.api.event/-katton-events/index.html). Each event has its own set of arguments that provide information about the event and allow you to interact with it.

## Detailed Event List

Events provided for Fabric and NeoForge are listed in the table below.

| Event Category | Event Name | Fabric | NeoForge |
| :--- | :--- | :---: | :---: |
| **Chunk and Block** | onAfterBlockBreak | ✅ | - |
| | onBeforeBlockBreak | ✅ | - |
| | onBlockBreak | - | ✅ |
| | onBlockEntityLoad | ✅ | ✅ |
| | onBlockEntityUnload | ✅ | ✅ |
| | onBlockPlace | - | ✅ |
| | onCanceledBlockBreak | ✅ | - |
| | onChunkDataLoad | - | ✅ |
| | onChunkDataSave | - | ✅ |
| | onChunkLevelTypeChange | ✅ | ✅ |
| | onChunkLoad | ✅ | ✅ |
| | onChunkSent | - | ✅ |
| | onChunkUnload | ✅ | ✅ |
| | onChunkUnWatch | - | ✅ |
| | onChunkWatch | - | ✅ |
| | onExplosionDetonate | ✅ | ✅ |
| | onExplosionStart | ✅ | ✅ |
| **Item Component** | onAllowEnchanting | ✅ | ✅ |
| | onModifyComponent | ✅ | ✅ |
| | onModifyEnchantment | ✅ | ✅ |
| **Item** | onUse | ✅ | ✅ |
| | onUseOn | ✅ | ✅ |
| **Living Behavior** | onAllowBed | ✅ | ✅ |
| | onAllowNearbyMonsters | ✅ | ✅ |
| | onAllowResettingTime | ✅ | ✅ |
| | onAllowSettingSpawn | ✅ | ✅ |
| | onAllowSleeping | ✅ | ✅ |
| | onAnimalTame | - | ✅ |
| | onBabySpawn | - | ✅ |
| | onElytraAllow | ✅ | ✅ |
| | onElytraCustom | ✅ | ✅ |
| | onModifySleepingDirection | ✅ | ✅ |
| | onModifyWakeUpPosition | ✅ | ✅ |
| | onPlayerWakeUp | ✅ | ✅ |
| | onSetBedOccupationState | ✅ | ✅ |
| | onStartSleeping | ✅ | ✅ |
| | onStopSleeping | ✅ | ✅ |
| **Living Use Item** | onUseItemFinish | ✅ | ✅ |
| | onUseItemStart | ✅ | ✅ |
| | onUseItemStop | ✅ | ✅ |
| | onUseItemTick | ✅ | ✅ |
| **Loot Table** | onLootTableAllLoad | ✅ | ✅ |
| | onLootTableModify | ✅ | ✅ |
| | onLootTableModifyDrops | ✅ | ✅ |
| | onLootTableReplace | ✅ | ✅ |
| **Player** | onAttackBlock | ✅ | - |
| | onAttackEntity | ✅ | ✅ |
| | onBlockInteract | ✅ | ✅ |
| | onDestroyItem | ✅ | ✅ |
| | onEntityInteract | ✅ | ✅ |
| | onItemInteract | ✅ | ✅ |
| | onLeftClickBlock | - | ✅ |
| | onUseItemOn | ✅ | - |
| | onUseWithoutItem | ✅ | - |
| **Server Entity Combat** | onAfterKilledOtherEntity | ✅ | ✅ |
| | onCriticalHit | - | ✅ |
| | onShieldBlock | ✅ | ✅ |
| **Server Entity** | onAfterEntityChangeLevel | ✅ | ✅ |
| | onAfterEntityLoad | ✅ | - |
| | onAfterPlayerChangeLevel | ✅ | ✅ |
| | onEndermanAnger | ✅ | ✅ |
| | onEntityLoad | - | ✅ |
| | onEntityTeleport | - | ✅ |
| | onEntityUnload | ✅ | ✅ |
| | onEquipmentChange | ✅ | ✅ |
| **Server** | onAfterSave | ✅ | ✅ |
| | onBeforeSave | ✅ | ✅ |
| | onEndDatapackReload | ✅ | ✅ |
| | onEndServerTick | ✅ | ✅ |
| | onEndWorldTick | ✅ | ✅ |
| | onLevelLoad | - | ✅ |
| | onLevelSave | - | ✅ |
| | onLevelUnload | - | ✅ |
| | onServerStarted | ✅ | ✅ |
| | onServerStarting | ✅ | ✅ |
| | onServerStopped | ✅ | ✅ |
| | onServerStopping | ✅ | ✅ |
| | onStartDatapackReload | ✅ | ✅ |
| | onStartServerTick | ✅ | ✅ |
| | onStartWorldTick | ✅ | ✅ |
| | onSyncDatapackContents | ✅ | ✅ |
| **Server Living Entity** | onAfterDamage | ✅ | ✅ |
| | onAfterDeath | ✅ | ✅ |
| | onAllowDamage | ✅ | ✅ |
| | onAllowDeath | ✅ | ✅ |
| | onLivingDrops | - | ✅ |
| | onLivingFall | ✅ | ✅ |
| | onLivingHurt | ✅ | ✅ |
| | onLivingJump | - | ✅ |
| | onMobConversion | ✅ | ✅ |
| **Server Message** | onAllowChatMessage | ✅ | - |
| | onAllowCommandMessage | ✅ | - |
| | onAllowGameMessage | ✅ | - |
| | onChatMessage | ✅ | - |
| | onCommandMessage | ✅ | - |
| | onGameMessage | ✅ | - |
| | onServerChat | - | ✅ |
| **Server Mob Effect** | onAfterAdd | ✅ | - |
| | onAfterRemove | ✅ | - |
| | onAllowAdd | ✅ | - |
| | onAllowEarlyRemove | ✅ | - |
| | onBeforeAdd | ✅ | - |
| | onBeforeRemove | ✅ | - |
| | onMobEffectAdd | - | ✅ |
| | onMobEffectApplicable | - | ✅ |
| | onMobEffectExpire | - | ✅ |
| | onMobEffectRemove | - | ✅ |
| **Server Player** | onAfterPlayerRespawn | ✅ | ✅ |
| | onItemPickupPost | - | ✅ |
| | onItemPickupPre | - | ✅ |
| | onItemToss | - | ✅ |
| | onPickFromBlock | ✅ | ✅ |
| | onPickFromEntity | ✅ | ✅ |
| | onPlayerCopy | ✅ | ✅ |
| | onPlayerItemCrafted | - | ✅ |
| | onPlayerItemSmelted | - | ✅ |
| | onPlayerJoin | ✅ | ✅ |
| | onPlayerLeave | ✅ | ✅ |
| | onPlayerLoadFromFile | - | ✅ |
| | onPlayerPickupXp | ✅ | ✅ |
| | onPlayerSaveToFile | - | ✅ |
| | onPlayerSpawnPhantoms | - | ✅ |
| | onPlayerXpChange | ✅ | ✅ |
| | onPlayerXpLevelChange | ✅ | ✅ |
| | onStartTracking | - | ✅ |
| | onStopTracking | - | ✅ |
