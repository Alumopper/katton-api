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
获取目标中目标的分值。
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

获取目标中目标的分值。

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

为目标中的目标设置分数值。

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

创建一个带有名字的假得分持有者。

### 参数

| 参数 | 说明 |
| --- | --- |
| `name` | 假分数持有者的姓名 |

### 返回值

仅用于计分板目的的ScoreHolder

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

像地图一样访问得分持有者跨目标的得分。

### 属性

| 属性 | 说明 |
| --- | --- |
| `scoreboard` | 记分板实例 |
| `scoreHolder` | 正在访问其分数的ScoreHolder |

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

获取目标的得分值。

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

设置目标的分值。

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

用于访问分数持有者分数的扩展属性。

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

按名称获取目标。

### 参数

| 参数 | 说明 |
| --- | --- |
| `name` | 目标名称 |

### 返回值

目标或 null 如果未找到

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

获取或创建记分板目标。

### 参数

| 参数 | 说明 |
| --- | --- |
| `name` | 目标名称 |
| `displayName` | 目标的显示名称组件 |
| `criteria` | 客观标准 |
| `renderType` | 目标的渲染类型 |
| `displayAutoUpdate` | 显示是否自动更新 |
| `numberFormat` | 可选数字格式 |

### 返回值

现有或新创建的目标

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

为按名称标识的目标设置分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标名称 |
| `objective` | 设定目标 |
| `value` | 要设置的分值 |

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

为实体设置分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标实体 |
| `objective` | 设定目标 |
| `value` | 分值 |

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

将分数设置为ScoreHolder。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标ScoreHolder |
| `objective` | 设定目标 |
| `value` | 分值 |

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

按名称将增量添加到目标分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标名称 |
| `objective` | 修改目标 |
| `delta` | 添加量 |

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

将增量添加到目标实体的分数中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标实体 |
| `objective` | 修改目标 |
| `delta` | 添加量 |

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

将 delta 添加到 ScoreHolder 的分数中。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标ScoreHolder |
| `objective` | 修改目标 |
| `delta` | 添加量 |

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

按目标名称获取分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标名称 |
| `objective` | 查询目的 |

### 返回值

得分值或 null（如果不存在）

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

按实体获取分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标实体 |
| `objective` | 查询目的 |

### 返回值

得分值或 null（如果不存在）

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

获得ScoreHolder 的分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标ScoreHolder |
| `objective` | 查询目的 |

### 返回值

得分值或 null（如果不存在）

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

按名称重置目标的分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标名称 |
| `objective` | 重置目标 |

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

按实体重置目标的分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标实体 |
| `objective` | 重置目标 |

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

重置ScoreHolder的分数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标ScoreHolder |
| `objective` | 重置目标 |

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

从任何球队中删除一组球员。

### 参数

| 参数 | 说明 |
| --- | --- |
| `members` | 要从团队中删除的ScoreHolder成员集合 |

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

将成员添加到PlayerTeam。

### 参数

| 参数 | 说明 |
| --- | --- |
| `team` | PlayerTeam加入 |
| `members` | 要添加的ScoreHolder集合 |

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

清空玩家团队的所有成员。

### 参数

| 参数 | 说明 |
| --- | --- |
| `team` | PlayerTeam 清空 |

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

从记分板中删除玩家队伍。

### 参数

| 参数 | 说明 |
| --- | --- |
| `team` | 要删除的团队 |

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

如果团队不存在，请创建一个团队。

### 参数

| 参数 | 说明 |
| --- | --- |
| `name` | 队名 |
| `displayName` | 团队的显示名称组件 |

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

按名字找一个团队。

### 参数

| 参数 | 说明 |
| --- | --- |
| `name` | 队名 |

### 返回值

PlayerTeam 如果未找到则为 null

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

为触发目标上的玩家添加触发得分值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverPlayer` | 播放器修改 |
| `objective` | 触发目标 |
| `i` | 添加量 |

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

为触发目标上的玩家设置触发得分值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverPlayer` | 播放器修改 |
| `objective` | 触发目标 |
| `i` | 要设置的值 |

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

简单触发：将玩家的触发目标增加 1。

### 参数

| 参数 | 说明 |
| --- | --- |
| `serverPlayer` | 玩家触发 |
| `objective` | 触发目标 |

</ApiMemberCard>

