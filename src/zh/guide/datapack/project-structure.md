# 项目结构与重载工作流

数据包通过 `datapacks/<pack>/pack.mcmeta` 被发现。Katton 脚本包通过 `kattonpacks/<pack>/manifest.json` 被发现。

这是第一个区别：包依然是一个可以实时编辑的文件夹，但可执行文件从 `.mcfunction` 变成了 Kotlin 文件。

## 文件结构

| 数据包路径 | Katton 对应路径 |
| --- | --- |
| `<world>/datapacks/my_pack/pack.mcmeta` | `<world>/kattonpacks/my_pack/manifest.json` |
| `<world>/datapacks/my_pack/data/demo/function/start.mcfunction` | `<world>/kattonpacks/my_pack/start.kt` |
| 多个存档共用的数据包 | `<gameDir>/kattonpacks/` 中的全局包 |
| 地图专用数据包 | `<worldDir>/kattonpacks/` 中的世界包 |

Katton 会递归扫描 `.kt` 文件，所以可以按功能组织你的目录：

```text
kattonpacks/
  arena_tools/
    manifest.json
    commands.kt
    waves/
      spawns.kt
      rewards.kt
```

>[!NOTE]
> 在IDE中，`kattonpacks/` 目录应该被标记为源代码根。你的目录结构决定了你的包结构。

## Manifest

`manifest.json` 类似数据包的 `pack.mcmeta`。

<!--@include: ../../../example/quickstart/pack-ui/01.md-->

迁移时最重要的字段是：

| 字段 | 作用 |
| --- | --- |
| `id` | 日志、同步和脚本所有权使用的唯一 ID |
| `name` | 在脚本包 UI 中展示的名称 |
| `enabled` | 控制是否禁用包 |
| `clientSync` | Fabric/NeoForge 服务端可同步客户端脚本与资源 |

## 入口函数

数据包用 `#load` 决定哪些函数先运行。Katton 使用带 `@ServerScriptEntrypoint` 的顶层函数作为脚本入口。

```kotlin
import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint
fun main() {
    println("My Katton script pack loaded")
}
```

入口函数最好保持短小。用它注册事件、命令和初始状态，把可复用逻辑放进普通 Kotlin 函数。

## 重载命令

| 命令 | 重载内容 |
| --- | --- |
| `/katton reload` | Katton 脚本，并显示进度 |
| `/reload` | 原版数据包；Katton 也会接入服务端脚本重载 |
| `F3 + T` | Fabric/NeoForge 上的客户端资源和客户端脚本 |

完整流程见 [热重载与调试](../../quickstart/hot-reload.md) 和 [脚本加载生命周期](../../architecture/script-loading.md)。
