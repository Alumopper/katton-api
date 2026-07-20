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
Ask one Fabric or NeoForge client to activate a registered post effect.
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

Ask one Fabric or NeoForge client to activate a registered post effect.

The client must register [id] before this packet arrives. Paper has no
Katton client, so this function has no visible effect there.

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

String-id overload of [setPlayerPostEffect]. Returns false when [id] is invalid.

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

Ask every connected Fabric or NeoForge client to activate [id].

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

String-id overload of [setAllPlayersPostEffect]. Returns false when [id] is invalid.

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

Ask one client to clear its active Katton post effect.

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

Ask every connected client to clear its active Katton post effect.

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

Ask one client to toggle its current Katton post effect.

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

Ask every connected client to toggle its current Katton post effect.

</ApiMemberCard>

