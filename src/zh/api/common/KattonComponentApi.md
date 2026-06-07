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
将两个可为空的组件组合成一个新组件。
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

将两个可为空的组件组合成一个新组件。

如果任一组件为 null，则将其视为空组件。

### 参数

| 参数 | 说明 |
| --- | --- |
| `component` | 要附加的组件 |

### 返回值

包含两个文本的新组件

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

将可为空的字符串与可为空的组件组合。

在附加之前，字符串会被转换为文字组件。

### 参数

| 参数 | 说明 |
| --- | --- |
| `component` | 要附加的组件 |

### 返回值

包含两个文本的新组件

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

将可为空的组件与可为空的字符串组合。

该字符串将转换为文字组件并添加到组件前面。

### 参数

| 参数 | 说明 |
| --- | --- |
| `string` | 要添加到前面的字符串 |

### 返回值

包含两个文本的新组件

</ApiMemberCard>

