---
title: KattonBlockModificationApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonBlockModificationApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.mod"
  source-file="common/src/main/kotlin/top/katton/api/mod/KattonBlockModificationApi.kt"
>
Configuration for modifying existing block properties.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;BlockModificationConfig&quot;,&quot;href&quot;:&quot;#blockmodificationconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;modifyBlock&quot;,&quot;href&quot;:&quot;#modifyblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyBlock&quot;,&quot;href&quot;:&quot;#modifyblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlock&quot;,&quot;href&quot;:&quot;#getblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlock&quot;,&quot;href&quot;:&quot;#getblock&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlockState&quot;,&quot;href&quot;:&quot;#getblockstate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBlockState&quot;,&quot;href&quot;:&quot;#getblockstate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## BlockModificationConfig

<ApiMemberCard
  id="blockmodificationconfig"
  name="BlockModificationConfig"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class BlockModificationConfig( val blockId: Identifier )
```

Configuration for modifying existing block properties.

This class provides a fluent API for modifying properties of existing
blocks registered in Minecraft's block registry. Similar to KubeJS's block
modification system.

### Properties

| Property | Description |
| --- | --- |
| `blockId` | The identifier of the block to modify |

</ApiMemberCard>

## modifyBlock

<ApiMemberCard
  id="modifyblock"
  name="modifyBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyBlock(blockId: String, configure: BlockModificationConfig.() -> Unit): Block
```

Modifies an existing block's properties.

This function allows you to modify properties of blocks already registered
in Minecraft's block registry. Changes are applied to the block's default
state and will affect all instances of that block.

### Parameters

| Parameter | Description |
| --- | --- |
| `blockId` | The identifier of the block to modify (e.g., "minecraft:stone") |
| `configure` | Configuration lambda for block modifications |

### Returns

The modified Block instance

</ApiMemberCard>

## modifyBlock

<ApiMemberCard
  id="modifyblock"
  name="modifyBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyBlock(blockId: Identifier, configure: BlockModificationConfig.() -> Unit): Block
```

Modifies an existing block's properties.

### Parameters

| Parameter | Description |
| --- | --- |
| `blockId` | The identifier of the block to modify |
| `configure` | Configuration lambda for block modifications |

### Returns

The modified Block instance

</ApiMemberCard>

## getBlock

<ApiMemberCard
  id="getblock"
  name="getBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlock(blockId: String): Block?
```

Gets a block by its identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `blockId` | The block identifier |

### Returns

The Block instance, or null if not found

</ApiMemberCard>

## getBlock

<ApiMemberCard
  id="getblock"
  name="getBlock"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlock(blockId: Identifier): Block?
```

Gets a block by its identifier.

### Parameters

| Parameter | Description |
| --- | --- |
| `blockId` | The block identifier |

### Returns

The Block instance, or null if not found

</ApiMemberCard>

## getBlockState

<ApiMemberCard
  id="getblockstate"
  name="getBlockState"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlockState(blockId: String): BlockState?
```

Gets the default block state for a block.

### Parameters

| Parameter | Description |
| --- | --- |
| `blockId` | The block identifier |

### Returns

The default BlockState, or null if block not found

</ApiMemberCard>

## getBlockState

<ApiMemberCard
  id="getblockstate"
  name="getBlockState"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBlockState(blockId: Identifier): BlockState?
```

Gets the default block state for a block.

### Parameters

| Parameter | Description |
| --- | --- |
| `blockId` | The block identifier |

### Returns

The default BlockState, or null if block not found

</ApiMemberCard>

