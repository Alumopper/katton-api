---
title: PaperManagedEvents
outline: [2, 2]
---

<ApiDocPage
  title="PaperManagedEvents"
  module="Paper"
  module-key="paper"
  package-name="top.katton.api.event.managed"
  source-file="paper/src/main/kotlin/top/katton/api/event/managed/PaperManagedEvents.kt"
>
Paper (Bukkit) implementation of [ManagedListenerProvider].
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;PaperManagedEvents&quot;,&quot;href&quot;:&quot;#papermanagedevents&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;PaperManagedEvents.initialize&quot;,&quot;href&quot;:&quot;#papermanagedevents-initialize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;PaperManagedEvents.shutdown&quot;,&quot;href&quot;:&quot;#papermanagedevents-shutdown&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## PaperManagedEvents

<ApiMemberCard
  id="papermanagedevents"
  name="PaperManagedEvents"
  kind="Object"
  kind-key="object"
  module="Paper"
  module-key="paper"
>

```kotlin
object PaperManagedEvents
```

Paper (Bukkit) implementation of [ManagedListenerProvider].

Registers native Bukkit event listeners via [org.bukkit.plugin.PluginManager.registerEvent],
tracks them by scope for automatic cleanup on reload, and supports manual
unregistration via [ManagedEventHandle].

Initialized once in [KattonPaperPlugin.onEnable] via [initialize].

### PaperManagedEvents.initialize

<ApiMemberCard
  id="papermanagedevents-initialize"
  name="PaperManagedEvents.initialize"
  kind="Function"
  kind-key="function"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmStatic
@JvmStatic fun initialize(plugin: JavaPlugin)
```

Must be called once during plugin initialization.
Installs the Paper-specific [provider] on [ManagedEvents].

</ApiMemberCard>

### PaperManagedEvents.shutdown

<ApiMemberCard
  id="papermanagedevents-shutdown"
  name="PaperManagedEvents.shutdown"
  kind="Function"
  kind-key="function"
  module="Paper"
  module-key="paper"
>

```kotlin
@JvmStatic
@JvmStatic fun shutdown()
```

Unregister all native listeners registered through this API.
Called on full server shutdown.

</ApiMemberCard>

</ApiMemberCard>

