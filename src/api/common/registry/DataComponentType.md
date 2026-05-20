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
Registers a persistent (saved to disk) DataComponentType with hot-reload support.
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

Registers a persistent (saved to disk) DataComponentType with hot-reload support.

Persistent components are serialized using their codec and saved with the item.
Use this for data that must survive across save/load cycles.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Component identifier (e.g., "mymod:custom_data") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `codec` | The codec for serializing/deserializing the component value |

### Returns

The registered KattonDataComponentTypeEntry

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

Registers a persistent (saved to disk) DataComponentType with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Component identifier |
| `registerMode` | Registration mode |
| `codec` | The codec for serializing/deserializing the component value |

### Returns

The registered KattonDataComponentTypeEntry

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

Registers a network-synchronized DataComponentType with hot-reload support.

Network-synchronized components are sent to the client but NOT saved to disk.
Use this for data that is computed at runtime (e.g., render-only state).

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Component identifier (e.g., "mymod:sync_data") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `streamCodec` | The stream codec for network synchronization |

### Returns

The registered KattonDataComponentTypeEntry

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

Registers a network-synchronized DataComponentType with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Component identifier |
| `registerMode` | Registration mode |
| `streamCodec` | The stream codec for network synchronization |

### Returns

The registered KattonDataComponentTypeEntry

</ApiMemberCard>

