# Fabric and NeoForge

Fabric and NeoForge run Katton as a client/server mod inside the Minecraft process. That gives scripts direct access to Minecraft internals, registries, rendering, and configuration-phase networking.

## Shared Mod Features

| Feature | Notes |
|---|---|
| Client scripts | Phase-aware `@ClientScriptEntrypoint` functions run on the client. |
| Registry mutation | Items, blocks, entities, components, particles, sounds, tabs, and renderers can be registered. |
| Server pack sync | Full login snapshot during configuration plus revisioned live updates after successful reloads. |
| Script Play networking | Reloadable logical channels carry binary data between Katton clients and servers. |
| Runtime injection | ByteBuddy/ASM injection APIs are available. |
| Rendering | HUD callbacks, camera scenes, particles, geometry, and post effects are available. |
| Script Pack UI | Press `K` by default on the client. |

## Main Differences

| Area | Fabric | NeoForge |
|---|---|---|
| Server send timing | `ServerConfigurationPacketListenerImpl` init return mixin. | After NeoForge connection channel negotiation. |
| Client registry hook | Fabric registry sync handler. | Vanilla client configuration listener registry data hook. |
| Event source | Fabric API callbacks. | NeoForge event bus. |
| Extra access | Access widener. | Access transformers plus mixins. |

## Mod Dependencies

Every pack manifest must include a `dependencies` array. Declare the mod ID, applicable loader, side, and version range before importing another mod's API:

```json
{
  "dependencies": [
    {
      "id": "create",
      "version": ">=6.0.0",
      "required": true,
      "platforms": ["fabric", "neoforge"],
      "environment": "both"
    }
  ]
}
```

Katton validates the dependency on the side where the pack runs. It adds the declared mod and required transitive mod dependencies to the compiler classpath; runtime execution uses the active loader's transformed classes. See [Manifest, Dependencies, and Signing](../architecture/manifest.md).

## Client Timing and Sync

Global client setup uses `ClientPhase.READY`. World and synced packs use `REGISTRY_SETUP` for work that must precede registry validation and `JOINED` for work that needs a player and level.

Login sync uses configuration revision `0` and sends a complete snapshot without a request round trip. Later successful server reloads publish play-phase revisions; clients request only changed packs, stage and precompile the complete snapshot, and acknowledge activation. See [Script Pack Sync and Trust](../architecture/pack-sync.md).

For script-defined client/server messages during Play, use [Play Networking](../guide/play-networking.md). Its logical channels are separate from Katton's script-pack synchronization protocol.
