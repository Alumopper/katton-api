---
title: SoundEvent
outline: [2, 2]
---

<ApiDocPage
  title="SoundEvent"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/SoundEvent.kt"
>
注册原生 SoundEvent，并支持热重载。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeSoundEvent&quot;,&quot;href&quot;:&quot;#registernativesoundevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeSoundEvent&quot;,&quot;href&quot;:&quot;#registernativesoundevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;createVariableRangeSoundEvent&quot;,&quot;href&quot;:&quot;#createvariablerangesoundevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeSoundEvent

<ApiMemberCard
  id="registernativesoundevent"
  name="registerNativeSoundEvent"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeSoundEvent(id: String, registerMode: RegisterMode = RegisterMode.WORLD, soundEventFactory: () -> SoundEvent): KattonRegistry.KattonSoundEventEntry
```

注册原生 SoundEvent，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 声音标识符，例如 "mymod:custom_sound"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `soundEventFactory` | 创建 SoundEvent 实例的工厂函数。 |

### 返回值

已注册的 KattonSoundEventEntry。

</ApiMemberCard>

## registerNativeSoundEvent

<ApiMemberCard
  id="registernativesoundevent"
  name="registerNativeSoundEvent"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeSoundEvent(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, soundEventFactory: () -> SoundEvent): KattonRegistry.KattonSoundEventEntry
```

注册原生 SoundEvent，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 声音标识符。 |
| `registerMode` | 注册模式。 |
| `soundEventFactory` | 创建 SoundEvent 实例的工厂函数。 |

### 返回值

已注册的 KattonSoundEventEntry。

</ApiMemberCard>

## createVariableRangeSoundEvent

<ApiMemberCard
  id="createvariablerangesoundevent"
  name="createVariableRangeSoundEvent"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun createVariableRangeSoundEvent(id: String): SoundEvent
```

用于快速创建可变范围 SoundEvent 的工厂函数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 声音标识符。 |

### 返回值

具有可变范围的新 SoundEvent。

</ApiMemberCard>

