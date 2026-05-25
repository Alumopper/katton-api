# 物品渲染标记

物品渲染标记是在世界中显示的轻量客户端物品模型。它适合奖励展示、预览、任务目标、临时掉落提示和动画标记。

标记不是实体。它没有碰撞、选择器目标、持久化，也不走原版实体同步。服务端脚本只会把标记数据发送给应该看到它的客户端。

## 显示标记

使用 `itemRenderMarker` 创建 `ClientItemRenderMarker`，再用 `showItemRenderMarker` 发送。

```kotlin
import net.minecraft.world.item.ItemStack
import net.minecraft.world.item.Items
import top.katton.api.itemRenderMarker
import top.katton.api.showItemRenderMarker

fun showRewardMarker(player: net.minecraft.server.level.ServerPlayer) {
    val marker = itemRenderMarker(
        level = player.level().dimension(),
        pos = player.position().add(0.0, 1.4, 0.0),
        stack = ItemStack(Items.DIAMOND),
        scale = 1.25f,
        fullBright = true,
        lifetimeTicks = 100
    )

    showItemRenderMarker(player, marker)
}
```

`showItemRenderMarker(marker)` 会广播给所有在线玩家，`showItemRenderMarker(player, marker)` 只发送给单个玩家。

## 动画标记

标记可以携带具名动画组。动画组可以用缓动曲线控制位移、旋转和缩放。

```kotlin
import net.minecraft.world.item.ItemStack
import net.minecraft.world.item.Items
import net.minecraft.server.level.ServerPlayer
import top.katton.api.ClientItemRenderEasing
import top.katton.api.itemRenderMarker
import top.katton.api.showItemRenderMarker

fun showSpinningMarker(player: ServerPlayer) {
    val marker = itemRenderMarker(
        level = player.level().dimension(),
        pos = player.position().add(0.0, 1.4, 0.0),
        stack = ItemStack(Items.EMERALD),
        animations = mapOf(
            "spin" to {
                durationTicks = 40
                loop = true
                rotate {
                    keyframe(0.0f, 0.0, 0.0, 0.0)
                    keyframe(1.0f, 0.0, 360.0, 0.0, ClientItemRenderEasing.LINEAR)
                }
                translate {
                    keyframe(0.0f, 0.0, 0.0, 0.0)
                    keyframe(0.5f, 0.0, 0.25, 0.0, ClientItemRenderEasing.EASE_IN_OUT_SINE)
                    keyframe(1.0f, 0.0, 0.0, 0.0, ClientItemRenderEasing.EASE_IN_OUT_SINE)
                }
            }
        ),
        playingAnimationID = listOf("spin")
    )

    val id = showItemRenderMarker(player, marker)
}
```

之后可以对已追踪的标记调用 `playItemRenderAnimationSet(id, "spin")` 或 `stopItemRenderAnimationSet(id, "spin")`。

## 移除标记

使用 `removeItemRenderMarker(id)` 移除一个已追踪标记，使用 `clearItemRenderMarkers()` 清除所有玩家的标记，或使用 `clearItemRenderMarkersInRange(level, center, radius)` 按范围清理。

`lifetimeTicks >= 0` 的标记会在客户端自动过期，但长时间存在的 UI 或世界提示仍然建议显式清理。
