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
Fabric平台的服务器实体战斗事件。
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

Fabric平台的服务器实体战斗事件。

该对象提供与实体战斗相关的事件，包括
实体击杀、暴击和护盾格挡。

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

一个实体杀死另一个实体后触发的事件。
这是一个无法取消的通知事件。

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

当实体用盾牌阻挡时触发事件。
可用于修改阻挡的伤害量。

### 返回值

应该阻止的伤害量。

</ApiMemberCard>

</ApiMemberCard>

