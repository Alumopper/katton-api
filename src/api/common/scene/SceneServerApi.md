---
title: SceneServerApi
outline: [2, 2]
---

<ApiDocPage
  title="SceneServerApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.scene"
  source-file="common/src/main/kotlin/top/katton/api/scene/SceneServerApi.kt"
>
Cancellation targets the original recipients; this is not a playback acknowledgement.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;RemoteSceneHandle&quot;,&quot;href&quot;:&quot;#remotescenehandle&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;playPlayerScene&quot;,&quot;href&quot;:&quot;#playplayerscene&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playNearbyScene&quot;,&quot;href&quot;:&quot;#playnearbyscene&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## RemoteSceneHandle

<ApiMemberCard
  id="remotescenehandle"
  name="RemoteSceneHandle"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class RemoteSceneHandle internal constructor(val instanceId: UUID, private var recipients: List<ServerPlayer>)
```

Cancellation targets the original recipients; this is not a playback acknowledgement.

</ApiMemberCard>

## playPlayerScene

<ApiMemberCard
  id="playplayerscene"
  name="playPlayerScene"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playPlayerScene(player: ServerPlayer, id: String, context: SceneContext = SceneContext(player.position(), player.uuid), revision: String = ScriptExecutionContext.currentScriptRevision() ?: "1"): RemoteSceneHandle
```

Trigger a registered client scene. Call on the server thread.

</ApiMemberCard>

## playNearbyScene

<ApiMemberCard
  id="playnearbyscene"
  name="playNearbyScene"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playNearbyScene(level: ServerLevel, origin: Vec3, radius: Double, id: String, context: SceneContext = SceneContext(origin), revision: String = ScriptExecutionContext.currentScriptRevision() ?: "1"): RemoteSceneHandle
```

Select recipients once, in the specified dimension and radius; late arrivals do not receive a replay.

</ApiMemberCard>
