# For Vanilla Datapack Developers

In fact, I am originally a vanilla datapack developer. It was precisely because I grew tired of the tediousness and various limitations of datapacks that I developed Katton. I wanted to retain the advantage of datapack hot-reloading while achieving powerful functionality comparable to that of mods. So if you're also a datapack developer, don't worry, Katton will definitely give you a home-like experience.

Katton provides a series of functions that wrap all the functionalities of the vanilla commands. Even if you know nothing about Fabric modding, you can still use these functions to implement everything you can within the datapack. 

## Commands

All command functions are located in the `top.katton.api.dpcaller` package. You can find the documentation for these functions in the [API documentation](../api/common/). These functions are designed to be as close to the original commands as possible. For example, you may use `scoreboard players set test myscore 1` in datapack, and in Katton you can achieve the same effect with the following code:

<!--@include: ../example/quickstart/for-cber/01.md-->

## Entity Access

In datapacks, we always need to use target selectors to specify the entities we want to operate on. In Katton, you can also use target selectors to get the corresponding entities. We provide `EntitySelectorBuilder` class to help you build target selectors. 

<!--@include: ../example/quickstart/for-cber/02.md-->

## NBT

NBT is another important part of datapacks. In Katton, you can use [`getEntityNbt`](../api/common/dpcaller/KattonNbtApi.md#getentitynbt), [`getBlockNbt`](../api/common/dpcaller/KattonNbtApi.md#getblocknbt), and [`getStorageNbt`](../api/common/dpcaller/KattonNbtApi.md#getstoragenbt) functions to get the NBT data of entities, blocks, and storage respectively. 

## Call Datapack Functions

Want to continue calling the mcfunction you've already written? No problem! You can use the [`runFunction`](../api/common/dpcaller/KattonServerApi.md#runfunction) function to call any mcfunction in your datapack.

## `#tick` and `#load` Functions

In datapacks, we will use functions with `#load` tag to execute some code when the datapack is loaded, and use functions with `#tick` tag to execute some code every tick. In Katton, we replace these tags with more powerful event listeners. You can use [`ServerEvent.onStartServerTick`](../api/fabric/event/ServerEvent.md#serverevent-onstartservertick) event to execute code every tick, and use [`ServerEvent.onServerStarted`](../api/fabric/event/ServerEvent.md#serverevent-onserverstarted) event to execute code when the server starts or stops. Check out the [Events](event.md) page for more details.

<!--@include: ../example/quickstart/for-cber/03.md-->

## Katton Commands

Katton also ships with built-in commands for script management. The most useful ones for datapack developers:

- `/katton reload` — reload all scripts (like `/reload` but for scripts specifically, with a progress bar!)
- `/katton registry` — see what your scripts have registered
- `/katton status` — check if Katton is running properly

Check the [Commands](commands.md) page for the full list.

