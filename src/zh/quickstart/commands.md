# 命令

Katton 在游戏中添加了 `/katton` 命令，允许你在游戏内就管理脚本、查看状态、编辑配置等。

> [!NOTE]
> Paper 上的 `/katton` 命令更为精简：没有 `registry` 和 `debug` 子命令，因为 Paper 不支持注册表操作。

## 速览

| 命令 | 作用                 | 权限级别     |
|---|--------------------|----------|
| `/katton` 或 `/katton help` | 列出所有命令             | 所有人      |
| `/katton status` | Katton 运行状态        | 所有人      |
| `/katton registry` | 注册表状况概览            | 所有人      |
| `/katton registry stale` | 显示残留旧注册条目          | 所有人      |
| `/katton reload` | 重载所有脚本包 | **仅 OP** |
| `/katton debug registryLogging` | 查看调试日志开关           | **仅 OP** |
| `/katton debug registryLogging on/off` | 开/关调试日志            | **仅 OP** |

## 帮助

输入 `/katton` 或 `/katton help`，Katton 会列出所有可用子命令。

<!--@include: ../../example/quickstart/commands/05.md-->

## 状态

想快速看看 Katton 现在的状态？`/katton status` 会打印当前加载状态、是否绑定了服务器、以及客户端重载是否进行中。

<!--@include: ../../example/quickstart/commands/02.md-->

## 注册诊断

### `/katton registry`

命令会按注册表分类展示摘要：Katton 记录了多少条目、有多少正被脚本管理、有多少是**残留**的（重载之前注册的，但是重载之后没有被注册或者被修改的，为了保证稳定仍留在 Minecraft 内置注册表中的对象）。

<!--@include: ../../example/quickstart/commands/03.md-->

### `/katton registry stale`

显示有残留条目的注册表。

> [!NOTE]
> "残留" 不意味着出错。Katton 在重载时故意把对象保留在 Minecraft 的内置注册表中，以避免 holder 崩溃。残留只表示 "上次脚本注册了，这次没重新注册"。

## 重载

`/katton reload` 可能会是你最常用的命令。它会：

1. 重新扫描所有启用的脚本包
2. 重新编译并执行服务端脚本
3. 在内置服务端（单人游戏）上同时异步触发客户端脚本重载

<!--@include: ../../example/quickstart/commands/01.md-->

> [!TIP]
> - **F3 + T** 重载资源包，也会自动触发客户端脚本重载。
> - **`/reload`**（原版命令）重载数据包，Katton 会借此重载服务端脚本。
> - **`/katton reload`** 客户端和服务端都会尝试重载。