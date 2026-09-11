---
title: AudioServerApi
outline: [2, 2]
---

<ApiDocPage
  title="AudioServerApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.audio"
  source-file="common/src/main/kotlin/top/katton/api/audio/AudioServerApi.kt"
>
Loader-owned transport. Paper deliberately has no full-player transport.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;AudioServerTransport&quot;,&quot;href&quot;:&quot;#audioservertransport&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;RemoteAudioHandle&quot;,&quot;href&quot;:&quot;#remoteaudiohandle&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;RemoteAudioHandle.rebind&quot;,&quot;href&quot;:&quot;#remoteaudiohandle-rebind&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playPlayerAudio&quot;,&quot;href&quot;:&quot;#playplayeraudio&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## AudioServerTransport

<ApiMemberCard
  id="audioservertransport"
  name="AudioServerTransport"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object AudioServerTransport
```

Loader-owned transport. Paper deliberately has no full-player transport.

</ApiMemberCard>

## RemoteAudioHandle

<ApiMemberCard
  id="remoteaudiohandle"
  name="RemoteAudioHandle"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class RemoteAudioHandle internal constructor(@Volatile internal var player: ServerPlayer, source: AudioSource, options: AudioOptions) : AudioHandle
```

远程状态来自客户端确认；调用 refresh 获取最新进度。

### RemoteAudioHandle.rebind

<ApiMemberCard
  id="remoteaudiohandle-rebind"
  name="RemoteAudioHandle.rebind"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
internal fun rebind(current: ServerPlayer)
```

Re-points the handle after a respawn or dimension change replaced the player instance.

</ApiMemberCard>

</ApiMemberCard>

## playPlayerAudio

<ApiMemberCard
  id="playplayeraudio"
  name="playPlayerAudio"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playPlayerAudio(player: ServerPlayer, source: AudioSource, options: AudioOptions = AudioOptions()): RemoteAudioHandle
```

完整远程播放需要兼容的 Katton 模组客户端，Paper 不提供此能力。

</ApiMemberCard>

