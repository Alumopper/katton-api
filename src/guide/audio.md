# Audio

Katton Alpha 0.5.0 adds audio playback in `top.katton.api.audio`. The API has two layers:

1. **Full playback** — Katton's own decoder and mixer play WAV, MP3, Ogg Vorbis, and FLAC files from a script pack, a Minecraft resource, or a sound event, with pause, seek, speed, volume, fades, and spatial placement. This requires Katton on a **Fabric or NeoForge client**.
2. **Basic sound** — `playBasicSound` / `stopBasicSound` send vanilla sound packets to a player. They work on **Fabric, NeoForge, and Paper/Folia**, need no client mod, and only reference sounds the player's client already knows.

> [!WARNING]
> Audio is a client presentation feature, just like camera scenes. A server can request playback on a player's Katton client, but Paper has no Katton client, so Paper scripts are limited to `playBasicSound` / `stopBasicSound`.

## Which API Should I Use?

| You want to… | Use | Works on |
|---|---|---|
| Play a file shipped inside the script pack | `playClientAudio(AudioSource.packFile(...))` | Fabric/NeoForge client |
| Play an exact sound resource (`sounds/...ogg`) | `playClientAudio(AudioSource.resource(...))` | Fabric/NeoForge client |
| Play a sound event, including modded ones | `playClientAudio(AudioSource.sound(...))` | Fabric/NeoForge client |
| Pause, seek, change speed, loop, or fade a sound | `AudioHandle` controls | Fabric/NeoForge client |
| Play audio on **another** player's client | `playPlayerAudio(player, ...)` | Fabric/NeoForge server + client |
| Play a vanilla/resource-pack sound on any platform | `playBasicSound(player, ...)` | Fabric, NeoForge, Paper |

## Audio Sources

`AudioSource` is resolved on the client. The file extension is never used to detect the format; the decoder **sniffs the content**, so `AudioSource.packFile("audio/theme.bin")` works when the bytes are really an MP3.

```kotlin
import top.katton.api.audio.AudioSource

// 1. A sound event: random weighted selection, pitch/volume from the sound definition.
val event = AudioSource.sound("minecraft:music_disc.cat")

// 2. An exact client resource, bypassing the sound-event table.
val resource = AudioSource.resource("minecraft:sounds/music/game/calm1.ogg")

// 3. A file inside the current script pack.
val file = AudioSource.packFile("audio/theme.mp3")
```

| Factory | Argument | Notes |
|---|---|---|
| `AudioSource.sound(id)` | sound event ID | Picks one weighted sound with the active resource pack and keeps it for looping and seeking. Modded sound events work. |
| `AudioSource.resource(id)` | resource path | Plays exactly one `.ogg` resource. Use this to bypass random sound variants. |
| `AudioSource.packFile(path)` | pack-relative path | Must be called from a script-managed context (an entrypoint, event callback, or scheduled task). The pack revision is captured with the source. |

`AudioSource.packFile` requires a pack context because the path is resolved against the pack that owns the running script:

```kotlin
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.audio.AudioSource
import top.katton.api.audio.playClientAudio

@ClientScriptEntrypoint(ClientPhase.JOINED)
fun startTheme() {
    // Runs inside the pack's script context, so packFile() can resolve "audio/theme.mp3".
    val theme = AudioSource.packFile("audio/theme.mp3")
    playClientAudio(theme)
}
```

## Pack Audio Files

Audio files are ordinary script-pack content, so they travel through the normal signed pack synchronization. You do not need a manifest field for them.

```text
kattonpacks/my_pack/
├── manifest.json
├── MyPack.kt
└── audio/
    ├── theme.mp3
    └── ambience.ogg
```

- Use any relative path except the reserved ones. `*.kt` / `*.java` are compiled as sources, and direct `libs/*.jar` files are libraries; do not put audio there.
- The file suffix is free-form, but a descriptive one (`.mp3`, `.ogg`) keeps your pack readable.
- A single file may be at most **16 MiB**, and the whole pack at most **64 MiB**. See [Manifest, Dependencies, and Signing](../architecture/manifest.md) for the full content rules.
- Because pack content is signed and hashed, changing an audio file changes the pack hash. Existing `AudioSource.packFile` handles keep playing the snapshot they were created from; create a new source after a reload to pick up new bytes.

Supported formats and constraints:

| Format | Content signature | Notes |
|---|---|---|
| PCM WAV | `RIFF....WAVE` | Must contain PCM (signed, unsigned, or float) audio. |
| MP3 | `ID3` or an MPEG frame sync | |
| Ogg Vorbis | `OggS` | |
| FLAC | `fLaC` | 8, 16, or 24 bits per sample. |

All formats accept mono or stereo at 8 kHz – 192 kHz. Decoding normalizes everything to 16-bit PCM, and spatial playback downmixes stereo to mono.

## Playing Audio Locally

`playClientAudio(source, options)` starts a client-side instance and returns an `AudioHandle` immediately. It must be called on the **client thread** — either from a `@ClientScriptEntrypoint` function or inside `runOnClient { ... }`.

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.audio.*

@ClientScriptEntrypoint(ClientPhase.JOINED)
fun playBackgroundMusic() {
    val music = playClientAudio(
        AudioSource.packFile("audio/theme.mp3"),
        AudioOptions(
            volume = 0.6f,
            loop = true,
            category = SoundSource.MUSIC,
        ),
    )
    // Playback is asynchronous: decoding finishes later, and controls return futures.
    music.refresh().thenAccept { snapshot -> println("music state: ${snapshot.state}") }
}
```

### AudioOptions

| Option | Default | Meaning |
|---|---|---|
| `volume` | `1f` | Per-instance volume, `0f`–`1f`. Multiplied by the category volume for the final gain. |
| `playbackRate` | `1f` | Speed and pitch together, `0.25f`–`4f`. `2f` plays twice as fast and one octave higher. |
| `loop` | `false` | Restart when the end is reached. |
| `category` | `SoundSource.MUSIC` | Minecraft sound category; the player's category volume and the master volume apply. |
| `position` | `null` | World position for spatial playback. |
| `entity` | `null` | Entity UUID to follow for spatial playback. Takes precedence over `position` when the entity is found. |
| `range` | `16f` | Linear attenuation distance for spatial playback, in blocks. |

Setting `position` **or** `entity` makes the instance spatial: it is downmixed to mono and attenuated with the given range. With neither, the instance plays as stereo background audio at a constant volume.

```kotlin
import net.minecraft.world.phys.Vec3
import top.katton.api.audio.*

// Stereo background music.
playClientAudio(AudioSource.sound("minecraft:music_disc.cat"))

// Mono audio anchored to a position, audible within 24 blocks.
playClientAudio(
    AudioSource.sound("minecraft:block.bell.use"),
    AudioOptions(position = Vec3(100.5, 64.0, 20.5), range = 24f),
)

// Mono audio that follows an entity and stops when that entity is gone.
playClientAudio(
    AudioSource.packFile("audio/footsteps.ogg"),
    AudioOptions(entity = player.uuid, range = 8f),
)
```

### Controlling Playback

Every control method returns a `CompletableFuture<Unit>` that completes when the command has been applied — not when playback finishes. Failures complete the future exceptionally, so chain with `thenCompose` instead of blocking the client thread.

```kotlin
import kotlin.time.Duration.Companion.seconds

val handle = playClientAudio(AudioSource.packFile("audio/theme.mp3"), AudioOptions(loop = true))

handle
    .thenCompose { handle.setPlaybackRate(1.5f) }
    .thenCompose { handle.fadeTo(0.2f, 3.seconds) }
    .thenCompose { handle.seek(30.seconds) }
    .thenCompose { handle.pause() }
    .thenCompose { handle.resume() }
    .thenCompose { handle.setLoop(false) }
    .thenCompose { handle.stop() }
```

| Method | Behavior |
|---|---|
| `pause()` / `resume()` | Pauses and continues without losing the current position. |
| `seek(position)` | Jumps to an absolute media position. Clamped to the decoded duration once known. |
| `stop()` | Stops and rewinds to the start. The handle stays usable, so `resume()` replays it. |
| `setPlaybackRate(rate)` | Changes speed and pitch in `0.25f`–`4f`. Does not reset progress. |
| `setVolume(volume)` | Sets the per-instance volume and cancels an in-progress fade. |
| `setLoop(loop)` | Toggles looping. The queue is rebuilt at the current position. |
| `fadeTo(volume, duration)` | Fades to a target volume over a real-time duration. Pausing freezes the fade. |
| `refresh()` | Returns the current `AudioSnapshot`. |
| `close()` | Stops playback and permanently invalidates the handle. |

Progress, seek, and duration always use the **original media time**, independent of speed. A 60-second track at `playbackRate = 2f` still reports a 60-second duration and finishes in about 30 seconds.

### Snapshots and State

```kotlin
val handle = playClientAudio(AudioSource.packFile("audio/theme.mp3"))

// PREPARING at first: decoding happens asynchronously on worker threads.
println(handle.snapshot.state)     // PREPARING
println(handle.snapshot.duration)  // null until decoding finishes

handle.refresh().thenAccept { snapshot ->
    println("${snapshot.state} ${snapshot.position}/${snapshot.duration}")
    snapshot.error?.let { println("audio failed: $it") }
}
```

States are `PREPARING`, `PLAYING`, `PAUSED`, `STOPPED`, `ENDED`, `FAILED`, and `CLOSED`. Unsupported or corrupt bytes produce `FAILED` with a message in `snapshot.error`. A failed or closed handle rejects further controls.

Playback follows the game: opening the pause menu in singleplayer freezes it, and a manual pause stays in effect after the game resumes. If the sound device or resource manager reloads, Katton keeps the playback state.

### Limits

- At most **64 audio instances** may be open per client. Open the sounds you actually need and `close()` the ones you are done with.
- Decoded PCM is cached on disk: at most **512 MiB per file** and **1 GiB in total**. Active handles pin their cache entry; idle entries can be evicted.
- A pack audio file is limited to **16 MiB** by the script-pack file limit.

## Remote Playback

A server script can start playback on a remote modded client with `playPlayerAudio`. Call it on the **server thread**.

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.audio.*

@ServerScriptEntrypoint(ServerPhase.READY)
fun bellForEveryone(context: ServerReadyContext) {
    context.server.playerList.players.forEach { player ->
        playPlayerAudio(
            player,
            AudioSource.sound("minecraft:block.bell.use"),
            AudioOptions(category = SoundSource.BLOCKS, position = player.position(), range = 24f),
        )
    }
}
```

Remote playback returns a `RemoteAudioHandle` with the same control surface as `AudioHandle`. Its `snapshot` reflects the **last state the client confirmed**; call `refresh()` to ask for fresh progress.

```kotlin
val handle = playPlayerAudio(player, AudioSource.sound("minecraft:music_disc.cat"))
handle.refresh().thenAccept { snapshot ->
    println("${snapshot.state} at ${snapshot.position}")
}
handle.stop()
```

Remote rules:

- The player needs a compatible Katton client. A vanilla client, or a Paper server, cannot run this API; `playPlayerAudio` fails fast instead of silently doing nothing.
- Commands are serialized per handle. Errors and timeouts complete the returned future exceptionally.
- Snapshots are per-handle, not sample-synchronized across players.
- A packet being sent is not proof that the player heard anything.
- Respawning or changing dimension re-points the handle to the new `ServerPlayer`; disconnecting closes it.
- A script reload pauses active instances, restores them if the candidate reload fails, and disposes them on success.

## Basic Sound on Every Platform

`playBasicSound` and `stopBasicSound` only need the player's client to know the sound. They work on Fabric, NeoForge, and Paper/Folia, and they require **no** Katton client.

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.audio.playBasicSound
import top.katton.api.audio.stopBasicSound

@ServerScriptEntrypoint(ServerPhase.READY)
fun rewardSound(context: ServerReadyContext) {
    val player = context.server.playerList.players.first()
    playBasicSound(
        player,
        "minecraft:entity.player.levelup",
        position = player.position(),
        category = SoundSource.PLAYERS,
        volume = 1f,
        pitch = 1.2f,
    )
    stopBasicSound(player, "minecraft:entity.player.levelup")
}
```

| Function | Notes |
|---|---|
| `playBasicSound(player, soundId, position?, category?, volume?, pitch?)` | Sends a vanilla sound packet. `position = null` plays at the player's own position. The returned future confirms the packet was **sent**, not heard. |
| `stopBasicSound(player, soundId?, category?)` | Stops matching sounds by ID and/or category. Null filters match everything, so `stopBasicSound(player)` stops all sounds on that client. |

Because these are vanilla sound packets, they cannot pause, seek, fade, loop explicitly, or play pack files. On Folia and Paper, scheduling uses the player's entity region so the packet is sent from a safe thread.

## Complete Example

`manifest.json`:

```json
{
  "id": "my_audio_pack",
  "name": "My Audio Pack",
  "version": "1.0.0",
  "dependencies": []
}
```

`Audio.kt`:

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.audio.*
import top.katton.registry.registerCommand
import kotlin.time.Duration.Companion.seconds

// A client pack file is resolved on the client, so create it in a client entrypoint.
@ClientScriptEntrypoint(ClientPhase.JOINED)
fun playLocalSoundtrack() {
    val handle = playClientAudio(
        AudioSource.packFile("audio/theme.mp3"),
        AudioOptions(volume = 0.5f, loop = true),
    )
    handle.fadeTo(0.8f, 5.seconds)
}

@ServerScriptEntrypoint(ServerPhase.READY)
fun registerAudioCommands() {
    registerCommand("audio") {
        literal("bell") {
            executes { command ->
                val player = command.source.playerOrException
                playBasicSound(
                    player,
                    "minecraft:block.note_block.bell",
                    player.position(),
                    SoundSource.RECORDS,
                )
                1
            }
        }
        literal("theme") {
            executes { command ->
                val player = command.source.playerOrException
                playPlayerAudio(
                    player,
                    AudioSource.sound("minecraft:music_disc.cat"),
                    AudioOptions(loop = true, volume = 0.4f),
                )
                1
            }
        }
    }
}
```

Ship `audio/theme.mp3` next to `manifest.json`. `/katton reload` picks up new files; remote clients receive them through the normal pack synchronization.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `Full audio playback requires a Fabric/NeoForge Katton client` | The client has no Katton, or the server is Paper. Use `playBasicSound` instead. |
| `Full remote audio is unavailable on this platform` | `playPlayerAudio` was called on Paper. |
| `Create client audio on the client thread (runOnClient)` | Call `playClientAudio` from a client entrypoint or wrap it in `runOnClient { }`. |
| `Create remote audio on the server thread` | `playPlayerAudio` must be created on the server thread. |
| State stays `PREPARING` | Decoding is asynchronous; wait for `refresh()`. |
| State becomes `FAILED` | Unsupported or corrupt audio. Check `snapshot.error`; confirm formats and the 16 MiB file limit. |
| `At most 64 audio instances may be open` | Close unused handles. |
| `Audio pack revision is not available` | The pack revision changed; re-create the `AudioSource` from the current script context. |
