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
NeoForge平台的生物效应事件。
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

NeoForge平台的生物效应事件。

该对象提供与生物效果（药水）相关的事件，包括
添加、删除、过期以及检查效果的适用性。

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

触发事件以检查生物效果是否适用于实体。

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

当生物效果添加到实体时触发事件。

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

当生物效果从实体中移除时触发事件。
可以取消以防止删除。

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

当实体上的生物效果到期时触发事件。
可以取消以防止过期。

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

生物效果适用事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 被检查的生物体 |
| `effect` | 正在检查的效果实例 |

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

生物效果添加事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 受到效果的生物体 |
| `effect` | 正在添加的效果实例 |
| `source` | 造成效果的实体（可以为空） |

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

生物效果删除事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 生物体失去效果 |
| `effect` | 被移除的效果实例（如果按类型移除则可以为 null） |

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

生物效果过期事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 效果过期的生物体 |
| `effect` | 过期的效果实例（可以为空） |

</ApiMemberCard>

</ApiMemberCard>

