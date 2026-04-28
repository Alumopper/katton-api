# 脚本

Katton 把你的 Kotlin 代码组织成**脚本包**。一个脚本包就是一个包含 `manifest.json` 和一些 `.kt` 文件的文件夹（或 `.jar` 文件）。和传统模组不同，脚本包是**不分端的**——同一个包可以同时给服务端和客户端用，而且全部支持 **`/katton reload` 热重载**。

## 脚本包

### 目录结构

脚本包放在 `kattonpacks` 目录下，Katton 会自动扫描：

```
# 全局 — 所有世界共享，删世界也不会丢：
<游戏目录>/kattonpacks/<包名>/manifest.json
<游戏目录>/kattonpacks/<包名>/**/*.kt

# 世界 — 每个存档独立，首次重载时自动创建目录：
<世界目录>/kattonpacks/<包名>/manifest.json
<世界目录>/kattonpacks/<包名>/**/*.kt
```

- **全局** 包在模组启动时加载一次，所有存档共享。
- **世界** 包每个存档独立加载——适合做地图专属脚本。

包内的 `.kt` 文件可以随意嵌套子目录，Katton 会递归扫描整个目录树。入口函数可以放在根目录、`src/main/`、`qwq/`——随便哪里都行。

### 清单文件（`manifest.json`）

每个包需要在根目录放一个 `manifest.json`。**所有字段都是可选的**——Katton 会为缺失的字段自动填上合理的默认值：

<!--@include: ../../example/quickstart/pack-ui/01.md-->

| 字段 | 默认值 | 说明 |
|---|---|---|
| `id` | 文件夹或 jar 文件名 | 唯一包标识符——用于同步、日志和命令 |
| `name` | 同 `id` | 人类可读的显示名称（在包管理界面里显示） |
| `version` | `"unknown"` | 语义化版本号 |
| `description` | `""` | 包的功能描述 |
| `authors` | `[]` | 作者名数组 |
| `enabled` | `true` | `true` = 重载时加载，`false` = 跳过 |

> [!NOTE]
> manifest 里**没有 `targets.server` 或 `targets.client` 字段**。Katton 完全通过入口函数的注解来判断脚本是跑在服务端还是客户端（见下文）。

### 状态文件（`.kattonpack.state.json`）

当你在游戏内界面（按 **K**）开关某个包时，Katton 会写一个本地状态文件：

```json
{ "enabled": false }
```

这个文件优先级高于 `manifest.json` 里的 `enabled` 字段。删掉状态文件就能恢复 manifest 里的默认设置。

## 入口函数

脚本是**不分端的**——同一个 `.kt` 文件可以同时包含服务端和客户端逻辑。用两个简单的注解来决定哪个环境执行哪个函数：

```kotlin
import top.katton.api.ServerScriptEntrypoint   // ← 在服务端运行
import top.katton.api.ClientScriptEntrypoint   // ← 在客户端运行
```

两个注解都只能标记**顶层、无参函数**。就这么简单：

```kotlin
@ServerScriptEntrypoint
fun initMyCommands() {
    // 只在服务端执行
}
```

```kotlin
@ClientScriptEntrypoint
fun initMyHUD() {
    // 只在客户端执行
}
```

一个文件里可以写任意多个入口函数——每个都会被独立发现和调用。

> [!CAUTION]
> Katton **不会**阻止你在 `@ClientScriptEntrypoint` 函数里调用服务端专属 API（反之亦然）。真这么干了大概率会崩。服务端逻辑和客户端逻辑请放在不同的入口函数里。

## 热重载

执行 `/katton reload` 即可重载全部脚本，无需重启游戏。这是 Katton 开发循环的核心：

1. 重新扫描全局和作用域内所有已启用的包
2. 清除事件处理器、注入和注册所有权
3. 将所有源码包一起重新编译，然后加载 JAR 包
4. 发现并调用所有 `@ServerScriptEntrypoint` / `@ClientScriptEntrypoint` 函数
5. 在屏幕顶部显示**可视化进度条**（消息 + 百分比 + 绿色进度条）

你也可以间接触发重载：
- **`/reload`**（原版命令）→ 触发服务端 Katton 重载
- **`F3 + T`**（重载资源）→ 触发客户端 Katton 重载
- **包管理界面** → 按 K，点 Reload → 同时触发两端

## 客户端脚本

客户端脚本适合做 HUD 覆盖层、自定义渲染器、UI 互动，以及任何需要访问 `Minecraft.getInstance()` 或渲染 API 的场景。

<!--@include: ../../example/quickstart/scripts/01.md-->

客户端脚本可以和服务端脚本放在同一个包里（只要加上 `@ClientScriptEntrypoint` 就行），也可以通过资源包放到 `assets/<namespace>/client_scripts/`。在多人服务器上，客户端包会自动从服务端同步到 `<游戏目录>/serverpacks/`。

## 服务端脚本

服务端脚本处理游戏逻辑：命令、事件、注册、世界操作、数据包集成等。

<!--@include: ../../example/quickstart/scripts/02.md-->

在该示例中，我们订阅了 [`onPlayerJoin`](../../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) 事件来发送欢迎信息。同时使用 [`once`](../../api/common/KattonAPI.md#once) API 判断玩家是否首次加入，以便给出不同提示。

## 包类型

Katton 支持两种物理格式：

| 类型 | 结构 | 编译方式 | 适用场景 |
|---|---|---|---|
| **目录** | 文件夹包含 `manifest.json` + `.kt` 文件 | 所有源码包一起编译（跨包引用可用） | 开发和迭代 |
| **JAR** | `.jar` 文件，`manifest.json` 放在根目录或 `META-INF/katton/manifest.json` | 直接加载（已编译） | 分发和分享 |

目录包会被合并到一个编译单元里——所以你在一个包里定义的辅助函数可以在另一个包里直接用。JAR 包则单独加载。

用 Gradle 打包 JAR 就一行命令的事，不过这超出了本快速入门范围。记住就行：**目录包开发用，JAR 包分享用**。

## 旧版位置（仍然支持）

如果你有沿用旧规范的现成配置，它们依旧能跑：

- **数据包**：`data/<namespace>/scripts/` — 服务端脚本
- **资源包**：`assets/<namespace>/client_scripts/` — 客户端脚本

重载时 Katton 会和 `kattonpacks/` 一起扫描这些位置。不过 **`kattonpacks/` 才是推荐格式**——它支持清单文件、包管理界面、开关切换、以及完整的重载生命周期。旧格式的脚本会静默使用默认设置。

## 进阶：服务端→客户端同步

当客户端连接到多人服务器时，Katton 会自动将服务器权威的脚本包同步到客户端：

1. 服务端发送**哈希列表**（`ScriptPackHashListPacket`）——每个包的同步 ID 对 SHA-256
2. 客户端**对比哈希**和本地缓存（`<游戏目录>/serverpacks/<bucket>/`）
3. 客户端**请求**缺失或不匹配的包（`ScriptPackRequestPacket`）
4. 服务端发送**完整包**（`ScriptPackBundlePacket`）——manifest + 全部 `.kt` 文件
5. 客户端保存到磁盘并在注册表校验前执行

这确保了每个玩家和服务端跑的是**完全一样的脚本**——不需要手动安装，不存在版本不一致。同步协议完全自动，你不需要做任何配置。
