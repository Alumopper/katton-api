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
在当前脚本所有者命名空间下，对指定键只执行一次。
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

在当前脚本所有者命名空间下，对指定键只执行一次。

脚本重载后，这些标记不会自动清除，因此相同的代码段不会再次执行，直到你调用 [resetOnce] 或 [clearOnce] 重置标记。

在脚本执行期间调用时，默认命名空间是该脚本的所有者 id；在脚本执行之外调用时，默认命名空间是 "global"。

### 返回值

如果这次执行了 [block] 则返回 true；如果它之前已经执行过，则返回 false。

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

移除当前脚本所有者命名空间（或指定命名空间）下 [key] 对应的 once 防护标记。

### 返回值

如果标记存在并已移除，则返回 true；否则返回 false。

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

清除当前脚本所有者命名空间（或指定命名空间）下的所有 once 防护标记。

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

当前 Minecraft 服务器实例。在客户端执行期间可能为 null。

当你只需要可选地访问服务器时使用这个属性。
如果操作必须依赖服务器，请改用 [requireServer]。

### 返回值

当前 MinecraftServer 实例；如果不可用则返回 null。

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

要求 Minecraft 服务器实例可用。

当操作必须依赖服务器才能成功时使用这个函数。
如果服务器不可用会直接抛出错误，例如在客户端执行期间，或者服务器尚未启动时。

### 返回值

当前 MinecraftServer 实例。

### 异常

| 异常 | 说明 |
| --- | --- |
| `IllegalStateException` | 当服务器不可用时抛出。 |

</ApiMemberCard>

