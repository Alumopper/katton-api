---
title: KattonEntityApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonEntityApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonEntityApi.kt"
>
Get/Set the NBT data of an Entity.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;nbt&quot;,&quot;href&quot;:&quot;#nbt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;EntityEvent&quot;,&quot;href&quot;:&quot;#entityevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;EntityEvent.EntityOnTickEvent&quot;,&quot;href&quot;:&quot;#entityevent-entityontickevent&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;EntityEvent.onTick&quot;,&quot;href&quot;:&quot;#entityevent-ontick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;EntityEvent.beginReload&quot;,&quot;href&quot;:&quot;#entityevent-beginreload&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityEvent.rebindLoadedEntities&quot;,&quot;href&quot;:&quot;#entityevent-rebindloadedentities&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection.all&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection-all&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap.contains&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap-contains&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap.get&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap.set&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;attributeValues&quot;,&quot;href&quot;:&quot;#attributevalues&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;getAttribute&quot;,&quot;href&quot;:&quot;#getattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;hasAttribute&quot;,&quot;href&quot;:&quot;#hasattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBaseAttribute&quot;,&quot;href&quot;:&quot;#getbaseattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setBaseAttribute&quot;,&quot;href&quot;:&quot;#setbaseattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addAttributeModify&quot;,&quot;href&quot;:&quot;#addattributemodify&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeAttributeModify&quot;,&quot;href&quot;:&quot;#removeattributemodify&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addEffect&quot;,&quot;href&quot;:&quot;#addeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeEffect&quot;,&quot;href&quot;:&quot;#removeeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearEffects&quot;,&quot;href&quot;:&quot;#cleareffects&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;mount&quot;,&quot;href&quot;:&quot;#mount&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dismount&quot;,&quot;href&quot;:&quot;#dismount&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rotate&quot;,&quot;href&quot;:&quot;#rotate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rotate&quot;,&quot;href&quot;:&quot;#rotate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rotate&quot;,&quot;href&quot;:&quot;#rotate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;spreadPlayers&quot;,&quot;href&quot;:&quot;#spreadplayers&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;summon&quot;,&quot;href&quot;:&quot;#summon&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getTags&quot;,&quot;href&quot;:&quot;#gettags&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addTag&quot;,&quot;href&quot;:&quot;#addtag&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeTag&quot;,&quot;href&quot;:&quot;#removetag&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## nbt

<ApiMemberCard
  id="nbt"
  name="nbt"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var Entity.nbt: CompoundTag
```

Get/Set the NBT data of an Entity.

</ApiMemberCard>

## EntityEvent

<ApiMemberCard
  id="entityevent"
  name="EntityEvent"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object EntityEvent
```

Event handlers for entity lifecycle events.

### EntityEvent.EntityOnTickEvent

<ApiMemberCard
  id="entityevent-entityontickevent"
  name="EntityEvent.EntityOnTickEvent"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class EntityOnTickEvent(entity: Entity): ContextEvent<Entity, Entity.(level: Level)-> Unit>(entity, onTickHandlers)
```

Context event for entity tick operations.

</ApiMemberCard>

### EntityEvent.onTick

<ApiMemberCard
  id="entityevent-ontick"
  name="EntityEvent.onTick"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val Entity.onTick: EntityOnTickEvent
```

Register a tick event for this entity.

</ApiMemberCard>

### EntityEvent.beginReload

<ApiMemberCard
  id="entityevent-beginreload"
  name="EntityEvent.beginReload"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun beginReload()
```

Clear all script-owned entity handlers before scripts are reloaded.

</ApiMemberCard>

### EntityEvent.rebindLoadedEntities

<ApiMemberCard
  id="entityevent-rebindloadedentities"
  name="EntityEvent.rebindLoadedEntities"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rebindLoadedEntities(server: MinecraftServer)
```

Re-apply handlers for entities that are already loaded.

This makes behavior changes effective immediately after reload,
without requiring entities to be reloaded from chunks.

</ApiMemberCard>

</ApiMemberCard>

## KattonServerEntityCollection

<ApiMemberCard
  id="kattonserverentitycollection"
  name="KattonServerEntityCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonServerEntityCollection( private val server: MinecraftServer )
```

Collection of all entities across all server levels.

### Properties

| Property | Description |
| --- | --- |
| `server` | The MinecraftServer instance |

### KattonServerEntityCollection.all

<ApiMemberCard
  id="kattonserverentitycollection-all"
  name="KattonServerEntityCollection.all"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val all
```

All entities across all levels.

</ApiMemberCard>

### KattonServerEntityCollection.get

<ApiMemberCard
  id="kattonserverentitycollection-get"
  name="KattonServerEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(level: ServerLevel): KattonLevelEntityCollection
```

Get entity collection for a specific level.

</ApiMemberCard>

### KattonServerEntityCollection.get

<ApiMemberCard
  id="kattonserverentitycollection-get"
  name="KattonServerEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(uuid: UUID): Entity?
```

Find an entity by UUID across all levels.

</ApiMemberCard>

</ApiMemberCard>

## KattonLevelEntityCollection

<ApiMemberCard
  id="kattonlevelentitycollection"
  name="KattonLevelEntityCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonLevelEntityCollection( val level: ServerLevel ) : Iterable<Entity> by level.allEntities
```

Collection of entities within a specific level.

### Properties

| Property | Description |
| --- | --- |
| `level` | The ServerLevel containing the entities |

### KattonLevelEntityCollection.get

<ApiMemberCard
  id="kattonlevelentitycollection-get"
  name="KattonLevelEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun <T : Entity> get(entityTypeTest: EntityTypeTest<Entity, T>, predicate: (T) -> Boolean = { true }): List<T>
```

Get entities matching a type test and predicate.

</ApiMemberCard>

### KattonLevelEntityCollection.get

<ApiMemberCard
  id="kattonlevelentitycollection-get"
  name="KattonLevelEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun <T : Entity> get(entityTypeTest: EntityTypeTest<Entity, T>, aabb: AABB, predicate: (T) -> Boolean = { true }): List<T>
```

Get entities within an AABB matching a type test and predicate.

</ApiMemberCard>

### KattonLevelEntityCollection.get

<ApiMemberCard
  id="kattonlevelentitycollection-get"
  name="KattonLevelEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(selector: EntitySelector): List<Entity>
```

Get entities using an entity selector.

</ApiMemberCard>

### KattonLevelEntityCollection.get

<ApiMemberCard
  id="kattonlevelentitycollection-get"
  name="KattonLevelEntityCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(uuid: UUID): Entity?
```

Find an entity by UUID in this level.

</ApiMemberCard>

</ApiMemberCard>

## KattonEntityAttributeValueMap

<ApiMemberCard
  id="kattonentityattributevaluemap"
  name="KattonEntityAttributeValueMap"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonEntityAttributeValueMap( val entity: LivingEntity )
```

Map-like access to a living entity's attribute values.

### Properties

| Property | Description |
| --- | --- |
| `entity` | The LivingEntity whose attributes are being accessed |

### KattonEntityAttributeValueMap.contains

<ApiMemberCard
  id="kattonentityattributevaluemap-contains"
  name="KattonEntityAttributeValueMap.contains"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun contains(holder: Holder<Attribute>): Boolean
```

Check if the entity has a given attribute.

</ApiMemberCard>

### KattonEntityAttributeValueMap.get

<ApiMemberCard
  id="kattonentityattributevaluemap-get"
  name="KattonEntityAttributeValueMap.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(holder: Holder<Attribute>): Double?
```

Get the current value of an attribute.

</ApiMemberCard>

### KattonEntityAttributeValueMap.set

<ApiMemberCard
  id="kattonentityattributevaluemap-set"
  name="KattonEntityAttributeValueMap.set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun set(holder: Holder<Attribute>, value: Double, vararg modifiers: AttributeModifier)
```

Set the base value of an attribute and optionally add modifiers.

</ApiMemberCard>

</ApiMemberCard>

## attributeValues

<ApiMemberCard
  id="attributevalues"
  name="attributeValues"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val LivingEntity.attributeValues
```

Access to a living entity's attribute values.

</ApiMemberCard>

## getAttribute

<ApiMemberCard
  id="getattribute"
  name="getAttribute"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getAttribute(entity: LivingEntity, attribute: Holder<Attribute>): Double
```

Get an attribute value from a LivingEntity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the entity |
| `attribute` | attribute holder to read |

### Returns

current attribute value

</ApiMemberCard>

## hasAttribute

<ApiMemberCard
  id="hasattribute"
  name="hasAttribute"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun hasAttribute(entity: LivingEntity, attribute: Holder<Attribute>): Boolean
```

Check if a LivingEntity has a given attribute.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the entity |
| `attribute` | attribute holder to check |

### Returns

true if attribute present

</ApiMemberCard>

## getBaseAttribute

<ApiMemberCard
  id="getbaseattribute"
  name="getBaseAttribute"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBaseAttribute(entity: LivingEntity, attribute: Holder<Attribute>): Double?
```

Get base attribute value from a LivingEntity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the entity |
| `attribute` | attribute holder to read |

### Returns

base value or null if attribute missing

</ApiMemberCard>

## setBaseAttribute

<ApiMemberCard
  id="setbaseattribute"
  name="setBaseAttribute"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun setBaseAttribute(entity: LivingEntity, attribute: Holder<Attribute>, value: Double): Boolean
```

Set the base attribute value for a LivingEntity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the entity |
| `attribute` | attribute holder to set |
| `value` | new base value |

### Returns

true if changed, false otherwise

</ApiMemberCard>

## addAttributeModify

<ApiMemberCard
  id="addattributemodify"
  name="addAttributeModify"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addAttributeModify(entity: LivingEntity, attribute: Holder<Attribute>, modifier: AttributeModifier)
```

Add a transient attribute modifier to an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the entity |
| `attribute` | attribute holder to modify |
| `modifier` | AttributeModifier to add |

</ApiMemberCard>

## removeAttributeModify

<ApiMemberCard
  id="removeattributemodify"
  name="removeAttributeModify"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeAttributeModify(entity: LivingEntity, attribute: Holder<Attribute>, modifier: AttributeModifier)
```

Remove an attribute modifier from an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | the entity |
| `attribute` | attribute holder to modify |
| `modifier` | AttributeModifier to remove |

</ApiMemberCard>

## damage

<ApiMemberCard
  id="damage"
  name="damage"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun damage(entity: Entity, amount: Float)
```

Damage an entity by an amount using generic damage.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `amount` | damage amount |

</ApiMemberCard>

## damage

<ApiMemberCard
  id="damage"
  name="damage"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun damage(target: Entity, amount: Float, attacker: Entity, damageType: ResourceKey<DamageType> = DamageTypes.GENERIC)
```

Damage a target entity from an attacker using a damage type key.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | the entity to damage |
| `amount` | damage amount |
| `attacker` | the source entity causing damage |
| `damageType` | resource key of the DamageType (default GENERIC) |

</ApiMemberCard>

## damage

<ApiMemberCard
  id="damage"
  name="damage"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun damage(target: Entity, amount: Float, attacker: Entity, damageType: DamageType)
```

Damage a target entity from an attacker using a DamageType instance.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | the entity to damage |
| `amount` | damage amount |
| `attacker` | the source entity causing damage |
| `damageType` | DamageType instance to apply |

</ApiMemberCard>

## damage

<ApiMemberCard
  id="damage"
  name="damage"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun damage(target: Entity, amount: Float, pos: Vec3, damageType: ResourceKey<DamageType> = DamageTypes.GENERIC)
```

Damage a target entity from a position using a damage type key.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | entity to damage |
| `amount` | damage amount |
| `pos` | position of damage source |
| `damageType` | resource key of the DamageType (default GENERIC) |

</ApiMemberCard>

## damage

<ApiMemberCard
  id="damage"
  name="damage"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun damage(target: Entity, amount: Float, pos: Vec3, damageType: DamageType)
```

Damage a target entity from a position using a DamageType instance.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | entity to damage |
| `amount` | damage amount |
| `pos` | position of damage source |
| `damageType` | DamageType instance to apply |

</ApiMemberCard>

## addEffect

<ApiMemberCard
  id="addeffect"
  name="addEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addEffect(entity: LivingEntity, effect: Holder<MobEffect>, duration: Int = 600, amplifier: Int = 0, showParticles: Boolean = true, ambient: Boolean = false)
```

Add a mob effect to a LivingEntity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `effect` | holder of the MobEffect to apply |
| `duration` | effect duration in ticks (default 600) |
| `amplifier` | effect amplifier level (default 0) |
| `showParticles` | whether to show particles |
| `ambient` | whether effect is ambient |

</ApiMemberCard>

## removeEffect

<ApiMemberCard
  id="removeeffect"
  name="removeEffect"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeEffect(entity: LivingEntity, effect: Holder<MobEffect>)
```

Remove a specific effect from a LivingEntity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `effect` | holder of the MobEffect to remove |

</ApiMemberCard>

## clearEffects

<ApiMemberCard
  id="cleareffects"
  name="clearEffects"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun clearEffects(entity: LivingEntity)
```

Clear all effects from a LivingEntity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |

</ApiMemberCard>

## mount

<ApiMemberCard
  id="mount"
  name="mount"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun mount(passenger: Entity, vehicle: Entity): Boolean
```

Mount a passenger on a vehicle entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `passenger` | entity to mount |
| `vehicle` | entity to be ridden |

### Returns

true if mounting succeeded, false otherwise

</ApiMemberCard>

## dismount

<ApiMemberCard
  id="dismount"
  name="dismount"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun dismount(passenger: Entity): Boolean
```

Dismount a passenger from its vehicle.

### Parameters

| Parameter | Description |
| --- | --- |
| `passenger` | entity to dismount |

### Returns

true if dismounted, false if not riding

</ApiMemberCard>

## rotate

<ApiMemberCard
  id="rotate"
  name="rotate"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rotate(target: Entity, rot: Vec2, relative: Boolean = false)
```

Rotate an entity by a Vec2 (pitch, yaw).

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | target entity |
| `rot` | rotation vector (x=pitch, y=yaw) |
| `relative` | whether rotation is relative |

</ApiMemberCard>

## rotate

<ApiMemberCard
  id="rotate"
  name="rotate"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rotate(target: Entity, lookAt: Entity, targetAnchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET, lookAtAnchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET)
```

Rotate an entity to look at another entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | entity to rotate |
| `lookAt` | entity to look at |
| `targetAnchor` | anchor point on the target |
| `lookAtAnchor` | anchor point on lookAt entity |

</ApiMemberCard>

## rotate

<ApiMemberCard
  id="rotate"
  name="rotate"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun rotate(target: Entity, lookAt: Vec3, targetAnchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET, lookAtAnchor: EntityAnchorArgument.Anchor = EntityAnchorArgument.Anchor.FEET)
```

Rotate an entity to look at a position.

### Parameters

| Parameter | Description |
| --- | --- |
| `target` | entity to rotate |
| `lookAt` | position to look at |
| `targetAnchor` | anchor on target entity |

</ApiMemberCard>

## spreadPlayers

<ApiMemberCard
  id="spreadplayers"
  name="spreadPlayers"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun spreadPlayers(level: ServerLevel, center: Vec2, spreadDistance: Float, maxRange: Float, maxHeight: Int, respectTeams: Boolean, targets: Collection<Entity>)
```

Spread players around a center point.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level used for context |
| `center` | center position vector (x=z, y ignored) |
| `spreadDistance` | minimum distance between players |
| `maxRange` | max spread radius |
| `maxHeight` | maximum height difference |
| `respectTeams` | whether to keep teams together |
| `targets` | collection of entities to spread |

</ApiMemberCard>

## summon

<ApiMemberCard
  id="summon"
  name="summon"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun summon(level: ServerLevel, reference: Holder.Reference<EntityType<*>>, vec3: Vec3, entityData: CompoundTag? = null): Entity?
```

Summon an entity of a given type at a position with optional NBT.

### Parameters

| Parameter | Description |
| --- | --- |
| `level` | server level to spawn in |
| `reference` | reference to the EntityType to summon |
| `vec3` | spawn position |
| `entityData` | optional NBT override for the entity |

### Returns

spawned Entity or null on failure

</ApiMemberCard>

## getTags

<ApiMemberCard
  id="gettags"
  name="getTags"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getTags(entity: Entity): MutableCollection<String>
```

Get tags attached to an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |

### Returns

mutable collection of tag strings

</ApiMemberCard>

## addTag

<ApiMemberCard
  id="addtag"
  name="addTag"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun addTag(entity: Entity, string: String): Boolean
```

Add a tag to an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `string` | tag to add |

### Returns

true if tag was added, false if already present

</ApiMemberCard>

## removeTag

<ApiMemberCard
  id="removetag"
  name="removeTag"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun removeTag(entity: Entity, string: String): Boolean
```

Remove a tag from an entity.

### Parameters

| Parameter | Description |
| --- | --- |
| `entity` | target entity |
| `string` | tag to remove |

### Returns

true if the tag was removed

</ApiMemberCard>

