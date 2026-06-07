---
title: KattonRecipeModificationApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonRecipeModificationApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.mod"
  source-file="common/src/main/kotlin/top/katton/api/mod/KattonRecipeModificationApi.kt"
>
用于修改现有配方属性的配置。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;RecipeModificationConfig&quot;,&quot;href&quot;:&quot;#recipemodificationconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;modifyRecipe&quot;,&quot;href&quot;:&quot;#modifyrecipe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyRecipe&quot;,&quot;href&quot;:&quot;#modifyrecipe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getRecipe&quot;,&quot;href&quot;:&quot;#getrecipe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getRecipe&quot;,&quot;href&quot;:&quot;#getrecipe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeRecipe&quot;,&quot;href&quot;:&quot;#removerecipe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeRecipe&quot;,&quot;href&quot;:&quot;#removerecipe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## RecipeModificationConfig

<ApiMemberCard
  id="recipemodificationconfig"
  name="RecipeModificationConfig"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class RecipeModificationConfig( val recipeId: Identifier )
```

用于修改现有配方属性的配置。

这个类提供了一个流畅的API来修改现有的属性
在Minecraft的菜谱管理器中注册的菜谱。类似于KubeJS的食谱
修改系统。

### 属性

| 属性 | 说明 |
| --- | --- |
| `recipeId` | 要修改的配方的标识符 |

</ApiMemberCard>

## modifyRecipe

<ApiMemberCard
  id="modifyrecipe"
  name="modifyRecipe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyRecipe(recipeId: String, configure: RecipeModificationConfig.() -> Unit)
```

修改现有配方的属性。

此功能允许您修改已注册的配方的属性
在Minecraft的食谱管理器中。通过重新注册来应用更改
通过数据包系统修改配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 要修改的配方的标识符（例如，"minecraft:iron_ingot_from_smelting"） |
| `configure` | 用于配方修改的配置 lambda |

</ApiMemberCard>

## modifyRecipe

<ApiMemberCard
  id="modifyrecipe"
  name="modifyRecipe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyRecipe(recipeId: Identifier, configure: RecipeModificationConfig.() -> Unit)
```

修改现有配方的属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 要修改的配方的标识符 |
| `configure` | 用于配方修改的配置 lambda |

</ApiMemberCard>

## getRecipe

<ApiMemberCard
  id="getrecipe"
  name="getRecipe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getRecipe(recipeId: String): JsonObject?
```

通过标识符 JsonObject 获取配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符 |

### 返回值

配方为JsonObject，如果未找到则为 null

</ApiMemberCard>

## getRecipe

<ApiMemberCard
  id="getrecipe"
  name="getRecipe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getRecipe(recipeId: Identifier): JsonObject?
```

通过标识符 JsonObject 获取配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符 |

### 返回值

配方为JsonObject，如果未找到则为 null

</ApiMemberCard>

## removeRecipe

<ApiMemberCard
  id="removerecipe"
  name="removeRecipe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeRecipe(recipeId: String)
```

通过标识符删除配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符 |

</ApiMemberCard>

## removeRecipe

<ApiMemberCard
  id="removerecipe"
  name="removeRecipe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeRecipe(recipeId: Identifier)
```

通过标识符删除配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符 |

</ApiMemberCard>

