---
title: LivingUseItemEvent
outline: [2, 2]
---

<ApiDocPage
  title="LivingUseItemEvent"
  module="NeoForge"
  module-key="neoforge"
  package-name="top.katton.api.event"
  source-file="neoforge/src/main/kotlin/top/katton/api/event/LivingUseItemEvent.kt"
>
生命实体使用NeoForge平台的物品事件。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;LivingUseItemEvent&quot;,&quot;href&quot;:&quot;#livinguseitemevent&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStart&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstart&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemTick&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemtick&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemStop&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemstop&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;LivingUseItemEvent.onUseItemFinish&quot;,&quot;href&quot;:&quot;#livinguseitemevent-onuseitemfinish&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## LivingUseItemEvent

<ApiMemberCard
  id="livinguseitemevent"
  name="LivingUseItemEvent"
  kind="Object"
  kind-key="object"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
@Suppress("unused")
@EventBusSubscriber( modid = Katton.MOD_ID, value = [Dist.DEDICATED_SERVER] )
modid
```

生命实体使用NeoForge平台的物品事件。

该对象提供与使用物品的生物实体相关的事件，包括
物品使用的开始、勾选、停止和结束。

### LivingUseItemEvent.onUseItemStart

<ApiMemberCard
  id="livinguseitemevent-onuseitemstart"
  name="LivingUseItemEvent.onUseItemStart"
  kind="Property"
  kind-key="property"
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemStart
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemTick
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemStop
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
  module="NeoForge"
  module-key="neoforge"
>

```kotlin
val onUseItemFinish
```

当生物体完成使用物品时触发事件。

</ApiMemberCard>

</ApiMemberCard>

