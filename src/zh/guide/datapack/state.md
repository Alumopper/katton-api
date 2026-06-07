# 计分板、标签、NBT 与 Storage

数据包逻辑经常把计分板、标签、NBT 和 storage 这些游戏状态当作变量系统使用。Katton 给了你更多选择。最好的迁移方式不是删光这些系统，而是用更 Kotlin 的方式使用这些状态变量。

## 状态放哪里

| 需求 | 推荐选择 |
| --- | --- |
| 需要被命令或界面看到的数字 | 计分板 |
| 需要被原版命令选择器使用的实体标记 | 实体标签 |
| 本来就属于实体或方块的数据 | 实体/方块 NBT |
| 与现有数据包互通 | Storage NBT 或计分板 |
| 一次运行中的临时计算 | Kotlin 变量和集合 |
| 脚本自己的持久配置 | `manifest.json` config 或自定义文件 |

## 计分板

当原版命令、命令方块或现有数据包函数需要看到某个值时，计分板仍然很好用。如果这个值只是为了让 `.mcfunction` 能做算术，通常改成 Kotlin 变量更清晰。

```kotlin
val wave = 3
val nextWave = wave + 1
```

计分板用于共享状态，Kotlin 用于计算。

## 标签

标签依然是选择器与脚本之间的便捷桥梁。比如让现有数据包函数给实体打标签，然后让 Katton 用 `EntitySelectorBuilder` 选择并处理它们。

不要给每个内部状态都发明一个标签。如果状态只属于脚本，一个 Kotlin `Set<UUID>` 或小 data class 通常更清楚。

## NBT 与 Storage

Katton 暴露了一些 API，用于进行你在数据包里熟悉的 NBT 操作。

- [`getEntityNbt`](../../../api/common/dpcaller/KattonNbtApi.md#getentitynbt)
- [`getBlockNbt`](../../../api/common/dpcaller/KattonNbtApi.md#getblocknbt)
- [`getStorageNbt`](../../../api/common/dpcaller/KattonNbtApi.md#getstoragenbt)

当你需要读取 Minecraft 持有的数据，或需要和现有数据包 storage 互通时，用 NBT。建模脚本内部逻辑时，用 Kotlin 对象。

## 迁移判断

不要把每个计分板目标一比一翻译。对每个 objective 问三个问题：

1. 原版命令逻辑还需要读这个值吗？
2. 它需要在完整服务器重启后保留吗？
3. 它其实只是旧 mcfunction 里的局部变量吗？

答案通常会告诉你这个值该放在哪里。

