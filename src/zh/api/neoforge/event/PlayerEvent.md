---
title: PlayerEvent
outline: [2, 2]
---

<ApiDocPage
  title="PlayerEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/PlayerEvent.kt"
>
NeoForge平台的玩家互动事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;PlayerEvent&quot;,&quot;href&quot;:&quot;#playerevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onAttackEntity&quot;,&quot;href&quot;:&quot;#playerevent-onattackentity&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onEntityInteract&quot;,&quot;href&quot;:&quot;#playerevent-onentityinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onBlockInteract&quot;,&quot;href&quot;:&quot;#playerevent-onblockinteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onItemInteract&quot;,&quot;href&quot;:&quot;#playerevent-oniteminteract&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onLeftClickBlock&quot;,&quot;href&quot;:&quot;#playerevent-onleftclickblock&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;PlayerEvent.onDestroyItem&quot;,&quot;href&quot;:&quot;#playerevent-ondestroyitem&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## PlayerEvent

<ApiMemberCard
  id="playerevent"
  name="PlayerEvent"
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

NeoForge平台的玩家互动事件。

该对象提供与玩家交互相关的事件，包括
攻击实体、与方块/实体交互以及物品销毁。

### PlayerEvent.onAttackEntity

<ApiMemberCard
  id="playerevent-onattackentity"
  name="PlayerEvent.onAttackEntity"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onAttackEntity
```

当玩家攻击（左键单击）实体时触发事件。
可以取消以防止攻击。

</ApiMemberCard>

### PlayerEvent.onEntityInteract

<ApiMemberCard
  id="playerevent-onentityinteract"
  name="PlayerEvent.onEntityInteract"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEntityInteract
```

当玩家与实体交互（右键单击）时触发事件。
可以取消以防止交互。

</ApiMemberCard>

### PlayerEvent.onBlockInteract

<ApiMemberCard
  id="playerevent-onblockinteract"
  name="PlayerEvent.onBlockInteract"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onBlockInteract
```

当玩家与方块交互（右键单击）时触发事件。
可以取消以防止交互。

</ApiMemberCard>

### PlayerEvent.onItemInteract

<ApiMemberCard
  id="playerevent-oniteminteract"
  name="PlayerEvent.onItemInteract"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onItemInteract
```

当玩家使用（右键单击）物品时触发的事件。
可以取消以防止物品使用。

</ApiMemberCard>

### PlayerEvent.onLeftClickBlock

<ApiMemberCard
  id="playerevent-onleftclickblock"
  name="PlayerEvent.onLeftClickBlock"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onLeftClickBlock
```

当玩家左键单击方块时触发事件。
可以取消以阻止该操作。

</ApiMemberCard>

### PlayerEvent.onDestroyItem

<ApiMemberCard
  id="playerevent-ondestroyitem"
  name="PlayerEvent.onDestroyItem"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onDestroyItem
```

当玩家的物品被破坏（例如工具损坏）时触发事件。

</ApiMemberCard>

</ApiMemberCard>

