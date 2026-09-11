# Script Pack Dependencies

Katton Alpha 0.5.0 lets one script pack depend on another script pack. This is separate from [mod and plugin dependencies](./dependencies.md):

| Declaration | Describes | Example |
|---|---|---|
| `dependencies` | External Fabric mods, NeoForge mods, or Paper plugins | `create`, `spark`, `WorldEdit` |
| `packDependencies` | Other **Katton script packs** | a shared library pack, a quest framework |

Use pack dependencies when you want to split a project into a reusable core pack and one or more consumer packs that share its Kotlin types and state.

## Declaring a Pack Dependency

A dependency is declared by pack ID, with an optional version range, a `required` flag, and an `export` flag:

```json
{
  "id": "my_consumer",
  "name": "My Consumer Pack",
  "version": "1.0.0",
  "dependencies": [],
  "packDependencies": [
    {
      "id": "shared-behavior",
      "version": ">=1.0",
      "required": true,
      "export": false
    }
  ]
}
```

The dependency target is an ordinary pack with its own manifest:

```json
{
  "id": "shared-behavior",
  "name": "Shared Behavior",
  "version": "1.0",
  "dependencies": [],
  "packDependencies": []
}
```

| Field | Default | Meaning |
|---|---|---|
| `id` | **required** | Pack manifest `id`, or a scope-qualified sync ID such as `world:shared-behavior`. |
| `version` | `"*"` | Accepted version expression for the target pack's `version` field. |
| `required` | `true` | When `true`, a missing, disabled, ambiguous, or incompatible target rejects this pack. |
| `export` | `false` | When `true`, the target's own dependencies become visible to consumers of this pack. |

Version expressions use the same syntax as mod dependencies:

- any version: `*`
- exact: `2.0.0` or `=2.0.0`
- comparisons: `>=1.0`, `<3.0`
- AND conditions separated by whitespace or commas: `>=1.0 <2.0`
- OR alternatives: `>=1.0 <2.0 || >=3.0`

## How Packs Are Matched

Katton resolves each declaration against the packs that are enabled in the current reload:

1. It first tries a **scope-qualified sync ID** match (`world:shared-behavior`, `global:shared-behavior`, `server_cache:shared-behavior`).
2. Otherwise it matches by manifest `id`, case-insensitively.

If more than one pack matches, the dependency is **ambiguous** and a required declaration rejects the consumer. Keep manifest IDs unique across scopes, or qualify the declaration.

Two packs with the same sync ID are always rejected as a duplicate identity, even if nothing depends on them.

## Scope Rules

A pack may only depend on a pack that is at least as long-lived as itself:

| Consumer scope | Allowed target scopes |
|---|---|
| `GLOBAL` | `GLOBAL` only |
| `WORLD` | `GLOBAL`, `WORLD` |
| `SERVER_CACHE` | `SERVER_CACHE` only |

A global pack cannot pull in world-only code, and a remote synchronized pack cannot require a client-local pack. Cycles are rejected as well: `A → B → A` invalidates the cycle, while unrelated packs keep loading.

A required dependency failure rejects the **consumer and its required dependants**, not the whole reload. Optional (`required: false`) dependencies simply do not create an edge when they are missing or incompatible.

## Visibility and Exports

A direct dependency exposes its **compiled output, including Kotlin metadata**, so the consumer can import its public Kotlin classes and call its functions like any other compilation unit.

Transitive dependencies are private by default:

```text
A -> B -> C
```

- `A` sees `B` directly.
- `A` sees `C` only when `B`'s declaration of `C` sets `"export": true`, or when `A` also declares `C` itself.
- A pack's direct `libs/*.jar` libraries are always private and are never exposed to consumers.

Use `export` to build a facade pack that re-exports a curated set of dependencies, and leave it `false` for implementation details.

## Private Libraries and Shared State

Each pack keeps its own private library state, so two packs can bundle different versions of the same JAR without colliding. At the same time, **consumers share the dependency's active instance**:

- All consumers of `shared-behavior` use the same classloader and the same `object` state.
- The dependency's entrypoints run **before** its consumers' entrypoints (topological order), so initialization is observable.
- Consumers never get a private copy of a dependency's state; that shared state is the point of the feature.

## Reload Behavior

Pack dependencies change what a reload has to replace:

- Reloading a **consumer** alone keeps an unchanged dependency instance and its shared state alive. Only the consumer's code and callbacks are replaced.
- Reloading a **dependency** replaces the dependency and every affected consumer **in the same transaction**.
- Impact is computed as a reverse closure over both the old and the new dependency graphs, so removing an edge, deleting a pack, and adding an optional dependency are all handled.
- A resource-only change (`assets/**`, `data/**`, audio, and other non-source files) keeps the compiled code and the running pack generation. You can update textures or data without rerunning entrypoints.
- Global pack code changes still require restarting the game or server; they are never hot-applied.

Independent dependency components commit separately. Changing `A` in `A → B ← C` reloads only `A`; changing `B` replaces both `A` and `C`. If a later resource step fails, only that component is restored, and a component that already committed stays active.

Rollback restores **managed callbacks and resource values** without replaying the old entrypoints. It does not undo arbitrary script side effects such as world edits, file writes, or static fields set through third-party APIs.

## Worked Example

The repository ships a probe under `examples/pack-dependencies/`. Its shared pack owns a counter:

```kotlin
package katton.examples.shared

/** This state belongs to one active shared-behavior pack instance. */
object SharedCounter {
    private var value = 0
    @Synchronized fun next(): Int = ++value
}
```

The consumer imports it and prints the next value when the server is ready:

```kotlin
package katton.examples.consumer

import katton.examples.shared.SharedCounter
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint(phase = ServerPhase.READY)
fun ready() {
    println("Katton dependency smoke: shared counter = ${SharedCounter.next()}")
}
```

Copy both packs into a world's `kattonpacks/` directory and start the game:

1. The first load prints `shared counter = 1`.
2. Edit only the consumer and run `/katton reload`; it prints `2`. The dependency instance stayed alive, so its state was preserved.
3. Edit the shared pack and reload; both packs are replaced together and the counter returns to `1`.
4. Add `error("fault injection")` to the consumer entrypoint and reload; the previous consumer and shared pack stay active.

## Directory and ZIP Packs

Pack dependencies work identically for directory and ZIP packs. Both transports produce the same logical files, hashes, and signature payload:

```text
kattonpacks/shared-behavior/       # or shared-behavior.zip with manifest.json at the archive root
├── manifest.json
├── Shared.kt
└── libs/utility-1.0.jar
```

To distribute a ZIP pack, sign the directory with the current [Katton-Sign](https://github.com/Alumopper/Katton-Sign) plugin and then ZIP its **contents** so `manifest.json` sits at the archive root. Do not wrap the pack in an extra folder, and do not keep both the directory and the ZIP with the same manifest ID in `kattonpacks/`.

## Limitations

- Pack isolation is **not a security sandbox**. It isolates dependencies, libraries, and state for reload correctness; it does not sandbox arbitrary JVM code.
- A reload does not roll back world edits, file writes, or effects performed directly through third-party APIs.
- Dependencies are resolved among enabled packs only. Disabling a required dependency in the pack UI rejects its consumers on the next reload.
- Global code changes are not hot-applied; restart the game or server.

See [Manifest, Dependencies, and Signing](../architecture/manifest.md) for the complete field reference and [Script Loading Lifecycle](../architecture/script-loading.md) for how dependency-aware reload fits into the reload pipeline.
