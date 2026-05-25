# Manifest 与签名

每个脚本包目录都需要 `manifest.json`。Katton 的解析较宽容，大多数字段都有默认值，但显式元数据能让日志、界面和远程同步更清晰。

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

## 字段

| 字段 | 默认值 | 含义 |
|---|---|---|
| `id` | 文件夹或 jar 名称 | 稳定 pack 标识，用于 sync id 和日志。 |
| `name` | `id` | 界面显示名。 |
| `version` | `"unknown"` | 人类可读版本。 |
| `description` | `""` | 描述文本。 |
| `authors` | `[]` | 作者列表。 |
| `enabled` | `true` | 没有本地状态文件时的默认启用状态。 |
| `clientSync` | `true` | Fabric/NeoForge 服务端是否把该包纳入客户端同步。 |
| `signature` | 不存在 | 远程客户端同步包的可选 Ed25519 元数据。 |
| `config` | `{}` | 字符串/数字/布尔类型的简单配置值。 |

## 本地状态

脚本包界面切换启用状态时，Katton 会在目录包旁写入 `.kattonpack.state.json`：

```json
{ "enabled": false }
```

Jar 包的状态文件是同目录的 `<pack>.jar.state.json`。状态文件优先于 `manifest.json` 的 `enabled`。

## Hash

目录包使用 SHA-256，输入包括：

1. 原始 `manifest.json` UTF-8 字节
2. 排序后的 `.kt` 相对路径与文件字节
3. 排序后的 `.java` 相对路径与文件字节

Jar 包使用 manifest JSON、jar 文件名和 jar 字节。

## 签名载荷

远程签名使用 Ed25519。被签名的载荷包含 Katton 签名格式版本、sync id、pack 作用域、移除 `signature` 后的 manifest JSON，以及排序后的同步文件路径和字节。

未签名远程包仍保持兼容，但用户执行前仍会看到阻塞式信任提示。签名包额外提供内容与 key 的防篡改校验。

