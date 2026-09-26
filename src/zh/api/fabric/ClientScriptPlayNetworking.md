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
在客户端发送和接收脚本的游戏阶段数据包。请在客户端入口中注册接收器。
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

在客户端发送和接收脚本的游戏阶段数据包。请在客户端入口中注册接收器。

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

为逻辑频道注册接收器。脚本重载时，Katton 会清理脚本持有的接收器。

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

向服务端发送最多 16 KiB 的数据。对端无法接收 Katton 数据包时返回 false；true 不代表对端已处理。

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

将收到的数据包分发给脚本处理器。此宿主入口不供脚本调用。

</ApiMemberCard>

</ApiMemberCard>

