---
title: Common API
outline: false
---

# Common API

Generated from module `common`.

## Source Roots

- `common/src/main/kotlin/top/katton/api`

## Pages

- [ClientDataApi](./ClientDataApi.md) - Sync a key-value pair to all connected players. A value of `null` removes the key on the client side.
- [KattonAPI](./KattonAPI.md) - Execute [block] only once for a given [key] under the current script owner namespace.
- [KattonClientApi](./KattonClientApi.md) - Gets the raw Minecraft client instance.
- [KattonClientRenderApi](./KattonClientRenderApi.md) - Screen-space render callback context.
- [KattonComponentApi](./KattonComponentApi.md) - Combines two nullable Components into a new Component.
- [KattonConfigApi](./KattonConfigApi.md) - Script-facing config API. Reads config values from the current script's pack manifest.
- [KattonContextApi](./KattonContextApi.md) - Determines which position the returned [ExecutionContext] uses.
- [ScriptEntrypoint](./ScriptEntrypoint.md) - Marks a top-level no-argument function as a client-side script entrypoint.
- [Recipes](./datapack/Recipes.md)
- [KattonBlockApi](./dpcaller/KattonBlockApi.md) - Map-like access to blocks in a level by position.
- [KattonBlockEntityApi](./dpcaller/KattonBlockEntityApi.md) - Map-like access to block entities in a level by position.
- [KattonEntityApi](./dpcaller/KattonEntityApi.md) - Get/Set the NBT data of an Entity.
- [KattonItemApi](./dpcaller/KattonItemApi.md) - Extension property to get/set NBT data on an ItemStack.
- [KattonLootTableApi](./dpcaller/KattonLootTableApi.md) - Get drops for a block as if it were broken with a tool.
- [KattonMiscApi](./dpcaller/KattonMiscApi.md) - Send a system message to a player.
- [KattonNbtApi](./dpcaller/KattonNbtApi.md) - Create a numeric Tag from a Number value.
- [KattonPlayerApi](./dpcaller/KattonPlayerApi.md) - List-like access to all online players.
- [KattonRecipeApi](./dpcaller/KattonRecipeApi.md) - Give recipe advancements to players.
- [KattonScoreboardApi](./dpcaller/KattonScoreboardApi.md) - Get a score value for a target in an objective.
- [KattonServerApi](./dpcaller/KattonServerApi.md) - Access to all online players.
- [KattonSlotProviderApi](./dpcaller/KattonSlotProviderApi.md) - Get an item from a container slot.
- [KattonWorldApi](./dpcaller/KattonWorldApi.md) - Map-like access to all server levels by ResourceKey.
- [KattonEventsArg](./event/KattonEventsArg.md) - Argument for server-level events.
- [ManagedEvents](./event/managed/ManagedEvents.md) - Managed event listener handle — returned to scripts when registering a native listener. Can be used to manually unregister the listener before reload.
- [InjectApi](./inject/InjectApi.md) - Handle for a registered injection, used for rollback operations.
- [KattonBlockModificationApi](./mod/KattonBlockModificationApi.md) - Configuration for modifying existing block properties.
- [KattonEntityTypeModificationApi](./mod/KattonEntityTypeModificationApi.md) - Configuration for modifying default attributes of an existing [EntityType] (vanilla or modded).
- [KattonItemModificationApi](./mod/KattonItemModificationApi.md) - Configuration for modifying existing item properties.
- [KattonLootTableModificationApi](./mod/KattonLootTableModificationApi.md) - Returns the JSON form of an existing loot table, or `null` when the table is not registered or the server is offline.
- [KattonRecipeModificationApi](./mod/KattonRecipeModificationApi.md) - Configuration for modifying existing recipe properties.
- [KattonVillagerTradeModificationApi](./mod/KattonVillagerTradeModificationApi.md) - Configuration for a single trade to be appended to an existing [TradeSet] via [addVillagerTrade].
- [Block](./registry/Block.md) - Registers a native Block with hot-reload support (String overload).
- [BlockEntityType](./registry/BlockEntityType.md) - Registers a native BlockEntityType with hot-reload support.
- [CreativeModeTab](./registry/CreativeModeTab.md) - Registers a native CreativeModeTab with hot-reload support.
- [DataComponentType](./registry/DataComponentType.md) - Registers a persistent (saved to disk) DataComponentType with hot-reload support.
- [Effect](./registry/Effect.md) - Registers a native MobEffect with hot-reload support (String overload).
- [Entity](./registry/Entity.md) - Registers a complete native Entity with hot-reload support.
- [EntityRenderer](./registry/EntityRenderer.md) - Registers a custom entity renderer for a script-registered entity type.
- [EntityType](./registry/EntityType.md) - Registers a native EntityType with hot-reload support.
- [Item](./registry/Item.md) - Registers a native Item with hot-reload support.
- [ParticleType](./registry/ParticleType.md) - Registers a native ParticleType with hot-reload support.
- [SoundEvent](./registry/SoundEvent.md) - Registers a native SoundEvent with hot-reload support.
