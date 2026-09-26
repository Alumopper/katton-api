# 脚本的游戏阶段网络通信

Katton 0.5.1 支持 Fabric 和 NeoForge 脚本在 Minecraft 游戏阶段交换二进制数据。通信双方都必须安装 Katton。Paper 没有 Katton 客户端，因此不提供此 API。

Katton 在模组启动时注册一次 `katton:script_payload` 数据包类型。其编解码器负责在数据包与字节之间转换。脚本在这个数据包内使用各自的逻辑频道 ID。脚本包重载时，Katton 会清理该包注册的接收器。编解码器保持注册，因此重载后的脚本可以继续使用同一频道。

## 注册接收器

在服务端脚本中注册接收器，例如 `ServerMain.kt`：

```kotlin
import net.minecraft.resources.Identifier
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.network.ScriptPlayNetworking

private val channel = Identifier.parse("example:save_unlock")

@ServerScriptEntrypoint(ServerPhase.READY)
fun registerServerPackets() {
    ScriptPlayNetworking.registerReceiver(channel) { player, bytes ->
        // 修改服务端状态前，先解码并校验数据。
        println("Received ${bytes.size} bytes from ${player.name.string}")
        ScriptPlayNetworking.sendToClient(player, channel, "ok".encodeToByteArray())
    }
}
```

在客户端脚本中注册接收器，例如 `ClientMain.kt`：

```kotlin
import net.minecraft.resources.Identifier
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.network.ClientScriptPlayNetworking

private val channel = Identifier.parse("example:save_unlock")

@ClientScriptEntrypoint(ClientPhase.JOINED)
fun registerClientPackets() {
    ClientScriptPlayNetworking.registerReceiver(channel) { bytes ->
        println("Server replied: ${bytes.decodeToString()}")
    }
}

fun sendSave(bytes: ByteArray): Boolean =
    ClientScriptPlayNetworking.sendToServer(channel, bytes)
```

连接就绪后，从客户端事件或操作中调用 `sendSave`。不要在注册入口中发送数据。两侧脚本必须使用相同的频道 ID。

API 参考：[Fabric 服务端](../api/fabric/ScriptPlayNetworking.md)、[Fabric 客户端](../api/fabric/ClientScriptPlayNetworking.md)、[NeoForge 服务端](../api/neoforge/ScriptPlayNetworking.md)及 [NeoForge 客户端](../api/neoforge/ClientScriptPlayNetworking.md)。

## 限制与校验

- 每个数据数组最多为 16 KiB，即 16,384 字节。超过上限会导致数据包构造失败。
- 频道 ID 最多为 128 个字符。
- 如果对端不支持 Katton 数据包频道，`sendToServer` 和 `sendToClient` 会返回 `false`。返回 `true` 表示数据包已发送，不代表脚本接收器已处理它。
- 不要信任客户端发来的数据。修改服务端状态前，应在服务端解码数据，并校验玩家、背包槽位和物品数据。

如果旧脚本自行注册了 `CustomPacketPayload` 类型，请改用 Katton 的逻辑频道。迁移后重启一次游戏或服务器，以清除旧的进程级编解码器注册。注册时机见[入口生命周期](./lifecycle.md)，接收器清理见[热重载](../quickstart/hot-reload.md)。
