# Selectors and Entity Access

Datapacks usually identify entities with selectors such as `@a`, `@e[type=zombie,distance=..16]`, or `@s`. Katton supports that style, but once entities are selected, you can work with real entity objects instead of passing them through more command strings.

## Build a Selector

<!--@include: ../../example/quickstart/for-cber/02.md-->

The selector still needs a command source because vanilla selectors depend on world, position, permission, and dimension context.

## Selector Thinking vs Object Thinking

| Datapack mindset | Katton mindset |
| --- | --- |
| Select entities, run a command on each one | Select entities, loop over objects |
| Store intermediate values in scoreboards | Store local values in Kotlin variables |
| Use `execute as ... at ...` to change context | Pass the entity or level directly to a function |
| Repeat selector filters in many functions | Build helper functions that return selected entities |

## Useful Pattern

Wrap selectors in named functions when you reuse them:

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

Then the rest of your script can talk about intent instead of selector syntax:

```kotlin
for (creeper in nearbyTaggedCreepers()) {
    println("Found ${creeper.name.string}")
}
```

## When Not to Select

If an event already gives you the player, block, entity, or world, use that event argument directly. Selecting again is usually slower and less precise than using the object Katton has already handed you.

See [Events](../events.md) for event-driven alternatives.

