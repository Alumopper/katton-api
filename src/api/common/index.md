---
title: Common API
outline: false
---

# Common API

Generated from module `common`.

## Source Roots

- `common/src/main/kotlin/top/katton/api`

## Pages

- [KattonAPI](./KattonAPI.md) - Execute [block] only once for a given [key] under the current script owner namespace.
- [KattonClientApi](./KattonClientApi.md) - Gets the raw Minecraft client instance.
- [KattonClientRenderApi](./KattonClientRenderApi.md) - Screen-space render callback context.
- [KattonComponentApi](./KattonComponentApi.md) - Combines two nullable Components into a new Component.
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
- [InjectApi](./inject/InjectApi.md) - Handle for a registered injection, used for rollback operations.
- [KattonBlockModificationApi](./mod/KattonBlockModificationApi.md) - Configuration for modifying existing block properties.
- [KattonItemModificationApi](./mod/KattonItemModificationApi.md) - Configuration for modifying existing item properties.
- [Block](./registry/Block.md) - Registers a native Block with hot-reload support (String overload).
- [Effect](./registry/Effect.md) - Registers a native MobEffect with hot-reload support (String overload).
- [Item](./registry/Item.md) - Registers a native Item with hot-reload support.
