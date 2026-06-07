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
确定返回的 [ExecutionContext] 使用哪个位置。
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

确定返回的 [ExecutionContext] 使用哪个位置。

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

骨骼世界空间位置（实体位置+骨骼偏移，按偏航旋转）。

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

实体世界空间位置（忽略骨骼）。

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

确定返回的 [ExecutionContext] 使用哪个朝向。

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

骨骼的局部旋转+实体旋转（近似世界空间面向）。

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

实体的自然偏航/俯仰。

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

默认值 — [Vec2.ZERO]（不旋转）。

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

计算给定 [entity] 上[ModelPart]骨骼的世界空间位置。

骨骼偏移（像素，1/16 块）通过实体的偏航旋转并添加
到实体的插值位置。

调用AFTER动画已应用（[net.minecraft.client.animation.KeyframeAnimation.apply]），
以便 [ModelPart.x]/[ModelPart.y]/[ModelPart.z] 反映动画姿势。

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

创建一个位于 [entity] 上的 [ModelPart] 骨骼处的 [ExecutionContext]。

组合[BonePositionMode]和[BoneOrientationMode]来设置上下文
`pos`和`rotation`。使用返回的[ExecutionContext]执行命令
在骨骼的世界位置，或直接读取 `pos` / `rotation` 以获得自定义效果。

在专用客户端（多人游戏）上，服务器引用可能不可用 -
在这种情况下，返回的上下文已设置位置/旋转但没有命令
执行能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `modelPart` | 直接[ModelPart]参考（例如`model.rightArm`、`model.head`） |
| `positionMode` | [BonePositionMode.BONE] 或 [BonePositionMode.ENTITY] |
| `orientationMode` | [BoneOrientationMode.BONE]、[BoneOrientationMode.ENTITY]或[BoneOrientationMode.WORLD] |

</ApiMemberCard>

