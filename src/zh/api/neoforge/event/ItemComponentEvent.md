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
NeoForge平台的物品组件和附魔事件。
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

NeoForge平台的物品组件和附魔事件。

该对象为物品组件修改提供占位符事件
和结界处理。注意：NeoForge没有直接等价物
对于所有 Fabric 物品组件事件，因此提供这些事件是为了实现 API 兼容性。

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

物品组件修改事件的参数类。

### 属性

| 属性 | 说明 |
| --- | --- |
| `context` | 包含物品和注册表信息的修改上下文 |

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

触发事件以修改物品的默认物品组件。
使用它可以在注册期间将自定义组件添加到物品中。

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

触发事件以允许或拒绝对物品应用结界。

### 返回值

TriState指示是否允许（TRUE）、拒绝（FALSE）或使用默认值（DEFAULT）。

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

当物品的附魔被修改时触发事件。
使用它来自定义附魔行为。

</ApiMemberCard>

</ApiMemberCard>

