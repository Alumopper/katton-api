---
title: KattonMiscApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonMiscApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonMiscApi.kt"
>
Send a system message to a player.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;tell&quot;,&quot;href&quot;:&quot;#tell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;particle&quot;,&quot;href&quot;:&quot;#particle&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;teleportToEntity&quot;,&quot;href&quot;:&quot;#teleporttoentity&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;teleportToPos&quot;,&quot;href&quot;:&quot;#teleporttopos&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;teleportToPos&quot;,&quot;href&quot;:&quot;#teleporttopos&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;teleportToPos&quot;,&quot;href&quot;:&quot;#teleporttopos&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWaypointStyle&quot;,&quot;href&quot;:&quot;#setwaypointstyle&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWaypointColor&quot;,&quot;href&quot;:&quot;#setwaypointcolor&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setWaypointColor&quot;,&quot;href&quot;:&quot;#setwaypointcolor&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetWaypointColor&quot;,&quot;href&quot;:&quot;#resetwaypointcolor&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;teamMsg&quot;,&quot;href&quot;:&quot;#teammsg&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(player: ServerPlayer, message: String)
```

Send a system message to a player.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target ServerPlayer |
| `message` | plain string message |

</ApiMemberCard>

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(player: ServerPlayer, message: Component)
```

Send a system message to a player.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target ServerPlayer |
| `message` | message component |

</ApiMemberCard>

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(player: ServerPlayer, message: Any)
```

Send a system message to a player.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target ServerPlayer |
| `message` | message object, converted to string |

</ApiMemberCard>

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(players: Collection<ServerPlayer>, message: String)
```

Send a system message to multiple players.

### Parameters

| Parameter | Description |
| --- | --- |
| `players` | target ServerPlayer collection |
| `message` | plain string message |

</ApiMemberCard>

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(players: Collection<ServerPlayer>, message: Component)
```

Send a system message to multiple players.

### Parameters

| Parameter | Description |
| --- | --- |
| `players` | target ServerPlayer collection |
| `message` | message component |

</ApiMemberCard>

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(players: Collection<ServerPlayer>, message: Any)
```

Send a system message to multiple players.

### Parameters

| Parameter | Description |
| --- | --- |
| `players` | target ServerPlayer collection |
| `message` | message object, converted to string |

</ApiMemberCard>

## tell

<ApiMemberCard
  id="tell"
  name="tell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun tell(message: Any)
```

Send a system message to all players.

### Parameters

| Parameter | Description |
| --- | --- |
| `message` | message object, converted to string |

</ApiMemberCard>

## particle

<ApiMemberCard
  id="particle"
  name="particle"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun particle(level: ServerLevel, players: Collection<ServerPlayer>, particle: ParticleOptions, pos: Vec3, delta: Vec3 = Vec3.ZERO, speed: Double = 1.0, count: Int = 0, forced: Boolean = false)
```

Send particles to a collection of players.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level |
| `players` | players to send to |
| `particle` | particle options |
| `pos` | center position |
| `delta` | spread vector (default zero) |
| `speed` | particle speed |
| `count` | number of particles |
| `forced` | whether to force send (ignores client settings) |

</ApiMemberCard>

## teleportToEntity

<ApiMemberCard
  id="teleporttoentity"
  name="teleportToEntity"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun teleportToEntity(collection: MutableCollection<out Entity>, entity: Entity)
```

Teleport a collection of entities to another entity's position.

### Parameters

| Parameter | Description |
| --- | --- |
| `collection` | entities to teleport |
| `entity` | destination entity whose position to use |

</ApiMemberCard>

## teleportToPos

<ApiMemberCard
  id="teleporttopos"
  name="teleportToPos"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun teleportToPos(collection: MutableCollection<out Entity>, serverLevel: ServerLevel, pos: Vec3, rot: Vec2? = null)
```

Teleport a collection of entities to a given position and optionally set rotation.

### Parameters

| Parameter | Description |
| --- | --- |
| `collection` | entities to teleport |
| `serverLevel` | destination level |
| `pos` | destination position |
| `rot` | optional rotation vector; if null, keeps entity rotation |

</ApiMemberCard>

## teleportToPos

<ApiMemberCard
  id="teleporttopos"
  name="teleportToPos"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun teleportToPos(collection: MutableCollection<out Entity>, serverLevel: ServerLevel, pos: Vec3, lookAt: Entity, anchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET, lookAtAnchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET)
```

Teleport a collection of entities to a position and make them look at an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `collection` | entities to teleport |
| `serverLevel` | destination level |
| `pos` | destination position |
| `lookAt` | entity to look at after teleport |
| `anchor` | anchor used for target orientation |
| `lookAtAnchor` | anchor used for lookAt orientation |

</ApiMemberCard>

## teleportToPos

<ApiMemberCard
  id="teleporttopos"
  name="teleportToPos"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun teleportToPos(collection: MutableCollection<out Entity>, serverLevel: ServerLevel, pos: Vec3, lookAt: Vec3, anchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET)
```

Teleport a collection of entities to a position and make them look at a position.

### Parameters

| Parameter | Description |
| --- | --- |
| `collection` | entities to teleport |
| `serverLevel` | destination level |
| `pos` | destination position |
| `lookAt` | position to look at |
| `anchor` | anchor used for target orientation |

</ApiMemberCard>

## setWaypointStyle

<ApiMemberCard
  id="setwaypointstyle"
  name="setWaypointStyle"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWaypointStyle(serverLevel: ServerLevel, waypointTransmitter: WaypointTransmitter, resourceKey: ResourceKey<WaypointStyleAsset>)
```

Set waypoint style for a waypoint transmitter.

### Parameters

| Parameter | Description |
| --- | --- |
| `serverLevel` | server level |
| `waypointTransmitter` | waypoint transmitter to modify |
| `resourceKey` | waypoint style asset key |

</ApiMemberCard>

## setWaypointColor

<ApiMemberCard
  id="setwaypointcolor"
  name="setWaypointColor"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWaypointColor(serverLevel: ServerLevel, waypointTransmitter: WaypointTransmitter, chatFormatting: ChatFormatting)
```

Set waypoint color using ChatFormatting.

### Parameters

| Parameter | Description |
| --- | --- |
| `serverLevel` | server level |
| `waypointTransmitter` | waypoint transmitter |
| `chatFormatting` | formatting to convert to color |

</ApiMemberCard>

## setWaypointColor

<ApiMemberCard
  id="setwaypointcolor"
  name="setWaypointColor"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setWaypointColor(serverLevel: ServerLevel, waypointTransmitter: WaypointTransmitter, integer: Int)
```

Set waypoint color using an integer color value.

### Parameters

| Parameter | Description |
| --- | --- |
| `serverLevel` | server level |
| `waypointTransmitter` | waypoint transmitter |
| `integer` | integer color value |

</ApiMemberCard>

## resetWaypointColor

<ApiMemberCard
  id="resetwaypointcolor"
  name="resetWaypointColor"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetWaypointColor(serverLevel: ServerLevel, waypointTransmitter: WaypointTransmitter)
```

Reset waypoint color to default (unset).

### Parameters

| Parameter | Description |
| --- | --- |
| `serverLevel` | server level |
| `waypointTransmitter` | waypoint transmitter |

</ApiMemberCard>

## teamMsg

<ApiMemberCard
  id="teammsg"
  name="teamMsg"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun teamMsg(entity: Entity, playerTeam: PlayerTeam, list: MutableList<ServerPlayer>, playerChatMessage: PlayerChatMessage, commandSourceStack: CommandSourceStack = requireServer().createCommandSourceStack())
```

Send a team chat message to a list of players with filtering and formatting.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | source entity (sender) |
| `playerTeam` | team being messaged |
| `list` | recipients |
| `playerChatMessage` | message content |
| `commandSourceStack` | command source used for formatting and filtering |

</ApiMemberCard>

