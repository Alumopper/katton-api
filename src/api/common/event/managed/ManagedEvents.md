---
title: ManagedEvents
outline: [2, 2]
---

<ApiDocPage
  title="ManagedEvents"
  module="Common"
  module-key="common"
  package-name="top.katton.api.event.managed"
  source-file="common/src/main/kotlin/top/katton/api/event/managed/ManagedEvents.kt"
>
Managed event listener handle — returned to scripts when registering a native listener. Can be used to manually unregister the listener before reload.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ManagedEventHandle&quot;,&quot;href&quot;:&quot;#managedeventhandle&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ManagedListenerProvider&quot;,&quot;href&quot;:&quot;#managedlistenerprovider&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}, {&quot;label&quot;:&quot;provider&quot;,&quot;href&quot;:&quot;#provider&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;registerEvent&quot;,&quot;href&quot;:&quot;#registerevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;unregisterEvent&quot;,&quot;href&quot;:&quot;#unregisterevent&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearManagedByScope&quot;,&quot;href&quot;:&quot;#clearmanagedbyscope&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearAllManaged&quot;,&quot;href&quot;:&quot;#clearallmanaged&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## ManagedEventHandle

<ApiMemberCard
  id="managedeventhandle"
  name="ManagedEventHandle"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ManagedEventHandle( val id: Long, val eventClass: Class<*> )
```

Managed event listener handle — returned to scripts when registering a native listener.
Can be used to manually unregister the listener before reload.

</ApiMemberCard>

## ManagedListenerProvider

<ApiMemberCard
  id="managedlistenerprovider"
  name="ManagedListenerProvider"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
interface ManagedListenerProvider
```

Platform-provided implementation of managed event listener registry.
Each platform (Paper, Fabric, NeoForge) sets [provider] during initialization.

Managed listeners are automatically cleaned up on reload (GLOBAL scope persists,
WORLD/SERVER_CACHE scope is cleared, all listeners cleared on full reload).

</ApiMemberCard>

## provider

<ApiMemberCard
  id="provider"
  name="provider"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
@Volatile
@JvmField
@Volatile @JvmField var provider: ManagedListenerProvider?
```

Platform sets this during initialization (e.g., PaperManagedEvents.initialize()).
Must be set before any script calls [registerEvent].

</ApiMemberCard>

## registerEvent

<ApiMemberCard
  id="registerevent"
  name="registerEvent"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
inline fun <reified T : Any> registerEvent(priority: Int = 2, ignoreCancelled: Boolean = false, handler: (T) -> Unit): ManagedEventHandle
```

Register a managed native event listener.

The listener is automatically cleaned up on `/katton reload` for WORLD/SERVER_CACHE scopes.
GLOBAL scope listeners persist across reloads until manually [unregisterEvent]ed.

### Parameters

| Parameter | Description |
| --- | --- |
| `T` | The native event class (e.g., org.bukkit.event.player.PlayerMoveEvent) |
| `priority` | Event priority (0=LOWEST, 1=LOW, 2=NORMAL, 3=HIGH, 4=HIGHEST, 5=MONITOR) |
| `ignoreCancelled` | If true, the handler is not called for cancelled events |
| `handler` | The callback receiving the typed event |

### Returns

A handle that can be used with [unregisterEvent] to manually remove the listener

</ApiMemberCard>

## unregisterEvent

<ApiMemberCard
  id="unregisterevent"
  name="unregisterEvent"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun unregisterEvent(handle: ManagedEventHandle)
```

Manually unregister a managed listener created by [registerEvent].

</ApiMemberCard>

## clearManagedByScope

<ApiMemberCard
  id="clearmanagedbyscope"
  name="clearManagedByScope"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearManagedByScope(scope: ScriptPackScope)
```

Unregister all managed listeners registered under [scope].
Called by [top.katton.Katton.clearWorldAndServerEvents].

</ApiMemberCard>

## clearAllManaged

<ApiMemberCard
  id="clearallmanaged"
  name="clearAllManaged"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearAllManaged()
```

Unregister ALL managed listeners.
Called on full reload or server shutdown.

</ApiMemberCard>

