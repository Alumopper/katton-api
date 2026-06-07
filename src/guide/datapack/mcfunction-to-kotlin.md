# Translating mcfunction to Kotlin

Most `.mcfunction` files are written as a sequence of commands. Kotlin can still do that, but the real benefit is that you can name values, branch normally, loop normally, and split behavior into reusable functions.

## Command Chain to Function

Datapack:

```text
scoreboard players set test myscore 1
tellraw @a {"text":"Score set!"}
```

Katton:

<!--@include: ../../example/quickstart/for-cber/01.md-->

The important shift is not the syntax. It is that `main()` can now call any Kotlin code you write.

## Conditions

Datapack conditions often become `execute if ... run function ...`. In Kotlin, use `if`.

```kotlin
fun rewardIfReady(score: Int) {
    if (score >= 10) {
        println("Reward unlocked")
    }
}
```

For game-state checks, read the entity, scoreboard, NBT, or event argument first, then branch on normal values.

## Loops

Datapack loops usually need recursive `schedule function` calls or repeated command blocks. In Kotlin, loop over collections directly.

```kotlin
fun announceNames(names: List<String>) {
    for (name in names) {
        println("Loaded player $name")
    }
}
```

When looping over entities, first build a selector or use an event argument, then work with the returned objects. See [Selectors and Entity Access](./selectors.md).

## Reusable Logic

Instead of copying the same command block into many functions, extract a Kotlin function:

```kotlin
fun clampWave(value: Int): Int {
    return value.coerceIn(1, 10)
}
```

Use small functions for rules, calculations, and formatting. Keep command-like calls at the edges where they actually affect the world.

## A Practical Rule

If a line exists only to simulate programming, translate it into Kotlin. If a line is already a direct Minecraft operation, call a Katton helper or keep the original datapack function for now.
