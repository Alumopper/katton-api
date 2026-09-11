---
title: SceneTypes
outline: [2, 2]
---

<ApiDocPage
  title="SceneTypes"
  module="Common"
  module-key="common"
  package-name="top.katton.api.scene"
  source-file="common/src/main/kotlin/top/katton/api/scene/SceneTypes.kt"
>
Completion is local; cancellation does not change server gameplay.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;EffectEndReason&quot;,&quot;href&quot;:&quot;#effectendreason&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;CameraPose&quot;,&quot;href&quot;:&quot;#camerapose&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;CameraOptions&quot;,&quot;href&quot;:&quot;#cameraoptions&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;SceneContext&quot;,&quot;href&quot;:&quot;#scenecontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EffectAnchor&quot;,&quot;href&quot;:&quot;#effectanchor&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}, {&quot;label&quot;:&quot;EffectBudgets&quot;,&quot;href&quot;:&quot;#effectbudgets&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EffectGeometry&quot;,&quot;href&quot;:&quot;#effectgeometry&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}, {&quot;label&quot;:&quot;EffectGeometry.Face&quot;,&quot;href&quot;:&quot;#effectgeometry-face&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## EffectEndReason

<ApiMemberCard
  id="effectendreason"
  name="EffectEndReason"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class EffectEndReason
```

Completion is local; cancellation does not change server gameplay.

</ApiMemberCard>

## CameraPose

<ApiMemberCard
  id="camerapose"
  name="CameraPose"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class CameraPose( val position: Vec3, val yaw: Float
```

Coordinates are blocks; angles are degrees.

</ApiMemberCard>

## CameraOptions

<ApiMemberCard
  id="cameraoptions"
  name="CameraOptions"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class CameraOptions( val lockInput: Boolean
```

Input locking is optional; Esc always skips an active cutscene.

</ApiMemberCard>

## SceneContext

<ApiMemberCard
  id="scenecontext"
  name="SceneContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class SceneContext( val origin: Vec3
```

Immutable playback parameters, shared by every track.

</ApiMemberCard>

## EffectAnchor

<ApiMemberCard
  id="effectanchor"
  name="EffectAnchor"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
sealed interface EffectAnchor
```

Entity anchors never load chunks.

</ApiMemberCard>

## EffectBudgets

<ApiMemberCard
  id="effectbudgets"
  name="EffectBudgets"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EffectBudgets( val activeEffects: Int
```

Budgets are shared across all packs on this client.

</ApiMemberCard>

## EffectGeometry

<ApiMemberCard
  id="effectgeometry"
  name="EffectGeometry"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
sealed interface EffectGeometry
```

Geometry uses local coordinates relative to its anchor.

### EffectGeometry.Face

<ApiMemberCard
  id="effectgeometry-face"
  name="EffectGeometry.Face"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class Face(val points: List<Vec3>) : EffectGeometry
```

A convex planar polygon, triangulated as a fan. / 共面凸多边形，使用扇形三角剖分。

</ApiMemberCard>

</ApiMemberCard>

