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
Server-side message events for Fabric platform.
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

Server-side message events for Fabric platform.

This object provides events related to chat messages, game messages, and command messages.
Includes both allow events (can cancel) and handler events (notification only).

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

Event triggered to allow or deny a chat message from being sent.

### Returns

true to allow the message, false to cancel it.

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

Event triggered to allow or deny a game message from being sent.

### Returns

true to allow the message, false to cancel it.

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

Event triggered to allow or deny a command message from being sent.

### Returns

true to allow the message, false to cancel it.

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

Event triggered when a chat message is sent (after being allowed).

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

Event triggered when a game message is sent (after being allowed).

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

Event triggered when a command message is sent (after being allowed).

</ApiMemberCard>

</ApiMemberCard>

