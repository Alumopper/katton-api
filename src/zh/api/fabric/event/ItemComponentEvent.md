---
title: ItemComponentEvent
outline: [2, 2]
---

<ApiDocPage
  title="ItemComponentEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/ItemComponentEvent.kt"
>
Fabric 平台的物品组件和附魔事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ItemComponentEvent&quot;,&quot;href&quot;:&quot;#itemcomponentevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.ModifyComponentArg&quot;,&quot;href&quot;:&quot;#itemcomponentevent-modifycomponentarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.onModifyComponent&quot;,&quot;href&quot;:&quot;#itemcomponentevent-onmodifycomponent&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.onAllowEnchanting&quot;,&quot;href&quot;:&quot;#itemcomponentevent-onallowenchanting&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;ItemComponentEvent.onModifyEnchantment&quot;,&quot;href&quot;:&quot;#itemcomponentevent-onmodifyenchantment&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## ItemComponentEvent

<ApiMemberCard
  id="itemcomponentevent"
  name="ItemComponentEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@Suppress("unused")
object ItemComponentEvent
```

Fabric 平台的物品组件和附魔事件。

此对象提供与默认物品组件修改以及附魔处理（允许或修改附魔）相关的事件。

### ItemComponentEvent.ModifyComponentArg

<ApiMemberCard
  id="itemcomponentevent-modifycomponentarg"
  name="ItemComponentEvent.ModifyComponentArg"
  kind="Data Class"
  kind-key="data-class"
  module="Fabric"
  module-key="fabric"
>

```kotlin
data class ModifyComponentArg(val context: DefaultItemComponentEvents.ModifyContext)
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
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onModifyComponent
```

当需要修改物品的默认组件时触发。
可用于在注册期间为物品添加自定义组件。

</ApiMemberCard>

### ItemComponentEvent.onAllowEnchanting

<ApiMemberCard
  id="itemcomponentevent-onallowenchanting"
  name="ItemComponentEvent.onAllowEnchanting"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onAllowEnchanting
```

当检查是否允许对物品附加附魔时触发。

### 返回值

返回值表示允许（TRUE）、拒绝（FALSE）或使用默认值（DEFAULT）。

</ApiMemberCard>

### ItemComponentEvent.onModifyEnchantment

<ApiMemberCard
  id="itemcomponentevent-onmodifyenchantment"
  name="ItemComponentEvent.onModifyEnchantment"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
val onModifyEnchantment
```

当物品的附魔正在被修改时触发。
可用于自定义附魔行为。

</ApiMemberCard>

</ApiMemberCard>

