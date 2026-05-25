# Post Effects

Post effects are full-screen shader passes controlled by client scripts or by server packets. They are useful for temporary visual states such as grayscale, tint, blur, scanlines, pixelation, or a custom shader chain.

Post effects are client-side resources. If the server wants to activate one for a player, make sure the client-side script pack registers the effect first. On Fabric and NeoForge multiplayer this can be handled by script pack sync.

## Presets

Katton includes helpers for common post effects:

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

Preset helpers include invert, grayscale, sepia, tint, color adjustment, vignette, chromatic aberration, pixelate, posterize, scanline, and blur.

## Custom Shader Pass

Use `registerSimpleClientPostEffect` for a one-pass shader that samples `InSampler` and writes `fragColor`.

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

For full Minecraft post-effect JSON, use `registerClientPostEffect(id, postEffectJson, fragmentShaders, vertexShaders)` or `registerClientPostEffectFromResourcePack(id)`.

## Server-Controlled Activation

Server scripts can ask clients to activate, clear, or toggle an effect after the client knows that effect id.

```kotlin
import top.katton.api.setPlayerPostEffect
import top.katton.api.clearPlayerPostEffect

setPlayerPostEffect(player, "example:vision/grayscale")
clearPlayerPostEffect(player)
```

Use `setAllPlayersPostEffect`, `clearAllPlayersPostEffect`, and `toggleAllPlayersPostEffect` for broadcast control.

## Cleanup

Use `clearClientPostEffect()` to disable the current effect, `unregisterClientPostEffect(id)` to remove one script-owned definition, or `clearClientPostEffects()` during manual cleanup. Script-owned post effect definitions are cleared on client reload.
