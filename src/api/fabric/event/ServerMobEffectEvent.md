---
title: ServerMobEffectEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerMobEffectEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerMobEffectEvent.kt"
>
Mob effect events for Fabric platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerMobEffectEvent&quot;,&quot;href&quot;:&quot;#servermobeffectevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.initialize&quot;,&quot;href&quot;:&quot;#servermobeffectevent-initialize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAllowAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onallowadd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onBeforeAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onbeforeadd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAfterAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onafteradd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAllowEarlyRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onallowearlyremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onBeforeRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onbeforeremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAfterRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onafterremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAllowAddArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectallowaddarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAddArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectaddarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAllowEarlyRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectallowearlyremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectBeforeRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectbeforeremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAfterRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectafterremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ServerMobEffectEvent

<ApiMemberCard
  id="servermobeffectevent"
  name="ServerMobEffectEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object ServerMobEffectEvent
```

Mob effect events for Fabric platform.

This object provides events related to mob effects (potions) including
adding, removing, and modifying effects on entities.

### ServerMobEffectEvent.initialize

<ApiMemberCard
  id="servermobeffectevent-initialize"
  name="ServerMobEffectEvent.initialize"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
fun initialize()
```

Initializes the mob effect events by registering Fabric event handlers.
This method should be called during mod initialization.

</ApiMemberCard>

### ServerMobEffectEvent.onAllowAdd

<ApiMemberCard
  id="servermobeffectevent-onallowadd"
  name="ServerMobEffectEvent.onAllowAdd"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowAdd
```

Event triggered to allow or deny a mob effect being added to an entity.

### Returns

true to allow the effect, false to cancel it.

</ApiMemberCard>

### ServerMobEffectEvent.onBeforeAdd

<ApiMemberCard
  id="servermobeffectevent-onbeforeadd"
  name="ServerMobEffectEvent.onBeforeAdd"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBeforeAdd
```

Event triggered before a mob effect is added to an entity.
Use this for pre-processing or modification.

</ApiMemberCard>

### ServerMobEffectEvent.onAfterAdd

<ApiMemberCard
  id="servermobeffectevent-onafteradd"
  name="ServerMobEffectEvent.onAfterAdd"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterAdd
```

Event triggered after a mob effect has been added to an entity.

</ApiMemberCard>

### ServerMobEffectEvent.onAllowEarlyRemove

<ApiMemberCard
  id="servermobeffectevent-onallowearlyremove"
  name="ServerMobEffectEvent.onAllowEarlyRemove"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowEarlyRemove
```

Event triggered to allow or deny early removal of a mob effect.

### Returns

true to allow removal, false to cancel it.

</ApiMemberCard>

### ServerMobEffectEvent.onBeforeRemove

<ApiMemberCard
  id="servermobeffectevent-onbeforeremove"
  name="ServerMobEffectEvent.onBeforeRemove"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBeforeRemove
```

Event triggered before a mob effect is removed from an entity.

</ApiMemberCard>

### ServerMobEffectEvent.onAfterRemove

<ApiMemberCard
  id="servermobeffectevent-onafterremove"
  name="ServerMobEffectEvent.onAfterRemove"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterRemove
```

Event triggered after a mob effect has been removed from an entity.

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAllowAddArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectallowaddarg"
  name="ServerMobEffectEvent.MobEffectAllowAddArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAllowAddArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

Argument class for mob effect allow-add events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The entity receiving the effect |
| `effectInstance` | The effect instance being added |
| `context` | The context of the effect event |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAddArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectaddarg"
  name="ServerMobEffectEvent.MobEffectAddArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAddArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

Argument class for mob effect add events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The entity receiving the effect |
| `effectInstance` | The effect instance being added |
| `context` | The context of the effect event |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAllowEarlyRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectallowearlyremovearg"
  name="ServerMobEffectEvent.MobEffectAllowEarlyRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAllowEarlyRemoveArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

Argument class for mob effect allow-early-remove events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The entity losing the effect |
| `effectInstance` | The effect instance being removed |
| `context` | The context of the effect event |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectBeforeRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectbeforeremovearg"
  name="ServerMobEffectEvent.MobEffectBeforeRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectBeforeRemoveArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

Argument class for mob effect before-remove events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The entity losing the effect |
| `effectInstance` | The effect instance being removed |
| `context` | The context of the effect event |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAfterRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectafterremovearg"
  name="ServerMobEffectEvent.MobEffectAfterRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAfterRemoveArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

Argument class for mob effect after-remove events.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The entity that lost the effect |
| `effectInstance` | The effect instance that was removed |
| `context` | The context of the effect event |

</ApiMemberCard>

</ApiMemberCard>

