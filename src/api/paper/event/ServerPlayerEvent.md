---
title: ServerPlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerPlayerEvent"
  module="Paper"
  module-key="paper"
  package-name="top.katton.api.event"
  source-file="paper/src/main/kotlin/top/katton/api/event/ServerPlayerEvent.kt"
>
Server player events for Paper (Bukkit) platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerPlayerEvent&quot;,&quot;href&quot;:&quot;#serverplayerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerJoin&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerjoin&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerLeave&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerleave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onAfterPlayerRespawn&quot;,&quot;href&quot;:&quot;#serverplayerevent-onafterplayerrespawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerCopy&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayercopy&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxpchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpLevelChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxplevelchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerPickupXp&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerpickupxp&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromBlock&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromEntity&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerJump&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerjump&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onLaunchProjectile&quot;,&quot;href&quot;:&quot;#serverplayerevent-onlaunchprojectile&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.initialize&quot;,&quot;href&quot;:&quot;#serverplayerevent-initialize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## ServerPlayerEvent

<ApiMemberCard
  id="serverplayerevent"
  name="ServerPlayerEvent"
  kind="Object"
  kind-key="object"
  module="Paper"
  module-key="paper"
>

```kotlin
@Suppress("unused")
object ServerPlayerEvent
```

Server player events for Paper (Bukkit) platform.

This object provides events related to server player lifecycle including
join/leave/respawn, XP events, item picking events, and Paper-specific
events such as jump and projectile launch.

### ServerPlayerEvent.onPlayerJoin

<ApiMemberCard
  id="serverplayerevent-onplayerjoin"
  name="ServerPlayerEvent.onPlayerJoin"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerJoin
```

Event triggered when a player joins the server.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerLeave

<ApiMemberCard
  id="serverplayerevent-onplayerleave"
  name="ServerPlayerEvent.onPlayerLeave"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerLeave
```

Event triggered when a player leaves the server.

</ApiMemberCard>

### ServerPlayerEvent.onAfterPlayerRespawn

<ApiMemberCard
  id="serverplayerevent-onafterplayerrespawn"
  name="ServerPlayerEvent.onAfterPlayerRespawn"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onAfterPlayerRespawn
```

Event triggered after a player respawns.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerCopy

<ApiMemberCard
  id="serverplayerevent-onplayercopy"
  name="ServerPlayerEvent.onPlayerCopy"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerCopy
```

Event triggered when player data is copied (e.g., on respawn or dimension change).

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpChange

<ApiMemberCard
  id="serverplayerevent-onplayerxpchange"
  name="ServerPlayerEvent.onPlayerXpChange"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerXpChange
```

Event triggered when a player's XP changes.
Can be cancelled to prevent the change.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpLevelChange

<ApiMemberCard
  id="serverplayerevent-onplayerxplevelchange"
  name="ServerPlayerEvent.onPlayerXpLevelChange"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerXpLevelChange
```

Event triggered when a player's XP level changes.
Can be cancelled to prevent the change.

</ApiMemberCard>

### ServerPlayerEvent.onPlayerPickupXp

<ApiMemberCard
  id="serverplayerevent-onplayerpickupxp"
  name="ServerPlayerEvent.onPlayerPickupXp"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerPickupXp
```

Event triggered when a player picks up experience orbs.
Can be cancelled to prevent the pickup.

</ApiMemberCard>

### ServerPlayerEvent.onPickFromBlock

<ApiMemberCard
  id="serverplayerevent-onpickfromblock"
  name="ServerPlayerEvent.onPickFromBlock"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPickFromBlock
```

Event triggered when a player middle-clicks a block (pick block).

</ApiMemberCard>

### ServerPlayerEvent.onPickFromEntity

<ApiMemberCard
  id="serverplayerevent-onpickfromentity"
  name="ServerPlayerEvent.onPickFromEntity"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPickFromEntity
```

Event triggered when a player middle-clicks an entity (pick entity).

</ApiMemberCard>

### ServerPlayerEvent.onPlayerJump

<ApiMemberCard
  id="serverplayerevent-onplayerjump"
  name="ServerPlayerEvent.onPlayerJump"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onPlayerJump
```

Event triggered when a player jumps (Paper-specific event).

</ApiMemberCard>

### ServerPlayerEvent.onLaunchProjectile

<ApiMemberCard
  id="serverplayerevent-onlaunchprojectile"
  name="ServerPlayerEvent.onLaunchProjectile"
  kind="Property"
  kind-key="property"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmField
@JvmField val onLaunchProjectile
```

Event triggered when a player launches a projectile (Paper-specific event).

</ApiMemberCard>

### ServerPlayerEvent.initialize

<ApiMemberCard
  id="serverplayerevent-initialize"
  name="ServerPlayerEvent.initialize"
  kind="Function"
  kind-key="function"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmStatic
@JvmStatic fun initialize(plugin: JavaPlugin)
```

Initializes and registers all Bukkit event listeners for this event object.

### Parameters

| Parameter | Description |
| --- | --- |
| `plugin` | The Paper plugin instance used to register listeners. |

</ApiMemberCard>

</ApiMemberCard>

