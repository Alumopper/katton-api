---
title: ServerLivingEntityEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerLivingEntityEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerLivingEntityEvent.kt"
>
Fabric平台的服务器端生物体事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerLivingEntityEvent&quot;,&quot;href&quot;:&quot;#serverlivingentityevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingHurt&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivinghurt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAllowDamage&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onallowdamage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAfterDamage&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onafterdamage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAllowDeath&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onallowdeath&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onAfterDeath&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onafterdeath&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onLivingFall&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onlivingfall&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerLivingEntityEvent.onMobConversion&quot;,&quot;href&quot;:&quot;#serverlivingentityevent-onmobconversion&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerLivingEntityEvent

<ApiMemberCard
  id="serverlivingentityevent"
  name="ServerLivingEntityEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ServerLivingEntityEvent
```

Fabric平台的服务器端生物体事件。

该对象提供与生命实体生命周期相关的事件，包括
伤害、死亡和生物转化事件。

### ServerLivingEntityEvent.onLivingHurt

<ApiMemberCard
  id="serverlivingentityevent-onlivinghurt"
  name="ServerLivingEntityEvent.onLivingHurt"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onLivingHurt
```

当生物体受伤时触发事件。
可以取消以防止损坏。

</ApiMemberCard>

### ServerLivingEntityEvent.onAllowDamage

<ApiMemberCard
  id="serverlivingentityevent-onallowdamage"
  name="ServerLivingEntityEvent.onAllowDamage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowDamage
```

触发事件以允许或拒绝对生物体造成伤害。

### 返回值

true 允许损坏， false 取消损坏。

</ApiMemberCard>

### ServerLivingEntityEvent.onAfterDamage

<ApiMemberCard
  id="serverlivingentityevent-onafterdamage"
  name="ServerLivingEntityEvent.onAfterDamage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterDamage
```

生物受到伤害后触发的事件。

</ApiMemberCard>

### ServerLivingEntityEvent.onAllowDeath

<ApiMemberCard
  id="serverlivingentityevent-onallowdeath"
  name="ServerLivingEntityEvent.onAllowDeath"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowDeath
```

触发事件以允许或拒绝生物体死亡。

### 返回值

true 允许死亡， false 取消死亡。

</ApiMemberCard>

### ServerLivingEntityEvent.onAfterDeath

<ApiMemberCard
  id="serverlivingentityevent-onafterdeath"
  name="ServerLivingEntityEvent.onAfterDeath"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterDeath
```

生物死亡后触发的事件。

</ApiMemberCard>

### ServerLivingEntityEvent.onLivingFall

<ApiMemberCard
  id="serverlivingentityevent-onlivingfall"
  name="ServerLivingEntityEvent.onLivingFall"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onLivingFall
```

当生物体掉落时触发事件。
可以取消防止坠落损坏的处理。

</ApiMemberCard>

### ServerLivingEntityEvent.onMobConversion

<ApiMemberCard
  id="serverlivingentityevent-onmobconversion"
  name="ServerLivingEntityEvent.onMobConversion"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onMobConversion
```

当生物转换为另一种类型时触发的事件
（例如，僵尸村民治愈、猪灵僵尸化）。

</ApiMemberCard>

</ApiMemberCard>

