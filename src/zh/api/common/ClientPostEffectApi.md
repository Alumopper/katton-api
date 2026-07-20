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
注册一个运行时客户端 post effect，读取 Minecraft 26.x 的 post-effect JSON。
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

注册一个运行时客户端 post effect，读取 Minecraft 26.x 的 post-effect JSON。

该 JSON 与资源包中的 `assets/<namespace>/post_effect/<path>.json` 格式一致。
JSON 中引用的自定义 shader id 可以通过 [fragmentShaders] 和 [vertexShaders] 提供。

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

从当前启用的资源包中读取 `assets/<namespace>/post_effect/<path>.json` 并注册一个运行时客户端 post effect。

JSON 中引用的 shader 和纹理资源也会一并检查。缺失资源会记录为警告；只有 post effect JSON 本身存在时，这个函数才会返回 true。

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

构建并注册一个简单的单通道全屏效果。

[fragmentShaderSource] 应该定义一个后处理 fragment shader，负责采样 `InSampler` 并写入 `fragColor`。
生成的渲染链为 `minecraft:main -> swap -> minecraft:main`。

</ApiMemberCard>

