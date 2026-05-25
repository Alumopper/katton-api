# HUD 与世界渲染

> [!WARNING]
> HUD 与世界渲染回调只在 Fabric/NeoForge 客户端运行。

HUD 渲染器在屏幕空间绘制。世界渲染器在客户端世界中每帧绘制。两类 API 都使用稳定字符串 id；再次注册相同 id 会替换旧回调，客户端重载时也会清理脚本拥有的渲染回调。

详细 API 见 [KattonClientRenderApi](../../../api/common/KattonClientRenderApi.md)。

## HUD 渲染器

在 `@ClientScriptEntrypoint` 中使用 `registerHudRenderer`。回调会收到 `HudRenderContext`，可以传给 `drawHudText`、`fillHudRect`、`drawHudTexture` 等辅助函数。

<!--@include: ../../../example/quickstart/render/03.md-->

<ImageCaptionZoom
  src="/docimg/image-1.png"
  alt="HUD 文本渲染"
  caption="在 HUD 中渲染文本示例"
/>

## 世界渲染器

使用 `registerWorldRenderer` 绘制与相机相关的世界空间内容。当前常用辅助函数包括 `drawLine3D`，适合调试线、指引线和简单空间提示。

<!--@include: ../../../example/quickstart/render/05.md-->

<ImageCaptionZoom
  src="/docimg/image-2.png"
  alt="世界 3D 形状渲染"
  caption="3D 图形渲染示例"
/>

## 客户端 UI 消息

标题、覆盖层、Action Bar、Toast 和客户端音效不需要逐帧渲染器，直接使用客户端 UI 辅助函数即可。

<!--@include: ../../../example/quickstart/render/04.md-->

<ImageCaptionZoom
  src="/docimg/image.png"
  alt="消息与通知渲染"
  caption="消息与通知展示"
/>

## 清理

需要在下一次重载前停止某个渲染器时，可以调用 `unregisterHudRenderer(id)` 或 `unregisterWorldRenderer(id)`。建议每个功能使用独立 id，避免不同脚本意外互相替换。
