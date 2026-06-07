---
title: ItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="ItemEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ItemEvent.kt"
>
NeoForge平台的物品交互事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemEvent&quot;,&quot;href&quot;:&quot;#itemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}]' />

## ItemEvent

<ApiMemberCard
  id="itemevent"
  name="ItemEvent"
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

NeoForge平台的物品交互事件。

该对象提供与物品使用相关的事件，包括
使用块上的物品和一般物品使用事件。

</ApiMemberCard>

