# 脚本包同步与信任

Fabric 和 NeoForge 多人服务器可以在配置阶段向客户端下发脚本包。Paper 没有 Katton 客户端，因此没有客户端同步。

## 配置阶段流程

1. 服务端收集启用且 manifest 中 `"clientSync": true` 的脚本包。
2. 服务端发送 `ScriptPackHashListPacket`。
3. 如果列表非空，服务端立刻发送包含完整快照的 `ScriptPackBundlePacket`。
4. 客户端在写入缓存前验证签名。
5. 客户端将缓存 hash 与服务端声明的 hash 列表比对。
6. 未信任的服务器或签名 key 会打开阻塞式信任界面。
7. 受信任的包会在注册表校验继续前，于渲染线程触发 `reloadClientScripts()`。

Katton 避免额外请求/响应往返，因为注册表校验对时序敏感：同步脚本创建的客户端注册表条目必须先存在，客户端才能与服务端比较注册表。

## 缓存布局

远程包缓存路径：

```text
<gameDir>/serverpacks/<sha256(serverAddress)>/<base64url(syncId)>/
```

信任存储路径：

```text
<gameDir>/.katton/remote-script-trust.json
```

信任存储会记录受信任服务器与签名 key。如果已信任的 `keyId` 后续提供不同的内嵌 public key，Katton 会拒绝远程脚本。

## 安全模型

远程 Katton 脚本是在 Minecraft 客户端内执行的任意 JVM 代码。Hash 用于发现缓存不一致；签名用于校验内容是否匹配某个 key；二者都不能证明服务器安全。因此信任提示会阻塞执行，要求玩家明确批准远程脚本。

纯服务端包可以设置 `"clientSync": false`，前提是它不包含客户端入口、客户端需要的注册表定义或渲染代码。

