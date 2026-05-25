# 脚本加载生命周期

Katton 会从启用的脚本包中编译普通 `.kt` 和 `.java` 文件，然后调用带有 `@ServerScriptEntrypoint` 或 `@ClientScriptEntrypoint` 的顶层无参函数。

## 初始化

所有平台都会初始化 common runtime：

```kotlin
KattonRegistry.initialize()
ScriptPackManager.setGameDirectory(...)
ScriptEngine.setCacheDirectory(...)
ScriptPackManager.refreshGlobalPacks()
```

Fabric 和 NeoForge 还会注册网络 payload、mixin、事件桥、渲染钩子和生命周期回调。Paper 会调用 `Katton.paperInitialize()`，禁用注册表修改和客户端功能，注册 Bukkit listener，并安装 Paper 托管事件。

## 服务端重载

`/katton reload` 和服务端数据包重载大体遵循同一流程：

1. 刷新 global/world 脚本包快照。
2. 清理脚本拥有的状态：事件、托管监听、注入、注册表所有权、数据包修改。
3. 编译并执行启用包中的服务端入口。
4. 应用暂存的数据包修改。
5. 在 Fabric/NeoForge 上，在需要时同步注册表或脚本包状态到客户端。

## 客户端重载

Fabric/NeoForge 客户端重载：

1. 清理客户端事件和渲染状态。
2. 刷新本地脚本包。
3. 合并本地包与已信任的 server-cache 包。
4. 编译并执行客户端入口。
5. 重新注册 HUD、世界渲染和实体渲染器。

Paper 上客户端重载为空操作，因为 `hasClient = false`。

## 单人与多人

单人游戏较直接：集成服务器和本地客户端在同一游戏进程中，但服务端脚本和客户端脚本仍然分别编译到不同 ClassLoader。

多人游戏有一个严格时序要求：远程客户端脚本必须在注册表校验前执行。Katton 在配置阶段发送 hash 和 bundle，在渲染线程验证、信任并执行脚本期间阻塞网络处理器，然后再继续注册表校验。

## ClassLoader 提醒

服务端和客户端脚本环境使用不同 ClassLoader。不要把脚本定义的服务端类强转为脚本定义的客户端类。跨 ClassLoader 共享数据时，使用 Minecraft common 类型或显式使用 `KattonBridge`。

