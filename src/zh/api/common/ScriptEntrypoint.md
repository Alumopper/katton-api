---
title: ScriptEntrypoint
outline: [2, 2]
---

<ApiDocPage
  title="ScriptEntrypoint"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ScriptEntrypoint.kt"
>
将顶级无参数函数标记为客户端脚本入口点。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ClientScriptEntrypoint&quot;,&quot;href&quot;:&quot;#clientscriptentrypoint&quot;,&quot;kind&quot;:&quot;Annotation Class&quot;,&quot;kindKey&quot;:&quot;annotation-class&quot;}, {&quot;label&quot;:&quot;ServerScriptEntrypoint&quot;,&quot;href&quot;:&quot;#serverscriptentrypoint&quot;,&quot;kind&quot;:&quot;Annotation Class&quot;,&quot;kindKey&quot;:&quot;annotation-class&quot;}]' />

## ClientScriptEntrypoint

<ApiMemberCard
  id="clientscriptentrypoint"
  name="ClientScriptEntrypoint"
  kind="Annotation Class"
  kind-key="annotation-class"
  module="Common"
  module-key="common"
>

```kotlin
@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class ClientScriptEntrypoint
```

将顶级无参数函数标记为客户端脚本入口点。

</ApiMemberCard>

## ServerScriptEntrypoint

<ApiMemberCard
  id="serverscriptentrypoint"
  name="ServerScriptEntrypoint"
  kind="Annotation Class"
  kind-key="annotation-class"
  module="Common"
  module-key="common"
>

```kotlin
@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class ServerScriptEntrypoint
```

将顶级无参数函数标记为服务器端脚本入口点。

</ApiMemberCard>

