# Script Loading Lifecycle

Katton compiles normal `.kt` and `.java` files from enabled script packs, then invokes annotated top-level functions at an explicit execution phase. A function may take no parameters, or one context parameter compatible with its phase.

The pack folder determines its **scope**; the annotation only determines its **phase**. There is no `AUTO` or mutable "active phase" API.

## Scopes and Phases

| Scope | Location | Valid server phases | Valid client phases |
|---|---|---|---|
| `GLOBAL` | `<gameDir>/kattonpacks/` | `BOOTSTRAP`, `READY` | `READY` |
| `WORLD` | `<worldDir>/kattonpacks/` | `READY` | `REGISTRY_SETUP`, `JOINED` |
| `SERVER_CACHE` | Synced multiplayer cache | — | `REGISTRY_SETUP`, `JOINED` |

An invalid scope/phase combination is rejected instead of being silently moved to another phase. This keeps timing visible in source code.

## Entrypoint Annotations

```kotlin
import top.katton.api.*

@ServerScriptEntrypoint(
    phase = ServerPhase.READY,
    replay = true
)
fun serverReady(context: ServerReadyContext) {
    println("${context.packId} loaded on ${context.platform}")
}

@ClientScriptEntrypoint(
    phase = ClientPhase.JOINED,
    replay = true
)
fun clientJoined(context: ClientJoinedContext) {
    println("Joined as ${context.player.name.string}")
}
```

Defaults are deliberately simple:

```kotlin
@ServerScriptEntrypoint(
    phase = ServerPhase.BOOTSTRAP,
    replay = true
)

@ClientScriptEntrypoint(
    phase = ClientPhase.READY,
    replay = true
)
```

Because those defaults belong to global packs, world-pack entrypoints normally specify `ServerPhase.READY` or a world/client phase explicitly.

## Phase Semantics

| Phase | Context | When to use it |
|---|---|---|
| `ServerPhase.BOOTSTRAP` | `BootstrapContext` | Process-lifetime setup that does not need a server or world. Global only. |
| `ServerPhase.READY` | `ServerReadyContext` | Server commands, events, worlds, registries, and other server-bound work. |
| `ClientPhase.READY` | `ClientReadyContext` | One-time client setup that does not need a connection. Global only. |
| `ClientPhase.REGISTRY_SETUP` | `ClientRegistryContext` | Client content setup that must finish before remote registry validation. |
| `ClientPhase.JOINED` | `ClientJoinedContext` | Work that requires a connection, local player, and client level. |

Every context exposes `packId`, `scope`, `reason`, `cause`, and `platform`. Phase-specific contexts additionally expose the objects guaranteed at that stage: `server`, `client`, `player`, or `level`.

`reason` distinguishes `INITIAL_LOAD` from `HOT_RELOAD`. `cause` explains what initiated the invocation: `SERVER_START`, `COMMAND`, `DATAPACK_RELOAD`, `SERVER_PACK_SYNC`, or `CLIENT_JOIN`.

No-parameter entrypoints remain supported:

```kotlin
@ServerScriptEntrypoint(ServerPhase.READY)
fun registerHandlers() {
    // Valid when invocation metadata is not needed.
}
```

## Replay Rules

The annotation's `replay` value is interpreted with the pack scope:

| Scope | Hot-reload behavior |
|---|---|
| `GLOBAL` | Never replayed. Global entrypoints run once at their lifecycle boundary. |
| `WORLD` | Replayed when `replay = true`; skipped when `false`. The default is `true`. |
| `SERVER_CACHE` | Always replayed, even when unchanged or annotated with `replay = false`. |

Server-cache replay is unconditional because the server owns the complete active snapshot. After a server revision is activated, every active synced pack re-registers its client state so removed or replaced handlers cannot survive.

Global `ServerPhase.READY` entrypoints run once for each server instance, and their registered state is cleaned when that server stops. `ClientPhase.JOINED` waits until both the local player and client level are available.

## Reload Flow

`/katton reload` and server datapack reloads follow this broad server flow:

1. Refresh global and world pack snapshots.
2. Validate applicable mod or plugin dependencies.
3. Clear replayable script-owned events, listeners, injections, registry ownership, and datapack mutations.
4. Compile valid packs with their declared dependency classpaths.
5. Invoke eligible `ServerPhase.READY` entrypoints with the appropriate cause.
6. Apply staged datapack mutations.
7. On Fabric and NeoForge, publish a new client pack revision after a successful reload.

Fabric and NeoForge client activation follows this flow:

1. Validate the client's applicable dependencies.
2. Precompile the complete candidate pack snapshot.
3. Clear client event and render state only when the candidate is ready to activate.
4. Invoke `REGISTRY_SETUP`, then invoke or schedule `JOINED` when its objects exist.
5. Keep the previous active revision if validation, trust, download, or compilation fails.

Paper has no client lifecycle because `hasClient = false`.

## Classloading

Script compilation and execution include only dependencies declared in the pack manifest.

- Fabric and NeoForge add the declared mod and its required transitive mod dependencies to the compiler classpath. Runtime code sees the loader's shared transformed classes.
- Paper resolves enabled plugins at `ServerPhase.READY`, adds their plugin jar or class directory to the compiler classpath, and delegates runtime loading to the plugins' real classloaders. Katton does not load a second copy of a plugin and typed calls do not pay a reflection cost on every invocation.
- If two declared Paper plugins export the same class name, Katton rejects the pack as ambiguous rather than choosing an order-dependent class.

Server and client script environments still use separate script classloaders. Do not cast a script-defined server class to its client counterpart; exchange common Minecraft types or explicit bridge data instead.

See [Manifest and Dependencies](./manifest.md) for dependency declarations and [Script Pack Sync and Trust](./pack-sync.md) for multiplayer activation ordering.
