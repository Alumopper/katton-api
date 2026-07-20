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
注册完整的原生 Entity，并支持热重载。 这是脚本中注册自定义实体的主要 API。 它会在一次调用中完成 EntityType 注册，以及可选的属性、刷怪蛋和生成位置配置。
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

注册完整的原生 Entity，并支持热重载。
这是脚本中注册自定义实体的主要 API。
它会在一次调用中完成 EntityType 注册，以及可选的属性、刷怪蛋和生成位置配置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | Entity 标识符，例如 "mymod:custom_mob"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `configure` | Entity 属性配置 lambda（尺寸、类别、属性等）。 |
| `entityFactory` | 创建 EntityType 实例的工厂函数。 |

### 返回值

已注册的 KattonEntityTypeEntry。

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

注册完整的原生 Entity，并支持热重载（Identifier 重载）。

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

独立注册实体的默认属性。
当你要为已经通过 [registerNativeEntityType] 注册的实体补充属性时使用此方法。
对于新实体，优先使用 [registerNativeEntity]，它会自动处理属性注册。
注意：这里默认使用可重载路径，因为独立的属性注册通常发生在热重载期间。
对于全局实体，请使用 [registerNativeEntity]，它会走正确的模式分流路径。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 实体标识符。 |
| `entityType` | 已注册的实体类型。 |
| `configure` | 属性配置 lambda。 |
| `reloadable` | `true` 表示 RELOADABLE，`false` 表示 GLOBAL。 |

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

独立注册生成位置规则。

### 参数

| 参数 | 说明 |
| --- | --- |
| `T` | 生物实体类型。 |
| `entityType` | 实体类型。 |
| `placementType` | 实体可生成的位置，例如 ON_GROUND、IN_WATER。 |
| `heightmap` | 用于生成检查的 Heightmap 类型。 |
| `predicate` | 自定义生成条件。 |
| `reloadable` | `true` 表示 RELOADABLE，`false` 表示 GLOBAL。 |

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

独立为某个实体类型注册刷怪蛋物品。
当实体是通过 [registerNativeEntityType] 注册时，可以使用这个方法创建刷怪蛋。
对于新实体，优先使用带有 `withSpawnEgg()` 的 [registerNativeEntity]。
在 MC 1.21.11+ 中，刷怪蛋颜色会自动根据实体类型推导。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 刷怪蛋物品标识符，例如 "mymod:custom_mob_spawn_egg"。 |
| `entityType` | 该刷怪蛋生成的实体类型。 |
| `registerMode` | 注册模式。 |

### 返回值

已注册的 KattonItemEntry。

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

独立为某个实体类型注册刷怪蛋物品（Identifier 重载）。

</ApiMemberCard>

