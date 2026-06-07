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
由`common/src/main/kotlin/top/katton/api/datapack/Recipes.kt`中的KotlinKDoc生成。
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

返回该成分的 JSON 表示形式。

Minecraft 1.21.5+ 使用`HolderSet<Item>`作为成分，序列化为：
- 普通物品：`"minecraft:diamond"`（字符串基元）
- 标签参考：`"#minecraft:planks"`（带有`#`前缀的字符串基元）

不再接受OLD格式`{"item": "..."}`和`{"tag": "..."}`。

</ApiMemberCard>

</ApiMemberCard>

