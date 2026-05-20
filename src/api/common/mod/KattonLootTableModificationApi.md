---
title: KattonLootTableModificationApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonLootTableModificationApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.mod"
  source-file="common/src/main/kotlin/top/katton/api/mod/KattonLootTableModificationApi.kt"
>
Returns the JSON form of an existing loot table, or `null` when the table is not registered or the server is offline.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;getLootTable&quot;,&quot;href&quot;:&quot;#getloottable&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyLootTable&quot;,&quot;href&quot;:&quot;#modifyloottable&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootTableModificationConfig&quot;,&quot;href&quot;:&quot;#loottablemodificationconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;LootTableModificationConfig.pool&quot;,&quot;href&quot;:&quot;#loottablemodificationconfig-pool&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootTableModificationConfig.rawPool&quot;,&quot;href&quot;:&quot;#loottablemodificationconfig-rawpool&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootTableModificationConfig.removePool&quot;,&quot;href&quot;:&quot;#loottablemodificationconfig-removepool&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootTableModificationConfig.removeItem&quot;,&quot;href&quot;:&quot;#loottablemodificationconfig-removeitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootPoolBuilderJson&quot;,&quot;href&quot;:&quot;#lootpoolbuilderjson&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;LootPoolBuilderJson.rolls&quot;,&quot;href&quot;:&quot;#lootpoolbuilderjson-rolls&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootPoolBuilderJson.addItem&quot;,&quot;href&quot;:&quot;#lootpoolbuilderjson-additem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootPoolBuilderJson.addTag&quot;,&quot;href&quot;:&quot;#lootpoolbuilderjson-addtag&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;LootPoolBuilderJson.addEmpty&quot;,&quot;href&quot;:&quot;#lootpoolbuilderjson-addempty&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## getLootTable

<ApiMemberCard
  id="getloottable"
  name="getLootTable"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun getLootTable(lootTableId: String): JsonObject?
```

Returns the JSON form of an existing loot table, or `null` when the table is
not registered or the server is offline.

Reads from `server.reloadableRegistries()`, which is where loot tables live
in MC 1.21.5+, then re-encodes through [LootTable.DIRECT_CODEC].

</ApiMemberCard>

## modifyLootTable

<ApiMemberCard
  id="modifyloottable"
  name="modifyLootTable"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyLootTable(lootTableId: String, configure: LootTableModificationConfig.() -> Unit): Boolean
```

Mutates an existing loot table by reading its current JSON, applying the
configured changes, and re-registering it through [ServerDatapackManager].

Requires a running server. Returns `false` and logs a warning when the
server is offline or the loot table cannot be resolved.

</ApiMemberCard>

## LootTableModificationConfig

<ApiMemberCard
  id="loottablemodificationconfig"
  name="LootTableModificationConfig"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class LootTableModificationConfig internal constructor(private val json: JsonObject)
```

Mutation API over a loot table JSON document. The modifications are applied
directly to the underlying JSON tree; no schema validation beyond what
Minecraft's codec already does on re-registration.

### LootTableModificationConfig.pool

<ApiMemberCard
  id="loottablemodificationconfig-pool"
  name="LootTableModificationConfig.pool"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun pool(block: LootPoolBuilderJson.() -> Unit)
```

Adds a new pool built through the existing [LootPoolBuilderJson] DSL.

</ApiMemberCard>

### LootTableModificationConfig.rawPool

<ApiMemberCard
  id="loottablemodificationconfig-rawpool"
  name="LootTableModificationConfig.rawPool"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rawPool(poolJson: JsonObject)
```

Adds a raw pool JSON object as-is. Useful when migrating existing
datapack payloads.

</ApiMemberCard>

### LootTableModificationConfig.removePool

<ApiMemberCard
  id="loottablemodificationconfig-removepool"
  name="LootTableModificationConfig.removePool"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removePool(index: Int)
```

Removes a pool by zero-based index. Indices are interpreted against the
pool list as it exists at apply time, after additions and other
removals have not yet been applied.

</ApiMemberCard>

### LootTableModificationConfig.removeItem

<ApiMemberCard
  id="loottablemodificationconfig-removeitem"
  name="LootTableModificationConfig.removeItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeItem(itemId: String)
```

Removes every item entry referencing the given item id from every pool.
Tag entries (`type: minecraft:tag`) are not touched.

</ApiMemberCard>

</ApiMemberCard>

## LootPoolBuilderJson

<ApiMemberCard
  id="lootpoolbuilderjson"
  name="LootPoolBuilderJson"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class LootPoolBuilderJson internal constructor()
```

Lightweight pool builder that reuses the JSON shape produced by
[top.katton.api.datapack.LootPoolBuilder] without depending on it directly,
so the mod-API namespace stays self-contained.

### LootPoolBuilderJson.rolls

<ApiMemberCard
  id="lootpoolbuilderjson-rolls"
  name="LootPoolBuilderJson.rolls"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var rolls: Int
```

Pool roll count. Defaults to 1.

</ApiMemberCard>

### LootPoolBuilderJson.addItem

<ApiMemberCard
  id="lootpoolbuilderjson-additem"
  name="LootPoolBuilderJson.addItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addItem(itemId: String, weight: Int = 1, quality: Int = 0)
```

Adds a single item entry to this pool.

</ApiMemberCard>

### LootPoolBuilderJson.addTag

<ApiMemberCard
  id="lootpoolbuilderjson-addtag"
  name="LootPoolBuilderJson.addTag"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addTag(tagId: String, weight: Int = 1, expand: Boolean = false)
```

Adds a tag-based entry to this pool.

</ApiMemberCard>

### LootPoolBuilderJson.addEmpty

<ApiMemberCard
  id="lootpoolbuilderjson-addempty"
  name="LootPoolBuilderJson.addEmpty"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addEmpty(weight: Int = 1)
```

Adds an empty (drop-nothing) entry to this pool.

</ApiMemberCard>

</ApiMemberCard>

