# Project Structure and Reload Workflow

A datapack is discovered from `datapacks/<pack>/pack.mcmeta`. A Katton script pack is discovered from `kattonpacks/<pack>/manifest.json`.

That is the first mental shift: your pack is still a folder that can be edited live, but the executable files are Kotlin files instead of `.mcfunction` files.

## Where Files Go

| Datapack path | Katton equivalent |
| --- | --- |
| `<world>/datapacks/my_pack/pack.mcmeta` | `<world>/kattonpacks/my_pack/manifest.json` |
| `<world>/datapacks/my_pack/data/demo/function/start.mcfunction` | `<world>/kattonpacks/my_pack/start.kt` |
| Shared datapacks copied between saves | Global packs in `<gameDir>/kattonpacks/` |
| Map-specific datapacks | World packs in `<worldDir>/kattonpacks/` |

Katton scans `.kt` files recursively, so you can organize scripts by feature:

```text
kattonpacks/
  arena_tools/
    manifest.json
    commands.kt
    waves/
      spawns.kt
      rewards.kt
```

## Manifest

The `manifest.json` file is the script-pack equivalent of `pack.mcmeta`, but it controls script metadata rather than vanilla datapack metadata.

<!--@include: ../../example/quickstart/pack-ui/01.md-->

The most important fields during migration are:

| Field | Why it matters |
| --- | --- |
| `id` | Stable identifier for logs, sync, and pack ownership |
| `name` | Display name shown in the pack UI |
| `enabled` | Lets you disable a pack without deleting files |
| `clientSync` | Fabric/NeoForge servers can sync client-side scripts and resources |

## Entrypoints

In datapacks, `#load` decides which functions run first. In Katton, top-level functions annotated with `@ServerScriptEntrypoint` run when scripts reload.

```kotlin
import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint
fun main() {
    println("My Katton script pack loaded")
}
```

Keep entrypoints small. Use them to register events, commands, and initial state, then move reusable logic into normal Kotlin functions.

## Reload Commands

| Command | What it reloads |
| --- | --- |
| `/katton reload` | Katton scripts, with a progress display |
| `/reload` | Vanilla datapacks; Katton also hooks server script reload into this flow |
| `F3 + T` | Client resources and client-side Katton scripts on Fabric/NeoForge |

For the complete lifecycle, see [Hot Reload and Debugging](../../quickstart/hot-reload.md) and [Script Loading Lifecycle](../../architecture/script-loading.md).

