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

## Reload Behavior

Since Alpha 0.5.0, scheduled tasks are **managed**. On a script reload, tasks owned by the components being replaced are detached before the candidate activates:

- While a candidate reload is being validated, detached tasks do not run.
- If the candidate fails, the tasks are reattached and keep their original schedule.
- If the candidate succeeds, the old tasks are cancelled and the new entrypoints register fresh ones.
- A one-shot delayed task that was skipped during the detach window is rescheduled after a successful commit, so a delayed action is not silently lost. Repeating tasks are never duplicated.
- `cancelScheduledTask(task)` works on the managed wrapper returned by the repeating helpers as well as on a raw `ScheduledTask`.

Delayed and repeating helpers clamp `delayTicks` to at least 1, because a zero-delay repeating task is not meaningful on the region schedulers.

## Audio on Folia

`playBasicSound` and `stopBasicSound` from `top.katton.api.audio` use the entity-region scheduler internally, so they can be called from server scripts without crossing a region boundary. They send vanilla sound packets and need no Katton client. Full decoder-based playback (`playClientAudio`, `playPlayerAudio`) is unavailable on Paper/Folia.

## Data Packs on Folia

Folia does not support Katton's runtime mounting of a script pack's `data/**` tree, because its server resource-reload operation is unavailable. Katton rejects a data-bearing script pack there instead of partially activating it. Keep `data/**` out of packs that must run on Folia, and use command/event APIs for the same behavior.
