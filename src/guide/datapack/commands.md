# Calling Vanilla Commands

Katton's datapack-caller APIs live in `top.katton.api.dpcaller`. They are designed for datapack developers who already know vanilla commands and want a familiar bridge into Kotlin.

Use these helpers when the thing you are doing is still naturally a Minecraft command: changing a scoreboard, sending chat text, applying effects, teleporting, summoning particles, or running a vanilla function.

## Basic Example

<!--@include: ../../example/quickstart/for-cber/01.md-->

In a datapack, the command parser handles everything as text. In Katton, you call a function with typed arguments. That gives you editor completion, normal variables, and fewer quoting problems.

## When to Use Command Helpers

| Use a command helper when... | Prefer Kotlin or events when... |
| --- | --- |
| You are doing a direct vanilla operation | You are calculating, branching, or looping |
| You need behavior that already exists as a command | You want to react to an in-game event |
| You are migrating a known-good mcfunction gradually | You need direct access to entity or server objects |

## API Reference

Start with the common datapack-caller pages:

- [Misc helpers](../../api/common/dpcaller/KattonMiscApi.md)
- [Scoreboard helpers](../../api/common/dpcaller/KattonScoreboardApi.md)
- [Entity helpers](../../api/common/dpcaller/KattonEntityApi.md)
- [Player helpers](../../api/common/dpcaller/KattonPlayerApi.md)
- [World helpers](../../api/common/dpcaller/KattonWorldApi.md)
- [Server helpers](../../api/common/dpcaller/KattonServerApi.md)

