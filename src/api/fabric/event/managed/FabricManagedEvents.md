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

<ApiMembersList items-json='[{&quot;label&quot;:&quot;FabricManagedEvents&quot;,&quot;href&quot;:&quot;#fabricmanagedevents&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}]' />

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

