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
Configuration for modifying default attributes of an existing [EntityType] (vanilla or modded).
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

Configuration for modifying default attributes of an existing
[EntityType] (vanilla or modded).

Mirrors the property surface of [top.katton.registry.KattonEntityProperties]
but applies to already-registered entity types via
[top.katton.registry.DefaultAttributesHelper].

### Properties

| Property | Description |
| --- | --- |
| `entityId` | The identifier of the entity type being modified. |

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

Overrides the base value of an arbitrary attribute.

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

Overrides max health (`generic.max_health`).

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

Overrides movement speed (`generic.movement_speed`).

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

Overrides knockback resistance (`generic.knockback_resistance`).

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

Overrides attack damage (`generic.attack_damage`).

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

Overrides attack speed (`generic.attack_speed`).

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

Overrides armor (`generic.armor`).

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

Overrides armor toughness (`generic.armor_toughness`).

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

Overrides follow range (`generic.follow_range`).

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

Overrides luck (`generic.luck`).

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

Modifies the default attributes of an existing entity type.

If the entity type already has default attributes registered, the existing
supplier is used as a baseline and individual attribute base values are
overridden. If no default supplier exists, a fresh supplier built from
[LivingEntity.createLivingAttributes] is used as the baseline.

Applied via [DefaultAttributesHelper] (reflection on
`DefaultAttributes.SUPPLIERS`). Works for vanilla entity types as well as
modded ones that register attributes through the same mechanism.

### Parameters

| Parameter | Description |
| --- | --- |
| `entityId` | Entity type identifier (e.g. `"minecraft:zombie"`). |
| `configure` | Configuration lambda. |

### Returns

`true` when the supplier was replaced; `false` when the entity type
could not be resolved or the underlying registry is non-living.

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

Identifier overload of [modifyEntityType].

</ApiMemberCard>

