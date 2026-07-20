---
title: EntityType
outline: [2, 2]
---

<ApiDocPage
  title="EntityType"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/EntityType.kt"
>
注册原生 EntityType，并支持热重载。 这是一个更底层的 API，只负责注册 EntityType 本身。 如果需要完整的实体注册流程（包括属性、刷怪蛋和生成位置），请改用 [registerNativeEntity]。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeEntityType&quot;,&quot;href&quot;:&quot;#registernativeentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeEntityType&quot;,&quot;href&quot;:&quot;#registernativeentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeEntityType

<ApiMemberCard
  id="registernativeentitytype"
  name="registerNativeEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEntityType(id: String, registerMode: RegisterMode = RegisterMode.WORLD, entityTypeFactory: () -> EntityType<*>): KattonRegistry.KattonEntityTypeEntry
```

注册原生 EntityType，并支持热重载。
这是一个更底层的 API，只负责注册 EntityType 本身。
如果需要完整的实体注册流程（包括属性、刷怪蛋和生成位置），请改用 [registerNativeEntity]。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符，例如 "mymod:custom_entity"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `entityTypeFactory` | 创建 EntityType 实例的工厂函数。 |

### 返回值

已注册的 KattonEntityTypeEntry。

</ApiMemberCard>

## registerNativeEntityType

<ApiMemberCard
  id="registernativeentitytype"
  name="registerNativeEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEntityType(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, entityTypeFactory: () -> EntityType<*>): KattonRegistry.KattonEntityTypeEntry
```

注册原生 EntityType，并支持热重载（Identifier 重载）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符。 |
| `registerMode` | 注册模式。 |
| `entityTypeFactory` | 创建 EntityType 实例的工厂函数。 |

### 返回值

已注册的 KattonEntityTypeEntry。

</ApiMemberCard>

