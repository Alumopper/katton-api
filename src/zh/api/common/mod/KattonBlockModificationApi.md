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
用于修改现有块属性的配置。
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

用于修改现有块属性的配置。

这个类提供了一个流畅的API来修改现有的属性
在Minecraft的区方块注册表中注册的区块。类似于KubeJS的方块
修改系统。

### 属性

| 属性 | 说明 |
| --- | --- |
| `blockId` | 要修改的块的标识符 |

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

修改现有块的属性。

此功能允许您修改已注册块的属性
在Minecraft的区方块注册表中。更改将应用于块的默认值
状态并将影响该块的所有实例。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 要修改的块的标识符（例如，"minecraft:stone"） |
| `configure` | 用于块修改的配置 lambda |

### 返回值

修改后的Block实例

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

修改现有块的属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 要修改的块的标识符 |
| `configure` | 用于块修改的配置 lambda |

### 返回值

修改后的Block实例

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

通过其标识符获取块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 块标识符 |

### 返回值

Block 实例，如果未找到则为 null

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

通过其标识符获取块。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 块标识符 |

### 返回值

Block 实例，如果未找到则为 null

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

获取块的默认方块状态。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 块标识符 |

### 返回值

默认 BlockState，如果未找到块则为 null

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

获取块的默认方块状态。

### 参数

| 参数 | 说明 |
| --- | --- |
| `blockId` | 块标识符 |

### 返回值

默认 BlockState，如果未找到块则为 null

</ApiMemberCard>

