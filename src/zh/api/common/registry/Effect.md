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
注册原生 MobEffect，并支持热重载（String 重载）。 这是脚本中注册自定义 MobEffect 子类的主要 API。 该效果会注册到全局 Minecraft 注册表，并具备完整的热重载能力。
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

注册原生 MobEffect，并支持热重载（String 重载）。
这是脚本中注册自定义 MobEffect 子类的主要 API。
该效果会注册到全局 Minecraft 注册表，并具备完整的热重载能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | Effect 标识符，例如 "mymod:custom_effect"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `effectFactory` | 用于创建 MobEffect 实例的工厂函数。 |

### 返回值

已注册的 KattonMobEffectEntry。

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

注册原生 MobEffect，并支持热重载（Identifier 重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | Effect 标识符。 |
| `registerMode` | 注册模式。 |
| `effectFactory` | 用于创建 MobEffect 实例的工厂函数。 |

### 返回值

已注册的 KattonMobEffectEntry。

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

用于快速创建简单自定义 MobEffect 的工厂函数。
会按照指定类别和颜色创建一个基础 MobEffect。
如果需要更复杂的效果，请使用 registerNativeEffect 的完整工厂模式。

### 参数

| 参数 | 说明 |
| --- | --- |
| `category` | 效果类别（BENEFICIAL、HARMFUL 或 NEUTRAL）。 |
| `color` | 以 RGB 格式表示的效果颜色。 |

### 返回值

新建的 MobEffect 实例。

</ApiMemberCard>

