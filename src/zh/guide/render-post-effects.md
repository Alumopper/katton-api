# 后处理效果

后处理效果是由客户端脚本或服务端数据包控制的全屏 shader pass。它适合灰度、染色、模糊、扫描线、像素化，或自定义视觉状态。

后处理效果是客户端资源。如果服务端要让某个玩家启用效果，需要确保客户端脚本已经注册过对应效果 id。在 Fabric/NeoForge 多人游戏中，这通常可以通过脚本包同步完成。

## 预设效果

Katton 提供了一组常用后处理预设：

```kotlin
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.registerClientGrayscalePostEffect
import top.katton.api.setClientPostEffect

@ClientScriptEntrypoint
fun registerVisionEffect() {
    registerClientGrayscalePostEffect(
        id = "example:vision/grayscale",
        amount = 0.85f
    )

    setClientPostEffect("example:vision/grayscale")
}
```

预设包括 `invert`、`grayscale`、`sepia`、`tint`、`color adjustment`、`vignette`、`chromatic aberration`、`pixelate`、`posterize`、`scanline` 和 `blur`。

## 自定义 Shader Pass

使用 `registerSimpleClientPostEffect` 可以注册一个单 pass shader。shader 读取 `InSampler`，并写出 `fragColor`。

```kotlin
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.registerSimpleClientPostEffect
import top.katton.api.setClientPostEffect

@ClientScriptEntrypoint
fun registerRedFlash() {
    registerSimpleClientPostEffect(
        id = "example:vision/red_flash",
        fragmentShaderSource = """
            #version 330

            uniform sampler2D InSampler;

            layout(std140) uniform SamplerInfo {
                vec2 OutSize;
                vec2 InSize;
            };

            in vec2 texCoord;
            out vec4 fragColor;

            void main() {
                vec4 color = texture(InSampler, texCoord);
                fragColor = vec4(color.rgb + vec3(0.18, 0.0, 0.0), color.a);
            }
        """.trimIndent()
    )

    setClientPostEffect("example:vision/red_flash")
}
```

完整 Minecraft post-effect JSON 可以使用 `registerClientPostEffect(id, postEffectJson, fragmentShaders, vertexShaders)` 注册，也可以用 `registerClientPostEffectFromResourcePack(id)` 从资源包读取。

## 服务端控制启用

当客户端已经知道某个效果 id 后，服务端脚本可以要求客户端启用、清除或切换该效果。

```kotlin
import top.katton.api.setPlayerPostEffect
import top.katton.api.clearPlayerPostEffect

setPlayerPostEffect(player, "example:vision/grayscale")
clearPlayerPostEffect(player)
```

广播控制可以使用 `setAllPlayersPostEffect`、`clearAllPlayersPostEffect` 和 `toggleAllPlayersPostEffect`。

## 清理

使用 `clearClientPostEffect()` 关闭当前效果，使用 `unregisterClientPostEffect(id)` 移除一个脚本拥有的定义，或使用 `clearClientPostEffects()` 做手动清理。脚本拥有的后处理定义会在客户端重载时清除。
