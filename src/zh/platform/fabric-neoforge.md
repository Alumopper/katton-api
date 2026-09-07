# Fabric 与 NeoForge

Fabric 和 NeoForge 会把 Katton 作为客户端/服务端模组运行在 Minecraft 进程内，因此脚本可以直接访问 Minecraft 内部对象、注册表、渲染和配置阶段网络。

## 共享模组特性

| 功能 | 说明 |
|---|---|
| 客户端脚本 | 带明确阶段的 `@ClientScriptEntrypoint` 函数会在客户端执行。 |
| 注册表修改 | 可注册物品、方块、实体、组件、粒子、声音、标签页和渲染器。 |
| 服务端脚本包同步 | 配置阶段发送完整登录快照，成功重载后发送带修订号的在线更新。 |
| 运行时注入 | ByteBuddy/ASM 注入 API 可用。 |
| 渲染 | 支持 HUD 回调、镜头演出、粒子、几何和后处理效果。 |
| 脚本包界面 | 客户端默认按 `K` 打开。 |

## 主要差异

| 领域 | Fabric | NeoForge |
|---|---|---|
| 服务端发送时机 | `ServerConfigurationPacketListenerImpl` 构造返回点 mixin。 | NeoForge 连接频道协商完成后。 |
| 客户端注册表钩子 | Fabric 注册表同步 handler。 | 原版 client configuration listener 的 registry data 钩子。 |
| 事件来源 | Fabric API callback。 | NeoForge event bus。 |
| 额外访问手段 | Access widener。 | Access transformer 加 mixin。 |

## 模组依赖

每个脚本包清单都必须包含 `dependencies`。导入其他模组 API 前，应声明模组 ID、适用加载器、运行侧和版本范围：

```json
{
  "dependencies": [
    {
      "id": "create",
      "version": ">=6.0.0",
      "required": true,
      "platforms": ["fabric", "neoforge"],
      "environment": "both"
    }
  ]
}
```

Katton 会在脚本实际运行的一侧校验依赖，并把声明的模组及其必需传递依赖加入编译类路径；执行时使用当前加载器中已转换的真实类。详见[清单、依赖与签名](../architecture/manifest.md)。

## 客户端时机与同步

全局客户端初始化使用 `ClientPhase.READY`。世界包和同步包使用 `REGISTRY_SETUP` 完成注册表校验前的工作，使用 `JOINED` 执行需要玩家和客户端世界的工作。

登录同步使用配置阶段修订 `0`，无需请求往返即发送完整快照。后续服务端成功重载会发布游戏阶段修订；客户端只请求变化的包，暂存并预编译完整快照，激活后发送回执。详见[脚本包同步与信任](../architecture/pack-sync.md)。
