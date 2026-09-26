---
title: ClientScriptPlayNetworking
outline: [2, 2]
---

<ApiDocPage
  title="ClientScriptPlayNetworking"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.network"
  source-file="fabric/src/main/kotlin/top/katton/network/ClientScriptPlayNetworking.kt"
>
Send and receive script Play packets on the client. Register receivers from client entrypoints.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ClientScriptPlayNetworking&quot;,&quot;href&quot;:&quot;#clientscriptplaynetworking&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ClientScriptPlayNetworking.registerReceiver&quot;,&quot;href&quot;:&quot;#clientscriptplaynetworking-registerreceiver&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ClientScriptPlayNetworking.sendToServer&quot;,&quot;href&quot;:&quot;#clientscriptplaynetworking-sendtoserver&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ClientScriptPlayNetworking.receive&quot;,&quot;href&quot;:&quot;#clientscriptplaynetworking-receive&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## ClientScriptPlayNetworking

<ApiMemberCard
  id="clientscriptplaynetworking"
  name="ClientScriptPlayNetworking"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object ClientScriptPlayNetworking
```

Send and receive script Play packets on the client. Register receivers from client entrypoints.

### ClientScriptPlayNetworking.registerReceiver

<ApiMemberCard
  id="clientscriptplaynetworking-registerreceiver"
  name="ClientScriptPlayNetworking.registerReceiver"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmStatic
@JvmStatic fun registerReceiver(channel: Identifier, handler: (ByteArray) -> Unit)
```

Register a receiver for a logical channel. Katton removes the script-owned receiver on reload.

</ApiMemberCard>

### ClientScriptPlayNetworking.sendToServer

<ApiMemberCard
  id="clientscriptplaynetworking-sendtoserver"
  name="ClientScriptPlayNetworking.sendToServer"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmStatic
@JvmStatic fun sendToServer(channel: Identifier, data: ByteArray): Boolean
```

Send up to 16 KiB to the server. Returns false if the peer cannot receive Katton packets. True does not confirm processing.

</ApiMemberCard>

### ClientScriptPlayNetworking.receive

<ApiMemberCard
  id="clientscriptplaynetworking-receive"
  name="ClientScriptPlayNetworking.receive"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmStatic
@JvmStatic fun receive(packet: ScriptPayloadPacket)
```

Dispatch a received packet to script handlers. This host entrypoint is not for scripts to call.

</ApiMemberCard>

</ApiMemberCard>

