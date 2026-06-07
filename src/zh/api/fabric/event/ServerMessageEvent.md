---
title: ServerMessageEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerMessageEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerMessageEvent.kt"
>
Fabric平台的服务器端消息事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerMessageEvent&quot;,&quot;href&quot;:&quot;#servermessageevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onAllowChatMessage&quot;,&quot;href&quot;:&quot;#servermessageevent-onallowchatmessage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onAllowGameMessage&quot;,&quot;href&quot;:&quot;#servermessageevent-onallowgamemessage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onAllowCommandMessage&quot;,&quot;href&quot;:&quot;#servermessageevent-onallowcommandmessage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onChatMessage&quot;,&quot;href&quot;:&quot;#servermessageevent-onchatmessage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onGameMessage&quot;,&quot;href&quot;:&quot;#servermessageevent-ongamemessage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerMessageEvent.onCommandMessage&quot;,&quot;href&quot;:&quot;#servermessageevent-oncommandmessage&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerMessageEvent

<ApiMemberCard
  id="servermessageevent"
  name="ServerMessageEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object ServerMessageEvent
```

Fabric平台的服务器端消息事件。

该对象提供与聊天消息、游戏消息和命令消息相关的事件。
包括允许事件（可以取消）和处理程序事件（仅通知）。

### ServerMessageEvent.onAllowChatMessage

<ApiMemberCard
  id="servermessageevent-onallowchatmessage"
  name="ServerMessageEvent.onAllowChatMessage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowChatMessage
```

触发事件以允许或拒绝发送聊天消息。

### 返回值

true 表示允许该消息， false 表示取消该消息。

</ApiMemberCard>

### ServerMessageEvent.onAllowGameMessage

<ApiMemberCard
  id="servermessageevent-onallowgamemessage"
  name="ServerMessageEvent.onAllowGameMessage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowGameMessage
```

触发事件以允许或拒绝发送游戏消息。

### 返回值

true 表示允许该消息， false 表示取消该消息。

</ApiMemberCard>

### ServerMessageEvent.onAllowCommandMessage

<ApiMemberCard
  id="servermessageevent-onallowcommandmessage"
  name="ServerMessageEvent.onAllowCommandMessage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowCommandMessage
```

触发事件以允许或拒绝发送命令消息。

### 返回值

true 表示允许该消息， false 表示取消该消息。

</ApiMemberCard>

### ServerMessageEvent.onChatMessage

<ApiMemberCard
  id="servermessageevent-onchatmessage"
  name="ServerMessageEvent.onChatMessage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onChatMessage
```

发送聊天消息时触发的事件（被允许后）。

</ApiMemberCard>

### ServerMessageEvent.onGameMessage

<ApiMemberCard
  id="servermessageevent-ongamemessage"
  name="ServerMessageEvent.onGameMessage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onGameMessage
```

发送游戏消息时触发的事件（被允许后）。

</ApiMemberCard>

### ServerMessageEvent.onCommandMessage

<ApiMemberCard
  id="servermessageevent-oncommandmessage"
  name="ServerMessageEvent.onCommandMessage"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onCommandMessage
```

发送命令消息时（被允许后）触发事件。

</ApiMemberCard>

</ApiMemberCard>

