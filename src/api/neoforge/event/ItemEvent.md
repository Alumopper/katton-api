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
Item interaction events for NeoForge platform.
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

Item interaction events for NeoForge platform.

This object provides events related to item usage including
using items on blocks and general item use events.

</ApiMemberCard>

