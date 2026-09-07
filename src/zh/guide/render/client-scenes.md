# 镜头演出与世界特效

Katton Alpha 0.5.0 build1 为 Fabric 和 NeoForge 新增客户端演出 API。该 API
支持 Minecraft 26.1.2 和 26.2。Paper 仍然只提供服务端能力。

## 使用条件

镜头演出和自定义世界渲染要求客户端安装 Katton。服务端可以要求客户端播放已注册的
演出，但实际渲染由客户端执行。仅安装服务端时，可以使用原版标题、ActionBar、Boss
血条和其他标准数据包，不能运行此渲染 API。

## 镜头效果

`playCameraPath`、`followCamera`、`shakeCamera` 和 `transitionCameraFov`
可以单独使用。镜头位置使用世界坐标，角度使用度，时长使用 tick。

镜头路径支持线性或 Catmull–Rom 位置插值。旋转使用四元数最短路径插值。镜头可以
注视固定位置或实体。实体目标失效时，Katton 会结束演出。

```kotlin
import net.minecraft.world.phys.Vec3
import top.katton.api.scene.*

playCameraPath(
    listOf(
        CameraKeyframe(0, CameraPose(Vec3(0.0, 72.0, 8.0), 180f, 10f)),
        CameraKeyframe(
            60,
            CameraPose(Vec3(8.0, 75.0, 0.0), 90f, 18f),
            SceneEasing.SMOOTH,
        ),
    ),
    CameraOptions(
        interpolation = CameraInterpolation.CATMULL_ROM,
        lookAt = EffectAnchor.Position(Vec3(0.0, 70.0, 0.0)),
    ),
)
```

完整镜头路径可以屏蔽移动、攻击、使用物品和鼠标转向。设置 `lockInput = false` 可以
保留玩家操作。Escape 只取消当前观众的镜头演出。独立震动和 FOV 效果不会锁定输入。

## 粒子与几何

`ParticleEmitter` 支持点、直线、圆环、球面和螺旋形状。它使用 Minecraft 的
`ParticleOptions`，也支持脚本注册的粒子。

几何效果包括光束、拖尾、圆环、贴图平面、曲线、面、盒体、球体、圆柱和圆锥。材质
支持 ARGB 颜色、宽度、渐隐、Alpha 或加法混合，以及可选的透视渲染。

Katton 提供以下内置贴图：

- `katton:textures/effect/white.png`
- `katton:textures/effect/circle.png`

自定义贴图放在脚本包的 `assets/<namespace>/textures/` 中，并使用资源 ID 引用。

## 时间线

使用 `registerClientScene` 注册可重复播放的定义。每次播放都会创建独立实例。

```kotlin
registerClientScene("demo:intro") {
    parallel {
        effect(CameraShake(durationTicks = 12, strength = 2f))
        effect(CameraFov(75f, 62f, 20))
    }
    waitTicks(10)
    at(30) {
        effect(CameraFov(62f, 75f, 15))
    }
}

val handle = playClientScene("demo:intro", SceneContext(origin = player.position()))
handle.onEnd { reason -> println(reason) }
```

演出支持顺序、并行和显式开始时间，也支持暂停、恢复、有限重复和取消。单机暂停时，
演出时钟停止推进。

## 服务端触发

服务端可以向一名玩家播放演出，也可以向指定维度和半径内的当前玩家播放演出。

```kotlin
val remote = playPlayerScene(player, "demo:intro")
val nearby = playNearbyScene(
    player.level(),
    player.position(),
    32.0,
    "demo:intro",
)

remote.cancel()
```

客户端会检查定义 ID、脚本版本、维度、实例 ID 和目标实体。远程句柄只向原接收者
发送停止消息，不确认客户端是否播放完成。后来加入或进入范围的玩家不会收到补播。

## 预算与清理

客户端默认允许 256 个活动效果、每 tick 4,096 次粒子发射和每帧 65,536 个几何
顶点。使用 `setClientEffectBudgets` 可以修改这些限制。

取消演出会移除几何效果并停止发射新粒子。已经发射的原版粒子按自身生命周期消失。
死亡、换维度、断线、目标失效和重载替换都会恢复原版镜头与输入。

仓库的 `examples/client-scenes` 提供三个指定示例和一个几何展示示例。
