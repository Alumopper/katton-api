# 清单、依赖与签名

每个脚本包目录都必须包含 `manifest.json`。其中 `dependencies` 数组是必填项，即使没有外部依赖也必须写出；其他字段有默认值。

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

没有模组或插件依赖时，最小清单为：

```json
{
  "dependencies": []
}
```

## 脚本包字段

| 字段 | 默认值 | 含义 |
|---|---|---|
| `dependencies` | **必填** | 外部模组/插件依赖；没有依赖时写 `[]`。 |
| `id` | 文件夹或 JAR 名 | 用于同步 ID 和日志的稳定脚本包标识。 |
| `name` | `id` | UI 中显示的名称。 |
| `version` | `"unknown"` | 脚本包版本。 |
| `description` | `""` | 显示说明。 |
| `authors` | `[]` | 作者列表。 |
| `enabled` | `true` | 没有本地状态文件时的默认启用状态。 |
| `clientSync` | `true` | Fabric/NeoForge 服务端是否把此包加入客户端同步。 |
| `signature` | 无 | 远程客户端同步包可选的 Ed25519 签名元数据。 |
| `config` | `{}` | 清单中可用的字符串、数字、布尔配置值。 |

缺少 `dependencies`、该值不是数组或依赖对象不合法时，清单会被判定为无效。Fabric、NeoForge 与 Paper 的要求完全一致。

## 依赖字段

| 字段 | 默认值 | 含义 |
|---|---|---|
| `id` | **必填** | Fabric/NeoForge 模组 ID，或 Paper 插件名。 |
| `platforms` | **必填** | `fabric`、`neoforge`、`paper` 的非空子集。 |
| `version` | `"*"` | 可接受的依赖版本表达式。 |
| `required` | `true` | 为 `true` 时，依赖缺失、未启用或版本不兼容会禁用此包。 |
| `environment` | `"both"` | `server`、`client` 或 `both`。 |

版本表达式支持：

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

## 平台解析

Fabric/NeoForge 从当前模组加载器读取依赖信息。声明的模组及其必需传递依赖会进入脚本编译类路径，执行时使用加载器中的真实转换类。

Paper 通过服务器 `PluginManager` 解析依赖。插件只有在 `ServerPhase.READY`（插件已加载并启用）后才可用。编译器使用插件真实的 JAR 或类目录，运行时委托给插件现有的 ClassLoader。无需把每个脚本包依赖重复写入 Katton 的 `paper-plugin.yml`；依赖由各脚本包自己的 `manifest.json` 管理。

脚本导入了哪个插件的类，就应声明哪个插件。若两个声明的插件导出同名类，Katton 会拒绝该脚本包并报告歧义。

## 本地状态

在脚本包 UI 中切换目录包状态时，Katton 会在包旁写入 `.kattonpack.state.json`：

```json
{ "enabled": false }
```

JAR 包的状态文件为相邻的 `<pack>.jar.state.json`。状态文件会覆盖清单中的 `enabled`。

## 哈希

目录包的 SHA-256 哈希依次包含：

1. `manifest.json` 的原始 UTF-8 字节
2. 按相对路径排序的 `.kt` 文件路径与内容
3. 按相对路径排序的 `.java` 文件路径与内容

JAR 包哈希包含清单 JSON、JAR 文件名和 JAR 内容。

## 签名载荷

远程签名使用 Ed25519。签名载荷包含 Katton 签名格式版本、同步 ID、脚本包作用域、移除 `signature` 后的清单 JSON，以及按路径排序的所有同步文件路径与内容。

未签名的远程包仍可使用，但执行前仍会显示阻塞式信任确认。签名用于校验内容是否被篡改以及作者密钥身份。
