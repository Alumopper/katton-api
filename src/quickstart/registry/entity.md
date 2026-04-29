# Entity Tutorial

This guide walks you through creating a custom animated entity from scratch — from BlockBench model to in-game mob with walking animations.

## Overview

Creating a custom entity in Katton requires four pieces:

| Piece | Where | Format |
|---|---|---|
| **Model** | BlockBench export → `.kt` class | Java-style `EntityModel` subclass |
| **Animation** | BlockBench export → `.kt` class | `AnimationDefinition` definitions |
| **Entity Class** | Your script | `Monster` subclass with `AnimationState` fields |
| **Textures** | Resource pack or kattonpacks | `.png` file |

## Step 1: Create Your Model in BlockBench

1. Design your entity model in [BlockBench](https://www.blockbench.net/)
2. File → Export → Export Java Entity Model
3. Choose **Mojang mappings**, Minecraft version **1.19+**
4. Save the `.java` file, right click it in IDEA and choose "Convert Java File to Kotlin File" to `.kt` (Katton uses `.kt` extension for better IDE support)

The export produces a class like this (renamed to `.kt`):

```kotlin
class Zombie1Model<T : EntityRenderState>(root: ModelPart) : EntityModel<T>(root) {
    companion object {
        val LAYER_LOCATION = ModelLayerLocation(id("test", "zombie1"), "main")
        fun createBodyLayer(): LayerDefinition { ... }
    }
}
```

> [!TIP]
> You may manually need to import some classes (e.g., `ModelPart`, `ModelLayerLocation`, `LayerDefinition`) and fix any syntax issues from the Java → Kotlin conversion (e.g. `EntityModel<T>` instead of `EntityModel<T?>`).

> [!IMPORTANT]
> **Change the namespace** in `LAYER_LOCATION` from `"modid"` to your actual mod namespace (e.g., `"test"`). This ID must match what you use when registering the entity.

## Step 2: Export Animations

1. In BlockBench, switch to **Animate** mode
2. Create your animations (idle, walk, attack, etc.)
3. File → Export → Export Java Animation
4. Save as `.java` file and convert to `.kt` as before

The export produces:

```kotlin
object Zombie1Animation {
    val idle: AnimationDefinition = AnimationDefinition.Builder.withLength(4.0f).looping()
        .addAnimation("head", ...)
        .build()
    val walkforward: AnimationDefinition = ...
}
```

> [!CAUTION]
> **Bone name mismatch** is a common crash. If your animation references a bone name that doesn't exist in the model (e.g., `"item_display"` from BlockBench locators), `bake()` will throw an exception. Either add empty placeholder bones to your model, or remove those channels from the animation.

## Step 3: Write Your Entity Class

```kotlin
class Zombie1Entity(type: EntityType<out Monster>, level: Level) : Monster(type, level) {
    val idle = AnimationState()
    val walk = AnimationState()

    init { idle.start(tickCount) }

    override fun tick() {
        super.tick()
        if (level().isClientSide) {
            // Publish animation states via the cross-ClassLoader bridge
            KattonBridge["anim:${id}:idle"] = idle
            KattonBridge["anim:${id}:walk"] = walk

            // Control which animation plays
            if (deltaMovement.horizontalDistanceSqr() > 1.0e-7) {
                walk.startIfStopped(tickCount); idle.stop()
            } else {
                idle.startIfStopped(tickCount); walk.stop()
            }
        }
    }
}
```

> [!CAUTION]
> ### Critical: ClassLoader Isolation
>\
> Katton compiles server scripts and client scripts in **separate ClassLoaders**. This means:
> - You **cannot** cast between the server and client versions of your entity class
> - Static fields in script classes are ClassLoader-local
>
> **Solution**: Use `KattonBridge` to share data between ClassLoaders. The bridge lives in Katton's mod ClassLoader, so both sides see the same map.
>
> ```kotlin
> // Entity side (server or client script):
> KattonBridge["anim:${entity.id}:idle"] = idleAnimationState
>
> // Renderer side (client script — handled automatically by registerAnimatedEntityRenderer):
> val state = KattonBridge["anim:${entityId}:idle"] as? AnimationState
> ```

## Step 4: Register Entity (Server Side)

```kotlin
@ServerScriptEntrypoint
fun initZombie() {
    registerNativeEntity("test:zombie1", RegisterMode.RELOADABLE,
        configure = {
            dimensions(0.6f, 1.95f)
            maxHealth(20.0)
            movementSpeed(0.23)
            attackDamage(3.0)
            withSpawnEgg()
            followRange(64.0)
        }
    ) { props ->
        EntityType.Builder.of(::Zombie1Entity, MobCategory.MONSTER)
            .sized(props.dimensions.width, props.dimensions.height)
            .build(ResourceKey.create(Registries.ENTITY_TYPE, props.id))
    }
}
```

## Step 5: Register Renderer + Animations (Client Side)

Use the high-level `registerAnimatedEntityRenderer` — one call handles model layer, renderer construction, and animation wiring:

```kotlin
@ClientScriptEntrypoint
fun initZombieRenderer() {
    registerAnimatedEntityRenderer<LivingEntityRenderState, Zombie1Model<LivingEntityRenderState>>(
        entityTypeId = "test:zombie1",
        modelLayer = Zombie1Model.LAYER_LOCATION,
        bodyLayer = { Zombie1Model.createBodyLayer() },
        modelFactory = { root -> Zombie1Model(root) },
        texture = id("test", "textures/entity/zombie1.png"),
        animations = mapOf(
            "idle" to Zombie1Animation.idle,
            "walk" to Zombie1Animation.walkforward
        )
    )
}
```

> [!NOTE]
> The `animations` map is **fully flexible** — add as many animations as you want. The default logic plays `"walk"` when the entity moves and `"idle"` otherwise. To customize, pass an `animate` callback:
>
> ```kotlin
> animations = mapOf("idle" to idleDef, "walk" to walkDef, "attack" to attackDef),
> animate = { model, entity, state, baked ->
>     model.resetPose()
>     // Your custom animation logic here...
>     val state = KattonBridge["anim:${entity.id}:attack"] as? AnimationState
>     baked["attack"]?.apply(state, state.ageInTicks)
> }
> ```

## Step 6: Place Your Texture

The texture path is specified in `registerAnimatedEntityRenderer`:

```kotlin
texture = id("test", "textures/entity/zombie1.png")
```

This expects the file at `assets/test/textures/entity/zombie1.png` in your resource pack or mod resources.

## MC 26.1 Animation API

If you need to write a custom renderer (without `registerAnimatedEntityRenderer`), be aware that MC 26.1 changed the animation API:

| Old API (1.21.11) | New API (26.1) |
|---|---|
| `EntityModel.animate(state, def, age)` | `def.bake(model.root()).apply(animState, age)` |
| `AnimationDefinition` used directly | Must `bake()` into `KeyframeAnimation` first |
| `animate()` on model | `apply()` on `KeyframeAnimation` |

And **always** call `model.resetPose()` before applying animations each frame — otherwise transforms accumulate across frames, producing chaotic motion.

## Common Pitfalls

### "My entity is invisible"

1. **Client scripts didn't run** — Katton only runs client scripts on explicit `/katton reload` or first singleplayer world join (after our recent fix). Try `/katton reload`.
2. **ClassLoader cast crash** — Check the log for `ClassCastException`. Use `registerAnimatedEntityRenderer` which handles this automatically, or use `Monster` (not your entity class) as the renderer's type parameter.
3. **Texture missing** — Check the path: `assets/<ns>/textures/entity/<name>.png`.
4. **Model layer mismatch** — `LAYER_LOCATION` namespace must match the registration.

### "Animations are messy / chaotic"

1. **Missing `resetPose()`** — Call `model.resetPose()` before every animation application.
2. **Layered animations** — Only apply ONE animation per frame. Applying idle AND walk simultaneously accumulates transforms.
3. **`bake()` fails silently** — If animation references bones not in the model, `bake()` throws. Catch it with `runCatching`.

### "Crash on /katton reload"

1. **Delete the cache** — `<gameDir>/.katton/compiled-script-cache/` may contain stale compiled scripts.
2. **Kill old entities** — After reload, existing entities are from the old ClassLoader. Kill and respawn them.

### "Animation doesn't play"

1. **AnimationState not started** — Call `animationState.start(tickCount)` in your entity's constructor or `tick()`.
2. **Bridge key mismatch** — Ensure `KattonBridge["anim:${id}:idle"]` on the entity side matches what the renderer expects.

## Complete Example

Here's the full script for a custom zombie entity with idle + walk animations (assuming model classes are in the `model` package):

```kotlin
package qwq

import model.Zombie1Animation
import model.Zombie1Model
import net.minecraft.client.renderer.entity.state.LivingEntityRenderState
import net.minecraft.core.registries.Registries
import net.minecraft.resources.ResourceKey
import net.minecraft.world.entity.AnimationState
import net.minecraft.world.entity.EntityType
import net.minecraft.world.entity.MobCategory
import net.minecraft.world.entity.monster.Monster
import net.minecraft.world.level.Level
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.registry.registerAnimatedEntityRenderer
import top.katton.api.registry.registerNativeEntity
import top.katton.bridge.KattonBridge
import top.katton.registry.RegisterMode
import top.katton.registry.id

class Zombie1Entity(type: EntityType<out Monster>, level: Level) : Monster(type, level) {
    val idle = AnimationState()
    val walk = AnimationState()
    init { idle.start(tickCount) }

    override fun tick() {
        super.tick()
        if (level().isClientSide) {
            KattonBridge["anim:${id}:idle"] = idle
            KattonBridge["anim:${id}:walk"] = walk
            if (deltaMovement.horizontalDistanceSqr() > 1.0e-7) {
                walk.startIfStopped(tickCount); idle.stop()
            } else {
                idle.startIfStopped(tickCount); walk.stop()
            }
        }
    }
}

@ServerScriptEntrypoint
fun initZombie() {
    registerNativeEntity("test:zombie1", RegisterMode.RELOADABLE,
        configure = {
            dimensions(0.6f, 1.95f); maxHealth(20.0); movementSpeed(0.23)
            attackDamage(3.0); withSpawnEgg(); followRange(64.0)
        }
    ) { p -> EntityType.Builder.of(::Zombie1Entity, MobCategory.MONSTER)
        .sized(p.dimensions.width, p.dimensions.height)
        .build(ResourceKey.create(Registries.ENTITY_TYPE, p.id)) }
}

@ClientScriptEntrypoint
fun initZombieRenderer() {
    registerAnimatedEntityRenderer<LivingEntityRenderState, Zombie1Model<LivingEntityRenderState>>(
        entityTypeId = "test:zombie1",
        modelLayer = Zombie1Model.LAYER_LOCATION,
        bodyLayer = { Zombie1Model.createBodyLayer() },
        modelFactory = { root -> Zombie1Model(root) },
        texture = id("test", "textures/entity/zombie1.png"),
        animations = mapOf(
            "idle" to Zombie1Animation.idle,
            "walk" to Zombie1Animation.walkforward
        )
    )
}
```
