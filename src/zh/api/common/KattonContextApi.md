---
title: KattonContextApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonContextApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonContextApi.kt"
>
决定返回的 [ExecutionContext] 使用哪个位置。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;BonePositionMode&quot;,&quot;href&quot;:&quot;#bonepositionmode&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;BonePositionMode.BONE&quot;,&quot;href&quot;:&quot;#bonepositionmode-bone&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;BonePositionMode.ENTITY&quot;,&quot;href&quot;:&quot;#bonepositionmode-entity&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;BoneOrientationMode&quot;,&quot;href&quot;:&quot;#boneorientationmode&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;BoneOrientationMode.BONE&quot;,&quot;href&quot;:&quot;#boneorientationmode-bone&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;BoneOrientationMode.ENTITY&quot;,&quot;href&quot;:&quot;#boneorientationmode-entity&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;BoneOrientationMode.WORLD&quot;,&quot;href&quot;:&quot;#boneorientationmode-world&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;computeBoneWorldPos&quot;,&quot;href&quot;:&quot;#computeboneworldpos&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;createBoneExecution&quot;,&quot;href&quot;:&quot;#createboneexecution&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## BonePositionMode

<ApiMemberCard
  id="bonepositionmode"
  name="BonePositionMode"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class BonePositionMode
```

决定返回的 [ExecutionContext] 使用哪个位置。

### BonePositionMode.BONE

<ApiMemberCard
  id="bonepositionmode-bone"
  name="BonePositionMode.BONE"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
BONE,
```

骨骼的世界空间位置（实体位置 + 骨骼偏移，并按实体 yaw 旋转）。

</ApiMemberCard>

### BonePositionMode.ENTITY

<ApiMemberCard
  id="bonepositionmode-entity"
  name="BonePositionMode.ENTITY"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
ENTITY
```

实体的世界空间位置（忽略骨骼）。

</ApiMemberCard>

</ApiMemberCard>

## BoneOrientationMode

<ApiMemberCard
  id="boneorientationmode"
  name="BoneOrientationMode"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class BoneOrientationMode
```

决定返回的 [ExecutionContext] 使用哪个朝向。

### BoneOrientationMode.BONE

<ApiMemberCard
  id="boneorientationmode-bone"
  name="BoneOrientationMode.BONE"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
BONE,
```

骨骼局部旋转 + 实体旋转（近似世界空间朝向）。

</ApiMemberCard>

### BoneOrientationMode.ENTITY

<ApiMemberCard
  id="boneorientationmode-entity"
  name="BoneOrientationMode.ENTITY"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
ENTITY,
```

实体自身的 yaw/pitch。

</ApiMemberCard>

### BoneOrientationMode.WORLD

<ApiMemberCard
  id="boneorientationmode-world"
  name="BoneOrientationMode.WORLD"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
WORLD
```

默认方向 [Vec2.ZERO]，不应用旋转。

</ApiMemberCard>

</ApiMemberCard>

## computeBoneWorldPos

<ApiMemberCard
  id="computeboneworldpos"
  name="computeBoneWorldPos"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun Entity.computeBoneWorldPos(bone: ModelPart, partialTick: Float = 1.0f): Vec3
```

计算给定 [entity] 上 [ModelPart] 骨骼的世界空间位置。

骨骼偏移以像素为单位（1/16 方块），会按实体 yaw 旋转并加到实体的插值位置上。

请在动画应用之后调用（[net.minecraft.client.animation.KeyframeAnimation.apply]），
这样 [ModelPart.x]/[ModelPart.y]/[ModelPart.z] 才能反映动画姿态。

</ApiMemberCard>

## createBoneExecution

<ApiMemberCard
  id="createboneexecution"
  name="createBoneExecution"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun Entity.createBoneExecution(modelPart: ModelPart, positionMode: BonePositionMode = BonePositionMode.BONE, orientationMode: BoneOrientationMode = BoneOrientationMode.WORLD): ExecutionContext
```

Creates an [ExecutionContext] positioned at a [ModelPart] bone on an [entity].

Combines [BonePositionMode] and [BoneOrientationMode] to set the context's
`pos` and `rotation`. Use the returned [ExecutionContext] to execute commands
at the bone's world position, or read `pos` / `rotation` directly for custom effects.

On a dedicated client (multiplayer), the server reference may be unavailable;
in that case the returned context has position/rotation set but no command
execution capability.

### 参数

| 参数 | 说明 |
| --- | --- |
| `modelPart` | 直接的 [ModelPart] 引用，例如 `model.rightArm` 或 `model.head`。 |
| `positionMode` | [BonePositionMode.BONE] 或 [BonePositionMode.ENTITY]。 |
| `orientationMode` | [BoneOrientationMode.BONE]、[BoneOrientationMode.ENTITY] 或 [BoneOrientationMode.WORLD]。 |

</ApiMemberCard>

