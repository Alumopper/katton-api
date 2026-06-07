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
屏幕空间渲染回调上下文。
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

屏幕空间渲染回调上下文。

包含 HUD 渲染的图形上下文和计时信息。

### 属性

| 属性 | 说明 |
| --- | --- |
| `graphics` | 来自 Minecraft (GuiGraphics) 的运行时 GUI 图形对象 |
| `tickDelta` | 平滑动画的部分tick时间 |

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

世界空间渲染回调上下文。

包含用于 3D 世界渲染的矩阵和相机信息。

### 属性

| 属性 | 说明 |
| --- | --- |
| `camera` | 当前相机实例（可能为空） |
| `tickDelta` | 平滑动画的部分tick时间 |

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

为 HUD 渲染回调订购存储桶。

渲染器按顺序处理：BACKGROUND -> NORMAL -> FOREGROUND

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

为世界渲染回调排序存储桶。

渲染器按顺序处理：EARLY -> NORMAL -> LATE

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

通过 [id] 注册（或替换）HUD渲染器。

渲染器将在 HUD 渲染期间每帧被调用。
使用优先级为 0 的 NORMAL 图层。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 该渲染器的唯一标识符 |
| `render` | 渲染回调接收HudRenderContext |

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

通过 [id]、[layer] 和 [priority] 注册（或替换）HUD渲染器。

较低优先级值在同一层中较早渲染。
图层按顺序渲染：BACKGROUND -> NORMAL -> FOREGROUND

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 该渲染器的唯一标识符 |
| `layer` | 渲染层决定绘制顺序 |
| `priority` | 层内的优先级（较低=较早） |
| `render` | 渲染回调接收HudRenderContext |

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

通过 [id] 删除HUD渲染器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 要删除的渲染器的标识符 |

### 返回值

如果找到并删除渲染器则为 true，否则为 false

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

通过 [id] 注册（或替换）世界空间渲染器。

渲染器将在世界渲染期间的每一帧被调用。
使用优先级为 0 的 NORMAL 图层。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 该渲染器的唯一标识符 |
| `render` | 渲染回调接收WorldRenderContext |

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

通过 [id]、[layer] 和 [priority] 注册（或替换）世界渲染器。

较低优先级值在同一层中较早渲染。
图层按顺序渲染：EARLY -> NORMAL -> LATE

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 该渲染器的唯一标识符 |
| `layer` | 渲染层决定绘制顺序 |
| `priority` | 层内的优先级（较低=较早） |
| `render` | 渲染回调接收WorldRenderContext |

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

通过 [id] 删除世界空间渲染器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 要删除的渲染器的标识符 |

### 返回值

如果找到并删除渲染器则为 true，否则为 false

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

清除所有客户端渲染回调（HUD和世界渲染器）。

对于脚本重载期间或重置状态时的清理很有用。

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

内部调度程序：由平台渲染钩子调用以调用所有HUD渲染器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `graphics` | GUI 图形上下文 |
| `tickDelta` | 部分tick时间 |

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

内部调度程序：由平台渲染挂钩调用以调用所有世界渲染器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `camera` | 相机实例 |
| `tickDelta` | 部分tick时间 |

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

使用当前的 [HudRenderContext] 在 HUD 上绘制文本。

### 参数

| 参数 | 说明 |
| --- | --- |
| `ctx` | HUD渲染上下文 |
| `message` | 要绘制的文本（如果尚未转换为组件，则将被转换为组件） |
| `x` | 屏幕坐标中的 X 位置 |
| `y` | 屏幕坐标中的 Y 位置 |
| `color` | ARGB格式的文本颜色（默认：白色） |
| `shadow` | 是否绘制阴影（默认：true） |

### 返回值

如果绘制成功则为 true，否则为 false

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

使用当前的[HudRenderContext]在HUD上绘制一个实心矩形。

### 参数

| 参数 | 说明 |
| --- | --- |
| `ctx` | HUD渲染上下文 |
| `x1` | 左边缘X坐标 |
| `y1` | 顶边Y坐标 |
| `x2` | 右边缘X坐标 |
| `y2` | 底边Y坐标 |
| `color` | ARGB格式的填充颜色 |

### 返回值

如果绘制成功则为 true，否则为 false

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

使用当前的[HudRenderContext]在HUD上绘制纹理区域。

### 参数

| 参数 | 说明 |
| --- | --- |
| `ctx` | HUD渲染上下文 |
| `texture` | 纹理标识符字符串 |
| `x` | 屏幕上的 X 位置 |
| `y` | 屏幕上的 Y 位置 |
| `width` | 绘制的宽度 |
| `height` | 绘制的高度 |
| `u0` | 纹理区域的 U 坐标（默认值：0） |
| `u1` | 纹理区域的 U 坐标（默认值：1） |
| `v0` | 纹理区域的 V 坐标（默认值：0） |
| `v1` | 纹理区域的 V 坐标（默认值：1） |

### 返回值

如果绘制成功则为 true，如果纹理 ID 无效则为 false

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

使用世界坐标和 ARGB 颜色绘制 3D 线。

通过 VertexConsumer+RenderType 使用真实的 GPU 网格渲染。

### 参数

| 参数 | 说明 |
| --- | --- |
| `ctx` | 世界渲染上下文 |
| `x1` | 世界空间中的起始 X 坐标 |
| `y1` | 世界空间中的起始 Y 坐标 |
| `z1` | 世界空间中的起始 Z 坐标 |
| `x2` | 世界空间中的结束 X 坐标 |
| `y2` | 世界空间中的结束 Y 坐标 |
| `z2` | 世界空间中的结束 Z 坐标 |
| `argbColor` | ARGB格式的线条颜色 |
| `lineWidth` | 线的宽度（默认：1.0） |

### 返回值

如果绘制成功则为 true，否则为 false

</ApiMemberCard>

