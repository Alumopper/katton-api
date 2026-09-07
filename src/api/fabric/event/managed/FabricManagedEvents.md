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

<ApiMembersList items-json='[{&quot;label&quot;:&quot;FabricManagedEvents&quot;,&quot;href&quot;:&quot;#fabricmanagedevents&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;FabricManagedEvents.FabricListenerState&quot;,&quot;href&quot;:&quot;#fabricmanagedevents-fabriclistenerstate&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}]' />

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

### FabricManagedEvents.FabricListenerState

<ApiMemberCard
  id="fabricmanagedevents-fabriclistenerstate"
  name="FabricManagedEvents.FabricListenerState"
  kind="Class"
  kind-key="class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
class FabricListenerState(@Volatile var callback: Any?
```

The Fabric event permanently owns the proxy, so the proxy may only retain
this small host-loaded state object. Clearing [callback] releases the old
script lambda and its classloader even though Fabric cannot remove the
proxy itself.

</ApiMemberCard>

</ApiMemberCard>

