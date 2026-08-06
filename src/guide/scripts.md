# Script Packs

Katton organizes your Kotlin code into **Script Packs**. A script pack is simply a folder containing a `manifest.json` and one or more `.kt` files. Unlike traditional mods, script packs are **side-agnostic** — the same pack can serve both server and client on Fabric and NeoForge, and everything is **hot-reloadable** with `/katton reload`.

> [!NOTE]
> On Paper, script packs are server-only. There is no client side, so `@ClientScriptEntrypoint` and client-side APIs are not available. Scripts are loaded from `<serverDir>/kattonpacks/` or `<worldDir>/kattonpacks/`.

## Script Packs

### Directory Layout

Script packs live inside a directory named `kattonpacks`, which Katton scans automatically:

* Global — shared across all worlds, survives world deletion:
`<gameDir>/kattonpacks/<packName>/manifest.json`\
`<gameDir>/kattonpacks/<packName>/**/*.kt`

* World — per-world, created automatically when you first reload:
`<worldDir>/kattonpacks/<packName>/manifest.json`\
`<worldDir>/kattonpacks/<packName>/**/*.kt`


- **Global** packs provide process-lifetime `BOOTSTRAP`/`READY` entrypoints and are shared across worlds. Their entrypoints do not replay during hot reload.
- **World** packs run at server/client world phases and are replayable — ideal for map-specific scripts.

Inside a pack, `.kt` files can be nested in any subdirectory structure. Katton walks the entire tree. Your entrypoint can be at the root, in `src/main/`, in `test/` — anywhere.

### Manifest (`manifest.json`)

Every pack needs a `manifest.json` at its root. The `dependencies` array is required; use an empty array when the pack does not use another mod or plugin. Katton supplies defaults for the remaining fields:

<!--@include: ../example/quickstart/pack-ui/01.md-->

| Field | Default | Description |
|---|---|---|
| `dependencies` | **required** | Mod/plugin dependencies; use `[]` when there are none |
| `id` | folder or jar filename | Unique pack identifier — used in sync, logs, and commands |
| `name` | same as `id` | Human-readable display name (shown in the pack UI) |
| `version` | `"unknown"` | Semantic version string |
| `description` | `""` | What your pack does |
| `authors` | `[]` | Array of author names |
| `enabled` | `true` | `true` = loaded on reload, `false` = skipped |
| `clientSync` | `true` | Fabric/NeoForge servers include this pack in multiplayer client sync |
| `signature` | absent | Optional Ed25519 metadata for remote client-synced packs |
| `config` | `{}` | Primitive string/number/boolean pack config values |

> [!NOTE]
> There is **no `targets.server` or `targets.client` field**. The folder determines `GLOBAL`, `WORLD`, or `SERVER_CACHE` scope; the entrypoint annotation determines the server/client execution phase.

For dependency fields, platform resolution, signing details, and the exact hash input, see [Manifest, Dependencies, and Signing](../architecture/manifest.md).

### Signing a Pack

Katton provides a Gradle plugin, `top.katton.sign`, for writing Ed25519 signature metadata into `manifest.json`. In a Gradle project that applies the plugin, generate a key pair first:

```bash
./gradlew generateKattonSigningKey \
  -PkattonPrivateKey=keys/katton-signing-key.pem \
  -PkattonPublicKey=keys/katton-signing-key.pub
```

Then sign a script pack directory:

```bash
./gradlew signKattonPack \
  -PkattonPackDir=kattonpacks/example_pack \
  -PkattonPrivateKey=keys/katton-signing-key.pem \
  -PkattonPublicKey=keys/katton-signing-key.pub \
  -PkattonKeyId=example-server-key \
  -PkattonScope=world
```

`signKattonPack` rewrites the pack's `manifest.json`: it removes any previous `signature`, signs the current manifest and sorted `.kt` / `.java` files, then writes `algorithm`, `keyId`, `publicKey`, and `signature`.

Keep the private key out of version control. `kattonScope` must match the scope used when the pack is synced (`world` or `global`), because the signed payload includes the pack sync ID.

### State File (`.kattonpack.state.json`)

When you toggle a pack on/off from the in-game UI (press **K**), Katton writes a local state file:

```json
{ "enabled": false }
```

This overrides the `enabled` field in `manifest.json`. Delete the state file to reset back to the manifest default.

## Entrypoints

Scripts are **side-agnostic** — a single `.kt` file can contain both server and client logic. The annotation selects an explicit execution phase:

```kotlin
import top.katton.api.*
```

Entrypoints must be top-level functions. They may take no parameters or one context compatible with the selected phase:

```kotlin
@ServerScriptEntrypoint(ServerPhase.READY)
fun initMyCommands(context: ServerReadyContext) {
    println("Server ready because of ${context.cause}")
}
```

```kotlin
@ClientScriptEntrypoint(ClientPhase.JOINED)
fun initMyHUD(context: ClientJoinedContext) {
    println("HUD for ${context.player.name.string}")
}
```

Valid phases are tied to folder scope:

| Scope | Server phases | Client phases |
|---|---|---|
| `GLOBAL` | `BOOTSTRAP`, `READY` | `READY` |
| `WORLD` | `READY` | `REGISTRY_SETUP`, `JOINED` |
| `SERVER_CACHE` | — | `REGISTRY_SETUP`, `JOINED` |

`@ServerScriptEntrypoint` defaults to `BOOTSTRAP`; `@ClientScriptEntrypoint` defaults to `READY`. Both defaults therefore target global packs. In world packs, state the phase explicitly.

Both annotations have `replay: Boolean = true`. Global entrypoints never replay, world entrypoints honor the value, and synced `SERVER_CACHE` entrypoints always replay after activation—even if unchanged or declared with `replay = false`.

Contexts expose `packId`, `scope`, `reason`, `cause`, and `platform`, plus phase-specific objects such as the server, client, player, or level. You can have as many entrypoint functions as needed; each is discovered and invoked independently. See [Choosing an Entrypoint Phase](./lifecycle.md) for practical examples and [Script Loading Lifecycle](../architecture/script-loading.md) for the complete contract.

External mod and plugin APIs must be declared in `dependencies` before use. See [Using Other Mods and Plugins](./dependencies.md).

> [!CAUTION]
> Katton does **not** prevent you from calling server-only APIs from a `@ClientScriptEntrypoint` function (or vice versa). Doing so will likely crash that side. Keep your server logic and client logic in separate entrypoint functions.

## Hot Reload

Run `/katton reload` to reload all scripts without restarting the game. This is the heart of Katton's development loop:

1. Re-scans all enabled packs in global and world scopes
2. Clears event handlers, injections, and registry ownership
3. Re-compiles all source packs together, then loads JAR packs
4. Invokes entrypoints eligible for their scope, phase, and replay policy
5. Shows a **visual progress bar** at the top of the screen (message + percentage + green bar)

You can also trigger reloads indirectly:
- **`/reload`** (vanilla) → triggers server-side Katton reload
- **Pack UI** → press K, click Reload — triggers both sides (Fabric/NeoForge only; Paper has no client GUI)

`F3 + T` reloads Minecraft resources only; it does not reload Katton scripts.

For the full reload lifecycle, see [Hot Reload and Debugging](../quickstart/hot-reload.md).

## Client Scripts

> [!WARNING]
> Client-side scripts are only available on Fabric and NeoForge. Paper is a server-only platform and does not support client-side rendering or HUD scripts.

Client-side scripts are great for HUD overlays, custom renderers, UI interactions, and anything that needs access to `Minecraft.getInstance()` or rendering APIs.

<!--@include: ../example/quickstart/scripts/01.md-->

Client scripts can live in the same pack as server scripts (they just need `@ClientScriptEntrypoint`). On multiplayer servers, client packs are automatically synced from the server to revisioned storage under `<gameDir>/serverpacks/`.

## Server Scripts

Server-side scripts handle game logic: commands, events, registries, world manipulation, and datapack integration.

<!--@include: ../example/quickstart/scripts/02.md-->

In this example, we subscribe to the [`onPlayerJoin`](../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) event to send a greeting. The [`once`](../api/common/KattonAPI.md#once) API checks whether the player is joining for the first time, so we can tailor the message accordingly.

## Advanced: Server→Client Sync

When a client connects to a multiplayer server, Katton syncs server-authoritative packs during configuration:

1. Server sends a **hash list** (`ScriptPackHashListPacket`) — mapping each pack's sync ID to its SHA-256
2. Server immediately sends the **full bundle snapshot** (`ScriptPackBundlePacket`) — manifest + all synced files
3. Client verifies optional Ed25519 signatures before writing files to cache
4. Client verifies cached hashes against the announced hash list
5. Unknown servers or signing keys open a blocking trust screen
6. Trusted packs execute before registry validation

After every successful server hot reload, Katton publishes a new play-phase revision. Clients request only changed packs, stage and precompile a complete candidate snapshot, replay every active server-cache pack, and acknowledge activation. Removed packs are deactivated, empty snapshots are supported, and a failed candidate leaves the previous revision active. A negative acknowledgement or 30-second timeout disconnects the client.

See [Script Pack Sync and Trust](../architecture/pack-sync.md) for the configuration and live-reload protocols.

> [!NOTE]
> On Paper servers, there is no client sync — all scripts are server-local files loaded from `<serverDir>/kattonpacks/`.

Use `"clientSync": false` for pure server-side packs that do not contain client entrypoints, registry definitions needed by the client, or rendering code.
