---
title: KattonClientRenderApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonClientRenderApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonClientRenderApi.kt"
>
Screen-space render callback context.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;HudRenderContext&quot;,&quot;href&quot;:&quot;#hudrendercontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;WorldRenderContext&quot;,&quot;href&quot;:&quot;#worldrendercontext&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;HudRenderLayer&quot;,&quot;href&quot;:&quot;#hudrenderlayer&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;WorldRenderLayer&quot;,&quot;href&quot;:&quot;#worldrenderlayer&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;registerHudRenderer&quot;,&quot;href&quot;:&quot;#registerhudrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerHudRenderer&quot;,&quot;href&quot;:&quot;#registerhudrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;unregisterHudRenderer&quot;,&quot;href&quot;:&quot;#unregisterhudrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerWorldRenderer&quot;,&quot;href&quot;:&quot;#registerworldrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerWorldRenderer&quot;,&quot;href&quot;:&quot;#registerworldrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;unregisterWorldRenderer&quot;,&quot;href&quot;:&quot;#unregisterworldrenderer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearClientRenderers&quot;,&quot;href&quot;:&quot;#clearclientrenderers&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dispatchHudRender&quot;,&quot;href&quot;:&quot;#dispatchhudrender&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dispatchWorldRender&quot;,&quot;href&quot;:&quot;#dispatchworldrender&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;drawHudText&quot;,&quot;href&quot;:&quot;#drawhudtext&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;fillHudRect&quot;,&quot;href&quot;:&quot;#fillhudrect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;drawHudTexture&quot;,&quot;href&quot;:&quot;#drawhudtexture&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;drawLine3D&quot;,&quot;href&quot;:&quot;#drawline3d&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## HudRenderContext

<ApiMemberCard
  id="hudrendercontext"
  name="HudRenderContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class HudRenderContext( val graphics: GuiGraphicsExtractor, val tickDelta: Float )
```

Screen-space render callback context.

Contains the graphics context and timing information for HUD rendering.

### Properties

| Property | Description |
| --- | --- |
| `graphics` | The runtime GUI graphics object from Minecraft (GuiGraphics) |
| `tickDelta` | The partial tick time for smooth animations |

</ApiMemberCard>

## WorldRenderContext

<ApiMemberCard
  id="worldrendercontext"
  name="WorldRenderContext"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class WorldRenderContext( val camera: CameraRenderState?, val tickDelta: Float )
```

World-space render callback context.

Contains matrix and camera information for 3D world rendering.

### Properties

| Property | Description |
| --- | --- |
| `camera` | The current camera instance (may be null) |
| `tickDelta` | The partial tick time for smooth animations |

</ApiMemberCard>

## HudRenderLayer

<ApiMemberCard
  id="hudrenderlayer"
  name="HudRenderLayer"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class HudRenderLayer
```

Ordering bucket for HUD render callbacks.

Renderers are processed in order: BACKGROUND -> NORMAL -> FOREGROUND

</ApiMemberCard>

## WorldRenderLayer

<ApiMemberCard
  id="worldrenderlayer"
  name="WorldRenderLayer"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class WorldRenderLayer
```

Ordering bucket for world render callbacks.

Renderers are processed in order: EARLY -> NORMAL -> LATE

</ApiMemberCard>

## registerHudRenderer

<ApiMemberCard
  id="registerhudrenderer"
  name="registerHudRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerHudRenderer(id: String, render: (HudRenderContext) -> Unit)
```

Register (or replace) a HUD renderer by [id].

The renderer will be called each frame during HUD rendering.
Uses NORMAL layer with priority 0.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Unique identifier for this renderer |
| `render` | The render callback receiving HudRenderContext |

</ApiMemberCard>

## registerHudRenderer

<ApiMemberCard
  id="registerhudrenderer"
  name="registerHudRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerHudRenderer(id: String, layer: HudRenderLayer, priority: Int = 0, render: (HudRenderContext) -> Unit)
```

Register (or replace) a HUD renderer by [id], with [layer] and [priority].

Lower priority values are rendered earlier within the same layer.
Layers are rendered in order: BACKGROUND -> NORMAL -> FOREGROUND

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Unique identifier for this renderer |
| `layer` | The render layer determining draw order |
| `priority` | Priority within the layer (lower = earlier) |
| `render` | The render callback receiving HudRenderContext |

</ApiMemberCard>

## unregisterHudRenderer

<ApiMemberCard
  id="unregisterhudrenderer"
  name="unregisterHudRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun unregisterHudRenderer(id: String): Boolean
```

Remove a HUD renderer by [id].

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | The identifier of the renderer to remove |

### Returns

true if the renderer was found and removed, false otherwise

</ApiMemberCard>

## registerWorldRenderer

<ApiMemberCard
  id="registerworldrenderer"
  name="registerWorldRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerWorldRenderer(id: String, render: (WorldRenderContext) -> Unit)
```

Register (or replace) a world-space renderer by [id].

The renderer will be called each frame during world rendering.
Uses NORMAL layer with priority 0.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Unique identifier for this renderer |
| `render` | The render callback receiving WorldRenderContext |

</ApiMemberCard>

## registerWorldRenderer

<ApiMemberCard
  id="registerworldrenderer"
  name="registerWorldRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerWorldRenderer(id: String, layer: WorldRenderLayer, priority: Int = 0, render: (WorldRenderContext) -> Unit)
```

Register (or replace) a world renderer by [id], with [layer] and [priority].

Lower priority values are rendered earlier within the same layer.
Layers are rendered in order: EARLY -> NORMAL -> LATE

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Unique identifier for this renderer |
| `layer` | The render layer determining draw order |
| `priority` | Priority within the layer (lower = earlier) |
| `render` | The render callback receiving WorldRenderContext |

</ApiMemberCard>

## unregisterWorldRenderer

<ApiMemberCard
  id="unregisterworldrenderer"
  name="unregisterWorldRenderer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun unregisterWorldRenderer(id: String): Boolean
```

Remove a world-space renderer by [id].

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | The identifier of the renderer to remove |

### Returns

true if the renderer was found and removed, false otherwise

</ApiMemberCard>

## clearClientRenderers

<ApiMemberCard
  id="clearclientrenderers"
  name="clearClientRenderers"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearClientRenderers()
```

Clears all client render callbacks (both HUD and world renderers).

Useful for cleanup during script reload or when resetting state.

</ApiMemberCard>

## dispatchHudRender

<ApiMemberCard
  id="dispatchhudrender"
  name="dispatchHudRender"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@JvmName("dispatchHudRender")
@JvmName("dispatchHudRender") fun dispatchHudRender(graphics: GuiGraphicsExtractor, tickDelta: Float)
```

Internal dispatcher: called by platform render hooks to invoke all HUD renderers.

### Parameters

| Parameter | Description |
| --- | --- |
| `graphics` | The GUI graphics context |
| `tickDelta` | The partial tick time |

</ApiMemberCard>

## dispatchWorldRender

<ApiMemberCard
  id="dispatchworldrender"
  name="dispatchWorldRender"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@JvmName("dispatchWorldRender")
@JvmName("dispatchWorldRender") fun dispatchWorldRender(camera: CameraRenderState?, tickDelta: Float)
```

Internal dispatcher: called by platform render hooks to invoke all world renderers.

### Parameters

| Parameter | Description |
| --- | --- |
| `camera` | The camera instance |
| `tickDelta` | The partial tick time |

</ApiMemberCard>

## drawHudText

<ApiMemberCard
  id="drawhudtext"
  name="drawHudText"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun drawHudText(ctx: HudRenderContext, message: Any?, x: Int, y: Int, color: Int = 0xFFFFFF, shadow: Boolean = true)
```

Draws text on HUD using current [HudRenderContext].

### Parameters

| Parameter | Description |
| --- | --- |
| `ctx` | The HUD render context |
| `message` | The text to draw (will be converted to Component if not already) |
| `x` | The X position in screen coordinates |
| `y` | The Y position in screen coordinates |
| `color` | The text color in ARGB format (default: white) |
| `shadow` | Whether to draw a drop shadow (default: true) |

### Returns

true if drawing succeeded, false otherwise

</ApiMemberCard>

## fillHudRect

<ApiMemberCard
  id="fillhudrect"
  name="fillHudRect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun fillHudRect(ctx: HudRenderContext, x1: Int, y1: Int, x2: Int, y2: Int, color: Int)
```

Draws a solid rectangle on HUD using current [HudRenderContext].

### Parameters

| Parameter | Description |
| --- | --- |
| `ctx` | The HUD render context |
| `x1` | The left edge X coordinate |
| `y1` | The top edge Y coordinate |
| `x2` | The right edge X coordinate |
| `y2` | The bottom edge Y coordinate |
| `color` | The fill color in ARGB format |

### Returns

true if drawing succeeded, false otherwise

</ApiMemberCard>

## drawHudTexture

<ApiMemberCard
  id="drawhudtexture"
  name="drawHudTexture"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun drawHudTexture(ctx: HudRenderContext, texture: String, x: Int, y: Int, width: Int, height: Int, u0: Float = 0f, u1: Float = 1f, v0: Float = 0f, v1: Float = 1f): Boolean
```

Draws a texture region on HUD using current [HudRenderContext].

### Parameters

| Parameter | Description |
| --- | --- |
| `ctx` | The HUD render context |
| `texture` | The texture identifier string |
| `x` | The X position on screen |
| `y` | The Y position on screen |
| `width` | The width to draw |
| `height` | The height to draw |
| `u0` | The U coordinate of the texture region (default: 0) |
| `u1` | The U coordinate of the texture region (default: 1) |
| `v0` | The V coordinate of the texture region (default: 0) |
| `v1` | The V coordinate of the texture region (default: 1) |

### Returns

true if drawing succeeded, false if texture ID was invalid

</ApiMemberCard>

## drawLine3D

<ApiMemberCard
  id="drawline3d"
  name="drawLine3D"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun drawLine3D(ctx: WorldRenderContext, x1: Double, y1: Double, z1: Double, x2: Double, y2: Double, z2: Double, argbColor: Int, lineWidth: Float = 1.0f): Boolean
```

Draw a 3D line using world coordinates and ARGB color.

Uses real GPU mesh rendering via VertexConsumer+RenderType.

### Parameters

| Parameter | Description |
| --- | --- |
| `ctx` | The world render context |
| `x1` | Start X coordinate in world space |
| `y1` | Start Y coordinate in world space |
| `z1` | Start Z coordinate in world space |
| `x2` | End X coordinate in world space |
| `y2` | End Y coordinate in world space |
| `z2` | End Z coordinate in world space |
| `argbColor` | The line color in ARGB format |
| `lineWidth` | The width of the line (default: 1.0) |

### Returns

true if drawing succeeded, false otherwise

</ApiMemberCard>

