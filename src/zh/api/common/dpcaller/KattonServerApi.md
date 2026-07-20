---
title: KattonServerApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonServerApi"
  module="Common"
  module-key="common"
  package-name=""
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonServerApi.kt"
>
访问所有在线玩家。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;players&quot;,&quot;href&quot;:&quot;#players&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;entities&quot;,&quot;href&quot;:&quot;#entities&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;storage&quot;,&quot;href&quot;:&quot;#storage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;scoreboard&quot;,&quot;href&quot;:&quot;#scoreboard&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;difficulty&quot;,&quot;href&quot;:&quot;#difficulty&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;execute&quot;,&quot;href&quot;:&quot;#execute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;executeCommand&quot;,&quot;href&quot;:&quot;#executecommand&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;executeCommandAsServer&quot;,&quot;href&quot;:&quot;#executecommandasserver&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;findPlayer&quot;,&quot;href&quot;:&quot;#findplayer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;findPlayer&quot;,&quot;href&quot;:&quot;#findplayer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;findEntities&quot;,&quot;href&quot;:&quot;#findentities&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;findEntity&quot;,&quot;href&quot;:&quot;#findentity&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ban&quot;,&quot;href&quot;:&quot;#ban&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;banIp&quot;,&quot;href&quot;:&quot;#banip&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;deop&quot;,&quot;href&quot;:&quot;#deop&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;op&quot;,&quot;href&quot;:&quot;#op&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setDifficulty&quot;,&quot;href&quot;:&quot;#setdifficulty&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;runFunction&quot;,&quot;href&quot;:&quot;#runfunction&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setGameMode&quot;,&quot;href&quot;:&quot;#setgamemode&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getGameMode&quot;,&quot;href&quot;:&quot;#getgamemode&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setGameRule&quot;,&quot;href&quot;:&quot;#setgamerule&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getGameRule&quot;,&quot;href&quot;:&quot;#getgamerule&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;kick&quot;,&quot;href&quot;:&quot;#kick&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## players

<ApiMemberCard
  id="players"
  name="players"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val players: KattonPlayerList
```

访问所有在线玩家。

</ApiMemberCard>

## entities

<ApiMemberCard
  id="entities"
  name="entities"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val entities: KattonServerEntityCollection
```

访问所有维度中的全部实体。

</ApiMemberCard>

## storage

<ApiMemberCard
  id="storage"
  name="storage"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val storage: CommandStorage
```

用于保存持久数据的服务器命令存储。

</ApiMemberCard>

## scoreboard

<ApiMemberCard
  id="scoreboard"
  name="scoreboard"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val scoreboard: Scoreboard
```

服务器计分板实例。

</ApiMemberCard>

## difficulty

<ApiMemberCard
  id="difficulty"
  name="difficulty"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var difficulty: Difficulty
```

当前服务器难度设置。

</ApiMemberCard>

## execute

<ApiMemberCard
  id="execute"
  name="execute"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun execute(command: String)
```

执行一条命令字符串。

### 参数

| 参数 | 说明 |
| --- | --- |
| `command` | 要执行的命令字符串。 |

</ApiMemberCard>

## executeCommand

<ApiMemberCard
  id="executecommand"
  name="executeCommand"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun executeCommand(source: CommandSourceStack, command: String)
```

以指定的命令源执行命令。

### 参数

| 参数 | 说明 |
| --- | --- |
| `source` | 用作执行主体的命令源。 |
| `command` | 要执行的命令字符串。 |

</ApiMemberCard>

## executeCommandAsServer

<ApiMemberCard
  id="executecommandasserver"
  name="executeCommandAsServer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun executeCommandAsServer(command: String)
```

以服务器控制台身份执行命令。

### 参数

| 参数 | 说明 |
| --- | --- |
| `command` | 要执行的命令字符串。 |

</ApiMemberCard>

## findPlayer

<ApiMemberCard
  id="findplayer"
  name="findPlayer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun findPlayer(player: String): ServerPlayer?
```

根据名称查找玩家。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要查找的玩家名称。 |

### 返回值

找到则返回 ServerPlayer，否则返回 null。

</ApiMemberCard>

## findPlayer

<ApiMemberCard
  id="findplayer"
  name="findPlayer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun findPlayer(uuid: UUID): ServerPlayer?
```

根据 UUID 查找玩家。

### 参数

| 参数 | 说明 |
| --- | --- |
| `uuid` | 要查找的玩家 UUID。 |

### 返回值

找到则返回 ServerPlayer，否则返回 null。

</ApiMemberCard>

## findEntities

<ApiMemberCard
  id="findentities"
  name="findEntities"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun findEntities(level: ServerLevel, selector: EntitySelector): List<Entity>
```

在指定维度中使用实体选择器查找实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要搜索的 ServerLevel。 |
| `selector` | 要使用的 EntitySelector。 |

### 返回值

返回匹配的实体列表。

</ApiMemberCard>

## findEntity

<ApiMemberCard
  id="findentity"
  name="findEntity"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun findEntity(uuid: UUID): Entity?
```

在所有维度中根据 UUID 查找实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `uuid` | 要查找的实体 UUID。 |

### 返回值

找到则返回 Entity，否则返回 null。

</ApiMemberCard>

## ban

<ApiMemberCard
  id="ban"
  name="ban"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun ban(player: ServerPlayer)
```

将玩家加入服务器封禁列表并断开其连接。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要封禁的 ServerPlayer。 |

</ApiMemberCard>

## banIp

<ApiMemberCard
  id="banip"
  name="banIp"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun banIp(ip: String)
```

封禁一个 IP 地址，并断开所有匹配玩家的连接。

### 参数

| 参数 | 说明 |
| --- | --- |
| `ip` | 要封禁的 IP 地址字符串。 |

</ApiMemberCard>

## deop

<ApiMemberCard
  id="deop"
  name="deop"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun deop(player: ServerPlayer)
```

取消玩家的管理员权限。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要取消权限的 ServerPlayer。 |

</ApiMemberCard>

## op

<ApiMemberCard
  id="op"
  name="op"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun op(player: ServerPlayer)
```

授予玩家管理员权限。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要授予权限的 ServerPlayer。 |

</ApiMemberCard>

## setDifficulty

<ApiMemberCard
  id="setdifficulty"
  name="setDifficulty"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setDifficulty(difficulty: Difficulty, ignoreLock: Boolean = true)
```

设置服务器难度。

### 参数

| 参数 | 说明 |
| --- | --- |
| `difficulty` | 新的 Difficulty。 |
| `ignoreLock` | 是否忽略难度锁定。 |

</ApiMemberCard>

## runFunction

<ApiMemberCard
  id="runfunction"
  name="runFunction"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun runFunction(id: Identifier, source: CommandSourceStack = requireServer().createCommandSourceStack())
```

使用可选的命令源执行函数（数据包函数）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 函数标识符。 |
| `source` | 要使用的命令源（默认使用服务器）。 |

</ApiMemberCard>

## setGameMode

<ApiMemberCard
  id="setgamemode"
  name="setGameMode"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setGameMode(player: ServerPlayer, gameMode: GameType)
```

设置玩家的游戏模式。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标 ServerPlayer。 |
| `gameMode` | 目标 GameType。 |

</ApiMemberCard>

## getGameMode

<ApiMemberCard
  id="getgamemode"
  name="getGameMode"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getGameMode(player: ServerPlayer): GameType
```

获取玩家当前的 GameType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标 ServerPlayer。 |

### 返回值

返回 GameType。

</ApiMemberCard>

## setGameRule

<ApiMemberCard
  id="setgamerule"
  name="setGameRule"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Any> setGameRule(key: GameRule<T>, value: T)
```

在服务器主世界中设置游戏规则值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `key` | GameRule 键。 |
| `value` | 要设置的值。 |

</ApiMemberCard>

## getGameRule

<ApiMemberCard
  id="getgamerule"
  name="getGameRule"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Any> getGameRule(key: GameRule<T>): T
```

从服务器主世界获取游戏规则值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `key` | GameRule 键。 |

### 返回值

返回该游戏规则的值。

</ApiMemberCard>

## kick

<ApiMemberCard
  id="kick"
  name="kick"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun kick(player: Player, reason: Component = Component.translatable("multiplayer.disconnect.kicked"))
```

踢出玩家，并可附带可选的原因组件。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家（需要是 ServerPlayer 才能断开连接）。 |
| `reason` | 断开连接原因组件。 |

</ApiMemberCard>

