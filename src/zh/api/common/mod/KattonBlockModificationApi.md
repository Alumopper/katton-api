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
用于修改现有方块属性的配置对象。 这个类提供一个流式 API，用于修改已经注册到 Minecraft 方块注册表中的方块属性。 风格上类似 KubeJS 的方块修改系统。
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

用于修改现有方块属性的配置对象。
这个类提供一个流式 API，用于修改已经注册到 Minecraft 方块注册表中的方块属性。
风格上类似 KubeJS 的方块修改系统。

### 属性

| 属性 | 说明 |
| --- | --- |
| `blockId` | 要修改的方块标识符。 |

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

修改已有方块的属性。
这个函数允许你修改已经注册到 Minecraft 方块注册表中的方块属性。
变更会作用到方块的默认状态，并影响该方块的所有实例。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 要修改的方块标识符（例如 "minecraft:stone"）。 |
| `configure` | 方块修改配置 lambda。 |

### 返回值

返回修改后的方块实例。

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

修改已有方块的属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 要修改的方块标识符。 |
| `configure` | 方块修改配置 lambda。 |

### 返回值

返回修改后的方块实例。

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

根据标识符获取方块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 方块标识符。 |

### 返回值

找到时返回方块实例，未找到时返回 null。

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

根据标识符获取方块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 方块标识符。 |

### 返回值

找到时返回方块实例，未找到时返回 null。

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

获取方块的默认方块状态。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 方块标识符。 |

### 返回值

找到时返回默认方块状态，未找到时返回 null。

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

获取方块的默认方块状态。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 方块标识符。 |

### 返回值

找到时返回默认方块状态，未找到时返回 null。

</ApiMemberCard>

