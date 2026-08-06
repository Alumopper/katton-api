# 脚本加载生命周期

Katton 会编译已启用脚本包中的普通 `.kt` 和 `.java` 文件，并在明确的执行阶段调用带注解的顶层函数。入口函数可以无参数，也可以接收一个与当前阶段兼容的上下文参数。

脚本包所在目录决定其**作用域**，注解只决定**执行阶段**。API 中没有 `AUTO`，也没有可变的“当前活动阶段”。

## 作用域与阶段

| 作用域 | 位置 | 可用服务端阶段 | 可用客户端阶段 |
|---|---|---|---|
| `GLOBAL` | `<游戏目录>/kattonpacks/` | `BOOTSTRAP`、`READY` | `READY` |
| `WORLD` | `<世界目录>/kattonpacks/` | `READY` | `REGISTRY_SETUP`、`JOINED` |
| `SERVER_CACHE` | 多人服务器同步缓存 | — | `REGISTRY_SETUP`、`JOINED` |

不合法的作用域/阶段组合会直接报错，不会被静默调整到其他阶段，因此执行时机始终能从源码中看清。

## 入口注解

```kotlin
import top.katton.api.*

@ServerScriptEntrypoint(
    phase = ServerPhase.READY,
    replay = true
)
fun serverReady(context: ServerReadyContext) {
    println("${context.packId} loaded on ${context.platform}")
}

@ClientScriptEntrypoint(
    phase = ClientPhase.JOINED,
    replay = true
)
fun clientJoined(context: ClientJoinedContext) {
    println("Joined as ${context.player.name.string}")
}
```

默认值为：

```kotlin
@ServerScriptEntrypoint(
    phase = ServerPhase.BOOTSTRAP,
    replay = true
)

@ClientScriptEntrypoint(
    phase = ClientPhase.READY,
    replay = true
)
```

这两个默认阶段都属于全局脚本包，因此世界脚本包通常要显式写出 `ServerPhase.READY` 或相应的客户端世界阶段。

## 各阶段的含义

| 阶段 | 上下文 | 适用场景 |
|---|---|---|
| `ServerPhase.BOOTSTRAP` | `BootstrapContext` | 不依赖服务器或世界的进程级初始化；仅限全局包。 |
| `ServerPhase.READY` | `ServerReadyContext` | 命令、事件、世界、注册表等需要服务器对象的工作。 |
| `ClientPhase.READY` | `ClientReadyContext` | 不依赖连接的一次性客户端初始化；仅限全局包。 |
| `ClientPhase.REGISTRY_SETUP` | `ClientRegistryContext` | 必须在远程注册表校验之前完成的客户端内容注册。 |
| `ClientPhase.JOINED` | `ClientJoinedContext` | 需要连接、本地玩家和客户端世界的工作。 |

所有上下文都提供 `packId`、`scope`、`reason`、`cause` 和 `platform`。阶段专用上下文还会提供该阶段能够保证存在的 `server`、`client`、`player` 或 `level`。

`reason` 用于区分 `INITIAL_LOAD` 与 `HOT_RELOAD`。`cause` 说明本次调用由何种操作引起：`SERVER_START`、`COMMAND`、`DATAPACK_RELOAD`、`SERVER_PACK_SYNC` 或 `CLIENT_JOIN`。

不需要上下文时仍可使用无参入口：

```kotlin
@ServerScriptEntrypoint(ServerPhase.READY)
fun registerHandlers() {
    // 注册监听器
}
```

## 重放规则

注解中的 `replay` 要结合脚本包作用域解释：

| 作用域 | 热重载行为 |
|---|---|
| `GLOBAL` | 永不重放；只在相应生命周期边界执行一次。 |
| `WORLD` | `replay = true` 时重放，设为 `false` 时跳过；默认是 `true`。 |
| `SERVER_CACHE` | 始终重放，即使包未变化或注解写了 `replay = false`。 |

服务器缓存包必须无条件重放，因为服务器拥有完整的活动快照。每次新修订激活后，所有活动同步包都要重新注册客户端状态，避免旧监听器或渲染回调残留。

全局 `ServerPhase.READY` 入口对每个服务器实例执行一次，并在服务器停止时清理其注册状态。`ClientPhase.JOINED` 会等待本地玩家和客户端世界都可用后再执行。

## 重载流程

`/katton reload` 与服务端数据包重载大致按以下流程执行：

1. 刷新全局和世界脚本包快照。
2. 校验当前平台与运行侧适用的模组/插件依赖。
3. 清理可重放的事件、监听器、注入、注册表所有权与数据包修改。
4. 使用声明的依赖类路径编译有效脚本包。
5. 按作用域和重放策略调用 `ServerPhase.READY` 入口。
6. 应用暂存的数据包修改。
7. Fabric/NeoForge 在成功重载后向客户端发布新修订。

Fabric/NeoForge 客户端激活流程：

1. 校验客户端适用的依赖。
2. 预编译完整的候选快照。
3. 只有候选快照可激活时才清理现有客户端事件和渲染状态。
4. 先执行 `REGISTRY_SETUP`，再在所需对象可用时执行或安排 `JOINED`。
5. 若校验、信任、下载或编译失败，继续保留上一活动修订。

Paper 的 `hasClient = false`，因此没有客户端生命周期。

## 类加载

脚本编译与执行只会接入清单中明确声明的依赖。

- Fabric/NeoForge 会把声明的模组及其必需传递模组依赖加入编译类路径，运行时使用加载器中已经转换过的真实类。
- Paper 在 `ServerPhase.READY` 解析已启用插件，把插件真实 JAR 或类目录加入编译类路径，并在运行时委托给插件自身的 ClassLoader。Katton 不会加载插件的第二份副本，普通类型调用也不会每次经过反射。
- 若两个声明的 Paper 插件导出相同类名，Katton 会将脚本包判定为歧义并拒绝加载，而不是按不稳定的顺序选择。

服务端与客户端脚本环境仍使用不同的脚本 ClassLoader。不要在两侧之间强转脚本自定义类型；应交换共同的 Minecraft 类型或显式桥接数据。

依赖声明见[清单、依赖与签名](./manifest.md)，多人激活顺序见[脚本包同步与信任](./pack-sync.md)。
