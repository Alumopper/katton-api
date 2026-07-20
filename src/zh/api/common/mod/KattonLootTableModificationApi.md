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
返回现有战利品表的 JSON 形式；如果战利品表未注册或服务器离线，则返回 `null`。 这里会从 `server.reloadableRegistries()` 读取，因为从 MC 1.21.5+ 开始，战利品表就存放在那里， 然后再通过 [LootTable.DIRECT_CODEC] 重新编码。
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

返回现有战利品表的 JSON 形式；如果战利品表未注册或服务器离线，则返回 `null`。
这里会从 `server.reloadableRegistries()` 读取，因为从 MC 1.21.5+ 开始，战利品表就存放在那里，
然后再通过 [LootTable.DIRECT_CODEC] 重新编码。

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

通过读取当前 JSON、应用配置修改，再经由 [ServerDatapackManager] 重新注册的方式来修改现有战利品表。
需要服务器运行；如果服务器离线或战利品表无法解析，则返回 `false` 并记录警告。

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

作用于战利品表 JSON 文档的修改 API。
修改会直接应用到底层 JSON 树；除了 Minecraft 在重新注册时通过 codec 做的校验外，
不再额外做 schema 校验。

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

添加一个通过现有 [LootPoolBuilderJson] DSL 构建的新池。

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

直接按原样添加一个原始池 JSON 对象。适合迁移现有数据包内容时使用。

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

按从零开始的索引移除一个池。索引会以应用时的池列表为准，
即在新增内容和其他移除操作尚未生效之前的状态。

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

从所有池中移除引用指定物品 ID 的所有物品条目。
`type: minecraft:tag` 的标签条目不会受影响。

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

轻量级池构建器，复用 [top.katton.api.datapack.LootPoolBuilder] 生成的 JSON 结构，
但不直接依赖它，从而让 mod-API 命名空间保持自包含。

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

池的抽取次数。默认值为 1。

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

向当前池添加一个物品条目。

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

向当前池添加一个基于标签的条目。

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

向当前池添加一个空条目（不掉落任何东西）。

</ApiMemberCard>

</ApiMemberCard>

