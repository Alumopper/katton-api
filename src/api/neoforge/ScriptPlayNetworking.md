---
title: ScriptPlayNetworking
outline: [2, 2]
---

<ApiDocPage
  title="ScriptPlayNetworking"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.network"
  source-file="neoforge/src/main/kotlin/top/katton/network/ScriptPlayNetworking.kt"
>
Send and receive script Play packets on the server. Katton keeps the packet codec registered across script reloads.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ScriptPlayNetworking&quot;,&quot;href&quot;:&quot;#scriptplaynetworking&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ScriptPlayNetworking.registerReceiver&quot;,&quot;href&quot;:&quot;#scriptplaynetworking-registerreceiver&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ScriptPlayNetworking.sendToClient&quot;,&quot;href&quot;:&quot;#scriptplaynetworking-sendtoclient&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ScriptPlayNetworking.receive&quot;,&quot;href&quot;:&quot;#scriptplaynetworking-receive&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## ScriptPlayNetworking

<ApiMemberCard
  id="scriptplaynetworking"
  name="ScriptPlayNetworking"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
object ScriptPlayNetworking
```

Send and receive script Play packets on the server. Katton keeps the packet codec registered across script reloads.

### ScriptPlayNetworking.registerReceiver

<ApiMemberCard
  id="scriptplaynetworking-registerreceiver"
  name="ScriptPlayNetworking.registerReceiver"
  kind="Function"
  kind-key="function"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmStatic
@JvmStatic fun registerReceiver(channel: Identifier, handler: (ServerPlayer, ByteArray) -> Unit)
```

Register a receiver for a logical channel. Katton removes the script-owned receiver on reload.

</ApiMemberCard>

### ScriptPlayNetworking.sendToClient

<ApiMemberCard
  id="scriptplaynetworking-sendtoclient"
  name="ScriptPlayNetworking.sendToClient"
  kind="Function"
  kind-key="function"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmStatic
@JvmStatic fun sendToClient(player: ServerPlayer, channel: Identifier, data: ByteArray): Boolean
```

Send up to 16 KiB to a player. Returns false if the peer cannot receive Katton packets. True does not confirm processing.

</ApiMemberCard>

### ScriptPlayNetworking.receive

<ApiMemberCard
  id="scriptplaynetworking-receive"
  name="ScriptPlayNetworking.receive"
  kind="Function"
  kind-key="function"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmStatic
@JvmStatic fun receive(player: ServerPlayer, packet: ScriptPayloadPacket)
```

Dispatch a received packet to script handlers. This host entrypoint is not for scripts to call.

</ApiMemberCard>

</ApiMemberCard>

