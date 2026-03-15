---
title: KattonRecipeApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonRecipeApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonRecipeApi.kt"
>
Give recipe advancements to players.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;giveRecipes&quot;,&quot;href&quot;:&quot;#giverecipes&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;takeRecipes&quot;,&quot;href&quot;:&quot;#takerecipes&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## giveRecipes

<ApiMemberCard
  id="giverecipes"
  name="giveRecipes"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun giveRecipes(players: Collection<ServerPlayer>, recipes: Collection<RecipeHolder<*>>)
```

Give recipe advancements to players.

### Parameters

| Parameter | Description |
| --- | --- |
| `players` | target players |
| `recipes` | collection of recipes to award |

</ApiMemberCard>

## takeRecipes

<ApiMemberCard
  id="takerecipes"
  name="takeRecipes"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun takeRecipes(players: Collection<ServerPlayer>, recipes: Collection<RecipeHolder<*>>)
```

Take recipe advancements from players.

### Parameters

| Parameter | Description |
| --- | --- |
| `players` | target players |
| `recipes` | recipes to revoke |

</ApiMemberCard>

