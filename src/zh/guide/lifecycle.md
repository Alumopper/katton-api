# 选择入口执行阶段

每个入口函数分别回答两个问题：

1. 脚本包目录决定作用域：`GLOBAL`、`WORLD` 或同步得到的 `SERVER_CACHE`。
2. 注解决定执行阶段与重放策略。

Katton 会拒绝不兼容的组合，不会通过 `AUTO` 猜测阶段。

## 按所需状态选择阶段

| 所需对象或时机 | 脚本包作用域 | 注解 |
|---|---|---|
| 不依赖服务器的进程级初始化 | `GLOBAL` | `@ServerScriptEntrypoint(ServerPhase.BOOTSTRAP)` |
| 已运行的服务器及世界 | `GLOBAL` 或 `WORLD` | `@ServerScriptEntrypoint(ServerPhase.READY)` |
| 不依赖连接的一次性客户端初始化 | `GLOBAL` | `@ClientScriptEntrypoint(ClientPhase.READY)` |
| 注册表校验前的客户端注册 | `WORLD` 或 `SERVER_CACHE` | `@ClientScriptEntrypoint(ClientPhase.REGISTRY_SETUP)` |
| 本地玩家与客户端世界 | `WORLD` 或 `SERVER_CACHE` | `@ClientScriptEntrypoint(ClientPhase.JOINED)` |

服务端注解默认 `BOOTSTRAP`，客户端注解默认 `READY`，两个默认值都仅适用于全局包。世界包应始终显式写出阶段。

## 全局 Bootstrap

Bootstrap 用于不依赖服务器、世界、玩家或 Paper 插件的进程级初始化。

<!--@include: ../../example/guide/lifecycle/01.md-->

全局入口不会在热重载时重放。

## 服务端 Ready

命令、托管事件、数据包修改和大部分服务端玩法初始化应放在 `ServerPhase.READY`。

<!--@include: ../../example/guide/lifecycle/02.md-->

上下文提供 `server` 以及通用元数据：

- `reason`：`INITIAL_LOAD` 或 `HOT_RELOAD`
- `cause`：`SERVER_START`、`COMMAND`、`DATAPACK_RELOAD`、`SERVER_PACK_SYNC` 或 `CLIENT_JOIN`
- `packId`、`scope` 与 `platform`

只有世界入口确实不应再次执行时才设置 `replay = false`：

```kotlin
@ServerScriptEntrypoint(
    phase = ServerPhase.READY,
    replay = false
)
fun initializeOncePerWorldSession() {
    // WORLD 包仅在初次加载时执行。
}
```

`replay` 不能覆盖作用域规则：全局包永不重放，服务器缓存包始终重放。

## 客户端 Registry Setup

连接阶段所需的内置注册表对象和渲染器必须在校验服务器注册表数据之前存在。

<!--@include: ../../example/guide/lifecycle/03.md-->

若内置注册表条目需要同时存在于两个逻辑侧，可在同一个无参函数上放置两个注解：

```kotlin
import net.minecraft.world.item.Item
import top.katton.api.ClientPhase
import top.katton.api.ClientScriptEntrypoint
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint
import top.katton.api.registry.registerNativeItem
import top.katton.registry.RegisterMode

@ServerScriptEntrypoint(ServerPhase.READY)
@ClientScriptEntrypoint(ClientPhase.REGISTRY_SETUP)
fun registerContent() {
    registerNativeItem("example:token", RegisterMode.RELOADABLE) {
        Item(it)
    }
}
```

双端函数应保持无参，因为服务端和客户端阶段使用不同的上下文类型。

## 客户端 Joined

需要本地玩家、客户端世界或世界内 HUD 状态时使用 `JOINED`。Katton 会等这些对象可用后再调用入口。

<!--@include: ../../example/guide/lifecycle/04.md-->

多人服务器在线更新时，Katton 会先激活完整候选快照，再重放所有活动 `SERVER_CACHE` 入口。未变化的同步包也会重放，以保证客户端处理器与服务器拥有的快照一致。

完整生命周期契约见[脚本加载生命周期](../architecture/script-loading.md)。
