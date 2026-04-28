# 入门指南

## 环境配置

Katton 仅支持 Minecraft 26.1 及以上版本，并且要求 Java 25 或更高版本。Katton 同时支持 Fabric 和 NeoForge 模组加载器。请先确认你的游戏版本已正确安装并配置对应加载器。

我们推荐使用 IntelliJ IDEA 进行开发，因为它对 Kotlin 和 Minecraft 模组开发支持最好。你也可以使用其他支持 Kotlin 的 IDE，但可能需要自行补充一些配置。

Katton 会从 `kattonpacks/` 目录中加载 Kotlin 脚本包（详见[脚本](scripts.md)）。最快速的上手方式是克隆 [Katton Example](https://github.com/Alumopper/Katton-Example) 仓库并在 IDE 中打开。该示例项目已经预置好开发所需依赖与配置，打开后即可开始编写脚本。

## 编写你的第一个脚本

虽然我们称其为 "Kotlin Scripts"，但它们实际上是普通 Kotlin 文件，只是后缀为 `.kt` 而不是 `.kts`，这样 IDE 支持会更好。这里默认你已经克隆并打开了示例项目。示例项目包含 `fabric` 和 `neoforge` 两个模块，分别对应 Fabric 与 NeoForge。你可以按自己使用的加载器选择其一。每个模块中你都能看到最多四个源码目录：

| 目录 | 用途 |
|---|---|
| `server_scripts/` | 服务端脚本（可热重载） |
| `client_scripts/` | 客户端脚本（可热重载） |
| `global_server_scripts/` | 启动时一次性加载的服务端脚本（不热重载） |
| `global_client_scripts/` | 启动时一次性加载的客户端脚本（不热重载） |

为了简化流程，本教程只使用 `server_scripts/`。

<ImageCaptionZoom
   src="/docimg/1.png"
   alt="脚本目录结构"
   caption="示例项目中的脚本目录"
   figure-width="400px"
/>

开始前，我们需要把 Minecraft 源码引入项目以便 IDE 代码补全。最简单的方法是打开 Minecraft 游戏目录中的 `versions` 文件夹，找到对应版本目录并进入，然后把里面的 jar 复制到示例项目的 `lib/` 目录。比如你用的是 Minecraft 26.1-Fabric，就进入 `26.1-Fabric` 目录复制 jar 到 `lib/`。这样就引入了服务端源码——客户端源码在本教程中不需要。

作为第一个脚本，我们实现玩家加入游戏时发送 "Hello Katton"。在 `server_scripts/` 目录中新建 `hello.kt`，内容如下：

<!--@include: ../../example/quickstart/get-started/01.md-->

当前我们只是在独立工程里写脚本。需要把脚本放到 Katton 能发现的地方。推荐的方式是放到世界存档的 **脚本包**（`kattonpacks/`）目录下。

### 第一步：创建你的脚本包

在世界存档的 `kattonpacks/` 目录下新建一个文件夹（例：`<世界目录>/kattonpacks/my_first_pack/`），并添加 `manifest.json`：

```json
{
  "id": "my_first_pack",
  "name": "我的第一个 Katton 包",
  "version": "1.0.0",
  "enabled": true
}
```

如果 `kattonpacks/` 目录还不存在，可以手动创建，也可以让 Katton 在首次重载时自动创建。

### 第二步：配置 Gradle 同步任务

示例项目自带一个 `copyGameScripts` Gradle 任务，它会在你的源文件夹和目标之间创建**硬链接**——所以你在 IDE 里的任何改动都会立即反映到游戏中，不需要重复执行任务。

打开 `build.gradle.kts`，设置目标目录：

```kt
// 本教程只使用服务端脚本，其他的设为 null
val clientScriptsTargetDir: File? = null
val serverScriptsTargetDir: File? = file("path\\to\\saves\\<世界名>\\kattonpacks\\my_first_pack")
val gClientScriptsTargetDir: File? = null
val gServerScriptsTargetDir: File? = null
```

记得把路径换成你的世界存档真实路径。然后在 IDEA 右侧 Gradle 面板（小象图标）中找到并执行 `copyGameScripts` 任务，你的脚本就会以硬链接的形式出现在脚本包里。

> [!TIP]
> **那数据包路径呢？** 如果你偏好旧方式，仍然可以指向数据包路径如 `data/<ns>/scripts/`——Katton 同样会扫描。但 `kattonpacks/` 提供了清单支持、游戏内包管理界面和更清爽的工作流，是我们推荐的方向。

<ImageCaptionZoom
   src="/docimg/image-3.png"
   alt="Gradle 任务位置"
   caption="在这里可以找到 copyGameScripts 任务"
   figure-width="400px"
/>

接下来启动安装了 Katton 的游戏并进入世界。你应该会在聊天栏看到 "Hello Katton"。恭喜，你已经完成了第一个 Katton 脚本。

把 `hello.kt` 里的消息改成其他内容并保存，然后执行 `/katton reload` 命令。重新进入后即可看到新消息，无需重启游戏。这就是脚本热重载的威力。

> 你也可以用 `/reload`（原版命令）只重载服务端脚本，或用 `F3 + T` 重载客户端脚本。但 `/katton reload` 一次搞定两边，还带可视化进度条让你随时知道进展。去看看 [命令](commands.md) 页面了解所有内置命令。

## 调试

Katton 支持通过标准 JVM 远程调试来调试脚本包 Kotlin 脚本。

1. 使用调试参数启动 Minecraft（或专用服务器），例如：

    <!--@include: ../../example/quickstart/get-started/02.md-->

2. 在 IntelliJ IDEA 中创建 **Attach to remote JVM** 运行配置，并连接到相同主机和端口。

<ImageCaptionZoom
   src="/docimg/image-4.png"
   alt="调试配置入口"
   caption="先点击这里"
   figure-width="400px"
/>

<ImageCaptionZoom
   src="/docimg/image-5.png"
   alt="调试配置类型"
   caption="然后选择这里"
   figure-width="400px"
/>

3. 在实际的脚本包文件中设置断点（例如 `<世界目录>/kattonpacks/my_first_pack/hello.kt`）。
4. 使用 IDE 标准调试工具调试你的脚本。
