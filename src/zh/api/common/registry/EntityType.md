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
注册具有热重载支持的本机 EntityType。
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

注册具有热重载支持的本机 EntityType。

这是一个较低世界的 API，仅注册 EntityType 本身。
用于完整的实体注册（包括属性、刷怪蛋和
生成位置），请使用 [registerNativeEntity] 代替。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符（例如，"mymod:custom_entity"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `entityTypeFactory` | 用于创建 EntityType 实例的工厂函数 |

### 返回值

已注册KattonEntityTypeEntry

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

注册具有热重载支持（标识符重载）的本机 EntityType。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符 |
| `registerMode` | 注册模式 |
| `entityTypeFactory` | 用于创建 EntityType 实例的工厂函数 |

### 返回值

已注册KattonEntityTypeEntry

</ApiMemberCard>

