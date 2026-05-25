# Manifest and Signing

Every script pack directory needs a `manifest.json`. Katton is tolerant: most fields have defaults, but explicit metadata makes logs, UI, and remote sync easier to reason about.

```json
{
  "id": "example_pack",
  "name": "Example Pack",
  "version": "1.0.0",
  "description": "Example scripts for Katton",
  "authors": ["YourName"],
  "enabled": true,
  "clientSync": true,
  "signature": {
    "algorithm": "Ed25519",
    "keyId": "example-server-key",
    "publicKey": "base64-x509-public-key",
    "signature": "base64-signature"
  },
  "config": {
    "difficulty": "normal"
  }
}
```

## Fields

| Field | Default | Meaning |
|---|---|---|
| `id` | folder or jar name | Stable pack identifier used in sync IDs and logs. |
| `name` | `id` | Display name in the UI. |
| `version` | `"unknown"` | Human-readable version. |
| `description` | `""` | Display description. |
| `authors` | `[]` | Author names. |
| `enabled` | `true` | Default enabled state when no local state file exists. |
| `clientSync` | `true` | Whether Fabric/NeoForge servers include this pack in client sync. |
| `signature` | absent | Optional Ed25519 metadata for remote client-synced packs. |
| `config` | `{}` | Primitive string/number/boolean config values exposed in the parsed manifest. |

## Local State

When the Script Pack UI toggles a pack, Katton writes `.kattonpack.state.json` next to directory packs:

```json
{ "enabled": false }
```

For jar packs, the state file is `<pack>.jar.state.json` next to the jar. State files override `manifest.json` `enabled`.

## Hashes

Directory pack hashes use SHA-256 over:

1. Raw `manifest.json` UTF-8 bytes
2. Sorted `.kt` relative paths and bytes
3. Sorted `.java` relative paths and bytes

Jar pack hashes use the manifest JSON plus the jar filename and jar bytes.

## Signature Payload

Remote signatures use Ed25519. The signed payload includes a Katton signature format version, sync ID, pack scope, manifest JSON with `signature` removed, and all synced file paths plus bytes in sorted order.

Unsigned remote packs remain compatible, but users still see a blocking trust prompt before execution. Signed packs add tamper-evident author/key verification.

