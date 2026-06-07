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
用于修改现有物品属性的配置。
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

用于修改现有物品属性的配置。

这个类提供了一个流畅的API来修改现有的属性
在Minecraft的物品注册表中注册的物品。类似于 KubeJS 的物品
修改系统。

### 属性

| 属性 | 说明 |
| --- | --- |
| `itemId` | 要修改的物品的标识符 |

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

修改现有物品的属性。

此功能允许您修改已注册物品的属性
在Minecraft的物品注册表中。更改将应用到物品的默认值
组件并将影响该类型的所有 ItemStacks。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 要修改的物品的标识符（例如，"minecraft:diamond"） |
| `configure` | 用于物品修改的配置 lambda |

### 返回值

修改后的Item实例

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

修改现有物品的属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 要修改的物品的标识符 |
| `configure` | 用于物品修改的配置 lambda |

### 返回值

修改后的Item实例

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

通过其标识符获取物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符 |

### 返回值

Item 实例，如果未找到则为 null

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

通过其标识符获取物品。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符 |

### 返回值

Item 实例，如果未找到则为 null

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

为某个物品创建一个 ItemStack。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符 |
| `count` | 堆栈大小 |

### 返回值

创建的ItemStack

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

为某个物品创建一个 ItemStack。

### 参数

| 参数 | 说明 |
| --- | --- |
| `itemId` | 物品标识符 |
| `count` | 堆栈大小 |

### 返回值

创建的ItemStack

</ApiMemberCard>

