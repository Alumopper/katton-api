---
title: KattonEntityApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonEntityApi"
  module="Common"
  module-key="common"
  package-name=""
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonEntityApi.kt"
>
获取或设置 Entity 的 NBT 数据。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;nbt&quot;,&quot;href&quot;:&quot;#nbt&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection.all&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection-all&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonServerEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonserverentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonLevelEntityCollection.get&quot;,&quot;href&quot;:&quot;#kattonlevelentitycollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap.contains&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap-contains&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap.get&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonEntityAttributeValueMap.set&quot;,&quot;href&quot;:&quot;#kattonentityattributevaluemap-set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;attributeValues&quot;,&quot;href&quot;:&quot;#attributevalues&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;getAttribute&quot;,&quot;href&quot;:&quot;#getattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;hasAttribute&quot;,&quot;href&quot;:&quot;#hasattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getBaseAttribute&quot;,&quot;href&quot;:&quot;#getbaseattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;setBaseAttribute&quot;,&quot;href&quot;:&quot;#setbaseattribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addAttributeModify&quot;,&quot;href&quot;:&quot;#addattributemodify&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeAttributeModify&quot;,&quot;href&quot;:&quot;#removeattributemodify&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;damage&quot;,&quot;href&quot;:&quot;#damage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addEffect&quot;,&quot;href&quot;:&quot;#addeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeEffect&quot;,&quot;href&quot;:&quot;#removeeffect&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clearEffects&quot;,&quot;href&quot;:&quot;#cleareffects&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;mount&quot;,&quot;href&quot;:&quot;#mount&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;dismount&quot;,&quot;href&quot;:&quot;#dismount&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rotate&quot;,&quot;href&quot;:&quot;#rotate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rotate&quot;,&quot;href&quot;:&quot;#rotate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;rotate&quot;,&quot;href&quot;:&quot;#rotate&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;spreadPlayers&quot;,&quot;href&quot;:&quot;#spreadplayers&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;summon&quot;,&quot;href&quot;:&quot;#summon&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;getTags&quot;,&quot;href&quot;:&quot;#gettags&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addTag&quot;,&quot;href&quot;:&quot;#addtag&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;removeTag&quot;,&quot;href&quot;:&quot;#removetag&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

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

获取或设置 Entity 的 NBT 数据。

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

跨所有服务端关卡的实体集合。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer 实例。 |

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

所有关卡中的全部实体。

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

获取指定关卡中的实体集合。

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

在所有关卡中按 UUID 查找实体。

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

指定关卡中的实体集合。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含这些实体的 ServerLevel。 |

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

获取与类型测试和谓词匹配的实体。

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

获取 AABB 内与类型测试和谓词匹配的实体。

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

使用实体选择器获取实体。

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

在当前关卡中按 UUID 查找实体。

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

用类似 Map 的方式访问生物实体的属性值。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 要访问属性的 LivingEntity。 |

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

检查指定实体是否具有给定属性。

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

获取属性的当前值

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

设置属性的基础值，并可选添加修饰器。

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

访问生物实体的属性值。

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

从 LivingEntity 获取属性值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要读取的属性持有者。 |

### 返回值

返回属性值

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

检查 LivingEntity 是否具有给定属性。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要检查的属性持有者。 |

### 返回值

如果属性存在则返回 true。

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

从 LivingEntity 获取基础属性值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要读取的属性持有者 |

### 返回值

属性值；如果属性不存在则返回 null。

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

设置 LivingEntity 的基础属性值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体。 |
| `attribute` | 要设置的属性持有者。 |
| `value` | 新的基础值。 |

### 返回值

如果发生变化则返回 true，否则返回 false。

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

向实体添加临时属性修饰器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体。 |
| `attribute` | 要修改的属性持有者。 |
| `modifier` | 要添加的 AttributeModifier。 |

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

从实体移除属性修饰器。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体。 |
| `attribute` | 要修改的属性持有者。 |
| `modifier` | 要移除的 AttributeModifier。 |

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

使用通用伤害按指定数值伤害实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `amount` | 伤害值。 |

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

使用伤害类型键，让攻击者对目标实体造成伤害。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要伤害的实体。 |
| `amount` | 伤害值。 |
| `attacker` | 造成伤害的来源实体。 |
| `damageType` | DamageType 的资源键（默认 GENERIC）。 |

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

使用 DamageType 实例，让攻击者对目标实体造成伤害。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要伤害的实体。 |
| `amount` | 伤害值。 |
| `attacker` | 造成伤害的来源实体。 |
| `damageType` | 要应用的 DamageType 实例。 |

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

使用伤害类型键，从指定位置对目标实体造成伤害。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要伤害的实体。 |
| `amount` | 伤害值。 |
| `pos` | 伤害来源位置。 |
| `damageType` | DamageType 的资源键（默认 GENERIC）。 |

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

使用 DamageType 实例，从指定位置对目标实体造成伤害。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要伤害的实体。 |
| `amount` | 伤害值。 |
| `pos` | 伤害来源位置。 |
| `damageType` | 要应用的 DamageType 实例。 |

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

向 LivingEntity 添加状态效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `effect` | 要应用的 MobEffect Holder。 |
| `duration` | 效果持续时间，单位为 tick，默认 600。 |
| `amplifier` | 效果放大等级，默认 0。 |
| `showParticles` | 是否显示粒子。 |
| `ambient` | 是否为环境效果。 |

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

从 LivingEntity 移除指定效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `effect` | 要移除的 MobEffect Holder。 |

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

清除 LivingEntity 身上的所有效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |

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

让乘客骑乘载具实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `passenger` | 要发起骑乘的实体。 |
| `vehicle` | 要被骑乘的实体。 |

### 返回值

如果骑乘成功则返回 true，否则返回 false。

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

让乘客从载具上解除骑乘。

### 参数

| 参数 | 说明 |
| --- | --- |
| `passenger` | 要解除骑乘的实体。 |

### 返回值

如果已解除骑乘则返回 true，否则在未骑乘时返回 false。

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

使用 Vec2（pitch, yaw）旋转实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标实体。 |
| `rot` | 旋转向量（x=pitch, y=yaw）。 |
| `relative` | 是否按相对角度旋转。 |

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

旋转实体，使其看向另一个实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要旋转的实体。 |
| `lookAt` | 要看向的实体。 |
| `targetAnchor` | 目标实体上的锚点。 |
| `lookAtAnchor` | 被看向实体上的锚点。 |

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

旋转实体，使其看向指定位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要旋转的实体。 |
| `lookAt` | 要看向的位置。 |
| `targetAnchor` | 目标实体上的锚点。 |

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

将玩家分散到中心点周围。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 用作上下文的服务端关卡。 |
| `center` | 中心位置向量（使用 x/z，忽略 y）。 |
| `spreadDistance` | 玩家之间的最小距离。 |
| `maxRange` | 最大分散半径。 |
| `maxHeight` | 最大高度差。 |
| `respectTeams` | 是否保持队伍成员在一起。 |
| `targets` | 要分散的实体集合。 |

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
fun summon(level: ServerLevel, id: String, vec3: Vec3, entityData: CompoundTag? = null): Entity?
```

在指定位置召唤给定类型的实体，并可选应用 NBT。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 用于生成实体的服务端关卡。 |
| `reference` | 要召唤的 EntityType 引用。 |
| `vec3` | 生成位置。 |
| `entityData` | 可选的实体 NBT 覆盖数据。 |

### 返回值

返回生成的实体；失败时返回 null。

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

获取附加到实体上的标签。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |

### 返回值

返回标签字符串集合。

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

向实体添加标签。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `string` | 要添加的标签。 |

### 返回值

如果标签已添加则返回 true，若已存在则返回 false。

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

从实体移除标签。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体。 |
| `string` | 要移除的标签。 |

### 返回值

如果标签已移除则返回 true。

</ApiMemberCard>

