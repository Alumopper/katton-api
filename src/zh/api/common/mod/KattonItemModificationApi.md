---
title: KattonItemModificationApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonItemModificationApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.mod"
  source-file="common/src/main/kotlin/top/katton/api/mod/KattonItemModificationApi.kt"
>
用于修改现有物品属性的配置对象。 这个类提供一个流式 API，用于修改已经注册到 Minecraft 物品注册表中的物品属性。 风格上类似 KubeJS 的物品修改系统。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemModificationConfig&quot;,&quot;href&quot;:&quot;#itemmodificationconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;modifyItem&quot;,&quot;href&quot;:&quot;#modifyitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyItem&quot;,&quot;href&quot;:&quot;#modifyitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;snapshotItemComponents&quot;,&quot;href&quot;:&quot;#snapshotitemcomponents&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getItem&quot;,&quot;href&quot;:&quot;#getitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getItem&quot;,&quot;href&quot;:&quot;#getitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;itemStack&quot;,&quot;href&quot;:&quot;#itemstack&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;itemStack&quot;,&quot;href&quot;:&quot;#itemstack&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## ItemModificationConfig

<ApiMemberCard
  id="itemmodificationconfig"
  name="ItemModificationConfig"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class ItemModificationConfig( val itemId: Identifier )
```

用于修改现有物品属性的配置对象。
这个类提供一个流式 API，用于修改已经注册到 Minecraft 物品注册表中的物品属性。
风格上类似 KubeJS 的物品修改系统。

### 属性

| 属性 | 说明 |
| --- | --- |
| `itemId` | 要修改的物品标识符。 |

</ApiMemberCard>

## modifyItem

<ApiMemberCard
  id="modifyitem"
  name="modifyItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyItem(itemId: String, configure: ItemModificationConfig.() -> Unit): Item
```

修改已有物品的属性。
这个函数允许你修改已经注册到 Minecraft 物品注册表中的物品属性。
变更会作用到物品的默认组件，并影响该类型的所有 ItemStack。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 要修改的物品标识符（例如 "minecraft:diamond"）。 |
| `configure` | 物品修改配置 lambda。 |

### 返回值

返回修改后的 Item 实例。

</ApiMemberCard>

## modifyItem

<ApiMemberCard
  id="modifyitem"
  name="modifyItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyItem(itemId: Identifier, configure: ItemModificationConfig.() -> Unit): Item
```

修改已有物品的属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 要修改的物品标识符。 |
| `configure` | 物品修改配置 lambda。 |

### 返回值

返回修改后的 Item 实例。

</ApiMemberCard>

## snapshotItemComponents

<ApiMemberCard
  id="snapshotitemcomponents"
  name="snapshotItemComponents"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
internal fun snapshotItemComponents(): Map<Item, DataComponentMap>
```

Immutable component snapshot used by transactional script reload rollback.

</ApiMemberCard>

## getItem

<ApiMemberCard
  id="getitem"
  name="getItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getItem(itemId: String): Item?
```

根据标识符获取物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符。 |

### 返回值

找到时返回 Item 实例，未找到时返回 null。

</ApiMemberCard>

## getItem

<ApiMemberCard
  id="getitem"
  name="getItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getItem(itemId: Identifier): Item?
```

根据标识符获取物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符。 |

### 返回值

找到时返回 Item 实例，未找到时返回 null。

</ApiMemberCard>

## itemStack

<ApiMemberCard
  id="itemstack"
  name="itemStack"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun itemStack(itemId: String, count: Int = 1): ItemStack
```

为指定物品创建一个 ItemStack。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符。 |
| `count` | 堆叠数量。 |

### 返回值

返回创建好的 ItemStack。

</ApiMemberCard>

## itemStack

<ApiMemberCard
  id="itemstack"
  name="itemStack"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun itemStack(itemId: Identifier, count: Int = 1): ItemStack
```

为指定物品创建一个 ItemStack。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符。 |
| `count` | 堆叠数量。 |

### 返回值

返回创建好的 ItemStack。

</ApiMemberCard>

