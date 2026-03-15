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
Mob effect events for NeoForge platform.
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

Mob effect events for NeoForge platform.

This object provides events related to mob effects (potions) including
adding, removing, expiring, and checking applicability of effects.

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

Event triggered to check if a mob effect is applicable to an entity.

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

Event triggered when a mob effect is added to an entity.

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

Event triggered when a mob effect is removed from an entity.
Can be cancelled to prevent removal.

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

Event triggered when a mob effect expires on an entity.
Can be cancelled to prevent expiration.

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

Argument class for mob effect applicable events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The living entity being checked |
| `effect` | The effect instance being checked |

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

Argument class for mob effect add events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The living entity receiving the effect |
| `effect` | The effect instance being added |
| `source` | The entity that caused the effect (can be null) |

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

Argument class for mob effect remove events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The living entity losing the effect |
| `effect` | The effect instance being removed (can be null if removed by type) |

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

Argument class for mob effect expire events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The living entity whose effect expired |
| `effect` | The effect instance that expired (can be null) |

</ApiMemberCard>

</ApiMemberCard>

