# 清单、依赖与签名

每个脚本包都要在根目录（或 ZIP 压缩包根目录）放置 `manifest.json`。其中 `dependencies` 数组为必填项，即使没有外部依赖也必须写出；其他字段都有默认值。

```json
{
  "id": "example_pack",
  "name": "示例脚本包",
  "version": "1.0.0",
  "description": "Katton 示例脚本",
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

没有模组、插件或脚本包依赖时，最小清单为：

```json
{
  "dependencies": []
}
```

## 脚本包字段

| 字段 | 默认值 | 含义 |
|---|---|---|
| `dependencies` | **必填** | 外部模组/插件依赖；没有依赖时写 `[]`。 |
| `packDependencies` | `[]` | 此包依赖的其他 Katton 脚本包。见[脚本包依赖](../guide/pack-dependencies.md)。 |
| `id` | 文件夹或 ZIP/JAR 名 | 用于同步 ID 和日志的稳定标识。通过 IDE 桥部署的包应显式声明。 |
| `name` | `id` | UI 中显示的名称。 |
| `version` | `"unknown"` | 脚本包版本。 |
| `description` | `""` | 显示说明。 |
| `authors` | `[]` | 作者列表。 |
| `enabled` | `true` | 没有本地状态文件时的默认启用状态。 |
| `clientSync` | `true` | Fabric/NeoForge 服务端是否把此包加入客户端同步。 |
| `signature` | 无 | 远程客户端同步包可选的 Ed25519 签名元数据。 |
| `config` | `{}` | 清单中可用的字符串、数字、布尔配置值。 |

缺少 `dependencies`、该值不是数组或依赖对象不合法时，清单会被判定为无效。Fabric、NeoForge 与 Paper 的要求完全一致。

## 外部依赖字段

| 字段 | 默认值 | 含义 |
|---|---|---|
| `id` | **必填** | Fabric/NeoForge 模组 ID，或 Paper 插件名。 |
| `platforms` | **必填** | `fabric`、`neoforge`、`paper` 的非空子集。 |
| `version` | `"*"` | 可接受的依赖版本表达式。 |
| `required` | `true` | 为 `true` 时，依赖缺失、未启用或版本不兼容会禁用此包。 |
| `environment` | `"both"` | `server`、`client` 或 `both`。 |

同一个依赖 ID 的声明不能在同一平台与运行侧上重复；Katton 会拒绝这种清单。

## 脚本包依赖字段

| 字段 | 默认值 | 含义 |
|---|---|---|
| `id` | **必填** | 目标包的 manifest `id`，或 `world:shared-behavior` 这类作用域限定同步 ID。 |
| `version` | `"*"` | 对目标包版本的表达式。 |
| `required` | `true` | 为 `true` 时，目标缺失、被禁用、存在歧义或版本不兼容都会拒绝本包。 |
| `export` | `false` | 为 `true` 时，目标的依赖也对本包的消费者可见。 |

直接依赖会暴露编译产物与 Kotlin 元数据；传递依赖默认私有，除非显式 `export`。全局包只能依赖全局包，远程同步包只能依赖其他同步包。完整语义与示例见[脚本包依赖](../guide/pack-dependencies.md)。

## 版本表达式

`dependencies` 与 `packDependencies` 使用相同的版本语法：

- 任意版本：`*`
- 精确版本：`6.0.0` 或 `=6.0.0`
- 比较：`>=6.0.0`、`<7.0.0`
- 用空格或逗号连接的 AND 条件：`>=6.0.0 <7.0.0`
- OR 分支：`>=6.0.0 <7.0.0 || >=8.0.0`

Katton 只校验当前平台与运行侧适用的依赖。必需依赖缺失、未启用或版本不兼容时，脚本包会在编译前被排除。可选依赖可在脚本中查询：

```kotlin
import top.katton.api.dependencies

if (dependencies.isLoaded("create")) {
    println("Create ${dependencies.version("create")}")
}

val required = dependencies.require("create")
```

`require(id)` 会返回已解析依赖；依赖未安装或未启用时抛出异常。

## 脚本包内容

从 Alpha 0.5.0 起，**除 `manifest.json` 和本地 `.kattonpack.state.json` 之外，包内所有文件都是内容**。音频、README、配置数据等附加文件都会参与哈希、签名、客户端同步，并计入单文件与单包上限。

```text
kattonpacks/gameplay/           # 也可以是 gameplay.zip
├── manifest.json               # 排除：清单本身
├── .kattonpack.state.json      # 排除：本地启用状态
├── Gameplay.kt                 # 源码
├── helpers/Math.java           # 源码
├── libs/utility-1.0.jar        # 库
├── assets/gameplay/...         # 客户端资源
├── data/gameplay/...           # 服务端数据
└── audio/theme.mp3             # 普通内容
```

- `.kattonpack.state.json` 会在**任意深度、任意大小写**下按文件名排除，因此本地状态文件绝不会被分发。
- `.kt` 与 `.java` 作为源码编译。直接位于 `libs/` 下的 `*.jar` 是库：参与编译、哈希、签名与同步，但 Katton 不会扫描其中的入口，也不会把它导出给其他包。
- `assets/` 下的文件进入 Katton 生成的客户端资源包，`data/` 下的文件进入其生成的必需服务端数据包，两者都不需要 `pack.mcmeta`。
- 其他所有文件都是普通内容。不要在包目录里放编辑器、版本控制或构建产物：它们也会被分发出去。

### 包容器

`kattonpacks/` 会发现目录和 `.zip` 文件。ZIP 的根目录就是包根目录，必须包含 `manifest.json`；不要再套一层文件夹。两种容器产生相同的逻辑文件、哈希和网络表示，因此同一个已签名 manifest 在两种容器中都有效。

可执行 JAR 包**不再支持**。请把源码放进目录或 ZIP，把库依赖放进直接的 `libs/` 目录。

### 限制

| 限制 | 数值 |
|---|---|
| 单包文件数 | 4,096 |
| 单文件大小 | 16 MiB |
| 单包内容总量 | 64 MiB（含 `manifest.json`） |
| `manifest.json` 大小 | 1 MiB |
| 单次网络批次文件数 | 16,384 |
| 批次内容总量 | 64 MiB |
| 单包扫描目录条目 | 16,384 |

路径必须可移植：路径穿越（`..`）、绝对路径、反斜杠、NUL 字节、Windows 保留名与字符、结尾的点或空格，以及大小写或 Unicode 归一化冲突都会在 Linux 服务端向其他客户端分发之前被拒绝。目录包和 ZIP 内的符号链接都会被禁止，ZIP 的路径/目录冲突与分卷压缩包也会被拒绝。

由于 0.5.0 改变了被接受的文件集合，包含非源码内容的旧包需要用当前的 [Katton-Sign](https://github.com/Alumopper/Katton-Sign) 插件重新签名，客户端会重新同步一次。

## 平台解析

Fabric/NeoForge 从当前模组加载器读取依赖信息。声明的模组及其必需传递依赖会进入脚本编译类路径，执行时使用加载器中的真实转换类。

Paper 通过服务器 `PluginManager` 解析依赖。插件只有在 `ServerPhase.READY`（插件已加载并启用）后才可用。编译器使用插件真实的 JAR 或类目录，运行时委托给插件现有的 ClassLoader。无需把每个脚本包依赖重复写入 Katton 的 `paper-plugin.yml`；依赖由各脚本包自己的 `manifest.json` 管理。

脚本导入了哪个插件的类，就应声明哪个插件。若两个声明的插件导出同名类，Katton 会拒绝该脚本包并报告歧义。

## 本地状态

在脚本包 UI 中切换目录包状态时，Katton 会在包旁写入 `.kattonpack.state.json`：

```json
{ "enabled": false }
```

ZIP 包的状态文件是压缩包旁边的 `<pack>.zip.state.json`。状态文件会覆盖清单中的 `enabled`，且永远不会被当作包内容参与哈希、签名或同步。

## 哈希

Katton 为每个包维护两个 SHA-256 哈希。

**内容哈希**覆盖所有逻辑包文件，用于同步以及资源/数据重载判断：

1. `manifest.json` 的原始 UTF-8 字节
2. `.kt` 源码的文件数与按路径排序的路径及内容
3. `.java` 源码同上
4. `assets/**` 同上
5. `data/**` 同上
6. `libs/*.jar` 同上
7. 其他所有内容文件同上

每个字段都有长度前缀，每个类别都记录文件数，因此二进制内容不会被重新解释为路径或额外文件。当前帧格式为 `katton-logical-pack-hash-v3`。内容相同的目录包与 ZIP 包会产生相同哈希。

**代码哈希**覆盖移除 `signature` 后的清单、Kotlin 源码、Java 源码与库。因此资源、数据、音频等内容变更不会让已编译脚本失效。

升级 Katton 会让旧缓存条目失效一次，Katton 会自动重建。

## 签名载荷

远程签名使用 Ed25519。签名载荷带版本号，包含：

- Katton 签名格式版本（当前为 **3**）
- 脚本包同步 ID 与作用域
- 文件数量
- 按路径排序的每个相对路径与内容，包括资源、数据、库以及其他内容

即使二进制内容包含零字节，该帧格式也不存在歧义。旧版载荷 1 与 2 会被拒绝，请用当前插件重新签名迁移。`publicKey` 是 Base64 编码的 X.509 Ed25519 公钥。用户信任某服务器或密钥后，Katton 会把受信任公钥保存到 `<游戏目录>/.katton/remote-script-trust.json`；若已信任的 `keyId` 之后给出不同的内嵌公钥，校验会失败。

未签名的远程包仍可使用，但执行前仍会显示阻塞式信任确认。签名用于校验内容是否被篡改以及作者密钥身份。传输协议见[脚本包同步与信任](./pack-sync.md)，签名操作流程见[脚本包](../guide/scripts.md)。
