# Registry

Adding custom content to the game is the basic functionality of a modding framework. In Katton, you can register new blocks, items, mobeffects and more using Katton Registry API. 

>[!WARNING]
> The registry system in Katton is still under development, and the API may change in the future. 

## Item Registry

```kotlin
registerNativeItem(
    id = "qwq:hello",     // The identifier of the item, must be unique across all mods
    registerMode = RegisterMode.RELOADABLE, // TODO
    configure = {
        // Configure the item properties
        // For datapack developers, you can think of it as data components
        setName(Component.literal("Hello"))
        stacksTo(1)
        setModel(Identifier.fromNamespaceAndPath("minecraft", "diamond"))
        food(FoodProperties.Builder().nutrition(1).saturationModifier(0.1f).build())
    }
) {
    // Here to define the item class, just do what you will do in a normal mod.
    object : Item(it) {
        // Executed when the player uses the item
        override fun use(level: Level, player: Player, hand: InteractionHand): InteractionResult {
            // Note that the method defined here won't be hot-reloadable
            // Wrap the logic you want to hot-reload in a separate function
            return useHelloItem(player)
        }
    }
}

fun useHelloItem(player: Player): InteractionResult{
    (player as? ServerPlayer)?.let { p -> tell(p , "Used the hello item!") }
    return InteractionResult.SUCCESS
}
```

>[!CAUTION]
> When a minecraft client connects to a server, it will registry each item registered by the server. However, only the data components of the item are synchronized to the client, and the logic defined in the item class is not synchronized. Some interaction logic that needs to be executed on the client side may not work properly. 
>
> Block registry has the same problem, and currently we don't have a good solution for this. We are planning to introduce a "global script" system in the future like kubejs.

## Block Registry

```kotlin
 registerNativeBlock(
    id = "qwq:test_block",
    registerMode = RegisterMode.RELOADABLE
) { props ->
    Block(
        props
            .strength(3.0f, 6.0f)
            .requiresCorrectToolForDrops()
    )
}
```

## MobEffect Registry

```kotlin
registerNativeEffect(
    id = "qwq:test_qwq",
    registerMode = RegisterMode.RELOADABLE
) {
    object : MobEffect(MobEffectCategory.BENEFICIAL, 0x55FF55) {
        override fun applyEffectTick(serverLevel: ServerLevel, mob: LivingEntity, amplification: Int): Boolean {
            mob.hurtServer(serverLevel, mob.damageSources().wither(), 1.0F);
            return super.applyEffectTick(serverLevel, mob, amplification)
        }

        override fun shouldApplyEffectTickThisTick(tickCount: Int, amplification: Int): Boolean {
            return tickCount % 20 == 0
        }
    }
}
```

## Command Registry

```kotlin
import com.mojang.brigadier.arguments.IntegerArgumentType.getInteger
import com.mojang.brigadier.arguments.IntegerArgumentType.integer
import com.mojang.brigadier.arguments.StringArgumentType.getString
import com.mojang.brigadier.arguments.StringArgumentType.word
import net.minecraft.commands.SharedSuggestionProvider.suggest
import net.minecraft.network.chat.Component
import top.katton.registry.registerCommand

fun commandTest() {
    registerCommand("demo") {
        literal("ping") {
            executes { ctx ->
                ctx.source.sendSuccess(
                    { Component.literal("[demo] pong") },
                    false
                )
                1
            }
        }

        literal("echo") {
            argument("text", word()) {
                suggests { _, builder ->
                    suggest(listOf("hello", "world", "katton"), builder)
                }
                executes { ctx ->
                    val text = getString(ctx, "text")
                    ctx.source.sendSuccess(
                        { Component.literal("[demo] $text") },
                        false
                    )
                    1
                }
            }
        }

        literal("add") {
            argument("a", integer()) {
                argument("b", integer()) {
                    executes { ctx ->
                        val a = getInteger(ctx, "a")
                        val b = getInteger(ctx, "b")
                        ctx.source.sendSuccess(
                            { Component.literal("[demo] $a + $b = ${a + b}") },
                            false
                        )
                        1
                    }
                }
            }
        }
    }
}

@Suppress("unused") private val commandTest = commandTest()
```

---

We are working hard to enable more content types registry.