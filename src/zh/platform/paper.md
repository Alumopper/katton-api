# Paper

Katton 的 Paper 模块是服务端插件。它在服务端运行 Kotlin 脚本包，并把 Bukkit/Paper 事件桥接到 Katton 通用事件模型。

## Paper 支持什么

| 领域 | Paper 行为 |
|---|---|
| 入口 | `top.katton.paper.KattonPaperPlugin` (`JavaPlugin`) |
| 脚本包 | 从 `<serverDir>/kattonpacks/` 与 `<worldDir>/kattonpacks/` 加载目录和 ZIP |
| 脚本包依赖 | 完整的 `packDependencies` 依赖图，作用于 `GLOBAL` 与 `WORLD` 包 |
| 命令 | `/katton help`、`status`、`reload`、`errors`、`capabilities`、`packs`、`dev` |
| 事件 | 14 类 Katton 事件桥接，以及 Bukkit 原生托管事件 |
| 调度 | Folia 感知的实体、区域、全局调度器 |
| 音频 | `playBasicSound` / `stopBasicSound` 发送原版声音数据包 |
| 构建产物 | 内嵌 Kotlin 运行时的 Shadow/fat jar |

## Paper 不支持什么

Paper 没有 Katton 客户端，因此这些功能会被禁用：

- 客户端脚本和 `@ClientScriptEntrypoint`
- 客户端渲染与 HUD API、镜头演出和后处理效果
- 基于解码器的完整音频播放器（`playClientAudio`、`playPlayerAudio`）
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
| `/katton errors` | 所有人 |
| `/katton capabilities events [事件]` | 所有人 |
| `/katton capabilities injection` | 所有人 |
| `/katton packs list` | 所有人 |
| `/katton packs enable\|disable <syncId>` | `katton.admin` 或 OP |
| `/katton reload` | `katton.admin` 或 OP |
| `/katton dev enable\|disable` | `katton.admin` 或 OP |

`registry`、`config`、`itemrender` 与 `debug registryLogging` 子命令仅适用于 Fabric/NeoForge，因为 Paper 禁用了注册表修改，也没有可渲染物品标记的客户端。

## Paper 上的音频

Paper 可以用原版声音数据包播放玩家客户端已经知道的任何声音：

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.audio.playBasicSound
import top.katton.api.audio.stopBasicSound

@ServerScriptEntrypoint(ServerPhase.READY)
fun rewardSound(context: ServerReadyContext) {
    val player = context.server.playerList.players.first()
    playBasicSound(player, "minecraft:entity.player.levelup", player.position(), SoundSource.PLAYERS)
    stopBasicSound(player, "minecraft:entity.player.levelup")
}
```

在 Paper 与 Folia 上，数据包会调度到玩家的实体区域。包内文件、确切资源和声音事件的完整播放不可用，因为没有 Katton 客户端。详见[音频指南](../guide/audio.md)。

## Bukkit 原生事件

使用 [托管事件](../guide/events.md#监听尚未封装的原生事件) 可以直接监听任意 Bukkit 事件：

```kotlin
import org.bukkit.event.player.PlayerMoveEvent
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerEvent

@ServerScriptEntrypoint(ServerPhase.READY)
fun moves() {
    registerEvent<PlayerMoveEvent>(ignoreCancelled = true) { event ->
        println(event.player.name)
    }
}
```

世界作用域脚本包注册的托管监听器会在重载时自动移除。

## 插件依赖

脚本包在自己的 `manifest.json` 中声明 Paper 插件依赖，不需要修改 Katton 的 `paper-plugin.yml`：

```json
{
  "dependencies": [
    {
      "id": "WorldEdit",
      "version": ">=7.3.0",
      "required": true,
      "platforms": ["paper"],
      "environment": "server"
    }
  ]
}
```

Paper 插件类只能在 `ServerPhase.READY` 使用。Katton 通过 `PluginManager` 解析已启用插件，以插件真实 JAR 或类目录进行编译，并在运行时委托给插件现有的 ClassLoader。Katton 不会加载插件的第二份副本，普通类型 API 调用也不会每次使用反射。

脚本导入了哪个插件的类，就应声明哪个插件。如果两个声明的插件导出相同类名，Katton 会因为运行时所有者不明确而拒绝该脚本包。详见[清单、依赖与签名](../architecture/manifest.md)。

脚本包之间的依赖在 Paper 上与模组平台一致，见[脚本包依赖](../guide/pack-dependencies.md)。

## Folia

Paper manifest 声明了 `folia-supported: true`。区域感知调度工具位于 `top.katton.paper`；见 [Folia 调度器](./folia.md)。
