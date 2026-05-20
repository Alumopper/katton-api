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
Determines which position the returned [ExecutionContext] uses.
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

Determines which position the returned [ExecutionContext] uses.

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

Bone world-space position (entity position + bone offset, rotated by yaw).

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

Entity world-space position (ignoring the bone).

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

Determines which facing direction the returned [ExecutionContext] uses.

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

Bone's local rotation + entity rotation (approximate world-space facing).

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

Entity's natural yaw/pitch.

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

Default — [Vec2.ZERO] (no rotation).

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

Computes the world-space position of a [ModelPart] bone on the given [entity].

The bone offset (pixels, 1/16 block) is rotated by the entity's yaw and added
to the entity's interpolated position.

Call AFTER animations have been applied ([net.minecraft.client.animation.KeyframeAnimation.apply]),
so that [ModelPart.x]/[ModelPart.y]/[ModelPart.z] reflect the animated pose.

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

On a dedicated client (multiplayer), the server reference may be unavailable —
in that case the returned context has position/rotation set but no command
execution capability.

### Parameters

| Parameter | Description |
| --- | --- |
| `modelPart` | direct [ModelPart] reference (e.g. `model.rightArm`, `model.head`) |
| `positionMode` | [BonePositionMode.BONE] or [BonePositionMode.ENTITY] |
| `orientationMode` | [BoneOrientationMode.BONE], [BoneOrientationMode.ENTITY], or [BoneOrientationMode.WORLD] |

</ApiMemberCard>

