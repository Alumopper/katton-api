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
注册具有热重载支持的本机 ParticleType。
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

注册具有热重载支持的本机 ParticleType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 粒子标识符（例如，"mymod:custom_particle"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `particleTypeFactory` | 用于创建 ParticleType 实例的工厂函数 |

### 返回值

已注册KattonParticleTypeEntry

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

注册具有热重载支持的本机 ParticleType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 粒子标识符 |
| `registerMode` | 注册模式 |
| `particleTypeFactory` | 用于创建 ParticleType 实例的工厂函数 |

### 返回值

已注册KattonParticleTypeEntry

</ApiMemberCard>

