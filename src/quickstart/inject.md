# Code injection

Mixin is a powerful tool for modding, but it is designed to be static and can only be loaded during the mod initialization phase. So unfortunately, we cannot use mixin to inject code in our kotlin scripts. But don't worry, Katton provides a lightweight code injection API that allows you to inject code into existing Java methods at runtime and still hot-reloadable.

## Insert

To insert code into an existing method, you can use [`injectBefore`](../api/common/inject/InjectApi.md#injectbefore) or [`injectAfter`](../api/common/inject/InjectApi.md#injectafter) function. Specially, use [`injectConstructorBefore`](../api/common/inject/InjectApi.md#injectconstructorbefore) or [`injectConstructorAfter`](../api/common/inject/InjectApi.md#injectconstructorafter) to inject code into constructors. 

## Replace or Redirect

Use [`replace`](../api/common/inject/InjectApi.md#replace) function to replace the target method with your own implementation. You can also use [`redirect`](../api/common/inject/InjectApi.md#redirect) function to redirect the target method call to your own method.

## Argument and Return Value Manipulation

[`injectBefore`](../api/common/inject/InjectApi.md#injectbefore) and [`injectAfter`](../api/common/inject/InjectApi.md#injectafter) functions provide a `call` object that allows you to manipulate the method arguments and return value. You can use [`call.setArgument(index, value)`](../api/common/inject/InjectApi.md#injectioninvocationcontext-setargument) to change the method arguments, and use [`call.setReturnValue(value)`](../api/common/inject/InjectApi.md#injectioninvocationcontext-setreturnvalue) to change the return value. You can also use [`call.cancel()`](../api/common/inject/InjectApi.md#injectioninvocationcontext-cancel) to skip the original method execution and return immediately.

## Example

<!--@include: ../example/quickstart/inject/01.md-->
