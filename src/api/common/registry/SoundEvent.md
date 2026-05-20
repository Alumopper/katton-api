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
Registers a native SoundEvent with hot-reload support.
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

Registers a native SoundEvent with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Sound identifier (e.g., "mymod:custom_sound") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `soundEventFactory` | Factory function to create the SoundEvent instance |

### Returns

The registered KattonSoundEventEntry

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

Registers a native SoundEvent with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Sound identifier |
| `registerMode` | Registration mode |
| `soundEventFactory` | Factory function to create the SoundEvent instance |

### Returns

The registered KattonSoundEventEntry

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

Utility factory for quickly creating a variable-range SoundEvent.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | The sound identifier |

### Returns

A new SoundEvent with variable range

</ApiMemberCard>

