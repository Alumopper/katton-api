# HUD and World Renderers

> [!WARNING]
> HUD and world render callbacks run on Fabric and NeoForge clients only.

HUD renderers draw in screen space. World renderers draw in the client world each frame. Both APIs use stable string ids, so registering the same id again replaces the old callback; client reload also clears script-owned render callbacks.

Detailed signatures live in the [KattonClientRenderApi](../api/common/KattonClientRenderApi.md).

## HUD Renderers

Use `registerHudRenderer` from a `@ClientScriptEntrypoint`. The callback receives a `HudRenderContext`, which is passed to helpers such as `drawHudText`, `fillHudRect`, and `drawHudTexture`.

<!--@include: ../example/quickstart/render/03.md-->

<ImageCaptionZoom
   src="/docimg/image-1.png"
   alt="HUD text rendering"
   caption="Example of rendering text on the HUD"
   figure-width="400px"
/>

## World Renderers

Use `registerWorldRenderer` for camera-relative world drawing. The current helper set includes `drawLine3D` for simple world-space debug and guide visuals.

<!--@include: ../example/quickstart/render/05.md-->

<ImageCaptionZoom
   src="/docimg/image-2.png"
   alt="World 3D shape rendering"
   caption="3D graphics rendering example"
   figure-width="400px"
/>

## Client UI Messages

For titles, overlays, action bars, toasts, and client sounds, use the client UI helpers instead of a per-frame renderer.

<!--@include: ../example/quickstart/render/04.md-->

<ImageCaptionZoom
   src="/docimg/image.png"
   alt="Message and notification rendering"
   caption="Message and notification display"
   figure-width="400px"
/>

## Cleanup

Use `unregisterHudRenderer(id)` or `unregisterWorldRenderer(id)` when a renderer should stop before the next reload. Use unique ids per feature so independent scripts do not replace one another accidentally.
