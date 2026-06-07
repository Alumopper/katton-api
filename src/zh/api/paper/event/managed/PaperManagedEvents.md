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
Paper（Bukkit）实施[ManagedListenerProvider]。
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

Paper（Bukkit）实施[ManagedListenerProvider]。

通过 [org.bukkit.plugin.PluginManager.registerEvent] 注册原生 Bukkit 事件监听器，
按范围跟踪它们，以便在重载时自动清理，并支持手动
通过[ManagedEventHandle]取消注册。

通过[initialize]在[KattonPaperPlugin.onEnable]初始化一次。

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

必须在插件初始化期间调用一次。
在 [ManagedEvents] 上安装Paper特定的[provider]。

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

取消注册所有通过此API注册的本机侦听器。
调用服务器完全关闭。

</ApiMemberCard>

</ApiMemberCard>

