# Replacing Load, Tick, and Schedule

Datapacks use `#load`, `#tick`, and `schedule function` because everything is a function call. Katton can express those same ideas through entrypoints, events, and normal Kotlin control flow.

## `#load`

Use `@ServerScriptEntrypoint` for script setup. It runs when Katton reloads scripts.

```kotlin
import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint
fun load() {
    println("Loaded script logic")
}
```

Use the entrypoint to register event listeners, commands, and initial state. Avoid putting all gameplay logic directly in the entrypoint.

## `#tick`

Use server tick events for logic that truly must run every tick.

<!--@include: ../../example/quickstart/for-cber/03.md-->

Tick code can become expensive quickly. Prefer event hooks when the logic is really "when a player joins", "when an entity is hurt", or "when a block changes".

## `schedule function`

Scheduled functions usually mean one of three things:

| Datapack pattern | Katton replacement |
| --- | --- |
| Delay work by a few ticks | Store a countdown and update it from a tick event |
| Poll until a condition changes | Use a specific event if one exists |
| Run a repeating system | Use tick events, but keep the handler small |

## Reload Cleanup

Katton tracks script-owned event handlers and clears them on reload. Register listeners inside entrypoints so Katton knows which script pack owns them.

For more detail, see [Events](../events.md) and [Script Loading Lifecycle](../../architecture/script-loading.md).

