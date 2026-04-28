# Commands

Katton ships with a set of built-in commands under `/katton` to help you manage scripts, inspect state, and toggle debugging — all from in-game chat or server console.

## TL;DR

| Command | What it does | Who can use |
|---|---|---|
| `/katton` or `/katton help` | Show all commands | Everyone |
| `/katton status` | Katton runtime state | Everyone |
| `/katton registry` | Registry health overview | Everyone |
| `/katton registry stale` | Show stale retained entries | Everyone |
| `/katton reload` | Reload all script packs | **OP only** |
| `/katton debug registryLogging` | Check debug log toggle | **OP only** |
| `/katton debug registryLogging on/off` | Enable/disable debug logs | **OP only** |

## Help

Just type `/katton` or `/katton help` — Katton will list all available subcommands.

<!--@include: ../example/quickstart/commands/05.md-->

## Status

Want a quick pulse on Katton? `/katton status` prints the current load state, whether a server is bound, and if a client reload is in progress.

<!--@include: ../example/quickstart/commands/02.md-->

## Registry Diagnostics

### `/katton registry`

Shows a per-registry summary: how many entries Katton knows about, how many are actively managed by scripts, and how many are **stale** (retained in Minecraft's built-in registry but no longer claimed by any script).

<!--@include: ../example/quickstart/commands/03.md-->

### `/katton registry stale`

Filters to only show registries that have stale entries. Handy after you've removed a script that registered a bunch of stuff — those IDs are still in the game but not tracked by Katton anymore.

> [!NOTE]
> Stale does **not** mean broken. Katton intentionally keeps registered objects in Minecraft's built-in registries during reload to avoid holder crashes. Stale just means "left over from a previous script run that didn't re-register them this time."

## Reload

`/katton reload` is your daily driver for hot-reload iteration. It does three things:

1. Re-scans all enabled script packs
2. Re-compiles and executes server scripts
3. On integrated servers (singleplayer), also triggers client script reload asynchronously

<!--@include: ../example/quickstart/commands/01.md-->

> [!TIP]
> - **F3 + T** reloads resource packs and also triggers client script reload (via LoadingOverlay hook).
> - **`/reload`** (vanilla) reloads datapacks; Katton hooks into this for server scripts.
> - **`/katton reload`** does both in one go and shows a visual progress bar!

## Debug Logging

Katton has a built-in debug log toggle that prints every registration call to the game log. Toggle it from command or script:

<!--@include: ../example/quickstart/commands/04.md-->

Default is `false`. Turn it on when you're troubleshooting registration issues, then turn it off to avoid log spam in production.

## Visual Progress Overlay

Whenever a script reload is triggered (via command, resource reload, or UI), Katton shows a centered progress bar at the top of your screen:

- **Message + percentage** — e.g. "Compiling server scripts (48%)"
- **Green progress bar** filling left to right
- Disappears automatically when done, with a brief "Done" message

This means you no longer have to guess whether your reload is still running or has crashed — **you can literally see the progress.**

No code needed to enable this — it just works. The overlay renders on the HUD and on loading screens (world load, resource reload).
