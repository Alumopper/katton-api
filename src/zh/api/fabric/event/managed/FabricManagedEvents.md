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
Fabric 实施[ManagedListenerProvider]。
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

Fabric 实施[ManagedListenerProvider]。

Fabric的事件系统（[Event]）不支持单独的回调注销。
为了解决这个问题，每个托管侦听器将用户回调包装在动态代理中
带有 `active` 标志。重载时，所有WORLD/SERVER_CACHE范围的包装器都将被停用。

通过[initialize]在[KattonFabric.onInitialize]初始化一次。

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

注册一个托管的 Fabric 原生事件监听器。

Fabric 事件基于回调，不支持单独注销。
托管侦听器使用带有 `active` 标志的动态代理包装器 —
重载时，所有WORLD/SERVER_CACHE范围的包装器都将被停用。

用途：
```kotlin
registerFabricEvent(ServerTickEvents.START_SERVER_TICK, ServerTickEvents.StartTick { server ->
// handler
})
```

### 参数

| 参数 | 说明 |
| --- | --- |
| `event` | 要注册的 Fabric 事件对象 |
| `callback` | 功能接口回调 |

### 返回值

手动注销的句柄

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

手动取消注册由 [registerFabricEvent] 创建的托管 Fabric 侦听器。

</ApiMemberCard>

