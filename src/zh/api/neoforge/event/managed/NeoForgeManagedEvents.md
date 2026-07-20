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
NeoForge 版 [ManagedListenerProvider] 的实现。 通过 [IEventBus.addListener] 注册原生 NeoForge 事件监听器，按作用域跟踪以便在重载时自动清理，并支持通过 [ManagedEventHandle] 手动注销。 在 [KattonNeoForge] 构造期间通过 [initialize] 初始化一次。
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

NeoForge 版 [ManagedListenerProvider] 的实现。
通过 [IEventBus.addListener] 注册原生 NeoForge 事件监听器，按作用域跟踪以便在重载时自动清理，并支持通过 [ManagedEventHandle] 手动注销。
在 [KattonNeoForge] 构造期间通过 [initialize] 初始化一次。

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

必须在模组构造期间调用一次。
在 [ManagedEvents] 上安装 NeoForge 专用的 [provider]。

</ApiMemberCard>

</ApiMemberCard>

