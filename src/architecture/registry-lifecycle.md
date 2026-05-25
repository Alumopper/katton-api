# Registry Lifecycle

Katton's reloadable registries let scripts iterate on native Minecraft objects without restarting the game.

## Managed Registries

Katton tracks 10 reloadable registry areas:

| Registry | Type |
|---|---|
| Items | `Item` |
| Blocks | `Block` |
| Entity types | `EntityType<?>` |
| Block entity types | `BlockEntityType<?>` |
| Effects | `MobEffect` |
| Sound events | `SoundEvent` |
| Particle types | `ParticleType<?>` |
| Creative tabs | `CreativeModeTab` |
| Data component types | `DataComponentType<?>` |
| Entity renderers | Client renderer registrations |

## Modes

| Mode | Behavior |
|---|---|
| `RegisterMode.GLOBAL` | Registers once and is not tracked for reload. |
| `RegisterMode.RELOADABLE` | Tracks ownership by script and refreshes that ownership on reload. |
| `RegisterMode.AUTO` | Uses GLOBAL during init and RELOADABLE after the server starts. |

## Reload Semantics

During reload, Katton clears ownership tracking, then scripts re-register their content. Existing Minecraft registry objects are soft-retained instead of removed, because hard removal can break holders and already-loaded game state.

A stale entry means the object still exists in Minecraft's registry but no current script owns it. This is expected after removing a script-defined item or block and reloading.

Use `/katton registry` and `/katton registry stale` on Fabric/NeoForge to inspect that state.

## Paper

Paper disables registry mutation entirely. A vanilla client connected to a Paper server cannot receive Katton-defined registry entries, so Paper scripts should use vanilla content, Bukkit APIs, datapack mutations, and event logic instead.

