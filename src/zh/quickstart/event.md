# 事件

在 Katton 中，事件是一种响应游戏中各种操作和变化的强大手段。它们允许你在特定事件发生时执行自定义代码，例如玩家交互、世界更改或实体更新。

要监听事件，你可以使用 `KattonEvents` API。你可以在 [API 文档](../../kdoc/kts4mc-template-1.21.11/top.katton.api.event/-katton-events/index.html) 中找到所有可用的事件。Katton 包装了Fabric等Mod加载器提供的事件，并将所有的参数都包装为了一个单独的事件参数记录类，方便你在事件处理函数中获取所需的信息。
