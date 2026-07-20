---
title: BlockEntityType
outline: [2, 2]
---

<ApiDocPage
  title="BlockEntityType"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/BlockEntityType.kt"
>
注册原生 BlockEntityType，并支持热重载。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeBlockEntityType&quot;,&quot;href&quot;:&quot;#registernativeblockentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeBlockEntityType&quot;,&quot;href&quot;:&quot;#registernativeblockentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeBlockEntityType

<ApiMemberCard
  id="registernativeblockentitytype"
  name="registerNativeBlockEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeBlockEntityType(id: String, registerMode: RegisterMode = RegisterMode.WORLD, blockEntityTypeFactory: () -> BlockEntityType<*>): KattonRegistry.KattonBlockEntityTypeEntry
```

注册原生 BlockEntityType，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | BlockEntityType 标识符，例如 "mymod:custom_block_entity"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `blockEntityTypeFactory` | 创建 BlockEntityType 实例的工厂函数。 |

### 返回值

已注册的 KattonBlockEntityTypeEntry。

</ApiMemberCard>

## registerNativeBlockEntityType

<ApiMemberCard
  id="registernativeblockentitytype"
  name="registerNativeBlockEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeBlockEntityType(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, blockEntityTypeFactory: () -> BlockEntityType<*>): KattonRegistry.KattonBlockEntityTypeEntry
```

注册原生 BlockEntityType，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | BlockEntityType 标识符。 |
| `registerMode` | 注册模式。 |
| `blockEntityTypeFactory` | 创建 BlockEntityType 实例的工厂函数。 |

### 返回值

已注册的 KattonBlockEntityTypeEntry。

</ApiMemberCard>

