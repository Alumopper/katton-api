---
title: KattonComponentApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonComponentApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonComponentApi.kt"
>
将两个可空的 Component 合并为一个新的 Component。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;plus&quot;,&quot;href&quot;:&quot;#plus&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;plus&quot;,&quot;href&quot;:&quot;#plus&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;plus&quot;,&quot;href&quot;:&quot;#plus&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## plus

<ApiMemberCard
  id="plus"
  name="plus"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Component?.plus(component: Component?): Component
```

将两个可空的 Component 合并为一个新的 Component。

如果任意一侧为 null，就把它当作空 Component 处理。

### 参数

| 参数 | 说明 |
| --- | --- |
| `component` | 要追加的 Component。 |

### 返回值

包含两段文本的新 Component。

</ApiMemberCard>

## plus

<ApiMemberCard
  id="plus"
  name="plus"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun String?.plus(component: Component?): Component
```

将可空字符串与可空 Component 组合。

字符串会先转换成字面量 Component，再追加到结果中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `component` | 要追加的 Component。 |

### 返回值

包含两段文本的新 Component。

</ApiMemberCard>

## plus

<ApiMemberCard
  id="plus"
  name="plus"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Component?.plus(string: String?): Component
```

将可空 Component 与可空字符串组合。

字符串会先转换成字面量 Component，再作为前缀加到 Component 前面。

### 参数

| 参数 | 说明 |
| --- | --- |
| `string` | 要作为前缀的字符串。 |

### 返回值

包含两段文本的新 Component。

</ApiMemberCard>

