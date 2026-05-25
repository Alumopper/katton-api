# Folia Scheduler

Paper and Folia have stricter threading rules than vanilla dedicated servers. Katton exposes small helpers in `top.katton.paper` so scripts can schedule work on the right region.

## Entity Region

```kotlin
import top.katton.paper.*

player.schedule {
    sendSystemMessage("Runs on this player's region")
}

player.schedule(delayTicks = 40) {
    sendSystemMessage("Delayed by two seconds")
}

val task = player.scheduleRepeating(0, 20) {
    sendSystemMessage("Repeats every second")
}

cancelScheduledTask(task)
```

## Position Region

```kotlin
import top.katton.paper.*

scheduleAt(level, blockPosition()) {
    println("Runs on the region containing this position")
}

scheduleAt(level, blockPosition(), delayTicks = 60) {
    println("Delayed region task")
}
```

## Global Region

Use the global scheduler for operations like world time, weather, and console-level work.

```kotlin
import top.katton.paper.*

scheduleGlobal {
    println("Global region task")
}

val task = scheduleGlobalRepeating(0, 20) {
    println("Repeating global task")
}
```

On non-Folia Paper, these helpers fall back to Paper's compatible schedulers.

