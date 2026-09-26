# IDE Development Bridge

Katton Alpha 0.5.0 adds an optional **loopback HTTP bridge** between a running game and the [Katton IDEA plugin](https://github.com/Alumopper/Katton-IDEA). It lets the IDE discover your instance, deploy world script packs, reload them through the normal serialized reload path, and stream compiler diagnostics and log output back into the IDE — without manually copying files or switching windows.

> [!IMPORTANT]
> The bridge is **disabled by default** and only listens on `127.0.0.1`. Every request needs a per-session bearer token. It never enables JDWP and never changes a remote server.

## Enabling the Bridge

Open the in-game **Script Pack UI** (press **K** by default) and click the **IDE** button, or run one of these commands:

```text
/katton dev enable
/katton dev disable
```

| Platform | Who can run `/katton dev` |
|---|---|
| Fabric / NeoForge | Gamemaster permission (`/katton reload` level) |
| Paper / Folia | `katton.admin` permission or OP |

Enabling prints the chosen localhost port, for example:

```text
Katton development connection enabled on localhost:52143. Connect from IDEA.
```

Katton 0.5.1 can enable the bridge at launch. Add `-Dkatton.dev.autoEnable=true` to the JVM arguments, or set `KATTON_DEV_AUTO_ENABLE=true` in the process environment. This is an opt-in setting; the bridge stays disabled when neither value is set. An integrated Fabric server also closes the bridge when it stops.

The bridge is disabled automatically when the game process shuts down.

## How Discovery Works

When enabled, Katton writes one discovery record per running instance under the current user's home directory:

```text
~/.katton/dev/instances/<sessionId>.json
```

The file contains the protocol version, session ID, process ID, loopback port, and bearer token, and is created with owner-only permissions where the filesystem supports POSIX modes. The IDEA plugin watches that directory, so it can list running instances, pick the one you want, and identify the currently loaded world.

A **client attached to a remote multiplayer server has no deployment authority**: only a local integrated server or a locally hosted dedicated server is writable. Remote server packs are read-only from the IDE.

## The Development Loop

1. Launch the game or local server with Katton and enter the world whose packs you want to work on.
2. Enable the bridge once (`/katton dev enable`, or the **IDE** button).
3. Connect from the Katton IDEA plugin. It queries the instance, shows the current pack list, and can send a complete script snapshot.
4. Edit your `.kt` / `.java` files in the IDE and deploy. Writes and in-game `/katton reload` share `ScriptReloadManager`'s serialization, so a deployment cannot race a manual reload.
5. Read structured Kotlin/Java compiler diagnostics in the IDE. Normal game logs keep flowing to the console as before.

You can also query the running instance from IDEA before deploying. The preflight step validates the candidate snapshot — including dependency resolution, per-bundle size limits, and platform capabilities — and reports whether an apply is `READY` or needs a `RESTART_REQUIRED`.

## What Can Be Hot-Applied

| Change | Behavior |
|---|---|
| World pack code | Hot-applied through the normal serialized reload. |
| World pack `assets/**` / `data/**` | Applied with the pack reload. |
| Resource-only change to an already loaded global pack | Can use the existing resource reload path. |
| Global pack **code** | Not submitted by the bridge. Install it externally and restart, then reconnect. |
| Registry or data changes on a platform that forbids them | Reported by the instance query and rejected at preflight. |

Paper and Folia report their capability limits through the instance query. For example, a runtime without script-pack data reload rejects a deployment that adds `data/**` files instead of partially activating it, and Paper rejects client assets because it has no Katton client.

## Bridging and Debugging

The bridge deploys scripts and streams diagnostics; it is **not** a debugger. To set breakpoints, attach a standard JVM remote debugger as described in [Get Started](./get-started.md#debugging). The instance query exposes the active JDWP address as `debugAddress` when the JVM was started with `-agentlib:jdwp=...`, so the IDE can offer a matching attach configuration.

## HTTP Protocol (v1)

Third-party tools can talk to the same bridge. It listens on `127.0.0.1` with a random port and requires `Authorization: Bearer <token>` on every request. Requests that carry an `Origin` header, or that arrive from a non-loopback address, are rejected with `401`.

| Method and path | Purpose |
|---|---|
| `GET /v1/instance` | Instance snapshot: versions, directories, capabilities, pack list, busy state. |
| `GET /v1/instance?refresh=true` | Re-reads packs from disk and adds the on-disk versus active hash comparison. |
| `GET /v1/events?after=<cursor>` | Diagnostics and captured log entries after the given cursor. |
| `GET /v1/operations/<operationId>` | Result of an earlier `apply` request. |
| `POST /v1/preflight` | Validates a candidate deployment without applying it. |
| `POST /v1/apply` | Stages and applies a deployment. Responds `202` with an operation ID. |
| `POST /v1/dependencies` | Resolves requested dependency IDs and returns their versions and file fingerprints. |

A deployment `POST` body is limited to 96 MiB. Re-sending an `apply` request with the same `operationId` returns the stored result instead of applying twice, so a transport timeout is safe to retry.

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| No instances appear in the IDE | The bridge is not enabled, or the IDE is watching a different user home directory. Enable it in the game, or use the 0.5.1 launch setting. |
| `Authentication required` | The token from the discovery file is stale. Toggle the bridge off and on, then reconnect. |
| `World changed; reconnect and select the target again` | The world was switched or reloaded after the IDE connected. Re-select the world. |
| `Another reload is active; retry after it completes` | A manual `/katton reload` or another deployment is running. Retry when it finishes. |
| `Global code changes require restart: ...` | The deployment touched global pack code. Install it externally and restart. |
| `This runtime does not support data-resource reload (Folia)` | The deployment adds `data/**` files, which Folia cannot mount. |

For the full toolchain (IDEA plugin, `top.katton.dev` Gradle plugin, templates, and examples), see [Katton-IDEA](https://github.com/Alumopper/Katton-IDEA).
