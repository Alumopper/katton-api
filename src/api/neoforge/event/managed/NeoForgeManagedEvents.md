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
NeoForge implementation of [ManagedListenerProvider].
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

NeoForge implementation of [ManagedListenerProvider].

Registers native NeoForge event listeners via [IEventBus.addListener],
tracks them by scope for automatic cleanup on reload, and supports manual
unregistration via [ManagedEventHandle].

Initialized once in [KattonNeoForge] constructor via [initialize].

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

Must be called once during mod construction.
Installs the NeoForge-specific [provider] on [ManagedEvents].

</ApiMemberCard>

</ApiMemberCard>

