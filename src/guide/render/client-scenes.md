# Camera scenes and world effects

Katton Alpha 0.5.0 build1 adds a client scene API for Fabric and NeoForge.
The API supports Minecraft 26.1.2 and 26.2. Paper stays server-only.

## Requirements

Install Katton on the client to use camera scenes and custom world rendering.
A server can start a registered scene, but the receiving client performs the
rendering. A server-only installation can use vanilla titles, action bars, boss
bars, and other standard client packets. It cannot run this rendering API.

## Camera effects

Use `playCameraPath`, `followCamera`, `shakeCamera`, and
`transitionCameraFov` as independent effects. Camera positions use world
coordinates. Angles use degrees. Durations use ticks.

A camera path supports linear or Catmull–Rom position interpolation. Rotation
uses shortest-path quaternion interpolation. A path can look at a fixed position
or an entity. If an entity target becomes unavailable, Katton ends the scene.

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

A full camera path can block movement, attacks, item use, and mouse rotation.
Set `lockInput = false` to keep player control. Escape cancels the viewer's
camera scene. Independent camera shake and FOV effects do not block input.

## Particles and geometry

`ParticleEmitter` supports point, line, ring, sphere, and spiral shapes. It uses
Minecraft `ParticleOptions`, including particles that a script registered.

Geometry effects include beams, trails, rings, textured planes, curves, faces,
boxes, spheres, cylinders, and cones. Materials support ARGB color, width,
fade-out, alpha or additive blending, and optional through-wall rendering.

Use these built-in textures:

- `katton:textures/effect/white.png`
- `katton:textures/effect/circle.png`

Place a custom texture under `assets/<namespace>/textures/` in the script pack.
Reference it with its resource identifier.

## Timeline

Register a reusable definition with `registerClientScene`. Each play call creates
an independent instance.

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

Scenes support sequential, parallel, and explicit start times. A scene can pause,
resume, repeat a finite number of times, or cancel. An integrated-server pause
stops its clock.

## Server trigger

The server can start a definition for one player or for current players in a
dimension and radius.

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

The client checks the definition ID, script revision, dimension, instance ID,
and target entity. A remote handle sends stop messages only to the original
recipients. It does not confirm playback completion. New players and players who
enter the radius later do not receive a replay.

## Limits and cleanup

The default client limits are 256 active effects, 4,096 particle emissions per
tick, and 65,536 geometry vertices per frame. Use `setClientEffectBudgets` to
change them.

Cancellation removes scene geometry and stops new particle emissions. Existing
vanilla particles follow their normal lifetime. Death, dimension changes,
disconnects, target loss, and reload replacement release camera and input
control.

The repository includes three requested demonstrations and one geometry gallery
under `examples/client-scenes`.
