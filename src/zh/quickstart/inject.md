# 代码注入

Mixin 是一个强大的模组开发工具，但它是静态的，只能在模组初始化阶段加载。因此，我们不能在 Kotlin 脚本中使用 Mixin 来注入代码。但是没关系，Katton 提供了一个轻量级的 API，允许你在运行时将代码注入到现有的 Java 方法中，并且仍然支持热重载。

## 插入

要向已有的方法中插入代码，你可以使用 `insertBefore` 或 `insertAfter` 函数。特别地，使用 `injectConstructorBefore` 或 `injectConstructorAfter` 向构造函数注入代码。

## 替换或重定向

使用 `replace` 函数将目标方法替换为你自己的实现。你也可以使用 `redirect` 函数将目标方法调用重定向到你自己的方法。

## 示例

```kotlin
import net.minecraft.network.chat.Component
import top.katton.api.dpcaller.tell
import top.katton.api.inject.*
import top.katton.registry.registerCommand
import kotlin.jvm.java

// 我们想要注入的目标测试类
private class UnsafeDemoTarget {
    fun add(a: Int, b: Int): Int = a + b

    fun divide(a: Int, b: Int): Int = a / b

    fun multiply(a: Int, b: Int): Int = a * b

    fun addRedirect(a: Int, b: Int): Int = a + b

    fun multiplyTarget(a: Int, b: Int): Int = a * b
}

fun unsafeDemo() {
    // 注册一个简单的命令来测试代码注入
    registerCommand("unsafe_demo") {
        literal("test") {
            executes { ctx ->
                // 使用反射获取我们想要注入的方法
                val method = UnsafeDemoTarget::class.java.getDeclaredMethod(
                    "add",
                    Int::class.javaPrimitiveType,
                    Int::class.javaPrimitiveType
                )

                // 在方法执行前后注入代码
                val before = injectBefore(method) { call ->
                    tell("[unsafe_demo] before ${call.method.name}, args=${call.arguments.contentToString()}")
                }
                
                // after 注入还可以访问方法执行的结果和异常
                val after = injectAfter(method) { call, result, throwable ->
                    tell("[unsafe_demo] after ${call.method.name}, result=$result, throwable=${throwable?.message}")
                }

                val methodDivide = UnsafeDemoTarget::class.java.getDeclaredMethod(
                    "divide",
                    Int::class.javaPrimitiveType,
                    Int::class.javaPrimitiveType
                )

                // 你还可以修改参数和返回值，
                // 甚至取消原始方法的执行
                val beforeMutate = injectBefore(methodDivide) { call ->
                    // 参数重写：如果输入为 0，强制将分母设为 1
                    if ((call.arguments[1] as Int) == 0) {
                        call.setArgument(1, 1)
                    }
                }

                val beforeCancel = injectBefore(methodDivide) { call ->
                    // 取消：如果分子为负数，跳过原始方法体
                    if ((call.arguments[0] as Int) < 0) {
                        call.cancelWith(42)
                    }
                }

                val afterOverride = injectAfter(methodDivide) { call, result, throwable ->
                    // 返回值覆盖：将正数结果乘以 10
                    if (throwable == null && result is Int && result > 0) {
                        call.setReturnValue(result * 10)
                    }
                }

                val methodMultiply = UnsafeDemoTarget::class.java.getDeclaredMethod(
                    "multiply",
                    Int::class.javaPrimitiveType,
                    Int::class.javaPrimitiveType
                )

                val replaceMultiply = injectReplace(methodMultiply) { call ->
                    val a = call.arguments[0] as Int
                    val b = call.arguments[1] as Int
                    // 替换：忽略原始方法体并返回自定义值
                    a * b + 100
                }

                val sourceRedirect = UnsafeDemoTarget::class.java.getDeclaredMethod(
                    "addRedirect",
                    Int::class.javaPrimitiveType,
                    Int::class.javaPrimitiveType
                )
                val targetRedirect = UnsafeDemoTarget::class.java.getDeclaredMethod(
                    "multiplyTarget",
                    Int::class.javaPrimitiveType,
                    Int::class.javaPrimitiveType
                )
                val redirectAdd = injectRedirect(sourceRedirect, targetRedirect)

                // 现在我们可以通过调用目标方法来测试注入的代码
                val target = UnsafeDemoTarget()
                val value = target.add(2, 3)
                val divA = target.divide(10, 0)
                val divB = target.divide(-5, 0)
                val mul = target.multiply(2, 3)
                val redirected = target.addRedirect(4, 5)

                // 手动回滚注入以恢复原始方法行为
                // 当脚本重新加载时，它也会自动回滚
                rollbackUnsafe(before)
                rollbackUnsafe(after)
                rollbackUnsafe(beforeMutate)
                rollbackUnsafe(beforeCancel)
                rollbackUnsafe(afterOverride)
                rollbackUnsafe(replaceMultiply)
                rollbackUnsafe(redirectAdd)

                ctx.source.sendSuccess(
                    {
                        Component.literal(
                            "[unsafe_demo] add=$value, divA=$divA, divB=$divB, replaceMul=$mul, redirect=$redirected"
                        )
                    },
                    false
                )
                1
            }
        }
    }
}

// 记得调用函数 =w=
@Suppress("unused")
private val unsafeDemo = unsafeDemo()
```
