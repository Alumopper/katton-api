---
title: SceneTimeline
outline: [2, 2]
---

<ApiDocPage
  title="SceneTimeline"
  module="Common"
  module-key="common"
  package-name="top.katton.api.scene"
  source-file="common/src/main/kotlin/top/katton/api/scene/SceneTimeline.kt"
>
A reusable scene definition. Factories run once when their track starts.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;SceneTrack&quot;,&quot;href&quot;:&quot;#scenetrack&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;SceneBuilder&quot;,&quot;href&quot;:&quot;#scenebuilder&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;SceneBuilder.parallel&quot;,&quot;href&quot;:&quot;#scenebuilder-parallel&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EffectHandle&quot;,&quot;href&quot;:&quot;#effecthandle&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}]' />

## SceneTrack

<ApiMemberCard
  id="scenetrack"
  name="SceneTrack"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
@ConsistentCopyVisibility
data class SceneTrack internal constructor( val startTick: Int, val durationTicks: Int, internal val factory: (SceneContext) -> SceneEffect, )
```

A reusable scene definition. Factories run once when their track starts.

</ApiMemberCard>

## SceneBuilder

<ApiMemberCard
  id="scenebuilder"
  name="SceneBuilder"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class SceneBuilder internal constructor()
```

Sequential by default; use parallel or at for overlapping tracks.

### SceneBuilder.parallel

<ApiMemberCard
  id="scenebuilder-parallel"
  name="SceneBuilder.parallel"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun parallel(block: ParallelSceneBuilder.() -> Unit)
```

Each direct effect starts together; nested sequential blocks form parallel branches.

</ApiMemberCard>

</ApiMemberCard>

## EffectHandle

<ApiMemberCard
  id="effecthandle"
  name="EffectHandle"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
interface EffectHandle
```

Local handle. All operations must run on the client thread.

</ApiMemberCard>

