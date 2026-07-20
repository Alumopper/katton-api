---
title: ServerEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ServerEvent.kt"
>
NeoForge 平台的服务端生命周期事件。 此对象提供与服务端生命周期相关的事件，包括服务端启动/停止、数据包同步、维度加载/卸载和 tick 事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEvent&quot;,&quot;href&quot;:&quot;#serverevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStarting&quot;,&quot;href&quot;:&quot;#serverevent-onserverstarting&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStarted&quot;,&quot;href&quot;:&quot;#serverevent-onserverstarted&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStopped&quot;,&quot;href&quot;:&quot;#serverevent-onserverstopped&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStopping&quot;,&quot;href&quot;:&quot;#serverevent-onserverstopping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onSyncDatapackContents&quot;,&quot;href&quot;:&quot;#serverevent-onsyncdatapackcontents&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onStartDatapackReload&quot;,&quot;href&quot;:&quot;#serverevent-onstartdatapackreload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onEndDatapackReload&quot;,&quot;href&quot;:&quot;#serverevent-onenddatapackreload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onBeforeSave&quot;,&quot;href&quot;:&quot;#serverevent-onbeforesave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onAfterSave&quot;,&quot;href&quot;:&quot;#serverevent-onaftersave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onStartServerTick&quot;,&quot;href&quot;:&quot;#serverevent-onstartservertick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onEndServerTick&quot;,&quot;href&quot;:&quot;#serverevent-onendservertick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onStartWorldTick&quot;,&quot;href&quot;:&quot;#serverevent-onstartworldtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onEndWorldTick&quot;,&quot;href&quot;:&quot;#serverevent-onendworldtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onLevelLoad&quot;,&quot;href&quot;:&quot;#serverevent-onlevelload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onLevelUnload&quot;,&quot;href&quot;:&quot;#serverevent-onlevelunload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onLevelSave&quot;,&quot;href&quot;:&quot;#serverevent-onlevelsave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.ServerLevelArg&quot;,&quot;href&quot;:&quot;#serverevent-serverlevelarg&quot;,&quot;kind&quot;:&quot;Value Class&quot;,&quot;kindKey&quot;:&quot;value-class&quot;}]' />

## ServerEvent

<ApiMemberCard
  id="serverevent"
  name="ServerEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

NeoForge 平台的服务端生命周期事件。
此对象提供与服务端生命周期相关的事件，包括服务端启动/停止、数据包同步、维度加载/卸载和 tick 事件。

### ServerEvent.onServerStarting

<ApiMemberCard
  id="serverevent-onserverstarting"
  name="ServerEvent.onServerStarting"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onServerStarting
```

当服务端开始启动、维度加载前触发。

</ApiMemberCard>

### ServerEvent.onServerStarted

<ApiMemberCard
  id="serverevent-onserverstarted"
  name="ServerEvent.onServerStarted"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onServerStarted
```

当服务端启动完成、维度加载后触发。

</ApiMemberCard>

### ServerEvent.onServerStopped

<ApiMemberCard
  id="serverevent-onserverstopped"
  name="ServerEvent.onServerStopped"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onServerStopped
```

当服务端停止时触发。

</ApiMemberCard>

### ServerEvent.onServerStopping

<ApiMemberCard
  id="serverevent-onserverstopping"
  name="ServerEvent.onServerStopping"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onServerStopping
```

当服务端正在停止时触发。

</ApiMemberCard>

### ServerEvent.onSyncDatapackContents

<ApiMemberCard
  id="serverevent-onsyncdatapackcontents"
  name="ServerEvent.onSyncDatapackContents"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onSyncDatapackContents
```

当向玩家同步数据包内容时触发。

</ApiMemberCard>

### ServerEvent.onStartDatapackReload

<ApiMemberCard
  id="serverevent-onstartdatapackreload"
  name="ServerEvent.onStartDatapackReload"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onStartDatapackReload
```

当数据包重载开始时触发。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### ServerEvent.onEndDatapackReload

<ApiMemberCard
  id="serverevent-onenddatapackreload"
  name="ServerEvent.onEndDatapackReload"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onEndDatapackReload
```

当数据包重载完成时触发。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### ServerEvent.onBeforeSave

<ApiMemberCard
  id="serverevent-onbeforesave"
  name="ServerEvent.onBeforeSave"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onBeforeSave
```

在服务端保存数据之前触发。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### ServerEvent.onAfterSave

<ApiMemberCard
  id="serverevent-onaftersave"
  name="ServerEvent.onAfterSave"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAfterSave
```

在服务端保存数据之后触发。
这是为了 NeoForge API 兼容性保留的占位事件。

</ApiMemberCard>

### ServerEvent.onStartServerTick

<ApiMemberCard
  id="serverevent-onstartservertick"
  name="ServerEvent.onStartServerTick"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onStartServerTick
```

每个服务端 tick 开始时触发。

</ApiMemberCard>

### ServerEvent.onEndServerTick

<ApiMemberCard
  id="serverevent-onendservertick"
  name="ServerEvent.onEndServerTick"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEndServerTick
```

每个服务端 tick 结束时触发。

</ApiMemberCard>

### ServerEvent.onStartWorldTick

<ApiMemberCard
  id="serverevent-onstartworldtick"
  name="ServerEvent.onStartWorldTick"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onStartWorldTick
```

每个维度/世界 tick 开始时触发。

</ApiMemberCard>

### ServerEvent.onEndWorldTick

<ApiMemberCard
  id="serverevent-onendworldtick"
  name="ServerEvent.onEndWorldTick"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onEndWorldTick
```

每个维度/世界 tick 结束时触发。

</ApiMemberCard>

### ServerEvent.onLevelLoad

<ApiMemberCard
  id="serverevent-onlevelload"
  name="ServerEvent.onLevelLoad"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLevelLoad
```

当维度加载时触发。

</ApiMemberCard>

### ServerEvent.onLevelUnload

<ApiMemberCard
  id="serverevent-onlevelunload"
  name="ServerEvent.onLevelUnload"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLevelUnload
```

当维度卸载时触发。

</ApiMemberCard>

### ServerEvent.onLevelSave

<ApiMemberCard
  id="serverevent-onlevelsave"
  name="ServerEvent.onLevelSave"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onLevelSave
```

当维度保存时触发。

</ApiMemberCard>

### ServerEvent.ServerLevelArg

<ApiMemberCard
  id="serverevent-serverlevelarg"
  name="ServerEvent.ServerLevelArg"
  kind="Value Class"
  kind-key="value-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmInline
value class ServerLevelArg(val level: ServerLevel)
```

服务端维度参数封装。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 服务端维度。 |

</ApiMemberCard>

</ApiMemberCard>

