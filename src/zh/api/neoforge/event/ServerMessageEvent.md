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
NeoForge平台的服务器端消息事件。
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

NeoForge平台的服务器端消息事件。

该对象提供与聊天消息相关的事件。

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

发送服务器聊天消息时触发的事件。
可以取消以防止发送消息。

</ApiMemberCard>

</ApiMemberCard>

