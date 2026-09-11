# 音频

Katton Alpha 0.5.0 在 `top.katton.api.audio` 中新增了音频播放能力。它分为两层：

1. **完整播放**——Katton 自带的解码器与混音器可以播放脚本包文件、Minecraft 资源或声音事件中的 WAV、MP3、Ogg Vorbis 与 FLAC，支持暂停、跳转、倍速、音量、淡变和空间定位。这需要 **Fabric 或 NeoForge 客户端**安装 Katton。
2. **基础声音**——`playBasicSound` / `stopBasicSound` 向玩家发送原版声音数据包，**Fabric、NeoForge、Paper/Folia 均可用**，不需要客户端模组，只引用玩家客户端已经知道的声音。

> [!WARNING]
> 音频和镜头演出一样属于客户端表现能力。服务端可以请求玩家的 Katton 客户端播放，但 Paper 没有 Katton 客户端，所以 Paper 脚本只能用 `playBasicSound` / `stopBasicSound`。

## 该用哪个 API？

| 你的需求 | 使用 | 可用平台 |
|---|---|---|
| 播放脚本包内的音频文件 | `playClientAudio(AudioSource.packFile(...))` | Fabric/NeoForge 客户端 |
| 播放某个确切的资源文件（`sounds/...ogg`） | `playClientAudio(AudioSource.resource(...))` | Fabric/NeoForge 客户端 |
| 播放声音事件（含模组声音） | `playClientAudio(AudioSource.sound(...))` | Fabric/NeoForge 客户端 |
| 暂停、跳转、倍速、循环、淡变 | `AudioHandle` 控制方法 | Fabric/NeoForge 客户端 |
| 在**其他玩家**的客户端播放 | `playPlayerAudio(player, ...)` | Fabric/NeoForge 服务端 + 客户端 |
| 在任意平台播放原版/资源包声音 | `playBasicSound(player, ...)` | Fabric、NeoForge、Paper |

## 音频来源

`AudioSource` 在客户端解析。文件后缀**不参与**格式判断，解码器会嗅探内容，因此只要字节确实是 MP3，`AudioSource.packFile("audio/theme.bin")` 也能正常播放。

```kotlin
import top.katton.api.audio.AudioSource

// 1. 声音事件：按权重随机选择，音高与音量来自声音定义。
val event = AudioSource.sound("minecraft:music_disc.cat")

// 2. 确切资源，绕过声音事件表。
val resource = AudioSource.resource("minecraft:sounds/music/game/calm1.ogg")

// 3. 当前脚本包内的文件。
val file = AudioSource.packFile("audio/theme.mp3")
```

| 工厂方法 | 参数 | 说明 |
|---|---|---|
| `AudioSource.sound(id)` | 声音事件 ID | 用当前资源包选择一个加权声音，循环和跳转时保持同一个选择。模组声音事件同样可用。 |
| `AudioSource.resource(id)` | 资源路径 | 只播放这一个 `.ogg` 资源，用于绕过随机变体。 |
| `AudioSource.packFile(path)` | 包内相对路径 | 必须在脚本受管上下文中调用（入口函数、事件回调或调度任务），随来源一起记录包修订。 |

`AudioSource.packFile` 需要脚本包上下文，因为它要相对当前运行脚本所属的包解析路径：

```kotlin
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.audio.AudioSource
import top.katton.api.audio.playClientAudio

@ClientScriptEntrypoint(ClientPhase.JOINED)
fun startTheme() {
    // 在包的脚本上下文中运行，因此 packFile() 能解析 "audio/theme.mp3"。
    val theme = AudioSource.packFile("audio/theme.mp3")
    playClientAudio(theme)
}
```

## 包内音频文件

音频文件就是普通的脚本包内容，会随既有的签名同步流程一起分发，不需要新增任何 manifest 字段。

```text
kattonpacks/my_pack/
├── manifest.json
├── MyPack.kt
└── audio/
    ├── theme.mp3
    └── ambience.ogg
```

- 除保留路径外，可以使用任意相对路径。`*.kt` / `*.java` 会被当作源码编译，直接位于 `libs/` 下的 `*.jar` 是库文件；不要把音频放在这些位置。
- 后缀可以自由选择，但用 `.mp3`、`.ogg` 这类有意义的后缀更易读。
- 单文件最大 **16 MiB**，整个包最大 **64 MiB**。完整内容规则见[清单、依赖与签名](../architecture/manifest.md)。
- 包内容参与哈希与签名，因此修改音频会改变包哈希。已经创建的 `AudioSource.packFile` 实例仍播放创建时的快照；重载后需要重新创建来源才能拿到新内容。

支持的格式与约束：

| 格式 | 内容特征 | 说明 |
|---|---|---|
| PCM WAV | `RIFF....WAVE` | 必须是 PCM（有符号、无符号或浮点）音频。 |
| MP3 | `ID3` 或 MPEG 帧同步 | |
| Ogg Vorbis | `OggS` | |
| FLAC | `fLaC` | 支持 8/16/24 位。 |

所有格式都支持单声道或双声道、8 kHz – 192 kHz。解码统一为 16 位 PCM，空间播放会把双声道混合为单声道。

## 本地播放

`playClientAudio(source, options)` 启动一个客户端实例并立即返回 `AudioHandle`。它必须在**客户端线程**调用——可以在 `@ClientScriptEntrypoint` 中直接调用，也可以用 `runOnClient { ... }` 包装。

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
    // 播放是异步的：解码稍后完成，控制方法返回 future。
    music.refresh().thenAccept { snapshot -> println("music state: ${snapshot.state}") }
}
```

### AudioOptions

| 选项 | 默认值 | 含义 |
|---|---|---|
| `volume` | `1f` | 单实例音量，`0f`–`1f`，最终增益还会乘以分类音量。 |
| `playbackRate` | `1f` | 速度与音高联动，范围 `0.25f`–`4f`。`2f` 会以两倍速、高八度播放。 |
| `loop` | `false` | 到达末尾后重新开始。 |
| `category` | `SoundSource.MUSIC` | Minecraft 声音分类；玩家的分类音量与主音量会生效。 |
| `position` | `null` | 空间播放的世界坐标。 |
| `entity` | `null` | 空间播放跟随的实体 UUID；实体存在时优先于 `position`。 |
| `range` | `16f` | 空间播放的线性衰减距离，单位为方块。 |

设置 `position` **或** `entity` 后实例变为空间音频：混为单声道并按 `range` 衰减。两者都不设置时，作为立体声背景音频以恒定音量播放。

```kotlin
import net.minecraft.world.phys.Vec3
import top.katton.api.audio.*

// 立体声背景音乐。
playClientAudio(AudioSource.sound("minecraft:music_disc.cat"))

// 锚定到坐标的单声道音频，24 格内可听见。
playClientAudio(
    AudioSource.sound("minecraft:block.bell.use"),
    AudioOptions(position = Vec3(100.5, 64.0, 20.5), range = 24f),
)

// 跟随实体的单声道音频，实体消失后停止。
playClientAudio(
    AudioSource.packFile("audio/footsteps.ogg"),
    AudioOptions(entity = player.uuid, range = 8f),
)
```

### 控制播放

所有控制方法都返回 `CompletableFuture<Unit>`，它表示**命令已经应用**，而不是播放结束。失败会以异常完成该 future，所以请用 `thenCompose` 串联，不要阻塞客户端线程。

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

| 方法 | 行为 |
|---|---|
| `pause()` / `resume()` | 暂停与继续，不丢失当前进度。 |
| `seek(position)` | 跳到绝对媒体位置；解码完成后会限制在总时长内。 |
| `stop()` | 停止并回到开头，句柄仍然可用，`resume()` 可重新播放。 |
| `setPlaybackRate(rate)` | 在 `0.25f`–`4f` 内改变速度与音高，不重置进度。 |
| `setVolume(volume)` | 设置单实例音量，并取消进行中的淡变。 |
| `setLoop(loop)` | 切换循环；会在当前位置重建播放队列。 |
| `fadeTo(volume, duration)` | 用真实时间把音量淡变到目标值；暂停时淡变冻结。 |
| `refresh()` | 返回当前的 `AudioSnapshot`。 |
| `close()` | 停止播放并永久废弃该句柄。 |

进度、跳转和总时长始终采用**原始音频时间**，与倍速无关。60 秒的曲目在 `playbackRate = 2f` 时总时长仍是 60 秒，但约 30 秒播完。

### 快照与状态

```kotlin
val handle = playClientAudio(AudioSource.packFile("audio/theme.mp3"))

// 初始为 PREPARING：解码在工作线程异步进行。
println(handle.snapshot.state)     // PREPARING
println(handle.snapshot.duration)  // 解码完成前为 null

handle.refresh().thenAccept { snapshot ->
    println("${snapshot.state} ${snapshot.position}/${snapshot.duration}")
    snapshot.error?.let { println("audio failed: $it") }
}
```

状态包括 `PREPARING`、`PLAYING`、`PAUSED`、`STOPPED`、`ENDED`、`FAILED` 和 `CLOSED`。不支持的编码或损坏内容会进入 `FAILED`，错误信息在 `snapshot.error` 中。失败或已关闭的句柄会拒绝后续控制。

播放会跟随游戏状态：单人游戏打开暂停菜单会冻结播放，手动暂停在游戏恢复后依然生效。声音设备或资源重载时，Katton 会保留播放状态。

### 限制

- 每个客户端最多同时打开 **64 个音频实例**。只开真正需要的实例，用完及时 `close()`。
- 解码后的 PCM 会缓存在磁盘：单文件最多 **512 MiB**，总计最多 **1 GiB**。活动句柄会固定自己的缓存条目，空闲条目可被淘汰。
- 包内单个音频文件受脚本包文件上限限制，为 **16 MiB**。

## 远程播放

服务端脚本可以用 `playPlayerAudio` 让远程模组客户端开始播放。请在**服务端线程**调用。

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

远程播放返回 `RemoteAudioHandle`，控制方法与 `AudioHandle` 一致。它的 `snapshot` 表示**客户端最后确认的状态**；调用 `refresh()` 可以获取最新进度。

```kotlin
val handle = playPlayerAudio(player, AudioSource.sound("minecraft:music_disc.cat"))
handle.refresh().thenAccept { snapshot ->
    println("${snapshot.state} at ${snapshot.position}")
}
handle.stop()
```

远程规则：

- 玩家需要兼容的 Katton 客户端。原版客户端或 Paper 服务端无法使用此 API；`playPlayerAudio` 会直接失败，而不是静默无效。
- 同一句柄的命令串行执行。错误和超时会让返回的 future 异常完成。
- 快照按句柄独立，不同玩家之间不做采样级同步。
- 数据包发出并不代表玩家真的听到了声音。
- 重生或切换维度后句柄会指向新的 `ServerPlayer`；断线会关闭句柄。
- 脚本重载会暂停活动实例：候选重载失败则恢复，成功则释放旧实例。

## 三平台通用的基础声音

`playBasicSound` / `stopBasicSound` 只要求玩家客户端认识该声音。它们在 Fabric、NeoForge 和 Paper/Folia 上都可用，且**不需要** Katton 客户端。

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

| 函数 | 说明 |
|---|---|
| `playBasicSound(player, soundId, position?, category?, volume?, pitch?)` | 发送原版声音数据包。`position = null` 时在玩家自身位置播放。返回的 future 只表示数据包**已发送**，不表示玩家听到。 |
| `stopBasicSound(player, soundId?, category?)` | 按 ID 与/或分类停止匹配的声音。筛选为空表示全部匹配，因此 `stopBasicSound(player)` 会停止该客户端的全部声音。 |

由于发送的是原版声音数据包，它们无法暂停、跳转、淡变、显式循环，也不能播放包内文件。在 Folia 与 Paper 上，调度会使用玩家的实体区域，确保从安全线程发送。

## 完整示例

`manifest.json`：

```json
{
  "id": "my_audio_pack",
  "name": "My Audio Pack",
  "version": "1.0.0",
  "dependencies": []
}
```

`Audio.kt`：

```kotlin
import net.minecraft.sounds.SoundSource
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.audio.*
import top.katton.registry.registerCommand
import kotlin.time.Duration.Companion.seconds

// 包内文件由客户端解析，因此在客户端入口中创建。
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

把 `audio/theme.mp3` 放在 `manifest.json` 旁边。`/katton reload` 会发现新文件，远程客户端会通过常规包同步收到它。

## 常见问题

| 现象 | 可能原因 |
|---|---|
| `Full audio playback requires a Fabric/NeoForge Katton client` | 客户端没有 Katton，或服务端是 Paper。请改用 `playBasicSound`。 |
| `Full remote audio is unavailable on this platform` | 在 Paper 上调用了 `playPlayerAudio`。 |
| `Create client audio on the client thread (runOnClient)` | 请从客户端入口调用 `playClientAudio`，或用 `runOnClient { }` 包装。 |
| `Create remote audio on the server thread` | `playPlayerAudio` 必须在服务端线程创建。 |
| 状态一直是 `PREPARING` | 解码是异步的，等待 `refresh()`。 |
| 状态变为 `FAILED` | 音频不受支持或已损坏，检查 `snapshot.error`，确认格式与 16 MiB 文件上限。 |
| `At most 64 audio instances may be open` | 关闭不再使用的句柄。 |
| `Audio pack revision is not available` | 包修订已变化，请在当前脚本上下文中重新创建 `AudioSource`。 |
