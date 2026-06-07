# Recipes, Loot Tables, and Datapack Mutations

Datapacks are excellent at declaring data: recipes, loot tables, tags, predicates, advancements, and more. Katton does not replace that whole system. Instead, it gives you a hot-reloadable Kotlin layer for the parts that need logic.

## What Katton Can Mutate

The [Modify Existing Content](../modify/) guide covers the full API. Datapack developers usually care most about:

| Datapack content | Katton API |
| --- | --- |
| Recipes | `modifyRecipe`, `removeRecipe` |
| Loot tables | `modifyLootTable`, loot table events |
| Villager trades | `addVillagerTrade` |
| Existing item properties | `modifyItem` |
| Existing block properties | `modifyBlock` |
| Existing entity attributes | `modifyEntityType` |

## Reload Behavior

Some changes are staged into the datapack apply phase. These are the most datapack-like because Katton clears and reapplies them on reload:

- `modifyRecipe`
- `removeRecipe`
- `modifyLootTable`
- `addVillagerTrade`

Other changes are live mutations of Minecraft objects. They are powerful, but they may not automatically revert until restart. The [Modify Existing Content](../modify/) page calls this out for each category.

## When to Keep JSON

Keep plain JSON when the data is static and readable as data. Move to Katton when:

- the result depends on config or runtime state;
- many similar files differ only by a few values;
- you want to add or remove entries during reload;
- you need event logic around loot, recipes, or trades.

## Migration Approach

Start by leaving your datapack JSON in place. Then move one dynamic part into Katton, reload, and verify that the final game behavior is identical before deleting the old JSON.

