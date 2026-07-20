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
动画轨道上的变换关键帧。[time] 通常取 0.0 到 1.0。
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

只限制输入进度。采样结果会保留原始值，
因此 back、elastic、bounce 等会越界的曲线仍能保持原本形状。

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

动画轨道上的变换关键帧。[time] 通常取 0.0 到 1.0。

平移值表示方块偏移，旋转值表示角度，缩放值表示倍率。

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

仅在客户端本地执行的函数关键帧。函数回调不会通过网络序列化，
因此服务端生成的标记只能传输变换关键帧。

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

[ClientItemRenderAnimationSet] 内的一条动画轨道。

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

可播放的动画集。此集合中的所有轨道共享相同的持续时间、
延迟和循环行为。多个动画集可以同时播放并叠加。

</ApiMemberCard>

