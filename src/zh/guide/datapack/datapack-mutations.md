# 配方、战利品表与数据包修改

数据包非常适合声明静态数据：配方、战利品表、标签、谓词、进度等。Katton 不需要替代整个系统，而是在需要逻辑的地方提供一层可热重载的 Kotlin 能力。

## Katton 能修改什么

完整 API 见 [修改现有内容](../modify/)。数据包开发者通常最关心：

| 数据包内容 | Katton API |
| --- | --- |
| 配方 | `modifyRecipe`、`removeRecipe` |
| 战利品表 | `modifyLootTable`、战利品表事件 |
| 村民交易 | `addVillagerTrade` |
| 现有物品属性 | `modifyItem` |
| 现有方块属性 | `modifyBlock` |
| 现有实体属性 | `modifyEntityType` |

## 重载行为

有些修改会暂存到 datapack apply 阶段。Katton 会在重载时清理并重新应用。

- `modifyRecipe`
- `removeRecipe`
- `modifyLootTable`
- `addVillagerTrade`

另一些修改是对 Minecraft 对象的实时修改。它们很强，但不一定能在删除脚本调用后自动恢复，通常需要重启。每类行为在 [修改现有内容](../modify/) 中都有说明。

## 什么时候保留 JSON

当数据静态且用 JSON 表达很清楚时，继续保留 JSON。以下情况适合迁移到 Katton：

- 结果依赖配置或运行时状态；
- 很多相似文件只有少量数值不同；
- 希望重载时动态添加或移除条目；
- 需要围绕战利品、配方或交易写事件逻辑。

## 迁移方式

大部分情况下原版数据包的json可以继续正常使用。如果用需要，先让原数据包 JSON 保持不动。把一个动态部分迁移到 Katton，重载并确认最终游戏行为一致后，再删除旧 JSON。

