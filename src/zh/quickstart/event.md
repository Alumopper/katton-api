# 事件

在 Katton 中，事件是一种响应游戏中各种操作和变化的强大手段。它们允许你在特定事件发生时执行自定义代码，例如玩家交互、世界更改或实体更新。

要监听事件，你可以使用 `KattonEvents` API。你可以在 [Fabric API 文档](../../api/fabric/) 或者 [NeoForge API 文档](../../api/neoforge/) 中找到所有可用的事件。Katton 包装了 Fabric 等 Mod 加载器提供的事件，并将所有的参数都包装为了一个单独的事件参数记录类，方便你在事件处理函数中获取所需的信息。Paper 同样支持事件，通过 Bukkit API 桥接实现。

## 开始监听事件

你可以在脚本中直接订阅对应事件回调，并在回调中编写你的业务逻辑。

## 简单示例

以下是一个监听 `onPlayerJoin` 事件并向玩家发送欢迎消息的简单示例。该示例与[入门指南](./get-started)中的示例相同。

<!--@include: ../../example/quickstart/get-started/01.md-->

每个事件都有自己的一组参数，这些参数提供关于该事件的信息，并允许你与之交互。你可以在[API文档](../../api/common/event/KattonEventsArg)中查找每个事件的详细参数。

## 详细事件列表

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
