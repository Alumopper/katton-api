# Modify Existing Content

Modifying vanilla (or modded) game content is just as important as adding new content. Katton provides a suite of `modify*` functions that let you change item properties, block behavior, entity attributes, recipes, loot tables, and villager trades — all from Kotlin scripts, all hot-reloadable.

> [!NOTE]
> All modify functions live in `top.katton.api.mod` and are annotated `@ApiStatus.Experimental`. Target Minecraft version: **26.1.2**.

## Import

```kotlin
import top.katton.api.mod.*
```

## Reload Behavior

Modify APIs fall into two categories based on how they interact with Minecraft's internal state:

| Mechanism | APIs | Reload Cleanup |
|-----------|------|----------------|
| **Live mutation** — writes directly to Minecraft's internal fields | `modifyItem`, `modifyBlock`, `modifyEntityType` | Changes persist until JVM restart. Removing a `modify*` call from a script and reloading does **not** revert the change. |
| **Staged mutation** — defers writes to the datapack apply phase | `modifyRecipe`, `removeRecipe`, `modifyLootTable`, `addVillagerTrade` | Changes are cleared and re-applied on every reload. Removing a call from a script and reloading cleanly drops the mutation. |

---

## 1. Modify Items

Change data components on any existing item: max stack size, durability, rarity, food properties, fire resistance, crafting remainder, and attack stats.

<!--@include: ../../example/quickstart/modify/01.md-->

**Available properties:**

| Property | Description |
|----------|-------------|
| `maxStackSize` | Sets max stack. Katton rejects invalid `> 1 && maxDamage > 0` combinations. |
| `maxDamage` | Sets durability. |
| `rarity` | Item rarity (`COMMON` / `UNCOMMON` / `RARE` / `EPIC`). |
| `name` | Display name component. |
| `foodProperties` | Makes the item edible. Katton automatically adds `CONSUMABLE` alongside `FOOD`. |
| `fireResistant` | Adds `DAMAGE_RESISTANT` for fire damage type. Only `true` is supported. |
| `craftingRemainder` | Container item (e.g., bucket → empty bucket). |
| `attackDamage` | Sets attack damage. Katton adds a default `WEAPON` component if missing. |
| `attackSpeed` | Sets attack speed. |

---

## 2. Modify Blocks

Change block properties: hardness, resistance, friction, speed/jump factor, light emission, collision flags, and sound type.

<!--@include: ../../example/quickstart/modify/02.md-->

> [!NOTE]
> Katton writes changes into **three layers**: `BlockBehaviour.Properties`, live `BlockBehaviour` final fields, and every pre-built `BlockStateBase`, then calls `initCache()` to refresh cached shapes. This covers local-player step sounds, mob collision, and lighting.

---

## 3. Modify Recipes

Change the result, count, experience, or cooking time of an existing recipe — or remove it entirely.

<!--@include: ../../example/quickstart/modify/03.md-->

> [!WARNING]
> `modifyRecipe` and `removeRecipe` require a running server. The recipe being modified must already be registered in the live `RecipeManager`.

---

## 4. Modify Entity Attributes

Override default attribute values for vanilla or modded entity types — max health, attack damage, movement speed, armor, and more.

<!--@include: ../../example/quickstart/modify/04.md-->

**Available attributes:**

| Method | Attribute |
|--------|-----------|
| `maxHealth(value)` | `generic.max_health` |
| `movementSpeed(value)` | `generic.movement_speed` |
| `knockbackResistance(value)` | `generic.knockback_resistance` |
| `attackDamage(value)` | `generic.attack_damage` |
| `attackSpeed(value)` | `generic.attack_speed` |
| `armor(value)` | `generic.armor` |
| `armorToughness(value)` | `generic.armor_toughness` |
| `followRange(value)` | `generic.follow_range` |
| `luck(value)` | `generic.luck` |
| `attribute(holder, value)` | Any custom attribute |

> [!WARNING]
> Katton copies **all** existing attributes from the original supplier before applying overrides. Mob-specific attributes (`FOLLOW_RANGE`, zombie reinforcement, etc.) are preserved. Starting from `LivingEntity.createLivingAttributes()` alone would crash mobs.

---

## 5. Modify Loot Tables

Read an existing loot table, add or remove pools and entries, and re-register it — all from a Kotlin DSL.

<!--@include: ../../example/quickstart/modify/05.md-->

**Operations:**

| Method | Effect |
|--------|--------|
| `pool { … }` | Append a new pool |
| `rawPool(json)` | Append a raw JSON pool |
| `removePool(index)` | Drop a pool at the given index |
| `removeItem(itemId)` | Drop every item entry matching `itemId` from every pool |

Within a `pool { ... }` block:
| Member | Description |
|--------|-------------|
| `rolls = N` | Pool roll count (default 1) |
| `addItem(id, weight, quality)` | Add an item entry |
| `addTag(id, weight, expand)` | Add a tag entry |
| `addEmpty(weight)` | Add an empty entry |

---

## 6. Modify Villager & Wandering Trader Trades

Append new trades to profession trade sets or wandering trader pools.

<!--@include: ../../example/quickstart/modify/06.md-->

**Trade-set ids (26.1.2 use slash `/` separator):**

| Trade-set id | Effect |
|--------------|--------|
| `minecraft:farmer/level_1` … `minecraft:weaponsmith/level_5` | Profession tier trade |
| `minecraft:wandering_trader/buying` | Wandering trader buys |
| `minecraft:wandering_trader/common` | Common sale |
| `minecraft:wandering_trader/uncommon` | Uncommon sale |

**Configuration:**

| Property | Default | Description |
|----------|---------|-------------|
| `cost(itemId, count)` | required | Item the merchant wants |
| `additionalCost(itemId, count)` | unset | Optional secondary cost |
| `result(itemId, count)` | required | Item the merchant gives back |
| `maxUses` | `12` | Trade lock-out threshold |
| `xp` | `2` | Villager XP per trade |
| `priceMultiplier` | `0.05f` | Vanilla 0.05 for farmers |

> [!NOTE]
> Trades appear after `/katton reload`. The manager snapshots every modified `TradeSet` on first apply and automatically cleans up previous injections on subsequent reloads.

---

## Requirements

| API | Needs server? | Needs reload? |
|-----|:---:|:---:|
| `modifyItem` / `modifyBlock` / `modifyEntityType` | No | No |
| `modifyRecipe` / `removeRecipe` | Yes | Applied at reload |
| `modifyLootTable` / `getLootTable` | Yes | Applied at reload |
| `addVillagerTrade` | Yes | Applied at reload |

For complete API signatures, see the [Common API docs](/api/common/).
