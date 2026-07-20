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
注册原生 Item，并支持热重载。 这是脚本中注册自定义 Item 子类的主要 API。通过该 API 注册的 Item 会进入全局 Minecraft 注册表，并具备完整的热重载能力。
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
@ApiStatus.Experimental fun registerNativeItem(id: String, registerMode: RegisterMode = RegisterMode.WORLD, configure: KattonItemProperties.() -> Unit = {}, itemFactory: (KattonItemProperties) -> Item): KattonRegistry.KattonItemEntry
```

注册原生 Item，并支持热重载。
这是脚本中注册自定义 Item 子类的主要 API。通过该 API 注册的 Item
会进入全局 Minecraft 注册表，并具备完整的热重载能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | Item 标识符，例如 "mymod:my_item"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `configure` | Item 属性配置 lambda。 |
| `itemFactory` | 用于创建 Item 实例的工厂函数。 |

### 返回值

已注册的 KattonItemEntry。

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
@ApiStatus.Experimental fun registerNativeItem(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, configure: KattonItemProperties.() -> Unit = {}, itemFactory: (KattonItemProperties) -> Item): KattonRegistry.KattonItemEntry
```

注册原生 Item，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | Item 标识符。 |
| `registerMode` | 注册模式。 |
| `configure` | Item 属性配置 lambda。 |
| `itemFactory` | 用于创建 Item 实例的工厂函数。 |

### 返回值

已注册的 KattonItemEntry。

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
@ApiStatus.Experimental fun registerNativeItem(id: String, properties: KattonItemProperties, registerMode: RegisterMode = RegisterMode.WORLD, itemFactory: (KattonItemProperties) -> Item): KattonRegistry.KattonItemEntry
```

注册带有预配置属性的原生 Item。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | Item 标识符。 |
| `properties` | 预先配置好的 Item 属性。 |
| `registerMode` | 注册模式。 |
| `itemFactory` | 用于创建 Item 实例的工厂函数。 |

### 返回值

已注册的 KattonItemEntry。

</ApiMemberCard>

