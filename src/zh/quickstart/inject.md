# 代码注入

Mixin 是一个强大的模组开发工具，但它是静态的，只能在模组初始化阶段加载。因此，我们不能在 Kotlin 脚本中使用 Mixin 来注入代码。但是没关系，Katton 提供了一个轻量级的 API，允许你在运行时将代码注入到现有的 Java 方法中，并且仍然支持热重载。

## 插入

要向已有的方法中插入代码，你可以使用 `insertBefore` 或 `insertAfter` 函数。特别地，使用 `injectConstructorBefore` 或 `injectConstructorAfter` 向构造函数注入代码。

## 替换或重定向

使用 `replace` 函数将目标方法替换为你自己的实现。你也可以使用 `redirect` 函数将目标方法调用重定向到你自己的方法。

## 示例

<!--@include: ../../example/quickstart/inject/01.md-->
