# Registry

Adding custom content to the game is the core of modding. Katton lets you register **nine** types of native Minecraft objects — all from Kotlin scripts, all hot-reloadable.

> [!WARNING]
> The registry system is actively developed. APIs are stable for RELOADABLE mode but may evolve. When in doubt, check the [API docs](/api/).

## Register Modes

Every register function accepts a `registerMode` parameter:

| Mode | Behavior |
|---|---|
| `RegisterMode.GLOBAL` | Registered once at mod init. **Not** tracked for reload. Survives all reloads. |
| `RegisterMode.RELOADABLE` | Tracked by Katton. On reload, ownership is cleared and the script can re-register. The **actual Minecraft registry entry is preserved** (soft-retained) to prevent holder crashes. |
| `RegisterMode.AUTO` | Acts as GLOBAL during mod init, then RELOADABLE after server starts. Use this if you want "just works" behavior. |

> [!TIP]
> Use `RELOADABLE` for content you iterate on. Use `GLOBAL` for content that must persist unchanged across reloads.

## All Native Types

Katton supports registering these Minecraft built-in types:

| # | Type | API Function | Intrusive Holder |
|---|---|---|---|
| 1 | **Items** | `registerNativeItem` | Yes |
| 2 | **Blocks** | `registerNativeBlock` | Yes |
| 3 | **Mob Effects** | `registerNativeEffect` | No |
| 4 | **Sound Events** | `registerNativeSoundEvent` | No |
| 5 | **Particle Types** | `registerNativeParticleType` | Yes |
| 6 | **Block Entity Types** | `registerNativeBlockEntityType` | Yes |
| 7 | **Creative Tabs** | `registerNativeCreativeTab` | No |
| 8 | **Data Component Types** | `registerNativeDataComponentType` | Yes |
| 9 | **Entity Types** | `registerNativeEntityType` / `registerNativeEntityTypeWithProperties` | Yes |

### 1. Items

The most common registry call. You can register simple items, custom-behavior items, and food items.

<!--@include: ../example/quickstart/registry/01.md-->

> [!CAUTION]
> When the client connects to a server, only item **data components** sync — not the Kotlin logic in your item class. Client-side interaction logic may need extra handling. Block registration has the same limitation.

### 2. Blocks

Register a custom block with strength, tool requirements, and custom behavior.

<!--@include: ../example/quickstart/registry/02.md-->

> [!NOTE]
> You need a blockstate JSON and a model JSON in your resource pack for the block to render properly. Place them under `assets/<namespace>/blockstates/` and `assets/<namespace>/models/block/`.

### 3. Mob Effects

Create custom potion effects — beneficial or harmful.

<!--@include: ../example/quickstart/registry/03.md-->

### 4. Sound Events

Register custom sounds. Pair with a `sounds.json` in your resource pack.

<!--@include: ../example/quickstart/registry/05.md-->

### 5. Particle Types

Add custom visual particles.

<!--@include: ../example/quickstart/registry/06.md-->

### 6. Block Entity Types

For blocks that store data (chests, furnaces, custom machines).

<!--@include: ../example/quickstart/registry/07.md-->

### 7. Creative Mode Tabs

Organize your items in the creative inventory.

<!--@include: ../example/quickstart/registry/08.md-->

### 8. Data Component Types

Type-safe custom data on item stacks — think of it as structured NBT.

<!--@include: ../example/quickstart/registry/09.md-->

### 9. Entity Types

Register custom entities. Two levels:

**Basic** — entity type only, no attributes or spawn configuration:
<!--@include: ../example/quickstart/registry/10.md-->

**Full** — entity with attributes, spawn egg, and natural spawn placement:
<!--@include: ../example/quickstart/registry/11.md-->

## Registry Lifecycle

### What Happens on Reload?

1. **`beginReload()`** is called for each registry. Katton clears ownership tracking but **does not remove entries from Minecraft's built-in registries** (soft retention). This prevents "Unregistered holder" crashes when the game accesses existing items, blocks, entities, etc.
2. Scripts re-execute. `ensureRegistered` returns the **same** object instance if it already exists in the registry.
3. `markManaged()` re-tracks the entry as owned by the current script.

### What About Stale Entries?

If you remove a script that registered items, those items remain in Minecraft's registries. Katton tracks this as "stale." Use `/katton registry stale` to see them.

To clear stale entries, you must restart the game. This is a deliberate trade-off: **stability over cleanliness.**

### Command Registration

Script-registered commands use `ScriptCommandRegistry` — they're auto-cleaned on reload. Use the `registerCommand` API from your scripts to add custom commands.

<!--@include: ../example/quickstart/registry/04.md-->
