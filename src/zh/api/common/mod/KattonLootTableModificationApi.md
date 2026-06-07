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
返回现有战利品表的 JSON 形式，或者当表未注册或服务器离线时返回 `null`。
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

返回现有战利品表的 JSON 形式，或者当该表为 `null` 时
未注册或服务器离线。

从 `server.reloadableRegistries()` 读取，这是战利品表所在的位置
在MC 1.21.5+中，然后通过[LootTable.DIRECT_CODEC]重新编码。

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

通过读取当前的 JSON 来改变现有的战利品表，应用
配置更改，并通过[ServerDatapackManager]重新注册。

需要正在运行的服务器。返回 `false` 并记录警告
服务器离线或战利品表无法解析。

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

战利品表JSON文档的突变API。修改已应用
直接到底层的JSON树；没有超出范围的模式验证
Minecraft 的编解码器已经可以重新注册。

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

添加通过现有 [LootPoolBuilderJson] DSL 构建的新池。

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

按原样添加原始池 JSON 对象。迁移现有的时很有用
数据包有效负载。

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

通过从零开始的索引删除池。指数的解释是针对
在添加和其他操作之后，应用时存在的池列表
尚未应用清除。

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

从每个池中删除引用给定物品 ID 的每个物品条目。
标签条目 (`type: minecraft:tag`) 不会被触及。

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

轻量级泳池构建器，重用由以下方式生成的 JSON 形状
[top.katton.api.datapack.LootPoolBuilder] 不直接依赖它，
因此 mod-API 命名空间保持独立。

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

池掷数。默认为 1。

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

将单个物品条目添加到该池中。

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

向该池添加基于标签的条目。

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

向此池添加一个空（不删除任何内容）条目。

</ApiMemberCard>

</ApiMemberCard>

