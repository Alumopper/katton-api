---
title: Common API
outline: false
---

# Common API

由模块 `common` 生成。

## 源码根目录

- `common/src/main/kotlin/top/katton/api`

## 页面

- [ClientDataApi](./ClientDataApi.md) - 向所有已连接玩家同步一个键值对。 值为 `null` 时会在客户端删除该键。
- [ClientItemRenderAnimation](./ClientItemRenderAnimation.md) - 动画轨道上的变换关键帧。[time] 通常取 0.0 到 1.0。
- [ClientItemRenderMarkerApi](./ClientItemRenderMarkerApi.md) - 直接在世界中渲染的轻量级客户端物品模型。
- [ClientPostEffectApi](./ClientPostEffectApi.md) - 注册一个运行时客户端 post effect，读取 Minecraft 26.x 的 post-effect JSON。
- [ClientPostEffectPresetsApi](./ClientPostEffectPresetsApi.md) - 注册一个可配置的全屏反色效果。
- [ClientPostEffectServerApi](./ClientPostEffectServerApi.md) - 请求一个 Fabric 或 NeoForge 客户端启用已注册的后处理效果。
- [KattonAPI](./KattonAPI.md) - 在当前脚本所有者命名空间下，对指定键只执行一次。
- [KattonClientApi](./KattonClientApi.md) - 获取原始 Minecraft 客户端实例。
- [KattonClientRenderApi](./KattonClientRenderApi.md) - 屏幕空间渲染回调上下文。
- [KattonComponentApi](./KattonComponentApi.md) - 将两个可空的 Component 合并为一个新的 Component。
- [KattonConfigApi](./KattonConfigApi.md) - 面向脚本的配置 API，会从当前脚本包的 manifest 里读取配置值。
- [KattonContextApi](./KattonContextApi.md) - 决定返回的 [ExecutionContext] 使用哪个位置。
- [KattonDependencyApi](./KattonDependencyApi.md) - Script-facing access to optional mod and plugin dependency state.
- [ScriptEntrypoint](./ScriptEntrypoint.md) - Execution stages available to server entrypoints.
- [AudioApi](./audio/AudioApi.md) - 音频内容在客户端解析。
- [AudioServerApi](./audio/AudioServerApi.md) - Loader-owned transport. Paper deliberately has no full-player transport.
- [BasicSoundApi](./audio/BasicSoundApi.md) - Platform scheduling hook; Paper installs entity-region scheduling.
- [Recipes](./datapack/Recipes.md)
- [KattonBlockApi](./dpcaller/KattonBlockApi.md) - Map-like access to blocks in a level by position.
- [KattonBlockEntityApi](./dpcaller/KattonBlockEntityApi.md) - 以类似 Map 的方式按位置访问关卡中的方块实体。
- [KattonEntityApi](./dpcaller/KattonEntityApi.md) - 获取或设置 Entity 的 NBT 数据。
- [KattonItemApi](./dpcaller/KattonItemApi.md) - 用于读取和写入 ItemStack NBT 数据的扩展属性。
- [KattonLootTableApi](./dpcaller/KattonLootTableApi.md) - 获取方块在使用工具破坏时的掉落物。
- [KattonMiscApi](./dpcaller/KattonMiscApi.md) - 向玩家发送系统消息。
- [KattonNbtApi](./dpcaller/KattonNbtApi.md) - 根据 Number 值创建数值类型的 Tag。
- [KattonPlayerApi](./dpcaller/KattonPlayerApi.md) - 以类似 List 的方式访问所有在线玩家。
- [KattonRecipeApi](./dpcaller/KattonRecipeApi.md) - 向玩家授予配方进度。
- [KattonScoreboardApi](./dpcaller/KattonScoreboardApi.md) - Get a score value for a target in an objective.
- [KattonServerApi](./dpcaller/KattonServerApi.md) - 访问所有在线玩家。
- [KattonSlotProviderApi](./dpcaller/KattonSlotProviderApi.md) - 从容器槽位中获取物品。
- [KattonWorldApi](./dpcaller/KattonWorldApi.md) - 以类似 Map 的方式按 ResourceKey 访问所有服务端关卡。
- [EventCapabilities](./event/EventCapabilities.md) - Runtime capability query for event APIs whose platform parity is not exact.
- [KattonEventsArg](./event/KattonEventsArg.md) - Argument for server-level events.
- [ManagedEvents](./event/managed/ManagedEvents.md) - Managed event listener handle returned to scripts when registering a native listener. 注册原生事件监听器后返回给脚本的托管监听器句柄。
- [InjectApi](./inject/InjectApi.md) - 注册注入的句柄，用于回滚操作。
- [InjectionCapabilities](./inject/InjectionCapabilities.md) - Current availability of Katton's unsafe runtime bytecode injection.
- [KattonBlockModificationApi](./mod/KattonBlockModificationApi.md) - 用于修改现有方块属性的配置对象。 这个类提供一个流式 API，用于修改已经注册到 Minecraft 方块注册表中的方块属性。 风格上类似 KubeJS 的方块修改系统。
- [KattonEntityTypeModificationApi](./mod/KattonEntityTypeModificationApi.md) - 用于修改现有 EntityType 默认属性的配置对象（原版或模组添加的实体都适用）。 它的属性面与 [top.katton.registry.KattonEntityProperties] 对应，但作用对象是已经注册的实体类型， 并通过 [top.katton.registry.DefaultAttributesHelper] 生效。
- [KattonItemModificationApi](./mod/KattonItemModificationApi.md) - 用于修改现有物品属性的配置对象。 这个类提供一个流式 API，用于修改已经注册到 Minecraft 物品注册表中的物品属性。 风格上类似 KubeJS 的物品修改系统。
- [KattonLootTableModificationApi](./mod/KattonLootTableModificationApi.md) - 返回现有战利品表的 JSON 形式；如果战利品表未注册或服务器离线，则返回 `null`。 这里会从 `server.reloadableRegistries()` 读取，因为从 MC 1.21.5+ 开始，战利品表就存放在那里， 然后再通过 [LootTable.DIRECT_CODEC] 重新编码。
- [KattonRecipeModificationApi](./mod/KattonRecipeModificationApi.md) - 用于修改现有配方属性的配置对象。 这个类提供一个流式 API，用于修改已经注册到 Minecraft 配方管理器中的配方属性。 风格上类似 KubeJS 的配方修改系统。
- [KattonVillagerTradeModificationApi](./mod/KattonVillagerTradeModificationApi.md) - 用于向现有 [TradeSet] 追加单条交易的配置对象，可由 [addVillagerTrade] 使用。
- [Block](./registry/Block.md) - 注册原生方块，并支持热重载（String 重载）。 这是脚本中注册自定义方块子类的主要 API。 方块会注册到全局 Minecraft 注册表，并具备完整的热重载能力。
- [BlockEntityType](./registry/BlockEntityType.md) - 注册原生 BlockEntityType，并支持热重载。
- [CreativeModeTab](./registry/CreativeModeTab.md) - 注册原生 CreativeModeTab，并支持热重载。
- [DataComponentType](./registry/DataComponentType.md) - 注册持久化（保存到磁盘）的 DataComponentType，并支持热重载。 持久化组件会使用其 codec 进行序列化，并随物品一并保存。 适用于必须跨存档读写周期保留的数据。
- [Effect](./registry/Effect.md) - 注册原生 MobEffect，并支持热重载（String 重载）。 这是脚本中注册自定义 MobEffect 子类的主要 API。 该效果会注册到全局 Minecraft 注册表，并具备完整的热重载能力。
- [Entity](./registry/Entity.md) - 注册完整的原生 Entity，并支持热重载。 这是脚本中注册自定义实体的主要 API。 它会在一次调用中完成 EntityType 注册，以及可选的属性、刷怪蛋和生成位置配置。
- [EntityRenderer](./registry/EntityRenderer.md) - 为脚本注册的实体类型注册自定义实体渲染器。 这是 [registerNativeEntity] 在客户端侧的配套 API。完成实体类型注册后， 在客户端调用这里的方法，就能为实体提供可视化外观。 [rendererFactory] 会接收一个 [EntityRendererProvider.Context]，其中可访问 实体渲染分发器、物品渲染器、资源管理器和实体模型集，足以构造标准 [EntityRenderer]。
- [EntityType](./registry/EntityType.md) - 注册原生 EntityType，并支持热重载。 这是一个更底层的 API，只负责注册 EntityType 本身。 如果需要完整的实体注册流程（包括属性、刷怪蛋和生成位置），请改用 [registerNativeEntity]。
- [Item](./registry/Item.md) - 注册原生 Item，并支持热重载。 这是脚本中注册自定义 Item 子类的主要 API。通过该 API 注册的 Item 会进入全局 Minecraft 注册表，并具备完整的热重载能力。
- [ParticleType](./registry/ParticleType.md) - 注册原生 ParticleType，并支持热重载。
- [SoundEvent](./registry/SoundEvent.md) - 注册原生 SoundEvent，并支持热重载。
- [SceneClientApi](./scene/SceneClientApi.md) - 注册归属于当前脚本的客户端定义；版本默认使用脚本包代码哈希。
- [SceneServerApi](./scene/SceneServerApi.md) - 取消仅发送给原接收者；此句柄不代表客户端已经播放或播放完成。
- [SceneTimeline](./scene/SceneTimeline.md) - 可复用演出定义；每条轨道开始时只执行一次工厂。
- [SceneTypes](./scene/SceneTypes.md) - 结束状态仅属于表现层，不修改服务端玩法。
