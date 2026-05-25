# Folia 调度器

Paper 和 Folia 的线程规则比普通专用服务器更严格。Katton 在 `top.katton.paper` 中提供了一组小型工具，方便脚本把任务调度到正确的区域。

## 实体区域

```kotlin
import top.katton.paper.*

player.schedule {
    sendSystemMessage("在该玩家所在区域执行")
}

player.schedule(delayTicks = 40) {
    sendSystemMessage("延迟两秒执行")
}

val task = player.scheduleRepeating(0, 20) {
    sendSystemMessage("每秒执行一次")
}

cancelScheduledTask(task)
```

## 位置区域

```kotlin
import top.katton.paper.*

scheduleAt(level, blockPosition()) {
    println("在该坐标所在区域执行")
}

scheduleAt(level, blockPosition(), delayTicks = 60) {
    println("延迟执行区域任务")
}
```

## 全局区域

世界时间、天气、控制台级别操作适合使用全局调度器。

```kotlin
import top.katton.paper.*

scheduleGlobal {
    println("全局区域任务")
}

val task = scheduleGlobalRepeating(0, 20) {
    println("重复全局任务")
}
```

在非 Folia Paper 上，这些工具会回退到 Paper 兼容调度器。

