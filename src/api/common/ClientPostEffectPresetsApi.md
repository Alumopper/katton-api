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
Register a configurable full-screen invert effect.
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

Register a configurable full-screen invert effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `amount` | 0.0 keeps the original image, 1.0 fully inverts it. |

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

Register a configurable grayscale effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `amount` | 0.0 keeps color, 1.0 is fully grayscale. |

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

Register a configurable sepia effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `amount` | 0.0 keeps the original image, 1.0 is fully sepia. |

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

Register a tint effect that maps screen luminance toward [color].

### Parameters

| Parameter | Description |
| --- | --- |
| `color` | RGB or ARGB integer. Alpha is ignored. |
| `amount` | 0.0 keeps original color, 1.0 fully applies the tint. |

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

Register a basic color adjustment effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `brightness` | -1.0 darkens, 0.0 unchanged, 1.0 brightens. |
| `contrast` | 1.0 unchanged, lower flattens, higher increases contrast. |
| `saturation` | 1.0 unchanged, 0.0 grayscale, higher oversaturates. |
| `gamma` | 1.0 unchanged. Higher values lift shadows. |

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

Register a vignette effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `amount` | strength of the edge color. |
| `radius` | distance from screen center before the vignette starts. |
| `softness` | width of the falloff. |
| `color` | RGB or ARGB integer. Alpha is ignored. |

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

Register a chromatic aberration effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `offsetPixels` | red/blue channel offset in screen pixels. |
| `amount` | blend amount between original and shifted color. |

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

Register a pixelation effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `pixelSize` | block size in screen pixels. |

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

Register a posterize effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `levels` | number of color steps per channel. |
| `amount` | 0.0 keeps original color, 1.0 fully posterizes. |

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

Register a static scanline effect.

### Parameters

| Parameter | Description |
| --- | --- |
| `amount` | scanline darkness. |
| `lines` | approximate number of scanlines across the screen height. |

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

Register a blur effect backed by Minecraft's built-in box blur shader.

### Parameters

| Parameter | Description |
| --- | --- |
| `radius` | blur radius in pixels. |
| `passes` | number of horizontal/vertical blur rounds. |

</ApiMemberCard>

