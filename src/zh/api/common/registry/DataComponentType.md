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
注册一个具有热重载支持的持久性（保存到磁盘）DataComponentType。
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

注册一个具有热重载支持的持久性（保存到磁盘）DataComponentType。

持久性组件使用其编解码器进行序列化并与物品一起保存。
将此用于必须在保存/加载周期中生存的数据。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符（例如，"mymod:custom_data"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `codec` | 用于序列化/反序列化组件值的编解码器 |

### 返回值

已注册KattonDataComponentTypeEntry

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

注册一个具有热重载支持的持久性（保存到磁盘）DataComponentType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符 |
| `registerMode` | 注册模式 |
| `codec` | 用于序列化/反序列化组件值的编解码器 |

### 返回值

已注册KattonDataComponentTypeEntry

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

注册一个具有热重载支持的网络同步 DataComponentType。

网络同步组件被发送到客户端，但 NOT 保存到磁盘。
将此用于运行时计算的数据（例如，仅渲染状态）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符（例如，"mymod:sync_data"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `streamCodec` | 用于网络同步的流编解码器 |

### 返回值

已注册KattonDataComponentTypeEntry

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

注册一个具有热重载支持的网络同步 DataComponentType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 组件标识符 |
| `registerMode` | 注册模式 |
| `streamCodec` | 用于网络同步的流编解码器 |

### 返回值

已注册KattonDataComponentTypeEntry

</ApiMemberCard>

