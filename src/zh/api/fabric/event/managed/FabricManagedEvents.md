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
[ManagedListenerProvider] 的 Fabric 实现。
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

[ManagedListenerProvider] 的 Fabric 实现。

Fabric 的事件系统 ([Event]) 不支持单个回调的注销。
为了绕开这一点，每个 managed listener 都会用带有 `active` 标记的动态代理包装用户回调。
在重载时，所有 WORLD/SERVER_CACHE 作用域的包装器都会被停用。

该对象通过 [initialize] 在 [KattonFabric.onInitialize] 中完成一次初始化。

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

