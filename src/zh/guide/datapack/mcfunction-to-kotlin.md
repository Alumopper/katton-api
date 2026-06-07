# 把 mcfunction 翻译成 Kotlin

大多数 `.mcfunction` 都是一串顺序执行的命令。Kotlin 当然也能顺序执行。但其真正的优势是，我们拥有局部变量值、简洁的分支和循环逻辑语句，并能在一个文件中编写多个函数。

## 命令到函数

数据包：

```text
scoreboard players set test myscore 1
```

Katton：

<!--@include: ../../../example/quickstart/for-cber/01.md-->

## 条件

数据包里常见的 `execute if ... run function ...` 在 Kotlin 中通常就是 `if`。

```kotlin
fun rewardIfReady(score: Int) {
    if (score >= 10) {
        println("Reward unlocked")
    }
}
```

如果条件来自游戏中的运行时状态，那就先读取实体、计分板、NBT 或事件参数的值，再进行判断。

## 循环

数据包循环经常需要递归 `function`。Kotlin 可以直接循环和遍历集合。

```kotlin
fun announceNames(names: List<String>) {
    for (name in names) {
        println("Loaded player $name")
    }
}
```

如果要遍历实体，先构建选择器或使用事件参数，再处理返回的对象。见 [选择器与实体访问](./selectors.md)。

## 复用逻辑

你可以把重复的逻辑抽象成为可以重复使用的 kotlin 函数。

```kotlin
fun clampWave(value: Int): Int {
    return value.coerceIn(1, 10)
}
```

## 入门时的提示

如果一行命令只是为了模拟编程能力，就翻译成 Kotlin。如果一行命令本身就是直接的 Minecraft 操作，就调用 Katton helper，或者先保留在原数据包函数里。
