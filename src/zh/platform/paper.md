# Paper

Katton 的 Paper 模块是服务端插件。它在服务端运行 Kotlin 脚本包，并把 Bukkit/Paper 事件桥接到 Katton 通用事件模型。

## Paper 支持什么

| 领域 | Paper 行为 |
|---|---|
| 入口 | `top.katton.paper.KattonPaperPlugin` (`JavaPlugin`) |
| 脚本包 | 从 `<serverDir>/kattonpacks/` 与 `<worldDir>/kattonpacks/` 加载 |
| 命令 | `/katton help`、`/katton status`、`/katton reload` |
| 事件 | 14 类 Katton 事件桥接，以及 Bukkit 原生托管事件 |
| 调度 | Folia 感知的实体、区域、全局调度器 |
| 构建产物 | 内嵌 Kotlin 运行时的 Shadow/fat jar |

## Paper 不支持什么

Paper 没有 Katton 客户端，因此这些功能会被禁用：

- 客户端脚本和 `@ClientScriptEntrypoint`
- 客户端渲染与 HUD API
- 脚本包界面
- 服务端到客户端脚本包同步
- 自定义物品、方块、实体、组件、粒子、声音、创造标签页或渲染器注册
- 运行时 ByteBuddy 注入

`Katton.paperInitialize()` 会设置 `registrationEnabled = false` 和 `hasClient = false`，避免脚本创建原版客户端无法识别的注册表内容。

## 命令

Paper 上的 `/katton` 更精简：

| 命令 | 权限 |
|---|---|
| `/katton help` | 所有人 |
| `/katton status` | 所有人 |
| `/katton reload` | `katton.admin` 或 OP |

`registry` 和 `debug registryLogging` 子命令仅适用于 Fabric/NeoForge。

## Bukkit 原生事件

使用 [托管事件](../guide/managed-events.md) 可以直接监听任意 Bukkit 事件：

```kotlin
import org.bukkit.event.player.PlayerMoveEvent
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerEvent

@ServerScriptEntrypoint
fun moves() {
    registerEvent<PlayerMoveEvent>(ignoreCancelled = true) { event ->
        println(event.player.name)
    }
}
```

世界作用域脚本包注册的托管监听器会在重载时自动移除。

## Folia

Paper manifest 声明了 `folia-supported: true`。区域感知调度工具位于 `top.katton.paper`；见 [Folia 调度器](./folia.md)。

