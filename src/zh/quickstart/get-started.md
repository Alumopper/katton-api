# 入门指南

## 环境配置

Katton 仅支持 Minecraft 26.1 及以上版本，并且要求 Java 25 或更高版本。Katton 同时支持 Fabric 和 NeoForge 模组加载器。请先确认你的游戏版本已正确安装并配置对应加载器。

我们推荐使用 IntelliJ IDEA 进行开发，因为它对 Kotlin 和 Minecraft 模组开发支持最好。你也可以使用其他支持 Kotlin 的 IDE，但可能需要自行补充一些配置。

Katton 会将所有数据包中的 Kotlin 脚本编译并作为[服务端脚本](./scripts.md#server-side-scripts)执行，也会将所有资源包中的 Kotlin 脚本编译并作为[客户端脚本](./scripts.md#client-side-scripts)执行。最快速的上手方式是克隆 [Katton Example](https://github.com/Alumopper/Katton-Example) 仓库并在 IDE 中打开。该示例项目已经预置好开发所需依赖与配置，打开后即可开始编写脚本。

## 编写你的第一个脚本

虽然我们称其为 "Kotlin Scripts"，但它们实际上是普通 Kotlin 文件，只是后缀为 `.kt` 而不是 `.kts`，这样 IDE 支持会更好。这里默认你已经克隆并打开了示例项目。示例项目包含 `fabric` 和 `neoforge` 两个模块，分别对应 Fabric 与 NeoForge。你可以按自己使用的加载器选择其一。在每个模块中你都能看到四个源码目录：`client-scripts`、`server-scripts`、`global-client-scripts`、`global-server-scripts`。为了简化流程，本教程只使用 `server-scripts`。

<ImageCaptionZoom
   src="/docimg/1.png"
   alt="脚本目录结构"
   caption="示例项目中的脚本目录"
   figure-width="400px"
/>

开始前，我们需要把 Minecraft 源码引入项目。最简单的方法是打开 Minecraft 游戏目录中的 `versions` 文件夹，找到对应版本目录并进入，然后可以看到对应的 jar。比如我使用的是 Minecraft 26.1-Fabric，就会进入 `26.1-Fabric` 目录，并把其中 jar 复制到项目的 `lib` 目录。这样我们就引入了服务端相关源码。客户端源码在本教程中不是必需的，因此暂时可以不处理。

作为第一个脚本，我们实现玩家加入游戏时发送 "Hello Katton"。在 `server-scripts` 目录中新建 `hello.kt`，内容如下：

<!--@include: ../../example/quickstart/get-started/01.md-->

当前我们只是在独立工程里写脚本，还需要把脚本放进数据包，Katton 才能发现并执行。手动复制会很繁琐，所以示例项目提供了一个 Gradle 任务用于自动处理。

打开 `build.gradle.kts`，修改以下内容：

```kt
// In this project we only use server scripts, so we only need to set serverScriptsTargetDir, and other three can be null
val clientScriptsTargetDir: File? = null
val serverScriptsTargetDir: File? = file("path\\to\\datapack\\data\\test\\scripts")
val gClientScriptsTargetDir: File? = null
val gServerScriptsTargetDir: File? = null
```

请把 `path\\to\\datapack` 替换为你的数据包真实路径。然后在 IDEA 右侧 Gradle 面板（小象图标）中找到并执行 `copyGameScripts` 任务，脚本就会自动出现在对应目录。需要注意的是，该任务实际会创建到原脚本文件的链接，而不是简单复制。因此你在示例项目中的改动会即时反映到数据包里，不需要每次都重复执行任务，开发体验会顺畅很多。

<ImageCaptionZoom
   src="/docimg/image-3.png"
   alt="Gradle 任务位置"
   caption="在这里可以找到 copyGameScripts 任务"
   figure-width="400px"
/>

接下来启动安装了 Katton 的游戏并进入世界。你应该会在聊天栏看到 "Hello Katton"。恭喜，你已经完成了第一个 Katton 脚本。

把 `hello.kt` 里的消息改成其他内容并保存，然后执行 `reload` 命令。重新进入后即可看到新消息，无需重启游戏。这就是脚本热重载的威力。

## 调试

Katton 支持通过标准 JVM 远程调试来调试数据包 Kotlin 脚本。

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

3. 在脚本文件中设置断点。
4. 使用 IDE 标准调试工具调试你的脚本。
