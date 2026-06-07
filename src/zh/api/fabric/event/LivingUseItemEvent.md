---
title: LivingUseItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="LivingUseItemEvent"
  module="Fabric"
  module-key="fabric"
  package-name="top.katton.api.event"
  source-file="fabric/src/main/kotlin/top/katton/api/event/LivingUseItemEvent.kt"
>
生命实体使用Fabric平台的物品事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LivingUseItemEvent&quot;,&quot;href&quot;:&quot;#livinguseitemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStart&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstart&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemTick&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStop&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstop&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemFinish&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemfinish&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LivingUseItemEvent

<ApiMemberCard
  id="livinguseitemevent"
  name="LivingUseItemEvent"
  kind="Object"
  kind-key="object"
  module="Fabric"
  module-key="fabric"
>

```kotlin
object LivingUseItemEvent
```

生命实体使用Fabric平台的物品事件。

该对象提供与使用物品的生命实体相关的事件。
注意：这些事件是 NeoForge 兼容性的占位符，如下所示
Fabric 没有所有物品使用事件的直接等价物。

### LivingUseItemEvent.onUseItemStart

<ApiMemberCard
  id="livinguseitemevent-onuseitemstart"
  name="LivingUseItemEvent.onUseItemStart"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemStart
```

当生物体开始使用物品时触发事件。
可以取消以防止物品使用。

</ApiMemberCard>

### LivingUseItemEvent.onUseItemTick

<ApiMemberCard
  id="livinguseitemevent-onuseitemtick"
  name="LivingUseItemEvent.onUseItemTick"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemTick
```

当生命实体使用物品时，事件会触发每个tick。
可以取消以停止物品使用。

</ApiMemberCard>

### LivingUseItemEvent.onUseItemStop

<ApiMemberCard
  id="livinguseitemevent-onuseitemstop"
  name="LivingUseItemEvent.onUseItemStop"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemStop
```

当生物体停止使用某个物品时触发事件。
可以取消以继续使用物品。

</ApiMemberCard>

### LivingUseItemEvent.onUseItemFinish

<ApiMemberCard
  id="livinguseitemevent-onuseitemfinish"
  name="LivingUseItemEvent.onUseItemFinish"
  kind="Property"
  kind-key="property"
  module="Fabric"
  module-key="fabric"
>

```kotlin
@JvmField
@JvmField val onUseItemFinish
```

当生物体完成使用物品时触发事件。

</ApiMemberCard>

</ApiMemberCard>

