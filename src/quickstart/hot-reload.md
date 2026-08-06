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

## What Gets Cleared

During reload, Katton clears script-owned state before running entrypoints again:

| State | Reload behavior |
|---|---|
| Event handlers | Cleared and re-registered by scripts. |
| Managed native listeners | Cleared by script pack scope. |
| Injection hooks | Reset on Fabric/NeoForge. |
| Reloadable registries | Ownership is cleared; objects are soft-retained to avoid holder crashes. |
| Datapack mutations | Cleared and re-applied during datapack apply. |
| Client render callbacks | Cleared on client reload. |

## Lifecycle and Replay

Reloading does not mean every entrypoint runs again. Global packs never replay, world packs honor the annotation's `replay` value, and multiplayer `SERVER_CACHE` packs always replay after a server revision activates. The context's `reason` is `HOT_RELOAD`, while `cause` identifies the command, datapack reload, or server-pack sync that initiated it.

For the full phase matrix and context types, see [Script Loading Lifecycle](../architecture/script-loading.md).
