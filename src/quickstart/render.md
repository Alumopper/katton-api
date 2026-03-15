# Render 

Katton provides a simple API for rendering custom HUD elements or simple shapes in world.

## HUD Render

To render some elements on hud layer, you should register a hud renderer with `registerHudRenderer` function, and provide a render callback that will be called every frame to render your elements. You can specify the render layer and order of your renderer to control when it will be rendered.

```kotlin
fun hudRenderTestMain() {

    // Katton won't automatically unregister your hud renderer when you reload the script, so you need to manually unregister it.
    unregisterHudRenderer("katton:test:hud")

    registerHudRenderer("katton:test:hud", HudRenderLayer.FOREGROUND, 20) { ctx ->
        // render something with ctx
    }
}
```

