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
Execute [block] only once for a given [key] under the current script owner namespace.
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

Execute [block] only once for a given [key] under the current script owner namespace.

When script is reloaded, the markers won't be cleared, so the block won't execute again until the marker is reset with [resetOnce] or [clearOnce].

When called inside a script execution, the default namespace is that script's owner id;
outside script execution, the default namespace is "global".

### Returns

true if [block] was executed this time, false if it was already executed before.

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

Remove once-guard marker for [key] in the current script owner namespace (or [namespace]).

### Returns

true if marker existed and was removed, false otherwise.

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

Clear all once-guard markers in the current script owner namespace (or [namespace]).

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

Current minecraft server instance. Maybe null during client-side execution.

Use this property when you need optional access to the server.
For cases where the server must be available, use [requireServer] instead.

### Returns

The current MinecraftServer instance, or null if not available

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

Requires the Minecraft server instance to be available.

Use this function when the server must be present for the operation to succeed.
Throws an error if the server is not available (e.g., during client-side execution
or before the server has started).

### Returns

The current MinecraftServer instance

### Throws

| Exception | Description |
| --- | --- |
| `IllegalStateException` | if the server is not available |

</ApiMemberCard>

