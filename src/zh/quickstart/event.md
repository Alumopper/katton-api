# 事件

在 Katton 中，事件是一种响应游戏中各种操作和变化的强大手段。它们允许你在特定事件发生时执行自定义代码，例如玩家交互、世界更改或实体更新。

要监听事件，你可以使用 `KattonEvents` API。你可以在 [API 文档](../../kdoc/kts4mc-template-1.21.11/top.katton.api.event/-katton-events/index.html) 中找到所有可用的事件。Katton 包装了Fabric等Mod加载器提供的事件，并将所有的参数都包装为了一个单独的事件参数记录类，方便你在事件处理函数中获取所需的信息。

## 可用事件列表

在 Fabric 和 NeoForge 中，Katton 提供的事件稍有差异。下方提供了一份详细的列表。

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
