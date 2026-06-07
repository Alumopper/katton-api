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
为玩家提供配方改进。
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

为玩家提供配方改进。

### 参数

| 参数 | 说明 |
| --- | --- |
| `players` | 目标玩家 |
| `recipes` | 获奖食谱合集 |

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

从玩家那里获取配方改进。

### 参数

| 参数 | 说明 |
| --- | --- |
| `players` | 目标玩家 |
| `recipes` | 撤销的食谱 |

</ApiMemberCard>

