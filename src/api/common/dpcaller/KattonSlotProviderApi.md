---
title: KattonSlotProviderApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonSlotProviderApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.dpcaller"
  source-file="common/src/main/kotlin/top/katton/api/dpcaller/KattonSlotProviderApi.kt"
>
Get an item from a container slot.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;get&quot;,&quot;href&quot;:&quot;#get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;set&quot;,&quot;href&quot;:&quot;#set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;minusAssign&quot;,&quot;href&quot;:&quot;#minusassign&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;plusAssign&quot;,&quot;href&quot;:&quot;#plusassign&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;get&quot;,&quot;href&quot;:&quot;#get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;set&quot;,&quot;href&quot;:&quot;#set&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;get&quot;,&quot;href&quot;:&quot;#get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;slots&quot;,&quot;href&quot;:&quot;#slots&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;KattonItemCollection&quot;,&quot;href&quot;:&quot;#kattonitemcollection&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.get&quot;,&quot;href&quot;:&quot;#kattonitemcollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.get&quot;,&quot;href&quot;:&quot;#kattonitemcollection-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.KattonItemSlot&quot;,&quot;href&quot;:&quot;#kattonitemcollection-kattonitemslot&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.KattonItemSlotGroup&quot;,&quot;href&quot;:&quot;#kattonitemcollection-kattonitemslotgroup&quot;,&quot;kind&quot;:&quot;Interface&quot;,&quot;kindKey&quot;:&quot;interface&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.KattonItemSlotList&quot;,&quot;href&quot;:&quot;#kattonitemcollection-kattonitemslotlist&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Contents&quot;,&quot;href&quot;:&quot;#kattonitemcollection-contents&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Container&quot;,&quot;href&quot;:&quot;#kattonitemcollection-container&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Hotbar&quot;,&quot;href&quot;:&quot;#kattonitemcollection-hotbar&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Inventory&quot;,&quot;href&quot;:&quot;#kattonitemcollection-inventory&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.EnderChest&quot;,&quot;href&quot;:&quot;#kattonitemcollection-enderchest&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.MobInventory&quot;,&quot;href&quot;:&quot;#kattonitemcollection-mobinventory&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Horse&quot;,&quot;href&quot;:&quot;#kattonitemcollection-horse&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Weapon&quot;,&quot;href&quot;:&quot;#kattonitemcollection-weapon&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Weapon.MainHand&quot;,&quot;href&quot;:&quot;#kattonitemcollection-weapon-mainhand&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Weapon.OffHand&quot;,&quot;href&quot;:&quot;#kattonitemcollection-weapon-offhand&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Armor&quot;,&quot;href&quot;:&quot;#kattonitemcollection-armor&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Armor.Head&quot;,&quot;href&quot;:&quot;#kattonitemcollection-armor-head&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Armor.Chest&quot;,&quot;href&quot;:&quot;#kattonitemcollection-armor-chest&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Armor.Legs&quot;,&quot;href&quot;:&quot;#kattonitemcollection-armor-legs&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonItemCollection.Armor.Feet&quot;,&quot;href&quot;:&quot;#kattonitemcollection-armor-feet&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}]' />

## get

<ApiMemberCard
  id="get"
  name="get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Container.get(slot: Int): ItemStack
```

Get an item from a container slot.

</ApiMemberCard>

## set

<ApiMemberCard
  id="set"
  name="set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Container.set(slot: Int, itemStack: ItemStack)
```

Set an item into a container slot.

</ApiMemberCard>

## minusAssign

<ApiMemberCard
  id="minusassign"
  name="minusAssign"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Inventory.minusAssign(itemStack: ItemStack)
```

Remove an item from an inventory.

</ApiMemberCard>

## plusAssign

<ApiMemberCard
  id="plusassign"
  name="plusAssign"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Inventory.plusAssign(itemStack: ItemStack)
```

Add an item to an inventory.

</ApiMemberCard>

## get

<ApiMemberCard
  id="get"
  name="get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun SlotProvider.get(slot: KattonItemCollection.KattonItemSlot): ItemStack?
```

Get an item from a slot provider at a KattonItemSlot.

</ApiMemberCard>

## set

<ApiMemberCard
  id="set"
  name="set"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun SlotProvider.set(slot: KattonItemCollection.KattonItemSlot, itemStack: ItemStack)
```

Set an item into a slot provider at a KattonItemSlot.

</ApiMemberCard>

## get

<ApiMemberCard
  id="get"
  name="get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun Container.get(slots: List<KattonItemCollection.KattonItemSlot>): List<ItemStack?>
```

Get items from multiple slots in a container.

</ApiMemberCard>

## slots

<ApiMemberCard
  id="slots"
  name="slots"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val Container.slots: KattonItemCollection
```

Extension property to access a container's slots.

</ApiMemberCard>

## KattonItemCollection

<ApiMemberCard
  id="kattonitemcollection"
  name="KattonItemCollection"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class KattonItemCollection(val container: net.minecraft.world.Container)
```

Collection of item slots with convenient access patterns.

### Properties

| Property | Description |
| --- | --- |
| `container` | The underlying Container |

### KattonItemCollection.get

<ApiMemberCard
  id="kattonitemcollection-get"
  name="KattonItemCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(slot: KattonItemSlot): SlotAccess?
```

Get a SlotAccess for a specific slot.

</ApiMemberCard>

### KattonItemCollection.get

<ApiMemberCard
  id="kattonitemcollection-get"
  name="KattonItemCollection.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(slots: List<KattonItemSlot>): List<SlotAccess?>
```

Get SlotAccesses for multiple slots.

</ApiMemberCard>

### KattonItemCollection.KattonItemSlot

<ApiMemberCard
  id="kattonitemcollection-kattonitemslot"
  name="KattonItemCollection.KattonItemSlot"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
open class KattonItemSlot( val index: Int )
```

Represents a single item slot by index.

</ApiMemberCard>

### KattonItemCollection.KattonItemSlotGroup

<ApiMemberCard
  id="kattonitemcollection-kattonitemslotgroup"
  name="KattonItemCollection.KattonItemSlotGroup"
  kind="Interface"
  kind-key="interface"
  module="Common"
  module-key="common"
>

```kotlin
interface KattonItemSlotGroup
```

Interface for groups of item slots.

</ApiMemberCard>

### KattonItemCollection.KattonItemSlotList

<ApiMemberCard
  id="kattonitemcollection-kattonitemslotlist"
  name="KattonItemCollection.KattonItemSlotList"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
open class KattonItemSlotList( val offset: Int, size: Int ) : Iterable<KattonItemSlot>, KattonItemSlotGroup
```

A list of consecutive item slots.

</ApiMemberCard>

### KattonItemCollection.Contents

<ApiMemberCard
  id="kattonitemcollection-contents"
  name="KattonItemCollection.Contents"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Contents : KattonItemSlot(0)
```

The first content slot.

</ApiMemberCard>

### KattonItemCollection.Container

<ApiMemberCard
  id="kattonitemcollection-container"
  name="KattonItemCollection.Container"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Container : KattonItemSlotList(0, 54)
```

All container slots (0-53).

</ApiMemberCard>

### KattonItemCollection.Hotbar

<ApiMemberCard
  id="kattonitemcollection-hotbar"
  name="KattonItemCollection.Hotbar"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Hotbar : KattonItemSlotList(0, 9)
```

Hotbar slots (0-8).

</ApiMemberCard>

### KattonItemCollection.Inventory

<ApiMemberCard
  id="kattonitemcollection-inventory"
  name="KattonItemCollection.Inventory"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Inventory : KattonItemSlotList(9, 27)
```

Main inventory slots (9-35).

</ApiMemberCard>

### KattonItemCollection.EnderChest

<ApiMemberCard
  id="kattonitemcollection-enderchest"
  name="KattonItemCollection.EnderChest"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object EnderChest : KattonItemSlotList(200, 27)
```

Ender chest slots (200-226).

</ApiMemberCard>

### KattonItemCollection.MobInventory

<ApiMemberCard
  id="kattonitemcollection-mobinventory"
  name="KattonItemCollection.MobInventory"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object MobInventory : KattonItemSlotList(300, 8)
```

Mob inventory slots (300-307).

</ApiMemberCard>

### KattonItemCollection.Horse

<ApiMemberCard
  id="kattonitemcollection-horse"
  name="KattonItemCollection.Horse"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Horse : KattonItemSlotList(500, 15)
```

Horse inventory slots (500-514).

</ApiMemberCard>

### KattonItemCollection.Weapon

<ApiMemberCard
  id="kattonitemcollection-weapon"
  name="KattonItemCollection.Weapon"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Weapon : KattonItemSlotGroup
```

Weapon slots (main hand and off hand).

#### KattonItemCollection.Weapon.MainHand

<ApiMemberCard
  id="kattonitemcollection-weapon-mainhand"
  name="KattonItemCollection.Weapon.MainHand"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object MainHand : KattonItemSlot(EquipmentSlot.MAINHAND.getIndex(98))
```

Main hand slot.

</ApiMemberCard>

#### KattonItemCollection.Weapon.OffHand

<ApiMemberCard
  id="kattonitemcollection-weapon-offhand"
  name="KattonItemCollection.Weapon.OffHand"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object OffHand : KattonItemSlot(EquipmentSlot.OFFHAND.getIndex(98))
```

Off hand slot.

</ApiMemberCard>

</ApiMemberCard>

### KattonItemCollection.Armor

<ApiMemberCard
  id="kattonitemcollection-armor"
  name="KattonItemCollection.Armor"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Armor : KattonItemSlotGroup
```

Armor slots (head, chest, legs, feet).

#### KattonItemCollection.Armor.Head

<ApiMemberCard
  id="kattonitemcollection-armor-head"
  name="KattonItemCollection.Armor.Head"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Head : KattonItemSlot(EquipmentSlot.HEAD.getIndex(100))
```

Head armor slot.

</ApiMemberCard>

#### KattonItemCollection.Armor.Chest

<ApiMemberCard
  id="kattonitemcollection-armor-chest"
  name="KattonItemCollection.Armor.Chest"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Chest : KattonItemSlot(EquipmentSlot.CHEST.getIndex(100))
```

Chest armor slot.

</ApiMemberCard>

#### KattonItemCollection.Armor.Legs

<ApiMemberCard
  id="kattonitemcollection-armor-legs"
  name="KattonItemCollection.Armor.Legs"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Legs : KattonItemSlot(EquipmentSlot.LEGS.getIndex(100))
```

Leg armor slot.

</ApiMemberCard>

#### KattonItemCollection.Armor.Feet

<ApiMemberCard
  id="kattonitemcollection-armor-feet"
  name="KattonItemCollection.Armor.Feet"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object Feet : KattonItemSlot(EquipmentSlot.FEET.getIndex(100))
```

Feet armor slot.

</ApiMemberCard>

</ApiMemberCard>

</ApiMemberCard>

