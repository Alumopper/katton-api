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
Fabric 平台的物品交互事件。 此对象提供与物品使用和投掷相关的事件。 当玩家在世界中与物品交互时触发。
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

Fabric 平台的物品交互事件。
此对象提供与物品使用和投掷相关的事件。
当玩家在世界中与物品交互时触发。

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

当物品在方块上使用（右键方块）时触发。

### 返回值

返回值用于控制交互结果。

返回非 null 值可覆盖默认行为。

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

当物品使用（空中右键或对实体使用）时触发。

### 返回值

返回值用于控制交互结果。

返回非 null 值可覆盖默认行为。

</ApiMemberCard>

</ApiMemberCard>

