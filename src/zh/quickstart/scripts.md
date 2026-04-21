# 脚本

Katton 提供两类脚本：**全局脚本** 与 **包内脚本**。全局脚本会在模组加载时执行一次，适合做内容注册与全局事件监听；但它不支持热重载。包内脚本会在数据包或资源包重载时执行，因此非常适合频繁迭代的内容。两类脚本都支持客户端与服务端。

## 全局脚本

全局脚本位于游戏根目录下的 `katton` 文件夹中。`katton` 下每个子目录代表一个命名空间。服务端脚本与客户端脚本分别放在 `server_scripts` 和 `client_scripts` 子目录中。

全局脚本只会在 Katton 加载时编译并执行一次，因此不支持热重载。修改后需要重启游戏才能生效。

## 包内脚本

包内脚本存放在资源包或数据包中。资源包承载客户端脚本，数据包承载服务端脚本。包内脚本会在资源包或数据包重载时重新执行，因此支持热重载。你可以通过 `F3 + T` 重载资源包，或使用 `/reload` 重载数据包，改动可立即生效而无需重启游戏。

### 客户端脚本

包内客户端脚本位于资源包的 `assets/<namespace>/client_scripts` 目录。它们可通过游戏内按下 `F3 + T` 重载。客户端脚本可以访问客户端专属类和 API，例如渲染和客户端事件。

下面示例演示了一个在 HUD 上渲染自定义覆盖层的客户端脚本：

<!--@include: ../../example/quickstart/scripts/01.md-->

>[!Caution]
> Katton 不会自动校验跨端 API 使用。请不要在客户端脚本中访问服务端专属 API，也不要在服务端脚本中访问客户端专属 API，否则很可能导致游戏崩溃。

### 服务端脚本

包内服务端脚本位于数据包的 `data/<namespace>/server_scripts` 目录，可通过 `/reload` 重载。服务端脚本可以访问服务端专属类与 API，例如命令与服务端事件。对数据包开发者来说，服务端脚本通常会是最熟悉的部分。

下面示例展示了玩家加入时发送欢迎消息的服务端脚本：

<!--@include: ../../example/quickstart/scripts/02.md-->

在该示例中，我们订阅了 [`onPlayerJoin`](../../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) 事件来发送欢迎信息。同时使用 [`once`](../../api/common/KattonAPI.md#once) API 判断玩家是否首次加入，以便给出不同提示。
