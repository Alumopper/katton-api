# Camera Scenes and World Effects

Katton Alpha 0.5.0 adds a client scene API for Fabric and NeoForge on Minecraft 26.1.2 and 26.2. It covers camera paths, follow and look-at cameras, shake, FOV transitions, particle emitters, world-space geometry, beams, trails, and a Kotlin timeline that composes them. Paper stays server-only and provides none of these renderers.

## Requirements

Install Katton on the client to use camera scenes and custom world rendering. A server can start a registered scene, but the receiving client performs the rendering. A server-only installation can use vanilla titles, action bars, boss bars, and other standard client packets — it cannot run this rendering API.

Local APIs must be called on the **client thread**. Server trigger APIs must be called on the **server thread**.

## Camera Effects

Use `playCameraPath`, `followCamera`, `shakeCamera`, and `transitionCameraFov` as independent effects. Camera positions use world coordinates, angles use degrees, and durations use ticks (normally 20 per second).

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

| Type | Parameters and behavior |
|---|---|
| `CameraPath` | Increasing keyframes starting at tick 0. Positions use linear or Catmull–Rom interpolation; rotation uses shortest-path quaternion interpolation. |
| `CameraFollow` | Anchor, duration, optional look-at target, plus an optional fixed yaw/pitch offset. Ends when the target becomes unavailable. |
| `CameraShake` | Duration, angular strength, and frequency. Decays over time and does not lock input. |
| `CameraFov` | Start and end FOV (1–179 degrees), duration, and easing. Changes only the rendered FOV, never saved video options. |

`CameraPose` takes `position`, `yaw`, `pitch`, `roll`, and an optional `fov`. A `CameraKeyframe` adds a tick and an easing function (`LINEAR`, `SMOOTH`, `EASE_IN`, `EASE_OUT`).

A full camera path can block movement, attacks, item use, and mouse rotation. Set `lockInput = false` to keep player control. Escape cancels the viewer's camera scene. Independent camera shake and FOV effects do not block input.

## Anchors

Effects are positioned with `EffectAnchor`:

| Anchor | Meaning |
|---|---|
| `EffectAnchor.Position(position)` | A fixed world position. |
| `EffectAnchor.Origin(offset)` | The scene origin plus an offset. Use it to author reusable, relative scenes. |
| `EffectAnchor.Entity(id, offset)` | An entity UUID plus an offset. Omit the UUID to use `SceneContext.target`. |

Entity anchors never load chunks, and an unavailable target ends the scene instead of leaving a stale camera.

## Particles and Geometry

`ParticleEmitter` uses Minecraft `ParticleOptions`, including particle types that a script registered. Shapes are `Point`, `Line(end)`, `Ring(radius)`, `Sphere(radius)`, and `Helix(radius, height, turns)`.

```kotlin
import net.minecraft.core.particles.ParticleTypes
import top.katton.api.scene.*

playClientEffect(
    ParticleEmitter(
        ParticleTypes.END_ROD,
        ParticleShape.Ring(2.5),
        durationTicks = 40,
        countPerTick = 24,
        velocity = Vec3(0.0, 0.08, 0.0),
    ),
)
```

Geometry effects include:

| Geometry | Notes |
|---|---|
| `Line(end)` | A single segment from the anchor. |
| `Curve(points, segments)` | Catmull–Rom curve through 2–128 points. |
| `Ring(radius, segments)` | A circle in the anchor's local XY plane. |
| `Plane(width, depth)` | A horizontal textured or colored quad. |
| `Face(points)` | A convex planar polygon, fan-triangulated. |
| `Box(size, wireframe)` | Solid or wireframe box. |
| `Sphere(radius, segments, rings)` | Solid or wireframe sphere. |
| `Cylinder(radius, height, segments, topRadius)` | Set `topRadius` to `0.0` for a cone. |

`BeamEffect(from, to)` draws a beam between two anchors, and `TrailEffect(anchor, durationTicks, maxPoints, teleportDistance)` samples a bounded trail that breaks when the entity teleports.

Geometry vertices are relative to the anchor; rotate planes, rings, and boxes with the `yaw`, `pitch`, and `roll` parameters of `GeometryEffect`.

`EffectMaterial` controls appearance:

| Field | Default | Meaning |
|---|---|---|
| `color` | `-1` (white) | ARGB color. |
| `width` | `0.05` | Line width in blocks. |
| `texture` | `null` | Resource identifier for a textured plane. |
| `throughWalls` | `false` | Draw without depth occlusion. Depth testing is on by default. |
| `blend` | `EffectBlend.ALPHA` | `ALPHA` or `ADDITIVE`. |
| `fadeOutTicks` | `10` | Fade the effect out over the last N ticks. |

Katton ships two built-in textures:

- `katton:textures/effect/white.png`
- `katton:textures/effect/circle.png`

Place a custom texture under `assets/<namespace>/textures/` in the script pack and reference it with its resource identifier.

## Timeline

Register a reusable definition with `registerClientScene`. Each play call creates an independent instance.

```kotlin
registerClientScene("demo:intro") {
    repeats = 1
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

The builder is sequential by default. `parallel { ... }` starts its direct branches together, and `at(tick) { ... }` places a block at an explicit offset relative to its parent builder. A `sequential { ... }` block inside `parallel` forms one parallel branch that itself runs in order.

```kotlin
registerClientScene("demo:sequence") {
    repeats = 2
    effect(CameraShake(10))
    parallel {
        effect(CameraFov(75f, 60f, 20))
        sequential {
            waitTicks(5)
            effect(CameraShake(15))
        }
    }
    at(40) { effect(CameraFov(60f, 75f, 10)) }
}
```

A dynamic factory sees the instance's `SceneContext`, which is how a definition builds a relative camera path:

```kotlin
effect(80) { context ->
    CameraPath(
        listOf(
            CameraKeyframe(0, CameraPose(context.origin.add(0.0, 2.0, 5.0), fov = 75f)),
            CameraKeyframe(40, CameraPose(context.origin.add(5.0, 3.0, 0.0), fov = 60f)),
            CameraKeyframe(80, CameraPose(context.origin.add(0.0, 5.0, -5.0), fov = 75f)),
        ),
        CameraOptions(interpolation = CameraInterpolation.CATMULL_ROM, lookAt = EffectAnchor.Origin(Vec3(0.0, 1.0, 0.0))),
    )
}
```

A factory's returned effect duration must equal the declared track duration. Instances have independent clocks and contexts. A scene can have up to 4,096 tracks, repeat up to 1,000 times, and run for at most 72,000 ticks. An integrated-server pause stops its clock. `unregisterClientScene(id)` stops the definition's instances and removes it.

Handles:

```kotlin
val scene = playClientScene("demo:sequence", SceneContext(origin = player.position()))
scene.pause()
scene.resume()
scene.cancel()
println(scene.isActive)
println(scene.endReason)

val effect = playClientEffect(CameraShake(12, 2f))
effect.onEnd { reason -> println("shake ended: $reason") }
```

`EffectEndReason` is one of `COMPLETED`, `CANCELLED`, `REPLACED`, `TARGET_LOST`, `WORLD_CHANGED`, `RELOAD`, `ERROR`, `BUDGET`, or `REJECTED`. A new full camera replaces the scene that owned the previous full camera, including its child effects. Standalone FOV tracks use the same replacement rule. Shakes stack with a per-axis 45-degree cap. Callbacks run in their script context; a callback exception is logged without preventing cleanup.

## Server Trigger

The server can start a definition for one player or for current players in a dimension and radius.

```kotlin
import top.katton.api.scene.*
import top.katton.util.ScriptExecutionContext

val remote = playPlayerScene(player, "demo:intro")
val nearby = playNearbyScene(
    player.level(),
    player.position(),
    32.0,
    "demo:intro",
)

remote.cancel()
```

Definitions default to their script pack's code hash as the revision. The server and the client must agree on both the definition ID and the revision. Calls outside a script context default to `"1"`, and both sides may pass an explicit revision. Callbacks that do not propagate the owner, such as command handlers, should capture the revision at registration and pass it in:

```kotlin
@ServerScriptEntrypoint(ServerPhase.READY)
fun registerSceneCommand() {
    val revision = requireNotNull(ScriptExecutionContext.currentScriptRevision())
    registerCommand("intro") {
        executes { command ->
            val player = command.source.playerOrException
            playPlayerScene(player, "demo:intro", SceneContext(player.position(), player.uuid), revision)
            1
        }
    }
}
```

Only start and stop commands plus the context travel over the play channel; definitions and assets come from pack synchronization. The client checks the definition ID, revision, dimension, instance ID, and target entity. Playback starts on receipt without frame-accurate synchronization between clients, and players who join or enter the radius later do not receive a replay. Stale definitions, wrong dimensions, missing targets, and duplicate instances are rejected. A remote handle sends stops only to the original recipients and does not confirm playback completion. Escape skips only the current viewer's scene.

## Budgets and Cleanup

The default client limits are 256 active effects, 4,096 particle emissions per tick, and 65,536 geometry vertices per frame. Use `setClientEffectBudgets` to change them:

```kotlin
setClientEffectBudgets(
    EffectBudgets(
        activeEffects = 128,
        particlesPerTick = 2048,
        verticesPerFrame = 32768,
    ),
)
```

Budgets are shared across every pack on the client. If startup capacity is insufficient, the new scene is rejected; if a later track exceeds a limit, that effect is skipped while the timeline continues. Excess particle emissions and vertices are skipped. Diagnostics are rate-limited and never block clocks or restoration.

Cancellation removes scene geometry and stops new particle emissions. Existing vanilla particles follow their normal lifetime. Death, dimension changes, disconnects, target loss, cancellation, and reload replacement release camera and input control.

Camera and input handling are client presentation features, not invulnerability, server freezing, or chunk loading.

## Try the Examples

The repository ships four demonstrations under `examples/client-scenes`. Copy the pack into a world's `kattonpacks/` directory, run `/katton reload`, and use:

| Command | Result |
|---|---|
| `/kattonscene impact` | Camera shake, particle ring, and a geometry ring |
| `/kattonscene trail` | Entity trail and beam — move around to see the trail |
| `/kattonscene cutscene` | Keyframed camera with a magic circle; Escape skips |
| `/kattonscene geometry` | Curve, wireframe box, sphere, and cone |

Clients need a matching Katton installation and must accept pack synchronization.
