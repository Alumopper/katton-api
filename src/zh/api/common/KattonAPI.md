---
title: KattonAPI
outline: [2, 2]
---

<ApiDocPage
  title="KattonAPI"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonAPI.kt"
>
对于当前脚本所有者命名空间下的给定[key]，仅执行一次[block]。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;once&quot;,&quot;href&quot;:&quot;#once&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;resetOnce&quot;,&quot;href&quot;:&quot;#resetonce&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearOnce&quot;,&quot;href&quot;:&quot;#clearonce&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;server&quot;,&quot;href&quot;:&quot;#server&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;requireServer&quot;,&quot;href&quot;:&quot;#requireserver&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## once

<ApiMemberCard
  id="once"
  name="once"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun once(key: String, namespace: String? = null, block: () -> Unit): Boolean
```

对于当前脚本所有者命名空间下的给定[key]，仅执行一次[block]。

重载脚本时，标记不会被清除，因此在使用 [resetOnce] 或 [clearOnce] 重置标记之前，块不会再次执行。

当在脚本执行内部调用时，默认命名空间是该脚本的所有者 ID；
在脚本执行之外，默认命名空间是"global"。

### 返回值

如果这次执行了[block]，则为 true；如果之前已经执行过，则为 false。

</ApiMemberCard>

## resetOnce

<ApiMemberCard
  id="resetonce"
  name="resetOnce"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun resetOnce(key: String, namespace: String? = null): Boolean
```

删除当前脚本所有者命名空间中[key]（或[namespace]）的一次性保护标记。

### 返回值

如果标记存在并被删除，则为 true，否则为 false。

</ApiMemberCard>

## clearOnce

<ApiMemberCard
  id="clearonce"
  name="clearOnce"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearOnce(namespace: String? = null)
```

清除当前脚本所有者命名空间（或[namespace]）中的所有一次性保护的标记。

</ApiMemberCard>

## server

<ApiMemberCard
  id="server"
  name="server"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val server: MinecraftServer?
```

当前的Minecraft 服务器实例。在客户端执行期间可能为 null。

当您需要对服务器进行可选访问时，请使用此属性。
对于服务器必须可用的情况，请使用 [requireServer] 代替。

### 返回值

当前 MinecraftServer 实例，如果不可用则为 null

</ApiMemberCard>

## requireServer

<ApiMemberCard
  id="requireserver"
  name="requireServer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun requireServer(): MinecraftServer
```

需要 Minecraft 服务器实例可用。

当服务器必须存在才能使操作成功时，请使用此功能。
如果服务器不可用（例如，在客户端执行期间），则抛出错误
或在服务器启动之前）。

### 返回值

当前 MinecraftServer 实例

### 异常

| 异常 | 说明 |
| --- | --- |
| `IllegalStateException` | 如果服务器不可用 |

</ApiMemberCard>

