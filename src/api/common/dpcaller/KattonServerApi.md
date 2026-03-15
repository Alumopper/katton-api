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
Access to all online players.
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

Access to all online players.

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

Access to all entities across all levels.

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

Server command storage for persistent data.

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

Server scoreboard instance.

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

Current server difficulty setting.

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

Execute a command string.

### Parameters

| Parameter | Description |
| --- | --- |
| `command` | the command string to execute |

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

Execute a command as the provided command source.

### Parameters

| Parameter | Description |
| --- | --- |
| `source` | the command source to run the command as |
| `command` | the command string to execute |

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

Execute a command as the server console.

### Parameters

| Parameter | Description |
| --- | --- |
| `command` | the command string to execute |

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

Find a player by name.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the player name to search for |

### Returns

the ServerPlayer if found, null otherwise

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

Find a player by UUID.

### Parameters

| Parameter | Description |
| --- | --- |
| `uuid` | the player UUID to search for |

### Returns

the ServerPlayer if found, null otherwise

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

Find entities using an entity selector in a level.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | the ServerLevel to search in |
| `selector` | the EntitySelector to use |

### Returns

list of matching entities

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

Find an entity by UUID across all levels.

### Parameters

| Parameter | Description |
| --- | --- |
| `uuid` | the entity UUID to search for |

### Returns

the Entity if found, null otherwise

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

Ban a player by adding them to the server ban list and disconnecting them.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | the ServerPlayer to ban |

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

Ban an IP address and disconnect matching players.

### Parameters

| Parameter | Description |
| --- | --- |
| `ip` | IP address string to ban |

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

De-op a player (remove operator status).

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | ServerPlayer to de-op |

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

Op a player (grant operator status).

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | ServerPlayer to op |

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

Set server difficulty.

### Parameters

| Parameter | Description |
| --- | --- |
| `difficulty` | new Difficulty |
| `ignoreLock` | whether to ignore difficulty lock |

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

Run a function (data pack function) with an optional command source.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | function identifier |
| `source` | command source to use (defaults to server) |

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

Set a player's game mode.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target ServerPlayer |
| `gameMode` | target GameType |

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

Get a player's current GameType.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target ServerPlayer |

### Returns

current GameType

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

Set a game rule value on the server overworld.

### Parameters

| Parameter | Description |
| --- | --- |
| `key` | GameRule key |
| `value` | value to set |

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

Get a game rule value from the server overworld.

### Parameters

| Parameter | Description |
| --- | --- |
| `key` | GameRule key |

### Returns

value of the game rule

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

Kick a player with an optional reason component.

### Parameters

| Parameter | Description |
| --- | --- |
| `player` | target Player (ServerPlayer required to disconnect) |
| `reason` | disconnect reason component |

</ApiMemberCard>

