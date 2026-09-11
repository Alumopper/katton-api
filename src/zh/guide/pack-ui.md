# 脚本包界面

> [!WARNING]
> 脚本包界面为客户端功能，Paper 纯服务端不支持。

Katton 内置了一个游戏内界面来管理你的脚本包。在游戏里按 **K** 键（默认）就能打开——不用改配置文件。

## 你能做什么

在这个界面上你可以：

- **浏览**所有已安装的脚本包（全局 + 世界）
- **一键启用/禁用**单个脚本包
- 点击 **Reload 按钮**重载所有脚本
- **查看**包的详细信息：名称、ID、版本、作者、描述、作用域与内容类型
- 用右上角的 **IDE** 按钮开启开发桥，让 [Katton IDEA 插件](../quickstart/ide.md) 发现当前实例并部署世界包

重载进度条会渲染在**这个页面的最上层**，所以你始终知道正在发生什么。

## 可用性规则

不是所有包在所有地方都能编辑：

- **主菜单**：只显示全局包，可以编辑
- **世界中**：全局包会显示但处于**锁定**状态（只读）——要去主菜单管理。世界包在世界内完全可编辑。
- **服务器同步包**（从多人服务器同步来的）：始终只读

## 配置文件

每个脚本包需要一个 `manifest.json` 才能被 Katton 识别。`dependencies` 数组为必填项，其余字段由 Katton 提供默认值：

<!--@include: ../../example/quickstart/pack-ui/01.md-->

| 字段 | 默认值 | 说明 |
|---|---|---|
| `dependencies` | **必填** | 模组/插件依赖；没有依赖时写 `[]` |
| `packDependencies` | `[]` | 此包依赖的其他 Katton 脚本包 |
| `name` | 同 `id` | 人类可读的包名称 |
| `id` | 文件夹/ZIP 文件名 | 唯一包标识符 |
| `version` | `"unknown"` | 语义化版本 |
| `authors` | `[]` | 作者名列表 |
| `description` | `""` | 包的功能描述 |
| `enabled` | `true` | `true` = 激活，`false` = 重载时跳过 |
| `clientSync` | `true` | 服务端是否会把该包同步给客户端 |

## 状态文件（`.kattonpack.state.json`）

当你在界面上切换包的启用状态时，Katton 会在 manifest 旁边写入一个本地状态文件：

```json
{ "enabled": false }
```

这个文件的优先级**高于** `manifest.json` 里的 `enabled` 字段。删掉状态文件即可恢复 manifest 的默认设置。ZIP 包的状态文件保存为压缩包旁边的 `<包名>.zip.state.json`。状态文件永远不会被当作包内容参与哈希、签名或同步。

## 包类型

Katton 支持两种包格式：

| 格式 | 存在形式 | 界面可编辑？ |
|---|---|---|
| **目录** | `kattonpacks/` 下包含 `manifest.json` 与源码的文件夹 | 是——开关与重载 |
| **ZIP** | `kattonpacks/` 下的 `.zip`，`manifest.json` 位于压缩包根目录 | 开关与重载 |

可执行 JAR 包不再支持。`.jar` 只有直接位于某个包的 `libs/` 目录时才是私有库。

## 用代码控制包开关

你也可以用 Kotlin 代码查询和切换包状态：

<!--@include: ../../example/quickstart/pack-ui/02.md-->

## 从 UI 触发重载

在包管理界面上点击 **Reload**：

1. 调用 `Katton.reloadScripts()` 重载服务端脚本
2. 调用 `Katton.reloadClientScriptsAsync()` 重载客户端脚本
3. 显示进度覆盖层，让你看着它跑完
4. 重载进行中会禁用 Reload 按钮（防止重复触发）

重载完成后按钮恢复可用。就算你关掉了界面，进度覆盖层仍会在 HUD 上显示。

## 从 IDE 部署

右上角的 **IDE** 按钮会开启回环开发桥。开启后，[Katton IDEA 插件](../quickstart/ide.md) 可以列出运行中的实例、部署世界包快照，并通过与 Reload 按钮相同的串行路径重载，再把编译诊断流回 IDE。该桥默认关闭，只接受携带本次会话令牌的本地连接。
