---
title: AudioApi
outline: [2, 2]
---

<ApiDocPage
  title="AudioApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.audio"
  source-file="common/src/main/kotlin/top/katton/api/audio/AudioApi.kt"
>
音频内容在客户端解析。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;AudioSource&quot;,&quot;href&quot;:&quot;#audiosource&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AudioOptions&quot;,&quot;href&quot;:&quot;#audiooptions&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AudioSnapshot&quot;,&quot;href&quot;:&quot;#audiosnapshot&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AudioHandle&quot;,&quot;href&quot;:&quot;#audiohandle&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}, {&quot;label&quot;:&quot;AudioClientProvider&quot;,&quot;href&quot;:&quot;#audioclientprovider&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;playClientAudio&quot;,&quot;href&quot;:&quot;#playclientaudio&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## AudioSource

<ApiMemberCard
  id="audiosource"
  name="AudioSource"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
@ConsistentCopyVisibility
data class AudioSource internal constructor(val kind: Kind, val path: String, val packId: String
```

音频内容在客户端解析。

</ApiMemberCard>

## AudioOptions

<ApiMemberCard
  id="audiooptions"
  name="AudioOptions"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AudioOptions( val volume: Float
```

空间音频混为单声道；位置和实体均为空时播放立体声背景音乐。

</ApiMemberCard>

## AudioSnapshot

<ApiMemberCard
  id="audiosnapshot"
  name="AudioSnapshot"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AudioSnapshot(val state: AudioState, val position: Duration, val duration: Duration?, val playbackRate: Float, val volume: Float, val loop: Boolean, val error: String?
```

进度和时长采用原始音频时间，不随倍速改变。

</ApiMemberCard>

## AudioHandle

<ApiMemberCard
  id="audiohandle"
  name="AudioHandle"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
interface AudioHandle : AutoCloseable
```

倍速与音高联动。异步结果表示控制已应用，不表示音频播放结束。

</ApiMemberCard>

## AudioClientProvider

<ApiMemberCard
  id="audioclientprovider"
  name="AudioClientProvider"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object AudioClientProvider
```

Physical-client implementation installed by the loader; safe to load on dedicated servers.

</ApiMemberCard>

## playClientAudio

<ApiMemberCard
  id="playclientaudio"
  name="playClientAudio"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playClientAudio(source: AudioSource, options: AudioOptions = AudioOptions()): AudioHandle
```

使用 Katton 客户端播放器播放音频。

</ApiMemberCard>

