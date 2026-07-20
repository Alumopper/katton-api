---
title: DataComponentType
outline: [2, 2]
---

<ApiDocPage
  title="DataComponentType"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/DataComponentType.kt"
>
注册持久化（保存到磁盘）的 DataComponentType，并支持热重载。 持久化组件会使用其 codec 进行序列化，并随物品一并保存。 适用于必须跨存档读写周期保留的数据。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativePersistentDataComponentType&quot;,&quot;href&quot;:&quot;#registernativepersistentdatacomponenttype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativePersistentDataComponentType&quot;,&quot;href&quot;:&quot;#registernativepersistentdatacomponenttype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeNetworkDataComponentType&quot;,&quot;href&quot;:&quot;#registernativenetworkdatacomponenttype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeNetworkDataComponentType&quot;,&quot;href&quot;:&quot;#registernativenetworkdatacomponenttype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativePersistentDataComponentType

<ApiMemberCard
  id="registernativepersistentdatacomponenttype"
  name="registerNativePersistentDataComponentType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Any> registerNativePersistentDataComponentType(id: String, registerMode: RegisterMode = RegisterMode.WORLD, codec: Codec<T>): KattonRegistry.KattonDataComponentTypeEntry
```

注册持久化（保存到磁盘）的 DataComponentType，并支持热重载。
持久化组件会使用其 codec 进行序列化，并随物品一并保存。
适用于必须跨存档读写周期保留的数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符，例如 "mymod:custom_data"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `codec` | 用于序列化和反序列化组件值的 codec。 |

### 返回值

已注册的 KattonDataComponentTypeEntry。

</ApiMemberCard>

## registerNativePersistentDataComponentType

<ApiMemberCard
  id="registernativepersistentdatacomponenttype"
  name="registerNativePersistentDataComponentType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Any> registerNativePersistentDataComponentType(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, codec: Codec<T>): KattonRegistry.KattonDataComponentTypeEntry
```

注册持久化（保存到磁盘）的 DataComponentType，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符。 |
| `registerMode` | 注册模式。 |
| `codec` | 用于序列化和反序列化组件值的 codec。 |

### 返回值

已注册的 KattonDataComponentTypeEntry。

</ApiMemberCard>

## registerNativeNetworkDataComponentType

<ApiMemberCard
  id="registernativenetworkdatacomponenttype"
  name="registerNativeNetworkDataComponentType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Any> registerNativeNetworkDataComponentType(id: String, registerMode: RegisterMode = RegisterMode.WORLD, streamCodec: StreamCodec<*, T>): KattonRegistry.KattonDataComponentTypeEntry
```

注册网络同步的 DataComponentType，并支持热重载。
这种组件会发送到客户端，但不会保存到磁盘。
适用于运行时计算的数据，例如仅供渲染使用的状态。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符，例如 "mymod:sync_data"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `streamCodec` | 用于网络同步的 stream codec。 |

### 返回值

已注册的 KattonDataComponentTypeEntry。

</ApiMemberCard>

## registerNativeNetworkDataComponentType

<ApiMemberCard
  id="registernativenetworkdatacomponenttype"
  name="registerNativeNetworkDataComponentType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun <T : Any> registerNativeNetworkDataComponentType(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, streamCodec: StreamCodec<*, T>): KattonRegistry.KattonDataComponentTypeEntry
```

注册网络同步的 DataComponentType，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符。 |
| `registerMode` | 注册模式。 |
| `streamCodec` | 用于网络同步的 stream codec。 |

### 返回值

已注册的 KattonDataComponentTypeEntry。

</ApiMemberCard>

