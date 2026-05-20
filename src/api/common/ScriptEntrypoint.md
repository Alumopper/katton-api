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
Marks a top-level no-argument function as a client-side script entrypoint.
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

Marks a top-level no-argument function as a client-side script entrypoint.

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

Marks a top-level no-argument function as a server-side script entrypoint.

</ApiMemberCard>

