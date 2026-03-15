---
title: Item
outline: [2, 2]
---

<ApiDocPage
  title="Item"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/Item.kt"
>
Registers a native Item with hot-reload support.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeItem&quot;,&quot;href&quot;:&quot;#registernativeitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeItem&quot;,&quot;href&quot;:&quot;#registernativeitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeItem&quot;,&quot;href&quot;:&quot;#registernativeitem&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeItem

<ApiMemberCard
  id="registernativeitem"
  name="registerNativeItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeItem(id: String, registerMode: RegisterMode = RegisterMode.AUTO, configure: KattonItemProperties.() -> Unit = {}, itemFactory: (KattonItemProperties) -> Item): KattonRegistry.KattonItemEntry
```

Registers a native Item with hot-reload support.

This is the primary API for registering custom Item subclasses from scripts.
The item will be registered in the global Minecraft registry with full
hot-reload capability.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Item identifier (e.g., "mymod:my_item") |
| `registerMode` | Registration mode (GLOBAL, RELOADABLE, or AUTO) |
| `configure` | Configuration lambda for item properties |
| `itemFactory` | Factory function to create the Item instance |

### Returns

The registered KattonItemEntry

</ApiMemberCard>

## registerNativeItem

<ApiMemberCard
  id="registernativeitem"
  name="registerNativeItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeItem(id: Identifier, registerMode: RegisterMode = RegisterMode.AUTO, configure: KattonItemProperties.() -> Unit = {}, itemFactory: (KattonItemProperties) -> Item): KattonRegistry.KattonItemEntry
```

Registers a native Item with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Item identifier |
| `registerMode` | Registration mode |
| `configure` | Configuration lambda for item properties |
| `itemFactory` | Factory function to create the Item instance |

### Returns

The registered KattonItemEntry

</ApiMemberCard>

## registerNativeItem

<ApiMemberCard
  id="registernativeitem"
  name="registerNativeItem"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeItem(id: String, properties: KattonItemProperties, registerMode: RegisterMode = RegisterMode.AUTO, itemFactory: (KattonItemProperties) -> Item): KattonRegistry.KattonItemEntry
```

Registers a native Item with pre-configured properties.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Item identifier |
| `properties` | Pre-configured item properties |
| `registerMode` | Registration mode |
| `itemFactory` | Factory function to create the Item instance |

### Returns

The registered KattonItemEntry

</ApiMemberCard>

