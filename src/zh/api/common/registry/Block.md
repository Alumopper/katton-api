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
注册具有热重载支持的本机块（字符串重载）。
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

注册具有热重载支持的本机块（字符串重载）。

这是从脚本注册自定义块子类的主要API。
该区块将在全局Minecraft注册表中注册，并具有完整的
热重载能力。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 块标识符（例如，"mymod:custom_block"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `blockFactory` | 创建 Block 实例的工厂函数，接收 Properties |

### 返回值

已注册KattonBlockEntry

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

注册具有热重载支持（标识符重载）的本机块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 区块标识符 |
| `registerMode` | 注册模式 |
| `blockFactory` | 用于创建 Block 实例的工厂函数 |

### 返回值

已注册KattonBlockEntry

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

用于快速创建简单的自定义块的实用工厂。

创建具有指定属性的基本块。
对于更复杂的块，请使用带有 registerNativeBlock 的完整工厂模式。

### 参数

| 参数 | 说明 |
| --- | --- |
| `properties` | 阻止行为属性（默认：基本属性） |

### 返回值

一个新的块实例

</ApiMemberCard>

