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
用于修改现有配方属性的配置对象。 这个类提供一个流式 API，用于修改已经注册到 Minecraft 配方管理器中的配方属性。 风格上类似 KubeJS 的配方修改系统。
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

用于修改现有配方属性的配置对象。
这个类提供一个流式 API，用于修改已经注册到 Minecraft 配方管理器中的配方属性。
风格上类似 KubeJS 的配方修改系统。

### 属性

| 属性 | 说明 |
| --- | --- |
| `recipeId` | 要修改的配方标识符。 |

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

修改已有配方的属性。
这个函数允许你修改已经注册到 Minecraft 配方管理器中的配方属性。
变更会通过数据包系统重新注册修改后的配方来应用。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 要修改的配方标识符（例如 "minecraft:iron_ingot_from_smelting"）。 |
| `configure` | 配方修改配置 lambda。 |

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

修改已有配方的属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 要修改的配方标识符。 |
| `configure` | 配方修改配置 lambda。 |

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

根据标识符获取配方，并以 JsonObject 形式返回。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符。 |

### 返回值

找到时返回配方的 JsonObject，未找到时返回 null。

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

根据标识符获取配方，并以 JsonObject 形式返回。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符。 |

### 返回值

找到时返回配方的 JsonObject，未找到时返回 null。

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

根据标识符移除配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符。 |

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

根据标识符移除配方。

### 参数

| 参数 | 说明 |
| --- | --- |
| `recipeId` | 配方标识符。 |

</ApiMemberCard>

