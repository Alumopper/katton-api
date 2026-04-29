# 注册

向游戏添加自定义内容是模组的核心。Katton 让你能在 Kotlin 脚本中注册 **十一种**原版 Minecraft 对象——全部支持热重载。

> [!WARNING]
> 注册系统仍在积极开发中。RELOADABLE 模式的 API 已经稳定，但未来可能还会有调整。如有疑问请参考 [API 文档](/api/)。

## 注册模式

每个注册函数都接受一个 `registerMode` 参数：

| 模式 | 行为 |
|---|---|
| `RegisterMode.GLOBAL` | 模组初始化时注册一次。**不**纳入重载追踪。所有重载都保留。 |
| `RegisterMode.RELOADABLE` | 由 Katton 追踪。重载时所有者信息被清空，脚本可重新注册。Minecraft 注册表条目会被**保留**（软保留）以防止 holder 崩溃。 |
| `RegisterMode.AUTO` | 模组初始化时表现为 GLOBAL，服务端启动后表现为 RELOADABLE。懒得想的话用这个就行。 |

> [!TIP]
> 迭代中的内容用 `RELOADABLE`。需要跨重载保持不变的内容用 `GLOBAL`。

## 重载生命周期

执行 `/katton reload` 后：

1. 每个注册表调用 `beginReload()` — 清除所有权追踪
2. 脚本重新执行 — `ensureRegistered` 如果已注册则返回**同一个**实例
3. `markManaged()` 重新标记为当前脚本所有
4. 残留条目（不再被任何脚本注册的）保留在 Minecraft 注册表中直到重启

## 注册诊断

用 `/katton registry` 查看每个注册表的摘要：Katton 追踪了多少条目、有多少被脚本管理、有多少是**残留**的。

用 `/katton registry stale` 只显示有残留条目的注册表。

## 全部原生类型

### 1. 物品

最常用的注册调用。可以注册简单物品、自定义行为物品和食物。

<!--@include: ../../example/quickstart/registry/01.md-->

> [!CAUTION]
> 客户端连接服务器时只有物品**数据组件**会同步——物品类的 Kotlin 逻辑不会同步。需要客户端执行的交互逻辑要额外处理。

### 2. 方块

注册自定义方块，可设强度、工具要求、自定义行为。

<!--@include: ../../example/quickstart/registry/02.md-->

> [!NOTE]
> 方块需要资源包里的方块状态 JSON 和模型 JSON 才能正常渲染。

### 3. 药水效果

创建自定义药水效果——增益或负面均可。

<!--@include: ../../example/quickstart/registry/03.md-->

### 4. 命令

脚本注册的命令用 `ScriptCommandRegistry`——重载时自动清理。

<!--@include: ../../example/quickstart/registry/04.md-->

### 5. 声音事件

注册自定义声音。需要资源包里搭配 `sounds.json`。

<!--@include: ../../example/quickstart/registry/05.md-->

### 6. 粒子类型

添加自定义视觉粒子。

<!--@include: ../../example/quickstart/registry/06.md-->

### 7. 方块实体类型

用于存储数据的方块（箱子、熔炉、自定义机器）。

<!--@include: ../../example/quickstart/registry/07.md-->

### 8. 创造模式标签页

在创造模式背包中组织你的物品。

<!--@include: ../../example/quickstart/registry/08.md-->

### 9. 数据组件类型

类型安全的物品堆叠自定义数据——可以理解为结构化 NBT。

<!--@include: ../../example/quickstart/registry/09.md-->

### 10. 实体类型（基础）

只注册实体类型——无属性、无渲染器、无刷怪蛋。

<!--@include: ../../example/quickstart/registry/10.md-->

### 11. 实体类型（完整——含属性 + 刷怪蛋）

完整实体注册：包含属性、刷怪蛋和生成配置。

<!--@include: ../../example/quickstart/registry/11.md-->

> [!TIP]
> 要了解**完整的自定义动画实体教程**（从 BlockBench 模型到游戏内动画），请看 **[实体教程](./entity.md)**。
