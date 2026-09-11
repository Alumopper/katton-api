# Paper

Katton's Paper module is a server plugin. It runs Kotlin script packs on the server and bridges Bukkit/Paper events into the common Katton event model.

## What Paper Supports

| Area | Paper behavior |
|---|---|
| Entrypoint | `top.katton.paper.KattonPaperPlugin` (`JavaPlugin`). |
| Script packs | Directories and ZIPs from `<serverDir>/kattonpacks/` and `<worldDir>/kattonpacks/`. |
| Pack dependencies | Full `packDependencies` graph, scoped to `GLOBAL` and `WORLD` packs. |
| Commands | `/katton help`, `status`, `reload`, `errors`, `capabilities`, `packs`, `dev`. |
| Events | 14 Katton event bridge categories plus native Bukkit managed events. |
| Scheduling | Folia-aware entity, region, and global schedulers. |
| Audio | `playBasicSound` / `stopBasicSound` send vanilla sound packets. |
| Build artifact | Shadow/fat jar with Kotlin runtime embedded. |

## What Paper Does Not Support

Paper has no Katton client, so these features are intentionally disabled:

- Client scripts and `@ClientScriptEntrypoint`
- Client rendering and HUD APIs, camera scenes, and post effects
- The full decoder-based audio player (`playClientAudio`, `playPlayerAudio`)
- Script Pack UI
- Server-to-client script pack sync
- Custom item, block, entity, component, particle, sound, creative tab, or renderer registration
- Runtime ByteBuddy injection

`Katton.paperInitialize()` sets `registrationEnabled = false` and `hasClient = false`. This prevents scripts from creating registry entries that vanilla clients cannot know about.

## Commands

Paper keeps `/katton` compact:

| Command | Permission |
|---|---|
| `/katton help` | Everyone |
| `/katton status` | Everyone |
| `/katton errors` | Everyone |
| `/katton capabilities events [event]` | Everyone |
| `/katton capabilities injection` | Everyone |
| `/katton packs list` | Everyone |
| `/katton packs enable\|disable <syncId>` | `katton.admin` or OP |
| `/katton reload` | `katton.admin` or OP |
| `/katton dev enable\|disable` | `katton.admin` or OP |

The `registry`, `config`, `itemrender`, and `debug registryLogging` subcommands are Fabric/NeoForge only, because Paper disables registry mutation and has no client to render item markers.

## Audio on Paper

Paper can play any sound the player's client already knows, using vanilla sound packets:

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.audio.playBasicSound
import top.katton.api.audio.stopBasicSound

@ServerScriptEntrypoint(ServerPhase.READY)
fun rewardSound(context: ServerReadyContext) {
    val player = context.server.playerList.players.first()
    playBasicSound(player, "minecraft:entity.player.levelup", player.position(), SoundSource.PLAYERS)
    stopBasicSound(player, "minecraft:entity.player.levelup")
}
```

On Paper and Folia, the packet is scheduled on the player's entity region. Full playback of pack files, exact resources, and sound events is unavailable because there is no Katton client. See the [Audio guide](../guide/audio.md).

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

Pack-to-pack dependencies work the same way on Paper as on the mod platforms; see [Script Pack Dependencies](../guide/pack-dependencies.md).

## Folia

The Paper manifest declares `folia-supported: true`. Region-aware scheduling helpers live in `top.katton.paper`; see [Folia Scheduler](./folia.md).
