# Platforms

Katton targets the same script authoring model across Fabric, NeoForge, and Paper, but the platform boundaries are different.

## Supported Minecraft Versions

| Minecraft | Fabric API | NeoForge | Paper development bundle |
|---|---|---|---|
| `26.1.2` | `0.144.0+26.1` | `26.1.2.30-beta` | `26.1.2.build.71-stable` |
| `26.2` | `0.154.0+26.2` | `26.2.0.7-beta` | `26.2.build.41-alpha` |

All targets require Java 25. The [template generator](../template/) keeps the Katton Maven coordinate and platform dependency aligned with the selected Minecraft version.

## Capability Matrix

| Capability | Fabric | NeoForge | Paper |
|---|:---:|:---:|:---:|
| Server scripts | Yes | Yes | Yes |
| Client scripts | Yes | Yes | No |
| Script pack hot reload | Yes | Yes | Yes |
| Server-to-client script sync | Yes | Yes | No |
| Registry mutation | Yes | Yes | No |
| Runtime code injection | Yes | Yes | No |
| Client rendering API | Yes | Yes | No |
| Script Pack UI | Yes | Yes | No |
| Paper/Folia scheduler API | No | No | Yes |
| Managed native events | Yes | Yes | Yes |

Use [Paper](./paper.md) when you want a standard server plugin with Bukkit/Paper events and no client mod requirement. Use Fabric or NeoForge when scripts need custom registry content, rendering, client sync, or bytecode injection.
