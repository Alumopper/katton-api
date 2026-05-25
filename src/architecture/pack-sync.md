# Script Pack Sync and Trust

Fabric and NeoForge multiplayer servers can send script packs to connecting clients during configuration. Paper does not have client sync because it has no Katton client.

## Configuration Flow

1. Server collects enabled packs whose manifest has `"clientSync": true`.
2. Server sends `ScriptPackHashListPacket`.
3. If the list is non-empty, server immediately sends `ScriptPackBundlePacket` with the full bundle snapshot.
4. Client verifies signatures before writing files to cache.
5. Client verifies cached hashes against the announced hash list.
6. Unknown servers or signing keys open a blocking trust screen.
7. Trusted packs trigger `reloadClientScripts()` on the render thread before registry validation continues.

Katton avoids an extra request/response round-trip during login because registry validation is timing-sensitive: client-side registry entries from synced scripts must exist before the client compares registries with the server.

## Cache Layout

Remote packs are cached under:

```text
<gameDir>/serverpacks/<sha256(serverAddress)>/<base64url(syncId)>/
```

The trust store lives at:

```text
<gameDir>/.katton/remote-script-trust.json
```

The trust store records trusted servers and trusted signing keys. If a trusted `keyId` later presents a different embedded public key, Katton rejects the remote scripts.

## Security Model

Remote Katton scripts are arbitrary JVM code inside the Minecraft client. Hashes detect cache mismatches; signatures verify pack content against a key; neither proves a server is safe. The trust prompt is intentionally blocking so the player must explicitly approve remote execution.

Use `"clientSync": false` for server-only packs that do not contain client entrypoints, registry definitions needed by the client, or rendering code.

