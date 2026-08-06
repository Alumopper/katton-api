# Manifest, Dependencies, and Signing

Every script pack directory needs a `manifest.json`. The `dependencies` array is required, even when the pack has no external dependencies. Other fields have defaults.

```json
{
  "id": "example_pack",
  "name": "Example Pack",
  "version": "1.0.0",
  "description": "Example scripts for Katton",
  "authors": ["YourName"],
  "enabled": true,
  "clientSync": true,
  "dependencies": [
    {
      "id": "create",
      "version": ">=6.0.0",
      "required": true,
      "platforms": ["fabric", "neoforge"],
      "environment": "both"
    }
  ],
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

Use this minimal manifest when no mod or plugin API is needed:

```json
{
  "dependencies": []
}
```

## Pack Fields

| Field | Default | Meaning |
|---|---|---|
| `dependencies` | **required** | External mod/plugin dependencies. Use `[]` when there are none. |
| `id` | folder or jar name | Stable pack identifier used in sync IDs and logs. |
| `name` | `id` | Display name in the UI. |
| `version` | `"unknown"` | Human-readable pack version. |
| `description` | `""` | Display description. |
| `authors` | `[]` | Author names. |
| `enabled` | `true` | Default enabled state when no local state file exists. |
| `clientSync` | `true` | Whether Fabric/NeoForge servers include this pack in client sync. |
| `signature` | absent | Optional Ed25519 metadata for remote client-synced packs. |
| `config` | `{}` | Primitive string/number/boolean config values exposed in the parsed manifest. |

Missing `dependencies`, a non-array value, or an invalid dependency object makes the manifest invalid. This requirement is identical on Fabric, NeoForge, and Paper.

## Dependency Fields

| Field | Default | Meaning |
|---|---|---|
| `id` | **required** | Fabric mod ID, NeoForge mod ID, or Paper plugin name. |
| `platforms` | **required** | Non-empty subset of `fabric`, `neoforge`, and `paper`. |
| `version` | `"*"` | Accepted dependency version expression. |
| `required` | `true` | When `true`, an unavailable or incompatible dependency disables this pack. |
| `environment` | `"both"` | `server`, `client`, or `both`. |

Version expressions support:

- any version: `*`
- exact versions: `6.0.0` or `=6.0.0`
- comparisons: `>=6.0.0`, `<7.0.0`
- AND constraints separated by whitespace or commas: `>=6.0.0 <7.0.0`
- OR alternatives: `>=6.0.0 <7.0.0 || >=8.0.0`

Only dependencies applicable to the current platform and side are validated. A missing, disabled, or version-incompatible required dependency excludes the pack before compilation. Optional dependencies can be queried from script code:

```kotlin
import top.katton.api.dependencies

if (dependencies.isLoaded("create")) {
    println("Create ${dependencies.version("create")}")
}

val required = dependencies.require("create")
```

`require(id)` returns the resolved dependency or throws when it is not installed or enabled.

## Platform Resolution

On Fabric and NeoForge, Katton resolves dependency metadata from the active mod loader. The declared mod and its required transitive dependency closure are available during script compilation; execution uses the loader's real transformed classes.

On Paper, Katton resolves dependencies through the server `PluginManager`. Plugin dependencies are available only from `ServerPhase.READY`, when plugins have been loaded and enabled. The compiler uses each plugin's actual jar or class directory and runtime calls delegate to its existing classloader. This design does not require mirroring pack dependencies in Katton's `paper-plugin.yml`; each script pack owns its declarations in `manifest.json`.

Declare every plugin whose classes the script imports. If two declared plugins export the same class name, Katton rejects the pack and reports the ambiguity.

## Local State

When the Script Pack UI toggles a pack, Katton writes `.kattonpack.state.json` next to directory packs:

```json
{ "enabled": false }
```

For jar packs, the state file is `<pack>.jar.state.json` next to the jar. State files override the manifest's `enabled` value.

## Hashes

Directory pack hashes use SHA-256 over:

1. Raw `manifest.json` UTF-8 bytes
2. Sorted `.kt` relative paths and bytes
3. Sorted `.java` relative paths and bytes

Jar pack hashes use the manifest JSON plus the jar filename and jar bytes.

## Signature Payload

Remote signatures use Ed25519. The signed payload includes a Katton signature format version, sync ID, pack scope, manifest JSON with `signature` removed, and all synced file paths plus bytes in sorted order.

Unsigned remote packs remain compatible, but users still see a blocking trust prompt before execution. Signed packs add tamper-evident author/key verification.
