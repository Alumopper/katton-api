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
Registers a native BlockEntityType with hot-reload support.
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

Registers a native BlockEntityType with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | BlockEntityType identifier (e.g., "mymod:custom_block_entity") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `blockEntityTypeFactory` | Factory function to create the BlockEntityType instance |

### Returns

The registered KattonBlockEntityTypeEntry

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

Registers a native BlockEntityType with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | BlockEntityType identifier |
| `registerMode` | Registration mode |
| `blockEntityTypeFactory` | Factory function to create the BlockEntityType instance |

### Returns

The registered KattonBlockEntityTypeEntry

</ApiMemberCard>

