---
title: Block
outline: [2, 2]
---

<ApiDocPage
  title="Block"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/Block.kt"
>
注册原生方块，并支持热重载（String 重载）。 这是脚本中注册自定义方块子类的主要 API。 方块会注册到全局 Minecraft 注册表，并具备完整的热重载能力。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeBlock&quot;,&quot;href&quot;:&quot;#registernativeblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeBlock&quot;,&quot;href&quot;:&quot;#registernativeblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;createSimpleBlock&quot;,&quot;href&quot;:&quot;#createsimpleblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeBlock

<ApiMemberCard
  id="registernativeblock"
  name="registerNativeBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeBlock(id: String, registerMode: RegisterMode = RegisterMode.WORLD, blockFactory: (BlockBehaviour.Properties) -> Block): KattonRegistry.KattonBlockEntry
```

注册原生方块，并支持热重载（String 重载）。
这是脚本中注册自定义方块子类的主要 API。
方块会注册到全局 Minecraft 注册表，并具备完整的热重载能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 方块标识符，例如 "mymod:custom_block"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `blockFactory` | 创建方块实例的工厂函数，接收 Properties。 |

### 返回值

已注册的 KattonBlockEntry。

</ApiMemberCard>

## registerNativeBlock

<ApiMemberCard
  id="registernativeblock"
  name="registerNativeBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeBlock(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, blockFactory: (BlockBehaviour.Properties) -> Block): KattonRegistry.KattonBlockEntry
```

注册原生方块，并支持热重载（Identifier 重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 方块标识符。 |
| `registerMode` | 注册模式。 |
| `blockFactory` | 创建方块实例的工厂函数。 |

### 返回值

已注册的 KattonBlockEntry。

</ApiMemberCard>

## createSimpleBlock

<ApiMemberCard
  id="createsimpleblock"
  name="createSimpleBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun createSimpleBlock(properties: BlockBehaviour.Properties = BlockBehaviour.Properties.of()): Block
```

用于快速创建简单自定义方块的工厂函数。
会按指定属性创建一个基础方块。
如果需要更复杂的方块，请使用 registerNativeBlock 的完整工厂模式。

### 参数

| 参数 | 说明 |
| --- | --- |
| `properties` | 方块行为属性（默认：基础属性）。 |

### 返回值

新建的方块实例。

</ApiMemberCard>

