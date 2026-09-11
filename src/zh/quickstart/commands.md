# 命令

Katton 在游戏中添加了 `/katton` 命令，允许你在游戏内管理脚本、查看状态、开关脚本包、编辑配置和调试。

## 速览

| 命令 | 作用 | 权限 |
|---|---|---|
| `/katton` 或 `/katton help` | 列出所有命令 | 所有人 |
| `/katton status` | Katton 运行状态 | 所有人 |
| `/katton errors` | 最近十条脚本错误 | 所有人 |
| `/katton capabilities events [事件]` | 查询部分支持或不支持的事件能力 | 所有人 |
| `/katton capabilities injection` | 注入能力诊断 | 游戏管理员 |
| `/katton packs list` | 列出本地脚本包的同步 ID、版本、类型与开关状态 | 所有人 |
| `/katton packs enable\|disable <syncId>` | 切换脚本包并重载（仅世界包） | 游戏管理员 |
| `/katton registry` | 注册表状况概览 | 所有人 |
| `/katton registry stale` | 显示残留旧注册条目 | 所有人 |
| `/katton reload` | 重载所有脚本包 | 游戏管理员 |
| `/katton config list [包]` | 列出包配置 | 所有人 |
| `/katton config get <包> <键>` | 读取一项配置 | 所有人 |
| `/katton config set <包> <键> <值>` | 写入配置 | 游戏管理员 |
| `/katton config reset <包> <键>` | 删除配置覆盖 | 游戏管理员 |
| `/katton itemrender spawn <物品> [预设] [缩放] [存在时间]` | 生成客户端物品渲染标记 | 游戏管理员 |
| `/katton itemrender clear <半径>` | 清除范围内的物品渲染标记 | 游戏管理员 |
| `/katton debug registryLogging [on\|off]` | 查看或设置详细注册日志 | 游戏管理员 |
| `/katton debug injection` | 注入诊断 | 游戏管理员 |
| `/katton dev enable\|disable` | 开启或关闭 IDE 开发桥 | 游戏管理员 |

> [!NOTE]
> Paper 上的 `/katton` 更精简：`help`、`status`、`reload`、`errors`、`capabilities events|injection`、`packs list|enable|disable`、`dev enable|disable`。其中重载、切换脚本包和 `dev` 需要 `katton.admin` 权限或 OP。`registry`、`config`、`itemrender` 与 `debug registryLogging` 仅适用于 Fabric/NeoForge，因为 Paper 禁用了注册表修改，也没有可渲染物品标记的客户端。

## 帮助

输入 `/katton` 或 `/katton help`，Katton 会列出所有可用子命令。

<!--@include: ../../example/quickstart/commands/05.md-->

## 状态

想快速看看 Katton 现在的状态？`/katton status` 会打印当前加载状态、是否绑定了服务器，以及客户端/服务端重载是否进行中。

<!--@include: ../../example/quickstart/commands/02.md-->

## 错误

`/katton errors` 会打印最近记录的十条脚本错误。重载失败或运行时报错后，可以直接看到每条问题的标题与详情，不用翻控制台日志。

## 能力查询

事件与注入的支持情况会随平台、版本和目标变化。这些子命令用于在真正调试前回答“在这台环境上它到底能不能用”。

```text
/katton capabilities events            # 所有部分支持或不支持的事件
/katton capabilities events <事件对象.方法>
/katton capabilities injection         # Fabric / NeoForge，游戏管理员
```

`capabilities events` 会报告状态、执行上下文与详情。若没有任何输出，说明查询到的事件能力都被完整支持。事件模型见[事件指南](../guide/events.md)，完整能力清单见 API 参考。

## 脚本包

无需打开界面即可列出并切换本地脚本包：

```text
/katton packs list
/katton packs enable world:my_pack
/katton packs disable world:my_pack
```

`packs list` 会显示作用域限定的同步 ID、版本、类型（`DIRECTORY` 或 `ZIP`）与开关状态。切换世界包会写入状态文件并立即开始重载。全局包的状态会被保存，但**需要重启**才会生效，因为全局代码不会热应用。

## 注册诊断

### `/katton registry`

命令会按注册表分类展示摘要：Katton 记录了多少条目、有多少正被脚本管理、有多少是**残留**的（重载之前注册的，但是重载之后没有被注册或者被修改的，为了保证稳定仍留在 Minecraft 内置注册表中的对象）。

<!--@include: ../../example/quickstart/commands/03.md-->

### `/katton registry stale`

显示有残留条目的注册表。

> [!NOTE]
> “残留”不意味着出错。Katton 在重载时故意把对象保留在 Minecraft 的内置注册表中，以避免 holder 崩溃。残留只表示“上次脚本注册了，这次没重新注册”。

## 配置

清单中的 `config` 对象提供默认值。服务器管理员可以在运行时覆盖这些原始类型值，而不必修改脚本包：

```text
/katton config list
/katton config list my_pack
/katton config get my_pack difficulty
/katton config set my_pack difficulty hard
/katton config reset my_pack difficulty
```

覆盖值保存在 `<游戏目录>/.katton/config-overrides/` 下，以作用域限定的同步 ID 命名；服务器缓存包会额外加上 `server_cache:` 前缀，避免远程的 `global:x` 覆盖本地的 `global:x`。Katton 不会为了配置改写包清单，因此目录包、ZIP 包和已签名包都能一致地持久化设置。

## 物品渲染标记

无需创建真实实体或物品展示框，即可生成临时的客户端物品模型用于测试：

```text
/katton itemrender spawn minecraft:diamond_sword
/katton itemrender spawn minecraft:diamond_sword showcase 1.5
/katton itemrender spawn minecraft:diamond_sword pulse 1.0 200
/katton itemrender clear 32
```

预设为 `still`、`spin`、`float`、`pulse`、`showcase`。`scale` 默认 `1.0`，`lifetimeTicks` 默认 `-1`（不过期）。`itemrender clear <半径>` 会清除命令源附近该半径内的标记。详见[物品渲染标记](../guide/render/item-markers.md)。

## 调试

<!--@include: ../../example/quickstart/commands/04.md-->

`/katton debug injection` 会打印注入能力报告：当前平台是否可用 ByteBuddy/ASM 注入，以及支持哪些钩子。详见[代码注入](../guide/injection.md)。

## IDE 开发连接

```text
/katton dev enable
/katton dev disable
```

开启后会在 `127.0.0.1` 上启动一个带本次会话 Bearer 令牌的回环 HTTP 桥，并打印端口。随后 [Katton IDEA 插件](../quickstart/ide.md) 就能从 `~/.katton/dev/instances` 发现实例、部署世界包并接收编译诊断。该桥默认关闭，也可以通过脚本包界面右上角的 **IDE** 按钮开关。

## 重载

`/katton reload` 可能会是你最常用的命令。它会：

1. 重新扫描所有启用的脚本包并解析其依赖图
2. 为被替换的组件重新编译并执行服务端脚本
3. 在内置服务端（单人游戏）上同时异步触发客户端脚本重载
4. 向已连接的 Fabric/NeoForge 客户端发布新的脚本包修订

<!--@include: ../../example/quickstart/commands/01.md-->

> [!TIP]
> - **F3 + T** 只重载 Minecraft 资源，不会调用 Katton 脚本。
> - **`/reload`**（原版命令）重载数据包，Katton 会借此重载服务端脚本。
> - **`/katton reload`** 客户端和服务端都会尝试重载。
