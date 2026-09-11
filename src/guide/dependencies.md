# Using Other Mods and Plugins

A script pack must declare every external mod or Paper plugin whose API it uses. The declaration controls runtime validation and classloading; your development project separately needs that API on its compile classpath.

> [!TIP]
> This page covers **external** mods and plugins. To share Kotlin types and state between two Katton packs, use [`packDependencies`](./pack-dependencies.md) instead. The two declarations are independent: a pack can have both.

## Required Integration

This manifest accepts Create 6.x on Fabric or NeoForge:

<!--@include: ../example/guide/dependencies/01.md-->

Katton validates only entries applicable to the current platform and side. If a required dependency is missing, disabled, or outside the accepted version range, the pack is excluded before compilation.

Supported version expressions include exact versions, comparisons, whitespace/comma-separated AND conditions, and `||` alternatives.

## Optional Integration

Set `required` to `false` when the base pack can run without the integration:

```json
{
  "dependencies": [
    {
      "id": "spark",
      "version": "*",
      "required": false,
      "platforms": ["fabric", "neoforge", "paper"],
      "environment": "server"
    }
  ]
}
```

Then branch before using the optional API:

<!--@include: ../example/guide/dependencies/02.md-->

`dependencies.require(id)` is useful after an explicit availability check or when a clearer runtime error is desired. It does not replace a required manifest declaration.

## Typed Paper Plugin Calls

Paper dependencies use the plugin name known to `PluginManager`:

```json
{
  "dependencies": [
    {
      "id": "PlaceholderAPI",
      "version": "*",
      "required": true,
      "platforms": ["paper"],
      "environment": "server"
    }
  ]
}
```

After declaring it, a world script can import and call the plugin API normally:

<!--@include: ../example/guide/dependencies/03.md-->

Katton compiles against the plugin's real jar or class directory and delegates runtime loading to its existing classloader. Typed calls do not use reflection per invocation. Paper dependencies are available only at `ServerPhase.READY`; do not use plugin classes from `BOOTSTRAP`.

## Development Classpath

The manifest does not download an API for IntelliJ or Gradle. Use one of these approaches in the script-pack project:

```kotlin
dependencies {
    // Preferred when the API has a Maven publication:
    compileOnly("group:artifact:version")

    // Or place the dependency jar in lib/:
    compileOnly(fileTree("lib") { include("*.jar") })
}
```

The template generator always creates the `lib/*.jar` compile-only fallback and lets you add world-pack dependencies before downloading the project. Its empty global pack starts with `dependencies: []`; add dependencies to that manifest later only if global scripts use them.


## Sharing Code Between Katton Packs

`dependencies` describes installed platform software. A separate array, `packDependencies`, describes other Katton packs:

```json
{
  "id": "my_consumer",
  "version": "1.0.0",
  "dependencies": [],
  "packDependencies": [
    { "id": "shared-behavior", "version": ">=1.0", "required": true, "export": false }
  ]
}
```

Both arrays coexist in one manifest. Use `dependencies` to call Create, WorldEdit, or another mod/plugin API; use `packDependencies` to import Kotlin classes from another pack and share its state across reloads.

## Platform Behavior

| Platform | Resolution and execution |
|---|---|
| Fabric | Resolves mod IDs through Fabric Loader and includes required transitive mod dependencies. |
| NeoForge | Resolves mod IDs through NeoForge and includes required transitive mod dependencies. |
| Paper | Resolves enabled plugins through `PluginManager` at `ServerPhase.READY` and delegates to their classloaders. |

The receiving multiplayer client validates its own applicable dependencies. A server-side installation does not prove the matching client mod is present.

For the full schema and version syntax, see [Manifest, Dependencies, and Signing](../architecture/manifest.md).
