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
向玩家发送系统消息。
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

向玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标ServerPlayer |
| `message` | 纯字符串消息 |

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

向玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标ServerPlayer |
| `message` | 消息组件 |

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

向玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标ServerPlayer |
| `message` | 消息对象，转换为字符串 |

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

向多个玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `players` | 目标ServerPlayer集合 |
| `message` | 纯字符串消息 |

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

向多个玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `players` | 目标ServerPlayer集合 |
| `message` | 消息组件 |

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

向多个玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `players` | 目标ServerPlayer集合 |
| `message` | 消息对象，转换为字符串 |

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

向所有玩家发送系统消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 消息对象，转换为字符串 |

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

将粒子发送给一组玩家。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 服务器世界 |
| `players` | 发送至的玩家 |
| `particle` | 粒子选项 |
| `pos` | 中心位置 |
| `delta` | 传播向量（默认为零） |
| `speed` | 粒子速度 |
| `count` | 粒子数 |
| `forced` | 是否强制发送（忽略客户端设置） |

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

将一组实体传送到另一个实体的位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `collection` | 要传送的实体 |
| `entity` | 要使用其位置的目标实体 |

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

将一组实体传送到给定位置并可选择设置旋转。

### 参数

| 参数 | 说明 |
| --- | --- |
| `collection` | 要传送的实体 |
| `serverLevel` | 目的地世界 |
| `pos` | 目的地位置 |
| `rot` | 可选的旋转向量；如果为空，则保持实体旋转 |

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

将一组实体传送到某个位置并让它们看着一个实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `collection` | 要传送的实体 |
| `serverLevel` | 目的地世界 |
| `pos` | 目的地位置 |
| `lookAt` | 传送后要查看的实体 |
| `anchor` | 用于目标定向的锚点 |
| `lookAtAnchor` | 用于lookAt方向的锚点 |

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

将一组实体传送到某个位置并让它们看着某个位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `collection` | 要传送的实体 |
| `serverLevel` | 目的地世界 |
| `pos` | 目的地位置 |
| `lookAt` | 看的位置 |
| `anchor` | 用于目标定向的锚点 |

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

设置路径点发射器的路径点样式。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverLevel` | 服务器世界 |
| `waypointTransmitter` | 要修改的路径点发射机 |
| `resourceKey` | 航点样式资产键 |

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

使用 ChatFormatting 设置路径点颜色。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverLevel` | 服务器世界 |
| `waypointTransmitter` | 路径点发射器 |
| `chatFormatting` | 格式化以转换为颜色 |

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

使用整数颜色值设置路径点颜色。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverLevel` | 服务器世界 |
| `waypointTransmitter` | 路径点发射器 |
| `integer` | 整数颜色值 |

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

将路径点颜色重置为默认值（未设置）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverLevel` | 服务器世界 |
| `waypointTransmitter` | 路径点发射器 |

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

通过过滤和格式化向玩家列表发送团队聊天消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 源实体（发送者） |
| `playerTeam` | 正在向团队发送消息 |
| `list` | 收件人 |
| `playerChatMessage` | 留言内容 |
| `commandSourceStack` | 用于格式化和过滤的命令源 |

</ApiMemberCard>

