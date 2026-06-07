---
title: ItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="ItemEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ItemEvent.kt"
>
Fabric平台的物品交互事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemEvent&quot;,&quot;href&quot;:&quot;#itemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ItemEvent.onUseOn&quot;,&quot;href&quot;:&quot;#itemevent-onuseon&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ItemEvent.onUse&quot;,&quot;href&quot;:&quot;#itemevent-onuse&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ItemEvent

<ApiMemberCard
  id="itemevent"
  name="ItemEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ItemEvent
```

Fabric平台的物品交互事件。

该对象提供与物品使用和投掷相关的事件。
当玩家与世界中的物品互动时，就会触发事件。

### ItemEvent.onUseOn

<ApiMemberCard
  id="itemevent-onuseon"
  name="ItemEvent.onUseOn"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUseOn
```

当在块上使用物品时触发事件（右键单击块）。

### 返回值

InteractionResult 控制交互结果。
返回非空值以覆盖默认行为。

</ApiMemberCard>

### ItemEvent.onUse

<ApiMemberCard
  id="itemevent-onuse"
  name="ItemEvent.onUse"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onUse
```

使用物品时触发的事件（在空中或实体上右键单击）。

### 返回值

InteractionResult 控制交互结果。
返回非空值以覆盖默认行为。

</ApiMemberCard>

</ApiMemberCard>

