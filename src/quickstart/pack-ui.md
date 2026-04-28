# Script Pack UI

Katton includes an in-game screen for managing your script packs. Press **K** (default) while in a world to open it — no config files needed.

## What You Can Do

On this screen you can:

- **Browse** all installed script packs (global + world)
- **Enable / Disable** individual packs with one click
- **Reload** all scripts with the Reload button
- **Inspect** pack metadata: name, ID, version, authors, description, scope

The reload progress bar renders **on top** of this screen, so you always know what's happening.

## Availability Rules

Not all packs are editable everywhere:

- **In the main menu**: only global packs are visible and editable
- **In a world**: global packs appear but are **locked** (read-only) — you manage them from the main menu. World packs are fully editable in-world.
- **Server cache packs** (synced from a multiplayer server): always read-only

## Pack Manifest

Each script pack needs a `manifest.json` to be recognized by Katton. **All fields are optional** — Katton fills in sensible defaults for anything you omit:

<!--@include: ../example/quickstart/pack-ui/01.md-->

| Field | Default | Description |
|---|---|---|
| `name` | same as `id` | Human-readable pack name |
| `id` | folder/jar filename | Unique pack identifier |
| `version` | `"unknown"` | Semantic version |
| `authors` | `[]` | List of author names |
| `description` | `""` | What your pack does |
| `enabled` | `true` | `true` = active, `false` = skipped on reload |

## State File (`.kattonpack.state.json`)

When you toggle a pack's enabled state from the UI, Katton writes a local state file next to the manifest:

```json
{ "enabled": false }
```

This **overrides** the `enabled` field in `manifest.json`. Delete the state file to revert to the manifest's default. For JAR packs, the state file is saved as `<pack>.jar.state.json` next to the jar.

## Pack Types

Katton supports two pack formats:

| Format | How it appears | Editable in UI? |
|---|---|---|
| **Directory** | A folder in `kattonpacks/` with `.kt` files | Yes — enable/disable, reload triggers |
| **JAR** | A `.jar` file in `kattonpacks/` with manifest at root or `META-INF/katton/` | Enable/disable only — contents are pre-compiled |

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

## Background Readability

The pack UI renders a semi-transparent dark panel behind the list and details area, so text stays readable even over bright in-world backgrounds. No more squinting at white text over a snow biome!
