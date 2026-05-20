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
Configuration for modifying existing recipe properties.
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

Configuration for modifying existing recipe properties.

This class provides a fluent API for modifying properties of existing
recipes registered in Minecraft's recipe manager. Similar to KubeJS's recipe
modification system.

### Properties

| Property | Description |
| --- | --- |
| `recipeId` | The identifier of the recipe to modify |

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

Modifies an existing recipe's properties.

This function allows you to modify properties of recipes already registered
in Minecraft's recipe manager. Changes are applied by re-registering the
modified recipe through the datapack system.

### Parameters

| Parameter | Description |
| --- | --- |
| `recipeId` | The identifier of the recipe to modify (e.g., "minecraft:iron_ingot_from_smelting") |
| `configure` | Configuration lambda for recipe modifications |

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

Modifies an existing recipe's properties.

### Parameters

| Parameter | Description |
| --- | --- |
| `recipeId` | The identifier of the recipe to modify |
| `configure` | Configuration lambda for recipe modifications |

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

Gets a recipe by its identifier as a JsonObject.

### Parameters

| Parameter | Description |
| --- | --- |
| `recipeId` | The recipe identifier |

### Returns

The recipe as JsonObject, or null if not found

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

Gets a recipe by its identifier as a JsonObject.

### Parameters

| Parameter | Description |
| --- | --- |
| `recipeId` | The recipe identifier |

### Returns

The recipe as JsonObject, or null if not found

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

Removes a recipe by its identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `recipeId` | The recipe identifier |

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

Removes a recipe by its identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `recipeId` | The recipe identifier |

</ApiMemberCard>

