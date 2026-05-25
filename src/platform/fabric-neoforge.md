# Fabric and NeoForge

Fabric and NeoForge run Katton as a client/server mod inside the Minecraft process. That gives scripts direct access to Minecraft internals, registries, rendering, and configuration-phase networking.

## Shared Mod Features

| Feature | Notes |
|---|---|
| Client scripts | `@ClientScriptEntrypoint` functions run on the client. |
| Registry mutation | Items, blocks, entities, components, particles, sounds, tabs, and renderers can be registered. |
| Server pack sync | Multiplayer servers send client-synced packs during configuration. |
| Runtime injection | ByteBuddy/ASM injection APIs are available. |
| Rendering | HUD and world render callbacks are available. |
| Script Pack UI | Press `K` by default on the client. |

## Main Differences

| Area | Fabric | NeoForge |
|---|---|---|
| Server send timing | `ServerConfigurationPacketListenerImpl` init return mixin. | After NeoForge connection channel negotiation. |
| Client registry hook | Fabric registry sync handler. | Vanilla client configuration listener registry data hook. |
| Event source | Fabric API callbacks. | NeoForge event bus. |
| Extra access | Access widener. | Access transformers plus mixins. |

