# Scoreboards, Tags, NBT, and Storage

Datapack logic often uses scoreboards, tags, NBT, and storage as a substitute for variables. Katton gives you more choices. The best migration is not to delete all of those systems, but to use each one where it still makes sense.

## Choosing State Storage

| Need | Good choice |
| --- | --- |
| Visible or command-compatible numbers | Scoreboards |
| Quick entity markers used by vanilla commands | Entity tags |
| Data that already belongs to an entity or block | Entity/block NBT |
| Datapack interoperability | Storage NBT or scoreboards |
| Temporary calculations inside one reload/session | Kotlin variables and collections |
| Persistent script-owned config | Pack `manifest.json` config or your own file format |

## Scoreboards

Scoreboards are still useful when vanilla commands, command blocks, or existing datapack functions need to see a value. If the value only exists to make `.mcfunction` arithmetic possible, it is usually cleaner as a Kotlin variable.

```kotlin
val wave = 3
val nextWave = wave + 1
```

Keep scoreboards for shared state. Use Kotlin for computation.

## Tags

Tags are still a convenient bridge between selectors and scripts. For example, you can let existing datapack functions tag entities, then let Katton select and process those entities with `EntitySelectorBuilder`.

Avoid inventing a tag for every internal state flag. A Kotlin `Set<UUID>` or a small data class is clearer when the state belongs only to your script.

## NBT and Storage

Katton exposes helpers for the NBT you already know from datapacks:

- [`getEntityNbt`](../../api/common/dpcaller/KattonNbtApi.md#getentitynbt)
- [`getBlockNbt`](../../api/common/dpcaller/KattonNbtApi.md#getblocknbt)
- [`getStorageNbt`](../../api/common/dpcaller/KattonNbtApi.md#getstoragenbt)

Use NBT when you need to inspect Minecraft-owned data or interoperate with existing datapack storage. Use Kotlin objects when you are modeling script logic.

## Migration Rule

Do not translate every scoreboard objective one-to-one. For each objective, ask:

1. Does vanilla command logic still need this value?
2. Does it need to survive a full server restart?
3. Is it really just a local variable from an old mcfunction?

That decision usually tells you where the value belongs.

