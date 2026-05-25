# Fabric 与 NeoForge

Fabric 和 NeoForge 会把 Katton 作为客户端/服务端模组运行在 Minecraft 进程内，因此脚本可以直接访问 Minecraft 内部对象、注册表、渲染和配置阶段网络。

## 共享模组特性

| 功能 | 说明 |
|---|---|
| 客户端脚本 | `@ClientScriptEntrypoint` 函数会在客户端执行。 |
| 注册表修改 | 可注册物品、方块、实体、组件、粒子、声音、标签页和渲染器。 |
| 服务端脚本包同步 | 多人服务器会在配置阶段下发需要同步的脚本包。 |
| 运行时注入 | ByteBuddy/ASM 注入 API 可用。 |
| 渲染 | HUD 与世界渲染回调可用。 |
| 脚本包界面 | 客户端默认按 `K` 打开。 |

## 主要差异

| 领域 | Fabric | NeoForge |
|---|---|---|
| 服务端发送时机 | `ServerConfigurationPacketListenerImpl` 构造返回点 mixin。 | NeoForge 连接频道协商完成后。 |
| 客户端注册表钩子 | Fabric 注册表同步 handler。 | 原版 client configuration listener 的 registry data 钩子。 |
| 事件来源 | Fabric API callback。 | NeoForge event bus。 |
| 额外访问手段 | Access widener。 | Access transformer 加 mixin。 |

