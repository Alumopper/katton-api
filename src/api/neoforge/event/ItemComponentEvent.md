---
title: ItemComponentEvent
outline: [2, 2]
---

<ApiDocPage
  title="ItemComponentEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/ItemComponentEvent.kt"
>
Item component and enchantment events for NeoForge platform.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemComponentEvent&quot;,&quot;href&quot;:&quot;#itemcomponentevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.ModifyComponentArg&quot;,&quot;href&quot;:&quot;#itemcomponentevent-modifycomponentarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.onModifyComponent&quot;,&quot;href&quot;:&quot;#itemcomponentevent-onmodifycomponent&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.onAllowEnchanting&quot;,&quot;href&quot;:&quot;#itemcomponentevent-onallowenchanting&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.onModifyEnchantment&quot;,&quot;href&quot;:&quot;#itemcomponentevent-onmodifyenchantment&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ItemComponentEvent

<ApiMemberCard
  id="itemcomponentevent"
  name="ItemComponentEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
object ItemComponentEvent
```

Item component and enchantment events for NeoForge platform.

This object provides placeholder events for item component modification
and enchantment handling. Note: NeoForge doesn't have direct equivalents
for all Fabric item component events, so these are provided for API compatibility.

### ItemComponentEvent.ModifyComponentArg

<ApiMemberCard
  id="itemcomponentevent-modifycomponentarg"
  name="ItemComponentEvent.ModifyComponentArg"
  kind="Data Class"
  kind-key="data-class"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
data class ModifyComponentArg(val context: ModifyContext)
```

Argument class for item component modification events.

### Properties

| Property | Description |
| --- | --- |
| `context` | The modification context containing item and registry information |

</ApiMemberCard>

### ItemComponentEvent.onModifyComponent

<ApiMemberCard
  id="itemcomponentevent-onmodifycomponent"
  name="ItemComponentEvent.onModifyComponent"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onModifyComponent
```

Event triggered to modify default item components for items.
Use this to add custom components to items during registration.

</ApiMemberCard>

### ItemComponentEvent.onAllowEnchanting

<ApiMemberCard
  id="itemcomponentevent-onallowenchanting"
  name="ItemComponentEvent.onAllowEnchanting"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onAllowEnchanting
```

Event triggered to allow or deny an enchantment being applied to an item.

### Returns

TriState indicating whether to allow (TRUE), deny (FALSE), or use default (DEFAULT).

</ApiMemberCard>

### ItemComponentEvent.onModifyEnchantment

<ApiMemberCard
  id="itemcomponentevent-onmodifyenchantment"
  name="ItemComponentEvent.onModifyEnchantment"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@JvmField
@JvmField val onModifyEnchantment
```

Event triggered when an item's enchantment is being modified.
Use this to customize enchantment behavior.

</ApiMemberCard>

</ApiMemberCard>

