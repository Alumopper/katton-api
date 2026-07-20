---
title: ServerLivingEntityEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerLivingEntityEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerLivingEntityEvent.kt"
>
NeoForge 平台的服务端生物实体事件。 此对象提供与生物实体生命周期相关的事件，包括受伤、死亡、掉落物、坠落、跳跃和生物转化。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerLivingEntityEvent&quot;,&quot;href&quot;:&quot;#serverlivingentityevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingHurt&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivinghurt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAllowDamage&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onallowdamage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAfterDamage&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onafterdamage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAllowDeath&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onallowdeath&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAfterDeath&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onafterdeath&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingDrops&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivingdrops&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingFall&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivingfall&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingJump&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivingjump&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onMobConversion&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onmobconversion&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerLivingEntityEvent

<ApiMemberCard
  id="serverlivingentityevent"
  name="ServerLivingEntityEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@EventBusSubscriber( modid = top.katton.Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

NeoForge 平台的服务端生物实体事件。
此对象提供与生物实体生命周期相关的事件，包括受伤、死亡、掉落物、坠落、跳跃和生物转化。

### ServerLivingEntityEvent.onLivingHurt

<ApiMemberCard
  id="serverlivingentityevent-onlivinghurt"
  name="ServerLivingEntityEvent.onLivingHurt"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onLivingHurt
```

当生物实体受到伤害时触发。
可取消以阻止伤害。

</ApiMemberCard>

### ServerLivingEntityEvent.onAllowDamage

<ApiMemberCard
  id="serverlivingentityevent-onallowdamage"
  name="ServerLivingEntityEvent.onAllowDamage"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowDamage
```

用于允许或拒绝对生物实体造成伤害。

### 返回值

返回 true 以允许伤害，返回 false 以取消伤害。

</ApiMemberCard>

### ServerLivingEntityEvent.onAfterDamage

<ApiMemberCard
  id="serverlivingentityevent-onafterdamage"
  name="ServerLivingEntityEvent.onAfterDamage"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterDamage
```

当生物实体受到伤害后触发。

</ApiMemberCard>

### ServerLivingEntityEvent.onAllowDeath

<ApiMemberCard
  id="serverlivingentityevent-onallowdeath"
  name="ServerLivingEntityEvent.onAllowDeath"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowDeath
```

用于允许或拒绝生物实体死亡。

### 返回值

返回 true 以允许死亡，返回 false 以取消死亡。

</ApiMemberCard>

### ServerLivingEntityEvent.onAfterDeath

<ApiMemberCard
  id="serverlivingentityevent-onafterdeath"
  name="ServerLivingEntityEvent.onAfterDeath"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterDeath
```

当生物实体死亡后触发。

</ApiMemberCard>

### ServerLivingEntityEvent.onLivingDrops

<ApiMemberCard
  id="serverlivingentityevent-onlivingdrops"
  name="ServerLivingEntityEvent.onLivingDrops"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onLivingDrops
```

当生物实体死亡并掉落物品时触发。
可取消以阻止掉落。

</ApiMemberCard>

### ServerLivingEntityEvent.onLivingFall

<ApiMemberCard
  id="serverlivingentityevent-onlivingfall"
  name="ServerLivingEntityEvent.onLivingFall"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onLivingFall
```

当生物实体坠落时触发。
可取消以阻止坠落伤害处理。

</ApiMemberCard>

### ServerLivingEntityEvent.onLivingJump

<ApiMemberCard
  id="serverlivingentityevent-onlivingjump"
  name="ServerLivingEntityEvent.onLivingJump"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onLivingJump
```

当生物实体跳跃时触发。

</ApiMemberCard>

### ServerLivingEntityEvent.onMobConversion

<ApiMemberCard
  id="serverlivingentityevent-onmobconversion"
  name="ServerLivingEntityEvent.onMobConversion"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onMobConversion
```

当生物转换为其他类型时触发。
例如僵尸村民治愈或猪灵僵尸化。

</ApiMemberCard>

</ApiMemberCard>

