# 注册

向游戏添加自定义内容是模组开发框架的基本功能。在 Katton 中，你可以使用 Katton 注册 API 注册新的方块、物品、药水效果等。

>[!WARNING]
> Katton 的注册系统仍在开发中，可能会有不稳定的行为。

## 物品注册

```kotlin
registerNativeItem(
    id = "qwq:hello",     // 物品的标识符，必须唯一
    registerMode = RegisterMode.RELOADABLE, // TODO
    configure = {
        // 配置物品属性
        // 对于数据包开发者，可以将其理解为物品组件
        setName(Component.literal("Hello"))
        stacksTo(1)
        setModel(Identifier.fromNamespaceAndPath("minecraft", "diamond"))
        food(FoodProperties.Builder().nutrition(1).saturationModifier(0.1f).build())
    }
) {
    // 在这里定义物品类，就像在普通模组中做的一样
    object : Item(it) {
        // 当玩家使用物品时执行
        override fun use(level: Level, player: Player, hand: InteractionHand): InteractionResult {
            // 注意，这里定义的方法不会被热重载
            // 你需要将你想要热重载的逻辑包装在单独的函数中
            return useHelloItem(player)
        }
    }
}

fun useHelloItem(player: Player): InteractionResult{
    (player as? ServerPlayer)?.let { p -> tell(p , "使用了 hello 物品！") }
    return InteractionResult.SUCCESS
}
```

>[!CAUTION]
> 当 Minecraft 客户端连接到服务器时，它会注册服务器已经注册的每个物品。但是，只有物品的数据组件会同步到客户端，物品类中定义的逻辑不会同步。一些需要在客户端执行交互逻辑可能无法正常工作。
>
> 方块注册也有同样的问题，目前我们还没有一个好的解决方案。我们计划在未来引入类似 KubeJS 的"全局脚本"系统来解决注册方面的同步问题。

## 方块注册

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

## 药水效果注册

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

## 命令注册

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

我们正在努力支持更多内容类型的注册。
