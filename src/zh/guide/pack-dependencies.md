# 脚本包依赖

Katton Alpha 0.5.0 允许一个脚本包依赖另一个脚本包。它和[模组与插件依赖](./dependencies.md)是两回事：

| 声明 | 描述对象 | 示例 |
|---|---|---|
| `dependencies` | 外部的 Fabric 模组、NeoForge 模组或 Paper 插件 | `create`、`spark`、`WorldEdit` |
| `packDependencies` | 其他 **Katton 脚本包** | 公共库包、任务框架包 |

当你想把项目拆成一个可复用的核心包和若干共享其 Kotlin 类型与状态的消费包时，就应使用脚本包依赖。

## 声明脚本包依赖

依赖按包 ID 声明，可附带版本范围、`required` 和 `export` 两个开关：

```json
{
  "id": "my_consumer",
  "name": "My Consumer Pack",
  "version": "1.0.0",
  "dependencies": [],
  "packDependencies": [
    {
      "id": "shared-behavior",
      "version": ">=1.0",
      "required": true,
      "export": false
    }
  ]
}
```

被依赖的目标就是一个带有自己 manifest 的普通脚本包：

```json
{
  "id": "shared-behavior",
  "name": "Shared Behavior",
  "version": "1.0",
  "dependencies": [],
  "packDependencies": []
}
```

| 字段 | 默认值 | 含义 |
|---|---|---|
| `id` | **必填** | 目标包的 manifest `id`，或作用域限定的同步 ID，例如 `world:shared-behavior`。 |
| `version` | `"*"` | 对目标包 `version` 字段的版本表达式。 |
| `required` | `true` | 为 `true` 时，目标缺失、被禁用、存在歧义或版本不兼容都会拒绝本包。 |
| `export` | `false` | 为 `true` 时，目标的依赖也会对“本包的消费者”可见。 |

版本表达式与模组依赖语法一致：

- 任意版本：`*`
- 精确版本：`2.0.0` 或 `=2.0.0`
- 比较：`>=1.0`、`<3.0`
- 空格或逗号连接的 AND 条件：`>=1.0 <2.0`
- OR 分支：`>=1.0 <2.0 || >=3.0`

## 包是如何匹配的

每次重载时，Katton 会在当前已启用的包中解析每条声明：

1. 先按**作用域限定的同步 ID** 匹配（`world:shared-behavior`、`global:shared-behavior`、`server_cache:shared-behavior`）。
2. 否则按 manifest `id` 进行大小写不敏感匹配。

如果匹配到多个包，该依赖就是**歧义**的，必需声明会导致消费包被拒绝。请让 manifest ID 在作用域之间保持唯一，或在声明中使用限定 ID。

两个同步 ID 相同的包始终会因身份重复而被拒绝，即使没有包依赖它们也是如此。

## 作用域规则

一个包只能依赖生命周期不短于自身的包：

| 消费包作用域 | 允许的目标作用域 |
|---|---|
| `GLOBAL` | 仅 `GLOBAL` |
| `WORLD` | `GLOBAL`、`WORLD` |
| `SERVER_CACHE` | 仅 `SERVER_CACHE` |

全局包不能引入只属于世界的代码，远程同步包也不能依赖客户端本地包。循环依赖同样会被拒绝：`A → B → A` 会使这个环失效，其他无关的包仍会正常加载。

必需依赖失败只会拒绝**消费包及其必需的下游消费者**，不会让整次重载失败。可选依赖（`required: false`）在缺失或不兼容时直接不建立边。

## 可见性与 export

直接依赖会暴露自己的**编译产物，包括 Kotlin 元数据**，因此消费包可以像同一个编译单元那样导入它的公开 Kotlin 类、调用它的函数。

传递依赖默认是私有的：

```text
A -> B -> C
```

- `A` 直接可见 `B`。
- 只有当 `B` 对 `C` 的声明写了 `"export": true`，或者 `A` 自己也声明了 `C` 时，`A` 才能看到 `C`。
- 包内直接位于 `libs/*.jar` 的库始终私有，绝不会暴露给消费者。

可以用 `export` 做一个门面包，只重新导出经过挑选的依赖；实现细节保持 `false` 即可。

## 私有库与共享状态

每个包保留自己私有的库状态，因此两个包可以各自打包同一个 JAR 的不同版本而互不冲突。与此同时，**消费者共享被依赖包的同一个活动实例**：

- `shared-behavior` 的所有消费者使用同一个 ClassLoader 和同一份 `object` 状态。
- 依赖包的入口会**先于**消费者的入口执行（拓扑顺序），因此初始化顺序是可预期的。
- 消费者不会得到依赖状态的私有副本——共享状态正是这一特性的意义所在。

## 重载行为

脚本包依赖会改变重载时需要替换的范围：

- 只重载**消费者**时，未变化的依赖实例及其共享状态会保留，只替换消费者的代码与回调。
- 重载**被依赖包**时，会在**同一个事务**中替换该包以及所有受影响的消费者。
- 影响范围通过新旧两张依赖图做反向闭包计算，因此删除边、删除包、新增可选依赖都能正确处理。
- 纯资源变更（`assets/**`、`data/**`、音频等非源码文件）会保留已编译代码和正在运行的包代际，可以在不重跑入口的情况下更新贴图或数据。
- 全局包的代码变更仍需重启游戏或服务器，不会被热应用。

互不相关的依赖组件各自独立提交。修改 `A → B ← C` 中的 `A` 只会重载 `A`；修改 `B` 会同时替换 `A` 与 `C`。如果后续资源步骤失败，只会回滚该组件，已经提交的其他组件保持活动。

回滚会恢复**受管回调与资源值**，但不会重放旧入口。它不会撤销任意脚本副作用，例如世界修改、文件写入，或通过第三方 API 设置的静态字段。

## 完整示例

仓库在 `examples/pack-dependencies/` 提供了一个探针包。共享包持有一个计数器：

```kotlin
package katton.examples.shared

/** This state belongs to one active shared-behavior pack instance. */
object SharedCounter {
    private var value = 0
    @Synchronized fun next(): Int = ++value
}
```

消费者导入它，并在服务器就绪时打印下一个值：

```kotlin
package katton.examples.consumer

import katton.examples.shared.SharedCounter
import top.katton.api.ServerPhase
import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint(phase = ServerPhase.READY)
fun ready() {
    println("Katton dependency smoke: shared counter = ${SharedCounter.next()}")
}
```

把两个包都复制到世界的 `kattonpacks/` 目录并启动游戏：

1. 首次加载打印 `shared counter = 1`。
2. 只修改消费者并执行 `/katton reload`，会打印 `2`。依赖实例仍然存活，状态被保留。
3. 修改共享包并重载，两个包会一起被替换，计数器回到 `1`。
4. 在消费者入口加入 `error("fault injection")` 后重载，旧的消费者与共享包绑定仍然保持活动。

## 目录包与 ZIP 包

脚本包依赖对目录包和 ZIP 包完全一致。两种载体会产生相同的逻辑文件、哈希与签名载荷：

```text
kattonpacks/shared-behavior/       # 或者 shared-behavior.zip，manifest.json 位于压缩包根目录
├── manifest.json
├── Shared.kt
└── libs/utility-1.0.jar
```

要分发 ZIP 包，先用当前的 [Katton-Sign](https://github.com/Alumopper/Katton-Sign) 插件签名目录，再压缩其**内容**，让 `manifest.json` 位于压缩包根目录。不要再套一层文件夹，也不要让目录包和 ZIP 包在 `kattonpacks/` 中使用同一个 manifest ID。

## 限制

- 脚本包隔离**不是安全沙箱**。它隔离依赖、库和状态以保证重载正确性，但不限制任意 JVM 代码。
- 重载不会回滚通过第三方 API 直接进行的世界修改、文件写入或效果。
- 依赖只在已启用的包之间解析。在包界面禁用某个必需依赖后，下次重载会拒绝其消费者。
- 全局代码变更不会热应用，需要重启游戏或服务器。

完整字段参考见[清单、依赖与签名](../architecture/manifest.md)；依赖感知重载在重载流程中的位置见[脚本加载生命周期](../architecture/script-loading.md)。
