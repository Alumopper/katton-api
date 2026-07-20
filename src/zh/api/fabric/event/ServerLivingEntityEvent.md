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
Fabric 平台的服务端生物实体事件。 此对象提供与生物实体生命周期相关的事件，包括伤害、死亡以及生物转换事件。
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

Fabric 平台的服务端生物实体事件。
此对象提供与生物实体生命周期相关的事件，包括伤害、死亡以及生物转换事件。

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

当生物实体受到伤害时触发。
可取消以阻止伤害处理。

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

当需要决定是否允许生物实体受到伤害时触发。

### 返回值

返回值允许伤害，false 表示取消。

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

当生物实体受到伤害之后触发。

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

当需要决定是否允许生物实体死亡时触发。

### 返回值

返回值允许死亡，false 表示取消。

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

当生物实体死亡之后触发。

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

当生物实体摔落时触发。
可取消以阻止后续处理。

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

当生物转换为其他类型时触发。
（例如僵尸村民治愈、疣猪兽僵尸化）。

</ApiMemberCard>

</ApiMemberCard>

