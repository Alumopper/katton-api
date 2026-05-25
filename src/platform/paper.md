# Paper

Katton's Paper module is a server plugin. It runs Kotlin script packs on the server and bridges Bukkit/Paper events into the common Katton event model.

## What Paper Supports

| Area | Paper behavior |
|---|---|
| Entrypoint | `top.katton.paper.KattonPaperPlugin` (`JavaPlugin`). |
| Script packs | Loaded from `<serverDir>/kattonpacks/` and `<worldDir>/kattonpacks/`. |
| Commands | `/katton help`, `/katton status`, `/katton reload`. |
| Events | 14 Katton event bridge categories plus native Bukkit managed events. |
| Scheduling | Folia-aware entity, region, and global schedulers. |
| Build artifact | Shadow/fat jar with Kotlin runtime embedded. |

## What Paper Does Not Support

Paper has no Katton client, so these features are intentionally disabled:

- Client scripts and `@ClientScriptEntrypoint`
- Client rendering and HUD APIs
- Script Pack UI
- Server-to-client script pack sync
- Custom item, block, entity, component, particle, sound, creative tab, or renderer registration
- Runtime ByteBuddy injection

`Katton.paperInitialize()` sets `registrationEnabled = false` and `hasClient = false`. This prevents scripts from creating registry entries that vanilla clients cannot know about.

## Commands

Paper keeps `/katton` deliberately small:

| Command | Permission |
|---|---|
| `/katton help` | Everyone |
| `/katton status` | Everyone |
| `/katton reload` | `katton.admin` or OP |

The `registry` and `debug registryLogging` subcommands are Fabric/NeoForge only.

## Native Bukkit Events

Use [Managed Events](../guide/managed-events.md) to listen to any Bukkit event directly:

```kotlin
import org.bukkit.event.player.PlayerMoveEvent
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerEvent

@ServerScriptEntrypoint
fun moves() {
    registerEvent<PlayerMoveEvent>(ignoreCancelled = true) { event ->
        println(event.player.name)
    }
}
```

Managed listeners are removed automatically on reload for world-scoped script packs.

## Folia

The Paper manifest declares `folia-supported: true`. Region-aware scheduling helpers live in `top.katton.paper`; see [Folia Scheduler](./folia.md).

