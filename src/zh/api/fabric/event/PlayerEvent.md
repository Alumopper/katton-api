---
title: PlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="PlayerEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/PlayerEvent.kt"
>
Fabric平台的玩家互动事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;PlayerEvent&quot;,&quot;href&quot;:&quot;#playerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onUseItemOn&quot;,&quot;href&quot;:&quot;#playerevent-onuseitemon&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onUseWithoutItem&quot;,&quot;href&quot;:&quot;#playerevent-onusewithoutitem&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onAttackBlock&quot;,&quot;href&quot;:&quot;#playerevent-onattackblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onAttackEntity&quot;,&quot;href&quot;:&quot;#playerevent-onattackentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onBlockInteract&quot;,&quot;href&quot;:&quot;#playerevent-onblockinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onEntityInteract&quot;,&quot;href&quot;:&quot;#playerevent-onentityinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onItemInteract&quot;,&quot;href&quot;:&quot;#playerevent-oniteminteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onDestroyItem&quot;,&quot;href&quot;:&quot;#playerevent-ondestroyitem&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## PlayerEvent

<ApiMemberCard
  id="playerevent"
  name="PlayerEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object PlayerEvent
```

Fabric平台的玩家互动事件。

该对象提供与玩家交互相关的事件，包括
攻击方块/实体、使用物品以及与方块/实体交互。

### PlayerEvent.onUseItemOn

<ApiMemberCard
  id="playerevent-onuseitemon"
  name="PlayerEvent.onUseItemOn"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUseItemOn
```

当玩家使用方块上的物品时触发事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果覆盖。

</ApiMemberCard>

### PlayerEvent.onUseWithoutItem

<ApiMemberCard
  id="playerevent-onusewithoutitem"
  name="PlayerEvent.onUseWithoutItem"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUseWithoutItem
```

当玩家在不持有物品的情况下与方块交互时触发事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果覆盖。

</ApiMemberCard>

### PlayerEvent.onAttackBlock

<ApiMemberCard
  id="playerevent-onattackblock"
  name="PlayerEvent.onAttackBlock"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAttackBlock
```

当玩家攻击（左键单击）方块时触发事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果取消/覆盖。

</ApiMemberCard>

### PlayerEvent.onAttackEntity

<ApiMemberCard
  id="playerevent-onattackentity"
  name="PlayerEvent.onAttackEntity"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAttackEntity
```

当玩家攻击（左键单击）实体时触发事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果取消/覆盖。

</ApiMemberCard>

### PlayerEvent.onBlockInteract

<ApiMemberCard
  id="playerevent-onblockinteract"
  name="PlayerEvent.onBlockInteract"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBlockInteract
```

当玩家与方块交互（右键单击）时触发事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果覆盖。

</ApiMemberCard>

### PlayerEvent.onEntityInteract

<ApiMemberCard
  id="playerevent-onentityinteract"
  name="PlayerEvent.onEntityInteract"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onEntityInteract
```

当玩家与实体交互（右键单击）时触发事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果覆盖。

</ApiMemberCard>

### PlayerEvent.onItemInteract

<ApiMemberCard
  id="playerevent-oniteminteract"
  name="PlayerEvent.onItemInteract"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onItemInteract
```

当玩家使用（右键单击）物品时触发的事件。

### 返回值

InteractionResult.PASS 允许默认行为或其他结果覆盖。

</ApiMemberCard>

### PlayerEvent.onDestroyItem

<ApiMemberCard
  id="playerevent-ondestroyitem"
  name="PlayerEvent.onDestroyItem"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onDestroyItem
```

当玩家的物品被破坏（例如工具损坏）时触发事件。

</ApiMemberCard>

</ApiMemberCard>

