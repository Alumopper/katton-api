# Scripts

Katton organizes your Kotlin code into **Script Packs**. A script pack is simply a folder (or `.jar` file) containing a `manifest.json` and one or more `.kt` files. Unlike traditional mods, script packs are **side-agnostic** — the same pack can serve both server and client, and everything is **hot-reloadable** with `/katton reload`.

## Script Packs

### Directory Layout

Script packs live inside a directory named `kattonpacks`, which Katton scans automatically:

```
# Global — shared across all worlds, survives world deletion:
<gameDir>/kattonpacks/<packName>/manifest.json
<gameDir>/kattonpacks/<packName>/**/*.kt

# World — per-world, created automatically when you first reload:
<worldDir>/kattonpacks/<packName>/manifest.json
<worldDir>/kattonpacks/<packName>/**/*.kt
```

- **Global** packs load once when the mod starts and are shared across all worlds.
- **World** packs load per save — ideal for map-specific scripts.

Inside a pack, `.kt` files can be nested in any subdirectory structure. Katton walks the entire tree. Your entrypoint can be at the root, in `src/main/`, in `qwq/` — anywhere.

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

> [!NOTE]
> There is **no `targets.server` or `targets.client` field**. Katton determines whether a script runs on the server or client purely from the annotations on its entrypoint functions (see below).

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
- **Pack UI** → press K, click Reload — triggers both sides

## Client Scripts

Client-side scripts are great for HUD overlays, custom renderers, UI interactions, and anything that needs access to `Minecraft.getInstance()` or rendering APIs.

<!--@include: ../example/quickstart/scripts/01.md-->

Client scripts can live in the same pack as server scripts (they just need `@ClientScriptEntrypoint`), or they can be delivered via a resource pack at `assets/<namespace>/client_scripts/`. On multiplayer servers, client packs are automatically synced from the server to `<gameDir>/serverpacks/`.

## Server Scripts

Server-side scripts handle game logic: commands, events, registries, world manipulation, and datapack integration.

<!--@include: ../example/quickstart/scripts/02.md-->

In this example, we subscribe to the [`onPlayerJoin`](../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) event to send a greeting. The [`once`](../api/common/KattonAPI.md#once) API checks whether the player is joining for the first time, so we can tailor the message accordingly.

## Pack Types

Katton supports two physical formats:

| Type | Structure | Compilation | Best For |
|---|---|---|---|
| **Directory** | Folder with `manifest.json` + `.kt` files | All source packs compiled together (cross-pack references work) | Development and iteration |
| **JAR** | `.jar` file with `manifest.json` at root or `META-INF/katton/manifest.json` | Loaded directly (pre-compiled) | Distribution and sharing |

Directory packs get compiled together as one unit — so you can define a helper function in one pack and use it from another. JAR packs are loaded individually.

JAR pack creation is a one-liner with Gradle, but it's outside the scope of this quickstart. The key point: **directory packs for development, JAR packs for sharing**.

## Legacy Locations (Still Supported)

If you have existing setups using the older conventions, they still work:

- **Datapacks**: `data/<namespace>/scripts/` — server scripts
- **Resource packs**: `assets/<namespace>/client_scripts/` — client scripts

These are scanned alongside `kattonpacks/` on reload. However, **`kattonpacks/` is the recommended format** — it supports manifests, the pack UI, enable/disable toggling, and the full reload lifecycle. Old-style embedded scripts silently receive default settings.

## Advanced: Server→Client Sync

When a client connects to a multiplayer server, Katton automatically syncs server-authoritative script packs to the client:

1. Server sends a **hash list** (`ScriptPackHashListPacket`) — mapping each pack's sync ID to its SHA-256
2. Client **compares hashes** against its local cache at `<gameDir>/serverpacks/<bucket>/`
3. Client **requests** any missing or mismatched packs (`ScriptPackRequestPacket`)
4. Server sends **full bundles** (`ScriptPackBundlePacket`) — manifest + all `.kt` files
5. Client persists to disk and executes before registry validation

This ensures every player runs the exact same scripts as the server — no manual installation, no version mismatches. The sync protocol is fully automatic and requires zero configuration from you.
