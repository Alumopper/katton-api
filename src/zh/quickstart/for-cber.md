# 数据包开发者指南

事实上，我也是一名原版数据包开发者，就是因为写数据包的时候写破防了才开发了 Katton（

我想在保留数据包热重载优势的同时，实现堪比模组的强大功能。所以如果你也是数据包开发者，别担心，写 Katton 的时候你会觉得就像回家了一样。

Katton 提供了一系列的函数，封装了原版命令的所有功能。即使你对 Fabric 模组开发一无所知，你仍然可以使用这些函数实现至少你能在数据包中能做到的一切。

## 命令

所有命令包装函数都位于 `top.katton.api.dpcaller` 包中。你可以在 [API 文档](/kdoc/kts4mc-template-1.21.11/top.katton.api.dpcaller/index.html) 中找到这些函数的文档。这些函数的设计尽可能接近原始命令。例如，在数据包中你会使用 `scoreboard players set test myscore 1`，而在 Katton 中你可以通过以下代码实现相同的效果：

```kotlin
import top.katton.api.getObjective
import top.katton.api.setScore

fun scoreboardExampleMain(){
    // 获取计分板目标
    val obj = getObjective("myscore")!!
    // 将 "test" 的分数设置为 100
    setScore("test", obj, 100)
}

// 别忘了执行函数
val scoreboardExampleMain = scoreboardExampleMain()
```

## 实体访问

在数据包中，我们一般使用目标选择器来指定我们想要操作的实体。在 Katton 中，你也可以使用目标选择器来获取相应的实体。我们提供了 [`EntitySelectorBuilder`](/kdoc/kts4mc-template-1.21.11/top.katton.util/-entity-selector-builder/index.html) 类来帮助你构建目标选择器。

```kotlin
import net.minecraft.world.effect.MobEffects
import net.minecraft.world.entity.EntityType
import net.minecraft.world.entity.LivingEntity
import net.minecraft.world.phys.Vec3
import top.katton.api.addEffect
import top.katton.api.requireServer
import top.katton.util.EntitySelectorBuilder

fun targetSelectorExample(){

    // 构建目标选择器
    val selector = EntitySelectorBuilder.allEntities()  //@e
        .type(EntityType.CREEPER)       //type = creeper
        .tag("qwq", false)              //tag = qwq
        .distanceBelow(16.0)            //distance = ..16
        .create()
    // 于是我们就得到了一个这样的目标选择器：@e[type=creeper,tag=qwq,distance=..16]

    // 然后我们需要构建一个命令上下文，用于目标选择器选定实体
    val source = requireServer().createCommandSourceStack()
        .withLevel(requireServer().overworld())     // 设置维度
        .withPosition(Vec3(50.0, 70.0, 50.0))       // 设置位置

    // 获取选择器选中的实体
    val entities = selector.findEntities(source)

    // 一旦你获得了实体的引用，你就可以在代码的任何地方访问这些实体
    for (entity in entities) {
        if(entity is LivingEntity){
            // 给实体添加一些状态效果
            addEffect(entity,
                MobEffects.GLOWING, // 效果
                200,    // 效果持续时间（**tick**）
                0,      // 效果等级
                false,  // 是否显示粒子
                false   // 是否显示图标
            )
        }
    }
}

// 记得调用函数
val targetSelectorExample = targetSelectorExample()
```

## NBT

NBT 是数据包的另一个重要部分。在 Katton 中，你可以使用 `getEntityNbt`、`getBlockNbt` 和 `getStorageNbt` 函数分别获取实体、方块和存储的 NBT 数据。

## 调用数据包函数

想继续调用你已经写好的 mcfunction？没问题！你可以使用 `runFunction` 函数调用数据包中的任何 mcfunction。

## `#tick` 和 `#load` 函数

在数据包中，我们知道，带有`#load`标签的函数会在数据包加载的时候执行，而带有 `#tick` 标签的函数会在每 tick 执行。在 Katton 中，我们用更强大的事件监听器替代了这些标签。你可以使用 `KattonEvents.ServerTick` 事件在每 tick 开始或者结束的时候执行代码，使用 `KattonEvents.ServerLifecycle` 事件在服务器启动或停止时执行代码。查看[事件](event.md)页面了解更多详情。

```kotlin
fun main() {
    // 当实体加载时执行
    onEntityLoad += load@
    fun(arg: EntityLoadArg) {
        val (entity, _) = arg
        if (entity !is Arrow) return
        // 如果玩家射出一支箭，检查手持弓的数据
        val owner = entity.owner
        if (owner is ServerPlayer) {
            onArrowShot(owner, entity)
        }
    }
    
    // 每 tick 执行
    onStartServerTick += tick@
    fun(_) {
        // 检查 TNT 箭是否击中地面并使其爆炸
        processTNTArrow()
    }
}

// 一个集合，暂存了所有被标记为 TNT 箭的箭实体
val tntArrow = HashSet<Arrow>()

fun onArrowShot(player: ServerPlayer, arrow: Arrow) {
    tell(player, Component.empty() + "你手中的武器是: " + player[Weapon.MainHand]?.itemName)
    // 这支箭是由 TNT 弓射出的，将会在击中地面后爆炸
    if (player.mainHandItem.nbt["tnt"](false)) {
        tntArrow.add(arrow)
    }
}

fun processTNTArrow() {
    val iterator = tntArrow.iterator()
    while (iterator.hasNext()) {
        val arrow = iterator.next()

        // 通过检查 NBT 数据来检查箭是否击中地面
        if (getEntityNbt(arrow).getBooleanOr("inGround", false)) {
            // 让箭爆炸
            // 这个方法来自原版代码
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
            // 爆炸后移除箭实体
            arrow.kill(arrow.level() as ServerLevel)
        }
    }
}
```
