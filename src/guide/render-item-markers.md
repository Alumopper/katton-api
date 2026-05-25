# Item Render Markers

Item render markers are lightweight client-side item models shown in the world. They are useful for hologram-like rewards, previews, quest targets, temporary pickups, and animated markers.

Markers are not entities. They have no collision, selector target, persistence, or vanilla entity sync. A server script sends marker packets to the clients that should see them.

## Show a Marker

Create a `ClientItemRenderMarker` with `itemRenderMarker`, then send it with `showItemRenderMarker`.

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

Use `showItemRenderMarker(marker)` to broadcast to every connected player, or `showItemRenderMarker(player, marker)` for one viewer.

## Animate a Marker

Markers can carry named animation sets. A set can animate translation, rotation, and scale with easing curves.

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

You can later call `playItemRenderAnimationSet(id, "spin")` or `stopItemRenderAnimationSet(id, "spin")` for tracked markers.

## Remove Markers

Use `removeItemRenderMarker(id)` to remove one tracked marker, `clearItemRenderMarkers()` to clear all markers for all players, or `clearItemRenderMarkersInRange(level, center, radius)` for area cleanup.

Markers with `lifetimeTicks >= 0` expire on the client automatically, but explicit cleanup is still useful for long-lived UI or world hints.
