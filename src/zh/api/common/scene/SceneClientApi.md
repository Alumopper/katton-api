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
注册归属于当前脚本的客户端定义；版本默认使用脚本包代码哈希。
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

注册归属于当前脚本的客户端定义；版本默认使用脚本包代码哈希。

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

停止此定义的实例并注销定义。

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

在客户端线程本地播放。

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

独立效果与演出共用归属和取消规则。

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

播放世界坐标镜头路径；关键帧时间使用 tick，角度使用度。

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

跟随锚点，直到时长结束或目标失效。

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

叠加随时间衰减的角度震动，不锁定玩家输入。

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

以度为单位插值渲染 FOV，不修改持久化视频设置。

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

设置客户端共享的活动效果、粒子发射和几何顶点预算。

</ApiMemberCard>
