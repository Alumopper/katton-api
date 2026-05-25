# Platforms

Katton targets the same script authoring model across Fabric, NeoForge, and Paper, but the platform boundaries are different.

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

