# Script Pack Sync and Trust

Fabric and NeoForge multiplayer servers keep client script packs synchronized both during login and after successful server hot reloads. Paper has no Katton client and therefore no client sync.

The current wire protocol is **v4**. A peer with an incompatible protocol is rejected during the configuration handshake with `Incompatible Katton pack protocol; update client/server and rebuild the v4 cache`. The server bucket cache lives in `serverpacks-v4`, so an older `serverpacks` directory is ignored and rebuilt rather than reused.

## What Travels

A synchronized pack is its complete logical content: sources, `assets/**`, `data/**`, direct `libs/*.jar` files, audio files, and any other content. Only `manifest.json` is handled separately (as the manifest) and the local `.kattonpack.state.json` is never pack content. See [Manifest, Dependencies, and Signing](./manifest.md#pack-content) for the full content rules and limits.

Audio files shipped in a pack therefore need no separate download channel; they are ordinary signed content, and `AudioSource.packFile` resolves them from the cached revision. A single file is limited to 16 MiB, and a bundle carries at most 16,384 files and 64 MiB.

## Login: Configuration Revision 0

Login remains a configuration-phase operation because client registry setup must finish before registry validation:

1. The server collects enabled packs whose manifest has `"clientSync": true`.
2. It sends the complete hash snapshot as revision `0`.
3. When the snapshot is non-empty, it immediately sends the complete bundle without waiting for a request round trip.
4. The client verifies signatures, hashes, trust, and applicable client dependencies.
5. The client compiles and activates the snapshot before registry validation continues.

The hash snapshot is always sent, including when empty, so a client can deactivate stale packs from an earlier connection.

## Live Reload: Play-Phase Revisions

After every successful server hot reload, the server publishes a monotonically increasing play-phase revision to connected remote players:

1. The server sends a full hash snapshot for the new revision.
2. The client compares it with the active revision and requests only changed or missing packs.
3. Unchanged packs are copied into a staging snapshot; downloaded deltas are added after signature and hash verification.
4. The client validates manifest dependencies and precompiles the complete staged snapshot.
5. Only after preparation succeeds does the client activate it.
6. Every active `SERVER_CACHE` pack replays its entrypoints, including unchanged packs and entrypoints annotated with `replay = false`.
7. The client acknowledges success; a negative acknowledgement or a 30-second timeout disconnects that player.

Packs omitted from the new hash snapshot are deactivated. Empty snapshots are valid and deactivate every server-cache pack.

Activation is transactional: trust rejection, invalid signatures or hashes, incomplete downloads, dependency errors, and compilation failures leave the previous active revision running. Katton does not clear working client handlers until the candidate snapshot is ready.

Because pack-to-pack dependencies must live inside one synchronized set, a `SERVER_CACHE` pack can only depend on another `SERVER_CACHE` pack. A dependency that would reach outside the snapshot is rejected on the server before the revision is published.

Integrated singleplayer does not transfer an in-memory bundle to itself. The local client reloads directly from the same local packs, while dedicated-server clients use the network protocol above.

## Cache Layout

Configuration-time revision `0` uses the server bucket cache. Live revisions are staged under:

```text
<gameDir>/serverpacks-v4/<sha256(serverAddress)>/revisions/<revision>/<base64url(syncId)>/
```

Each cached pack directory contains its `manifest.json` and the same relative file layout as the source pack, so `AudioSource.packFile("audio/theme.mp3")` resolves against the cached revision.

The trust store lives at:

```text
<gameDir>/.katton/remote-script-trust.json
```

The trust store records trusted servers and trusted signing keys. If a trusted `keyId` later presents a different embedded public key, Katton rejects the remote scripts.

## Signatures and Hashes

Signatures use Ed25519 payload **version 3**, which length-frames the sync ID, scope, manifest JSON with `signature` removed, file count, and every sorted path/content pair. The framing is unambiguous even when binary content contains zero bytes. Legacy payload versions 1 and 2 are rejected; re-sign with the current [Katton-Sign](https://github.com/Alumopper/Katton-Sign) plugin to migrate.

The client verifies the signature before writing a pack to its cache, then verifies cached hashes against the announced hash list. Hashes detect cache mismatches; signatures verify pack content against a key. Neither proves that a server or script author is safe.

## Security Model

Remote Katton scripts are arbitrary JVM code inside the Minecraft client. The trust prompt is intentionally blocking so the player must explicitly approve remote execution.

The receiving client validates its own applicable manifest dependencies. A dependency installed on the server does not imply that the matching client mod exists.

Use `"clientSync": false` for server-only packs that do not contain client entrypoints, registry definitions needed by the client, resources, rendering code, or audio.
