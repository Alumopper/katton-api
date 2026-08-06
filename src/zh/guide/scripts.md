# 脚本包

Katton 把你的 Kotlin 代码组织成**脚本包**。一个脚本包就是一个包含 `manifest.json` 和一些 `.kt` 文件的文件夹（或 `.java` 文件）。脚本包是**不分端的**——同一个包可以同时给服务端和客户端用（Fabric 和 NeoForge），而且全部支持 **`/katton reload` 热重载**。

> [!NOTE]
> 在 Paper 上，脚本包仅为服务端。没有客户端，因此 `@ClientScriptEntrypoint` 和客户端 API 不可用。脚本从 `<serverDir>/kattonpacks/` 或 `<worldDir>/kattonpacks/` 加载。

## 脚本包

### 目录结构

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

包内的 `.kt` 文件可以随意嵌套子目录，Katton 会递归扫描整个目录树。入口函数可以放在根目录、`src/main/`、`qwq/`等脚本包的任意位置。在常规开发中，文件夹的结构一般决定了你的代码组织方式和包的模块划分。

### 脚本配置（`manifest.json`）

每个包需要在根目录放一个 `manifest.json` 才能被识别。`dependencies` 数组为必填项；不依赖其他模组或插件时写空数组。其余字段由 Katton 提供默认值：

<!--@include: ../../example/quickstart/pack-ui/01.md-->

| 字段            | 默认值         | 说明                                  |
|---------------|-------------|-------------------------------------|
| `dependencies` | **必填** | 模组/插件依赖；没有依赖时写 `[]` |
| `id`          | 文件夹         | 唯一包标识符——用于同步、日志和命令                  |
| `name`        | 同 `id`      | 给人看的显示名称（在包管理界面里显示）                 |
| `version`     | `"unknown"` | 版本号                                 |
| `description` | `""`        | 包的功能描述                              |
| `authors`     | `[]`        | 作者名的数组                              |
| `enabled`     | `true`      | `true` = 重载时加载，`false` = 跳过         |
| `clientSync`  | `true`      | 服务端是否会把该包同步给客户端（仅限 Fabric/NeoForge） |
| `signature`   | *自动生成*      | 无需填写。远程客户端同步包的可选 Ed25519 签名元数据      |
| `config`      | `{}`        | 字符串/数字/布尔类型的简单包配置                   |

依赖字段、平台解析、签名细节和哈希输入见[清单、依赖与签名](../architecture/manifest.md)。脚本包所在目录决定 `GLOBAL`、`WORLD` 或 `SERVER_CACHE` 作用域；入口注解只决定执行阶段。

### 如何签名脚本包

Katton 提供了 `top.katton.sign` Gradle 插件，用来把 Ed25519 签名元数据写入 `manifest.json`。在已应用该插件的 Gradle 项目中，先生成一对 key：

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

`signKattonPack` 会重写该包的 `manifest.json`：移除旧的 `signature`，对当前 manifest 和排序后的 `.kt` / `.java` 文件签名，然后写入 `algorithm`、`keyId`、`publicKey` 与 `signature`。

私钥不要提交到版本控制。`kattonScope` 必须和同步时的包作用域一致（`world` 或 `global`），因为签名载荷里包含 pack 的 sync id。

### 状态文件（`.kattonpack.state.json`）

当你在游戏内界面（按 **K**）开关某个包时，Katton 会写一个本地状态文件：

```json
{ "enabled": false }
```

这个文件优先级高于 `manifest.json` 里的 `enabled` 字段。删掉状态文件就能恢复 manifest 里的默认设置。

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

上下文提供 `packId`、`scope`、`reason`、`cause`、`platform`，以及当前阶段保证可用的服务器、客户端、玩家或世界对象。一个文件可定义任意多个入口，每个都会被独立发现和调用。完整契约见[脚本加载生命周期](../architecture/script-loading.md)。

> [!CAUTION]
> Katton **不会**阻止你在 `@ClientScriptEntrypoint` 函数里调用服务端专属 API（反之亦然）。强行在客户端入口函数中调用服务端专有 API 可能会导致游戏崩溃！服务端逻辑和客户端逻辑请放在不同的入口函数里。

## 热重载

执行 `/katton reload` 即可重载全部脚本，无需重启游戏。这是 Katton 开发循环的核心：

1. 重新扫描全局和作用域内所有已启用的包
2. 清除事件处理器、注入和注册所有权
3. 将所有源码包一起重新编译，然后加载 JAR 包
4. 根据作用域、阶段和重放策略调用符合条件的入口函数
5. 在屏幕顶部显示**可视化进度条**（消息 + 百分比 + 绿色进度条）

你也可以间接触发重载：
- **`/reload`**（原版命令）→ 触发服务端 Katton 重载
- **包管理界面** → 按 K，点 Reload → 同时触发两端

`F3 + T` 只重载 Minecraft 资源，不会重载 Katton 脚本。

完整重载流程见 [热重载与调试](../quickstart/hot-reload.md)。

## 客户端脚本

> [!WARNING]
> 客户端脚本仅适用于 Fabric 和 NeoForge。Paper 是纯服务端平台，不支持客户端脚本、HUD 或渲染 API。

客户端脚本适合做 HUD 覆盖层、自定义渲染器、UI 互动，以及任何需要访问 `Minecraft.getInstance()` 或渲染 API 的场景。

<!--@include: ../../example/quickstart/scripts/01.md-->

客户端脚本可以和服务端脚本放在同一个包里（使用注解 `@ClientScriptEntrypoint` 加以区分）。在 Fabric/NeoForge 多人服务器上，需要客户端同步的包会自动同步到 `<游戏目录>/serverpacks/` 下的修订目录。

## 服务端脚本

服务端脚本处理游戏逻辑：命令、事件、注册、世界操作、数据包集成等。

<!--@include: ../../example/quickstart/scripts/02.md-->

在该示例中，我们订阅了 [`onPlayerJoin`](../../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) 事件来发送欢迎信息。同时使用 [`once`](../../api/common/KattonAPI.md#once) API 判断玩家是否首次加入，以便给出不同提示。

## 包类型

Katton 支持两种物理格式：

| 类型            | 结构 | 编译方式 | 适用场景 |
|---------------|---|---|---|
| **目录**        | 文件夹包含 `manifest.json` + `.kt` 文件 | 所有源码包一起编译（跨包引用可用） | 开发和迭代 |
| **JAR** (WIP) | `.jar` 文件，`manifest.json` 放在根目录或 `META-INF/katton/manifest.json` | 直接加载（已编译） | 分发和分享 |

目录包会被合并到一个编译单元里——所以你在一个包里定义的辅助函数可以在另一个包里直接用。JAR 包则单独加载。

## 进阶：服务端→客户端同步

当客户端连接到多人服务器时，Katton 会自动将服务器脚本包同步到客户端：

1. 服务端发送**哈希列表**（`ScriptPackHashListPacket`）——每个包的同步 ID 对 SHA-256
2. 服务端立刻发送**完整包快照**（`ScriptPackBundlePacket`）——manifest + 所有同步文件
3. 客户端写入缓存前验证可选 Ed25519 签名
4. 客户端把缓存 hash 与服务端声明的 hash 列表比对
5. 未信任的服务器或签名 key 会打开阻塞式信任界面
6. 受信任的包会在注册表校验前执行

每次服务端热重载成功后，Katton 还会发布新的游戏阶段修订。客户端只请求变化的包，暂存并预编译完整候选快照，然后重放所有活动服务器缓存包并回执结果。被移除的包会停用，空快照也受支持；候选失败时上一修订继续工作。失败回执或 30 秒超时会断开客户端。

配置阶段与在线重载协议详见[脚本包同步与信任](../architecture/pack-sync.md)。

> [!NOTE]
> Paper 服务端不支持客户端同步，所有脚本均为服务端本地文件。

纯服务端包可以设置 `"clientSync": false`，从而不再同步过程中被发送到客户端。
