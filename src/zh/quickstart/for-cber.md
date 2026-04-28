# 面向原版数据包开发者

其实我自己最早也是原版数据包开发者。正是因为我受够了数据包开发里的繁琐流程和各种限制，才做出了 Katton。我希望保留数据包热重载的优点，同时获得接近模组级别的能力。所以如果你也是数据包开发者，不用担心，Katton 的体验会非常熟悉。

Katton 提供了一系列函数来封装原版命令的能力。即使你完全不了解 Fabric 模组开发，也依然可以用这些函数实现你在数据包里能做到的大部分事情。

## 命令

命令相关函数都位于 `top.katton.api.dpcaller` 包下。你可以在 [API 文档](../../api/common/) 查阅这些函数。它们的设计尽量贴近原版命令。例如你在数据包里会写 `scoreboard players set test myscore 1`，在 Katton 中对应写法如下：

<!--@include: ../../example/quickstart/for-cber/01.md-->

## 实体访问

在数据包里，我们通常通过目标选择器指定要操作的实体。在 Katton 里同样可以这样做。我们提供了 `EntitySelectorBuilder` 类来帮助你构建目标选择器。

<!--@include: ../../example/quickstart/for-cber/02.md-->

## NBT

NBT 也是数据包里非常重要的一部分。在 Katton 中，你可以使用 [`getEntityNbt`](../../api/common/dpcaller/KattonNbtApi.md#getentitynbt)、[`getBlockNbt`](../../api/common/dpcaller/KattonNbtApi.md#getblocknbt)、[`getStorageNbt`](../../api/common/dpcaller/KattonNbtApi.md#getstoragenbt) 分别读取实体、方块和存储中的 NBT 数据。

## 调用数据包函数

想继续调用你已经写好的 mcfunction？完全可以。使用 [`runFunction`](../../api/common/dpcaller/KattonServerApi.md#runfunction) 就能调用数据包里的任意 mcfunction。

## `#tick` 与 `#load` 函数

在数据包中，我们会通过带 `#load` 标签的函数在加载时执行逻辑，通过带 `#tick` 标签的函数在每个 tick 执行逻辑。在 Katton 中，这些场景被更强的事件监听机制替代。你可以使用 [`ServerEvent.onStartServerTick`](../../api/fabric/event/ServerEvent.md#serverevent-onstartservertick) 在每个 tick 执行逻辑，使用 [`ServerEvent.onServerStarted`](../../api/fabric/event/ServerEvent.md#serverevent-onserverstarted) 在服务器启动后执行逻辑。更多信息请参考[事件](event.md)页面。

<!--@include: ../../example/quickstart/for-cber/03.md-->

## Katton 命令

Katton 还内置了一组脚本管理命令。对数据包开发者最实用的几个：

- `/katton reload` — 重载所有脚本（类似 `/reload`，但是专门为脚本设计，还带进度条！）
- `/katton registry` — 查看你的脚本都注册了啥
- `/katton status` — 检查 Katton 是否正常运行

完整列表请看 [命令](commands.md) 页面。
