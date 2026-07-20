---
title: ServerEntityCombatEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEntityCombatEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerEntityCombatEvent.kt"
>
Fabric 平台的服务端实体战斗事件。 此对象提供与实体战斗相关的事件，包括击杀、暴击和盾牌格挡。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEntityCombatEvent&quot;,&quot;href&quot;:&quot;#serverentitycombatevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onAfterKilledOtherEntity&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-onafterkilledotherentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onShieldBlock&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-onshieldblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerEntityCombatEvent

<ApiMemberCard
  id="serverentitycombatevent"
  name="ServerEntityCombatEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ServerEntityCombatEvent
```

Fabric 平台的服务端实体战斗事件。
此对象提供与实体战斗相关的事件，包括击杀、暴击和盾牌格挡。

### ServerEntityCombatEvent.onAfterKilledOtherEntity

<ApiMemberCard
  id="serverentitycombatevent-onafterkilledotherentity"
  name="ServerEntityCombatEvent.onAfterKilledOtherEntity"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterKilledOtherEntity
```

当实体击杀另一个实体之后触发。
这是一个仅通知事件，不能取消。

</ApiMemberCard>

### ServerEntityCombatEvent.onShieldBlock

<ApiMemberCard
  id="serverentitycombatevent-onshieldblock"
  name="ServerEntityCombatEvent.onShieldBlock"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onShieldBlock
```

当实体使用盾牌格挡时触发。
可用于修改被格挡的伤害量。

### 返回值

返回应被格挡的伤害量。

</ApiMemberCard>

</ApiMemberCard>

