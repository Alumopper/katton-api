# IDE 开发连接

Katton Alpha 0.5.0 新增了一个可选的**回环 HTTP 桥**，用于连接运行中的游戏与 [Katton IDEA 插件](https://github.com/Alumopper/Katton-IDEA)。它让 IDE 发现当前实例、部署世界脚本包、通过常规的串行重载路径重载，并把编译器诊断与日志流回 IDE——不再需要手动复制文件或来回切窗口。

> [!IMPORTANT]
> 该桥**默认关闭**，且只监听 `127.0.0.1`。每个请求都需要本次会话的 Bearer 令牌。它不会开启 JDWP，也不会改动远程服务器。

## 开启桥接

在游戏内打开**脚本包界面**（默认按 **K**）并点击 **IDE** 按钮，或执行命令：

```text
/katton dev enable
/katton dev disable
```

| 平台 | 谁可以执行 `/katton dev` |
|---|---|
| Fabric / NeoForge | 游戏管理员权限（与 `/katton reload` 同级） |
| Paper / Folia | `katton.admin` 权限或 OP |

开启后会打印分配到的本机端口，例如：

```text
Katton development connection enabled on localhost:52143. Connect from IDEA.
```

游戏进程关闭时，桥也会自动停用。

## 发现机制

开启后，Katton 会在当前用户主目录下为每个运行中的实例写入一条发现记录：

```text
~/.katton/dev/instances/<sessionId>.json
```

文件中包含协议版本、会话 ID、进程 ID、回环端口和 Bearer 令牌；在支持 POSIX 权限的文件系统上会以仅属主可读的方式创建。IDEA 插件监视该目录，因此可以列出运行中的实例、选择目标并识别当前已加载的世界。

**连接远程多人服务器的客户端没有部署权限**：只有本地集成服务器或本机托管的独立服务器可写。远程服务器上的脚本包对 IDE 只读。

## 开发循环

1. 启动带 Katton 的游戏或本地服务器，进入你要开发脚本包的世界。
2. 开启一次桥（`/katton dev enable` 或界面上的 **IDE** 按钮）。
3. 从 Katton IDEA 插件连接。插件会查询实例、展示当前脚本包列表，并可发送完整脚本快照。
4. 在 IDE 中编辑 `.kt` / `.java` 并部署。写入与游戏内 `/katton reload` 共用 `ScriptReloadManager` 的串行协调，部署不会和手动重载冲突。
5. 在 IDE 中查看结构化的 Kotlin/Java 编译诊断。游戏日志照常输出到控制台。

部署前也可以先由 IDEA 查询运行中的实例。预检会校验候选快照，包括依赖解析、单批次大小上限和平台能力，并报告是 `READY` 还是需要 `RESTART_REQUIRED`。

## 哪些变更可以热应用

| 变更 | 行为 |
|---|---|
| 世界包代码 | 通过常规串行重载热应用。 |
| 世界包的 `assets/**` / `data/**` | 随包重载一起应用。 |
| 已加载全局包的纯资源变更 | 可走既有资源重载路径。 |
| 全局包**代码** | 桥不会提交。请在外部安装并重启，然后重新连接。 |
| 平台禁止的注册表或数据变更 | 由实例查询报告，并在预检时拒绝。 |

Paper 与 Folia 会通过实例查询报告各自的能力限制。例如，不支持脚本包数据重载的运行时，会拒绝新增 `data/**` 文件的部署，而不是部分激活；Paper 也会因为没有 Katton 客户端而拒绝客户端资源。

## 桥接与调试

桥负责部署脚本和推送诊断，它**不是**调试器。要设置断点，请按[入门指南](./get-started.md#调试)接入标准的 JVM 远程调试器。当 JVM 以 `-agentlib:jdwp=...` 启动时，实例查询会通过 `debugAddress` 暴露当前 JDWP 地址，IDE 可以据此提供对应的附加配置。

## HTTP 协议（v1）

第三方工具也可以直接调用同一个桥。它监听 `127.0.0.1` 上的随机端口，每个请求都必须带 `Authorization: Bearer <token>`。携带 `Origin` 头，或来自非回环地址的请求会收到 `401`。

| 方法与路径 | 用途 |
|---|---|
| `GET /v1/instance` | 实例快照：版本、目录、能力、脚本包列表与忙碌状态。 |
| `GET /v1/instance?refresh=true` | 重新从磁盘读取脚本包，并附上磁盘与活动哈希的对比。 |
| `GET /v1/events?after=<cursor>` | 按给定游标拉取诊断与被捕获的日志。 |
| `GET /v1/operations/<operationId>` | 查询此前 `apply` 请求的结果。 |
| `POST /v1/preflight` | 校验候选部署，但不实际应用。 |
| `POST /v1/apply` | 暂存并应用部署，返回 `202` 与操作 ID。 |
| `POST /v1/dependencies` | 解析请求的依赖 ID，返回版本与文件指纹。 |

部署 `POST` 请求体上限为 96 MiB。用同一个 `operationId` 重发 `apply` 会返回已存结果，而不会重复应用，因此传输超时后可以安全重试。

## 常见问题

| 现象 | 可能原因 |
|---|---|
| IDE 中看不到实例 | 桥未开启，或 IDE 监视的用户主目录不一致。 |
| `Authentication required` | 发现文件中的令牌已过期。关闭再开启桥后重新连接。 |
| `World changed; reconnect and select the target again` | IDE 连接后世界被切换或重载，请重新选择世界。 |
| `Another reload is active; retry after it completes` | 手动 `/katton reload` 或其他部署正在运行，等它结束后重试。 |
| `Global code changes require restart: ...` | 部署涉及全局包代码，请在外部安装并重启。 |
| `This runtime does not support data-resource reload (Folia)` | 部署新增了 `data/**` 文件，而 Folia 无法挂载。 |

完整工具链（IDEA 插件、`top.katton.dev` Gradle 插件、模板与示例）见 [Katton-IDEA](https://github.com/Alumopper/Katton-IDEA)。
