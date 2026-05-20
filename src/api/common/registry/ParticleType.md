---
title: ParticleType
outline: [2, 2]
---

<ApiDocPage
  title="ParticleType"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/ParticleType.kt"
>
Registers a native ParticleType with hot-reload support.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeParticleType&quot;,&quot;href&quot;:&quot;#registernativeparticletype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeParticleType&quot;,&quot;href&quot;:&quot;#registernativeparticletype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeParticleType

<ApiMemberCard
  id="registernativeparticletype"
  name="registerNativeParticleType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeParticleType(id: String, registerMode: RegisterMode = RegisterMode.WORLD, particleTypeFactory: () -> ParticleType<*>): KattonRegistry.KattonParticleTypeEntry
```

Registers a native ParticleType with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Particle identifier (e.g., "mymod:custom_particle") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `particleTypeFactory` | Factory function to create the ParticleType instance |

### Returns

The registered KattonParticleTypeEntry

</ApiMemberCard>

## registerNativeParticleType

<ApiMemberCard
  id="registernativeparticletype"
  name="registerNativeParticleType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeParticleType(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, particleTypeFactory: () -> ParticleType<*>): KattonRegistry.KattonParticleTypeEntry
```

Registers a native ParticleType with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Particle identifier |
| `registerMode` | Registration mode |
| `particleTypeFactory` | Factory function to create the ParticleType instance |

### Returns

The registered KattonParticleTypeEntry

</ApiMemberCard>

