---
title: LivingBehaviorEvent
outline: [2, 2]
---

<ApiDocPage
  title="LivingBehaviorEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/LivingBehaviorEvent.kt"
>
NeoForge平台的活体行为事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LivingBehaviorEvent&quot;,&quot;href&quot;:&quot;#livingbehaviorevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAnimalTame&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onanimaltame&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onBabySpawn&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onbabyspawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onElytraAllow&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onelytraallow&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onElytraCustom&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onelytracustom&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowSleeping&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowsleeping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onStartSleeping&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onstartsleeping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onStopSleeping&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onstopsleeping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowBed&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowbed&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowNearbyMonsters&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallownearbymonsters&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowResettingTime&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowresettingtime&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onModifySleepingDirection&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onmodifysleepingdirection&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onAllowSettingSpawn&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onallowsettingspawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onSetBedOccupationState&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onsetbedoccupationstate&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onModifyWakeUpPosition&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onmodifywakeupposition&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingBehaviorEvent.onPlayerWakeUp&quot;,&quot;href&quot;:&quot;#livingbehaviorevent-onplayerwakeup&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LivingBehaviorEvent

<ApiMemberCard
  id="livingbehaviorevent"
  name="LivingBehaviorEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

NeoForge平台的活体行为事件。

该对象提供与生物体行为相关的事件，包括
动物驯服、幼崽产卵、鞘翅飞行和睡眠。

### LivingBehaviorEvent.onAnimalTame

<ApiMemberCard
  id="livingbehaviorevent-onanimaltame"
  name="LivingBehaviorEvent.onAnimalTame"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onAnimalTame
```

驯服动物时触发的事件。
可以取消以防止驯服。

</ApiMemberCard>

### LivingBehaviorEvent.onBabySpawn

<ApiMemberCard
  id="livingbehaviorevent-onbabyspawn"
  name="LivingBehaviorEvent.onBabySpawn"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onBabySpawn
```

当婴儿实体产卵（繁殖）时触发事件。
可以取消以防止生成。

</ApiMemberCard>

### LivingBehaviorEvent.onElytraAllow

<ApiMemberCard
  id="livingbehaviorevent-onelytraallow"
  name="LivingBehaviorEvent.onElytraAllow"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onElytraAllow
```

触发事件以检查是否允许实体使用鞘翅。

### 返回值

true 表示允许使用鞘翅， false 表示拒绝。

</ApiMemberCard>

### LivingBehaviorEvent.onElytraCustom

<ApiMemberCard
  id="livingbehaviorevent-onelytracustom"
  name="LivingBehaviorEvent.onElytraCustom"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onElytraCustom
```

触发事件以提供自定义鞘翅飞行行为。

### 返回值

如果应用自定义行为，则为 true；如果使用默认行为，则为 false。

</ApiMemberCard>

### LivingBehaviorEvent.onAllowSleeping

<ApiMemberCard
  id="livingbehaviorevent-onallowsleeping"
  name="LivingBehaviorEvent.onAllowSleeping"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowSleeping
```

触发事件以检查是否允许玩家睡觉。

### 返回值

BedSleepingProblem 如果睡眠被拒绝，则为 null 以允许。

</ApiMemberCard>

### LivingBehaviorEvent.onStartSleeping

<ApiMemberCard
  id="livingbehaviorevent-onstartsleeping"
  name="LivingBehaviorEvent.onStartSleeping"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onStartSleeping
```

当玩家开始睡觉时触发事件。

</ApiMemberCard>

### LivingBehaviorEvent.onStopSleeping

<ApiMemberCard
  id="livingbehaviorevent-onstopsleeping"
  name="LivingBehaviorEvent.onStopSleeping"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onStopSleeping
```

当玩家停止睡觉时触发事件。

</ApiMemberCard>

### LivingBehaviorEvent.onAllowBed

<ApiMemberCard
  id="livingbehaviorevent-onallowbed"
  name="LivingBehaviorEvent.onAllowBed"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowBed
```

触发事件以检查是否允许玩家使用床。

### 返回值

EventResult表示检查结果。

</ApiMemberCard>

### LivingBehaviorEvent.onAllowNearbyMonsters

<ApiMemberCard
  id="livingbehaviorevent-onallownearbymonsters"
  name="LivingBehaviorEvent.onAllowNearbyMonsters"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowNearbyMonsters
```

触发事件以检查附近的怪物是否阻止睡眠。

### 返回值

EventResult 指示怪物是否应该阻止睡眠。

</ApiMemberCard>

### LivingBehaviorEvent.onAllowResettingTime

<ApiMemberCard
  id="livingbehaviorevent-onallowresettingtime"
  name="LivingBehaviorEvent.onAllowResettingTime"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowResettingTime
```

触发事件以检查睡眠后是否应重置时间。

### 返回值

true 允许时间重置， false 阻止时间重置。

</ApiMemberCard>

### LivingBehaviorEvent.onModifySleepingDirection

<ApiMemberCard
  id="livingbehaviorevent-onmodifysleepingdirection"
  name="LivingBehaviorEvent.onModifySleepingDirection"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onModifySleepingDirection
```

上床时触发事件以修改睡眠方向。

### 返回值

修改后的玩家面对的方向。

</ApiMemberCard>

### LivingBehaviorEvent.onAllowSettingSpawn

<ApiMemberCard
  id="livingbehaviorevent-onallowsettingspawn"
  name="LivingBehaviorEvent.onAllowSettingSpawn"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowSettingSpawn
```

触发事件以检查睡眠时是否应设置生成点。

### 返回值

true 允许设置生成， false 阻止设置。

</ApiMemberCard>

### LivingBehaviorEvent.onSetBedOccupationState

<ApiMemberCard
  id="livingbehaviorevent-onsetbedoccupationstate"
  name="LivingBehaviorEvent.onSetBedOccupationState"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onSetBedOccupationState
```

触发事件以设置床位占用状态。

### 返回值

如果状态已处理，则为 true；如果为默认行为，则为 false。

</ApiMemberCard>

### LivingBehaviorEvent.onModifyWakeUpPosition

<ApiMemberCard
  id="livingbehaviorevent-onmodifywakeupposition"
  name="LivingBehaviorEvent.onModifyWakeUpPosition"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onModifyWakeUpPosition
```

触发事件来修改玩家的唤醒位置。

### 返回值

修改后的Vec3唤醒位置。

</ApiMemberCard>

### LivingBehaviorEvent.onPlayerWakeUp

<ApiMemberCard
  id="livingbehaviorevent-onplayerwakeup"
  name="LivingBehaviorEvent.onPlayerWakeUp"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerWakeUp
```

当玩家从睡眠中醒来时触发事件。

</ApiMemberCard>

</ApiMemberCard>

