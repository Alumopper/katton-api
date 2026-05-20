---
title: FabricManagedEvents
outline: [2, 2]
---

<ApiDocPage
  title="FabricManagedEvents"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event.managed"
  source-file="fabric/src/main/kotlin/top/katton/api/event/managed/FabricManagedEvents.kt"
>
Fabric implementation of [ManagedListenerProvider].
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;FabricManagedEvents&quot;,&quot;href&quot;:&quot;#fabricmanagedevents&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;registerFabricEvent&quot;,&quot;href&quot;:&quot;#registerfabricevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;unregisterFabricEvent&quot;,&quot;href&quot;:&quot;#unregisterfabricevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## FabricManagedEvents

<ApiMemberCard
  id="fabricmanagedevents"
  name="FabricManagedEvents"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object FabricManagedEvents
```

Fabric implementation of [ManagedListenerProvider].

Fabric's event system ([Event]) does not support individual callback unregistration.
To work around this, each managed listener wraps the user callback in a dynamic proxy
with an `active` flag. On reload, all WORLD/SERVER_CACHE-scoped wrappers are deactivated.

Initialized once in [KattonFabric.onInitialize] via [initialize].

</ApiMemberCard>

## registerFabricEvent

<ApiMemberCard
  id="registerfabricevent"
  name="registerFabricEvent"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
fun <T : Any> registerFabricEvent(event: Event<T>, callback: T): ManagedEventHandle
```

Register a managed Fabric-native event listener.

Fabric events are callback-based and don't support individual unregistration.
Managed listeners use a dynamic proxy wrapper with an `active` flag —
on reload, all WORLD/SERVER_CACHE-scoped wrappers are deactivated.

Usage:
```kotlin
registerFabricEvent(ServerTickEvents.START_SERVER_TICK, ServerTickEvents.StartTick { server ->
// handler
})
```

### Parameters

| Parameter | Description |
| --- | --- |
| `event` | The Fabric event object to register on |
| `callback` | The functional interface callback |

### Returns

A handle for manual unregistration

</ApiMemberCard>

## unregisterFabricEvent

<ApiMemberCard
  id="unregisterfabricevent"
  name="unregisterFabricEvent"
  kind="Function"
  kind-key="function"
  module="Fabric"
  module-key="fabric"
>

```kotlin
fun unregisterFabricEvent(handle: ManagedEventHandle)
```

Manually unregister a managed Fabric listener created by [registerFabricEvent].

</ApiMemberCard>

