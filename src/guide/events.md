# Events

In Katton, events are a powerful way to react to various actions and changes in the game. They allow you to execute custom code when specific events occur, such as player interactions, world changes, or entity updates.

To listen to an event, use Katton's event API. You can find all generated event pages in the [Fabric API documentation](../api/fabric/), the [NeoForge API documentation](../api/neoforge/), or the [Paper API documentation](../api/paper/). Each event has its own argument type that provides event data and cancellation/mutation hooks.

Here is a simple example of how to listen to the `onPlayerJoin` event and send a welcome message to the player. This example is the same as the one in the [Getting Started](../quickstart/get-started.md) section.

<!--@include: ../example/quickstart/get-started/01.md-->

Each event has its own set of arguments that provide information about the event and allow you to interact with it. You can find the detailed arguments for each event in [the API documentation](../api/common/event/KattonEventsArg).

## Unwrapped Native Events

If Katton does not wrap the Fabric, NeoForge, or Paper event you need, use **managed events**. Managed listeners are registered against the native platform event bus, but Katton still tracks them by script pack scope. `WORLD` and `SERVER_CACHE` listeners are removed on reload or disconnect cleanup; `GLOBAL` listeners persist until manually unregistered or shutdown.

Register managed listeners inside a `@ServerScriptEntrypoint` or `@ClientScriptEntrypoint` function so Katton can record the current script owner and scope. Keep side-specific imports on the side where they run.

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

`registerEvent` and `registerFabricEvent` return a handle if you need to unregister manually. Most scripts do not need to keep it because Katton cleans managed listeners up during reload. See [Managed Events](./managed-events.md) for the full API and platform notes.

> [!CAUTION]
> NEVER register native listeners without using Katton's managed event API. 
> Katton will not be able to track or clean up those listeners, which can lead to memory leaks, duplicate handlers, and other unintended consequences.

## Detailed Event List

Events provided for Fabric, NeoForge, and Paper are listed in the table below.

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
