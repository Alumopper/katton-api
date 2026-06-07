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
注册具有热重载支持的本机物品。
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

注册具有热重载支持的本机物品。

这是从脚本注册自定义 Item 子类的主要 API。
该物品将在全局 Minecraft 注册表中注册，并具有完整的
热重载能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 物品标识符（例如，"mymod:my_item"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `configure` | 物品属性的配置 lambda |
| `itemFactory` | 用于创建 Item 实例的工厂函数 |

### 返回值

已注册KattonItemEntry

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

注册具有热重载支持的本机物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 物品标识符 |
| `registerMode` | 注册模式 |
| `configure` | 物品属性的配置 lambda |
| `itemFactory` | 用于创建 Item 实例的工厂函数 |

### 返回值

已注册KattonItemEntry

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

注册具有预配置属性的本机物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 物品标识符 |
| `properties` | 预配置物品属性 |
| `registerMode` | 注册模式 |
| `itemFactory` | 用于创建 Item 实例的工厂函数 |

### 返回值

已注册KattonItemEntry

</ApiMemberCard>

