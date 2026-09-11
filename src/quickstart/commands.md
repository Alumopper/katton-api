# Commands

Katton ships with a set of built-in commands under `/katton` to help you manage scripts, inspect state, toggle packs, edit config values, and debug — all from in-game chat or the server console.

## TL;DR

| Command | What it does | Who can use |
|---|---|---|
| `/katton` or `/katton help` | Show the command list | Everyone |
| `/katton status` | Katton runtime state | Everyone |
| `/katton errors` | Last ten recorded script errors | Everyone |
| `/katton capabilities events [event]` | Query partial or unsupported event capabilities | Everyone |
| `/katton capabilities injection` | Injection diagnostics | Gamemaster |
| `/katton packs list` | List local packs with sync ID, version, kind, enabled state | Everyone |
| `/katton packs enable\|disable <syncId>` | Toggle a pack, then reload (world packs only) | Gamemaster |
| `/katton registry` | Registry health overview | Everyone |
| `/katton registry stale` | Show stale retained entries | Everyone |
| `/katton reload` | Reload all script packs | Gamemaster |
| `/katton config list [pack]` | List pack config values | Everyone |
| `/katton config get <pack> <key>` | Read one config value | Everyone |
| `/katton config set <pack> <key> <value>` | Write a config value | Gamemaster |
| `/katton config reset <pack> <key>` | Remove a config override | Gamemaster |
| `/katton itemrender spawn <item> [preset] [scale] [lifetimeTicks]` | Spawn a client item render marker | Gamemaster |
| `/katton itemrender clear <radius>` | Clear item render markers in range | Gamemaster |
| `/katton debug registryLogging [on\|off]` | Read or set verbose registration logging | Gamemaster |
| `/katton debug injection` | Injection diagnostics | Gamemaster |
| `/katton dev enable\|disable` | Start or stop the IDE development bridge | Gamemaster |

> [!NOTE]
> On Paper, `/katton` is deliberately smaller: `help`, `status`, `reload`, `errors`, `capabilities events|injection`, `packs list|enable|disable`, and `dev enable|disable`. Reload, pack toggling, and `dev` require the `katton.admin` permission or OP. The `registry`, `config`, `itemrender`, and `debug registryLogging` subcommands are Fabric/NeoForge only, because Paper disables registry mutation and has no client to render item markers.

## Help

Just type `/katton` or `/katton help` — Katton will list all available subcommands.

<!--@include: ../example/quickstart/commands/05.md-->

## Status

Want a quick pulse on Katton? `/katton status` prints the current load state, whether a server is bound, and whether a client or server reload is in progress.

<!--@include: ../example/quickstart/commands/02.md-->

## Errors

`/katton errors` prints the last ten script errors Katton recorded. Use it after a failed reload or a runtime exception to see the title and detail of each issue without digging through the console log.

## Capabilities

Event and injection support varies by platform, version, and target. These subcommands answer "is this actually going to work here?" before you spend time debugging.

```text
/katton capabilities events            # all partial or unsupported events
/katton capabilities events <EventObject.onEvent>
/katton capabilities injection         # Fabric / NeoForge, gamemaster
```

`capabilities events` reports a status, execution context, and detail for each queried event. If nothing is reported, every queried capability is fully supported. See the [Events guide](../guide/events.md) for the event model and the API reference for the complete capability list.

## Packs

List and toggle local packs without opening the UI:

```text
/katton packs list
/katton packs enable world:my_pack
/katton packs disable world:my_pack
```

`packs list` shows the scope-qualified sync ID, version, kind (`DIRECTORY` or `ZIP`), and enabled state. Toggling a world pack saves its state file and starts a reload immediately. A global pack's state is saved but **requires a restart**, because global code is not hot-applied.

## Registry Diagnostics

### `/katton registry`

Shows a per-registry summary: how many entries Katton knows about, how many are actively managed by scripts, and how many are **stale** (retained in Minecraft's built-in registry but no longer claimed by any script).

<!--@include: ../example/quickstart/commands/03.md-->

### `/katton registry stale`

Filters to only show registries that have stale entries. Handy after you've removed a script that registered a bunch of stuff — those IDs are still in the game but not tracked by Katton anymore.

> [!NOTE]
> Stale does **not** mean broken. Katton intentionally keeps registered objects in Minecraft's built-in registries during reload to avoid holder crashes. Stale just means "left over from a previous script run that didn't re-register them this time."

## Config

The manifest's `config` object provides defaults. Server operators can override primitive values at runtime without editing the pack:

```text
/katton config list
/katton config list my_pack
/katton config get my_pack difficulty
/katton config set my_pack difficulty hard
/katton config reset my_pack difficulty
```

Overrides are stored under `<gameDir>/.katton/config-overrides/` using the scope-qualified sync ID; server-cache packs add a `server_cache:` prefix so a remote `global:x` cannot overwrite a local `global:x`. Katton never rewrites a pack manifest for config changes, so directory, ZIP, and signed packs all persist settings consistently.

## Item Render Markers

Spawn a temporary client-side item model for testing, without creating a real entity or item frame:

```text
/katton itemrender spawn minecraft:diamond_sword
/katton itemrender spawn minecraft:diamond_sword showcase 1.5
/katton itemrender spawn minecraft:diamond_sword pulse 1.0 200
/katton itemrender clear 32
```

Presets are `still`, `spin`, `float`, `pulse`, and `showcase`. `scale` defaults to `1.0` and `lifetimeTicks` to `-1` (no expiry). `itemrender clear <radius>` removes markers within that radius of the command source. See [Item Render Markers](../guide/render/item-markers.md).

## Debug

<!--@include: ../example/quickstart/commands/04.md-->

`/katton debug injection` prints the injection capability report: whether ByteBuddy/ASM injection is available and which hooks are supported on this platform. See [Code Injection](../guide/injection.md).

## IDE Development Bridge

```text
/katton dev enable
/katton dev disable
```

Enabling starts a loopback HTTP bridge on `127.0.0.1` with a per-session bearer token and prints the port. The [Katton IDEA plugin](../quickstart/ide.md) then discovers the instance from `~/.katton/dev/instances`, deploys world packs, and streams compiler diagnostics. The bridge is off by default and can also be toggled with the **IDE** button in the script pack UI.

## Reload

`/katton reload` is your daily driver for hot-reload iteration. It does four things:

1. Re-scans all enabled script packs and resolves their dependency graph
2. Re-compiles and executes server scripts for the replaced components
3. On integrated servers (singleplayer), also triggers client script reload asynchronously
4. Publishes a new pack revision to connected Fabric/NeoForge clients

<!--@include: ../example/quickstart/commands/01.md-->

> [!TIP]
> - **F3 + T** reloads Minecraft resources only; it does not invoke Katton scripts.
> - **`/reload`** (vanilla) reloads datapacks; Katton hooks into this for server scripts.
> - **`/katton reload`** does both in one go.
