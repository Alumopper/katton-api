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
Registers a complete native Entity with hot-reload support.
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

Registers a complete native Entity with hot-reload support.

This is the primary API for registering custom entities from scripts.
It handles EntityType registration plus optional attributes, spawn egg,
and spawn placement configuration in a single call.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Entity identifier (e.g., "mymod:custom_mob") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `configure` | Configuration lambda for entity properties (dimensions, category, attributes, etc.) |
| `entityFactory` | Factory function to create the EntityType instance |

### Returns

The registered KattonEntityTypeEntry

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

Registers a complete native Entity with hot-reload support (Identifier overload).

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

Registers entity default attributes independently.

Use this when you want to register attributes for an entity that was
already registered via [registerNativeEntityType]. For new entities,
prefer [registerNativeEntity] which handles attributes automatically.

Note: This uses the reloadable path by default since standalone
attribute registration typically happens during hot-reload.
For global entities, use [registerNativeEntity] which routes
through the correct mode-aware path.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Entity identifier |
| `entityType` | The already-registered entity type |
| `configure` | Configuration lambda for attributes |
| `reloadable` | true for RELOADABLE, false for GLOBAL |

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

Registers a spawn placement rule independently.

### Parameters

| Parameter | Description |
| --- | --- |
| `T` | The mob entity type |
| `entityType` | The entity type |
| `placementType` | Where the entity can spawn (e.g., ON_GROUND, IN_WATER) |
| `heightmap` | The heightmap type for spawn checks |
| `predicate` | Custom spawn predicate |
| `reloadable` | true for RELOADABLE, false for GLOBAL |

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

Registers a spawn egg item for an entity type independently.

Use this to create a spawn egg for an entity registered via
[registerNativeEntityType]. For new entities, prefer
[registerNativeEntity] with `withSpawnEgg()`.

In MC 1.21.11+, spawn egg colors are derived from the entity type
automatically.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Spawn egg item identifier (e.g., "mymod:custom_mob_spawn_egg") |
| `entityType` | The entity type this egg spawns |
| `registerMode` | Registration mode |

### Returns

The registered KattonItemEntry

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

Registers a spawn egg item for an entity type independently (Identifier overload).

</ApiMemberCard>

