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
获取/设置实体的NBT数据。
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

获取/设置实体的NBT数据。

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

所有服务器世界的所有实体的集合。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |

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

各级所有实体。

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

获取特定世界的实体集合。

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

在所有世界中通过UUID查找实体。

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

特定世界内实体的集合。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 包含实体的ServerLevel |

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

获取 AABB 中与类型测试和谓词匹配的实体。

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

在此世界中找到UUID的实体。

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

对生命实体的属性值进行类似地图的访问。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在访问其属性的LivingEntity |

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

检查实体是否具有给定的属性。

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

获取属性的当前值。

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

设置属性的基值并可以选择添加修饰符。

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

访问生命实体的属性值。

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

从LivingEntity获取属性值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要读取的属性持有者 |

### 返回值

当前属性值

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
| `attribute` | 要检查的属性持有者 |

### 返回值

true 如果属性存在

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

从 LivingEntity 获取基本属性值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要读取的属性持有者 |

### 返回值

如果属性缺失则为基值或 null

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

设置 LivingEntity 的基本属性值。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要设置的属性持有者 |
| `value` | 新的基值 |

### 返回值

如果更改则为 true，否则为 false

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

向实体添加瞬态属性修饰符。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要修改的属性持有者 |
| `modifier` | AttributeModifier 添加 |

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

从实体中删除属性修饰符。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 实体 |
| `attribute` | 要修改的属性持有者 |
| `modifier` | AttributeModifier 删除 |

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

使用通用伤害对实体造成一定程度的伤害。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `amount` | 伤害量 |

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

使用损坏类型键从攻击者处损坏目标实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要损坏的实体 |
| `amount` | 伤害量 |
| `attacker` | 造成损害的源实体 |
| `damageType` | DamageType的资源键（默认GENERIC） |

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

使用 DamageType 实例从攻击者处损坏目标实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要损坏的实体 |
| `amount` | 伤害量 |
| `attacker` | 造成损害的源实体 |
| `damageType` | DamageType 申请实例 |

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

使用伤害类型键从某个位置伤害目标实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 实体受到损害 |
| `amount` | 伤害量 |
| `pos` | 损伤源位置 |
| `damageType` | DamageType的资源键（默认GENERIC） |

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

使用DamageType实例从某个位置损坏目标实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 实体受到损害 |
| `amount` | 伤害量 |
| `pos` | 损伤源位置 |
| `damageType` | DamageType 申请实例 |

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

为LivingEntity添加生物效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `effect` | MobEffect持有人申请 |
| `duration` | 效果持续时间（默认 600） |
| `amplifier` | 效果放大器电平（默认0） |
| `showParticles` | 是否显示粒子 |
| `ambient` | 效果是否是环境光 |

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

从LivingEntity中删除特定效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `effect` | 要移除的MobEffect支架 |

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

清除LivingEntity的所有效果。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |

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

将乘客安装到车辆实体上。

### 参数

| 参数 | 说明 |
| --- | --- |
| `passenger` | 要挂载的实体 |
| `vehicle` | 被骑乘的实体 |

### 返回值

如果安装成功则为 true，否则为 false

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

将乘客从车上卸下。

### 参数

| 参数 | 说明 |
| --- | --- |
| `passenger` | 要拆卸的实体 |

### 返回值

如果下马则为 true，如果不骑马则为 false

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

将实体旋转Vec2（俯仰、偏航）。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 目标实体 |
| `rot` | 旋转矢量（x=俯仰，y=偏航） |
| `relative` | 旋转是否是相对的 |

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

旋转一个实体以查看另一个实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要旋转的实体 |
| `lookAt` | 要查看的实体 |
| `targetAnchor` | 目标上的锚点 |
| `lookAtAnchor` | lookAt实体上的锚点 |

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

旋转实体以查看位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `target` | 要旋转的实体 |
| `lookAt` | 看的位置 |
| `targetAnchor` | 锚定在目标实体上 |

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

将球员分散在中心点周围。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 用于上下文的服务器世界 |
| `center` | 中心位置向量（x=z，y 被忽略） |
| `spreadDistance` | 玩家之间的最小距离 |
| `maxRange` | 最大传播半径 |
| `maxHeight` | 最大高差 |
| `respectTeams` | 是否让团队保持团结 |
| `targets` | 要传播的实体集合 |

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

在可选的NBT位置召唤给定类型的实体。

### 参数

| 参数 | 说明 |
| --- | --- |
| `level` | 生成的服务器世界 |
| `reference` | 参考EntityType进行召唤 |
| `vec3` | 产卵位置 |
| `entityData` | 实体的可选 NBT 覆盖 |

### 返回值

生成实体或失败时为 null

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

获取附加到实体的标签。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |

### 返回值

标签字符串的可变集合

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
| `entity` | 目标实体 |
| `string` | 要添加的标签 |

### 返回值

如果添加了标签则为 true，如果已存在则为 false

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

从实体中删除标签。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entity` | 目标实体 |
| `string` | 要删除的标签 |

### 返回值

true 如果标签已被删除

</ApiMemberCard>

