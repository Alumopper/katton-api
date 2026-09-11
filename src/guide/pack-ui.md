# Script Pack UI

> [!WARNING]
> The Script Pack UI is available on Fabric and NeoForge clients only. Paper is a server-only platform and does not have a client-side GUI.

Katton includes an in-game screen for managing your script packs. Press **K** (default) while in a world to open it — no config files needed.

## What You Can Do

On this screen you can:

- **Browse** all installed script packs (global + world)
- **Enable / Disable** individual packs with one click
- **Reload** all scripts with the Reload button
- **Inspect** pack metadata: name, ID, version, authors, description, scope, and content kind
- **Start the IDE bridge** with the **IDE** button, so the [Katton IDEA plugin](../quickstart/ide.md) can discover this instance and deploy world packs

The reload progress bar renders **on top** of this screen, so you always know what's happening.

## Availability Rules

Not all packs are editable everywhere:

- **In the main menu**: only global packs are visible and editable
- **In a world**: global packs appear but are **locked** (read-only) — you manage them from the main menu. World packs are fully editable in-world.
- **Server cache packs** (synced from a multiplayer server): always read-only

## Pack Manifest

Each script pack needs a `manifest.json` to be recognized by Katton. The `dependencies` array is required; Katton fills in defaults for the other fields:

<!--@include: ../example/quickstart/pack-ui/01.md-->

| Field | Default | Description |
|---|---|---|
| `dependencies` | **required** | Mod/plugin dependency declarations; use `[]` when none are needed |
| `packDependencies` | `[]` | Other Katton script packs this pack depends on |
| `name` | same as `id` | Human-readable pack name |
| `id` | folder/ZIP filename | Unique pack identifier |
| `version` | `"unknown"` | Semantic version |
| `authors` | `[]` | List of author names |
| `description` | `""` | What your pack does |
| `enabled` | `true` | `true` = active, `false` = skipped on reload |
| `clientSync` | `true` | Fabric/NeoForge servers include this pack in client sync |

## State File (`.kattonpack.state.json`)

When you toggle a pack's enabled state from the UI, Katton writes a local state file next to the manifest:

```json
{ "enabled": false }
```

This **overrides** the `enabled` field in `manifest.json`. Delete the state file to revert to the manifest's default. For ZIP packs, the state file is saved as `<pack>.zip.state.json` next to the archive. The state file is never treated as pack content and is never hashed, signed, or synced.

## Pack Types

Katton supports two pack formats:

| Format | How it appears | Editable in UI? |
|---|---|---|
| **Directory** | A folder in `kattonpacks/` with `manifest.json` and sources | Yes — enable/disable and reload |
| **ZIP** | A `.zip` file in `kattonpacks/` with `manifest.json` at the archive root | Enable/disable and reload |

Executable JAR packs are no longer supported. A `.jar` file is only a private library when it sits directly in a pack's `libs/` directory.

## Toggle Packs Programmatically

You can also query and toggle packs from Kotlin code:

<!--@include: ../example/quickstart/pack-ui/02.md-->

## Reload from UI

Clicking **Reload** on the pack management screen:

1. Calls `Katton.reloadScripts()` for server scripts
2. Calls `Katton.reloadClientScriptsAsync()` for client scripts
3. Shows the progress overlay so you can watch it happen
4. Disables the Reload button while a reload is in progress (prevents double-triggering)

The button re-enables once the reload completes. If you close the screen, the overlay remains visible on the HUD.

## Deploy from the IDE

The **IDE** button in the top-right corner enables the loopback development bridge. Once it is on, the [Katton IDEA plugin](../quickstart/ide.md) can list the running instance, deploy a world pack snapshot, reload through the same serialized path as the Reload button, and stream compiler diagnostics back into the IDE. The bridge is off by default and only accepts local connections with a per-session token.
