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
托管事件侦听器句柄 - 在注册本机侦听器时返回到脚本。可用于在重载之前手动取消注册侦听器。
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

托管事件侦听器句柄 - 在注册本机侦听器时返回到脚本。
可用于在重载之前手动取消注册侦听器。

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

平台提供的托管事件侦听器注册表的实现。
每个平台（Paper、Fabric、NeoForge）在初始化期间设置[provider]。

托管侦听器会在重载时自动清理（GLOBAL范围仍然存在，
WORLD/SERVER_CACHE范围被清除，所有侦听器在完全重载时被清除）。

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

平台在初始化期间设置它（例如，PaperManagedEvents.initialize()）。
必须在任何脚本调用 [registerEvent] 之前设置。

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

注册托管本机事件侦听器。

侦听器会在 WORLD/SERVER_CACHE 范围的 `/katton reload` 上自动清理。
GLOBAL范围侦听器在重载期间持续存在，直到手动[unregisterEvent]为止。

### 参数

| 参数 | 说明 |
| --- | --- |
| `T` | 本机事件类（例如，org.bukkit.event.player.PlayerMoveEvent） |
| `priority` | 事件优先级（0=LOWEST、1=LOW、2=NORMAL、3=HIGH、4=HIGHEST、5=MONITOR） |
| `ignoreCancelled` | 如果为 true，则不会为已取消的事件调用处理程序 |
| `handler` | 接收输入事件的回调 |

### 返回值

可以与 [unregisterEvent] 一起使用来手动删除监听器的句柄

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

手动注销由 [registerEvent] 创建的托管侦听器。

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

取消注册在 [scope] 下注册的所有托管侦听器。
被[top.katton.Katton.clearWorldAndServerEvents]呼叫。

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

取消注册 ALL 托管侦听器。
在完全重载或服务器关闭时调用。

</ApiMemberCard>

