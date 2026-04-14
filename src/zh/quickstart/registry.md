# 注册

向游戏添加自定义内容是模组开发框架的基本功能。在 Katton 中，你可以使用 Katton 注册 API 注册新的方块、物品、药水效果等。

>[!WARNING]
> Katton 的注册系统仍在开发中，可能会有不稳定的行为。

## 物品注册

<!--@include: ../../example/quickstart/registry/01.md-->

>[!CAUTION]
> 当 Minecraft 客户端连接到服务器时，它会注册服务器已经注册的每个物品。但是，只有物品的数据组件会同步到客户端，物品类中定义的逻辑不会同步。一些需要在客户端执行交互逻辑可能无法正常工作。
>
> 方块注册也有同样的问题，目前我们还没有一个好的解决方案。我们计划在未来引入类似 KubeJS 的"全局脚本"系统来解决注册方面的同步问题。

## 方块注册

<!--@include: ../../example/quickstart/registry/02.md-->

## 药水效果注册

<!--@include: ../../example/quickstart/registry/03.md-->

## 命令注册

<!--@include: ../../example/quickstart/registry/04.md-->

---

我们正在努力支持更多内容类型的注册。
