# 注册

向游戏添加自定义内容是模组的核心。Katton 让你能在 Kotlin 脚本中注册 **九种**原版 Minecraft 对象——全部支持热重载。

> [!WARNING]
> 注册系统仍在积极开发中。RELOADABLE 模式的 API 已经稳定，但未来可能还会有调整。如有疑问请参考 [API 文档](/api/)。

## 注册模式

每个注册函数都接受一个 `registerMode` 参数：

| 模式 | 行为 |
|---|---|
| `RegisterMode.GLOBAL` | 模组初始化时注册一次。**不**纳入重载追踪。所有重载都保留。 |
| `RegisterMode.RELOADABLE` | 由 Katton 追踪。重载时所有者信息被清空，脚本可重新注册。**实际的 Minecraft 注册表条目会被保留**（软保留）以防止 holder 崩溃。 |
| `RegisterMode.AUTO` | 模组初始化时表现为 GLOBAL，服务端启动后表现为 RELOADABLE。懒得想的话用这个就行。 |

> [!TIP]
> 迭代中的内容用 `RELOADABLE`。需要跨重载保持不变的内容用 `GLOBAL`。

## 全部原生类型

Katton 支持以下 Minecraft 内置类型的注册：

| # | 类型 | API 函数 | 侵入式 Holder |
|---|---|---|---|
| 1 | **物品** | `registerNativeItem` | 是 |
| 2 | **方块** | `registerNativeBlock` | 是 |
| 3 | **药水效果** | `registerNativeEffect` | 否 |
| 4 | **声音事件** | `registerNativeSoundEvent` | 否 |
| 5 | **粒子类型** | `registerNativeParticleType` | 是 |
| 6 | **方块实体类型** | `registerNativeBlockEntityType` | 是 |
| 7 | **创造标签页** | `registerNativeCreativeTab` | 否 |
| 8 | **数据组件类型** | `registerNativeDataComponentType` | 是 |
| 9 | **实体类型** | `registerNativeEntityType` / `registerNativeEntityTypeWithProperties` | 是 |

### 1. 物品

最常用的注册调用。你可以注册简单物品、自定义行为物品和食物。

<!--@include: ../../example/quickstart/registry/01.md-->

> [!CAUTION]
> 当客户端连接到服务器时，只有物品的**数据组件**会同步过去，你在物品类中写的 Kotlin 逻辑不会同步。需要在客户端执行的交互逻辑可能要额外处理。方块注册也存在同样的问题。

### 2. 方块

注册带强度、工具要求和自定义行为的方块。

<!--@include: ../../example/quickstart/registry/02.md-->

> [!NOTE]
> 你还需要在资源包中放置方块状态 JSON 和模型 JSON，方块才能正常渲染。分别放在 `assets/<namespace>/blockstates/` 和 `assets/<namespace>/models/block/` 目录下。

### 3. 药水效果

创建自定义药水效果——可以是增益的也可以是负面的。

<!--@include: ../../example/quickstart/registry/03.md-->

### 4. 声音事件

注册自定义声音。需要在资源包中搭配 `sounds.json`。

<!--@include: ../../example/quickstart/registry/05.md-->

### 5. 粒子类型

添加自定义视觉粒子。

<!--@include: ../../example/quickstart/registry/06.md-->

### 6. 方块实体类型

用于存储数据的方块（箱子、熔炉、自定义机器等）。

<!--@include: ../../example/quickstart/registry/07.md-->

### 7. 创造模式标签页

在创造模式背包中组织你的物品。

<!--@include: ../../example/quickstart/registry/08.md-->

### 8. 数据组件类型

类型安全的物品堆叠自定义数据——可以理解为结构化 NBT。

<!--@include: ../../example/quickstart/registry/09.md-->

### 9. 实体类型

注册自定义实体。有两种等级：

**基础级**——只注册实体类型，无属性或生成配置：
<!--@include: ../../example/quickstart/registry/10.md-->

**完整级**——实体带属性、刷怪蛋和自然生成规则：
<!--@include: ../../example/quickstart/registry/11.md-->

## 注册生命周期

### 重载时发生了什么？

1. 每个注册表调用 **`beginReload()`**。Katton 清除所有者追踪但**不会从 Minecraft 内置注册表中移除条目**（软保留）。这防止了游戏访问已有物品、方块、实体等时出现"Unregistered holder"崩溃。
2. 脚本重新执行。`ensureRegistered` 如果发现注册表中已存在该对象，会返回**同一个**对象实例。
3. `markManaged()` 将该条目重新标记为当前脚本所有。

### 什么是残留条目？

如果你删除了某个注册了一堆东西的脚本，那些东西还会留在 Minecraft 注册表中。Katton 把这些标记为"残留"。用 `/katton registry stale` 可以查看它们。

要清除残留条目，唯一的方法是重启游戏。这是有意为之的取舍：**宁可多留一点，也不能崩。**

### 命令注册

脚本注册的命令使用 `ScriptCommandRegistry`——重载时它们会被自动清理。用 `registerCommand` API 从你的脚本里添加自定义命令。

<!--@include: ../../example/quickstart/registry/04.md-->
