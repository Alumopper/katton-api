# Choosing an Entrypoint Phase

Every entrypoint answers two separate questions:

1. The pack directory selects its scope: `GLOBAL`, `WORLD`, or synchronized `SERVER_CACHE`.
2. The annotation selects the execution phase and replay policy.

Katton rejects an incompatible combination. It does not infer an `AUTO` phase.

## Pick the Phase by Available State

| You need | Pack scope | Annotation |
|---|---|---|
| Process-level setup without a server | `GLOBAL` | `@ServerScriptEntrypoint(ServerPhase.BOOTSTRAP)` |
| A running server or its worlds | `GLOBAL` or `WORLD` | `@ServerScriptEntrypoint(ServerPhase.READY)` |
| One-time client initialization without a connection | `GLOBAL` | `@ClientScriptEntrypoint(ClientPhase.READY)` |
| Client registrations before registry validation | `WORLD` or `SERVER_CACHE` | `@ClientScriptEntrypoint(ClientPhase.REGISTRY_SETUP)` |
| A local player and client level | `WORLD` or `SERVER_CACHE` | `@ClientScriptEntrypoint(ClientPhase.JOINED)` |

The annotation defaults—server `BOOTSTRAP` and client `READY`—are intentionally global-only. Always write the phase explicitly in a world pack.

## Global Bootstrap

Use bootstrap for process-lifetime setup that cannot depend on a server, world, player, or Paper plugin.

<!--@include: ../example/guide/lifecycle/01.md-->

Global entrypoints never replay during hot reload.

## Server Ready

Commands, managed events, datapack changes, and most server gameplay setup belong at `ServerPhase.READY`.

<!--@include: ../example/guide/lifecycle/02.md-->

The context exposes `server` and the common metadata fields:

- `reason`: `INITIAL_LOAD` or `HOT_RELOAD`
- `cause`: `SERVER_START`, `COMMAND`, `DATAPACK_RELOAD`, `SERVER_PACK_SYNC`, or `CLIENT_JOIN`
- `packId`, `scope`, and `platform`

Set `replay = false` only when a world entrypoint must not run again:

```kotlin
@ServerScriptEntrypoint(
    phase = ServerPhase.READY,
    replay = false
)
fun initializeOncePerWorldSession() {
    // Initial load only for a WORLD pack.
}
```

`replay` cannot override scope policy: global packs never replay and server-cache packs always replay.

## Client Registry Setup

Built-in registry objects and renderers needed during connection setup must exist before the server's registry data is checked.

<!--@include: ../example/guide/lifecycle/03.md-->

For a built-in registry entry shared by both logical sides, put both annotations on the same no-argument function:

```kotlin
import net.minecraft.world.item.Item
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.registry.registerNativeItem
import top.katton.registry.RegisterMode

@ServerScriptEntrypoint(ServerPhase.READY)
@ClientScriptEntrypoint(ClientPhase.REGISTRY_SETUP)
fun registerContent() {
    registerNativeItem("example:token", RegisterMode.RELOADABLE) {
        Item(it)
    }
}
```

A dual-side function should remain parameterless because the server and client phases use different context types.

## Client Joined

Use `JOINED` when code needs the local player, client level, or in-world HUD state. Katton delays the invocation until those objects are available.

<!--@include: ../example/guide/lifecycle/04.md-->

On a live multiplayer update, Katton activates the complete candidate snapshot and then replays every active `SERVER_CACHE` entrypoint. Unchanged synchronized packs replay too, ensuring their handlers match the server-owned snapshot.

For the complete lifecycle contract, see [Script Loading Lifecycle](../architecture/script-loading.md).
