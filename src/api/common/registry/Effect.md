---
title: Effect
outline: [2, 2]
---

<ApiDocPage
  title="Effect"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/Effect.kt"
>
Registers a native MobEffect with hot-reload support (String overload).
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeEffect&quot;,&quot;href&quot;:&quot;#registernativeeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeEffect&quot;,&quot;href&quot;:&quot;#registernativeeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;createSimpleEffect&quot;,&quot;href&quot;:&quot;#createsimpleeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeEffect

<ApiMemberCard
  id="registernativeeffect"
  name="registerNativeEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEffect(id: String, registerMode: RegisterMode = RegisterMode.AUTO, effectFactory: () -> MobEffect): KattonRegistry.KattonMobEffectEntry
```

Registers a native MobEffect with hot-reload support (String overload).

This is the primary API for registering custom MobEffect subclasses from scripts.
The effect will be registered in the global Minecraft registry with full
hot-reload capability.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Effect identifier (e.g., "mymod:custom_effect") |
| `registerMode` | Registration mode (GLOBAL, RELOADABLE, or AUTO) |
| `effectFactory` | Factory function to create the MobEffect instance |

### Returns

The registered KattonMobEffectEntry

</ApiMemberCard>

## registerNativeEffect

<ApiMemberCard
  id="registernativeeffect"
  name="registerNativeEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEffect(id: Identifier, registerMode: RegisterMode = RegisterMode.AUTO, effectFactory: () -> MobEffect): KattonRegistry.KattonMobEffectEntry
```

Registers a native MobEffect with hot-reload support (Identifier overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Effect identifier |
| `registerMode` | Registration mode |
| `effectFactory` | Factory function to create the MobEffect instance |

### Returns

The registered KattonMobEffectEntry

</ApiMemberCard>

## createSimpleEffect

<ApiMemberCard
  id="createsimpleeffect"
  name="createSimpleEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun createSimpleEffect(category: MobEffectCategory, color: Int): MobEffect
```

Utility factory for quickly creating a simple custom MobEffect.

Creates a basic MobEffect with the specified category and color.
For more complex effects, use the full factory pattern with registerNativeEffect.

### Parameters

| Parameter | Description |
| --- | --- |
| `category` | The effect category (BENEFICIAL, HARMFUL, or NEUTRAL) |
| `color` | The effect color in RGB format |

### Returns

A new MobEffect instance

</ApiMemberCard>

