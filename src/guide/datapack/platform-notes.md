# Platform Notes

Katton targets Fabric, NeoForge, and Paper, but datapack developers should expect different ceilings on each platform.

## Quick Matrix

| Capability | Fabric | NeoForge | Paper |
| --- | :---: | :---: | :---: |
| Server scripts | Yes | Yes | Yes |
| Datapack-caller helpers | Yes | Yes | Yes |
| Events | Yes | Yes | Yes |
| Datapack mutations | Yes | Yes | Yes |
| Custom registries | Yes | Yes | No |
| Client scripts | Yes | Yes | No |
| Client rendering | Yes | Yes | No |
| Server-to-client script sync | Yes | Yes | No |

## Fabric and NeoForge

Use Fabric or NeoForge when you want the full Katton feature set: registry entries, client HUDs, renderers, synced script packs, and mod-level APIs.

These platforms are best when your datapack idea is starting to behave like a real mod.

## Paper

Use Paper when you want server-side scripting for a plugin server. Paper is a strong fit for command-like behavior, event logic, datapack mutations, and Bukkit ecosystem integration.

Do not plan Paper scripts around custom client content. A vanilla client cannot receive Katton-defined items, blocks, entities, models, or renderers from a Paper server.

## Choosing a Target

If your migration mostly replaces command logic, any platform can work. If your migration adds custom content or client visuals, target Fabric or NeoForge.

