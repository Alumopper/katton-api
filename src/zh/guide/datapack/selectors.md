# 目标选择器与实体访问

数据包通常用 `@a`、`@e[type=zombie,distance=..16]`、`@s` 这样的选择器识别实体。Katton 支持这种风格，但一旦选中实体，你就可以直接操作真实实体对象，并且在之后持久保存对这个对象的引用。

## 构建选择器

<!--@include: ../../../example/quickstart/for-cber/02.md-->

选择器仍然需要命令执行源，因为原版选择器依赖世界、位置、权限和维度上下文。

## 对比

| 数据包 | Katton |
| --- | --- |
| 选中实体，然后对每个实体执行命令 | 选中实体，然后循环处理对象 |
| 把中间值存进计分板 | 把局部值存进 Kotlin 变量 |
| 用 `execute as ... at ...` 切换上下文 | 把实体或世界直接传给函数 |
| 在多个函数里重复选择器过滤 | 写一个返回实体列表的辅助函数 |

## 常用模式

如果选择器会复用，把它包成有名字的函数：

```kotlin
fun nearbyTaggedCreepers(): List<Entity> {
    val selector = EntitySelectorBuilder.allEntities()
        .type(EntityType.CREEPER)
        .tag("charged_target")
        .distanceBelow(16.0)
        .create()

    val source = requireServer().createCommandSourceStack()
    return selector.findEntities(source)
}
```

这样后续逻辑就能表达意图，而不是重复选择器语法：

```kotlin
for (creeper in nearbyTaggedCreepers()) {
    println("Found ${creeper.name.string}")
}
```

## 提示

如果事件参数已经给了你玩家、方块、实体或世界，就直接使用它。重复选择通常比直接使用事件对象更慢，也更不精确。

事件驱动写法见 [事件](../events.md)。

