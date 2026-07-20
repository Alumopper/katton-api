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
NeoForge 平台的生物实体使用物品事件。 此对象提供与生物实体使用物品相关的事件，包括使用开始、每 tick、停止和完成。
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

NeoForge 平台的生物实体使用物品事件。
此对象提供与生物实体使用物品相关的事件，包括使用开始、每 tick、停止和完成。

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

当生物实体开始使用物品时触发。
可取消以阻止使用。

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

当生物实体使用物品期间每个 tick 触发。
可取消以停止使用。

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

当生物实体停止使用物品时触发。
可取消以继续使用。

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

当生物实体完成使用物品时触发。

</ApiMemberCard>

</ApiMemberCard>

