# 修改已有内容

修改原版（或模组）游戏内容与添加新内容同样重要。Katton 提供了一套 `modify*` 函数，让你可以在 Kotlin 脚本中修改物品属性、方块行为、实体属性、配方、战利品表和村民交易。

> [!NOTE]
> 所有 modify 函数位于 `top.katton.api.mod` 并标注 `@ApiStatus.Experimental`。目标 Minecraft 版本：**26.1.2**。

## 导入

```kotlin
import top.katton.api.mod.*
```

## 重载行为

Modify API 根据与 Minecraft 内部状态的交互方式分为两类：

| 机制 | API | 重载清理 |
|------|-----|----------|
| **实时写入** — 直接写入 Minecraft 内部字段 | `modifyItem`, `modifyBlock`, `modifyEntityType` | 变更持续到 JVM 重启。从脚本中删除 `modify*` 调用并重载**不会**回滚变更。 |
| **暂存写入** — 推迟到 datapack apply 阶段写入 | `modifyRecipe`, `removeRecipe`, `modifyLootTable`, `addVillagerTrade` | 变更在每次重载时被清除并重新应用。从脚本中删除调用并重载会干净地丢弃对应变更。 |

---

## 1. 修改物品

修改任意已有物品的数据组件：最大堆叠、耐久、稀有度、食物属性、抗火、合成剩余物、攻击属性。

<!--@include: ../../../example/quickstart/modify/01.md-->

**可用属性：**

| 属性 | 说明                                                                           |
|------|------------------------------------------------------------------------------|
| `maxStackSize` | 设置最大堆叠。Katton 拒绝 `maxStackSize > 1 && maxDamage > 0` 的无效组合，和 Minecraft 行为一致。 |
| `maxDamage` | 设置耐久。                                                                        |
| `rarity` | 物品稀有度（`COMMON` / `UNCOMMON` / `RARE` / `EPIC`）。                              |
| `name` | 显示名称组件。                                                                      |
| `foodProperties` | 使物品可食用。Katton 自动同时添加 `CONSUMABLE`。                                           |
| `fireResistant` | 为火焰伤害类型添加 `DAMAGE_RESISTANT`。仅支持 `true`。                                     |
| `craftingRemainder` | 容器物品（如桶 → 空桶）。                                                               |
| `attackDamage` | 设置攻击伤害。Katton 缺失时自动补默认 `WEAPON` 组件。                                          |
| `attackSpeed` | 设置攻击速度。                                                                      |

---

## 2. 修改方块

修改方块属性：硬度、抗爆、摩擦、速度/跳跃系数、光照、碰撞标识、音效类型。

<!--@include: ../../../example/quickstart/modify/02.md-->

> [!NOTE]
> Katton 将变更写入**三层**：`BlockBehaviour.Properties`、运行时 `BlockBehaviour` final 字段、以及所有预构建的 `BlockStateBase`，然后调用 `initCache()` 刷新缓存形状。这同时覆盖本地玩家脚步声、生物碰撞和光照。

---

## 3. 修改配方

修改已有配方的结果、数量、经验或烹饪时间，或彻底删除。

<!--@include: ../../../example/quickstart/modify/03.md-->

> [!WARNING]
> `modifyRecipe` 和 `removeRecipe` 需要运行中的服务端。被修改的配方必须已在 `RecipeManager` 中注册。

---

## 4. 修改实体属性

覆盖原版或模组实体类型的默认属性值 — 最大生命、攻击伤害、移动速度、护甲等。

<!--@include: ../../../example/quickstart/modify/04.md-->

**可用属性：**

| 方法 | 属性 |
|------|------|
| `maxHealth(value)` | `generic.max_health` |
| `movementSpeed(value)` | `generic.movement_speed` |
| `knockbackResistance(value)` | `generic.knockback_resistance` |
| `attackDamage(value)` | `generic.attack_damage` |
| `attackSpeed(value)` | `generic.attack_speed` |
| `armor(value)` | `generic.armor` |
| `armorToughness(value)` | `generic.armor_toughness` |
| `followRange(value)` | `generic.follow_range` |
| `luck(value)` | `generic.luck` |
| `attribute(holder, value)` | 任意自定义属性 |

> [!WARNING]
> Katton 在应用覆盖前会从原始供应器**复制所有**已有属性。Mob 专属属性（`FOLLOW_RANGE`、僵尸增援等）会被保留。单独从 `LivingEntity.createLivingAttributes()` 开始会导致 mob 崩溃。

---

## 5. 修改战利品表

读取已有战利品表，添加或删除池和条目，重新注册 — 全部通过 Kotlin DSL。

<!--@include: ../../../example/quickstart/modify/05.md-->

**操作：**

| 方法 | 效果 |
|------|------|
| `pool { … }` | 追加新池 |
| `rawPool(json)` | 追加原始 JSON 池 |
| `removePool(index)` | 删除给定索引位置的池 |
| `removeItem(itemId)` | 从所有池中删除匹配物品 id 的条目 |

`pool { ... }` 块内：
| 成员 | 说明 |
|------|------|
| `rolls = N` | 池抽取次数（默认 1） |
| `addItem(id, weight, quality)` | 添加物品条目 |
| `addTag(id, weight, expand)` | 添加标签条目 |
| `addEmpty(weight)` | 添加空条目 |

---

## 6. 修改村民与流浪商人交易

向职业交易集或流浪商人池追加新交易。

<!--@include: ../../../example/quickstart/modify/06.md-->

**Trade-set id（26.1.2 使用斜杠 `/` 分隔符）：**

| Trade-set id | 效果 |
|--------------|------|
| `minecraft:farmer/level_1` … `minecraft:weaponsmith/level_5` | 职业层级交易 |
| `minecraft:wandering_trader/buying` | 流浪商人购买 |
| `minecraft:wandering_trader/common` | 常见出售 |
| `minecraft:wandering_trader/uncommon` | 罕见出售 |

**配置：**

| 属性 | 默认值 | 说明 |
|------|--------|------|
| `cost(itemId, count)` | 必填 | 商人需要的物品 |
| `additionalCost(itemId, count)` | 未设置 | 可选第二消耗 |
| `result(itemId, count)` | 必填 | 商人返还的物品 |
| `maxUses` | `12` | 交易锁定阈值 |
| `xp` | `2` | 每次交易经验 |
| `priceMultiplier` | `0.05f` | 原版农民为 0.05 |

> [!NOTE]
> 交易在 `/katton reload` 后生效。管理器在首次 apply 时快照每个被修改的 `TradeSet`，在后续重载时自动清理之前的注入。

---

## 需求

| API | 需要服务端？ | 需要重载？ |
|-----|:---:|:---:|
| `modifyItem` / `modifyBlock` / `modifyEntityType` | 否 | 否 |
| `modifyRecipe` / `removeRecipe` | 是 | 在重载时应用 |
| `modifyLootTable` / `getLootTable` | 是 | 在重载时应用 |
| `addVillagerTrade` | 是 | 在重载时应用 |

完整 API 签名参见 [Common API 文档](/api/common/)。
