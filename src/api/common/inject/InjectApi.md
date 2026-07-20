---
title: InjectApi
outline: [2, 2]
---

<ApiDocPage
  title="InjectApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.inject"
  source-file="common/src/main/kotlin/top/katton/api/inject/InjectApi.kt"
>
注册注入的句柄，用于回滚操作。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;InjectionHandle&quot;,&quot;href&quot;:&quot;#injectionhandle&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.method&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-method&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.instance&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-instance&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.arguments&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-arguments&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.owner&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-owner&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.setArgument&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-setargument&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.cancel&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-cancel&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.cancelWith&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-cancelwith&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;InjectionInvocationContext.setReturnValue&quot;,&quot;href&quot;:&quot;#injectioninvocationcontext-setreturnvalue&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;ConstructorInvocationContext&quot;,&quot;href&quot;:&quot;#constructorinvocationcontext&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;ConstructorInvocationContext.constructor&quot;,&quot;href&quot;:&quot;#constructorinvocationcontext-constructor&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ConstructorInvocationContext.instance&quot;,&quot;href&quot;:&quot;#constructorinvocationcontext-instance&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ConstructorInvocationContext.arguments&quot;,&quot;href&quot;:&quot;#constructorinvocationcontext-arguments&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ConstructorInvocationContext.owner&quot;,&quot;href&quot;:&quot;#constructorinvocationcontext-owner&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;injectBefore&quot;,&quot;href&quot;:&quot;#injectbefore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectBefore&quot;,&quot;href&quot;:&quot;#injectbefore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectAfter&quot;,&quot;href&quot;:&quot;#injectafter&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectConstructorBefore&quot;,&quot;href&quot;:&quot;#injectconstructorbefore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectConstructorBefore&quot;,&quot;href&quot;:&quot;#injectconstructorbefore&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectConstructorAfter&quot;,&quot;href&quot;:&quot;#injectconstructorafter&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectConstructorAfter&quot;,&quot;href&quot;:&quot;#injectconstructorafter&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;injectAfter&quot;,&quot;href&quot;:&quot;#injectafter&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;replace&quot;,&quot;href&quot;:&quot;#replace&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;replace&quot;,&quot;href&quot;:&quot;#replace&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;redirect&quot;,&quot;href&quot;:&quot;#redirect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;redirect&quot;,&quot;href&quot;:&quot;#redirect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rollbackUnsafe&quot;,&quot;href&quot;:&quot;#rollbackunsafe&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rollbackUnsafeByOwner&quot;,&quot;href&quot;:&quot;#rollbackunsafebyowner&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## InjectionHandle

<ApiMemberCard
  id="injectionhandle"
  name="InjectionHandle"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class InjectionHandle internal constructor( val id: String )
```

注册注入的句柄，用于回滚操作。

### Properties

| Property | Description |
| --- | --- |
| `id` | 注入注册 ID，用于回滚。 |

</ApiMemberCard>

## InjectionInvocationContext

<ApiMemberCard
  id="injectioninvocationcontext"
  name="InjectionInvocationContext"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class InjectionInvocationContext internal constructor( private val delegate: InjectionManager.InjectionInvocation )
```

传给不安全回调的调用上下文。

可访问正在调用的方法、接收实例、参数，并控制调用流程。

### Properties

| Property | Description |
| --- | --- |
| `delegate` | 底层的注入调用委托。 |

### InjectionInvocationContext.method

<ApiMemberCard
  id="injectioninvocationcontext-method"
  name="InjectionInvocationContext.method"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val method: Method
```

当前正在调用的方法。

</ApiMemberCard>

### InjectionInvocationContext.instance

<ApiMemberCard
  id="injectioninvocationcontext-instance"
  name="InjectionInvocationContext.instance"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val instance: Any?
```

方法接收实例；对于静态方法则为 `null`。

</ApiMemberCard>

### InjectionInvocationContext.arguments

<ApiMemberCard
  id="injectioninvocationcontext-arguments"
  name="InjectionInvocationContext.arguments"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val arguments: Array<Any?>
```

原始参数数组。

</ApiMemberCard>

### InjectionInvocationContext.owner

<ApiMemberCard
  id="injectioninvocationcontext-owner"
  name="InjectionInvocationContext.owner"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val owner: String?
```

这次调用绑定的脚本归属。

</ApiMemberCard>

### InjectionInvocationContext.setArgument

<ApiMemberCard
  id="injectioninvocationcontext-setargument"
  name="InjectionInvocationContext.setArgument"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setArgument(index: Int, value: Any?)
```

修改当前调用中指定位置的参数。

### Parameters

| Parameter | Description |
| --- | --- |
| `index` | 要修改的参数下标。 |
| `value` | 参数的新值。 |

</ApiMemberCard>

### InjectionInvocationContext.cancel

<ApiMemberCard
  id="injectioninvocationcontext-cancel"
  name="InjectionInvocationContext.cancel"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun cancel()
```

取消当前调用。若未覆写返回值，则使用该类型的默认值。

</ApiMemberCard>

### InjectionInvocationContext.cancelWith

<ApiMemberCard
  id="injectioninvocationcontext-cancelwith"
  name="InjectionInvocationContext.cancelWith"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun cancelWith(returnValue: Any?)
```

取消当前调用，并立即指定返回值。

### Parameters

| Parameter | Description |
| --- | --- |
| `returnValue` | 用来替代方法执行结果的返回值。 |

</ApiMemberCard>

### InjectionInvocationContext.setReturnValue

<ApiMemberCard
  id="injectioninvocationcontext-setreturnvalue"
  name="InjectionInvocationContext.setReturnValue"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setReturnValue(returnValue: Any?)
```

在 after 阶段覆写返回值。

### Parameters

| Parameter | Description |
| --- | --- |
| `returnValue` | 用来替代原始结果的返回值。 |

</ApiMemberCard>

</ApiMemberCard>

## ConstructorInvocationContext

<ApiMemberCard
  id="constructorinvocationcontext"
  name="ConstructorInvocationContext"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class ConstructorInvocationContext internal constructor( private val delegate: InjectionManager.ConstructorInvocation )
```

传给不安全构造器回调的构造器调用上下文。

### Properties

| Property | Description |
| --- | --- |
| `delegate` | 底层的构造器调用委托。 |

### ConstructorInvocationContext.constructor

<ApiMemberCard
  id="constructorinvocationcontext-constructor"
  name="ConstructorInvocationContext.constructor"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val constructor: Constructor<*>
```

当前正在调用的构造器。

</ApiMemberCard>

### ConstructorInvocationContext.instance

<ApiMemberCard
  id="constructorinvocationcontext-instance"
  name="ConstructorInvocationContext.instance"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val instance: Any?
```

已构造的实例（`this`），如果可用。

</ApiMemberCard>

### ConstructorInvocationContext.arguments

<ApiMemberCard
  id="constructorinvocationcontext-arguments"
  name="ConstructorInvocationContext.arguments"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val arguments: Array<Any?>
```

Raw constructor argument array.

</ApiMemberCard>

### ConstructorInvocationContext.owner

<ApiMemberCard
  id="constructorinvocationcontext-owner"
  name="ConstructorInvocationContext.owner"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val owner: String?
```

Bound script owner for this invocation.

</ApiMemberCard>

</ApiMemberCard>

## injectBefore

<ApiMemberCard
  id="injectbefore"
  name="injectBefore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectBefore(targetClassName: String, methodName: String, parameterTypeNames: List<String> = emptyList(), owner: String? = null, handler: (InjectionInvocationContext) -> Unit): InjectionHandle
```

Injects a callback before target method execution (string-based overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `targetClassName` | target class fully-qualified name |
| `methodName` | target method name |
| `parameterTypeNames` | parameter type names, e.g. `int`, `java.lang.String` |
| `owner` | script owner (nullable, auto-resolved from script context if null) |
| `handler` | before callback |

### Returns

injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## injectBefore

<ApiMemberCard
  id="injectbefore"
  name="injectBefore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectBefore(method: Method, owner: String? = null, handler: (InjectionInvocationContext) -> Unit): InjectionHandle
```

Injects a callback before target method execution (Method overload).

Prefer this overload when a reflected [Method] is already available,
to avoid string-signature assembly errors.

</ApiMemberCard>

## injectAfter

<ApiMemberCard
  id="injectafter"
  name="injectAfter"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectAfter(targetClassName: String, methodName: String, parameterTypeNames: List<String> = emptyList(), owner: String? = null, handler: (InjectionInvocationContext, Any?, Throwable?) -> Unit): InjectionHandle
```

Injects a callback after target method execution (string-based overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `targetClassName` | target class fully-qualified name |
| `methodName` | target method name |
| `parameterTypeNames` | parameter type names, e.g. `int`, `java.lang.String` |
| `owner` | script owner (nullable, auto-resolved from script context if null) |
| `handler` | after callback with `result` and `throwable` |

### Returns

injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## injectConstructorBefore

<ApiMemberCard
  id="injectconstructorbefore"
  name="injectConstructorBefore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectConstructorBefore(targetClassName: String, parameterTypeNames: List<String> = emptyList(), owner: String? = null, handler: (ConstructorInvocationContext) -> Unit): InjectionHandle
```

Injects a callback before constructor execution (string-based overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `targetClassName` | target class fully-qualified name |
| `parameterTypeNames` | constructor parameter type names, e.g. `int`, `java.lang.String` |
| `owner` | script owner (nullable, auto-resolved from script context if null) |
| `handler` | constructor-before callback |

### Returns

injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## injectConstructorBefore

<ApiMemberCard
  id="injectconstructorbefore"
  name="injectConstructorBefore"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectConstructorBefore(constructor: Constructor<*>, owner: String? = null, handler: (ConstructorInvocationContext) -> Unit): InjectionHandle
```

Injects a callback before constructor execution (Constructor overload).

</ApiMemberCard>

## injectConstructorAfter

<ApiMemberCard
  id="injectconstructorafter"
  name="injectConstructorAfter"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectConstructorAfter(targetClassName: String, parameterTypeNames: List<String> = emptyList(), owner: String? = null, handler: (ConstructorInvocationContext) -> Unit): InjectionHandle
```

Injects a callback after constructor execution (string-based overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `targetClassName` | target class fully-qualified name |
| `parameterTypeNames` | constructor parameter type names, e.g. `int`, `java.lang.String` |
| `owner` | script owner (nullable, auto-resolved from script context if null) |
| `handler` | constructor-after callback |

### Returns

injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## injectConstructorAfter

<ApiMemberCard
  id="injectconstructorafter"
  name="injectConstructorAfter"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectConstructorAfter(constructor: Constructor<*>, owner: String? = null, handler: (ConstructorInvocationContext) -> Unit): InjectionHandle
```

Injects a callback after constructor execution (Constructor overload).

</ApiMemberCard>

## injectAfter

<ApiMemberCard
  id="injectafter"
  name="injectAfter"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun injectAfter(method: Method, owner: String? = null, handler: (InjectionInvocationContext, Any?, Throwable?) -> Unit): InjectionHandle
```

Injects a callback after target method execution (Method overload).

Prefer this overload when a reflected [Method] is already available.

### Parameters

| Parameter | Description |
| --- | --- |
| `method` | The target Method to inject into |
| `owner` | Script owner (nullable, auto-resolved from script context if null) |
| `handler` | After callback with result and throwable |

### Returns

Injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## replace

<ApiMemberCard
  id="replace"
  name="replace"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun replace(targetClassName: String, methodName: String, parameterTypeNames: List<String> = emptyList(), owner: String? = null, handler: (InjectionInvocationContext) -> Any?): InjectionHandle
```

Replaces entire target method body (string-based overload).

The handler return value becomes the method return value.
This completely bypasses the original method implementation.

### Parameters

| Parameter | Description |
| --- | --- |
| `targetClassName` | Target class fully-qualified name |
| `methodName` | Target method name |
| `parameterTypeNames` | Parameter type names, e.g. `int`, `java.lang.String` |
| `owner` | Script owner (nullable, auto-resolved from script context if null) |
| `handler` | Replacement handler that returns the method result |

### Returns

Injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## replace

<ApiMemberCard
  id="replace"
  name="replace"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun replace(method: Method, owner: String? = null, handler: (InjectionInvocationContext) -> Any?): InjectionHandle
```

Replaces entire target method body (Method overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `method` | The target Method to replace |
| `owner` | Script owner (nullable, auto-resolved from script context if null) |
| `handler` | Replacement handler that returns the method result |

### Returns

Injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## redirect

<ApiMemberCard
  id="redirect"
  name="redirect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun redirect(sourceClassName: String, sourceMethodName: String, sourceParameterTypeNames: List<String> = emptyList(), targetClassName: String, targetMethodName: String, targetParameterTypeNames: List<String> = emptyList(), owner: String? = null): InjectionHandle
```

Redirects a source method to another target method (string-based overload).

All calls to the source method will be redirected to the target method instead.

### Parameters

| Parameter | Description |
| --- | --- |
| `sourceClassName` | Source class fully-qualified name |
| `sourceMethodName` | Source method name to redirect from |
| `sourceParameterTypeNames` | Source method parameter type names |
| `targetClassName` | Target class fully-qualified name |
| `targetMethodName` | Target method name to redirect to |
| `targetParameterTypeNames` | Target method parameter type names |
| `owner` | Script owner (nullable, auto-resolved from script context if null) |

### Returns

Injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## redirect

<ApiMemberCard
  id="redirect"
  name="redirect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun redirect(sourceMethod: Method, targetMethod: Method, owner: String? = null): InjectionHandle
```

Redirects a source method to another target method (Method overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `sourceMethod` | The source Method to redirect from |
| `targetMethod` | The target Method to redirect to |
| `owner` | Script owner (nullable, auto-resolved from script context if null) |

### Returns

Injection handle, usable by [rollbackUnsafe]

</ApiMemberCard>

## rollbackUnsafe

<ApiMemberCard
  id="rollbackunsafe"
  name="rollbackUnsafe"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rollbackUnsafe(handle: InjectionHandle): Boolean
```

Rolls back one unsafe injection by handle.

### Parameters

| Parameter | Description |
| --- | --- |
| `handle` | The injection handle to roll back |

### Returns

true if the injection was found and removed, false otherwise

</ApiMemberCard>

## rollbackUnsafeByOwner

<ApiMemberCard
  id="rollbackunsafebyowner"
  name="rollbackUnsafeByOwner"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rollbackUnsafeByOwner(owner: String)
```

Rolls back all unsafe injections by owner.

### Parameters

| Parameter | Description |
| --- | --- |
| `owner` | The script owner whose injections should be removed |

</ApiMemberCard>

