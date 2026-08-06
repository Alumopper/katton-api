---
title: KattonDependencyApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonDependencyApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonDependencyApi.kt"
>
Script-facing access to optional mod and plugin dependency state.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;dependencies&quot;,&quot;href&quot;:&quot;#dependencies&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;dependencies.isLoaded&quot;,&quot;href&quot;:&quot;#dependencies-isloaded&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dependencies.version&quot;,&quot;href&quot;:&quot;#dependencies-version&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dependencies.require&quot;,&quot;href&quot;:&quot;#dependencies-require&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## dependencies

<ApiMemberCard
  id="dependencies"
  name="dependencies"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object dependencies
```

Script-facing access to optional mod and plugin dependency state.

### dependencies.isLoaded

<ApiMemberCard
  id="dependencies-isloaded"
  name="dependencies.isLoaded"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun isLoaded(id: String): Boolean
```

Returns whether the current platform dependency is installed and enabled.

</ApiMemberCard>

### dependencies.version

<ApiMemberCard
  id="dependencies-version"
  name="dependencies.version"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun version(id: String): String?
```

Returns the installed dependency version, or `null` when the dependency is unavailable.

</ApiMemberCard>

### dependencies.require

<ApiMemberCard
  id="dependencies-require"
  name="dependencies.require"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun require(id: String)
```

Returns the installed and enabled dependency.

### 异常

| 异常 | 说明 |
| --- | --- |
| `IllegalStateException` | when the dependency is not installed or enabled |

</ApiMemberCard>

</ApiMemberCard>

