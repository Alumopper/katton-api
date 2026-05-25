# Script Loading Lifecycle

Katton compiles normal `.kt` and `.java` files from enabled script packs, then invokes top-level no-argument functions annotated with `@ServerScriptEntrypoint` or `@ClientScriptEntrypoint`.

## Initialization

All platforms initialize the common runtime:

```kotlin
KattonRegistry.initialize()
ScriptPackManager.setGameDirectory(...)
ScriptEngine.setCacheDirectory(...)
ScriptPackManager.refreshGlobalPacks()
```

Fabric and NeoForge also register networking payloads, mixins, event bridges, renderer hooks, and lifecycle callbacks. Paper calls `Katton.paperInitialize()`, disables registry mutation/client features, registers Bukkit listeners, and installs Paper managed events.

## Server Reload

`/katton reload` and server datapack reloads follow the same broad pattern:

1. Refresh global/world script pack snapshots.
2. Clear script-owned state: events, managed listeners, injections, registry ownership, datapack mutations.
3. Compile and execute server entrypoints from enabled packs.
4. Apply staged datapack mutations.
5. On Fabric/NeoForge, sync registry/script-pack state to clients when relevant.

## Client Reload

Fabric/NeoForge client reload:

1. Clears client event/render state.
2. Refreshes local packs.
3. Merges local packs with trusted server-cache packs.
4. Compiles and executes client entrypoints.
5. Re-registers HUD renderers, world renderers, and entity renderers.

On Paper, client reload is a no-op because `hasClient = false`.

## Singleplayer and Multiplayer

Singleplayer reload is straightforward: the integrated server and local client both run in the same game process, but server and client scripts still compile into separate classloaders.

Multiplayer adds one strict ordering requirement: remote client scripts must execute before registry validation. Katton sends hash and bundle packets during configuration, blocks the networking handler while the render thread verifies/trusts/executes packs, then lets registry validation proceed.

## Classloader Note

Server and client script environments use separate classloaders. Avoid casting script-defined server classes to script-defined client classes. Use common Minecraft types or `KattonBridge` for explicit cross-classloader data sharing.

