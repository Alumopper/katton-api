# Play Networking for Scripts

Katton 0.5.1 lets Fabric and NeoForge scripts exchange binary data during the Minecraft Play phase. Both peers must run Katton. Paper does not provide this API because it has no Katton client.

Katton registers one packet type, `katton:script_payload`, when the mod starts. Its codec converts packets to and from bytes. Your scripts use logical channel IDs inside that packet. Katton removes script receivers when their pack reloads. The codec stays registered, so the reloaded scripts can use the same channel.

## Register Receivers

Put the server receiver in a server script, such as `ServerMain.kt`:

```kotlin
import net.minecraft.resources.Identifier
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.network.ScriptPlayNetworking

private val channel = Identifier.parse("example:save_unlock")

@ServerScriptEntrypoint(ServerPhase.READY)
fun registerServerPackets() {
    ScriptPlayNetworking.registerReceiver(channel) { player, bytes ->
        // Decode and validate bytes before changing server state.
        println("Received ${bytes.size} bytes from ${player.name.string}")
        ScriptPlayNetworking.sendToClient(player, channel, "ok".encodeToByteArray())
    }
}
```

Put the client receiver in a client script, such as `ClientMain.kt`:

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

Call `sendSave` from a client event or action after the connection is ready. Do not send from the registration entrypoint. The two scripts must use the same channel ID.

API reference: [Fabric server](../api/fabric/ScriptPlayNetworking.md), [Fabric client](../api/fabric/ClientScriptPlayNetworking.md), [NeoForge server](../api/neoforge/ScriptPlayNetworking.md), and [NeoForge client](../api/neoforge/ClientScriptPlayNetworking.md).

## Limits and Validation

- Each data array can contain at most 16 KiB (16,384 bytes). A larger array causes packet construction to fail.
- The channel ID can contain at most 128 characters.
- `sendToServer` and `sendToClient` return `false` if the peer does not support the Katton packet channel. A `true` result means the packet was sent; it does not confirm that a script receiver processed it.
- Treat client data as untrusted. Decode it and validate the player, inventory slot, and item data on the server before changing server state.

If an older script registers its own `CustomPacketPayload` type, move it to a Katton logical channel. Restart the game or server once after migration to clear the old process-wide codec registration. See [Entrypoint Lifecycle](./lifecycle.md) for registration phases and [Hot Reload](../quickstart/hot-reload.md) for receiver cleanup.
