---
title: LootTableEvent
outline: [2, 2]
---

<ApiDocPage
  title="LootTableEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/LootTableEvent.kt"
>
NeoForge 平台的战利品表事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LootTableEvent&quot;,&quot;href&quot;:&quot;#loottableevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableReplace&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablereplace&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableModify&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablemodify&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableAllLoad&quot;,&quot;href&quot;:&quot;#loottableevent-onloottableallload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LootTableEvent.onLootTableModifyDrops&quot;,&quot;href&quot;:&quot;#loottableevent-onloottablemodifydrops&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LootTableEvent

<ApiMemberCard
  id="loottableevent"
  name="LootTableEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
object LootTableEvent
```

NeoForge 平台的战利品表事件。

### LootTableEvent.onLootTableReplace

<ApiMemberCard
  id="loottableevent-onloottablereplace"
  name="LootTableEvent.onLootTableReplace"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableReplace
```

当需要整体替换战利品表时触发。

### 返回值

返回替换用的 LootTable，或返回 null 以保留原表。

这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### LootTableEvent.onLootTableModify

<ApiMemberCard
  id="loottableevent-onloottablemodify"
  name="LootTableEvent.onLootTableModify"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableModify
```

当需要修改战利品表内容时触发。
可用于添加或移除战利品池条目。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### LootTableEvent.onLootTableAllLoad

<ApiMemberCard
  id="loottableevent-onloottableallload"
  name="LootTableEvent.onLootTableAllLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableAllLoad
```

当所有战利品表加载完成后触发。
可用于在全部表可用后进行后处理。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### LootTableEvent.onLootTableModifyDrops

<ApiMemberCard
  id="loottableevent-onloottablemodifydrops"
  name="LootTableEvent.onLootTableModifyDrops"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLootTableModifyDrops
```

当需要修改战利品表的掉落内容时触发。
可用于自定义实际掉落的物品。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

</ApiMemberCard>

