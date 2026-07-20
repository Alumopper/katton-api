---
title: Fabric API
outline: false
---

# Fabric API

由模块 `fabric` 生成。

## 源码根目录

- `fabric/src/main/kotlin/top/katton/api`

## 页面

- [ChunkAndBlockEvent](./event/ChunkAndBlockEvent.md) - Fabric 平台的区块、方块实体和方块事件。 此对象提供与区块加载/卸载、方块实体生命周期、方块破坏以及爆炸相关的事件。
- [ItemComponentEvent](./event/ItemComponentEvent.md) - Fabric 平台的物品组件和附魔事件。
- [ItemEvent](./event/ItemEvent.md) - Fabric 平台的物品交互事件。 此对象提供与物品使用和投掷相关的事件。 当玩家在世界中与物品交互时触发。
- [LivingBehaviorEvent](./event/LivingBehaviorEvent.md) - Fabric 平台的生物行为事件。
- [LivingUseItemEvent](./event/LivingUseItemEvent.md) - Fabric 平台的生物实体物品使用事件。
- [LootTableEvent](./event/LootTableEvent.md) - Fabric 平台的战利品表事件。
- [PlayerEvent](./event/PlayerEvent.md) - Fabric 平台的玩家交互事件。 此对象提供与玩家交互相关的事件，包括攻击方块/实体、使用物品，以及与方块/实体交互。
- [ServerEntityCombatEvent](./event/ServerEntityCombatEvent.md) - Fabric 平台的服务端实体战斗事件。 此对象提供与实体战斗相关的事件，包括击杀、暴击和盾牌格挡。
- [ServerEntityEvent](./event/ServerEntityEvent.md) - Fabric 平台的服务端实体生命周期事件。 此对象提供与实体生命周期相关的事件，包括加载、卸载、装备变更以及维度/世界变更。
- [ServerEvent](./event/ServerEvent.md) - Fabric 平台的服务器生命周期事件。 此对象提供与服务器生命周期相关的事件，包括启动、停止、数据包重载、保存钩子和刻事件。
- [ServerLivingEntityEvent](./event/ServerLivingEntityEvent.md) - Fabric 平台的服务端生物实体事件。 此对象提供与生物实体生命周期相关的事件，包括伤害、死亡以及生物转换事件。
- [ServerMessageEvent](./event/ServerMessageEvent.md) - Fabric 平台的服务端消息事件。 此对象提供与聊天消息、游戏消息和命令消息相关的事件。 包含可取消的允许类事件，以及仅通知的处理类事件。
- [ServerMobEffectEvent](./event/ServerMobEffectEvent.md) - Fabric 平台的状态效果事件。 此对象提供与状态效果（药水）相关的事件，包括添加、移除和修改实体效果。
- [ServerPlayerEvent](./event/ServerPlayerEvent.md) - Fabric 平台的服务器玩家事件。 此对象提供与服务器玩家生命周期相关的事件，包括加入、离开、重生、经验事件和物品选取事件。
- [FabricManagedEvents](./event/managed/FabricManagedEvents.md) - [ManagedListenerProvider] 的 Fabric 实现。
