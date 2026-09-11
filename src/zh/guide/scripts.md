# 脚本包

Katton 把你的 Kotlin 与 Java 代码组织成**脚本包**。一个脚本包就是一个包含 `manifest.json` 和若干 `.kt` / `.java` 文件的文件夹（或 ZIP 压缩包）。脚本包是**不分端的**——同一个包可以同时给服务端和客户端用（Fabric 和 NeoForge），而且全部支持 **`/katton reload` 热重载**。

> [!NOTE]
> 在 Paper 上，脚本包仅为服务端。没有客户端，因此 `@ClientScriptEntrypoint` 和客户端 API 不可用。脚本从 `<serverDir>/kattonpacks/` 或 `<worldDir>/kattonpacks/` 加载。

## 包结构

脚本包放在 `kattonpacks` 目录下，Katton 会自动扫描：

```
# 全局 — 所有世界共享，加入或者退出世界并不会影响：
<游戏目录>/kattonpacks/<包名>/manifest.json
<游戏目录>/kattonpacks/<包名>/**/*.kt

# 世界 — 每个存档独立，首次重载时自动创建目录：
<世界目录>/kattonpacks/<包名>/manifest.json
<世界目录>/kattonpacks/<包名>/**/*.kt
```

- **全局**包提供进程级 `BOOTSTRAP`/`READY` 入口，所有存档共享，热重载时不会重放入口。
- **世界**包在服务端/客户端世界阶段运行并可重放——适合做地图专属脚本。

包内的源码文件可以随意嵌套子目录，Katton 会递归扫描整个目录树。入口函数可以放在根目录、`src/main/` 或任意位置。

包也可以携带非源码内容。从 Alpha 0.5.0 起，**除 `manifest.json` 和本地 `.kattonpack.state.json` 之外的所有文件都是包内容**，都会参与哈希、签名与同步：

```text
kattonpacks/my_pack/
├── manifest.json
├── MyPack.kt
├── helpers/Math.java
├── libs/utility-1.0.jar
├── assets/my_pack/textures/item/ruby.png
├── data/my_pack/recipe/ruby.json
└── audio/theme.mp3
```

直接位于 `libs/` 下的 `*.jar` 是私有库：参与编译、哈希、签名与同步，但 Katton 不会扫描其中的入口，也不会把它导出给其他包。`assets/` 会成为生成的客户端资源包，`data/` 会成为生成的必需服务端数据包，两者都不需要 `pack.mcmeta`。

### 包格式

| 格式 | 存在形式 | 说明 |
|---|---|---|
| **目录** | `kattonpacks/` 下的文件夹 | 适合开发：可在界面开关和重载。 |
| **ZIP** | `kattonpacks/` 下的 `.zip`，`manifest.json` 位于压缩包根目录 | 适合分发。先签名目录，再压缩其内容。 |

可执行 JAR 包不再支持。包内的 `.jar` 只有直接位于 `libs/` 时才是库。

## 脚本配置（`manifest.json`）

每个包需要在根目录放一个 `manifest.json` 才能被识别。`dependencies` 数组为必填项；不依赖其他模组或插件时写空数组。其余字段由 Katton 提供默认值：

<!--@include: ../../example/quickstart/pack-ui/01.md-->

| 字段            | 默认值         | 说明                                  |
|---------------|-------------|-------------------------------------|
| `dependencies` | **必填** | 模组/插件依赖；没有依赖时写 `[]` |
| `packDependencies` | `[]` | 此包依赖的其他 Katton 脚本包 |
| `id`          | 文件夹或 ZIP 名 | 唯一包标识符——用于同步、日志和命令 |
| `name`        | 同 `id`      | 给人看的显示名称（在包管理界面里显示） |
| `version`     | `"unknown"` | 版本号 |
| `description` | `""`        | 包的功能描述 |
| `authors`     | `[]`        | 作者名的数组 |
| `enabled`     | `true`      | `true` = 重载时加载，`false` = 跳过 |
| `clientSync`  | `true`      | 服务端是否会把该包同步给客户端（仅限 Fabric/NeoForge） |
| `signature`   | 无 | 远程客户端同步包的可选 Ed25519 签名元数据 |
| `config`      | `{}`        | 字符串/数字/布尔类型的简单包配置 |

依赖字段、脚本包之间的依赖、平台解析、签名细节和哈希输入见[清单、依赖与签名](../architecture/manifest.md)。如果要在多个包之间共享 Kotlin 类型与状态，见[脚本包依赖](./pack-dependencies.md)。

## 如何签名脚本包

签名插件现已迁移到独立的 [Katton-Sign](https://github.com/Alumopper/Katton-Sign) 仓库。插件 ID `top.katton.sign` 与版本 `1.0.0` 保持不变，已有工程无需改动。

在已应用该插件的 Gradle 项目中，先生成一对密钥：

```bash
./gradlew generateKattonSigningKey \
  -PkattonPrivateKey=keys/katton-signing-key.pem \
  -PkattonPublicKey=keys/katton-signing-key.pub
```

然后签名某个脚本包目录：

```bash
./gradlew signKattonPack \
  -PkattonPackDir=kattonpacks/example_pack \
  -PkattonPrivateKey=keys/katton-signing-key.pem \
  -PkattonPublicKey=keys/katton-signing-key.pub \
  -PkattonKeyId=example-server-key \
  -PkattonScope=world
```

`signKattonPack` 会重写该包的 `manifest.json`：移除旧的 `signature`，对当前 manifest 和所有分发文件按排序签名，然后写入 `algorithm`、`payloadVersion`、`keyId`、`publicKey` 与 `signature`。

- 签名载荷 **版本 3** 覆盖所有分发文件：源码、私有库、资源、数据、音频及其他内容。它不包含根目录的 `manifest.json`（清单在移除旧签名后单独参与签名）与 `.kattonpack.state.json`。
- 私钥不要提交到版本控制，也不要放进包目录。密钥生成任务会拒绝覆盖已有密钥。
- `kattonScope` 必须和同步时的包作用域一致（`world` 或 `global`），因为签名载荷包含包的 sync id。
- 要分发 ZIP 包，先签名目录，再压缩其内容并让 `manifest.json` 位于压缩包根目录。同一个已签名 manifest 在两种容器中都有效。

包含非源码内容（音频、README、配置数据）的包必须用当前插件重新签名，因为 0.5.0 改变了哪些文件算作内容。

## 状态文件（`.kattonpack.state.json`）

当你在游戏内界面（按 **K**）开关某个包时，Katton 会写一个本地状态文件：

```json
{ "enabled": false }
```

它优先级高于 `manifest.json` 里的 `enabled` 字段。删掉状态文件就能恢复 manifest 里的默认设置。该文件会在任意深度、任意大小写下按文件名排除，因此永远不会被哈希、签名或分发。ZIP 包使用压缩包旁边的 `<包名>.zip.state.json`。

## 入口函数

脚本是**不分端的**。同一个 `.kt` 文件可以同时包含服务端和客户端逻辑。注解会选择明确的执行阶段：

```kotlin
import top.katton.api.*
```

入口必须是顶层函数，可以无参数，也可以接收一个与所选阶段兼容的上下文参数：

```kotlin
@ServerScriptEntrypoint(ServerPhase.READY)
fun initMyCommands(context: ServerReadyContext) {
    println("服务器就绪，触发原因：${context.cause}")
}
```

```kotlin
@ClientScriptEntrypoint(ClientPhase.JOINED)
fun initMyHUD(context: ClientJoinedContext) {
    println("为 ${context.player.name.string} 初始化 HUD")
}
```

阶段与目录作用域的对应关系如下：

| 作用域 | 服务端阶段 | 客户端阶段 |
|---|---|---|
| `GLOBAL` | `BOOTSTRAP`、`READY` | `READY` |
| `WORLD` | `READY` | `REGISTRY_SETUP`、`JOINED` |
| `SERVER_CACHE` | — | `REGISTRY_SETUP`、`JOINED` |

`@ServerScriptEntrypoint` 默认使用 `BOOTSTRAP`，`@ClientScriptEntrypoint` 默认使用 `READY`，所以默认值都面向全局包。世界包应显式写出阶段。

两个注解都有 `replay: Boolean = true`。全局入口永不重放；世界入口遵循该值；多人同步的 `SERVER_CACHE` 入口在激活后始终全部重放，即使包没有变化或写了 `replay = false`。

上下文提供 `packId`、`scope`、`reason`、`cause`、`platform`，以及当前阶段保证可用的服务器、客户端、玩家或世界对象。一个文件可定义任意多个入口，每个都会被独立发现和调用。实践示例见[选择入口执行阶段](./lifecycle.md)，完整契约见[脚本加载生命周期](../architecture/script-loading.md)。

使用外部模组或插件 API 前必须在 `dependencies` 中声明，详见[使用其他模组与插件](./dependencies.md)。

> [!CAUTION]
> Katton **不会**阻止你在 `@ClientScriptEntrypoint` 函数里调用服务端专属 API（反之亦然）。强行在客户端入口函数中调用服务端专有 API 可能会导致游戏崩溃！服务端逻辑和客户端逻辑请放在不同的入口函数里。

## 热重载

执行 `/katton reload` 即可重载全部脚本，无需重启游戏。这是 Katton 开发循环的核心：

1. 重新扫描全局和作用域内所有已启用的包
2. 解析脚本包依赖图，并校验声明的模组/插件依赖
3. 把变更的包及其受影响的消费者分组成重载事务
4. 为被替换的组件清理事件处理器、注入、注册所有权和数据包修改
5. 使用声明的依赖类路径一起重新编译有效脚本包
6. 按作用域、阶段、重放策略与依赖顺序调用符合条件的入口函数
7. 在屏幕顶部显示**可视化进度条**（消息 + 百分比 + 绿色进度条）

你也可以间接触发重载：

- **`/reload`**（原版命令）→ 触发服务端 Katton 重载
- **包管理界面** → 按 K，点 Reload → 同时触发两端（仅 Fabric/NeoForge；Paper 没有客户端界面）
- **IDE 桥** → Katton IDEA 插件通过同一条串行重载路径部署包快照，见 [IDE 开发连接](../quickstart/ide.md)

`F3 + T` 只重载 Minecraft 资源，不会重载 Katton 脚本。

完整重载流程见 [热重载与调试](../quickstart/hot-reload.md)。

## 客户端脚本

> [!WARNING]
> 客户端脚本仅适用于 Fabric 和 NeoForge。Paper 是纯服务端平台，不支持客户端脚本、HUD 或渲染 API。

客户端脚本适合做 HUD 覆盖层、自定义渲染器、UI 互动，以及任何需要访问 `Minecraft.getInstance()` 或渲染 API 的场景。

<!--@include: ../../example/quickstart/scripts/01.md-->

客户端脚本可以和服务端脚本放在同一个包里（使用注解 `@ClientScriptEntrypoint` 加以区分）。在 Fabric/NeoForge 多人服务器上，需要客户端同步的包会自动同步到 `<游戏目录>/serverpacks-v4/` 下的修订目录。

## 服务端脚本

服务端脚本处理游戏逻辑：命令、事件、注册、世界操作、数据包集成等。

<!--@include: ../../example/quickstart/scripts/02.md-->

在该示例中，我们订阅了 [`onPlayerJoin`](../../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) 事件来发送欢迎信息。同时使用 [`once`](../../api/common/KattonAPI.md#once) API 判断玩家是否首次加入，以便给出不同提示。

## 进阶：服务端→客户端同步

当客户端连接到多人服务器时，Katton 会在配置阶段同步服务端权威脚本包：

1. 服务端发送**哈希列表**（`ScriptPackHashListPacket`）——每个包的同步 ID 对 SHA-256
2. 服务端立刻发送**完整包快照**（`ScriptPackBundlePacket`）——manifest + 所有内容文件
3. 客户端写入缓存前验证可选 Ed25519 签名
4. 客户端把缓存 hash 与服务端声明的 hash 列表比对
5. 未信任的服务器或签名 key 会打开阻塞式信任界面
6. 受信任的包会在注册表校验前执行

每次服务端热重载成功后，Katton 还会发布新的游戏阶段修订。客户端只请求变化的包，暂存并预编译完整候选快照，然后重放所有活动服务器缓存包并回执结果。被移除的包会停用，空快照也受支持；候选失败时上一修订继续工作。失败回执或 30 秒超时会断开客户端。

网络协议为版本 4，缓存位于 `serverpacks-v4`；不兼容的对端会被拒绝，而不会复用旧缓存。

配置阶段与在线重载协议详见[脚本包同步与信任](../architecture/pack-sync.md)。

> [!NOTE]
> Paper 服务端不支持客户端同步，所有脚本均为服务端本地文件。

纯服务端包如果不包含客户端入口、客户端所需注册表定义、资源、渲染代码或音频，可以设置 `"clientSync": false`。
