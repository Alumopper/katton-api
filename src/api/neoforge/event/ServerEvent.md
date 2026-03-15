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
Server lifecycle events for NeoForge platform.
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

Server lifecycle events for NeoForge platform.

This object provides events related to server lifecycle including
server start/stop, datapack sync, level load/unload, and tick events.

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

Event triggered when the server is starting (before worlds are loaded).

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

Event triggered when the server has started (after worlds are loaded).

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

Event triggered when the server has stopped.

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

Event triggered when the server is stopping.

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

Event triggered when datapack contents are being synced to players.

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

Event triggered when a datapack reload is starting.
Note: NeoForge doesn't have a direct equivalent; this is a placeholder.

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

Event triggered when a datapack reload has completed.
Note: NeoForge doesn't have a direct equivalent; this is a placeholder.

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

Event triggered before the server saves data.
Note: NeoForge doesn't have a direct equivalent; this is a placeholder.

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

Event triggered after the server has saved data.
Note: NeoForge doesn't have a direct equivalent; this is a placeholder.

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

Event triggered at the start of each server tick.

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

Event triggered at the end of each server tick.

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

Event triggered at the start of each world/level tick.

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

Event triggered at the end of each world/level tick.

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

Event triggered when a level is loaded.

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

Event triggered when a level is unloaded.

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

Event triggered when a level is saved.

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

Wrapper class for server level arguments.

### Properties

| Property | Description |
| --- | --- |
| `level` | The server level |

</ApiMemberCard>

</ApiMemberCard>

