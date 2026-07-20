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
NeoForge 平台的生物行为事件。 此对象提供与生物实体行为相关的事件，包括驯服动物、生成幼体、鞘翅飞行和睡眠。
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

NeoForge 平台的生物行为事件。
此对象提供与生物实体行为相关的事件，包括驯服动物、生成幼体、鞘翅飞行和睡眠。

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

当动物正在被驯服时触发。
可取消以阻止驯服。

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

当幼体生成（繁殖）时触发。
可取消以阻止生成。

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

用于检查实体是否允许使用鞘翅。

### 返回值

返回 true 以允许使用鞘翅，返回 false 以拒绝。

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

用于提供自定义的鞘翅飞行行为。

### 返回值

如果应用了自定义行为返回 true，否则返回 false 使用默认行为。

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

用于检查玩家是否允许睡觉。

### 返回值

如果不允许睡觉则返回非 null，返回 null 表示允许睡觉。

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

当玩家开始睡觉时触发。

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

当玩家停止睡觉时触发。

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

用于检查玩家是否允许使用床。

### 返回值

返回检查结果。

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

用于检查附近怪物是否会阻止睡觉。

### 返回值

返回是否应由怪物阻止睡觉。

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

用于检查睡觉后是否应重置时间。

### 返回值

返回 true 以允许重置时间，返回 false 以阻止。

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

用于修改进入床时玩家的朝向。

### 返回值

返回修改后的玩家朝向。

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

用于检查睡觉时是否应设置重生点。

### 返回值

返回 true 以允许设置重生点，返回 false 以阻止。

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

用于设置床的占用状态。

### 返回值

如果状态已处理则返回 true，否则使用默认行为。

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

用于修改玩家醒来的位置。

### 返回值

返回修改后的 Vec3 醒来位置。

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

当玩家从睡眠中醒来时触发。

</ApiMemberCard>

</ApiMemberCard>

