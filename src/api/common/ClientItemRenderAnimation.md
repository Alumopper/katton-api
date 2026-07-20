---
title: ClientItemRenderAnimation
outline: [2, 2]
---

<ApiDocPage
  title="ClientItemRenderAnimation"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ClientItemRenderAnimation.kt"
>
A transform keyframe on an animation track. [time] is usually 0.0 to 1.0.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ClientItemRenderEasing&quot;,&quot;href&quot;:&quot;#clientitemrendereasing&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;ClientItemRenderEasing.apply&quot;,&quot;href&quot;:&quot;#clientitemrendereasing-apply&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ClientItemRenderAnimationKeyframe&quot;,&quot;href&quot;:&quot;#clientitemrenderanimationkeyframe&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientItemRenderFunctionKeyframe&quot;,&quot;href&quot;:&quot;#clientitemrenderfunctionkeyframe&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientItemRenderAnimation&quot;,&quot;href&quot;:&quot;#clientitemrenderanimation&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientItemRenderAnimationSet&quot;,&quot;href&quot;:&quot;#clientitemrenderanimationset&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ClientItemRenderEasing

<ApiMemberCard
  id="clientitemrendereasing"
  name="ClientItemRenderEasing"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class ClientItemRenderEasing(private val sampler: (Float) -> Float)
```

### ClientItemRenderEasing.apply

<ApiMemberCard
  id="clientitemrendereasing-apply"
  name="ClientItemRenderEasing.apply"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun apply(progress: Float): Float
```

Clamp only the input progress. The sampled value is intentionally raw so
overshooting curves such as back, elastic, or bounce keep their shape.

</ApiMemberCard>

</ApiMemberCard>

## ClientItemRenderAnimationKeyframe

<ApiMemberCard
  id="clientitemrenderanimationkeyframe"
  name="ClientItemRenderAnimationKeyframe"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientItemRenderAnimationKeyframe( override val time: Float, val value: Vec3, val easing: ClientItemRenderEasing
```

A transform keyframe on an animation track. [time] is usually 0.0 to 1.0.

Translation values are block offsets, rotation values are degrees, and scale
values are multipliers.

</ApiMemberCard>

## ClientItemRenderFunctionKeyframe

<ApiMemberCard
  id="clientitemrenderfunctionkeyframe"
  name="ClientItemRenderFunctionKeyframe"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientItemRenderFunctionKeyframe( override val time: Float, val function: (ClientItemRenderMarker) -> Unit ) : ClientItemRenderKeyframe
```

A client-local function keyframe. Function callbacks are not serialized over
the network; server-spawned markers can only transmit transform keyframes.

</ApiMemberCard>

## ClientItemRenderAnimation

<ApiMemberCard
  id="clientitemrenderanimation"
  name="ClientItemRenderAnimation"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientItemRenderAnimation( val target: ClientItemRenderAnimationTarget, val mode: ClientItemRenderAnimationMode
```

One animation track inside a [ClientItemRenderAnimationSet].

</ApiMemberCard>

## ClientItemRenderAnimationSet

<ApiMemberCard
  id="clientitemrenderanimationset"
  name="ClientItemRenderAnimationSet"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientItemRenderAnimationSet( val animations: List<ClientItemRenderAnimation>, val durationTicks: Int, val delayTicks: Int
```

A playable animation set. All tracks in this set share the same duration,
delay, and loop behavior. Multiple sets can be played together and stacked.

</ApiMemberCard>

