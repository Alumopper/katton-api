# Architecture

This section is for readers who want to understand why Katton reloads, syncs, and mutates content the way it does.

| Topic | What it explains |
|---|---|
| [Script Loading Lifecycle](./script-loading.md) | Initialization, reload order, and client/server execution timing. |
| [Script Pack Sync and Trust](./pack-sync.md) | Multiplayer pack sync, signatures, cache layout, and remote trust prompts. |
| [Manifest and Signing](./manifest.md) | `manifest.json`, local state files, hashes, `clientSync`, and Ed25519 signing. |
| [Registry Lifecycle](./registry-lifecycle.md) | Reloadable registry ownership, stale entries, and Paper limitations. |
