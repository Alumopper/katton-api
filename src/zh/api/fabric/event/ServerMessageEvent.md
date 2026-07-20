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
Fabric 平台的服务端消息事件。 此对象提供与聊天消息、游戏消息和命令消息相关的事件。 包含可取消的允许类事件，以及仅通知的处理类事件。
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

Fabric 平台的服务端消息事件。
此对象提供与聊天消息、游戏消息和命令消息相关的事件。
包含可取消的允许类事件，以及仅通知的处理类事件。

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

当需要决定是否允许发送聊天消息时触发。

### 返回值

返回值允许消息发送，false 表示取消。

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

当需要决定是否允许发送游戏消息时触发。

### 返回值

返回值允许消息发送，false 表示取消。

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

当需要决定是否允许发送命令消息时触发。

### 返回值

返回值允许消息发送，false 表示取消。

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

当聊天消息发送后触发（在允许之后）。

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

当游戏消息发送后触发（在允许之后）。

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

当命令消息发送后触发（在允许之后）。

</ApiMemberCard>

</ApiMemberCard>

