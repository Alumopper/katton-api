# 数据包开发者指南

事实上，我也是一名原版数据包开发者，就是因为写数据包的时候写破防了才开发了 Katton（

我想在保留数据包热重载优势的同时，实现堪比模组的强大功能。所以如果你也是数据包开发者，别担心，写 Katton 的时候你会觉得就像回家了一样。

Katton 提供了一系列的函数，封装了原版命令的所有功能。即使你对 Fabric 模组开发一无所知，你仍然可以使用这些函数实现至少你能在数据包中能做到的一切。

## 命令

所有命令包装函数都位于 `top.katton.api.dpcaller` 包中。你可以在 [API 文档](../../api/common/index.md) 中找到这些函数的文档。这些函数的设计尽可能接近原始命令。例如，在数据包中你会使用 `scoreboard players set test myscore 1`，而在 Katton 中你可以通过以下代码实现相同的效果：

<!--@include: ../../example/quickstart/for-cber/01.md-->

## 实体访问

在数据包中，我们一般使用目标选择器来指定我们想要操作的实体。在 Katton 中，你也可以使用目标选择器来获取相应的实体。我们提供了 `EntitySelectorBuilder` 类来帮助你构建目标选择器。

<!--@include: ../../example/quickstart/for-cber/02.md-->

## NBT

NBT 是数据包的另一个重要部分。在 Katton 中，你可以使用 `getEntityNbt`、`getBlockNbt` 和 `getStorageNbt` 函数分别获取实体、方块和存储的 NBT 数据。

## 调用数据包函数

想继续调用你已经写好的 mcfunction？没问题！你可以使用 `runFunction` 函数调用数据包中的任何 mcfunction。

## `#tick` 和 `#load` 函数

在数据包中，我们知道，带有`#load`标签的函数会在数据包加载的时候执行，而带有 `#tick` 标签的函数会在每 tick 执行。在 Katton 中，我们用更强大的事件监听器替代了这些标签。你可以使用 `KattonEvents.ServerTick` 事件在每 tick 开始或者结束的时候执行代码，使用 `KattonEvents.ServerLifecycle` 事件在服务器启动或停止时执行代码。查看[事件](event.md)页面了解更多详情。

<!--@include: ../../example/quickstart/for-cber/03.md-->
