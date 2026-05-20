---
title: Recipes
outline: [2, 2]
---

<ApiDocPage
  title="Recipes"
  module="Common"
  module-key="common"
  package-name="top.katton.api.datapack"
  source-file="common/src/main/kotlin/top/katton/api/datapack/Recipes.kt"
>
Generated from Kotlin KDoc in `common/src/main/kotlin/top/katton/api/datapack/Recipes.kt`.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;IngredientSpec&quot;,&quot;href&quot;:&quot;#ingredientspec&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;IngredientSpec.toJson&quot;,&quot;href&quot;:&quot;#ingredientspec-tojson&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## IngredientSpec

<ApiMemberCard
  id="ingredientspec"
  name="IngredientSpec"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class IngredientSpec(val id: Identifier, val isTag: Boolean)
```

### IngredientSpec.toJson

<ApiMemberCard
  id="ingredientspec-tojson"
  name="IngredientSpec.toJson"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun toJson(): com.google.gson.JsonElement
```

Returns the JSON representation of this ingredient.

Minecraft 1.21.5+ uses `HolderSet<Item>` for ingredients, which serializes as:
- Plain item: `"minecraft:diamond"` (string primitive)
- Tag reference: `"#minecraft:planks"` (string primitive with `#` prefix)

The OLD format `{"item": "..."}` and `{"tag": "..."}` is no longer accepted.

</ApiMemberCard>

</ApiMemberCard>

