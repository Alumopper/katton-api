---
title: ServerMobEffectEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerMobEffectEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerMobEffectEvent.kt"
>
Fabric 平台的状态效果事件。 此对象提供与状态效果（药水）相关的事件，包括添加、移除和修改实体效果。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerMobEffectEvent&quot;,&quot;href&quot;:&quot;#servermobeffectevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.initialize&quot;,&quot;href&quot;:&quot;#servermobeffectevent-initialize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAllowAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onallowadd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onBeforeAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onbeforeadd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAfterAdd&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onafteradd&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAllowEarlyRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onallowearlyremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onBeforeRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onbeforeremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.onAfterRemove&quot;,&quot;href&quot;:&quot;#servermobeffectevent-onafterremove&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAllowAddArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectallowaddarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAddArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectaddarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAllowEarlyRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectallowearlyremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectBeforeRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectbeforeremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerMobEffectEvent.MobEffectAfterRemoveArg&quot;,&quot;href&quot;:&quot;#servermobeffectevent-mobeffectafterremovearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ServerMobEffectEvent

<ApiMemberCard
  id="servermobeffectevent"
  name="ServerMobEffectEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object ServerMobEffectEvent
```

Fabric 平台的状态效果事件。
此对象提供与状态效果（药水）相关的事件，包括添加、移除和修改实体效果。

### ServerMobEffectEvent.initialize

<ApiMemberCard
  id="servermobeffectevent-initialize"
  name="ServerMobEffectEvent.initialize"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
fun initialize()
```

通过注册 Fabric 事件处理器初始化状态效果事件。
该方法应在模组初始化期间调用。

</ApiMemberCard>

### ServerMobEffectEvent.onAllowAdd

<ApiMemberCard
  id="servermobeffectevent-onallowadd"
  name="ServerMobEffectEvent.onAllowAdd"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowAdd
```

当需要决定是否允许向实体添加状态效果时触发。

### 返回值

返回值允许效果生效，false 表示取消。

</ApiMemberCard>

### ServerMobEffectEvent.onBeforeAdd

<ApiMemberCard
  id="servermobeffectevent-onbeforeadd"
  name="ServerMobEffectEvent.onBeforeAdd"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBeforeAdd
```

当状态效果添加到实体之前触发。
可用于预处理或修改。

</ApiMemberCard>

### ServerMobEffectEvent.onAfterAdd

<ApiMemberCard
  id="servermobeffectevent-onafteradd"
  name="ServerMobEffectEvent.onAfterAdd"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterAdd
```

当状态效果已添加到实体之后触发。

</ApiMemberCard>

### ServerMobEffectEvent.onAllowEarlyRemove

<ApiMemberCard
  id="servermobeffectevent-onallowearlyremove"
  name="ServerMobEffectEvent.onAllowEarlyRemove"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowEarlyRemove
```

当需要决定是否允许提前移除状态效果时触发。

### 返回值

返回值允许移除，false 表示取消。

</ApiMemberCard>

### ServerMobEffectEvent.onBeforeRemove

<ApiMemberCard
  id="servermobeffectevent-onbeforeremove"
  name="ServerMobEffectEvent.onBeforeRemove"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBeforeRemove
```

当状态效果从实体上移除之前触发。

</ApiMemberCard>

### ServerMobEffectEvent.onAfterRemove

<ApiMemberCard
  id="servermobeffectevent-onafterremove"
  name="ServerMobEffectEvent.onAfterRemove"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterRemove
```

当状态效果已从实体移除之后触发。

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAllowAddArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectallowaddarg"
  name="ServerMobEffectEvent.MobEffectAllowAddArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAllowAddArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

状态效果允许添加事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 接收该效果的实体。 |
| `effectInstance` | 正在添加的效果实例。 |
| `context` | 效果事件的上下文。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAddArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectaddarg"
  name="ServerMobEffectEvent.MobEffectAddArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAddArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

状态效果添加事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 接收该效果的实体。 |
| `effectInstance` | 正在添加的效果实例。 |
| `context` | 效果事件的上下文。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAllowEarlyRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectallowearlyremovearg"
  name="ServerMobEffectEvent.MobEffectAllowEarlyRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAllowEarlyRemoveArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

状态效果允许提前移除事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在失去该效果的实体。 |
| `effectInstance` | 正在移除的效果实例。 |
| `context` | 效果事件的上下文。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectBeforeRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectbeforeremovearg"
  name="ServerMobEffectEvent.MobEffectBeforeRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectBeforeRemoveArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

状态效果移除前事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在失去该效果的实体。 |
| `effectInstance` | 正在移除的效果实例。 |
| `context` | 效果事件的上下文。 |

</ApiMemberCard>

### ServerMobEffectEvent.MobEffectAfterRemoveArg

<ApiMemberCard
  id="servermobeffectevent-mobeffectafterremovearg"
  name="ServerMobEffectEvent.MobEffectAfterRemoveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class MobEffectAfterRemoveArg(val entity: Entity, val effectInstance: MobEffectInstance, val context: EffectEventContext)
```

状态效果移除后事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 已失去该效果的实体。 |
| `effectInstance` | 已移除的效果实例。 |
| `context` | 效果事件的上下文。 |

</ApiMemberCard>

</ApiMemberCard>

