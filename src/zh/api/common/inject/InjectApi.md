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
已注册注入的句柄，用于回滚操作。
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

已注册注入的句柄，用于回滚操作。

### 属性

| 属性 | 说明 |
| --- | --- |
| `id` | 注入注册id，用于回滚 |

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

传递给不安全回调的调用上下文。

提供对正在调用的方法、接收者实例的访问，
参数以及对调用流程的控制。

### 属性

| 属性 | 说明 |
| --- | --- |
| `delegate` | 底层注入调用委托 |

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

方法接收器实例，或静态方法的 `null`。

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

此调用的绑定脚本所有者。

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

在当前调用的[index]处改变参数。

### 参数

| 参数 | 说明 |
| --- | --- |
| `index` | 要修改的参数索引 |
| `value` | 参数的新值 |

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

取消当前调用。如果不被覆盖，返回值将成为默认类型。

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

取消当前调用并立即覆盖返回值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `returnValue` | 返回值而不是执行方法 |

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

覆盖后阶段的返回值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `returnValue` | 要返回的值而不是原始结果 |

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

构造函数调用上下文传递给不安全的构造函数回调。

### 属性

| 属性 | 说明 |
| --- | --- |
| `delegate` | 底层构造函数调用委托 |

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

当前正在调用构造函数。

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

构造实例（`this`）（如果可用）。

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

原始构造函数参数数组。

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

此调用的绑定脚本所有者。

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

在目标方法执行之前注入回调（基于字符串的重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `targetClassName` | 目标类的完全限定名称 |
| `methodName` | 目标方法名称 |
| `parameterTypeNames` | 参数类型名称，例如`int`, `java.lang.String` |
| `owner` | 脚本所有者（可为空，如果为空，则从脚本上下文自动解析） |
| `handler` | 回调之前 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

在目标方法执行之前注入回调（方法重载）。

当反射的 [Method] 已经可用时，更喜欢这种重载，
以避免字符串签名汇编错误。

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

在目标方法执行后注入回调（基于字符串的重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `targetClassName` | 目标类的完全限定名称 |
| `methodName` | 目标方法名称 |
| `parameterTypeNames` | 参数类型名称，例如`int`, `java.lang.String` |
| `owner` | 脚本所有者（可为空，如果为空，则从脚本上下文自动解析） |
| `handler` | 使用 `result` 和 `throwable` 回调后 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

在构造函数执行之前注入回调（基于字符串的重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `targetClassName` | 目标类的完全限定名称 |
| `parameterTypeNames` | 构造函数参数类型名称，例如`int`, `java.lang.String` |
| `owner` | 脚本所有者（可为空，如果为空，则从脚本上下文自动解析） |
| `handler` | 构造函数 - 回调之前 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

在构造函数执行之前注入回调（构造函数重载）。

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

在构造函数执行后注入回调（基于字符串的重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `targetClassName` | 目标类的完全限定名称 |
| `parameterTypeNames` | 构造函数参数类型名称，例如`int`, `java.lang.String` |
| `owner` | 脚本所有者（可为空，如果为空，则从脚本上下文自动解析） |
| `handler` | 构造函数后回调 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

在构造函数执行后注入回调（构造函数重载）。

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

在目标方法执行后注入回调（方法重载）。

当反射的 [Method] 已经可用时，更喜欢这种重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `method` | 要注入的目标方法 |
| `owner` | 脚本所有者（可为空，如果为空则从脚本上下文自动解析） |
| `handler` | 在带有结果和可抛出的回调之后 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

替换整个目标方法主体（基于字符串的重载）。

处理程序返回值成为方法返回值。
这完全绕过了原来的方法实现。

### 参数

| 参数 | 说明 |
| --- | --- |
| `targetClassName` | 目标类的完全限定名称 |
| `methodName` | 目标方法名称 |
| `parameterTypeNames` | 参数类型名称，例如`int`, `java.lang.String` |
| `owner` | 脚本所有者（可为空，如果为空则从脚本上下文自动解析） |
| `handler` | 返回方法结果的替换处理程序 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

替换整个目标方法体（方法重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `method` | 要替换的目标方法 |
| `owner` | 脚本所有者（可为空，如果为空则从脚本上下文自动解析） |
| `handler` | 返回方法结果的替换处理程序 |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

将源方法重定向到另一个目标方法（基于字符串的重载）。

对源方法的所有调用都将重定向到目标方法。

### 参数

| 参数 | 说明 |
| --- | --- |
| `sourceClassName` | 源类的完全限定名称 |
| `sourceMethodName` | 要重定向的源方法名称 |
| `sourceParameterTypeNames` | 源方法参数类型名称 |
| `targetClassName` | 目标类的完全限定名称 |
| `targetMethodName` | 重定向到的目标方法名称 |
| `targetParameterTypeNames` | 目标方法参数类型名称 |
| `owner` | 脚本所有者（可为空，如果为空则从脚本上下文自动解析） |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

将源方法重定向到另一个目标方法（方法重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `sourceMethod` | 重定向源方法 |
| `targetMethod` | 重定向到的目标方法 |
| `owner` | 脚本所有者（可为空，如果为空则从脚本上下文自动解析） |

### 返回值

注射手柄，[rollbackUnsafe]可用

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

通过手柄回滚一次不安全的注射。

### 参数

| 参数 | 说明 |
| --- | --- |
| `handle` | 注射手柄回滚 |

### 返回值

如果发现并移除了注入，则为 true，否则为 false

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

回滚所有者的所有不安全注入。

### 参数

| 参数 | 说明 |
| --- | --- |
| `owner` | 应删除其注入的脚本所有者 |

</ApiMemberCard>

