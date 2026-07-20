---
title: ClientPostEffectApi
outline: [2, 2]
---

<ApiDocPage
  title="ClientPostEffectApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ClientPostEffectApi.kt"
>
Register a runtime client post effect from Minecraft 26.x post-effect JSON.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerClientPostEffect&quot;,&quot;href&quot;:&quot;#registerclientposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientPostEffect&quot;,&quot;href&quot;:&quot;#registerclientposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerSimpleClientPostEffect&quot;,&quot;href&quot;:&quot;#registersimpleclientposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerClientPostEffect

<ApiMemberCard
  id="registerclientposteffect"
  name="registerClientPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientPostEffect(id: Identifier, postEffectJson: String, fragmentShaders: Map<Identifier, String> = emptyMap(), vertexShaders: Map<Identifier, String> = emptyMap()): Boolean
```

Register a runtime client post effect from Minecraft 26.x post-effect JSON.

The JSON is the same format used by resource packs at
`assets/<namespace>/post_effect/<path>.json`. Custom shader ids referenced
from that JSON can be supplied through [fragmentShaders] and [vertexShaders].

</ApiMemberCard>

## registerClientPostEffect

<ApiMemberCard
  id="registerclientposteffect"
  name="registerClientPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientPostEffect(id: Identifier): Boolean
```

Register a runtime client post effect by reading
`assets/<namespace>/post_effect/<path>.json` from the active resource packs.

Shader and texture resources referenced by the JSON are also checked. Missing
resources are logged as warnings and the post effect JSON must exist for this
function to return true.

</ApiMemberCard>

## registerSimpleClientPostEffect

<ApiMemberCard
  id="registersimpleclientposteffect"
  name="registerSimpleClientPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerSimpleClientPostEffect(id: String, fragmentShaderSource: String, fragmentShaderId: String? = null, uniformsJson: String = "{}"): Boolean
```

Build and register a simple one-pass full-screen effect.

[fragmentShaderSource] should define a post-processing fragment shader that
samples `InSampler` and writes `fragColor`. The generated chain renders
`minecraft:main -> swap -> minecraft:main`.

</ApiMemberCard>

