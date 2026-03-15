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
Combines two nullable Components into a new Component.
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

Combines two nullable Components into a new Component.

If either Component is null, it is treated as an empty Component.

### Parameters

| Parameter | Description |
| --- | --- |
| `component` | The Component to append |

### Returns

A new Component containing both texts

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

Combines a nullable String with a nullable Component.

The string is converted to a literal Component before appending.

### Parameters

| Parameter | Description |
| --- | --- |
| `component` | The Component to append |

### Returns

A new Component containing both texts

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

Combines a nullable Component with a nullable String.

The string is converted to a literal Component and prepended to the Component.

### Parameters

| Parameter | Description |
| --- | --- |
| `string` | The string to prepend |

### Returns

A new Component containing both texts

</ApiMemberCard>

