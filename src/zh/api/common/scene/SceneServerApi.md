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
取消仅发送给原接收者；此句柄不代表客户端已经播放或播放完成。
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

取消仅发送给原接收者；此句柄不代表客户端已经播放或播放完成。

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

在服务端线程向指定玩家触发已注册的客户端演出。

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

仅选择当前位于指定维度和半径内的玩家；后来进入者不补播。

</ApiMemberCard>

