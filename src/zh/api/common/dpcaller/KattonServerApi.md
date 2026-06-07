---
title: KattonServerApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonServerApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
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

访问各个世界的所有实体。

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

用于持久数据的服务器命令存储。

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

服务器记分板实例。

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

执行命令字符串。

### 参数

| 参数 | 说明 |
| --- | --- |
| `command` | 要执行的命令字符串 |

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

作为提供的命令源执行命令。

### 参数

| 参数 | 说明 |
| --- | --- |
| `source` | 运行命令的命令源 |
| `command` | 要执行的命令字符串 |

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

作为服务器控制台执行命令。

### 参数

| 参数 | 说明 |
| --- | --- |
| `command` | 要执行的命令字符串 |

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

按名字查找球员。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 要搜索的玩家姓名 |

### 返回值

如果找到则为 ServerPlayer，否则为 null

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

通过UUID查找玩家。

### 参数

| 参数 | 说明 |
| --- | --- |
| `uuid` | 要搜索的玩家UUID |

### 返回值

如果找到则为 ServerPlayer，否则为 null

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

使用世界中的实体选择器查找实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 要搜索的 ServerLevel |
| `selector` | 使用的EntitySelector |

### 返回值

匹配实体列表

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

在所有世界中通过UUID查找实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `uuid` | 要搜索的实体UUID |

### 返回值

如果找到实体，否则为 null

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

通过将玩家添加到服务器禁止列表并断开连接来禁止他们。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 禁止的ServerPlayer |

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

禁止IP地址并断开匹配的玩家。

### 参数

| 参数 | 说明 |
| --- | --- |
| `ip` | IP 要禁止的地址字符串 |

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

De-op 玩家（删除操作员状态）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | ServerPlayer 去操作 |

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

Op 一名玩家（授予操作员身份）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | ServerPlayer 前往操作 |

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
| `difficulty` | 新难度 |
| `ignoreLock` | 是否忽略难度锁定 |

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

使用可选命令源运行函数（数据包函数）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 函数标识符 |
| `source` | 要使用的命令源（默认为服务器） |

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
| `player` | 目标ServerPlayer |
| `gameMode` | 目标GameType |

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

获取玩家当前的GameType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标ServerPlayer |

### 返回值

当前GameType

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

在服务器世界上设置游戏规则值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `key` | GameRule键 |
| `value` | 要设置的值 |

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

从服务器世界获取游戏规则值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `key` | GameRule键 |

### 返回值

游戏规则的价值

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

使用可选原因组件踢玩家。

### 参数

| 参数 | 说明 |
| --- | --- |
| `player` | 目标玩家（需要ServerPlayer断开连接） |
| `reason` | 断开原因组件 |

</ApiMemberCard>

