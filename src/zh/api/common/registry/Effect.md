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
注册具有热重载支持（字符串重载）的本机 MobEffect。
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
fun registerNativeEffect(id: String, registerMode: RegisterMode = RegisterMode.WORLD, effectFactory: () -> MobEffect): KattonRegistry.KattonMobEffectEntry
```

注册具有热重载支持（字符串重载）的本机 MobEffect。

这是从脚本注册自定义 MobEffect 子类的主要 API。
该效果将在全局 Minecraft 注册表中注册，并具有完整的信息
热重载能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 效果标识符（例如，"mymod:custom_effect"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `effectFactory` | 用于创建 MobEffect 实例的工厂函数 |

### 返回值

已注册KattonMobEffectEntry

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
fun registerNativeEffect(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, effectFactory: () -> MobEffect): KattonRegistry.KattonMobEffectEntry
```

注册具有热重载支持（标识符重载）的本机 MobEffect。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 效果标识符 |
| `registerMode` | 注册模式 |
| `effectFactory` | 用于创建 MobEffect 实例的工厂函数 |

### 返回值

已注册KattonMobEffectEntry

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

用于快速创建简单自定义MobEffect的实用工厂。

创建具有指定类别和颜色的基本 MobEffect。
对于更复杂的效果，请使用带有 registerNativeEffect 的完整工厂模式。

### 参数

| 参数 | 说明 |
| --- | --- |
| `category` | 效果类别（BENEFICIAL、HARMFUL或NEUTRAL） |
| `color` | RGB格式的效果颜色 |

### 返回值

一个新的MobEffect实例

</ApiMemberCard>

