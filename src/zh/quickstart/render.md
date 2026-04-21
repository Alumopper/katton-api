# 渲染

Katton 提供了简洁的 API，用于在 HUD 上绘制自定义元素，以及在世界中绘制 3D 图形。

>[!NOTE]
> 所有可用渲染函数的详细信息请参考 [API 文档](../../api/common/KattonClientRenderApi.md)。

## 注册渲染器

要在 HUD 上绘制元素，需要通过 [`registerHudRenderer`](../../api/common/KattonClientRenderApi.md#registerhudrenderer) 注册一个 HUD 渲染器。你需要提供一个每帧调用的回调来绘制 UI。你也可以指定渲染层与优先级，以控制多个渲染器的执行顺序。

<!--@include: ../../example/quickstart/render/01.md-->

世界渲染器的注册方式类似。

<!--@include: ../../example/quickstart/render/02.md-->

## 示例

下面示例展示了渲染 API 的能力：

* 在 HUD 上绘制自定义文本：

<!--@include: ../../example/quickstart/render/03.md-->

<ImageCaptionZoom
  src="/docimg/image-1.png"
  alt="HUD 文本渲染"
  caption="在 HUD 中渲染文本示例"
/>

* 给玩家发送消息和通知：

<!--@include: ../../example/quickstart/render/04.md-->

<ImageCaptionZoom
  src="/docimg/image.png"
  alt="消息与通知渲染"
  caption="消息与通知展示"
/>

* 在世界中绘制 3D 图形：

<!--@include: ../../example/quickstart/render/05.md-->

<ImageCaptionZoom
  src="/docimg/image-2.png"
  alt="世界 3D 形状渲染"
  caption="3D 图形渲染示例"
/>
