---
title: ServerPlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerPlayerEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerPlayerEvent.kt"
>
NeoForge 平台的服务端玩家事件。 此对象提供与服务端玩家生命周期相关的事件，包括加入/离开/重生、经验值事件、物品拾取/投掷、合成等。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerPlayerEvent&quot;,&quot;href&quot;:&quot;#serverplayerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerJoin&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerjoin&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerLeave&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerleave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onAfterPlayerRespawn&quot;,&quot;href&quot;:&quot;#serverplayerevent-onafterplayerrespawn&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerCopy&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayercopy&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxpchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerXpLevelChange&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerxplevelchange&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerPickupXp&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerpickupxp&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onStartTracking&quot;,&quot;href&quot;:&quot;#serverplayerevent-onstarttracking&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onStopTracking&quot;,&quot;href&quot;:&quot;#serverplayerevent-onstoptracking&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerLoadFromFile&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerloadfromfile&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerSaveToFile&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayersavetofile&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onItemToss&quot;,&quot;href&quot;:&quot;#serverplayerevent-onitemtoss&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onItemPickupPre&quot;,&quot;href&quot;:&quot;#serverplayerevent-onitempickuppre&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onItemPickupPost&quot;,&quot;href&quot;:&quot;#serverplayerevent-onitempickuppost&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerItemCrafted&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayeritemcrafted&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerItemSmelted&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayeritemsmelted&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPlayerSpawnPhantoms&quot;,&quot;href&quot;:&quot;#serverplayerevent-onplayerspawnphantoms&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromBlock&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.onPickFromEntity&quot;,&quot;href&quot;:&quot;#serverplayerevent-onpickfromentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerTrackingArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playertrackingarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerFileArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playerfilearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerItemPickupPreArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playeritempickupprearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerItemPickupPostArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playeritempickuppostarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerCraftedItemArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playercrafteditemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerSmeltedItemArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playersmelteditemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerEvent.PlayerSpawnPhantomsArg&quot;,&quot;href&quot;:&quot;#serverplayerevent-playerspawnphantomsarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ServerPlayerEvent

<ApiMemberCard
  id="serverplayerevent"
  name="ServerPlayerEvent"
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

NeoForge 平台的服务端玩家事件。
此对象提供与服务端玩家生命周期相关的事件，包括加入/离开/重生、经验值事件、物品拾取/投掷、合成等。

### ServerPlayerEvent.onPlayerJoin

<ApiMemberCard
  id="serverplayerevent-onplayerjoin"
  name="ServerPlayerEvent.onPlayerJoin"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPlayerJoin
```

当玩家加入服务器时触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerLeave

<ApiMemberCard
  id="serverplayerevent-onplayerleave"
  name="ServerPlayerEvent.onPlayerLeave"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPlayerLeave
```

当玩家离开服务器时触发。

</ApiMemberCard>

### ServerPlayerEvent.onAfterPlayerRespawn

<ApiMemberCard
  id="serverplayerevent-onafterplayerrespawn"
  name="ServerPlayerEvent.onAfterPlayerRespawn"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterPlayerRespawn
```

当玩家重生后触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerCopy

<ApiMemberCard
  id="serverplayerevent-onplayercopy"
  name="ServerPlayerEvent.onPlayerCopy"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPlayerCopy
```

当复制玩家数据时触发，例如在重生或维度切换时。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpChange

<ApiMemberCard
  id="serverplayerevent-onplayerxpchange"
  name="ServerPlayerEvent.onPlayerXpChange"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerXpChange
```

当玩家经验变化时触发。
可取消以阻止变化。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerXpLevelChange

<ApiMemberCard
  id="serverplayerevent-onplayerxplevelchange"
  name="ServerPlayerEvent.onPlayerXpLevelChange"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerXpLevelChange
```

当玩家经验等级变化时触发。
可取消以阻止变化。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerPickupXp

<ApiMemberCard
  id="serverplayerevent-onplayerpickupxp"
  name="ServerPlayerEvent.onPlayerPickupXp"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerPickupXp
```

当玩家拾取经验球时触发。
可取消以阻止拾取。

</ApiMemberCard>

### ServerPlayerEvent.onStartTracking

<ApiMemberCard
  id="serverplayerevent-onstarttracking"
  name="ServerPlayerEvent.onStartTracking"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onStartTracking
```

当玩家开始跟踪某个实体时触发。

</ApiMemberCard>

### ServerPlayerEvent.onStopTracking

<ApiMemberCard
  id="serverplayerevent-onstoptracking"
  name="ServerPlayerEvent.onStopTracking"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onStopTracking
```

当玩家停止跟踪某个实体时触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerLoadFromFile

<ApiMemberCard
  id="serverplayerevent-onplayerloadfromfile"
  name="ServerPlayerEvent.onPlayerLoadFromFile"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerLoadFromFile
```

当玩家数据从文件加载时触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerSaveToFile

<ApiMemberCard
  id="serverplayerevent-onplayersavetofile"
  name="ServerPlayerEvent.onPlayerSaveToFile"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerSaveToFile
```

当玩家数据保存到文件时触发。

</ApiMemberCard>

### ServerPlayerEvent.onItemToss

<ApiMemberCard
  id="serverplayerevent-onitemtoss"
  name="ServerPlayerEvent.onItemToss"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemToss
```

当玩家投掷物品时触发。

</ApiMemberCard>

### ServerPlayerEvent.onItemPickupPre

<ApiMemberCard
  id="serverplayerevent-onitempickuppre"
  name="ServerPlayerEvent.onItemPickupPre"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemPickupPre
```

当玩家拾取物品前触发。
可修改是否允许拾取。

</ApiMemberCard>

### ServerPlayerEvent.onItemPickupPost

<ApiMemberCard
  id="serverplayerevent-onitempickuppost"
  name="ServerPlayerEvent.onItemPickupPost"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemPickupPost
```

当玩家拾取物品后触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerItemCrafted

<ApiMemberCard
  id="serverplayerevent-onplayeritemcrafted"
  name="ServerPlayerEvent.onPlayerItemCrafted"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerItemCrafted
```

当玩家合成物品时触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerItemSmelted

<ApiMemberCard
  id="serverplayerevent-onplayeritemsmelted"
  name="ServerPlayerEvent.onPlayerItemSmelted"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerItemSmelted
```

当玩家熔炼物品时触发。

</ApiMemberCard>

### ServerPlayerEvent.onPlayerSpawnPhantoms

<ApiMemberCard
  id="serverplayerevent-onplayerspawnphantoms"
  name="ServerPlayerEvent.onPlayerSpawnPhantoms"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onPlayerSpawnPhantoms
```

当幻翼即将为某位玩家生成时触发。
可修改幻翼数量和生成结果。

</ApiMemberCard>

### ServerPlayerEvent.onPickFromBlock

<ApiMemberCard
  id="serverplayerevent-onpickfromblock"
  name="ServerPlayerEvent.onPickFromBlock"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPickFromBlock
```

当玩家中键从方块中获取物品时触发。

### 返回值

要获取的 ItemStack，或返回 null 使用默认行为。

这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### ServerPlayerEvent.onPickFromEntity

<ApiMemberCard
  id="serverplayerevent-onpickfromentity"
  name="ServerPlayerEvent.onPickFromEntity"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onPickFromEntity
```

当玩家中键从实体中获取物品时触发。

### 返回值

要获取的 ItemStack，或返回 null 使用默认行为。

这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### ServerPlayerEvent.PlayerTrackingArg

<ApiMemberCard
  id="serverplayerevent-playertrackingarg"
  name="ServerPlayerEvent.PlayerTrackingArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerTrackingArg( val player: ServerPlayer, val target: Entity )
```

玩家跟踪事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 正在跟踪目标的玩家。 |
| `target` | 被跟踪的实体。 |

</ApiMemberCard>

### ServerPlayerEvent.PlayerFileArg

<ApiMemberCard
  id="serverplayerevent-playerfilearg"
  name="ServerPlayerEvent.PlayerFileArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerFileArg( val player: ServerPlayer, val playerDirectory: File, val playerUUID: String )
```

玩家文件操作的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 正在加载/保存的玩家。 |
| `playerDirectory` | 包含玩家数据的目录。 |
| `playerUUID` | 玩家 UUID。 |

</ApiMemberCard>

### ServerPlayerEvent.PlayerItemPickupPreArg

<ApiMemberCard
  id="serverplayerevent-playeritempickupprearg"
  name="ServerPlayerEvent.PlayerItemPickupPreArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerItemPickupPreArg( val player: ServerPlayer, val item: ItemEntity, var canPickup: TriState )
```

物品拾取前事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 正在拾取物品的玩家。 |
| `item` | 正在被拾取的物品实体。 |
| `canPickup` | 是否允许拾取（可修改）。 |

</ApiMemberCard>

### ServerPlayerEvent.PlayerItemPickupPostArg

<ApiMemberCard
  id="serverplayerevent-playeritempickuppostarg"
  name="ServerPlayerEvent.PlayerItemPickupPostArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerItemPickupPostArg( val player: ServerPlayer, val item: ItemEntity, val originalStack: ItemStack, val currentStack: ItemStack )
```

物品拾取后事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 已拾取物品的玩家。 |
| `item` | 已被拾取的物品实体。 |
| `originalStack` | 原始物品堆栈。 |
| `currentStack` | 拾取后的当前物品堆栈。 |

</ApiMemberCard>

### ServerPlayerEvent.PlayerCraftedItemArg

<ApiMemberCard
  id="serverplayerevent-playercrafteditemarg"
  name="ServerPlayerEvent.PlayerCraftedItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerCraftedItemArg( val player: ServerPlayer, val item: ItemStack, val inventory: Container )
```

玩家合成物品事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 合成该物品的玩家。 |
| `item` | 合成得到的物品堆栈。 |
| `inventory` | 发生合成的容器。 |

</ApiMemberCard>

### ServerPlayerEvent.PlayerSmeltedItemArg

<ApiMemberCard
  id="serverplayerevent-playersmelteditemarg"
  name="ServerPlayerEvent.PlayerSmeltedItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerSmeltedItemArg( val player: ServerPlayer, val item: ItemStack, val amountRemoved: Int )
```

玩家熔炼物品事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 熔炼该物品的玩家。 |
| `item` | 熔炼得到的物品堆栈。 |
| `amountRemoved` | 从输入中移除的数量。 |

</ApiMemberCard>

### ServerPlayerEvent.PlayerSpawnPhantomsArg

<ApiMemberCard
  id="serverplayerevent-playerspawnphantomsarg"
  name="ServerPlayerEvent.PlayerSpawnPhantomsArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class PlayerSpawnPhantomsArg( val player: ServerPlayer, var phantomsToSpawn: Int, var result: PlayerSpawnPhantomsEvent.Result )
```

幻翼生成事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 正在为其生成幻翼的玩家。 |
| `phantomsToSpawn` | 要生成的幻翼数量（可修改）。 |
| `result` | 生成结果（可修改）。 |

</ApiMemberCard>

</ApiMemberCard>

