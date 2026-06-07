---
title: KattonEntityTypeModificationApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonEntityTypeModificationApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.mod"
  source-file="common/src/main/kotlin/top/katton/api/mod/KattonEntityTypeModificationApi.kt"
>
用于修改现有 [EntityType] 默认属性的配置（vanilla 或 modded）。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;EntityTypeModificationConfig&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.attribute&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-attribute&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.maxHealth&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-maxhealth&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.movementSpeed&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-movementspeed&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.knockbackResistance&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-knockbackresistance&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.attackDamage&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-attackdamage&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.attackSpeed&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-attackspeed&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.armor&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-armor&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.armorToughness&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-armortoughness&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.followRange&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-followrange&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EntityTypeModificationConfig.luck&quot;,&quot;href&quot;:&quot;#entitytypemodificationconfig-luck&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyEntityType&quot;,&quot;href&quot;:&quot;#modifyentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;modifyEntityType&quot;,&quot;href&quot;:&quot;#modifyentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## EntityTypeModificationConfig

<ApiMemberCard
  id="entitytypemodificationconfig"
  name="EntityTypeModificationConfig"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class EntityTypeModificationConfig(val entityId: Identifier)
```

用于修改现有默认属性的配置
[EntityType]（原版或修改版）。

镜像[top.katton.registry.KattonEntityProperties]的属性面
但适用于已经注册的实体类型
[top.katton.registry.DefaultAttributesHelper]。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entityId` | 正在修改的实体类型的标识符。 |

### EntityTypeModificationConfig.attribute

<ApiMemberCard
  id="entitytypemodificationconfig-attribute"
  name="EntityTypeModificationConfig.attribute"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun attribute(attribute: Holder<Attribute>, value: Double): EntityTypeModificationConfig
```

覆盖任意属性的基值。

</ApiMemberCard>

### EntityTypeModificationConfig.maxHealth

<ApiMemberCard
  id="entitytypemodificationconfig-maxhealth"
  name="EntityTypeModificationConfig.maxHealth"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun maxHealth(value: Double): EntityTypeModificationConfig
```

覆盖最大生命值 (`generic.max_health`)。

</ApiMemberCard>

### EntityTypeModificationConfig.movementSpeed

<ApiMemberCard
  id="entitytypemodificationconfig-movementspeed"
  name="EntityTypeModificationConfig.movementSpeed"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun movementSpeed(value: Double): EntityTypeModificationConfig
```

覆盖移动速度（`generic.movement_speed`）。

</ApiMemberCard>

### EntityTypeModificationConfig.knockbackResistance

<ApiMemberCard
  id="entitytypemodificationconfig-knockbackresistance"
  name="EntityTypeModificationConfig.knockbackResistance"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun knockbackResistance(value: Double): EntityTypeModificationConfig
```

覆盖击退抗性（`generic.knockback_resistance`）。

</ApiMemberCard>

### EntityTypeModificationConfig.attackDamage

<ApiMemberCard
  id="entitytypemodificationconfig-attackdamage"
  name="EntityTypeModificationConfig.attackDamage"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun attackDamage(value: Double): EntityTypeModificationConfig
```

覆盖攻击伤害（`generic.attack_damage`）。

</ApiMemberCard>

### EntityTypeModificationConfig.attackSpeed

<ApiMemberCard
  id="entitytypemodificationconfig-attackspeed"
  name="EntityTypeModificationConfig.attackSpeed"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun attackSpeed(value: Double): EntityTypeModificationConfig
```

覆盖攻击速度（`generic.attack_speed`）。

</ApiMemberCard>

### EntityTypeModificationConfig.armor

<ApiMemberCard
  id="entitytypemodificationconfig-armor"
  name="EntityTypeModificationConfig.armor"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun armor(value: Double): EntityTypeModificationConfig
```

覆盖护甲（`generic.armor`）。

</ApiMemberCard>

### EntityTypeModificationConfig.armorToughness

<ApiMemberCard
  id="entitytypemodificationconfig-armortoughness"
  name="EntityTypeModificationConfig.armorToughness"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun armorToughness(value: Double): EntityTypeModificationConfig
```

覆盖护甲韧性 (`generic.armor_toughness`)。

</ApiMemberCard>

### EntityTypeModificationConfig.followRange

<ApiMemberCard
  id="entitytypemodificationconfig-followrange"
  name="EntityTypeModificationConfig.followRange"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun followRange(value: Double): EntityTypeModificationConfig
```

覆盖跟随范围 (`generic.follow_range`)。

</ApiMemberCard>

### EntityTypeModificationConfig.luck

<ApiMemberCard
  id="entitytypemodificationconfig-luck"
  name="EntityTypeModificationConfig.luck"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun luck(value: Double): EntityTypeModificationConfig
```

超越运气（`generic.luck`）。

</ApiMemberCard>

</ApiMemberCard>

## modifyEntityType

<ApiMemberCard
  id="modifyentitytype"
  name="modifyEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyEntityType(entityId: String, configure: EntityTypeModificationConfig.() -> Unit): Boolean
```

修改现有实体类型的默认属性。

如果实体类型已经注册了默认属性，则现有的
供应商用作基线，各个属性基值是
被覆盖。如果不存在默认供应商，则从以下位置构建新供应商
[LivingEntity.createLivingAttributes]用作基线。

通过 [DefaultAttributesHelper] 应用（反思
`DefaultAttributes.SUPPLIERS`）。适用于原版实体类型以及
通过相同机制注册属性的经过修改的。

### 参数

| 参数 | 说明 |
| --- | --- |
| `entityId` | 实体类型标识符（例如 `"minecraft:zombie"`）。 |
| `configure` | 配置 lambda。 |

### 返回值

`true` 更换供应商时； `false` 当实体类型
无法解决或底层注册表已失效。

</ApiMemberCard>

## modifyEntityType

<ApiMemberCard
  id="modifyentitytype"
  name="modifyEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun modifyEntityType(entityId: Identifier, configure: EntityTypeModificationConfig.() -> Unit): Boolean
```

标识符过载[modifyEntityType]。

</ApiMemberCard>

