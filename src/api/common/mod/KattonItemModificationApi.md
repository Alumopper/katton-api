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
Configuration for modifying existing item properties.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemModificationConfig&quot;,&quot;href&quot;:&quot;#itemmodificationconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;modifyItem&quot;,&quot;href&quot;:&quot;#modifyitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyItem&quot;,&quot;href&quot;:&quot;#modifyitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getItem&quot;,&quot;href&quot;:&quot;#getitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getItem&quot;,&quot;href&quot;:&quot;#getitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;itemStack&quot;,&quot;href&quot;:&quot;#itemstack&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;itemStack&quot;,&quot;href&quot;:&quot;#itemstack&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

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

Configuration for modifying existing item properties.

This class provides a fluent API for modifying properties of existing
items registered in Minecraft's item registry. Similar to KubeJS's item
modification system.

### Properties

| Property | Description |
| --- | --- |
| `itemId` | The identifier of the item to modify |

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

Modifies an existing item's properties.

This function allows you to modify properties of items already registered
in Minecraft's item registry. Changes are applied to the item's default
components and will affect all ItemStacks of that type.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemId` | The identifier of the item to modify (e.g., "minecraft:diamond") |
| `configure` | Configuration lambda for item modifications |

### Returns

The modified Item instance

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

Modifies an existing item's properties.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemId` | The identifier of the item to modify |
| `configure` | Configuration lambda for item modifications |

### Returns

The modified Item instance

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

Gets an item by its identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemId` | The item identifier |

### Returns

The Item instance, or null if not found

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

Gets an item by its identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemId` | The item identifier |

### Returns

The Item instance, or null if not found

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

Creates an ItemStack for an item.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemId` | The item identifier |
| `count` | The stack size |

### Returns

The created ItemStack

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

Creates an ItemStack for an item.

### Parameters

| Parameter | Description |
| --- | --- |
| `itemId` | The item identifier |
| `count` | The stack size |

### Returns

The created ItemStack

</ApiMemberCard>

