---
title: NeoForge API
outline: false
---

# NeoForge API

由模块 `neoforge` 生成。

## 源码根目录

- `neoforge/src/main/kotlin/top/katton/api`

## 页面

- [ChunkAndBlockEvent](./event/ChunkAndBlockEvent.md) - NeoForge 平台的区块、方块和爆炸事件。 此对象提供与区块加载/卸载、方块破坏/放置以及爆炸相关的事件。
- [ItemComponentEvent](./event/ItemComponentEvent.md) - NeoForge 平台的物品组件和附魔事件。 这是为了物品组件修改和附魔处理保留的占位事件。NeoForge 没有与所有 Fabric 物品组件事件一一对应的实现，因此这里只为 API 兼容性提供这些事件。
- [ItemEvent](./event/ItemEvent.md) - NeoForge 平台的物品交互事件。 此对象提供与物品使用相关的事件，包括对方块使用物品以及一般的物品使用事件。
- [LivingBehaviorEvent](./event/LivingBehaviorEvent.md) - NeoForge 平台的生物行为事件。 此对象提供与生物实体行为相关的事件，包括驯服动物、生成幼体、鞘翅飞行和睡眠。
- [LivingUseItemEvent](./event/LivingUseItemEvent.md) - NeoForge 平台的生物实体使用物品事件。 此对象提供与生物实体使用物品相关的事件，包括使用开始、每 tick、停止和完成。
- [LootTableEvent](./event/LootTableEvent.md) - NeoForge 平台的战利品表事件。
- [PlayerEvent](./event/PlayerEvent.md) - NeoForge 平台的玩家交互事件。 此对象提供与玩家交互相关的事件，包括攻击实体、与方块/实体交互以及物品损坏。
- [ServerEntityCombatEvent](./event/ServerEntityCombatEvent.md) - NeoForge 平台的服务端实体战斗事件。 此对象提供与实体战斗相关的事件，包括暴击、盾牌格挡和击杀。
- [ServerEntityEvent](./event/ServerEntityEvent.md) - NeoForge 平台的服务端实体生命周期事件。 此对象提供与实体生命周期相关的事件，包括加载、卸载、装备变化、传送和末影人愤怒。
- [ServerEvent](./event/ServerEvent.md) - NeoForge 平台的服务端生命周期事件。 此对象提供与服务端生命周期相关的事件，包括服务端启动/停止、数据包同步、维度加载/卸载和 tick 事件。
- [ServerLivingEntityEvent](./event/ServerLivingEntityEvent.md) - NeoForge 平台的服务端生物实体事件。 此对象提供与生物实体生命周期相关的事件，包括受伤、死亡、掉落物、坠落、跳跃和生物转化。
- [ServerMessageEvent](./event/ServerMessageEvent.md) - NeoForge 平台的服务端消息事件。 此对象提供与聊天消息相关的事件。
- [ServerMobEffectEvent](./event/ServerMobEffectEvent.md) - NeoForge 平台的状态效果事件。 此对象提供与状态效果（药水）相关的事件，包括添加、移除、过期以及检查效果是否适用。
- [ServerPlayerEvent](./event/ServerPlayerEvent.md) - NeoForge 平台的服务端玩家事件。 此对象提供与服务端玩家生命周期相关的事件，包括加入/离开/重生、经验值事件、物品拾取/投掷、合成等。
- [NeoForgeManagedEvents](./event/managed/NeoForgeManagedEvents.md) - NeoForge 版 [ManagedListenerProvider] 的实现。 通过 [IEventBus.addListener] 注册原生 NeoForge 事件监听器，按作用域跟踪以便在重载时自动清理，并支持通过 [ManagedEventHandle] 手动注销。 在 [KattonNeoForge] 构造期间通过 [initialize] 初始化一次。
