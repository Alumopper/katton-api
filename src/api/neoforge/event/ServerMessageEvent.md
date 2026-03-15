---
title: ServerMessageEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerMessageEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerMessageEvent.kt"
>
Server-side message events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerMessageEvent&quot;,&quot;href&quot;:&quot;#servermessageevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onServerChat&quot;,&quot;href&quot;:&quot;#servermessageevent-onserverchat&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerMessageEvent

<ApiMemberCard
  id="servermessageevent"
  name="ServerMessageEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = top.katton.Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

Server-side message events for NeoForge platform.

This object provides events related to chat messages.

### ServerMessageEvent.onServerChat

<ApiMemberCard
  id="servermessageevent-onserverchat"
  name="ServerMessageEvent.onServerChat"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onServerChat
```

Event triggered when a server chat message is sent.
Can be cancelled to prevent the message from being sent.

</ApiMemberCard>

</ApiMemberCard>

