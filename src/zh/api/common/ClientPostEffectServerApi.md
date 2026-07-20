---
title: ClientPostEffectServerApi
outline: [2, 2]
---

<ApiDocPage
  title="ClientPostEffectServerApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ClientPostEffectServerApi.kt"
>
请求一个 Fabric 或 NeoForge 客户端启用已注册的后处理效果。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;setPlayerPostEffect&quot;,&quot;href&quot;:&quot;#setplayerposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setPlayerPostEffect&quot;,&quot;href&quot;:&quot;#setplayerposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setAllPlayersPostEffect&quot;,&quot;href&quot;:&quot;#setallplayersposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setAllPlayersPostEffect&quot;,&quot;href&quot;:&quot;#setallplayersposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearPlayerPostEffect&quot;,&quot;href&quot;:&quot;#clearplayerposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearAllPlayersPostEffect&quot;,&quot;href&quot;:&quot;#clearallplayersposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;togglePlayerPostEffect&quot;,&quot;href&quot;:&quot;#toggleplayerposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;toggleAllPlayersPostEffect&quot;,&quot;href&quot;:&quot;#toggleallplayersposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## setPlayerPostEffect

<ApiMemberCard
  id="setplayerposteffect"
  name="setPlayerPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setPlayerPostEffect(player: ServerPlayer, id: Identifier)
```

请求一个 Fabric 或 NeoForge 客户端启用已注册的后处理效果。

客户端必须在收到数据包前注册 [id]。Paper 没有 Katton 客户端，因此此函数在
Paper 上不会产生可见效果。

</ApiMemberCard>

## setPlayerPostEffect

<ApiMemberCard
  id="setplayerposteffect"
  name="setPlayerPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setPlayerPostEffect(player: ServerPlayer, id: String): Boolean
```

[setPlayerPostEffect] 的字符串 id 重载。若 [id] 无效则返回 false。

</ApiMemberCard>

## setAllPlayersPostEffect

<ApiMemberCard
  id="setallplayersposteffect"
  name="setAllPlayersPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setAllPlayersPostEffect(id: Identifier)
```

请求所有已连接的 Fabric 或 NeoForge 客户端启用 [id]。

</ApiMemberCard>

## setAllPlayersPostEffect

<ApiMemberCard
  id="setallplayersposteffect"
  name="setAllPlayersPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setAllPlayersPostEffect(id: String): Boolean
```

[setAllPlayersPostEffect] 的字符串 id 重载。若 [id] 无效则返回 false。

</ApiMemberCard>

## clearPlayerPostEffect

<ApiMemberCard
  id="clearplayerposteffect"
  name="clearPlayerPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearPlayerPostEffect(player: ServerPlayer)
```

请求一个客户端清除当前启用的 Katton 后处理效果。

</ApiMemberCard>

## clearAllPlayersPostEffect

<ApiMemberCard
  id="clearallplayersposteffect"
  name="clearAllPlayersPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearAllPlayersPostEffect()
```

请求所有已连接客户端清除当前启用的 Katton 后处理效果。

</ApiMemberCard>

## togglePlayerPostEffect

<ApiMemberCard
  id="toggleplayerposteffect"
  name="togglePlayerPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun togglePlayerPostEffect(player: ServerPlayer)
```

请求一个客户端切换当前 Katton 后处理效果的启用状态。

</ApiMemberCard>

## toggleAllPlayersPostEffect

<ApiMemberCard
  id="toggleallplayersposteffect"
  name="toggleAllPlayersPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun toggleAllPlayersPostEffect()
```

请求所有已连接客户端切换当前 Katton 后处理效果的启用状态。

</ApiMemberCard>

