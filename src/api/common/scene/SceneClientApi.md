---
title: SceneClientApi
outline: [2, 2]
---

<ApiDocPage
  title="SceneClientApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.scene"
  source-file="common/src/main/kotlin/top/katton/api/scene/SceneClientApi.kt"
>
Register a client definition, owned by the current script. Version defaults to the script pack's code hash.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerClientScene&quot;,&quot;href&quot;:&quot;#registerclientscene&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;unregisterClientScene&quot;,&quot;href&quot;:&quot;#unregisterclientscene&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playClientScene&quot;,&quot;href&quot;:&quot;#playclientscene&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playClientEffect&quot;,&quot;href&quot;:&quot;#playclienteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playCameraPath&quot;,&quot;href&quot;:&quot;#playcamerapath&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;followCamera&quot;,&quot;href&quot;:&quot;#followcamera&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;shakeCamera&quot;,&quot;href&quot;:&quot;#shakecamera&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;transitionCameraFov&quot;,&quot;href&quot;:&quot;#transitioncamerafov&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setClientEffectBudgets&quot;,&quot;href&quot;:&quot;#setclienteffectbudgets&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerClientScene

<ApiMemberCard
  id="registerclientscene"
  name="registerClientScene"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientScene(id: String, revision: String = ScriptExecutionContext.currentScriptRevision() ?: "1", block: SceneBuilder.() -> Unit)
```

Register a client definition, owned by the current script. Version defaults to the script pack's code hash.

</ApiMemberCard>

## unregisterClientScene

<ApiMemberCard
  id="unregisterclientscene"
  name="unregisterClientScene"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun unregisterClientScene(id: String): Boolean
```

Stop instances and unregister this definition.

</ApiMemberCard>

## playClientScene

<ApiMemberCard
  id="playclientscene"
  name="playClientScene"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playClientScene(id: String, context: SceneContext = SceneContext()): SceneHandle
```

Play locally on the client thread.

</ApiMemberCard>

## playClientEffect

<ApiMemberCard
  id="playclienteffect"
  name="playClientEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playClientEffect(effect: SceneEffect, context: SceneContext = SceneContext()): EffectHandle
```

Every standalone effect uses the same ownership and cancellation rules as scenes.

</ApiMemberCard>

## playCameraPath

<ApiMemberCard
  id="playcamerapath"
  name="playCameraPath"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playCameraPath(keyframes: List<CameraKeyframe>, options: CameraOptions = CameraOptions()): EffectHandle
```

Play a world-space camera path; keyframe times are ticks and angles are degrees.

</ApiMemberCard>

## followCamera

<ApiMemberCard
  id="followcamera"
  name="followCamera"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun followCamera(anchor: EffectAnchor, durationTicks: Int, options: CameraOptions = CameraOptions(), context: SceneContext = SceneContext()): EffectHandle
```

Follow an anchor until the duration expires or the target becomes unavailable.

</ApiMemberCard>

## shakeCamera

<ApiMemberCard
  id="shakecamera"
  name="shakeCamera"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun shakeCamera(durationTicks: Int = 10, strength: Float = 2f, frequency: Float = 0.7f): EffectHandle
```

Add a decaying angular shake without locking player input.

</ApiMemberCard>

## transitionCameraFov

<ApiMemberCard
  id="transitioncamerafov"
  name="transitionCameraFov"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun transitionCameraFov(from: Float, to: Float, durationTicks: Int, easing: SceneEasing = SceneEasing.SMOOTH): EffectHandle
```

Interpolate the rendered FOV in degrees without changing saved video options.

</ApiMemberCard>

## setClientEffectBudgets

<ApiMemberCard
  id="setclienteffectbudgets"
  name="setClientEffectBudgets"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setClientEffectBudgets(budgets: EffectBudgets)
```

Set shared client limits for active effects, emitted particles, and geometry vertices.

</ApiMemberCard>
