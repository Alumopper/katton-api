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

Use [Managed Events](../guide/events.md#unwrapped-native-events) to listen to any Bukkit event directly:

```kotlin
import org.bukkit.event.player.PlayerMoveEvent
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.event.managed.registerEvent

@ServerScriptEntrypoint(ServerPhase.READY)
fun moves() {
    registerEvent<PlayerMoveEvent>(ignoreCancelled = true) { event ->
        println(event.player.name)
    }
}
```

Managed listeners are removed automatically on reload for world-scoped script packs.

## Plugin Dependencies

Script packs declare Paper plugin dependencies in their own `manifest.json`; Katton's `paper-plugin.yml` does not change:

```json
{
  "dependencies": [
    {
      "id": "WorldEdit",
      "version": ">=7.3.0",
      "required": true,
      "platforms": ["paper"],
      "environment": "server"
    }
  ]
}
```

Paper plugin classes are available only to `ServerPhase.READY` entrypoints. Katton resolves enabled plugins through `PluginManager`, compiles against their real jar or class directory, and delegates runtime loading to the plugins' existing classloaders. It does not create a second plugin copy, and ordinary typed API calls do not use reflection on each call.

Declare every plugin whose classes are imported. Katton rejects a pack when two declared plugins export the same class name because the runtime owner would be ambiguous. See [Manifest, Dependencies, and Signing](../architecture/manifest.md).

## Folia

The Paper manifest declares `folia-supported: true`. Region-aware scheduling helpers live in `top.katton.paper`; see [Folia Scheduler](./folia.md).
