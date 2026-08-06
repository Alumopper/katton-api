# 入门指南

<div class="instruction-line">

## 环境配置

Katton 当前支持 Minecraft 26.1.2 与 26.2，同时支持 Fabric、NeoForge 模组加载器和 Paper 插件服，并要求 Java 25 或更高版本。请确认游戏、Katton 依赖和加载器/插件环境使用同一个 Minecraft 版本。

> [!NOTE]
> Paper 为纯服务端平台。如果你在 Paper 上开发，则客户端脚本、渲染和脚本包界面均不可用。Paper 上的脚本包从 `<serverDir>/kattonpacks/` 加载。

我们推荐使用 IntelliJ IDEA 进行开发，因为它对 Kotlin 和 Minecraft 模组开发支持最好。你也可以使用其他支持 Kotlin 的 IDE，但可能需要自行补充一些配置。

Katton 会从 `kattonpacks/` 目录中加载 Kotlin 脚本包（详见[脚本包](../guide/scripts.md)）。最快速的上手方式是在[模板生成器](../template/)里面生成一个模板项目并在 IDE 中打开。模板项目已经预置好开发所需依赖与配置，打开后即可开始编写脚本。

## 编写你的第一个脚本

虽然我们称其为 "Kotlin Scripts"，但它们实际上是普通 Kotlin 文件，只是后缀为 `.kt` 而不是 `.kts`。这里默认你已经打开了模板项目并等待IDEA完成了构建，在源码布局中你会看到类似这样的目录：

| 目录 | 用途 |
|---|---|
| `world_scripts/` | 世界专属脚本（可热重载） |
| `global_scripts/` | 进程级启动/就绪脚本（热重载不重放） |

简便起见，本教程只使用 `world_scripts/`。

<ImageCaptionZoom
   src="/docimg/1.png"
   alt="脚本目录结构"
   caption="示例项目中的脚本目录"
   figure-width="400px"
/>

开始前，我们需要把 Minecraft 类引入项目以便 IDE 代码补全。模板生成器会根据选择的 Minecraft 版本配置 Katton 与平台依赖。Fabric 和 NeoForge 项目还需要把该版本的官方游戏 jar 复制到生成项目的 `lib/` 目录；若脚本引用了其他模组提供的 API，再补充对应的 `compileOnly` 依赖。

> [!NOTE]
> 对于Paper端，则不需要使用这样的方法引入Minecraft源码。Paper提供了一个轻量级插件开发环境，可以直接在build.gradle.kts中添加
> ```kts
> plugins {
>     id("io.papermc.paperweight.userdev") version "2.0.0-beta.21"
> }
> ```
> 从而引入Paper API和Minecraft源码。

作为第一个脚本，我们实现玩家加入游戏时发送 "Hello Katton"。在 `world_scripts/` 目录中新建 `hello.kt`，内容如下：

<!--@include: ../../example/quickstart/get-started/01.md-->

当前我们只是在独立工程里写脚本。需要把脚本放到 Katton 能发现的地方。推荐的方式是放到世界存档的 **脚本包**（`kattonpacks/`）目录下。

### 创建你的脚本包

在世界存档的 `kattonpacks/` 目录下新建一个文件夹（例：`<世界目录>/kattonpacks/my_first_pack/`），并添加 `manifest.json`：

```json
{
  "id": "my_first_pack",
  "name": "我的第一个 Katton 包",
  "version": "1.0.0",
  "enabled": true,
  "dependencies": []
}
```

每个脚本包清单都必须包含 `dependencies`。导入其他模组或插件的类之前，应在这里声明对应依赖；详见[清单、依赖与签名](../architecture/manifest.md)。

如果 `kattonpacks/` 目录还不存在，可以手动创建，也可以让 Katton 在首次重载时自动创建。

### 配置 Gradle 同步任务

示例项目自带一个 `copyGameScripts` Gradle 任务，它会在你的源文件夹和目标之间创建**硬链接**——所以你在 IDE 里的任何改动都会立即反映到游戏中，不需要重复执行任务。

>[!NOTE]
> 硬链接只能在同一磁盘上创建。
>
> 如果你在源文件夹中创建或删除文件，可能需要重新运行 `copyGameScripts` 任务来更新链接。

打开 `build.gradle.kts`，设置目标目录：

```kt
// In this tutorial we only use server scripts, so set the others to null
val worldScriptsTargetDir: List<File> = listOf(
   file("/path/to/your/world/kattonpacks/my_first_pack/")
)
val globalScriptsTargetDir: List<File> = listOf()
```

记得把路径换成你的世界存档真实路径。然后在 IDEA 右侧 Gradle 面板（就是那个大象喵）中找到并执行 `copyGameScripts` 任务，你的脚本就会以硬链接的形式出现在脚本包里。

<ImageCaptionZoom
   src="/docimg/image-3.png"
   alt="Gradle 任务位置"
   caption="在这里可以找到 copyGameScripts 任务"
   figure-width="400px"
/>

接下来启动安装了 Katton 的游戏并进入世界。你应该会在聊天栏看到 "Hello Katton"。恭喜，你已经完成了第一个 Katton 脚本。

把 `hello.kt` 里的消息改成其他内容并保存，然后执行 `/katton reload` 命令。重新进入后即可看到新消息，无需重启游戏。对啦，这就是脚本热重载的威力。

> [!TIP]
> 你也可以用 `/reload`（原版命令）重载服务端脚本。`F3 + T` 只重载 Minecraft 资源，不会调用 Katton 脚本。`/katton reload` 是推荐工作流，并带可视化进度条。详见[热重载与调试](./hot-reload.md)和[命令](commands.md)。

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

</div>
