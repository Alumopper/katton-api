# 事件

在 Katton 中，事件是一种响应游戏中各种操作和变化的强大手段。它们允许你在特定事件发生时执行自定义代码，例如玩家交互、世界更改或实体更新。

要监听事件，你可以使用 Katton 事件 API。你可以在 [Fabric API 文档](../../api/fabric/)、[NeoForge API 文档](../../api/neoforge/) 或 [Paper API 文档](../../api/paper/) 中找到生成的事件页面。每个事件都有自己的参数类型，用于提供事件数据、取消语义和可变字段。

## 简单示例

以下是一个监听 `onPlayerJoin` 事件并向玩家发送欢迎消息的简单示例。该示例与[入门指南](../quickstart/get-started.md)中的示例相同。

<!--@include: ../../example/quickstart/get-started/01.md-->

每个事件都有自己的一组参数，这些参数提供关于该事件的信息，并允许你与之交互。你可以在[API文档](../../api/common/event/KattonEventsArg)中查找每个事件的详细参数。

## 监听尚未封装的原生事件

如果你需要的 Fabric、NeoForge 或 Paper 事件还没有被 Katton 封装，可以使用 **托管事件**。托管事件会把监听器注册到平台原生事件总线，同时仍然由 Katton 按脚本包 scope 追踪。`WORLD` 和 `SERVER_CACHE` 监听器会在重载或断开清理时移除；`GLOBAL` 监听器会一直保留，直到手动注销或关闭。

::: code-group

```kotlin [fabric]
import net.fabricmc.fabric.api.event.lifecycle.v1.ServerTickEvents
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerFabricEvent

@ServerScriptEntrypoint
fun listenFabricTicks() {
    registerFabricEvent(ServerTickEvents.START_SERVER_TICK, ServerTickEvents.StartTick { server ->
        println("Tick ${server.tickCount}")
    })
}
```

```kotlin [neoforge]
import net.neoforged.neoforge.event.entity.living.LivingDamageEvent
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerEvent

@ServerScriptEntrypoint
fun listenNeoForgeDamage() {
    registerEvent<LivingDamageEvent.Pre> { event ->
        println("${event.entity.name.string} is about to take damage")
    }
}
```

```kotlin [paper]
import org.bukkit.event.block.BlockExplodeEvent
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerEvent

@ServerScriptEntrypoint
fun listenBukkitExplosions() {
    registerEvent<BlockExplodeEvent>(priority = 4, ignoreCancelled = true) { event ->
        event.blockList().forEach { block ->
            println("Explosion touched ${block.type} at ${block.location}")
        }
    }
}
```
:::

`registerEvent` 和 `registerFabricEvent` 都会返回 handle，只有需要提前手动注销时才需要保存。大多数脚本可以不用保存它，因为 Katton 会在重载时清理托管监听器。完整 API 和平台细节见 [托管事件](./managed-events.md)。

## 详细事件列表

Fabric、NeoForge 和 Paper 都提供 14 类事件桥接。下方表格展示了三个平台事件支持的主要差异。

| 事件类型                     | 事件名                       | Fabric | NeoForge | Paper |
|:-------------------------|:--------------------------| :---: | :---: | :---: |
| **Chunk and Block**      | onAfterBlockBreak         | ✅ | - | ✅ |
|                          | onBeforeBlockBreak        | ✅ | - | ✅ |
|                          | onBlockBreak              | - | ✅ | ✅ |
|                          | onBlockEntityLoad         | ✅ | ✅ | ✅ |
|                          | onBlockEntityUnload       | ✅ | ✅ | ✅ |
|                          | onBlockPlace              | - | ✅ | ✅ |
|                          | onCanceledBlockBreak      | ✅ | - | ✅ |
|                          | onChunkDataLoad           | - | ✅ | ✅ |
|                          | onChunkDataSave           | - | ✅ | ✅ |
|                          | onChunkLevelTypeChange    | ✅ | ✅ | ✅ |
|                          | onChunkLoad               | ✅ | ✅ | ✅ |
|                          | onChunkSent               | - | ✅ | ✅ |
|                          | onChunkUnload             | ✅ | ✅ | ✅ |
|                          | onChunkUnWatch            | - | ✅ | ✅ |
|                          | onChunkWatch              | - | ✅ | ✅ |
|                          | onExplosionDetonate       | ✅ | ✅ | ✅ |
|                          | onExplosionStart          | ✅ | ✅ | ✅ |
| **Item Component**       | onAllowEnchanting         | ✅ | ✅ | ✅ |
|                          | onModifyComponent         | ✅ | ✅ | ✅ |
|                          | onModifyEnchantment       | ✅ | ✅ | ✅ |
| **Item**                 | onUse                     | ✅ | ✅ | ✅ |
|                          | onUseOn                   | ✅ | ✅ | ✅ |
| **Living Behavior**      | onAllowBed                | ✅ | ✅ | ✅ |
|                          | onAllowNearbyMonsters     | ✅ | ✅ | ✅ |
|                          | onAllowResettingTime      | ✅ | ✅ | ✅ |
|                          | onAllowSettingSpawn       | ✅ | ✅ | ✅ |
|                          | onAllowSleeping           | ✅ | ✅ | ✅ |
|                          | onAnimalTame              | - | ✅ | ✅ |
|                          | onBabySpawn               | - | ✅ | ✅ |
|                          | onElytraAllow             | ✅ | ✅ | ✅ |
|                          | onElytraCustom            | ✅ | ✅ | ✅ |
|                          | onModifySleepingDirection | ✅ | ✅ | ✅ |
|                          | onModifyWakeUpPosition    | ✅ | ✅ | ✅ |
|                          | onPlayerWakeUp            | ✅ | ✅ | ✅ |
|                          | onSetBedOccupationState   | ✅ | ✅ | ✅ |
|                          | onStartSleeping           | ✅ | ✅ | ✅ |
|                          | onStopSleeping            | ✅ | ✅ | ✅ |
| **Living Use Item**      | onUseItemFinish           | ✅ | ✅ | ✅ |
|                          | onUseItemStart            | ✅ | ✅ | ✅ |
|                          | onUseItemStop             | ✅ | ✅ | ✅ |
|                          | onUseItemTick             | ✅ | ✅ | ✅ |
| **Loot Table**           | onLootTableAllLoad        | ✅ | ✅ | ✅ |
|                          | onLootTableModify         | ✅ | ✅ | ✅ |
|                          | onLootTableModifyDrops    | ✅ | ✅ | ✅ |
|                          | onLootTableReplace        | ✅ | ✅ | ✅ |
| **Player**               | onAttackBlock             | ✅ | - | ✅ |
|                          | onAttackEntity            | ✅ | ✅ | ✅ |
|                          | onBlockInteract           | ✅ | ✅ | ✅ |
|                          | onDestroyItem             | ✅ | ✅ | ✅ |
|                          | onEntityInteract          | ✅ | ✅ | ✅ |
|                          | onItemInteract            | ✅ | ✅ | ✅ |
|                          | onLeftClickBlock          | - | ✅ | ✅ |
|                          | onUseItemOn               | ✅ | - | ✅ |
|                          | onUseWithoutItem          | ✅ | - | ✅ |
| **Server Entity Combat** | onAfterKilledOtherEntity  | ✅ | ✅ | ✅ |
|                          | onCriticalHit             | - | ✅ | ✅ |
|                          | onShieldBlock             | ✅ | ✅ | ✅ |
| **Server Entity**        | onAfterEntityChangeLevel  | ✅ | ✅ | ✅ |
|                          | onAfterEntityLoad         | ✅ | - | ✅ |
|                          | onAfterPlayerChangeLevel  | ✅ | ✅ | ✅ |
|                          | onEndermanAnger           | ✅ | ✅ | ✅ |
|                          | onEntityLoad              | - | ✅ | ✅ |
|                          | onEntityTeleport          | - | ✅ | ✅ |
|                          | onEntityUnload            | ✅ | ✅ | ✅ |
|                          | onEquipmentChange         | ✅ | ✅ | ✅ |
| **Server**               | onAfterSave               | ✅ | ✅ | ✅ |
|                          | onBeforeSave              | ✅ | ✅ | ✅ |
|                          | onEndDatapackReload       | ✅ | ✅ | ✅ |
|                          | onEndServerTick           | ✅ | ✅ | ✅ |
|                          | onEndWorldTick            | ✅ | ✅ | ✅ |
|                          | onLevelLoad               | - | ✅ | ✅ |
|                          | onLevelSave               | - | ✅ | ✅ |
|                          | onLevelUnload             | - | ✅ | ✅ |
|                          | onServerStarted           | ✅ | ✅ | ✅ |
|                          | onServerStarting          | ✅ | ✅ | ✅ |
|                          | onServerStopped           | ✅ | ✅ | ✅ |
|                          | onServerStopping          | ✅ | ✅ | ✅ |
|                          | onStartDatapackReload     | ✅ | ✅ | ✅ |
|                          | onStartServerTick         | ✅ | ✅ | ✅ |
|                          | onStartWorldTick          | ✅ | ✅ | ✅ |
|                          | onSyncDatapackContents    | ✅ | ✅ | ✅ |
| **Server Living Entity** | onAfterDamage             | ✅ | ✅ | ✅ |
|                          | onAfterDeath              | ✅ | ✅ | ✅ |
|                          | onAllowDamage             | ✅ | ✅ | ✅ |
|                          | onAllowDeath              | ✅ | ✅ | ✅ |
|                          | onLivingDrops             | - | ✅ | - |
|                          | onLivingFall              | ✅ | ✅ | ✅ |
|                          | onLivingHurt              | ✅ | ✅ | ✅ |
|                          | onLivingJump              | - | ✅ | ✅ |
|                          | onMobConversion           | ✅ | ✅ | ✅ |
| **Server Message**       | onAllowChatMessage        | ✅ | - | ✅ |
|                          | onAllowCommandMessage     | ✅ | - | ✅ |
|                          | onAllowGameMessage        | ✅ | - | ✅ |
|                          | onChatMessage             | ✅ | - | ✅ |
|                          | onCommandMessage          | ✅ | - | ✅ |
|                          | onGameMessage             | ✅ | - | ✅ |
|                          | onServerChat              | - | ✅ | ✅ |
| **Server Mob Effect**    | onAfterAdd                | ✅ | - | ✅ |
|                          | onAfterRemove             | ✅ | - | ✅ |
|                          | onAllowAdd                | ✅ | - | ✅ |
|                          | onAllowEarlyRemove        | ✅ | - | ✅ |
|                          | onBeforeAdd               | ✅ | - | ✅ |
|                          | onBeforeRemove            | ✅ | - | ✅ |
|                          | onMobEffectAdd            | - | ✅ | ✅ |
|                          | onMobEffectApplicable     | - | ✅ | ✅ |
|                          | onMobEffectExpire         | - | ✅ | ✅ |
|                          | onMobEffectRemove         | - | ✅ | ✅ |
| **Server Player**        | onAfterPlayerRespawn      | ✅ | ✅ | ✅ |
|                          | onItemPickupPost          | - | ✅ | - |
|                          | onItemPickupPre           | - | ✅ | - |
|                          | onItemToss                | - | ✅ | - |
|                          | onPickFromBlock           | ✅ | ✅ | ✅ |
|                          | onPickFromEntity          | ✅ | ✅ | ✅ |
|                          | onPlayerCopy              | ✅ | ✅ | ✅ |
|                          | onPlayerItemCrafted       | - | ✅ | - |
|                          | onPlayerItemSmelted       | - | ✅ | - |
|                          | onPlayerJoin              | ✅ | ✅ | ✅ |
|                          | onPlayerLeave             | ✅ | ✅ | ✅ |
|                          | onPlayerLoadFromFile      | - | ✅ | - |
|                          | onPlayerPickupXp          | ✅ | ✅ | ✅ |
|                          | onPlayerSaveToFile        | - | ✅ | - |
|                          | onPlayerSpawnPhantoms     | - | ✅ | - |
|                          | onPlayerXpChange          | ✅ | ✅ | ✅ |
|                          | onPlayerXpLevelChange     | ✅ | ✅ | ✅ |
|                          | onStartTracking           | - | ✅ | - |
|                          | onStopTracking            | - | ✅ | - |
