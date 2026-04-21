# Render 

Katton provides a simple API for rendering custom HUD elements and 3D shapes in the world.

>[!NOTE]
> Detailed information on all available rendering functions can be found in the [API documentation](../api/common/KattonClientRenderApi.md).

## Register a Renderer

To render elements on the HUD, you must register a HUD renderer using the [`registerHudRenderer`](../api/common/KattonClientRenderApi.md#registerhudrenderer) function. Provide a callback that will be invoked every frame to draw your UI elements. You can also specify a render layer and a priority level to control the order in which your renderer is executed.

<!--@include: ../example/quickstart/render/01.md-->

World renderers are registered in a similar manner.

<!--@include: ../example/quickstart/render/02.md-->

## Examples

The following examples demonstrate the capabilities of the rendering API:

* Rendering custom text on the HUD:

<!--@include: ../example/quickstart/render/03.md-->

<ImageCaptionZoom
   src="/docimg/image-1.png"
   alt=""
   caption=""
   figure-width="400px"
/>

* Sending messages and notifications to the player:

<!--@include: ../example/quickstart/render/04.md-->

<ImageCaptionZoom
   src="/docimg/image.png"
   alt=""
   caption=""
   figure-width="400px"
/>

* Drawing 3D shapes in the world:

<!--@include: ../example/quickstart/render/05.md-->

<ImageCaptionZoom
   src="/docimg/image-2.png"
   alt=""
   caption=""
   figure-width="400px"
/>