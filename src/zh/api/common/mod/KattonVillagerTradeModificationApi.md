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
用于向现有 [TradeSet] 追加单条交易的配置对象，可由 [addVillagerTrade] 使用。
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

用于向现有 [TradeSet] 追加单条交易的配置对象，可由 [addVillagerTrade] 使用。

这些字段直接对应受支持 MC 26.x 版本中公开的 `VillagerTrade` 构造器：主要与
可选的次要成本、结果、最大使用次数、经验和价格倍率，因此能在当前受支持版本
之间保持兼容。

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

商人希望玩家提供的物品。

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

可选的第二种花费。

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

商人回赠的物品。

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

交易可使用的最大次数（例如原版农民 1 级的绿宝石-面包为 16）。

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

每次交易奖励的村民经验。

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

原版价格倍率（默认 0.05；与农民基线一致）。

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

向现有村民或流浪商人 [TradeSet] 追加一条新交易。
`tradeSetKey` 是来自 `minecraft:trade_set` 的注册表标识，例如
`"minecraft:farmer/level_1"` 或 `"minecraft:wandering_trader/buying"`。
变更会先通过 [VillagerTradeManager] 暂存，再在标准重载流程中刷出
（也就是脚本执行后、服务器线程上）。在 `/katton reload` 之外调用也没问题，
变更要等服务器应用待处理的数据包修改后才会生效。
在以下情况下会返回 `false` 并记录警告：
- 服务器未运行
- 无法解析交易组标识
- 配置缺少必需字段（`cost` / `result`）

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

`addVillagerTrade` 的 Identifier 重载。

</ApiMemberCard>
