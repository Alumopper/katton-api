# Registry

Adding custom content to the game is the core of modding. Katton lets you register **nine** types of native Minecraft objects — all from Kotlin scripts, all hot-reloadable.

> [!WARNING]
> The registry system is actively developed. APIs are stable for RELOADABLE mode but may evolve. When in doubt, check the [API docs](/api/).

## Register Modes

Every register function accepts a `registerMode` parameter:

| Mode | Behavior |
|---|---|
| `RegisterMode.GLOBAL` | Registered once at mod init. **Not** tracked for reload. Survives all reloads. |
| `RegisterMode.RELOADABLE` | Tracked by Katton. Ownership is cleared on reload and the script can re-register. The Minecraft registry entry is **preserved** (soft-retained) to prevent holder crashes. |
| `RegisterMode.AUTO` | Acts as GLOBAL during mod init, then RELOADABLE after server starts. Use this for "just works" behavior. |

> [!TIP]
> Use `RELOADABLE` for content you iterate on. Use `GLOBAL` for content that must persist unchanged across reloads.

## Reload Lifecycle

Running `/katton reload` triggers this sequence:

1. `beginReload()` called on each registry — clears ownership tracking
2. Scripts re-execute — `ensureRegistered` returns the **same** instance if already registered
3. `markManaged()` re-tracks the entry for the current script
4. Stale entries (no longer registered by any script) remain in Minecraft's registry until restart

## Registry Diagnostics

Use `/katton registry` to see a summary per registry: how many entries Katton tracks, how many are managed by scripts, and how many are **stale** (still in Minecraft's registry but no longer owned by any script).

Use `/katton registry stale` to show only registries with stale entries.

## All Native Types

### 1. Items

The most common registry call. You can register simple items, custom-behavior items, and food items.

<!--@include: ../../example/quickstart/registry/01.md-->

> [!CAUTION]
> When the client connects to a server, only item **data components** sync — not the Kotlin logic in your item class. Client-side interaction logic may need extra handling.

### 2. Blocks

Register a custom block with strength, tool requirements, and custom behavior.

<!--@include: ../../example/quickstart/registry/02.md-->

> [!NOTE]
> You need a blockstate JSON and a model JSON in your resource pack for the block to render properly.

### 3. Mob Effects

Create custom potion effects — beneficial or harmful.

<!--@include: ../../example/quickstart/registry/03.md-->

### 4. Commands

Script-registered commands use `ScriptCommandRegistry` — they're auto-cleaned on reload.

<!--@include: ../../example/quickstart/registry/04.md-->

### 5. Sound Events

Register custom sounds. Pair with a `sounds.json` in your resource pack.

<!--@include: ../../example/quickstart/registry/05.md-->

### 6. Particle Types

Add custom visual particles.

<!--@include: ../../example/quickstart/registry/06.md-->

### 7. Block Entity Types

For blocks that store data (chests, furnaces, custom machines).

<!--@include: ../../example/quickstart/registry/07.md-->

### 8. Creative Mode Tabs

Organize your items in the creative inventory.

<!--@include: ../../example/quickstart/registry/08.md-->

### 9. Data Component Types

Type-safe custom data on item stacks — think of it as structured NBT.

<!--@include: ../../example/quickstart/registry/09.md-->

### 10. Entity Types (Basic)

Register a bare entity type — no attributes, no renderer, no spawn egg.

<!--@include: ../../example/quickstart/registry/10.md-->

### 11. Entity Types (Full — with attributes + spawn egg)

Complete entity registration including attributes and spawn configuration.

<!--@include: ../../example/quickstart/registry/11.md-->

> [!TIP]
> For a **complete walkthrough** of creating a custom animated entity with BlockBench models and animations, see the **[Entity Tutorial](./entity.md)**.
