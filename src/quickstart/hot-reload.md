# Hot Reload and Debugging

Katton is designed around short edit-reload-test loops. Put scripts in an enabled pack, edit the `.kt` or `.java` files, then reload without restarting the game or server.

## Reload Commands

Use `/katton reload` for the normal workflow.

On Fabric and NeoForge, it reloads server scripts and, in singleplayer, also schedules a client script reload. On Paper, it reloads server-side script packs only.

Other reload paths still exist:

| Trigger | Effect |
|---|---|
| `/katton reload` | Reloads Katton scripts and shows the progress overlay. |
| `/reload` | Reloads datapacks; Katton hooks server script reload into that flow. |
| `F3 + T` | Reloads Minecraft client resources only; Katton scripts are not invoked. |
| Script Pack UI Reload button | Reloads from the in-game pack manager on Fabric/NeoForge clients. |
| IDE bridge deploy | The Katton IDEA plugin stages a snapshot and reloads through the same serialized path. See [IDE Development Bridge](./ide.md). |

## What Gets Cleared

During reload, Katton clears script-owned state before running entrypoints again. Only the components being replaced are cleared: an independent pack that did not change keeps running.

| State | Reload behavior |
|---|---|
| Event handlers | Cleared and re-registered by scripts. |
| Managed native listeners | Cleared by script pack scope. |
| Injection hooks | Reset on Fabric/NeoForge. |
| Reloadable registries | Ownership is cleared; objects are soft-retained to avoid holder crashes. |
| Datapack mutations | Cleared and re-applied during datapack apply. |
| Client render callbacks | Cleared on client reload. |
| Folia scheduled tasks | Detached; missed one-shot tasks are rescheduled when the candidate commit succeeds. |

## Dependency Transactions

A reload is not all-or-nothing across every pack. Katton resolves the `packDependencies` graph, computes the affected consumers of each change, and groups the work into independent transactions:

- Reloading a consumer keeps an unchanged dependency instance and its shared state alive.
- Reloading a dependency replaces its consumers in the same transaction.
- Unrelated components commit separately, so one component's failure does not undo another component that already committed.
- Resource-only changes keep compiled code and running state; they do not replay entrypoints.

See [Script Pack Dependencies](../guide/pack-dependencies.md) for the full model and [Script Loading Lifecycle](../architecture/script-loading.md) for the pipeline.

## Lifecycle and Replay

Reloading does not mean every entrypoint runs again. Global packs never replay, world packs honor the annotation's `replay` value, and multiplayer `SERVER_CACHE` packs always replay after a server revision activates. The context's `reason` is `HOT_RELOAD`, while `cause` identifies the command, datapack reload, server-pack sync, or deployment that initiated it.

For the full phase matrix and context types, see [Script Loading Lifecycle](../architecture/script-loading.md).

## Reload Result and Rollback

A failed candidate does not take down the running scripts. Compilation errors, dependency errors, and resource failures restore the managed callbacks and resource values of the affected component without replaying the old entrypoints. Independent components that already committed stay active.

Rollback covers Katton-managed state only. Arbitrary side effects — world edits, file writes, and static fields changed through third-party APIs — are not undone. After a failed reload, check `/katton errors` for the recorded diagnostics.
