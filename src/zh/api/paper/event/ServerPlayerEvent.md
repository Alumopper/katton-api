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
Paper (Bukkit) 平台的服务器玩家事件。
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

Paper (Bukkit) 平台的服务器玩家事件。

该对象提供与服务器玩家生命周期相关的事件，包括
加入/离开/重生，XP事件，物品拾取事件和Paper特定
跳跃和抛射物发射等事件。

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

当玩家加入服务器时触发的事件。

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

当玩家离开服务器时触发的事件。

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

玩家重生后触发的事件。

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

复制玩家数据时触发的事件（例如，重生或尺寸更改时）。

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

当玩家的XP发生变化时触发事件。
可以取消以防止更改。

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

当玩家的XP等级发生变化时触发事件。
可以取消以防止更改。

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

当玩家拾取经验球时触发事件。
可以取消以防止取件。

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

当玩家中键单击块（拾取块）时触发事件。

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

当玩家中键单击实体（选择实体）时触发事件。

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

玩家跳跃时触发的事件（Paper特定事件）。

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

当玩家发射射弹时触发事件（Paper特定事件）。

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

初始化并注册该事件对象的所有Bukkit事件监听器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `plugin` | 用于注册监听器的 Paper 插件实例。 |

</ApiMemberCard>

</ApiMemberCard>

