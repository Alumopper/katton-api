---
title: KattonClientApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonClientApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonClientApi.kt"
>
获取原始的 Minecraft 客户端实例。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;client&quot;,&quot;href&quot;:&quot;#client&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientPlayer&quot;,&quot;href&quot;:&quot;#clientplayer&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientLevel&quot;,&quot;href&quot;:&quot;#clientlevel&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientTell&quot;,&quot;href&quot;:&quot;#clienttell&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;runOnClient&quot;,&quot;href&quot;:&quot;#runonclient&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;isClientPaused&quot;,&quot;href&quot;:&quot;#isclientpaused&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;isInClientWorld&quot;,&quot;href&quot;:&quot;#isinclientworld&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientX&quot;,&quot;href&quot;:&quot;#clientx&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientY&quot;,&quot;href&quot;:&quot;#clienty&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientZ&quot;,&quot;href&quot;:&quot;#clientz&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientPos&quot;,&quot;href&quot;:&quot;#clientpos&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientYaw&quot;,&quot;href&quot;:&quot;#clientyaw&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientPitch&quot;,&quot;href&quot;:&quot;#clientpitch&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientDimensionId&quot;,&quot;href&quot;:&quot;#clientdimensionid&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientGameTime&quot;,&quot;href&quot;:&quot;#clientgametime&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientActionBar&quot;,&quot;href&quot;:&quot;#clientactionbar&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientOverlay&quot;,&quot;href&quot;:&quot;#clientoverlay&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearClientOverlay&quot;,&quot;href&quot;:&quot;#clearclientoverlay&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientNowPlaying&quot;,&quot;href&quot;:&quot;#clientnowplaying&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playClientSound&quot;,&quot;href&quot;:&quot;#playclientsound&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;playClientSound&quot;,&quot;href&quot;:&quot;#playclientsound&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientTitle&quot;,&quot;href&quot;:&quot;#clienttitle&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientSubtitle&quot;,&quot;href&quot;:&quot;#clientsubtitle&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientTitleTimes&quot;,&quot;href&quot;:&quot;#clienttitletimes&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearClientTitle&quot;,&quot;href&quot;:&quot;#clearclienttitle&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientFps&quot;,&quot;href&quot;:&quot;#clientfps&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;isClientWindowFocused&quot;,&quot;href&quot;:&quot;#isclientwindowfocused&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientScreenName&quot;,&quot;href&quot;:&quot;#clientscreenname&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;isClientInMenu&quot;,&quot;href&quot;:&quot;#isclientinmenu&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;isClientChatOpen&quot;,&quot;href&quot;:&quot;#isclientchatopen&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## client

<ApiMemberCard
  id="client"
  name="client"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun client(): Minecraft
```

获取原始的 Minecraft 客户端实例。

### 返回值

Minecraft 客户端实例

</ApiMemberCard>

## clientPlayer

<ApiMemberCard
  id="clientplayer"
  name="clientPlayer"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientPlayer(): LocalPlayer?
```

获取原始客户端玩家实体。

### 返回值

客户端玩家实体，如果不在世界中或服务器上则为 null

</ApiMemberCard>

## clientLevel

<ApiMemberCard
  id="clientlevel"
  name="clientLevel"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientLevel(): ClientLevel?
```

获取原始客户端世界（世界）。

### 返回值

客户端世界实例，如果不在世界中或服务器上则为 null

</ApiMemberCard>

## clientTell

<ApiMemberCard
  id="clienttell"
  name="clientTell"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientTell(message: Any?, overlay: Boolean = true): Boolean
```

向客户端玩家的聊天室发送消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 要显示的消息（如果尚未转换为组件，则将转换为组件） |

### 返回值

如果消息发送成功则为 true，否则为 false

</ApiMemberCard>

## runOnClient

<ApiMemberCard
  id="runonclient"
  name="runOnClient"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun runOnClient(action: () -> Unit)
```

在客户端线程上执行操作。

这对于确保调用时代码在客户端线程上运行非常有用
来自不同的线程上下文。

### 参数

| 参数 | 说明 |
| --- | --- |
| `action` | 要执行的动作 |

### 返回值

true 如果操作已成功排队/执行

</ApiMemberCard>

## isClientPaused

<ApiMemberCard
  id="isclientpaused"
  name="isClientPaused"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun isClientPaused(): Boolean
```

检查客户端游戏是否暂停。

### 返回值

如果游戏暂停（例如，暂停菜单打开），则为 true，否则为 false

</ApiMemberCard>

## isInClientWorld

<ApiMemberCard
  id="isinclientworld"
  name="isInClientWorld"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun isInClientWorld(): Boolean
```

检查客户端当前是否在一个世界中。

### 返回值

如果客户端已加载世界，则为 true，否则为 false

</ApiMemberCard>

## clientX

<ApiMemberCard
  id="clientx"
  name="clientX"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientX(): Double?
```

获取客户端玩家的 X 坐标。

### 返回值

X 坐标，如果不可用则为 null

</ApiMemberCard>

## clientY

<ApiMemberCard
  id="clienty"
  name="clientY"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientY(): Double?
```

获取客户端玩家的 Y 坐标。

### 返回值

Y 坐标，如果不可用则为 null

</ApiMemberCard>

## clientZ

<ApiMemberCard
  id="clientz"
  name="clientZ"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientZ(): Double?
```

获取客户端玩家的 Z 坐标。

### 返回值

Z 坐标，如果不可用则为 null

</ApiMemberCard>

## clientPos

<ApiMemberCard
  id="clientpos"
  name="clientPos"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientPos(): Vec3?
```

获取客户端玩家的位置为Vec3。

### 返回值

位置向量，如果任何坐标不可用则为 null

</ApiMemberCard>

## clientYaw

<ApiMemberCard
  id="clientyaw"
  name="clientYaw"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientYaw(): Float?
```

获取客户端玩家的偏航旋转。

### 返回值

偏航角（以度为单位），如果不可用则为 null

</ApiMemberCard>

## clientPitch

<ApiMemberCard
  id="clientpitch"
  name="clientPitch"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientPitch(): Float?
```

获取客户端玩家的投球轮换。

### 返回值

俯仰角（以度为单位），如果不可用则为 null

</ApiMemberCard>

## clientDimensionId

<ApiMemberCard
  id="clientdimensionid"
  name="clientDimensionId"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientDimensionId(): String?
```

获取客户端玩家当前的维度标识符。

### 返回值

维度 ID 字符串（例如 "minecraft:overworld"），如果不可用则为 null

</ApiMemberCard>

## clientGameTime

<ApiMemberCard
  id="clientgametime"
  name="clientGameTime"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientGameTime(): Long?
```

获取客户端世界当前的游戏时间。

### 返回值

游戏时间（以节拍为单位），如果不可用则为 null

</ApiMemberCard>

## clientActionBar

<ApiMemberCard
  id="clientactionbar"
  name="clientActionBar"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientActionBar(message: Any): Boolean
```

在客户端玩家的操作栏中显示一条消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 要显示的消息 |

### 返回值

如果显示成功则为 true，否则为 false

</ApiMemberCard>

## clientOverlay

<ApiMemberCard
  id="clientoverlay"
  name="clientOverlay"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientOverlay(message: Any?, tinted: Boolean = false)
```

在客户端屏幕上显示覆盖消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 要显示的消息 |
| `tinted` | 是否应用背景色调 |

### 返回值

如果显示成功则为 true，否则为 false

</ApiMemberCard>

## clearClientOverlay

<ApiMemberCard
  id="clearclientoverlay"
  name="clearClientOverlay"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearClientOverlay()
```

清除客户端上任何活动的覆盖消息。

### 返回值

如果清除成功则为 true，否则为 false

</ApiMemberCard>

## clientNowPlaying

<ApiMemberCard
  id="clientnowplaying"
  name="clientNowPlaying"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientNowPlaying(message: Any?)
```

显示音乐/声音的“正在播放”消息。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 要显示的消息 |

### 返回值

如果显示成功则为 true，否则为 false

</ApiMemberCard>

## playClientSound

<ApiMemberCard
  id="playclientsound"
  name="playClientSound"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playClientSound(soundId: String, volume: Float = 1.0f, pitch: Float = 1.0f): Boolean
```

在客户端上播放声音。

### 参数

| 参数 | 说明 |
| --- | --- |
| `soundId` | 声音标识符（例如，"minecraft:block.note_block.pling"） |
| `volume` | 音量（0.0 至 1.0+） |
| `pitch` | 音高倍数（0.5 至 2.0） |

### 返回值

true 如果声音播放成功， false 如果声音 ID 无效

</ApiMemberCard>

## playClientSound

<ApiMemberCard
  id="playclientsound"
  name="playClientSound"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun playClientSound(soundId: Identifier, volume: Float = 1.0f, pitch: Float = 1.0f): Boolean
```

在客户端上播放声音。

### 参数

| 参数 | 说明 |
| --- | --- |
| `soundId` | 声音标识符（例如，"minecraft:block.note_block.pling"） |
| `volume` | 音量（0.0 至 1.0+） |
| `pitch` | 音高倍数（0.5 至 2.0） |

### 返回值

true 如果声音播放成功， false 如果声音 ID 无效

</ApiMemberCard>

## clientTitle

<ApiMemberCard
  id="clienttitle"
  name="clientTitle"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientTitle(message: Any?)
```

在客户端屏幕上显示标题。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 要显示的标题消息 |

### 返回值

如果显示成功则为 true，否则为 false

</ApiMemberCard>

## clientSubtitle

<ApiMemberCard
  id="clientsubtitle"
  name="clientSubtitle"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientSubtitle(message: Any?)
```

在客户端屏幕上显示字幕。

### 参数

| 参数 | 说明 |
| --- | --- |
| `message` | 要显示的字幕消息 |

### 返回值

如果显示成功则为 true，否则为 false

</ApiMemberCard>

## clientTitleTimes

<ApiMemberCard
  id="clienttitletimes"
  name="clientTitleTimes"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientTitleTimes(fadeInTicks: Int = 10, stayTicks: Int = 70, fadeOutTicks: Int = 20)
```

设置标题显示的时间。

### 参数

| 参数 | 说明 |
| --- | --- |
| `fadeInTicks` | 淡入动画的tick |
| `stayTicks` | 勾选以保持可见 |
| `fadeOutTicks` | 淡出动画的tick |

### 返回值

如果计时设置成功则为 true，否则为 false

</ApiMemberCard>

## clearClientTitle

<ApiMemberCard
  id="clearclienttitle"
  name="clearClientTitle"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearClientTitle()
```

清除客户端上的任何活动标题。

### 返回值

如果清除成功则为 true，否则为 false

</ApiMemberCard>

## clientFps

<ApiMemberCard
  id="clientfps"
  name="clientFps"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientFps(): Int
```

获取客户端当前的FPS（每秒帧数）。

### 返回值

当前的 FPS，如果不可用则为 null

</ApiMemberCard>

## isClientWindowFocused

<ApiMemberCard
  id="isclientwindowfocused"
  name="isClientWindowFocused"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun isClientWindowFocused(): Boolean
```

检查客户端窗口是否获得焦点。

### 返回值

如果窗口具有焦点，则为 true，否则为 false

</ApiMemberCard>

## clientScreenName

<ApiMemberCard
  id="clientscreenname"
  name="clientScreenName"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clientScreenName(): String?
```

获取当前打开的屏幕的名称。

### 返回值

屏幕类名称，如果没有打开屏幕则为 null

</ApiMemberCard>

## isClientInMenu

<ApiMemberCard
  id="isclientinmenu"
  name="isClientInMenu"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun isClientInMenu(): Boolean
```

检查客户端当前是否在菜单中（而不是在游戏中）。

### 返回值

如果菜单屏幕打开则为 true，如果在游戏中则为 false

</ApiMemberCard>

## isClientChatOpen

<ApiMemberCard
  id="isclientchatopen"
  name="isClientChatOpen"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun isClientChatOpen(): Boolean
```

检查聊天屏幕当前是否打开。

### 返回值

如果聊天打开则为 true，否则为 false

</ApiMemberCard>

