---
title: ServerEntityCombatEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEntityCombatEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerEntityCombatEvent.kt"
>
NeoForge平台的服务器实体战斗事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEntityCombatEvent&quot;,&quot;href&quot;:&quot;#serverentitycombatevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onAfterKilledOtherEntity&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-onafterkilledotherentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onCriticalHit&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-oncriticalhit&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEntityCombatEvent.onShieldBlock&quot;,&quot;href&quot;:&quot;#serverentitycombatevent-onshieldblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerEntityCombatEvent

<ApiMemberCard
  id="serverentitycombatevent"
  name="ServerEntityCombatEvent"
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

NeoForge平台的服务器实体战斗事件。

该对象提供与实体战斗相关的事件，包括
致命一击、护盾格挡和实体击杀。

### ServerEntityCombatEvent.onAfterKilledOtherEntity

<ApiMemberCard
  id="serverentitycombatevent-onafterkilledotherentity"
  name="ServerEntityCombatEvent.onAfterKilledOtherEntity"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterKilledOtherEntity
```

一个实体杀死另一个实体后触发的事件。
这是一个无法取消的通知事件。

</ApiMemberCard>

### ServerEntityCombatEvent.onCriticalHit

<ApiMemberCard
  id="serverentitycombatevent-oncriticalhit"
  name="ServerEntityCombatEvent.onCriticalHit"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onCriticalHit
```

当执行致命一击时触发事件。

</ApiMemberCard>

### ServerEntityCombatEvent.onShieldBlock

<ApiMemberCard
  id="serverentitycombatevent-onshieldblock"
  name="ServerEntityCombatEvent.onShieldBlock"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onShieldBlock
```

当实体用盾牌阻挡时触发事件。
可用于修改阻挡的伤害量。

### 返回值

应该阻止的伤害量。

</ApiMemberCard>

</ApiMemberCard>

