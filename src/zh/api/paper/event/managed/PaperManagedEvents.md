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
[ManagedListenerProvider] 的 Paper (Bukkit) 实现。
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

[ManagedListenerProvider] 的 Paper (Bukkit) 实现。

通过 [org.bukkit.plugin.PluginManager.registerEvent] 注册原生 Bukkit 事件监听器，
按作用域跟踪它们以便在重载时自动清理，并支持通过 [ManagedEventHandle] 手动注销。

该对象通过 [initialize] 在 [KattonPaperPlugin.onEnable] 中完成一次初始化。

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
将 Paper 专用的 [provider] 安装到 [ManagedEvents] 上。

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

注销通过此 API 注册的所有原生监听器。
在服务器完全关闭时调用。

</ApiMemberCard>

</ApiMemberCard>

