# 入门指南

## 环境配置

Katton 仅支持 Minecraft 26.1 及以上版本，需要 Java 25 或更高版本。目前，Katton 仅支持 Fabric 模组加载器，但我们计划在未来支持 Forge/Neoforge。

我们推荐使用 IntelliJ IDEA 进行开发，因为它对 Kotlin 和 Minecraft 模组开发有最好的支持。你也可以使用其他支持 Kotlin 的 IDE，但可能需要手动配置。

Katton 会编译并执行所有数据包中的 Kotlin 脚本，因此你的项目结构应遵循标准的 Minecraft 数据包格式。同时，我们建议使用 Gradle 或 Maven 等构建工具来管理依赖。要构建一个Katton工程，最简单的办法是把 [Katton Example](https://github.com/Alumopper/Katton-Example) 仓库复制到本地并在 IDE 中打开它。这个示例项目已经配置好所有必要的依赖和设置，等 IDE 加载完毕后就可以立即开始进行开发。

## 创建你的第一个脚本模组

虽然我们称之为"Kotlin 脚本"，但它们实际上是以 `.kt` 而非 `.kts` 结尾的普通 Kotlin 文件，这样能获得更好的 IDE 支持。在你的命名空间文件夹下，创建一个名为 `scripts` 的新目录。Katton 会自动编译并执行此目录中的所有 `.kt` 文件。

如果你使用的是示例项目，记得将必要的依赖 jar 复制到 `libs` 文件夹，包括 Minecraft jar（可以在你的 `.minecraft` 目录的 `version` 文件夹中找到），以及 Katton 模组自身的 jar 文件。你也可以复制任何其他你想在脚本中使用的模组 jar。示例项目已经在Gradle中配置好依赖导入，这些`libs`中的 jar 文件将用于在 IDE 中提供代码补全和类型检查。

作为你的第一个脚本，我们将在玩家加入游戏时向他们发送一条"Hello Katton"消息。在 `scripts` 目录中创建一个名为 `hello.kt` 的文件，内容如下：

<!--@include: ../../example/quickstart/get-started/01.md-->

记得安装Katton，然后启动游戏并进入世界。当你进入的时候，你应该会在聊天中看到一条"Hello Katton"消息。好欸，你刚刚用 Katton 创建了你的第一个脚本模组！

将 `hello.kt` 中的消息更改为其他内容，保存文件，然后使用 `reload` 命令，当你再次加入时，你应该会看到新消息。无需重启游戏就可以进行修改，这就是热重载脚本的强大之处！

## 调试

Ktton 支持通过 JVM 远程调试来调试数据包 Kotlin 脚本。

1. 添加如下 JVM 参数启动 Minecraft：

   <!--@include: ../../example/quickstart/get-started/02.md-->

2. 在 IntelliJ IDEA 中，创建一个 **Attach to remote JVM** 运行配置，并连接到相同的主机和端口。
3. 在实际的数据包脚本文件中设置断点（例如，`data/<namespace>/scripts/*.kt`）。
4. 使用 IDE 自带的调试工具来调试你的脚本。
