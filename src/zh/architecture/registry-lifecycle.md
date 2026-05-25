# 注册表生命周期

Katton 的可重载注册表让脚本可以在不重启游戏的情况下迭代原生 Minecraft 对象。

## 受管注册表

Katton 跟踪 10 个可重载注册表领域：

| 注册表 | 类型 |
|---|---|
| 物品 | `Item` |
| 方块 | `Block` |
| 实体类型 | `EntityType<?>` |
| 方块实体类型 | `BlockEntityType<?>` |
| 效果 | `MobEffect` |
| 声音事件 | `SoundEvent` |
| 粒子类型 | `ParticleType<?>` |
| 创造模式标签页 | `CreativeModeTab` |
| 数据组件类型 | `DataComponentType<?>` |
| 实体渲染器 | 客户端渲染器注册 |

## 模式

| 模式 | 行为 |
|---|---|
| `RegisterMode.GLOBAL` | 注册一次，不参与重载跟踪。 |
| `RegisterMode.RELOADABLE` | 按脚本跟踪所有权，并在重载时刷新所有权。 |
| `RegisterMode.AUTO` | 初始化阶段为 GLOBAL，服务端启动后为 RELOADABLE。 |

## 重载语义

重载期间，Katton 会清理所有权跟踪，然后由脚本重新注册内容。已有 Minecraft 注册表对象会软保留，而不是硬删除，因为硬删除可能破坏 holder 和已加载游戏状态。

stale 条目表示对象仍在 Minecraft 注册表中，但当前没有脚本拥有它。移除某个脚本定义的物品或方块后重载，出现 stale 是预期行为。

在 Fabric/NeoForge 上可用 `/katton registry` 与 `/katton registry stale` 检查这些状态。

## Paper

Paper 完全禁用注册表修改。连接到 Paper 服务器的原版客户端无法接收 Katton 定义的注册表条目，因此 Paper 脚本应使用原版内容、Bukkit API、数据包修改与事件逻辑。

