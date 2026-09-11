# Manifest, Dependencies, and Signing

Every script pack needs a `manifest.json` at its root (or at the root of its ZIP archive). The `dependencies` array is required, even when the pack has no external dependencies. Every other field has a default.

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
  "packDependencies": [
    {
      "id": "shared-behavior",
      "version": ">=1.0",
      "required": true,
      "export": false
    }
  ],
  "signature": {
    "algorithm": "Ed25519",
    "payloadVersion": 3,
    "keyId": "example-server-key",
    "publicKey": "base64-x509-public-key",
    "signature": "base64-signature"
  },
  "config": {
    "difficulty": "normal"
  }
}
```

Use this minimal manifest when no mod, plugin, or pack API is needed:

```json
{
  "dependencies": []
}
```

## Pack Fields

| Field | Default | Meaning |
|---|---|---|
| `dependencies` | **required** | External mod/plugin dependencies. Use `[]` when there are none. |
| `packDependencies` | `[]` | Other Katton script packs this pack depends on. See [Script Pack Dependencies](../guide/pack-dependencies.md). |
| `id` | folder or ZIP/JAR name | Stable pack identifier used in sync IDs and logs. Declare it explicitly for packs deployed through the IDE bridge. |
| `name` | `id` | Display name in the UI. |
| `version` | `"unknown"` | Human-readable pack version. |
| `description` | `""` | Display description. |
| `authors` | `[]` | Author names. |
| `enabled` | `true` | Default enabled state when no local state file exists. |
| `clientSync` | `true` | Whether Fabric/NeoForge servers include this pack in client sync. |
| `signature` | absent | Optional Ed25519 metadata for remote client-synced packs. |
| `config` | `{}` | Primitive string/number/boolean config values exposed in the parsed manifest. |

Missing `dependencies`, a non-array value, or an invalid dependency object makes the manifest invalid. This requirement is identical on Fabric, NeoForge, and Paper.

## External Dependency Fields

| Field | Default | Meaning |
|---|---|---|
| `id` | **required** | Fabric mod ID, NeoForge mod ID, or Paper plugin name. |
| `platforms` | **required** | Non-empty subset of `fabric`, `neoforge`, and `paper`. |
| `version` | `"*"` | Accepted dependency version expression. |
| `required` | `true` | When `true`, an unavailable or incompatible dependency disables this pack. |
| `environment` | `"both"` | `server`, `client`, or `both`. |

Declarations of the same dependency ID may not overlap on both platform and environment. Katton rejects a manifest that declares the same mod for the same platform and side twice.

## Pack Dependency Fields

| Field | Default | Meaning |
|---|---|---|
| `id` | **required** | Target pack manifest `id`, or a scope-qualified sync ID such as `world:shared-behavior`. |
| `version` | `"*"` | Accepted version expression for the target pack. |
| `required` | `true` | When `true`, a missing, disabled, ambiguous, or incompatible target rejects this pack. |
| `export` | `false` | When `true`, the target's own dependencies become visible to this pack's consumers. |

Direct dependencies expose their compiled output and Kotlin metadata. Transitive dependencies stay private unless exported. Global packs may only depend on global packs, and remote synchronized packs may only depend on other synchronized packs. See [Script Pack Dependencies](../guide/pack-dependencies.md) for the full semantics and a worked example.

## Version Expressions

Both `dependencies` and `packDependencies` accept the same version syntax:

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

## Pack Content

As of Alpha 0.5.0, **every file in a pack is content except `manifest.json` and the local `.kattonpack.state.json`**. Additional files such as audio, README files, and configuration data are hashed, signed, synchronized to clients, and counted against the per-file and per-pack limits.

```text
kattonpacks/gameplay/           # or gameplay.zip
├── manifest.json               # excluded: the manifest itself
├── .kattonpack.state.json      # excluded: local enabled state
├── Gameplay.kt                 # source
├── helpers/Math.java           # source
├── libs/utility-1.0.jar        # library
├── assets/gameplay/...         # client resources
├── data/gameplay/...           # server data
└── audio/theme.mp3             # ordinary content
```

- `.kattonpack.state.json` is excluded **by file name at any depth and in any casing**, so the local state file can never be distributed.
- `.kt` and `.java` files are compiled as sources. Direct `libs/*.jar` files are libraries: they participate in compilation, hashing, signing, and sync, but Katton never scans their entrypoints or exports them to other packs.
- Files under `assets/` become part of Katton's generated client resource pack, and files under `data/` become part of its generated required server data pack. `pack.mcmeta` is not required for either.
- Everything else is ordinary content. Do not place editor, VCS, or build output inside a pack directory: those files would be distributed as well.

### Pack Containers

`kattonpacks/` discovers directories and `.zip` files. A ZIP's root is the pack root and must contain `manifest.json`; do not wrap the contents in another folder. Both containers produce the same logical files, hashes, and network representation, so a signed manifest is valid in either one.

Executable JAR packs are **not** supported. Move sources into a directory or ZIP, and put library dependencies in the direct `libs/` directory.

### Limits

| Limit | Value |
|---|---|
| Files per pack | 4,096 |
| Size per file | 16 MiB |
| Total content per pack | 64 MiB (including `manifest.json`) |
| `manifest.json` size | 1 MiB |
| Files per network bundle | 16,384 |
| Bundle content | 64 MiB |
| Directory entries scanned per pack | 16,384 |

Paths must be portable: traversal segments (`..`), absolute paths, backslashes, NUL bytes, Windows-reserved names and characters, trailing dots or spaces, and case- or Unicode-normalization collisions are rejected before a Linux server can send a pack to other clients. Symbolic links inside a directory pack and inside a ZIP are forbidden. ZIP path/directory conflicts and split archives are rejected.

Because the accepted file set changed in 0.5.0, packs that contain non-source content must be re-signed with the current [Katton-Sign](https://github.com/Alumopper/Katton-Sign) plugin and are re-synchronized to clients once.

## Platform Resolution

On Fabric and NeoForge, Katton resolves dependency metadata from the active mod loader. The declared mod and its required transitive dependency closure are available during script compilation; execution uses the loader's real transformed classes.

On Paper, Katton resolves dependencies through the server `PluginManager`. Plugin dependencies are available only from `ServerPhase.READY`, when plugins have been loaded and enabled. The compiler uses each plugin's actual jar or class directory and runtime calls delegate to its existing classloader. This design does not require mirroring pack dependencies in Katton's `paper-plugin.yml`; each script pack owns its declarations in `manifest.json`.

Declare every plugin whose classes the script imports. If two declared plugins export the same class name, Katton rejects the pack and reports the ambiguity.

## Local State

When the Script Pack UI toggles a pack, Katton writes `.kattonpack.state.json` next to directory packs:

```json
{ "enabled": false }
```

For ZIP packs, the state file is `<pack>.zip.state.json` next to the archive. State files override the manifest's `enabled` value and are never treated as pack content, hashed, signed, or synchronized.

## Hashes

Katton maintains two SHA-256 hashes per pack.

The **content hash** covers every logical pack file and is used for sync and resource/data reload decisions:

1. The manifest's raw UTF-8 bytes
2. File count and sorted relative path plus bytes for `.kt` sources
3. The same for `.java` sources
4. The same for `assets/**`
5. The same for `data/**`
6. The same for `libs/*.jar`
7. The same for every other content file

Each field is length-framed and each category records its file count, so binary content cannot be reinterpreted as a path or an extra file. The current framing is `katton-logical-pack-hash-v3`. Directory and ZIP packs of the same logical content produce the same hash.

The **code hash** covers the manifest with its `signature` removed, the Kotlin sources, the Java sources, and the libraries. Asset, data, audio, and other content changes therefore do not invalidate compiled scripts.

Upgrading Katton invalidates an old cache entry once; Katton rebuilds it automatically.

## Signature Payload

Remote signatures use Ed25519. The signed payload is versioned and includes:

- A Katton signature format version (currently **3**)
- The pack sync ID and scope
- A file count
- Every sorted relative path and content pair, including assets, data, libraries, and other content

The framing is unambiguous even when binary content contains zero bytes. Legacy payload versions 1 and 2 are rejected; re-sign the pack with the current plugin to migrate. `publicKey` is an X.509-encoded Ed25519 public key in Base64. After a user trusts a server or key, Katton stores the trusted public key in `<gameDir>/.katton/remote-script-trust.json`; if a trusted `keyId` later presents a different embedded public key, verification fails.

Unsigned remote packs remain compatible, but users still see a blocking trust prompt before execution. Signed packs add tamper-evident author/key verification. See [Script Pack Sync and Trust](./pack-sync.md) for the transfer protocol and [Script Packs](../guide/scripts.md) for the signing workflow.
