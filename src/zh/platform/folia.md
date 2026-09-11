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

## 重载行为

从 Alpha 0.5.0 起，调度任务会被**托管**。脚本重载时，被替换组件持有的任务会在候选激活前分离：

- 候选重载校验期间，已分离的任务不会执行。
- 候选失败时任务会重新挂载，并保持原有调度。
- 候选成功时旧任务会被取消，新入口重新注册自己的任务。
- 在分离窗口内被跳过的单次延迟任务，会在提交成功后重新调度，因此延迟动作不会被静默丢失。重复任务不会被重复注册。
- `cancelScheduledTask(task)` 既能作用于重复调度函数返回的托管包装对象，也能作用于原生 `ScheduledTask`。

延迟与重复调度工具会把 `delayTicks` 下限钳制为 1，因为区域调度器上的零延迟重复任务没有意义。

## Folia 上的音频

`top.katton.api.audio` 中的 `playBasicSound` 与 `stopBasicSound` 内部使用实体区域调度器，因此服务端脚本可以安全调用，不会跨越区域边界。它们发送的是原版声音数据包，不需要 Katton 客户端。基于解码器的完整播放（`playClientAudio`、`playPlayerAudio`）在 Paper/Folia 上不可用。

## Folia 上的数据包

Folia 不支持 Katton 在运行时挂载脚本包的 `data/**` 目录树，因为它的服务端资源重载操作不可用。Katton 会直接拒绝带数据的脚本包，而不是部分激活。必须在 Folia 上运行的包请不要包含 `data/**`，可以改用命令/事件 API 实现同样行为。
