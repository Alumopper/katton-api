---
title: ScriptEntrypoint
outline: [2, 2]
---

<ApiDocPage
  title="ScriptEntrypoint"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ScriptEntrypoint.kt"
>
Execution stages available to server entrypoints.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerPhase&quot;,&quot;href&quot;:&quot;#serverphase&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;ServerPhase.BOOTSTRAP&quot;,&quot;href&quot;:&quot;#serverphase-bootstrap&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ServerPhase.READY&quot;,&quot;href&quot;:&quot;#serverphase-ready&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ClientPhase&quot;,&quot;href&quot;:&quot;#clientphase&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;ClientPhase.READY&quot;,&quot;href&quot;:&quot;#clientphase-ready&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ClientPhase.REGISTRY_SETUP&quot;,&quot;href&quot;:&quot;#clientphase-registry-setup&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ClientPhase.JOINED&quot;,&quot;href&quot;:&quot;#clientphase-joined&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;InvocationReason&quot;,&quot;href&quot;:&quot;#invocationreason&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;InvocationReason.INITIAL_LOAD&quot;,&quot;href&quot;:&quot;#invocationreason-initial-load&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;InvocationReason.HOT_RELOAD&quot;,&quot;href&quot;:&quot;#invocationreason-hot-reload&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ReloadCause&quot;,&quot;href&quot;:&quot;#reloadcause&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;ReloadCause.SERVER_START&quot;,&quot;href&quot;:&quot;#reloadcause-server-start&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ReloadCause.COMMAND&quot;,&quot;href&quot;:&quot;#reloadcause-command&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ReloadCause.DATAPACK_RELOAD&quot;,&quot;href&quot;:&quot;#reloadcause-datapack-reload&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ReloadCause.SERVER_PACK_SYNC&quot;,&quot;href&quot;:&quot;#reloadcause-server-pack-sync&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ReloadCause.CLIENT_JOIN&quot;,&quot;href&quot;:&quot;#reloadcause-client-join&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ScriptInvocationContext&quot;,&quot;href&quot;:&quot;#scriptinvocationcontext&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}, {&quot;label&quot;:&quot;BootstrapContext&quot;,&quot;href&quot;:&quot;#bootstrapcontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerReadyContext&quot;,&quot;href&quot;:&quot;#serverreadycontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientReadyContext&quot;,&quot;href&quot;:&quot;#clientreadycontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientRegistryContext&quot;,&quot;href&quot;:&quot;#clientregistrycontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientJoinedContext&quot;,&quot;href&quot;:&quot;#clientjoinedcontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ClientScriptEntrypoint&quot;,&quot;href&quot;:&quot;#clientscriptentrypoint&quot;,&quot;kind&quot;:&quot;Annotation Class&quot;,&quot;kindKey&quot;:&quot;annotation-class&quot;}, {&quot;label&quot;:&quot;ServerScriptEntrypoint&quot;,&quot;href&quot;:&quot;#serverscriptentrypoint&quot;,&quot;kind&quot;:&quot;Annotation Class&quot;,&quot;kindKey&quot;:&quot;annotation-class&quot;}]' />

## ServerPhase

<ApiMemberCard
  id="serverphase"
  name="ServerPhase"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class ServerPhase
```

Execution stages available to server entrypoints.

### ServerPhase.BOOTSTRAP

<ApiMemberCard
  id="serverphase-bootstrap"
  name="ServerPhase.BOOTSTRAP"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
BOOTSTRAP,
```

Early, process-lifetime initialization. Only GLOBAL packs may use this phase.

</ApiMemberCard>

### ServerPhase.READY

<ApiMemberCard
  id="serverphase-ready"
  name="ServerPhase.READY"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
READY
```

A server and its worlds are available. GLOBAL and WORLD packs may use this phase.

</ApiMemberCard>

</ApiMemberCard>

## ClientPhase

<ApiMemberCard
  id="clientphase"
  name="ClientPhase"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class ClientPhase
```

Execution stages available to client entrypoints.

### ClientPhase.READY

<ApiMemberCard
  id="clientphase-ready"
  name="ClientPhase.READY"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
READY,
```

One-time client initialization. Only GLOBAL packs may use this phase.

</ApiMemberCard>

### ClientPhase.REGISTRY_SETUP

<ApiMemberCard
  id="clientphase-registry-setup"
  name="ClientPhase.REGISTRY_SETUP"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
REGISTRY_SETUP,
```

Client content registration before remote registry validation.

</ApiMemberCard>

### ClientPhase.JOINED

<ApiMemberCard
  id="clientphase-joined"
  name="ClientPhase.JOINED"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
JOINED
```

A client connection, player, and world are available.

</ApiMemberCard>

</ApiMemberCard>

## InvocationReason

<ApiMemberCard
  id="invocationreason"
  name="InvocationReason"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class InvocationReason
```

Whether an entrypoint is running for the first time or being replayed after a reload.

### InvocationReason.INITIAL_LOAD

<ApiMemberCard
  id="invocationreason-initial-load"
  name="InvocationReason.INITIAL_LOAD"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
INITIAL_LOAD,
```

The entrypoint is running for the first time at its lifecycle boundary.

</ApiMemberCard>

### InvocationReason.HOT_RELOAD

<ApiMemberCard
  id="invocationreason-hot-reload"
  name="InvocationReason.HOT_RELOAD"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
HOT_RELOAD
```

The entrypoint is replaying after an accepted script reload or synchronized revision.

</ApiMemberCard>

</ApiMemberCard>

## ReloadCause

<ApiMemberCard
  id="reloadcause"
  name="ReloadCause"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class ReloadCause
```

The operation that caused an entrypoint invocation.

### ReloadCause.SERVER_START

<ApiMemberCard
  id="reloadcause-server-start"
  name="ReloadCause.SERVER_START"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
SERVER_START,
```

A server reached its ready lifecycle boundary.

</ApiMemberCard>

### ReloadCause.COMMAND

<ApiMemberCard
  id="reloadcause-command"
  name="ReloadCause.COMMAND"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
COMMAND,
```

A Katton command requested a script reload.

</ApiMemberCard>

### ReloadCause.DATAPACK_RELOAD

<ApiMemberCard
  id="reloadcause-datapack-reload"
  name="ReloadCause.DATAPACK_RELOAD"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
DATAPACK_RELOAD,
```

Minecraft's datapack reload flow requested a script reload.

</ApiMemberCard>

### ReloadCause.SERVER_PACK_SYNC

<ApiMemberCard
  id="reloadcause-server-pack-sync"
  name="ReloadCause.SERVER_PACK_SYNC"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
SERVER_PACK_SYNC,
```

A client activated a server-authoritative script-pack snapshot.

</ApiMemberCard>

### ReloadCause.CLIENT_JOIN

<ApiMemberCard
  id="reloadcause-client-join"
  name="ReloadCause.CLIENT_JOIN"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
CLIENT_JOIN
```

A client connection gained its local player and level.

</ApiMemberCard>

</ApiMemberCard>

## ScriptInvocationContext

<ApiMemberCard
  id="scriptinvocationcontext"
  name="ScriptInvocationContext"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
sealed interface ScriptInvocationContext
```

Common metadata supplied to phase-aware entrypoints.

</ApiMemberCard>

## BootstrapContext

<ApiMemberCard
  id="bootstrapcontext"
  name="BootstrapContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class BootstrapContext( override val packId: String, override val scope: ScriptPackScope, override val reason: InvocationReason, override val cause: ReloadCause, override val platform: String ) : ScriptInvocationContext
```

Invocation metadata for [ServerPhase.BOOTSTRAP].

</ApiMemberCard>

## ServerReadyContext

<ApiMemberCard
  id="serverreadycontext"
  name="ServerReadyContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerReadyContext( override val packId: String, override val scope: ScriptPackScope, override val reason: InvocationReason, override val cause: ReloadCause, override val platform: String, val server: MinecraftServer ) : ScriptInvocationContext
```

Invocation metadata for [ServerPhase.READY], including the available [server].

</ApiMemberCard>

## ClientReadyContext

<ApiMemberCard
  id="clientreadycontext"
  name="ClientReadyContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientReadyContext( override val packId: String, override val scope: ScriptPackScope, override val reason: InvocationReason, override val cause: ReloadCause, override val platform: String, val client: Minecraft ) : ScriptInvocationContext
```

Invocation metadata for [ClientPhase.READY], including the available [client].

</ApiMemberCard>

## ClientRegistryContext

<ApiMemberCard
  id="clientregistrycontext"
  name="ClientRegistryContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientRegistryContext( override val packId: String, override val scope: ScriptPackScope, override val reason: InvocationReason, override val cause: ReloadCause, override val platform: String, val client: Minecraft ) : ScriptInvocationContext
```

Invocation metadata for [ClientPhase.REGISTRY_SETUP], before remote registry validation.

</ApiMemberCard>

## ClientJoinedContext

<ApiMemberCard
  id="clientjoinedcontext"
  name="ClientJoinedContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ClientJoinedContext( override val packId: String, override val scope: ScriptPackScope, override val reason: InvocationReason, override val cause: ReloadCause, override val platform: String, val client: Minecraft, val player: LocalPlayer, val level: ClientLevel ) : ScriptInvocationContext
```

Invocation metadata for [ClientPhase.JOINED], including the available [player] and [level].

</ApiMemberCard>

## ClientScriptEntrypoint

<ApiMemberCard
  id="clientscriptentrypoint"
  name="ClientScriptEntrypoint"
  kind="Annotation Class"
  kind-key="annotation-class"
  module="Common"
  module-key="common"
>

```kotlin
@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class ClientScriptEntrypoint( val phase: ClientPhase
```

Marks a top-level function as a client script entrypoint.

</ApiMemberCard>

## ServerScriptEntrypoint

<ApiMemberCard
  id="serverscriptentrypoint"
  name="ServerScriptEntrypoint"
  kind="Annotation Class"
  kind-key="annotation-class"
  module="Common"
  module-key="common"
>

```kotlin
@Retention(AnnotationRetention.RUNTIME)
@Target(AnnotationTarget.FUNCTION)
annotation class ServerScriptEntrypoint( val phase: ServerPhase
```

Marks a top-level function as a server script entrypoint.

</ApiMemberCard>

