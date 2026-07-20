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
NeoForge 平台的物品组件和附魔事件。 这是为了物品组件修改和附魔处理保留的占位事件。NeoForge 没有与所有 Fabric 物品组件事件一一对应的实现，因此这里只为 API 兼容性提供这些事件。
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

NeoForge 平台的物品组件和附魔事件。
这是为了物品组件修改和附魔处理保留的占位事件。NeoForge 没有与所有 Fabric 物品组件事件一一对应的实现，因此这里只为 API 兼容性提供这些事件。

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
| `context` | 包含物品和注册表信息的修改上下文。 |

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

当需要修改物品的默认组件时触发。
可在注册期间为物品添加自定义组件。

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

当需要允许或拒绝将附魔应用到物品时触发。

### 返回值

返回是否允许（TRUE）、拒绝（FALSE）或使用默认值（DEFAULT）。

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

当物品的附魔内容被修改时触发。
可用于自定义附魔行为。

</ApiMemberCard>

</ApiMemberCard>

