---
title: KattonVillagerTradeModificationApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonVillagerTradeModificationApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api.mod"
  source-file="common/src/main/kotlin/top/katton/api/mod/KattonVillagerTradeModificationApi.kt"
>
Configuration for a single trade to be appended to an existing [TradeSet] via [addVillagerTrade].
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;VillagerTradeAdditionConfig&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig&quot;,&quot;kind&quot;:&quot;Class&quot;,&quot;kindKey&quot;:&quot;class&quot;}, {&quot;label&quot;:&quot;VillagerTradeAdditionConfig.costItemId&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig-costitemid&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;VillagerTradeAdditionConfig.costBItemId&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig-costbitemid&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;VillagerTradeAdditionConfig.resultItemId&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig-resultitemid&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;VillagerTradeAdditionConfig.maxUses&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig-maxuses&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;VillagerTradeAdditionConfig.xp&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig-xp&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;VillagerTradeAdditionConfig.priceMultiplier&quot;,&quot;href&quot;:&quot;#villagertradeadditionconfig-pricemultiplier&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}, {&quot;label&quot;:&quot;addVillagerTrade&quot;,&quot;href&quot;:&quot;#addvillagertrade&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;addVillagerTrade&quot;,&quot;href&quot;:&quot;#addvillagertrade&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## VillagerTradeAdditionConfig

<ApiMemberCard
  id="villagertradeadditionconfig"
  name="VillagerTradeAdditionConfig"
  kind="Class"
  kind-key="class"
  module="Common"
  module-key="common"
>

```kotlin
class VillagerTradeAdditionConfig internal constructor( val tradeSet: ResourceKey<TradeSet>, )
```

Configuration for a single trade to be appended to an existing
[TradeSet] via [addVillagerTrade].

Fields map directly to the public `VillagerTrade(TradeCost wants,
Optional<TradeCost> additionalWants, ItemStackTemplate gives, int
maxUses, int xp, float priceMultiplier, ...)` constructor on MC
26.1.2 — every value here is plain enough to keep stable across patch
releases.

### VillagerTradeAdditionConfig.costItemId

<ApiMemberCard
  id="villagertradeadditionconfig-costitemid"
  name="VillagerTradeAdditionConfig.costItemId"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var costItemId: Identifier?
```

Item the merchant wants from the player.

</ApiMemberCard>

### VillagerTradeAdditionConfig.costBItemId

<ApiMemberCard
  id="villagertradeadditionconfig-costbitemid"
  name="VillagerTradeAdditionConfig.costBItemId"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var costBItemId: Identifier?
```

Optional secondary cost.

</ApiMemberCard>

### VillagerTradeAdditionConfig.resultItemId

<ApiMemberCard
  id="villagertradeadditionconfig-resultitemid"
  name="VillagerTradeAdditionConfig.resultItemId"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var resultItemId: Identifier?
```

Item the merchant gives back.

</ApiMemberCard>

### VillagerTradeAdditionConfig.maxUses

<ApiMemberCard
  id="villagertradeadditionconfig-maxuses"
  name="VillagerTradeAdditionConfig.maxUses"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var maxUses: Int
```

Maximum trade uses (vanilla farmer level 1 emerald-bread = 16).

</ApiMemberCard>

### VillagerTradeAdditionConfig.xp

<ApiMemberCard
  id="villagertradeadditionconfig-xp"
  name="VillagerTradeAdditionConfig.xp"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var xp: Int
```

Villager XP awarded per trade.

</ApiMemberCard>

### VillagerTradeAdditionConfig.priceMultiplier

<ApiMemberCard
  id="villagertradeadditionconfig-pricemultiplier"
  name="VillagerTradeAdditionConfig.priceMultiplier"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
var priceMultiplier: Float
```

Vanilla price multiplier (0.05 default; matches farmer baselines).

</ApiMemberCard>

</ApiMemberCard>

## addVillagerTrade

<ApiMemberCard
  id="addvillagertrade"
  name="addVillagerTrade"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun addVillagerTrade(tradeSetKey: String, configure: VillagerTradeAdditionConfig.() -> Unit): Boolean
```

Appends a new trade entry to an existing villager / wandering trader
[TradeSet].

`tradeSetKey` is a registry id from `minecraft:trade_set`, e.g.
`"minecraft:farmer/level_1"` or `"minecraft:wandering_trader/buying"`.

The mutation is staged through [VillagerTradeManager] and flushed
during the standard reload cycle (after script execution, on the
server thread). Calling this outside `/katton reload` is safe — the
change is not visible until the server applies pending datapack
mutations.

Returns `false` and logs a warning when:
- the server is offline,
- the trade-set id cannot be parsed,
- the configuration is missing required fields (`cost` / `result`).

</ApiMemberCard>

## addVillagerTrade

<ApiMemberCard
  id="addvillagertrade"
  name="addVillagerTrade"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun addVillagerTrade(tradeSetId: Identifier, configure: VillagerTradeAdditionConfig.() -> Unit): Boolean
```

Identifier overload of [addVillagerTrade].

</ApiMemberCard>

