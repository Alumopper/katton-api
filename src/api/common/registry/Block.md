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
Registers a native Block with hot-reload support (String overload).
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
@ApiStatus.Experimental fun registerNativeBlock(id: String, registerMode: RegisterMode = RegisterMode.AUTO, blockFactory: (BlockBehaviour.Properties) -> Block): KattonRegistry.KattonBlockEntry
```

Registers a native Block with hot-reload support (String overload).

This is the primary API for registering custom Block subclasses from scripts.
The block will be registered in the global Minecraft registry with full
hot-reload capability.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Block identifier (e.g., "mymod:custom_block") |
| `registerMode` | Registration mode (GLOBAL, RELOADABLE, or AUTO) |
| `blockFactory` | Factory function to create the Block instance, receives Properties |

### Returns

The registered KattonBlockEntry

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
@ApiStatus.Experimental fun registerNativeBlock(id: Identifier, registerMode: RegisterMode = RegisterMode.AUTO, blockFactory: (BlockBehaviour.Properties) -> Block): KattonRegistry.KattonBlockEntry
```

Registers a native Block with hot-reload support (Identifier overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Block identifier |
| `registerMode` | Registration mode |
| `blockFactory` | Factory function to create the Block instance |

### Returns

The registered KattonBlockEntry

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

Utility factory for quickly creating a simple custom block.

Creates a basic Block with the specified properties.
For more complex blocks, use the full factory pattern with registerNativeBlock.

### Parameters

| Parameter | Description |
| --- | --- |
| `properties` | Block behavior properties (default: basic properties) |

### Returns

A new Block instance

</ApiMemberCard>

