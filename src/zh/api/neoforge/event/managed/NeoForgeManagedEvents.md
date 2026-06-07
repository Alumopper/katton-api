---
title: NeoForgeManagedEvents
outline: [2, 2]
---

<ApiDocPage
  title="NeoForgeManagedEvents"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event.managed"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/managed/NeoForgeManagedEvents.kt"
>
NeoForge 实施[ManagedListenerProvider]。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;NeoForgeManagedEvents&quot;,&quot;href&quot;:&quot;#neoforgemanagedevents&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;NeoForgeManagedEvents.initialize&quot;,&quot;href&quot;:&quot;#neoforgemanagedevents-initialize&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## NeoForgeManagedEvents

<ApiMemberCard
  id="neoforgemanagedevents"
  name="NeoForgeManagedEvents"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
object NeoForgeManagedEvents
```

NeoForge 实施[ManagedListenerProvider]。

通过 [IEventBus.addListener] 注册原生 NeoForge 事件监听器，
按范围跟踪它们，以便在重载时自动清理，并支持手动
通过[ManagedEventHandle]取消注册。

通过 [initialize] 在 [KattonNeoForge] 构造函数中初始化一次。

### NeoForgeManagedEvents.initialize

<ApiMemberCard
  id="neoforgemanagedevents-initialize"
  name="NeoForgeManagedEvents.initialize"
  kind="Function"
  kind-key="function"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmStatic
@JvmStatic fun initialize()
```

必须在 mod 构建期间调用一次。
在 [ManagedEvents] 上安装NeoForge特定的[provider]。

</ApiMemberCard>

</ApiMemberCard>

