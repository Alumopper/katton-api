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


- **Global** packs load once when the mod starts and are shared across all worlds.
- **World** packs load per save — ideal for map-specific scripts.

Inside a pack, `.kt` files can be nested in any subdirectory structure. Katton walks the entire tree. Your entrypoint can be at the root, in `src/main/`, in `test/` — anywhere.

### Manifest (`manifest.json`)

Every pack needs a `manifest.json` at its root. All fields are optional — Katton fills in sensible defaults for anything you omit:

<!--@include: ../example/quickstart/pack-ui/01.md-->

| Field | Default | Description |
|---|---|---|
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
> There is **no `targets.server` or `targets.client` field**. Katton determines whether a script runs on the server or client purely from the annotations on its entrypoint functions (see below).

For signing details and the exact hash input, see [Manifest and Signing](../architecture/manifest.md).

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

Scripts are **side-agnostic** — a single `.kt` file can contain both server and client logic. Which environment executes which function is decided by two simple annotations:

```kotlin
import top.katton.api.ServerScriptEntrypoint   // ← runs on the server
import top.katton.api.ClientScriptEntrypoint   // ← runs on the client
```

Both annotations mark **top-level, no-argument functions**. That's the only requirement:

```kotlin
@ServerScriptEntrypoint
fun initMyCommands() {
    // This only runs on the server
}
```

```kotlin
@ClientScriptEntrypoint
fun initMyHUD() {
    // This only runs on the client
}
```

You can have as many entrypoint functions as you want in a single file — each one is discovered and invoked independently during reload.

> [!CAUTION]
> Katton does **not** prevent you from calling server-only APIs from a `@ClientScriptEntrypoint` function (or vice versa). Doing so will likely crash that side. Keep your server logic and client logic in separate entrypoint functions.

## Hot Reload

Run `/katton reload` to reload all scripts without restarting the game. This is the heart of Katton's development loop:

1. Re-scans all enabled packs in global and world scopes
2. Clears event handlers, injections, and registry ownership
3. Re-compiles all source packs together, then loads JAR packs
4. Discovers and invokes all `@ServerScriptEntrypoint` / `@ClientScriptEntrypoint` functions
5. Shows a **visual progress bar** at the top of the screen (message + percentage + green bar)

You can also trigger reloads indirectly:
- **`/reload`** (vanilla) → triggers server-side Katton reload
- **`F3 + T`** (reload resources) → triggers client-side Katton reload
- **Pack UI** → press K, click Reload — triggers both sides (Fabric/NeoForge only; Paper has no client GUI)

For the full reload lifecycle, see [Hot Reload and Debugging](../quickstart/hot-reload.md).

## Client Scripts

> [!WARNING]
> Client-side scripts are only available on Fabric and NeoForge. Paper is a server-only platform and does not support client-side rendering or HUD scripts.

Client-side scripts are great for HUD overlays, custom renderers, UI interactions, and anything that needs access to `Minecraft.getInstance()` or rendering APIs.

<!--@include: ../example/quickstart/scripts/01.md-->

Client scripts can live in the same pack as server scripts (they just need `@ClientScriptEntrypoint`). On multiplayer servers, client packs are automatically synced from the server to `<gameDir>/serverpacks/`.

## Server Scripts

Server-side scripts handle game logic: commands, events, registries, world manipulation, and datapack integration.

<!--@include: ../example/quickstart/scripts/02.md-->

In this example, we subscribe to the [`onPlayerJoin`](../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) event to send a greeting. The [`once`](../api/common/KattonAPI.md#once) API checks whether the player is joining for the first time, so we can tailor the message accordingly.

## Advanced: Server→Client Sync

When a client connects to a multiplayer server, Katton automatically syncs server-authoritative script packs to the client:

1. Server sends a **hash list** (`ScriptPackHashListPacket`) — mapping each pack's sync ID to its SHA-256
2. Server immediately sends the **full bundle snapshot** (`ScriptPackBundlePacket`) — manifest + all synced files
3. Client verifies optional Ed25519 signatures before writing files to cache
4. Client verifies cached hashes against the announced hash list
5. Unknown servers or signing keys open a blocking trust screen
6. Trusted packs execute before registry validation

This ensures every player runs the exact same scripts as the server — no manual installation, no version mismatches. The sync protocol is fully automatic and requires zero configuration from you.

> [!NOTE]
> On Paper servers, there is no client sync — all scripts are server-local files loaded from `<serverDir>/kattonpacks/`.

Use `"clientSync": false` for pure server-side packs that do not contain client entrypoints, registry definitions needed by the client, or rendering code.
