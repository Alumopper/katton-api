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
将单个交易的配置通过 [addVillagerTrade] 附加到现有的 [TradeSet]。
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

将单个交易附加到现有交易的配置
[TradeSet]通过[addVillagerTrade]。

字段直接映射到公众`VillagerTrade(TradeCost想要，
可选 &lt;TradeCost&gt; additionalWants，ItemStackTemplate 给出，int
maxUses, int xp, float priceMultiplier, ...)` MC 的构造函数
26.1.2 — 这里的每个值都足够简单，可以在补丁中保持稳定
发布。

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

商人想要从玩家那里得到的物品。

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

可选的二次成本。

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

商家返还的物品。

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

最大贸易用途（原版农民等级 1 翡翠面包 = 16）。

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

每笔交易奖励村民XP。

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

普通价格乘数（默认值 0.05；与农民基准相匹配）。

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

为现有村民/流浪商人添加新的贸易条目
[TradeSet]。

`tradeSetKey`是来自`minecraft:trade_set`的注册表ID，例如
`"minecraft:farmer/level_1"`或`"minecraft:wandering_trader/buying"`。

突变通过[VillagerTradeManager]上演并刷新
在标准重载周期期间（脚本执行后，在
服务器线程）。在 `/katton reload` 之外调用它是安全的 —
在服务器应用挂起的数据包之前，更改不可见
突变。

在以下情况下返回 `false` 并记录警告：
- 服务器离线，
- 无法解析交易集 ID，
- 配置缺少必填字段 (`cost` / `result`)。

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

标识符过载[addVillagerTrade]。

</ApiMemberCard>
