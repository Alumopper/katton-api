---
title: BasicSoundApi
outline: [2, 2]
---

<ApiDocPage
  title="BasicSoundApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.audio"
  source-file="common/src/main/kotlin/top/katton/api/audio/BasicSoundApi.kt"
>
Platform scheduling hook; Paper installs entity-region scheduling.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;BasicAudioScheduler&quot;,&quot;href&quot;:&quot;#basicaudioscheduler&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;playBasicSound&quot;,&quot;href&quot;:&quot;#playbasicsound&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;stopBasicSound&quot;,&quot;href&quot;:&quot;#stopbasicsound&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## BasicAudioScheduler

<ApiMemberCard
  id="basicaudioscheduler"
  name="BasicAudioScheduler"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object BasicAudioScheduler
```

Platform scheduling hook; Paper installs entity-region scheduling.

</ApiMemberCard>

## playBasicSound

<ApiMemberCard
  id="playbasicsound"
  name="playBasicSound"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playBasicSound(player: ServerPlayer, soundId: String, position: Vec3? = null, category: SoundSource = SoundSource.MUSIC, volume: Float = 1f, pitch: Float = 1f): CompletableFuture<Unit>
```

三平台均可播放客户端已有的声音；异步完成仅表示已发送。

</ApiMemberCard>

## stopBasicSound

<ApiMemberCard
  id="stopbasicsound"
  name="stopBasicSound"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun stopBasicSound(player: ServerPlayer, soundId: String? = null, category: SoundSource? = null): CompletableFuture<Unit>
```

按声音 ID／分类停止，无法区分相同 ID 的多个实例；空筛选匹配所有声音。

</ApiMemberCard>

