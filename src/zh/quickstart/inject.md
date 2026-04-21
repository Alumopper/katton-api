# 代码注入

Mixin 是非常强大的模组开发工具，但它本质上是静态机制，只能在模组初始化阶段加载。所以我们无法直接在 Kotlin 脚本中使用 Mixin 做运行时注入。不过不用担心，Katton 提供了轻量级代码注入 API，可以在运行时向已有 Java 方法注入逻辑，并且支持热重载。

## 插入

要在已有方法中插入代码，可以使用 [`injectBefore`](../../api/common/inject/InjectApi.md#injectbefore) 或 [`injectAfter`](../../api/common/inject/InjectApi.md#injectafter)。特别地，构造函数注入可使用 [`injectConstructorBefore`](../../api/common/inject/InjectApi.md#injectconstructorbefore) 或 [`injectConstructorAfter`](../../api/common/inject/InjectApi.md#injectconstructorafter)。

## 替换或重定向

使用 [`replace`](../../api/common/inject/InjectApi.md#replace) 可以将目标方法整体替换成你自己的实现。你也可以使用 [`redirect`](../../api/common/inject/InjectApi.md#redirect) 将目标方法调用重定向到你的实现。

## 参数与返回值操作

[`injectBefore`](../../api/common/inject/InjectApi.md#injectbefore) 与 [`injectAfter`](../../api/common/inject/InjectApi.md#injectafter) 都会提供 `call` 对象，你可以通过它修改方法参数或返回值。

你可以使用 [`call.setArgument(index, value)`](../../api/common/inject/InjectApi.md#injectioninvocationcontext-setargument) 修改参数，使用 [`call.setReturnValue(value)`](../../api/common/inject/InjectApi.md#injectioninvocationcontext-setreturnvalue) 修改返回值。你也可以调用 [`call.cancel()`](../../api/common/inject/InjectApi.md#injectioninvocationcontext-cancel) 直接取消原方法执行并立即返回。

## 示例

<!--@include: ../../example/quickstart/inject/01.md-->
