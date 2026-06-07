# Going Beyond Datapacks

After the first migration, Katton becomes more than a nicer way to call commands. It lets you use mod-level hooks while keeping the fast edit-reload loop that datapack developers like.

## Events Instead of Polling

Datapacks often poll because they cannot subscribe to every game event directly. Katton can react to events such as player joins, damage, block changes, loot generation, chat, and world ticks.

See [Events](../events.md) for the event list.

## Registries

On Fabric and NeoForge, Katton can register custom content from scripts:

- items;
- blocks;
- entities;
- effects;
- particles;
- sounds;
- data components;
- creative tabs.

Start with [Registry Overview](../registry/) and the [Entity Tutorial](../registry/entity.md).

> [!NOTE]
> Registry APIs are not available on Paper because Paper servers do not control a modded client registry.

## Client Features

Fabric and NeoForge script packs can include client-side entrypoints for HUD overlays, world rendering, post effects, and script pack UI workflows.

See [Rendering](../render/) and [Script Pack UI](../pack-ui.md).

## Runtime Injection

When events and exposed APIs are not enough, Katton can inject into runtime methods. Treat this as an advanced tool: powerful, but easier to misuse than events or normal APIs.

See [Code Injection](../injection.md).

## The Migration Payoff

The best reason to move beyond datapacks is not "more power" by itself. It is simpler code: fewer command strings, fewer fake variables, fewer recursive schedules, and more direct access to the game objects you are trying to change.

