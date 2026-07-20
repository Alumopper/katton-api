---
title: ServerMobEffectEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerMobEffectEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerMobEffectEvent.kt"
>
NeoForge 平台的状态效果事件。 此对象提供与状态效果（药水）相关的事件，包括添加、移除、过期以及检查效果是否适用。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerMobEffectEvent&quot;,&quot;href&quot;:&quot;#servermobeffectevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onMobEffectApplicable&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onmobeffectapplicable&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onMobEffectAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onmobeffectadd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onMobEffectRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onmobeffectremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onMobEffectExpire&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onmobeffectexpire&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectApplicableArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectapplicablearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAddArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectaddarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectExpireArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectexpirearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ServerMobEffectEvent

<ApiMemberCard
  id="servermobeffectevent"
  name="ServerMobEffectEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@EventBusSubscriber( modid = Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

NeoForge 平台的状态效果事件。
此对象提供与状态效果（药水）相关的事件，包括添加、移除、过期以及检查效果是否适用。

### ServerMobEffectEvent.onMobEffectApplicable

<ApiMemberCard
  id="servermobeffectevent-onmobeffectapplicable"
  name="ServerMobEffectEvent.onMobEffectApplicable"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onMobEffectApplicable
```

当检查某个状态效果是否可以应用到实体时触发。

</ApiMemberCard>

### ServerMobEffectEvent.onMobEffectAdd

<ApiMemberCard
  id="servermobeffectevent-onmobeffectadd"
  name="ServerMobEffectEvent.onMobEffectAdd"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onMobEffectAdd
```

当向实体添加状态效果时触发。

</ApiMemberCard>

### ServerMobEffectEvent.onMobEffectRemove

<ApiMemberCard
  id="servermobeffectevent-onmobeffectremove"
  name="ServerMobEffectEvent.onMobEffectRemove"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onMobEffectRemove
```

当从实体移除状态效果时触发。
可取消以阻止移除。

</ApiMemberCard>

### ServerMobEffectEvent.onMobEffectExpire

<ApiMemberCard
  id="servermobeffectevent-onmobeffectexpire"
  name="ServerMobEffectEvent.onMobEffectExpire"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onMobEffectExpire
```

当实体身上的状态效果过期时触发。
可取消以阻止过期。

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectApplicableArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectapplicablearg"
  name="ServerMobEffectEvent.MobEffectApplicableArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class MobEffectApplicableArg( val entity: LivingEntity, val effect: MobEffectInstance )
```

状态效果适用性检查事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在检查的生物实体。 |
| `effect` | 正在检查的效果实例。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAddArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectaddarg"
  name="ServerMobEffectEvent.MobEffectAddArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class MobEffectAddArg( val entity: LivingEntity, val effect: MobEffectInstance, val source: Entity? )
```

状态效果添加事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在接收效果的生物实体。 |
| `effect` | 正在添加的效果实例。 |
| `source` | 造成该效果的实体，可为 null。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectremovearg"
  name="ServerMobEffectEvent.MobEffectRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class MobEffectRemoveArg( val entity: LivingEntity, val effect: MobEffectInstance? ): CancellableEventArg()
```

状态效果移除事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 失去该效果的生物实体。 |
| `effect` | 正在移除的效果实例。如果是按类型移除，这里可以为 null。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectExpireArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectexpirearg"
  name="ServerMobEffectEvent.MobEffectExpireArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class MobEffectExpireArg( val entity: LivingEntity, val effect: MobEffectInstance? ): CancellableEventArg()
```

状态效果过期事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 效果过期的生物实体。 |
| `effect` | 已过期的效果实例，可为 null。 |

</ApiMemberCard>

</ApiMemberCard>

