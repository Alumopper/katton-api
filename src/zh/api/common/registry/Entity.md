---
title: Entity
outline: [2, 2]
---

<ApiDocPage
  title="Entity"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/Entity.kt"
>
注册具有热重载支持的完整本机实体。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeEntity&quot;,&quot;href&quot;:&quot;#registernativeentity&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeEntity&quot;,&quot;href&quot;:&quot;#registernativeentity&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerEntityAttributes&quot;,&quot;href&quot;:&quot;#registerentityattributes&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerSpawnPlacement&quot;,&quot;href&quot;:&quot;#registerspawnplacement&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerSpawnEgg&quot;,&quot;href&quot;:&quot;#registerspawnegg&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerSpawnEgg&quot;,&quot;href&quot;:&quot;#registerspawnegg&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeEntity

<ApiMemberCard
  id="registernativeentity"
  name="registerNativeEntity"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeEntity(id: String, registerMode: RegisterMode = RegisterMode.WORLD, configure: KattonEntityProperties.() -> Unit = {}, entityFactory: (KattonEntityProperties) -> EntityType<*>): KattonRegistry.KattonEntityTypeEntry
```

注册具有热重载支持的完整本机实体。

这是从脚本注册自定义实体的主要 API。
它处理 EntityType 注册以及可选属性、刷怪蛋、
并在一次调用中生成放置配置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符（例如，"mymod:custom_mob"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `configure` | 实体属性（维度、类别、属性等）的配置 lambda |
| `entityFactory` | 用于创建 EntityType 实例的工厂函数 |

### 返回值

已注册KattonEntityTypeEntry

</ApiMemberCard>

## registerNativeEntity

<ApiMemberCard
  id="registernativeentity"
  name="registerNativeEntity"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEntity(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, configure: KattonEntityProperties.() -> Unit = {}, entityFactory: (KattonEntityProperties) -> EntityType<*>): KattonRegistry.KattonEntityTypeEntry
```

注册具有热重载支持的完整本机实体（标识符重载）。

</ApiMemberCard>

## registerEntityAttributes

<ApiMemberCard
  id="registerentityattributes"
  name="registerEntityAttributes"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerEntityAttributes(id: String, entityType: EntityType<out net.minecraft.world.entity.LivingEntity>, configure: KattonEntityProperties.() -> Unit, reloadable: Boolean = true)
```

独立注册实体默认属性。

当您想要为某个实体注册属性时，请使用此选项
已通过[registerNativeEntityType]注册。对于新实体来说，
更喜欢自动处理属性的[registerNativeEntity]。

注意：自独立以来，默认情况下使用可重载路径
属性注册通常发生在热重载期间。
对于全局实体，使用 [registerNativeEntity] 来路由
通过正确的模式感知路径。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符 |
| `entityType` | 已注册的实体类型 |
| `configure` | 属性的配置 lambda |
| `reloadable` | 对于 RELOADABLE 为 true，对于 GLOBAL 为 false |

</ApiMemberCard>

## registerSpawnPlacement

<ApiMemberCard
  id="registerspawnplacement"
  name="registerSpawnPlacement"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@Suppress("UNCHECKED_CAST")
@ApiStatus.Experimental @Suppress("UNCHECKED_CAST") fun <T : net.minecraft.world.entity.Mob> registerSpawnPlacement(entityType: EntityType<T>, placementType: SpawnPlacementType, heightmap: Heightmap.Types = Heightmap.Types.MOTION_BLOCKING_NO_LEAVES, predicate: SpawnPlacements.SpawnPredicate<T>, reloadable: Boolean = true)
```

独立注册生成放置规则。

### 参数

| 参数 | 说明 |
| --- | --- |
| `T` | 生物实体类型 |
| `entityType` | 实体类型 |
| `placementType` | 实体可以生成的位置（例如，ON_GROUND、IN_WATER） |
| `heightmap` | 用于生成检查的高度图类型 |
| `predicate` | 自定义生成谓词 |
| `reloadable` | 对于 RELOADABLE 为 true，对于 GLOBAL 为 false |

</ApiMemberCard>

## registerSpawnEgg

<ApiMemberCard
  id="registerspawnegg"
  name="registerSpawnEgg"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerSpawnEgg(id: String, entityType: EntityType<out net.minecraft.world.entity.Mob>, registerMode: RegisterMode = RegisterMode.WORLD): KattonRegistry.KattonItemEntry
```

独立为实体类型注册生成蛋物品。

使用它为通过以下方式注册的实体创建刷怪蛋
[registerNativeEntityType]。对于新实体，更喜欢
[registerNativeEntity]与`withSpawnEgg()`。

在 MC 1.21.11+ 中，刷怪蛋颜色源自实体类型
自动。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 刷怪蛋物品标识符（例如，"mymod:custom_mob_spawn_egg"） |
| `entityType` | 该蛋生成的实体类型 |
| `registerMode` | 注册模式 |

### 返回值

已注册KattonItemEntry

</ApiMemberCard>

## registerSpawnEgg

<ApiMemberCard
  id="registerspawnegg"
  name="registerSpawnEgg"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerSpawnEgg(id: Identifier, entityType: EntityType<out net.minecraft.world.entity.Mob>, registerMode: RegisterMode = RegisterMode.WORLD): KattonRegistry.KattonItemEntry
```

独立为实体类型注册生成蛋物品（标识符重载）。

</ApiMemberCard>

