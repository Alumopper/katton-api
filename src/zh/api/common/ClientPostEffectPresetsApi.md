---
title: ClientPostEffectPresetsApi
outline: [2, 2]
---

<ApiDocPage
  title="ClientPostEffectPresetsApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ClientPostEffectPresetsApi.kt"
>
注册一个可配置的全屏反色效果。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerClientInvertPostEffect&quot;,&quot;href&quot;:&quot;#registerclientinvertposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientGrayscalePostEffect&quot;,&quot;href&quot;:&quot;#registerclientgrayscaleposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientSepiaPostEffect&quot;,&quot;href&quot;:&quot;#registerclientsepiaposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientTintPostEffect&quot;,&quot;href&quot;:&quot;#registerclienttintposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientColorAdjustPostEffect&quot;,&quot;href&quot;:&quot;#registerclientcoloradjustposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientVignettePostEffect&quot;,&quot;href&quot;:&quot;#registerclientvignetteposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientChromaticAberrationPostEffect&quot;,&quot;href&quot;:&quot;#registerclientchromaticaberrationposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientPixelatePostEffect&quot;,&quot;href&quot;:&quot;#registerclientpixelateposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientPosterizePostEffect&quot;,&quot;href&quot;:&quot;#registerclientposterizeposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientScanlinePostEffect&quot;,&quot;href&quot;:&quot;#registerclientscanlineposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerClientBlurPostEffect&quot;,&quot;href&quot;:&quot;#registerclientblurposteffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerClientInvertPostEffect

<ApiMemberCard
  id="registerclientinvertposteffect"
  name="registerClientInvertPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientInvertPostEffect(id: String = "katton:preset/invert", amount: Float = 1.0f, activate: Boolean = false): Boolean
```

注册一个可配置的全屏反色效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `amount` | 0.0 保持原图，1.0 完全反色。 |

</ApiMemberCard>

## registerClientGrayscalePostEffect

<ApiMemberCard
  id="registerclientgrayscaleposteffect"
  name="registerClientGrayscalePostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientGrayscalePostEffect(id: String = "katton:preset/grayscale", amount: Float = 1.0f, activate: Boolean = false): Boolean
```

注册一个可配置的灰度效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `amount` | 0.0 保留颜色，1.0 完全转为灰度。 |

</ApiMemberCard>

## registerClientSepiaPostEffect

<ApiMemberCard
  id="registerclientsepiaposteffect"
  name="registerClientSepiaPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientSepiaPostEffect(id: String = "katton:preset/sepia", amount: Float = 1.0f, activate: Boolean = false): Boolean
```

注册一个可配置的棕褐色效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `amount` | 0.0 保持原图，1.0 完全应用棕褐色调。 |

</ApiMemberCard>

## registerClientTintPostEffect

<ApiMemberCard
  id="registerclienttintposteffect"
  name="registerClientTintPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientTintPostEffect(id: String = "katton:preset/tint", color: Int = 0x55AAFF, amount: Float = 0.5f, activate: Boolean = false): Boolean
```

注册一个将屏幕亮度映射到 [color] 的染色效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `color` | RGB 或 ARGB 整数；Alpha 通道会被忽略。 |
| `amount` | 0.0 保留原色，1.0 完全应用染色。 |

</ApiMemberCard>

## registerClientColorAdjustPostEffect

<ApiMemberCard
  id="registerclientcoloradjustposteffect"
  name="registerClientColorAdjustPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientColorAdjustPostEffect(id: String = "katton:preset/color_adjust", brightness: Float = 0.0f, contrast: Float = 1.0f, saturation: Float = 1.0f, gamma: Float = 1.0f, activate: Boolean = false): Boolean
```

注册一个基础颜色调整效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `brightness` | -1.0 变暗，0.0 不变，1.0 变亮。 |
| `contrast` | 1.0 不变，较低值降低对比度，较高值增强对比度。 |
| `saturation` | 1.0 不变，0.0 转为灰度，较高值提高饱和度。 |
| `gamma` | 1.0 不变，较高值会提亮暗部。 |

</ApiMemberCard>

## registerClientVignettePostEffect

<ApiMemberCard
  id="registerclientvignetteposteffect"
  name="registerClientVignettePostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientVignettePostEffect(id: String = "katton:preset/vignette", amount: Float = 0.75f, radius: Float = 0.65f, softness: Float = 0.35f, color: Int = 0x000000, activate: Boolean = false): Boolean
```

注册一个暗角效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `amount` | 边缘颜色强度。 |
| `radius` | 从屏幕中心到暗角开始位置的距离。 |
| `softness` | 衰减宽度。 |
| `color` | RGB 或 ARGB 整数；Alpha 通道会被忽略。 |

</ApiMemberCard>

## registerClientChromaticAberrationPostEffect

<ApiMemberCard
  id="registerclientchromaticaberrationposteffect"
  name="registerClientChromaticAberrationPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientChromaticAberrationPostEffect(id: String = "katton:preset/chromatic_aberration", offsetPixels: Float = 1.5f, amount: Float = 1.0f, activate: Boolean = false): Boolean
```

注册一个色差效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `offsetPixels` | 红色和蓝色通道的屏幕像素偏移量。 |
| `amount` | 原始颜色与偏移颜色之间的混合比例。 |

</ApiMemberCard>

## registerClientPixelatePostEffect

<ApiMemberCard
  id="registerclientpixelateposteffect"
  name="registerClientPixelatePostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientPixelatePostEffect(id: String = "katton:preset/pixelate", pixelSize: Float = 4.0f, activate: Boolean = false): Boolean
```

注册一个像素化效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `pixelSize` | 像素块的屏幕像素大小。 |

</ApiMemberCard>

## registerClientPosterizePostEffect

<ApiMemberCard
  id="registerclientposterizeposteffect"
  name="registerClientPosterizePostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientPosterizePostEffect(id: String = "katton:preset/posterize", levels: Int = 5, amount: Float = 1.0f, activate: Boolean = false): Boolean
```

注册一个色阶压缩效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `levels` | 每个颜色通道的色阶数量。 |
| `amount` | 0.0 保留原色，1.0 完全应用色阶压缩。 |

</ApiMemberCard>

## registerClientScanlinePostEffect

<ApiMemberCard
  id="registerclientscanlineposteffect"
  name="registerClientScanlinePostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientScanlinePostEffect(id: String = "katton:preset/scanline", amount: Float = 0.18f, lines: Float = 240.0f, activate: Boolean = false): Boolean
```

注册一个静态扫描线效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `amount` | 扫描线暗度。 |
| `lines` | 屏幕高度方向上的近似扫描线数量。 |

</ApiMemberCard>

## registerClientBlurPostEffect

<ApiMemberCard
  id="registerclientblurposteffect"
  name="registerClientBlurPostEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerClientBlurPostEffect(id: String = "katton:preset/blur", radius: Float = 4.0f, passes: Int = 1, activate: Boolean = false): Boolean
```

注册一个基于 Minecraft 内置 box blur shader 的模糊效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `radius` | 模糊半径，单位为像素。 |
| `passes` | 水平和垂直模糊轮数。 |

</ApiMemberCard>

