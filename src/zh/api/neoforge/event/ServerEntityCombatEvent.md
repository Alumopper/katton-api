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
NeoForge 平台的服务端实体战斗事件。 此对象提供与实体战斗相关的事件，包括暴击、盾牌格挡和击杀。
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

NeoForge 平台的服务端实体战斗事件。
此对象提供与实体战斗相关的事件，包括暴击、盾牌格挡和击杀。

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

当一个实体击杀另一个实体后触发。
这是一个通知事件，不能取消。

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

当发生暴击时触发。

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

当实体使用盾牌格挡时触发。
可用于修改格挡的伤害量。

### 返回值

应当被格挡的伤害量。

</ApiMemberCard>

</ApiMemberCard>

