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
Managed event listener handle returned to scripts when registering a native listener. 注册原生事件监听器后返回给脚本的托管监听器句柄。
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

Managed event listener handle returned to scripts when registering a native listener.
注册原生事件监听器后返回给脚本的托管监听器句柄。

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

Platform bridge for managed native event listeners.
Paper, Fabric, and NeoForge can provide their own implementation through [provider].
Implementations track scope and environment so integrated client and server listeners can reload independently.

事件会按脚本所有者和作用域记录。WORLD/SERVER_CACHE 作用域会在重载或清理时自动移除，
GLOBAL 作用域需要显式注销或在全局清理时移除。

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

Active managed-listener provider installed by the current platform.
Paper currently initializes this from `PaperManagedEvents.initialize()`.

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

Register a native platform event listener from script code.

Listeners in WORLD/SERVER_CACHE scope are cleaned up during `/katton reload`.
GLOBAL listeners stay active until [unregisterEvent] or a full managed cleanup removes them.

### Parameters

| Parameter | Description |
| --- | --- |
| `T` | Native event type, for example `org.bukkit.event.player.PlayerMoveEvent`. |
| `priority` | Event priority. Paper uses 0=LOWEST, 1=LOW, 2=NORMAL, 3=HIGH, 4=HIGHEST, 5=MONITOR. |
| `ignoreCancelled` | When `true`, cancelled events are ignored when the platform supports that behavior. |
| `handler` | Callback invoked with the native event instance. |

### Returns

Handle that can be passed to [unregisterEvent].

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

Unregister a listener previously created by [registerEvent].

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

Clear all managed listeners registered under [scope].
Called from [top.katton.Katton.clearWorldAndServerEvents].

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

Clear every managed listener from the active provider.
Used during full shutdown or global cleanup.

</ApiMemberCard>

