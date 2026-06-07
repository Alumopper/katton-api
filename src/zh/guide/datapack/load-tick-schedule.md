# 替代 Load、Tick 与 Schedule

数据包使用 `#load`、`#tick` 和 `schedule function`，是因为一切都是函数调用。Katton 可以用入口函数、事件和普通 Kotlin 控制流表达同样的事情。

## `#load`

使用 `@ServerScriptEntrypoint` 做脚本初始化。它会在 Katton 重载脚本时运行。

```kotlin
import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint
fun load() {
    println("Loaded script logic")
}
```

入口函数适合注册事件监听、命令和初始状态。不要把全部游戏逻辑都塞进入口函数。

## `#tick`

只有真正每 tick 都要运行的逻辑，才使用服务端 tick 事件。

<!--@include: ../../../example/quickstart/for-cber/03.md-->

Tick 的开销是相对昂贵的。如果你的需求更多是在“玩家加入时”“实体受伤时”“方块变化时”执行某些逻辑，优先使用对应的事件。

## `schedule function`

计划函数通常意味着三类需求：

| 数据包模式 | Katton 替代方式 |
| --- | --- |
| 延迟几 tick 执行 | 保存倒计时，在 tick 事件里更新 |
| 轮询直到条件变化 | 如果有事件，使用具体事件 |
| 重复运行一个系统 | 使用 tick 事件，但保持 handler 小而清晰 |

## 重载清理

Katton 会追踪脚本拥有的事件监听，并在重载时清理。请在入口函数里注册监听器，这样 Katton 才知道它们属于哪个脚本包。

更多信息见 [事件](../events.md) 和 [脚本加载生命周期](../../architecture/script-loading.md)。
