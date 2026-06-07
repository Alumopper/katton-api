# From Datapack to Katton

If you already know vanilla datapacks, Katton should feel familiar: you still reload quickly, you can still call command-like helpers, and you can keep existing `.mcfunction` files while moving the parts that need real code into Kotlin.

The big difference is that Katton lets you stop encoding all logic as command strings. You can write functions, store values in variables, react to events, work with real entity objects, and use hot-reloadable APIs that reach far beyond vanilla datapacks.

> [!NOTE]
> Paper supports server-side datapack-style APIs and events, but it cannot register custom items, blocks, entities, or client features because a vanilla client cannot receive those registry entries.

## Migration Map

| Datapack habit | Katton replacement | Start here |
| --- | --- | --- |
| `data/<namespace>/function/*.mcfunction` | `.kt` files with `@ServerScriptEntrypoint` functions | [Project Structure](./project-structure.md) |
| Long command chains | Kotlin functions, loops, and command helpers | [Translating mcfunction to Kotlin](./mcfunction-to-kotlin.md) |
| Vanilla commands | `top.katton.api.dpcaller` helpers | [Calling Vanilla Commands](./commands.md) |
| `@e[...]`, `@a[...]` | `EntitySelectorBuilder` and real entity objects | [Selectors and Entity Access](./selectors.md) |
| Scoreboards, tags, NBT, storage | Scoreboards when useful, Kotlin values for logic, NBT APIs for data access | [Scoreboards, Tags, NBT, and Storage](./state.md) |
| `#load`, `#tick`, `schedule function` | Server lifecycle and tick events | [Replacing Load, Tick, and Schedule](./load-tick-schedule.md) |
| Recipe and loot JSON edits | `modifyRecipe`, `modifyLootTable`, and related APIs | [Recipes, Loot Tables, and Datapack Mutations](./datapack-mutations.md) |
| Existing datapack libraries | Keep them and call `runFunction` while migrating gradually | [Keeping Existing Datapacks](./keep-existing-datapacks.md) |
| Datapack limitations | Events, registries, client rendering, injection, pack UI | [Going Beyond Datapacks](./beyond-datapacks.md) |

## A Good First Migration

Start with a small utility function, not your entire datapack. Pick something that is annoying in `.mcfunction`, such as a selector-heavy loop, a scoreboard calculation, or a command chain that needs branching.

1. Create a script pack.
2. Add one `@ServerScriptEntrypoint` function.
3. Recreate the behavior in Kotlin.
4. Reload with `/katton reload`.
5. Keep the rest of the datapack unchanged until the new script feels solid.

<div class="next-card-grid">
  <a class="next-card" href="./project-structure.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h6l2 2h8v12H4z"/><path d="M8 11h8M8 15h5"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Set Up a Script Pack</strong>
      <span>Map datapack folders to Katton files</span>
    </span>
  </a>
  <a class="next-card" href="./mcfunction-to-kotlin.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m7 8-4 4 4 4M17 8l4 4-4 4"/><path d="m14 4-4 16"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Translate Your First Function</strong>
      <span>Turn command chains into Kotlin logic</span>
    </span>
  </a>
</div>

