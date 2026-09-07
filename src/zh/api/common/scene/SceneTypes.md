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
结束状态仅属于表现层，不修改服务端玩法。
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

结束状态仅属于表现层，不修改服务端玩法。

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

坐标单位为方块，角度单位为度。

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

可选择是否锁定操作；Esc 始终可以跳过正在接管镜头的过场。

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

每条轨道共享的不可变播放参数。

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

实体锚点不会加载区块。

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

此客户端所有脚本包共享预算。

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

几何坐标相对于锚点。

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
