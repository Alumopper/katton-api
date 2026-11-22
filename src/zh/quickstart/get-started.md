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

开始前，我们需要把 Minecraft 类引入项目以便 IDE 代码补全。模板生成器会根据选择的 Minecraft 版本配置 Katton 与平台依赖；Fabric Loom 和 NeoForge ModDevGradle 会自动提供匹配的 Minecraft 编译类路径。请在生成器的依赖区域添加外部模组或插件，再通过 Gradle `compileOnly` 或 `lib/` 中的额外 JAR 提供其 API。

> [!NOTE]
> Paper 模板已配置 Paperweight Userdev 和匹配的开发包，无需再手动添加。

作为第一个脚本，我们实现玩家加入游戏时发送 "Hello Katton"。在 `world_scripts/` 目录中新建 `hello.kt`，内容如下：

<!--@include: ../../example/quickstart/get-started/01.md-->

当前我们只是在独立工程里写脚本。需要把脚本放到 Katton 能发现的地方。推荐的方式是放到世界存档的 **脚本包**（`kattonpacks/`）目录下。

### 配置 Gradle 同步任务

模板已在 `world_scripts/manifest.json` 中生成脚本包清单，无需在游戏目录里手动创建。要修改清单，请编辑工程里的这份文件，并保留必填的 `dependencies` 数组。详见[清单、依赖与签名](../architecture/manifest.md)。

打开工程根目录的 `gradle.properties`，设置目标路径。本教程只使用 `world_scripts/`，因此将全局脚本路径留空：

```properties
kattonWorldScriptsDir=/path/to/world/kattonpacks/my_first_pack
kattonGlobalScriptsDir=
```

将示例路径换成实际的脚本包路径；Paper 使用 `<serverDir>/kattonpacks/my_first_pack`。Windows 路径可写成 `D:/Minecraft/saves/Test World/kattonpacks/my_first_pack`，以免反斜杠被当成转义符。

> [!WARNING]
> 请选择与工程位于同一卷的新建专用脚本包目录。不要填整个 `kattonpacks` 目录，也不要填已有文件需要保留的目录。同步会删除目标中源目录没有的文件和子目录，并用硬链接替换同路径的独立文件。

在 IDEA 右侧的 Gradle 面板运行 `copyGameScripts`；如果生成 Fabric 或 NeoForge 模板时启用了签名功能，则运行 `signAndCopyGameScripts`。任务会将清单和脚本以硬链接部署到目标目录。请在工程里编辑脚本；新增或删除文件后重新运行同步任务。

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

> [!TIP]
> 想要更快的开发循环，可以开启 [IDE 开发连接](./ide.md)，直接从 Katton IDEA 插件部署世界包。该桥负责部署脚本与推送诊断，它不是调试器；设置断点仍然需要下面的远程附加配置。

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
