---
title: KattonScoreboardApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonScoreboardApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonScoreboardApi.kt"
>
Get a score value for a target in an objective.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;get&quot;,&quot;href&quot;:&quot;#get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;set&quot;,&quot;href&quot;:&quot;#set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;fake&quot;,&quot;href&quot;:&quot;#fake&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonScoreHolderScoreCollection&quot;,&quot;href&quot;:&quot;#kattonscoreholderscorecollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonScoreHolderScoreCollection.get&quot;,&quot;href&quot;:&quot;#kattonscoreholderscorecollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonScoreHolderScoreCollection.set&quot;,&quot;href&quot;:&quot;#kattonscoreholderscorecollection-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;scores&quot;,&quot;href&quot;:&quot;#scores&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;getObjective&quot;,&quot;href&quot;:&quot;#getobjective&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getOrCreateObjective&quot;,&quot;href&quot;:&quot;#getorcreateobjective&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setScore&quot;,&quot;href&quot;:&quot;#setscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setScore&quot;,&quot;href&quot;:&quot;#setscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setScore&quot;,&quot;href&quot;:&quot;#setscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addScore&quot;,&quot;href&quot;:&quot;#addscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addScore&quot;,&quot;href&quot;:&quot;#addscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addScore&quot;,&quot;href&quot;:&quot;#addscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getScore&quot;,&quot;href&quot;:&quot;#getscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getScore&quot;,&quot;href&quot;:&quot;#getscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getScore&quot;,&quot;href&quot;:&quot;#getscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetScore&quot;,&quot;href&quot;:&quot;#resetscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetScore&quot;,&quot;href&quot;:&quot;#resetscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetScore&quot;,&quot;href&quot;:&quot;#resetscore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;leaveTeam&quot;,&quot;href&quot;:&quot;#leaveteam&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;joinTeam&quot;,&quot;href&quot;:&quot;#jointeam&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;emptyTeam&quot;,&quot;href&quot;:&quot;#emptyteam&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;deleteTeam&quot;,&quot;href&quot;:&quot;#deleteteam&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;createTeam&quot;,&quot;href&quot;:&quot;#createteam&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getTeam&quot;,&quot;href&quot;:&quot;#getteam&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addTriggerValue&quot;,&quot;href&quot;:&quot;#addtriggervalue&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setTriggerValue&quot;,&quot;href&quot;:&quot;#settriggervalue&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;simpleTrigger&quot;,&quot;href&quot;:&quot;#simpletrigger&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## get

<ApiMemberCard
  id="get"
  name="get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Scoreboard.get(target: ScoreHolder, objective: Objective): Int?
```

Get a score value for a target in an objective.

</ApiMemberCard>

## set

<ApiMemberCard
  id="set"
  name="set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Scoreboard.set(target: ScoreHolder, objective: Objective, value: Int)
```

Set a score value for a target in an objective.

</ApiMemberCard>

## fake

<ApiMemberCard
  id="fake"
  name="fake"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun fake(name: String): ScoreHolder
```

Create a fake score holder with a name.

### Parameters

| Parameter | Description |
| --- | --- |
| `name` | The name for the fake score holder |

### Returns

A ScoreHolder that only exists for scoreboard purposes

</ApiMemberCard>

## KattonScoreHolderScoreCollection

<ApiMemberCard
  id="kattonscoreholderscorecollection"
  name="KattonScoreHolderScoreCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonScoreHolderScoreCollection( val scoreboard: Scoreboard, val scoreHolder: ScoreHolder )
```

Map-like access to a score holder's scores across objectives.

### Properties

| Property | Description |
| --- | --- |
| `scoreboard` | The Scoreboard instance |
| `scoreHolder` | The ScoreHolder whose scores are being accessed |

### KattonScoreHolderScoreCollection.get

<ApiMemberCard
  id="kattonscoreholderscorecollection-get"
  name="KattonScoreHolderScoreCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(objective: Objective): Int?
```

Get the score value for an objective.

</ApiMemberCard>

### KattonScoreHolderScoreCollection.set

<ApiMemberCard
  id="kattonscoreholderscorecollection-set"
  name="KattonScoreHolderScoreCollection.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun set(objective: Objective, value: Int)
```

Set the score value for an objective.

</ApiMemberCard>

</ApiMemberCard>

## scores

<ApiMemberCard
  id="scores"
  name="scores"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val ScoreHolder.scores: KattonScoreHolderScoreCollection
```

Extension property to access a score holder's scores.

</ApiMemberCard>

## getObjective

<ApiMemberCard
  id="getobjective"
  name="getObjective"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getObjective(name: String): Objective?
```

Get an objective by name.

### Parameters

| Parameter | Description |
| --- | --- |
| `name` | objective name |

### Returns

Objective or null if not found

</ApiMemberCard>

## getOrCreateObjective

<ApiMemberCard
  id="getorcreateobjective"
  name="getOrCreateObjective"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getOrCreateObjective(name: String, displayName: Component = Component.literal(name), criteria: ObjectiveCriteria = ObjectiveCriteria.DUMMY, renderType: ObjectiveCriteria.RenderType = ObjectiveCriteria.RenderType.INTEGER, displayAutoUpdate: Boolean = false, numberFormat: NumberFormat? = null): Objective
```

Get or create a scoreboard Objective.

### Parameters

| Parameter | Description |
| --- | --- |
| `name` | objective name |
| `displayName` | display name component for the objective |
| `criteria` | objective criteria |
| `renderType` | render type for the objective |
| `displayAutoUpdate` | whether the display auto-updates |
| `numberFormat` | optional number format |

### Returns

existing or newly created Objective

</ApiMemberCard>

## setScore

<ApiMemberCard
  id="setscore"
  name="setScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setScore(target: String, objective: Objective, value: Int)
```

Set a score for a target identified by name.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target name |
| `objective` | objective to set |
| `value` | score value to set |

</ApiMemberCard>

## setScore

<ApiMemberCard
  id="setscore"
  name="setScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setScore(target: Entity, objective: Objective, value: Int)
```

Set a score for an Entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target Entity |
| `objective` | objective to set |
| `value` | score value |

</ApiMemberCard>

## setScore

<ApiMemberCard
  id="setscore"
  name="setScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setScore(target: ScoreHolder, objective: Objective, value: Int)
```

Set a score for a ScoreHolder.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target ScoreHolder |
| `objective` | objective to set |
| `value` | score value |

</ApiMemberCard>

## addScore

<ApiMemberCard
  id="addscore"
  name="addScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addScore(target: String, objective: Objective, delta: Int)
```

Add delta to a target's score by name.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target name |
| `objective` | objective to modify |
| `delta` | amount to add |

</ApiMemberCard>

## addScore

<ApiMemberCard
  id="addscore"
  name="addScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addScore(target: Entity, objective: Objective, delta: Int)
```

Add delta to a target Entity's score.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target Entity |
| `objective` | objective to modify |
| `delta` | amount to add |

</ApiMemberCard>

## addScore

<ApiMemberCard
  id="addscore"
  name="addScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addScore(target: ScoreHolder, objective: Objective, delta: Int)
```

Add delta to a ScoreHolder's score.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target ScoreHolder |
| `objective` | objective to modify |
| `delta` | amount to add |

</ApiMemberCard>

## getScore

<ApiMemberCard
  id="getscore"
  name="getScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getScore(target: String, objective: Objective): Int?
```

Get a score by target name.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target name |
| `objective` | objective to query |

### Returns

score value or null if not present

</ApiMemberCard>

## getScore

<ApiMemberCard
  id="getscore"
  name="getScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getScore(target: Entity, objective: Objective): Int?
```

Get a score by Entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target Entity |
| `objective` | objective to query |

### Returns

score value or null if not present

</ApiMemberCard>

## getScore

<ApiMemberCard
  id="getscore"
  name="getScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getScore(target: ScoreHolder, objective: Objective): Int?
```

Get a score for a ScoreHolder.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target ScoreHolder |
| `objective` | objective to query |

### Returns

score value or null if not present

</ApiMemberCard>

## resetScore

<ApiMemberCard
  id="resetscore"
  name="resetScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetScore(target: String, objective: Objective)
```

Reset a target's score by name.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target name |
| `objective` | objective to reset |

</ApiMemberCard>

## resetScore

<ApiMemberCard
  id="resetscore"
  name="resetScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetScore(target: Entity, objective: Objective)
```

Reset a target's score by Entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target Entity |
| `objective` | objective to reset |

</ApiMemberCard>

## resetScore

<ApiMemberCard
  id="resetscore"
  name="resetScore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetScore(target: ScoreHolder, objective: Objective)
```

Reset a ScoreHolder's score.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target ScoreHolder |
| `objective` | objective to reset |

</ApiMemberCard>

## leaveTeam

<ApiMemberCard
  id="leaveteam"
  name="leaveTeam"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun leaveTeam(members: Collection<ScoreHolder>)
```

Remove a collection of players from any teams.

### Parameters

| Parameter | Description |
| --- | --- |
| `members` | collection of ScoreHolder members to remove from teams |

</ApiMemberCard>

## joinTeam

<ApiMemberCard
  id="jointeam"
  name="joinTeam"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun joinTeam(team: PlayerTeam, members: Collection<ScoreHolder>)
```

Add members to a PlayerTeam.

### Parameters

| Parameter | Description |
| --- | --- |
| `team` | PlayerTeam to join |
| `members` | collection of ScoreHolder to add |

</ApiMemberCard>

## emptyTeam

<ApiMemberCard
  id="emptyteam"
  name="emptyTeam"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun emptyTeam(team: PlayerTeam)
```

Empty a player team of all members.

### Parameters

| Parameter | Description |
| --- | --- |
| `team` | PlayerTeam to empty |

</ApiMemberCard>

## deleteTeam

<ApiMemberCard
  id="deleteteam"
  name="deleteTeam"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun deleteTeam(team: PlayerTeam)
```

Delete a player team from the scoreboard.

### Parameters

| Parameter | Description |
| --- | --- |
| `team` | team to delete |

</ApiMemberCard>

## createTeam

<ApiMemberCard
  id="createteam"
  name="createTeam"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun createTeam(name: String, displayName: Component = Component.literal(name))
```

Create a team if it does not exist.

### Parameters

| Parameter | Description |
| --- | --- |
| `name` | team name |
| `displayName` | display name component for the team |

</ApiMemberCard>

## getTeam

<ApiMemberCard
  id="getteam"
  name="getTeam"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getTeam(name: String): PlayerTeam?
```

Get a team by name.

### Parameters

| Parameter | Description |
| --- | --- |
| `name` | team name |

### Returns

PlayerTeam or null if not found

</ApiMemberCard>

## addTriggerValue

<ApiMemberCard
  id="addtriggervalue"
  name="addTriggerValue"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addTriggerValue(serverPlayer: ServerPlayer, objective: Objective, i: Int)
```

Add a trigger score value for a player on a trigger objective.

### Parameters

| Parameter | Description |
| --- | --- |
| `serverPlayer` | player to modify |
| `objective` | trigger objective |
| `i` | amount to add |

</ApiMemberCard>

## setTriggerValue

<ApiMemberCard
  id="settriggervalue"
  name="setTriggerValue"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setTriggerValue(serverPlayer: ServerPlayer, objective: Objective, i: Int)
```

Set a trigger score value for a player on a trigger objective.

### Parameters

| Parameter | Description |
| --- | --- |
| `serverPlayer` | player to modify |
| `objective` | trigger objective |
| `i` | value to set |

</ApiMemberCard>

## simpleTrigger

<ApiMemberCard
  id="simpletrigger"
  name="simpleTrigger"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun simpleTrigger(serverPlayer: ServerPlayer, objective: Objective)
```

Simple trigger: increment a trigger objective for a player by 1.

### Parameters

| Parameter | Description |
| --- | --- |
| `serverPlayer` | player to trigger |
| `objective` | trigger objective |

</ApiMemberCard>

