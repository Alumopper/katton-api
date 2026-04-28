# 命令

Katton 自带一套 `/katton` 命令，让你在游戏内就能管理脚本、查看状态、开关调试——聊天栏直接敲就行。

## 一览表

| 命令 | 作用 | 谁可以用 |
|---|---|---|
| `/katton` 或 `/katton help` | 列出所有命令 | 所有人 |
| `/katton status` | Katton 运行状态 | 所有人 |
| `/katton registry` | 注册表健康概览 | 所有人 |
| `/katton registry stale` | 显示残留旧条目 | 所有人 |
| `/katton reload` | 重载所有脚本包 | **仅 OP** |
| `/katton debug registryLogging` | 查看调试日志开关 | **仅 OP** |
| `/katton debug registryLogging on/off` | 开/关调试日志 | **仅 OP** |

## 帮助

直接敲 `/katton` 或 `/katton help`，Katton 会列出所有可用子命令。

<!--@include: ../../example/quickstart/commands/05.md-->

## 状态

想快速看看 Katton 现在咋样？`/katton status` 会打印当前加载状态、是否绑定了服务器、以及客户端重载是否进行中。

<!--@include: ../../example/quickstart/commands/02.md-->

## 注册诊断

### `/katton registry`

按注册表分类展示摘要：Katton 记录了多少条目、有多少正被脚本管理、有多少是**残留**的（仍留在 Minecraft 内置注册表中但不再被任何脚本认领）。

<!--@include: ../../example/quickstart/commands/03.md-->

### `/katton registry stale`

只显示有残留条目的注册表。当你删掉某个注册了一堆东西的脚本后特别有用——这些 ID 还在游戏里，但 Katton 已经不管它们了。

> [!NOTE]
> "残留" 不意味着出错。Katton 在重载时故意把对象保留在 Minecraft 的内置注册表中，以避免 holder 崩溃。残留只表示 "上次脚本注册了，这次没重新注册"。

## 重载

`/katton reload` 是你的热重载日常主力。它会做三件事：

1. 重新扫描所有启用的脚本包
2. 重新编译并执行服务端脚本
3. 在内置服（单人游戏）上同时异步触发客户端脚本重载

<!--@include: ../../example/quickstart/commands/01.md-->

> [!TIP]
> - **F3 + T** 重载资源包，也会自动触发客户端脚本重载（通过 LoadingOverlay 钩子）。
> - **`/reload`**（原版命令）重载数据包，Katton 会借此重载服务端脚本。
> - **`/katton reload`** 一次搞定两边，还带可视化进度条！

## 调试日志

Katton 内置调试日志开关，开启后会在游戏日志里打印每一次注册调用。可以用命令或脚本控制：

<!--@include: ../../example/quickstart/commands/04.md-->

默认是关闭的。排查注册问题时打开，平时关掉避免日志刷屏。

## 可视化进度覆盖层

每次触发脚本重载（无论是命令、资源重载还是 UI 操作），Katton 都会在屏幕顶部显示一个居中的进度条：

- **消息 + 百分比** — 比如"正在编译服务端脚本 (48%)"
- **绿色进度条**从左到右填充
- 完成后自动消失，并短暂显示"完成"消息

你再也不用猜重载是还在跑还是已经崩了——**直接就能看到进度。**

不需要写任何代码来开启这个功能——它自己就有了。进度覆盖层在 HUD 和加载界面（进世界、资源重载）上都会显示。
