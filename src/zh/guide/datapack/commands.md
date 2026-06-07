# 调用原版命令

Katton 的数据包调用 API 位于 `top.katton.api.dpcaller` 包下。它们为已经熟悉原版命令的数据包开发者提供了从命令到 Kotlin 的桥梁。

当你做的事情本质上仍然是调用 Minecraft 命令时，就适合使用这些 helper：修改计分板、发送消息、施加效果、传送、生成粒子、调用原版函数等。

## 基础示例

<!--@include: ../../../example/quickstart/for-cber/01.md-->

在数据包中，命令解析器处理的是文本。在 Katton 中，你调用的是带类型参数的函数。这意味着编辑器补全、类型安全和更好的可读性。

## 什么时候使用命令 helper

| 适合使用命令 helper | 更适合 Kotlin 或事件 |
| --- | --- |
| 直接执行原版操作 | 需要计算、分支或循环 |
| 已经有对应的原版命令 | 需要响应游戏事件 |
| 正在逐步迁移已有 mcfunction | 需要直接访问实体或服务端对象 |

## API 参考

- [杂项 helper](../../../api/common/dpcaller/KattonMiscApi.md)
- [计分板 helper](../../../api/common/dpcaller/KattonScoreboardApi.md)
- [实体 helper](../../../api/common/dpcaller/KattonEntityApi.md)
- [玩家 helper](../../../api/common/dpcaller/KattonPlayerApi.md)
- [世界 helper](../../../api/common/dpcaller/KattonWorldApi.md)
- [服务端 helper](../../../api/common/dpcaller/KattonServerApi.md)
