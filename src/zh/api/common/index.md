---
title: 通用 API
outline: false
---

# 通用 API

从模块`common`生成。

## 源码根目录

- `common/src/main/kotlin/top/katton/api`

## 页面

- [ClientDataApi](./ClientDataApi.md) - 将键值对同步到所有连接的玩家。值`null`会删除客户端的键。
- [KattonAPI](./KattonAPI.md) - 对于当前脚本所有者命名空间下的给定 [key] 仅执行一次 [block]。
- [KattonClientApi](./KattonClientApi.md) - 获取原始的Minecraft 客户端实例。
- [KattonClientRenderApi](./KattonClientRenderApi.md) - 屏幕空间渲染回调上下文。
- [KattonComponentApi](./KattonComponentApi.md) - 将两个可为空的组件组合成一个新组件。
- [KattonConfigApi](./KattonConfigApi.md) - 面向脚本的配置API。从当前脚本的包清单中读取配置值。
- [KattonContextApi](./KattonContextApi.md) - 确定返回的[ExecutionContext]使用哪个位置。
- [ScriptEntrypoint](./ScriptEntrypoint.md) - 将顶级无参数函数标记为客户端脚本入口点。
- [Recipes](./datapack/Recipes.md)
- [KattonBlockApi](./dpcaller/KattonBlockApi.md) - 像映射一样按位置访问世界中的方块。
- [KattonBlockEntityApi](./dpcaller/KattonBlockEntityApi.md) - 像地图一样按位置访问世界中的方块实体。
- [KattonEntityApi](./dpcaller/KattonEntityApi.md) - 获取/设置实体的NBT数据。
- [KattonItemApi](./dpcaller/KattonItemApi.md) - 用于在 ItemStack 上获取/设置 NBT 数据的扩展属性。
- [KattonLootTableApi](./dpcaller/KattonLootTableApi.md) - 获得方块的掉落物，就像用工具破坏方块一样。
- [KattonMiscApi](./dpcaller/KattonMiscApi.md) - 向玩家发送系统消息。
- [KattonNbtApi](./dpcaller/KattonNbtApi.md) - 从数字值创建数字标签。
- [KattonPlayerApi](./dpcaller/KattonPlayerApi.md) - 对所有在线玩家的类似列表的访问。
- [KattonRecipeApi](./dpcaller/KattonRecipeApi.md) - 为玩家提供配方改进。
- [KattonScoreboardApi](./dpcaller/KattonScoreboardApi.md) - 获取目标中目标的得分值。
- [KattonServerApi](./dpcaller/KattonServerApi.md) - 访问所有在线玩家。
- [KattonSlotProviderApi](./dpcaller/KattonSlotProviderApi.md) - 从容器槽中获取物品。
- [KattonWorldApi](./dpcaller/KattonWorldApi.md) - 通过ResourceKey对所有服务器世界进行类似地图的访问。
- [KattonEventsArg](./event/KattonEventsArg.md) - 服务器级事件的参数。
- [ManagedEvents](./event/managed/ManagedEvents.md) - 托管事件侦听器句柄 — 在注册本机侦听器时返回到脚本。可用于在重载之前手动取消注册侦听器。
- [InjectApi](./inject/InjectApi.md) - 已注册注入的句柄，用于回滚操作。
- [KattonBlockModificationApi](./mod/KattonBlockModificationApi.md) - 用于修改现有块属性的配置。
- [KattonEntityTypeModificationApi](./mod/KattonEntityTypeModificationApi.md) - 用于修改现有[EntityType]默认属性的配置（vanilla 或 modded）。
- [KattonItemModificationApi](./mod/KattonItemModificationApi.md) - 用于修改现有物品属性的配置。
- [KattonLootTableModificationApi](./mod/KattonLootTableModificationApi.md) - 返回现有战利品表的 JSON 形式，或者当表未注册或服务器离线时返回 `null`。
- [KattonRecipeModificationApi](./mod/KattonRecipeModificationApi.md) - 用于修改现有配方属性的配置。
- [KattonVillagerTradeModificationApi](./mod/KattonVillagerTradeModificationApi.md) - 通过[addVillagerTrade]将单个交易附加到现有[TradeSet]的配置。
- [Block](./registry/Block.md) - 注册具有热重载支持的本机块（字符串重载）。
- [BlockEntityType](./registry/BlockEntityType.md) - 注册具有热重载支持的本机BlockEntityType。
- [CreativeModeTab](./registry/CreativeModeTab.md) - 注册具有热重载支持的本机CreativeModeTab。
- [DataComponentType](./registry/DataComponentType.md) - 注册具有热重载支持的持久性（保存到磁盘）DataComponentType。
- [Effect](./registry/Effect.md) - 注册具有热重载支持的本机MobEffect（字符串重载）。
- [Entity](./registry/Entity.md) - 注册具有热重载支持的完整本机实体。
- [EntityRenderer](./registry/EntityRenderer.md) - 为脚本注册的实体类型注册自定义实体渲染器。
- [EntityType](./registry/EntityType.md) - 注册具有热重载支持的本机EntityType。
- [Item](./registry/Item.md) - 注册具有热重载支持的本机物品。
- [ParticleType](./registry/ParticleType.md) - 注册具有热重载支持的本机ParticleType。
- [SoundEvent](./registry/SoundEvent.md) - 注册具有热重载支持的本机SoundEvent。
