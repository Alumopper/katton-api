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
在服务端发送和接收脚本的游戏阶段数据包。脚本重载时，Katton 保持数据包编解码器的注册。
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

在服务端发送和接收脚本的游戏阶段数据包。脚本重载时，Katton 保持数据包编解码器的注册。

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

为逻辑频道注册接收器。脚本重载时，Katton 会清理脚本持有的接收器。

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

向玩家发送最多 16 KiB 的数据。对端无法接收 Katton 数据包时返回 false；true 不代表对端已处理。

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

将收到的数据包分发给脚本处理器。此宿主入口不供脚本调用。

</ApiMemberCard>

</ApiMemberCard>

