# For Vanilla Datapack Developers

In fact, I am originally a vanilla datapack developer. It was precisely because I grew tired of the tediousness and various limitations of datapacks that I developed Katton. I wanted to retain the advantage of datapack hot-reloading while achieving powerful functionality comparable to that of mods. So if you're also a datapack developer, don't worry, Katton will definitely give you a home-like experience.

Katton provides a series of functions that wrap all the functionalities of the vanilla commands. Even if you know nothing about Fabric modding, you can still use these functions to implement everything you can within the datapack. 

## Commands

All command functions are located in the `top.katton.api.dpcaller` package. You can find the documentation for these functions in the [API documentation](/kdoc/kts4mc-template-1.21.11/top.katton.api.dpcaller/index.html). These functions are designed to be as close to the original commands as possible. For example, you may use `scoreboard players set test myscore 1` in datapack, and in Katton you can achieve the same effect with the following code:

```kotlin
import top.katton.api.dpcaller.getObjective
import top.katton.api.dpcaller.getOrCreateObjective
import top.katton.api.dpcaller.setScore

fun scoreboardExampleMain(){
    //get the scoreboard objective
    val obj = getOrCreateObjective("myscore")
    //set the score of "test" to 100
    setScore("test", obj, 100)
}

val scoreboardExampleMain = scoreboardExampleMain()
```

## Entity Access

In datapacks, we always need to use target selectors to specify the entities we want to operate on. In Katton, you can also use target selectors to get the corresponding entities. We provide [`EntitySelectorBuilder`](/kdoc/kts4mc-template-1.21.11/top.katton.util/-entity-selector-builder/index.html) class to help you build target selectors. 

```kotlin
import net.minecraft.world.effect.MobEffects
import net.minecraft.world.entity.EntityType
import net.minecraft.world.entity.LivingEntity
import net.minecraft.world.phys.Vec3
import top.katton.api.dpcaller.addEffect
import top.katton.api.requireServer
import top.katton.util.EntitySelectorBuilder

fun targetSelectorExample(){

    // Build a target selector
    val selector = EntitySelectorBuilder.allEntities()  //@e
        .type(EntityType.CREEPER)   //type = creeper
        .tag("qwq", false)  //tag = qwq
        .distanceBelow(16.0)    //distance = ..16
        .create()
    // So we get a target selector like this: @e[type=creeper,tag=qwq,distance=..16]

    // And then we need to build a command execution source, which is required by the selector to get the world and the position for distance calculation
    val source = requireServer().createCommandSourceStack()
        .withLevel(requireServer().overworld()) // Set the dimension for the command source
        .withPosition(Vec3(50.0, 70.0, 50.0)) // Set the position for distance calculation

    // Get entities selected by the selector
    val entities = selector.findEntities(source)

    // Once you get the references of the entities, you access those entities at anywhere in your code, and do whatever you want with them
    for (entity in entities) {
        if(entity is LivingEntity){
            // add some effect to the entity
            addEffect(entity,
                MobEffects.GLOWING, // effect
                200,    // effect duration in **ticks**
                0,      // effect amplifier level
                false,  // show particles
                false   // show icon
            )
        }
    }
}

// Remember to call the function
val targetSelectorExample = targetSelectorExample()
```

## NBT

NBT is another important part of datapacks. In Katton, you can use `getEntityNbt`, `getBlockNbt`, and `getStorageNbt` functions to get the NBT data of entities, blocks, and storage respectively. 

## Call Datapack Functions

Want to continue calling the mcfunction you've already written? No problem! You can use the `runFunction` function to call any mcfunction in your datapack.

## `#tick` and `#load` Functions

In datapacks, we will use functions with `#load` tag to execute some code when the datapack is loaded, and use functions with `#tick` tag to execute some code every tick. In Katton, we replace these tags with more powerful event listeners. You can use `KattonEvents.ServerTick` event to execute code every tick, and use `KattonEvents.ServerLifecycle` event to execute code when the server starts or stops. Check out the [Events](event.md) page for more details.

```kotlin
fun main() {
    // Executed when an entity is loaded
    ServerEntityEvent.onAfterEntityLoad += load@
    fun(arg: EntityLoadArg) {
        val (entity, _) = arg
        if (entity !is Arrow) return
        //if a player shoots an arrow, check the bow's data
        val owner = entity.owner
        if (owner is ServerPlayer) {
            onArrowShot(owner, entity)
        }
    }
    
    // Executed every server tick
    onStartServerTick += tick@
    fun(_) {
        // check if a tnt arrow has hit the ground and make it explode
        processTNTArrow()
    }
}

val tntArrow = HashSet<Arrow>()

fun onArrowShot(player: ServerPlayer, arrow: Arrow) {
    tell(player, Component.empty() + "The weapon on your hand is: " + player[Weapon.MainHand]?.itemName)
    //this arrow is shot by a tnt bow, make it explode
    if (player.mainHandItem.nbt["tnt"](false)) {
        tntArrow.add(arrow)
    }
}

fun processTNTArrow() {
    val iterator = tntArrow.iterator()
    while (iterator.hasNext()) {
        val arrow = iterator.next()

        // Check if the arrow has hit the ground by checking its NBT data. 
        if (getEntityNbt(arrow).getBooleanOr("inGround", false)) {
            // Make the arrow explode
            // This method is from vanilla code
            arrow.level().explode(
                arrow,
                arrow.damageSources().explosion(arrow, arrow.owner),
                null,
                arrow.position(),
                16.0f,
                false,
                Level.ExplosionInteraction.TNT
            )
            iterator.remove()
            // Remove the arrow entity after explosion
            arrow.kill(arrow.level() as ServerLevel)
        }
    }
}
```

