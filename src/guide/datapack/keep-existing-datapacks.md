# Keeping Existing Datapacks

You do not have to rewrite a working datapack all at once. Katton is strongest when you can migrate gradually: keep static JSON and stable `.mcfunction` files, then move the parts that are painful in vanilla datapacks.

## Call Existing Functions

Use [`runFunction`](../../api/common/dpcaller/KattonServerApi.md#runfunction) to call a function that still lives in a datapack.

That gives you a clean bridge:

```kotlin
@ServerScriptEntrypoint
fun main() {
    // Keep existing datapack behavior while adding Kotlin around it.
    // runFunction("my_pack:setup")
}
```

## What to Keep

| Keep in datapacks | Move to Katton |
| --- | --- |
| Static recipes and loot tables | Dynamic recipe or loot changes |
| Static tags | Runtime selection and filtering |
| Advancements used as data triggers | Event listeners when available |
| Resource/data files maintained by existing tools | Logic-heavy command chains |
| Stable library functions | Functions with many branches or calculations |

## Avoid Double Ownership

During migration, avoid letting both systems own the same behavior. If a datapack function gives rewards and a Katton event also gives rewards, reloads and event timing become hard to reason about.

Pick one owner for each feature:

- datapack owns static data;
- Katton owns runtime logic;
- both communicate through explicit calls, tags, scoreboards, or storage.

## Suggested Order

1. Keep the datapack installed.
2. Create a Katton script pack next to it.
3. Call one existing function from Katton.
4. Move one command chain into Kotlin.
5. Delete the old function only after behavior matches.

