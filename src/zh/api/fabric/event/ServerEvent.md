---
title: ServerEvent
outline: [2, 2]
---

<ApiDocPage
  title="ServerEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ServerEvent.kt"
>
Fabric 平台的服务器生命周期事件。 此对象提供与服务器生命周期相关的事件，包括启动、停止、数据包重载、保存钩子和刻事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerEvent&quot;,&quot;href&quot;:&quot;#serverevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStarting&quot;,&quot;href&quot;:&quot;#serverevent-onserverstarting&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStarted&quot;,&quot;href&quot;:&quot;#serverevent-onserverstarted&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStopping&quot;,&quot;href&quot;:&quot;#serverevent-onserverstopping&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onServerStopped&quot;,&quot;href&quot;:&quot;#serverevent-onserverstopped&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onSyncDatapackContents&quot;,&quot;href&quot;:&quot;#serverevent-onsyncdatapackcontents&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onStartDatapackReload&quot;,&quot;href&quot;:&quot;#serverevent-onstartdatapackreload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onEndDatapackReload&quot;,&quot;href&quot;:&quot;#serverevent-onenddatapackreload&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onBeforeSave&quot;,&quot;href&quot;:&quot;#serverevent-onbeforesave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onAfterSave&quot;,&quot;href&quot;:&quot;#serverevent-onaftersave&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onStartServerTick&quot;,&quot;href&quot;:&quot;#serverevent-onstartservertick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onEndServerTick&quot;,&quot;href&quot;:&quot;#serverevent-onendservertick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onStartWorldTick&quot;,&quot;href&quot;:&quot;#serverevent-onstartworldtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ServerEvent.onEndWorldTick&quot;,&quot;href&quot;:&quot;#serverevent-onendworldtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ServerEvent

<ApiMemberCard
  id="serverevent"
  name="ServerEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object ServerEvent
```

Fabric 平台的服务器生命周期事件。
此对象提供与服务器生命周期相关的事件，包括启动、停止、数据包重载、保存钩子和刻事件。

### ServerEvent.onServerStarting

<ApiMemberCard
  id="serverevent-onserverstarting"
  name="ServerEvent.onServerStarting"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onServerStarting
```

当服务器启动中（世界加载前）时触发。

</ApiMemberCard>

### ServerEvent.onServerStarted

<ApiMemberCard
  id="serverevent-onserverstarted"
  name="ServerEvent.onServerStarted"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onServerStarted
```

当服务器已启动（世界加载后）时触发。

</ApiMemberCard>

### ServerEvent.onServerStopping

<ApiMemberCard
  id="serverevent-onserverstopping"
  name="ServerEvent.onServerStopping"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onServerStopping
```

当服务器正在停止时触发。

</ApiMemberCard>

### ServerEvent.onServerStopped

<ApiMemberCard
  id="serverevent-onserverstopped"
  name="ServerEvent.onServerStopped"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onServerStopped
```

当服务器已停止时触发。

</ApiMemberCard>

### ServerEvent.onSyncDatapackContents

<ApiMemberCard
  id="serverevent-onsyncdatapackcontents"
  name="ServerEvent.onSyncDatapackContents"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onSyncDatapackContents
```

当数据包内容正在同步给玩家时触发。

</ApiMemberCard>

### ServerEvent.onStartDatapackReload

<ApiMemberCard
  id="serverevent-onstartdatapackreload"
  name="ServerEvent.onStartDatapackReload"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onStartDatapackReload
```

当数据包重载开始时触发。

</ApiMemberCard>

### ServerEvent.onEndDatapackReload

<ApiMemberCard
  id="serverevent-onenddatapackreload"
  name="ServerEvent.onEndDatapackReload"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onEndDatapackReload
```

当数据包重载完成时触发。

</ApiMemberCard>

### ServerEvent.onBeforeSave

<ApiMemberCard
  id="serverevent-onbeforesave"
  name="ServerEvent.onBeforeSave"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onBeforeSave
```

当服务器保存数据之前触发。

</ApiMemberCard>

### ServerEvent.onAfterSave

<ApiMemberCard
  id="serverevent-onaftersave"
  name="ServerEvent.onAfterSave"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAfterSave
```

当服务器保存数据之后触发。

</ApiMemberCard>

### ServerEvent.onStartServerTick

<ApiMemberCard
  id="serverevent-onstartservertick"
  name="ServerEvent.onStartServerTick"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onStartServerTick
```

当每个服务器 tick 开始时触发。

</ApiMemberCard>

### ServerEvent.onEndServerTick

<ApiMemberCard
  id="serverevent-onendservertick"
  name="ServerEvent.onEndServerTick"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onEndServerTick
```

当每个服务器 tick 结束时触发。

</ApiMemberCard>

### ServerEvent.onStartWorldTick

<ApiMemberCard
  id="serverevent-onstartworldtick"
  name="ServerEvent.onStartWorldTick"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onStartWorldTick
```

当每个世界/维度 tick 开始时触发。

</ApiMemberCard>

### ServerEvent.onEndWorldTick

<ApiMemberCard
  id="serverevent-onendworldtick"
  name="ServerEvent.onEndWorldTick"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onEndWorldTick
```

当每个世界/维度 tick 结束时触发。

</ApiMemberCard>

</ApiMemberCard>

