---
title: LootTableEvent
outline: [2, 2]
---

<ApiDocPage
  title="LootTableEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/LootTableEvent.kt"
>
Fabric 平台的战利品表活动。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LootTableEvent&quot;,&quot;href&quot;:&quot;#loottableevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableReplace&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablereplace&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableModify&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablemodify&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableAllLoad&quot;,&quot;href&quot;:&quot;#loottableevent-onloottableallload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableModifyDrops&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablemodifydrops&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LootTableEvent

<ApiMemberCard
  id="loottableevent"
  name="LootTableEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object LootTableEvent
```

Fabric 平台的战利品表活动。

该对象提供与战利品表操作相关的事件，包括
替换、修改战利品表加载并对战利品表加载做出反应。

### LootTableEvent.onLootTableReplace

<ApiMemberCard
  id="loottableevent-onloottablereplace"
  name="LootTableEvent.onLootTableReplace"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onLootTableReplace
```

触发事件以完全替换战利品表。

### 返回值

替换 LootTable，或 null 以保留原始值。

</ApiMemberCard>

### LootTableEvent.onLootTableModify

<ApiMemberCard
  id="loottableevent-onloottablemodify"
  name="LootTableEvent.onLootTableModify"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onLootTableModify
```

触发事件以修改战利品表的内容。
使用它来添加或删除战利品池条目。

</ApiMemberCard>

### LootTableEvent.onLootTableAllLoad

<ApiMemberCard
  id="loottableevent-onloottableallload"
  name="LootTableEvent.onLootTableAllLoad"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onLootTableAllLoad
```

当所有战利品表都已加载时触发事件。
在所有表都可用后，使用它进行后处理。

</ApiMemberCard>

### LootTableEvent.onLootTableModifyDrops

<ApiMemberCard
  id="loottableevent-onloottablemodifydrops"
  name="LootTableEvent.onLootTableModifyDrops"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onLootTableModifyDrops
```

触发事件以修改战利品表中的掉落物。
使用它来自定义实际掉落的物品。

</ApiMemberCard>

</ApiMemberCard>

