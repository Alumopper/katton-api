---
title: KattonEventsArg
outline: [2, 2]
---

<ApiDocPage
  title="KattonEventsArg"
  module="Common"
  module-key="common"
  package-name="top.katton.api.event"
  source-file="common/src/main/kotlin/top/katton/api/event/KattonEventsArg.kt"
>
服务器级事件的参数。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;ServerArg&quot;,&quot;href&quot;:&quot;#serverarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;SyncDatapackContentsArg&quot;,&quot;href&quot;:&quot;#syncdatapackcontentsarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;StartDatapackReloadArg&quot;,&quot;href&quot;:&quot;#startdatapackreloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EndDatapackReloadArg&quot;,&quot;href&quot;:&quot;#enddatapackreloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerSaveArg&quot;,&quot;href&quot;:&quot;#serversavearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerTickArg&quot;,&quot;href&quot;:&quot;#servertickarg&quot;,&quot;kind&quot;:&quot;Value Class&quot;,&quot;kindKey&quot;:&quot;value-class&quot;}, {&quot;label&quot;:&quot;WorldTickArg&quot;,&quot;href&quot;:&quot;#worldtickarg&quot;,&quot;kind&quot;:&quot;Value Class&quot;,&quot;kindKey&quot;:&quot;value-class&quot;}, {&quot;label&quot;:&quot;EntityLoadArg&quot;,&quot;href&quot;:&quot;#entityloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EntityUnloadArg&quot;,&quot;href&quot;:&quot;#entityunloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EquipmentChangeArg&quot;,&quot;href&quot;:&quot;#equipmentchangearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChunkLoadArg&quot;,&quot;href&quot;:&quot;#chunkloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChunkUnloadArg&quot;,&quot;href&quot;:&quot;#chunkunloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChunkStatusChangeArg&quot;,&quot;href&quot;:&quot;#chunkstatuschangearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;BlockEntityLoadArg&quot;,&quot;href&quot;:&quot;#blockentityloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;BlockBreakArg&quot;,&quot;href&quot;:&quot;#blockbreakarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;BlockPlaceArg&quot;,&quot;href&quot;:&quot;#blockplacearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;UseItemOnArg&quot;,&quot;href&quot;:&quot;#useitemonarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;UseWithoutItemOnArg&quot;,&quot;href&quot;:&quot;#usewithoutitemonarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowEnchantingArg&quot;,&quot;href&quot;:&quot;#allowenchantingarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ModifyEnchantmentArg&quot;,&quot;href&quot;:&quot;#modifyenchantmentarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ElytraAllowArg&quot;,&quot;href&quot;:&quot;#elytraallowarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ElytraCustomArg&quot;,&quot;href&quot;:&quot;#elytracustomarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowSleepingArg&quot;,&quot;href&quot;:&quot;#allowsleepingarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;SleepingArg&quot;,&quot;href&quot;:&quot;#sleepingarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowBedArg&quot;,&quot;href&quot;:&quot;#allowbedarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowNearbyMonstersArg&quot;,&quot;href&quot;:&quot;#allownearbymonstersarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowResettingTimeArg&quot;,&quot;href&quot;:&quot;#allowresettingtimearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ModifySleepingDirectionArg&quot;,&quot;href&quot;:&quot;#modifysleepingdirectionarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowSettingSpawnArg&quot;,&quot;href&quot;:&quot;#allowsettingspawnarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;SetBedOccupationStateArg&quot;,&quot;href&quot;:&quot;#setbedoccupationstatearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ModifyWakeUpPositionArg&quot;,&quot;href&quot;:&quot;#modifywakeuppositionarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ItemUseOnArg&quot;,&quot;href&quot;:&quot;#itemuseonarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ItemUseArg&quot;,&quot;href&quot;:&quot;#itemusearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LootTableReplaceArg&quot;,&quot;href&quot;:&quot;#loottablereplacearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LootTableModifyArg&quot;,&quot;href&quot;:&quot;#loottablemodifyarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LootTableAllLoadArg&quot;,&quot;href&quot;:&quot;#loottableallloadarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LootTableModifyDropsArg&quot;,&quot;href&quot;:&quot;#loottablemodifydropsarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerAttackBlockArg&quot;,&quot;href&quot;:&quot;#playerattackblockarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerAttackEntityArg&quot;,&quot;href&quot;:&quot;#playerattackentityarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerUseBlockArg&quot;,&quot;href&quot;:&quot;#playeruseblockarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerUseEntityArg&quot;,&quot;href&quot;:&quot;#playeruseentityarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerUseItemArg&quot;,&quot;href&quot;:&quot;#playeruseitemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerPickFromBlockArg&quot;,&quot;href&quot;:&quot;#playerpickfromblockarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerPickFromEntityArg&quot;,&quot;href&quot;:&quot;#playerpickfromentityarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AfterKilledOtherEntityArg&quot;,&quot;href&quot;:&quot;#afterkilledotherentityarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AfterEntityChangeLevelArg&quot;,&quot;href&quot;:&quot;#afterentitychangelevelarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AfterPlayerChangeLevelArg&quot;,&quot;href&quot;:&quot;#afterplayerchangelevelarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowDamageArg&quot;,&quot;href&quot;:&quot;#allowdamagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AfterDamageArg&quot;,&quot;href&quot;:&quot;#afterdamagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowDeathArg&quot;,&quot;href&quot;:&quot;#allowdeatharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AfterDeathArg&quot;,&quot;href&quot;:&quot;#afterdeatharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;MobConversionArg&quot;,&quot;href&quot;:&quot;#mobconversionarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowChatMessageArg&quot;,&quot;href&quot;:&quot;#allowchatmessagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowGameMessageArg&quot;,&quot;href&quot;:&quot;#allowgamemessagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AllowCommandMessageArg&quot;,&quot;href&quot;:&quot;#allowcommandmessagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ChatMessageArg&quot;,&quot;href&quot;:&quot;#chatmessagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;GameMessageArg&quot;,&quot;href&quot;:&quot;#gamemessagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;CommandMessageArg&quot;,&quot;href&quot;:&quot;#commandmessagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerArg&quot;,&quot;href&quot;:&quot;#playerarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerAfterRespawnArg&quot;,&quot;href&quot;:&quot;#serverplayerafterrespawnarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerAllowDeathArg&quot;,&quot;href&quot;:&quot;#serverplayerallowdeatharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ServerPlayerCopyArg&quot;,&quot;href&quot;:&quot;#serverplayercopyarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;AnimalTameArg&quot;,&quot;href&quot;:&quot;#animaltamearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;BabySpawnArg&quot;,&quot;href&quot;:&quot;#babyspawnarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;CriticalHitArg&quot;,&quot;href&quot;:&quot;#criticalhitarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerWakeUpArg&quot;,&quot;href&quot;:&quot;#playerwakeuparg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EntityTeleportArg&quot;,&quot;href&quot;:&quot;#entityteleportarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;EndermanAngerArg&quot;,&quot;href&quot;:&quot;#endermanangerarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ExplosionStartArg&quot;,&quot;href&quot;:&quot;#explosionstartarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ExplosionDetonateArg&quot;,&quot;href&quot;:&quot;#explosiondetonatearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ItemTossArg&quot;,&quot;href&quot;:&quot;#itemtossarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerDestroyItemArg&quot;,&quot;href&quot;:&quot;#playerdestroyitemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingUseItemStartArg&quot;,&quot;href&quot;:&quot;#livinguseitemstartarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingUseItemTickArg&quot;,&quot;href&quot;:&quot;#livinguseitemtickarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingUseItemStopArg&quot;,&quot;href&quot;:&quot;#livinguseitemstoparg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingUseItemFinishArg&quot;,&quot;href&quot;:&quot;#livinguseitemfinisharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoPlayerAttackEntityArg&quot;,&quot;href&quot;:&quot;#neoplayerattackentityarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoPlayerInteractEntityArg&quot;,&quot;href&quot;:&quot;#neoplayerinteractentityarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoPlayerInteractBlockArg&quot;,&quot;href&quot;:&quot;#neoplayerinteractblockarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoPlayerInteractItemArg&quot;,&quot;href&quot;:&quot;#neoplayerinteractitemarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoPlayerLeftClickBlockArg&quot;,&quot;href&quot;:&quot;#neoplayerleftclickblockarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerXpChangeArg&quot;,&quot;href&quot;:&quot;#playerxpchangearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerXpLevelChangeArg&quot;,&quot;href&quot;:&quot;#playerxplevelchangearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;PlayerPickupXpArg&quot;,&quot;href&quot;:&quot;#playerpickupxparg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingHurtArg&quot;,&quot;href&quot;:&quot;#livinghurtarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoLivingDamageArg&quot;,&quot;href&quot;:&quot;#neolivingdamagearg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;NeoLivingDeathArg&quot;,&quot;href&quot;:&quot;#neolivingdeatharg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingDropsArg&quot;,&quot;href&quot;:&quot;#livingdropsarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingFallArg&quot;,&quot;href&quot;:&quot;#livingfallarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;LivingJumpArg&quot;,&quot;href&quot;:&quot;#livingjumparg&quot;,&quot;kind&quot;:&quot;Value Class&quot;,&quot;kindKey&quot;:&quot;value-class&quot;}, {&quot;label&quot;:&quot;ServerChatArg&quot;,&quot;href&quot;:&quot;#serverchatarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;ShieldBlockArg&quot;,&quot;href&quot;:&quot;#shieldblockarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;MobEffectAllowAddArg&quot;,&quot;href&quot;:&quot;#mobeffectallowaddarg&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}]' />

## ServerArg

<ApiMemberCard
  id="serverarg"
  name="ServerArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerArg(val server: MinecraftServer)
```

服务器级事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |

</ApiMemberCard>

## SyncDatapackContentsArg

<ApiMemberCard
  id="syncdatapackcontentsarg"
  name="SyncDatapackContentsArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class SyncDatapackContentsArg( val player: ServerPlayer, val joined: Boolean )
```

数据包内容同步事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 接收同步的播放器 |
| `joined` | 此同步是否是由于玩家加入所致 |

</ApiMemberCard>

## StartDatapackReloadArg

<ApiMemberCard
  id="startdatapackreloadarg"
  name="StartDatapackReloadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class StartDatapackReloadArg( val server: MinecraftServer, val resourceManager: ResourceManager )
```

数据包重载开始事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |
| `resourceManager` | 正在重载资源管理器 |

</ApiMemberCard>

## EndDatapackReloadArg

<ApiMemberCard
  id="enddatapackreloadarg"
  name="EndDatapackReloadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EndDatapackReloadArg( val server: MinecraftServer, val resourceManager: ResourceManager, val success: Boolean )
```

数据包重载结束事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |
| `resourceManager` | 重载的资源管理器 |
| `success` | 重载是否成功完成 |

</ApiMemberCard>

## ServerSaveArg

<ApiMemberCard
  id="serversavearg"
  name="ServerSaveArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerSaveArg( val server: MinecraftServer, val flush: Boolean, val force: Boolean )
```

服务器保存事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |
| `flush` | 数据是否应该刷新到磁盘 |
| `force` | 这是否是强制保存 |

</ApiMemberCard>

## ServerTickArg

<ApiMemberCard
  id="servertickarg"
  name="ServerTickArg"
  kind="Value Class"
  kind-key="value-class"
  module="Common"
  module-key="common"
>

```kotlin
@JvmInline
value class ServerTickArg(val server: MinecraftServer)
```

服务器tick 事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |

</ApiMemberCard>

## WorldTickArg

<ApiMemberCard
  id="worldtickarg"
  name="WorldTickArg"
  kind="Value Class"
  kind-key="value-class"
  module="Common"
  module-key="common"
>

```kotlin
@JvmInline
value class WorldTickArg(val world: ServerLevel)
```

世界蜱虫事件的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | ServerLevel 被勾选 |

</ApiMemberCard>

## EntityLoadArg

<ApiMemberCard
  id="entityloadarg"
  name="EntityLoadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EntityLoadArg( val entity: Entity, val world: ServerLevel ): CancellableEventArg()
```

实体加载事件的参数。

当实体加载到世界中时触发。
可以取消以防止实体加载。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在加载的实体 |
| `world` | 实体正在加载到的ServerLevel |

</ApiMemberCard>

## EntityUnloadArg

<ApiMemberCard
  id="entityunloadarg"
  name="EntityUnloadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EntityUnloadArg( val entity: Entity, val world: ServerLevel )
```

实体卸载事件的参数。

当实体从世界中卸载时触发。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在卸载的实体 |
| `world` | 实体正在卸载的ServerLevel |

</ApiMemberCard>

## EquipmentChangeArg

<ApiMemberCard
  id="equipmentchangearg"
  name="EquipmentChangeArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EquipmentChangeArg( val entity: LivingEntity, val slot: EquipmentSlot, val from: ItemStack, val to: ItemStack )
```

设备变更事件的参数。

当生物体的装备发生变化时触发。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 设备发生变更的单位 |
| `slot` | 改变的装备槽位 |
| `from` | 槽中的前一个ItemStack |
| `to` | 插槽中的新ItemStack |

</ApiMemberCard>

## ChunkLoadArg

<ApiMemberCard
  id="chunkloadarg"
  name="ChunkLoadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ChunkLoadArg( val world: ServerLevel, val chunk: LevelChunk, val generated: Boolean
```

块加载事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 包含块的ServerLevel |
| `chunk` | 已加载的LevelChunk |
| `generated` | chunk是否是新生成的 |

</ApiMemberCard>

## ChunkUnloadArg

<ApiMemberCard
  id="chunkunloadarg"
  name="ChunkUnloadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ChunkUnloadArg( val world: ServerLevel, val chunk: LevelChunk )
```

块卸载事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 包含块的ServerLevel |
| `chunk` | 正在卸载的LevelChunk |

</ApiMemberCard>

## ChunkStatusChangeArg

<ApiMemberCard
  id="chunkstatuschangearg"
  name="ChunkStatusChangeArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ChunkStatusChangeArg( val world: ServerLevel, val chunk: LevelChunk, val oldStatus: FullChunkStatus, val newStatus: FullChunkStatus )
```

方块状态更改事件的参数。

当块的加载状态发生变化时触发。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 包含块的ServerLevel |
| `chunk` | 状态发生变化的LevelChunk |
| `oldStatus` | 之前的方块状态 |
| `newStatus` | 新方块状态 |

</ApiMemberCard>

## BlockEntityLoadArg

<ApiMemberCard
  id="blockentityloadarg"
  name="BlockEntityLoadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class BlockEntityLoadArg( val blockEntity: BlockEntity, val world: ServerLevel )
```

方块实体加载事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `blockEntity` | 已加载的BlockEntity |
| `world` | 包含方块实体的ServerLevel |

</ApiMemberCard>

## BlockBreakArg

<ApiMemberCard
  id="blockbreakarg"
  name="BlockBreakArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class BlockBreakArg( val world: Level, val player: Player, val pos: BlockPos, val state: BlockState, val blockEntity: BlockEntity?
```

块中断事件的参数。

可以取消以防止方块被破坏。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 包含方块的世界 |
| `player` | 玩家打破方块 |
| `pos` | 块的位置 |
| `state` | BlockState 被破坏 |
| `blockEntity` | 该位置的BlockEntity（如果有） |

</ApiMemberCard>

## BlockPlaceArg

<ApiMemberCard
  id="blockplacearg"
  name="BlockPlaceArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class BlockPlaceArg( val world: Level, val player: Player?, val pos: BlockPos, val state: BlockState, val blockEntity: BlockEntity?
```

块位置事件的参数。

可以取消以防止放置方块。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 放置方块的世界 |
| `player` | 放置方块的玩家（对于非玩家放置可能为空） |
| `pos` | 放置方块的位置 |
| `state` | 放置的BlockState |
| `blockEntity` | 正在放置的BlockEntity（如果有） |

</ApiMemberCard>

## UseItemOnArg

<ApiMemberCard
  id="useitemonarg"
  name="UseItemOnArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class UseItemOnArg( val stack: ItemStack, val state: BlockState, val world: Level, val pos: BlockPos, val player: Player, val hand: InteractionHand, val hitResult: BlockHitResult )
```

方方块事件中物品使用的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `stack` | 正在使用的ItemStack |
| `state` | 正在交互的块的BlockState |
| `world` | 包含方块的世界 |
| `pos` | 块的位置 |
| `player` | 使用该物品的玩家 |
| `hand` | 拿着物品的手 |
| `hitResult` | 包含人脸和位置详细信息的块命中结果 |

</ApiMemberCard>

## UseWithoutItemOnArg

<ApiMemberCard
  id="usewithoutitemonarg"
  name="UseWithoutItemOnArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class UseWithoutItemOnArg( val state: BlockState, val world: Level, val pos: BlockPos, val player: Player, val hitResult: BlockHitResult )
```

没有物品事件的块交互的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `state` | 正在交互的块的BlockState |
| `world` | 包含方块的世界 |
| `pos` | 块的位置 |
| `player` | 玩家与方块互动 |
| `hitResult` | 区块命中结果 |

</ApiMemberCard>

## AllowEnchantingArg

<ApiMemberCard
  id="allowenchantingarg"
  name="AllowEnchantingArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowEnchantingArg( val enchantment: Holder<Enchantment>, val target: ItemStack, val context: EnchantingContext )
```

结界津贴检查事件的参数。

用于确定是否可以将附魔应用于物品。

### 属性

| 属性 | 说明 |
| --- | --- |
| `enchantment` | 正在检查的结界 |
| `target` | 目标ItemStack |
| `context` | 迷人的背景（PRIMARY或ACCEPTABLE） |

</ApiMemberCard>

## ModifyEnchantmentArg

<ApiMemberCard
  id="modifyenchantmentarg"
  name="ModifyEnchantmentArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ModifyEnchantmentArg( val key: ResourceKey<Enchantment>, val builder: Enchantment.Builder )
```

附魔修改事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `key` | 正在修改的结界的ResourceKey |
| `builder` | 用于修改的 Enchantment.Builder |

</ApiMemberCard>

## ElytraAllowArg

<ApiMemberCard
  id="elytraallowarg"
  name="ElytraAllowArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ElytraAllowArg(val entity: LivingEntity)
```

鞘翅飞行津贴检查的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 尝试使用鞘翅飞行的实体 |

</ApiMemberCard>

## ElytraCustomArg

<ApiMemberCard
  id="elytracustomarg"
  name="ElytraCustomArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ElytraCustomArg( val entity: LivingEntity, val tickElytra: Boolean )
```

自定义鞘翅飞行事件的论证。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 使用鞘翅飞行的实体 |
| `tickElytra` | 是否应该运行原版鞘翅蜱逻辑 |

</ApiMemberCard>

## AllowSleepingArg

<ApiMemberCard
  id="allowsleepingarg"
  name="AllowSleepingArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowSleepingArg( val entity: LivingEntity, val pos: BlockPos )
```

睡眠津贴检查的论点。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 试图睡觉的实体 |
| `pos` | 床的位置 |

</ApiMemberCard>

## SleepingArg

<ApiMemberCard
  id="sleepingarg"
  name="SleepingArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class SleepingArg( val entity: LivingEntity, val pos: BlockPos )
```

睡眠事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在睡觉的实体 |
| `pos` | 床的位置 |

</ApiMemberCard>

## AllowBedArg

<ApiMemberCard
  id="allowbedarg"
  name="AllowBedArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowBedArg( val entity: LivingEntity, val pos: BlockPos, val state: BlockState, val vanillaResult: Boolean )
```

床位使用津贴检查的论据。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 试图使用该床的实体 |
| `pos` | 床的位置 |
| `state` | 床的BlockState |
| `vanillaResult` | 本次检查的原版游戏结果 |

</ApiMemberCard>

## AllowNearbyMonstersArg

<ApiMemberCard
  id="allownearbymonstersarg"
  name="AllowNearbyMonstersArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowNearbyMonstersArg( val entity: Player, val pos: BlockPos, val vanillaResult: Boolean )
```

附近的怪物在睡觉时检查的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 玩家试图睡觉 |
| `pos` | 床的位置 |
| `vanillaResult` | 本次检查的原版游戏结果 |

</ApiMemberCard>

## AllowResettingTimeArg

<ApiMemberCard
  id="allowresettingtimearg"
  name="AllowResettingTimeArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowResettingTimeArg(val player: Player)
```

时间重置津贴检查的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家尝试重置时间 |

</ApiMemberCard>

## ModifySleepingDirectionArg

<ApiMemberCard
  id="modifysleepingdirectionarg"
  name="ModifySleepingDirectionArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ModifySleepingDirectionArg( val entity: LivingEntity, val pos: BlockPos, val direction: Direction? )
```

改变睡眠方向的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 实体正在睡觉 |
| `pos` | 床的位置 |
| `direction` | 实体睡觉时所面对的方向 |

</ApiMemberCard>

## AllowSettingSpawnArg

<ApiMemberCard
  id="allowsettingspawnarg"
  name="AllowSettingSpawnArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowSettingSpawnArg( val entity: LivingEntity, val pos: BlockPos )
```

生成点设置余量的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 正在设置其生成点的实体 |
| `pos` | 生成点的位置 |

</ApiMemberCard>

## SetBedOccupationStateArg

<ApiMemberCard
  id="setbedoccupationstatearg"
  name="SetBedOccupationStateArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class SetBedOccupationStateArg( val entity: LivingEntity, val pos: BlockPos, val state: BlockState, val occupied: Boolean )
```

床位占用状态改变的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 占据床的实体 |
| `pos` | 床的位置 |
| `state` | 床的BlockState |
| `occupied` | 床位现在是否被占用 |

</ApiMemberCard>

## ModifyWakeUpPositionArg

<ApiMemberCard
  id="modifywakeuppositionarg"
  name="ModifyWakeUpPositionArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ModifyWakeUpPositionArg( val entity: LivingEntity, val sleepingPos: BlockPos, val bedState: BlockState, val wakeUpPos: Vec3? )
```

唤醒位置修改的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 实体苏醒 |
| `sleepingPos` | 实体睡觉的位置 |
| `bedState` | 床的BlockState |
| `wakeUpPos` | 计算出的唤醒位置（可以修改） |

</ApiMemberCard>

## ItemUseOnArg

<ApiMemberCard
  id="itemuseonarg"
  name="ItemUseOnArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ItemUseOnArg(val context: UseOnContext)
```

块上下文中物品使用的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `context` | 包含所有交互细节的UseOnContext |

</ApiMemberCard>

## ItemUseArg

<ApiMemberCard
  id="itemusearg"
  name="ItemUseArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ItemUseArg( val world: Level, val player: Player, val hand: InteractionHand )
```

物品使用事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 使用该物品的世界 |
| `player` | 使用该物品的玩家 |
| `hand` | 拿着物品的手 |

</ApiMemberCard>

## LootTableReplaceArg

<ApiMemberCard
  id="loottablereplacearg"
  name="LootTableReplaceArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LootTableReplaceArg( val key: ResourceKey<LootTable>, val original: LootTable, val registries: HolderLookup.Provider )
```

战利品表替换事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `key` | 战利品表的ResourceKey |
| `original` | 原版LootTable |
| `registries` | 注册表查找提供程序 |

</ApiMemberCard>

## LootTableModifyArg

<ApiMemberCard
  id="loottablemodifyarg"
  name="LootTableModifyArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LootTableModifyArg( val key: ResourceKey<LootTable>, val tableBuilder: LootTable.Builder, val registries: HolderLookup.Provider )
```

战利品表修改事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `key` | 战利品表的ResourceKey |
| `tableBuilder` | LootTable.Builder 用于修改 |
| `registries` | 注册表查找提供程序 |

</ApiMemberCard>

## LootTableAllLoadArg

<ApiMemberCard
  id="loottableallloadarg"
  name="LootTableAllLoadArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LootTableAllLoadArg( val resourceManager: ResourceManager, val lootDataManager: Registry<LootTable> )
```

所有战利品表加载事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `resourceManager` | 资源管理器 |
| `lootDataManager` | 战利品数据管理器注册表 |

</ApiMemberCard>

## LootTableModifyDropsArg

<ApiMemberCard
  id="loottablemodifydropsarg"
  name="LootTableModifyDropsArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LootTableModifyDropsArg( val table: Holder<LootTable>, val context: LootContext, val drops: List<ItemStack> )
```

战利品表的参数会删除修改。

### 属性

| 属性 | 说明 |
| --- | --- |
| `table` | 战利品桌持有者 |
| `context` | 掉落的战利品背景 |
| `drops` | 掉落ItemStacks列表（可能会修改） |

</ApiMemberCard>

## PlayerAttackBlockArg

<ApiMemberCard
  id="playerattackblockarg"
  name="PlayerAttackBlockArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerAttackBlockArg( val player: Player, val world: Level, val hand: InteractionHand, val pos: BlockPos, val direction: Direction, )
```

玩家攻击阻止事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 攻击方块的玩家 |
| `world` | 包含方块的世界 |
| `hand` | 用来攻击的手 |
| `pos` | 被攻击方块的位置 |
| `direction` | 被攻击的脸 |

</ApiMemberCard>

## PlayerAttackEntityArg

<ApiMemberCard
  id="playerattackentityarg"
  name="PlayerAttackEntityArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerAttackEntityArg( val player: Player, val world: Level, val hand: InteractionHand, val entity: Entity, val hitResult: EntityHitResult? )
```

玩家攻击实体事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家进攻 |
| `world` | 攻击发生的世界 |
| `hand` | 用来攻击的手 |
| `entity` | 被攻击的实体 |
| `hitResult` | 实体命中结果 |

</ApiMemberCard>

## PlayerUseBlockArg

<ApiMemberCard
  id="playeruseblockarg"
  name="PlayerUseBlockArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerUseBlockArg( val player: Player, val world: Level, val hand: InteractionHand, val hitResult: BlockHitResult )
```

玩家使用方方块事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家互动 |
| `world` | 包含方块的世界 |
| `hand` | 用于交互的手 |
| `hitResult` | 区块命中结果 |

</ApiMemberCard>

## PlayerUseEntityArg

<ApiMemberCard
  id="playeruseentityarg"
  name="PlayerUseEntityArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerUseEntityArg( val player: Player, val world: Level, val hand: InteractionHand, val entity: Entity, val hitResult: EntityHitResult? )
```

玩家使用实体事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家互动 |
| `world` | 包含实体的世界 |
| `hand` | 用于交互的手 |
| `entity` | 与之交互的实体 |
| `hitResult` | 实体命中结果 |

</ApiMemberCard>

## PlayerUseItemArg

<ApiMemberCard
  id="playeruseitemarg"
  name="PlayerUseItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerUseItemArg( val player: Player, val world: Level, val hand: InteractionHand )
```

玩家使用物品事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 使用该物品的玩家 |
| `world` | 使用该物品的等级 |
| `hand` | 拿着物品的手 |

</ApiMemberCard>

## PlayerPickFromBlockArg

<ApiMemberCard
  id="playerpickfromblockarg"
  name="PlayerPickFromBlockArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerPickFromBlockArg( val player: ServerPlayer, val pos: BlockPos, val state: BlockState, val includeData: Boolean )
```

玩家选择区方块事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家拾取方块 |
| `pos` | 被拾取的块的位置 |
| `state` | 区块的BlockState |
| `includeData` | 是否应包含方块实体数据 |

</ApiMemberCard>

## PlayerPickFromEntityArg

<ApiMemberCard
  id="playerpickfromentityarg"
  name="PlayerPickFromEntityArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerPickFromEntityArg( val player: ServerPlayer, val entity: Entity, val includeData: Boolean )
```

玩家选择实体事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家选择实体 |
| `entity` | 被选取的实体 |
| `includeData` | 是否应包含实体数据 |

</ApiMemberCard>

## AfterKilledOtherEntityArg

<ApiMemberCard
  id="afterkilledotherentityarg"
  name="AfterKilledOtherEntityArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AfterKilledOtherEntityArg( val world: ServerLevel, val entity: Entity, val killedEntity: LivingEntity, val source: DamageSource )
```

实体杀死另一个实体事件后的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `world` | 发生杀戮的ServerLevel |
| `entity` | 杀手实体 |
| `killedEntity` | 被杀死的实体 |
| `source` | 造成死亡的伤害源 |

</ApiMemberCard>

## AfterEntityChangeLevelArg

<ApiMemberCard
  id="afterentitychangelevelarg"
  name="AfterEntityChangeLevelArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AfterEntityChangeLevelArg( val originalEntity: Entity, val destinationEntity: Entity, val originalLevel: ServerLevel, val destinationLevel: ServerLevel )
```

实体世界更改事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `originalEntity` | 等级变更前的实体 |
| `destinationEntity` | 等级变更后的实体 |
| `originalLevel` | 实体所在的ServerLevel |
| `destinationLevel` | 实体现在所在的ServerLevel |

</ApiMemberCard>

## AfterPlayerChangeLevelArg

<ApiMemberCard
  id="afterplayerchangelevelarg"
  name="AfterPlayerChangeLevelArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AfterPlayerChangeLevelArg( val player: ServerPlayer, val originalLevel: ServerLevel, val destinationLevel: ServerLevel )
```

玩家等级变更事件的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 改变等级的ServerPlayer |
| `originalLevel` | 玩家所在的ServerLevel |
| `destinationLevel` | 玩家现在所在的ServerLevel |

</ApiMemberCard>

## AllowDamageArg

<ApiMemberCard
  id="allowdamagearg"
  name="AllowDamageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowDamageArg( val entity: LivingEntity, val source: DamageSource, val amount: Float )
```

损害赔偿检查的论据。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 可能受到损害的实体 |
| `source` | 伤害来源 |
| `amount` | 伤害量 |

</ApiMemberCard>

## AfterDamageArg

<ApiMemberCard
  id="afterdamagearg"
  name="AfterDamageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AfterDamageArg( val entity: LivingEntity, val source: DamageSource, val initialDamage: Float, val finalDamage: Float, val handled: Boolean )
```

损坏事件后的论证。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 受到伤害的实体 |
| `source` | 伤害来源 |
| `initialDamage` | 减少前的伤害量 |
| `finalDamage` | 减少后的伤害量 |
| `handled` | 损害是否得到处理 |

</ApiMemberCard>

## AllowDeathArg

<ApiMemberCard
  id="allowdeatharg"
  name="AllowDeathArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowDeathArg( val entity: LivingEntity, val source: DamageSource, val amount: Float )
```

死亡津贴检查的论据。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 该实体可能死亡 |
| `source` | 造成死亡的伤害源 |
| `amount` | 伤害量 |

</ApiMemberCard>

## AfterDeathArg

<ApiMemberCard
  id="afterdeatharg"
  name="AfterDeathArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AfterDeathArg( val entity: LivingEntity, val source: DamageSource )
```

死后事件的论证。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 死亡的实体 |
| `source` | 造成死亡的伤害源 |

</ApiMemberCard>

## MobConversionArg

<ApiMemberCard
  id="mobconversionarg"
  name="MobConversionArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class MobConversionArg( val oldEntity: Mob, val newEntity: Mob, val keepEquipment: ConversionParams? )
```

生物转换事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `oldEntity` | 转换前的原始 Mob |
| `newEntity` | 转换后的新Mob |
| `keepEquipment` | 转换期间设备保留的参数 |

</ApiMemberCard>

## AllowChatMessageArg

<ApiMemberCard
  id="allowchatmessagearg"
  name="AllowChatMessageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowChatMessageArg( val message: PlayerChatMessage, val sender: ServerPlayer, val params: Bound )
```

聊天消息津贴检查的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `message` | 正在发送的PlayerChatMessage |
| `sender` | 发送消息的ServerPlayer |
| `params` | 聊天类型绑定参数 |

</ApiMemberCard>

## AllowGameMessageArg

<ApiMemberCard
  id="allowgamemessagearg"
  name="AllowGameMessageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowGameMessageArg( val server: MinecraftServer, val message: Component, val overlay: Boolean )
```

游戏消息津贴检查的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |
| `message` | 消息组件 |
| `overlay` | 消息是否应显示为叠加层 |

</ApiMemberCard>

## AllowCommandMessageArg

<ApiMemberCard
  id="allowcommandmessagearg"
  name="AllowCommandMessageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AllowCommandMessageArg( val message: PlayerChatMessage, val source: CommandSourceStack, val params: Bound )
```

命令消息允许检查的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `message` | 命令中的PlayerChatMessage |
| `source` | 执行命令的CommandSourceStack |
| `params` | 聊天类型绑定参数 |

</ApiMemberCard>

## ChatMessageArg

<ApiMemberCard
  id="chatmessagearg"
  name="ChatMessageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ChatMessageArg( val message: PlayerChatMessage, val sender: ServerPlayer, val params: Bound )
```

聊天消息事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `message` | 正在发送的PlayerChatMessage |
| `sender` | 发送消息的ServerPlayer |
| `params` | 聊天类型绑定参数 |

</ApiMemberCard>

## GameMessageArg

<ApiMemberCard
  id="gamemessagearg"
  name="GameMessageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class GameMessageArg( val server: MinecraftServer, val message: Component, val overlay: Boolean )
```

游戏消息事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `server` | MinecraftServer实例 |
| `message` | 消息组件 |
| `overlay` | 消息是否显示为叠加 |

</ApiMemberCard>

## CommandMessageArg

<ApiMemberCard
  id="commandmessagearg"
  name="CommandMessageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class CommandMessageArg( val message: PlayerChatMessage, val source: CommandSourceStack, val params: Bound )
```

命令消息事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `message` | 命令中的PlayerChatMessage |
| `source` | 执行命令的CommandSourceStack |
| `params` | 聊天类型绑定参数 |

</ApiMemberCard>

## PlayerArg

<ApiMemberCard
  id="playerarg"
  name="PlayerArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerArg(val player: ServerPlayer)
```

与玩家相关的事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 参与该事件的ServerPlayer |

</ApiMemberCard>

## ServerPlayerAfterRespawnArg

<ApiMemberCard
  id="serverplayerafterrespawnarg"
  name="ServerPlayerAfterRespawnArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerPlayerAfterRespawnArg( val oldPlayer: ServerPlayer, val newPlayer: ServerPlayer, val alive: Boolean )
```

玩家重生事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `oldPlayer` | 重生前的ServerPlayer |
| `newPlayer` | 重生后的ServerPlayer |
| `alive` | 玩家重生前是否还活着 |

</ApiMemberCard>

## ServerPlayerAllowDeathArg

<ApiMemberCard
  id="serverplayerallowdeatharg"
  name="ServerPlayerAllowDeathArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerPlayerAllowDeathArg( val player: ServerPlayer, val damageSource: DamageSource, val damageAmount: Float )
```

玩家死亡津贴检查的论据。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 潜在死亡的ServerPlayer |
| `damageSource` | 造成死亡的伤害源 |
| `damageAmount` | 伤害量 |

</ApiMemberCard>

## ServerPlayerCopyArg

<ApiMemberCard
  id="serverplayercopyarg"
  name="ServerPlayerCopyArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerPlayerCopyArg( val oldPlayer: ServerPlayer, val newPlayer: ServerPlayer, val alive: Boolean )
```

玩家复制事件的参数（维度变化等）。

### 属性

| 属性 | 说明 |
| --- | --- |
| `oldPlayer` | 原版ServerPlayer |
| `newPlayer` | 新的ServerPlayer副本 |
| `alive` | 副本期间玩家是否还活着 |

</ApiMemberCard>

## AnimalTameArg

<ApiMemberCard
  id="animaltamearg"
  name="AnimalTameArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class AnimalTameArg( val animal: Animal, val tamer: Player ): CancellableEventArg()
```

动物驯服事件的论证。

可以取消以防止驯服。

### 属性

| 属性 | 说明 |
| --- | --- |
| `animal` | 被驯服的动物 |
| `tamer` | 玩家驯服动物 |

</ApiMemberCard>

## BabySpawnArg

<ApiMemberCard
  id="babyspawnarg"
  name="BabySpawnArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class BabySpawnArg( val parentA: LivingEntity, val parentB: LivingEntity, val child: AgeableMob? ): CancellableEventArg()
```

婴儿出生事件的争论。

可以取消以防止婴儿产卵。

### 属性

| 属性 | 说明 |
| --- | --- |
| `parentA` | 第一父母LivingEntity |
| `parentB` | 第二个父母LivingEntity |
| `child` | 婴儿AgeableMob（可能为空） |

</ApiMemberCard>

## CriticalHitArg

<ApiMemberCard
  id="criticalhitarg"
  name="CriticalHitArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class CriticalHitArg( val player: Player, val target: Entity, val isVanillaCritical: Boolean )
```

严重命中事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 发起攻击的玩家 |
| `target` | 被攻击的实体 |
| `isVanillaCritical` | 香草是否认为这是一个重击 |

</ApiMemberCard>

## PlayerWakeUpArg

<ApiMemberCard
  id="playerwakeuparg"
  name="PlayerWakeUpArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerWakeUpArg( val player: Player, val wakeImmediately: Boolean, val updateLevelList: Boolean )
```

玩家唤醒事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家醒来 |
| `wakeImmediately` | 是否立即醒来 |
| `updateLevelList` | 是否更新世界列表 |

</ApiMemberCard>

## EntityTeleportArg

<ApiMemberCard
  id="entityteleportarg"
  name="EntityTeleportArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EntityTeleportArg( val entity: Entity, val fromX: Double, val fromY: Double, val fromZ: Double, val toX: Double, val toY: Double, val toZ: Double ): CancellableEventArg()
```

实体传送事件的参数。

可以取消以防止传送。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 实体传送 |
| `fromX` | 原始X坐标 |
| `fromY` | 原始Y坐标 |
| `fromZ` | 原始Z坐标 |
| `toX` | 目标X坐标 |
| `toY` | 目标Y坐标 |
| `toZ` | 目标Z坐标 |

</ApiMemberCard>

## EndermanAngerArg

<ApiMemberCard
  id="endermanangerarg"
  name="EndermanAngerArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class EndermanAngerArg( val enderman: EnderMan, val player: Player ): CancellableEventArg()
```

末影人愤怒事件的争论。

可以取消以防止末影人生气。

### 属性

| 属性 | 说明 |
| --- | --- |
| `enderman` | EnderMan 生气了 |
| `player` | 末影人的目标玩家 |

</ApiMemberCard>

## ExplosionStartArg

<ApiMemberCard
  id="explosionstartarg"
  name="ExplosionStartArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ExplosionStartArg( val level: Level, val explosion: Explosion ): CancellableEventArg()
```

爆炸启动事件的参数。

可以取消以防止爆炸。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 爆炸开始的水平 |
| `explosion` | 爆炸实例 |

</ApiMemberCard>

## ExplosionDetonateArg

<ApiMemberCard
  id="explosiondetonatearg"
  name="ExplosionDetonateArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ExplosionDetonateArg( val level: Level, val explosion: Explosion, val affectedEntities: List<Entity> )
```

爆炸引爆事件的争论。

### 属性

| 属性 | 说明 |
| --- | --- |
| `level` | 爆炸发生的水平 |
| `explosion` | 爆炸实例 |
| `affectedEntities` | 受爆炸影响的实体列表 |

</ApiMemberCard>

## ItemTossArg

<ApiMemberCard
  id="itemtossarg"
  name="ItemTossArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ItemTossArg( val player: Player, val item: ItemEntity )
```

物品抛掷事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家扔物品 |
| `item` | 被抛掷的ItemEntity |

</ApiMemberCard>

## PlayerDestroyItemArg

<ApiMemberCard
  id="playerdestroyitemarg"
  name="PlayerDestroyItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerDestroyItemArg( val player: Player, val item: ItemStack, val hand: InteractionHand?
```

物品销毁事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 物品被毁坏的玩家 |
| `item` | 被摧毁的ItemStack |
| `hand` | 该物品所在的手（可能为空） |

</ApiMemberCard>

## LivingUseItemStartArg

<ApiMemberCard
  id="livinguseitemstartarg"
  name="LivingUseItemStartArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingUseItemStartArg( val entity: LivingEntity, val item: ItemStack, val hand: InteractionHand, val duration: Int ): CancellableEventArg()
```

物品使用开始事件的参数。

可以取消以防止物品使用。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | LivingEntity开始使用该物品 |
| `item` | 正在使用的ItemStack |
| `hand` | 拿着物品的手 |
| `duration` | 初始使用持续时间（以tick为单位） |

</ApiMemberCard>

## LivingUseItemTickArg

<ApiMemberCard
  id="livinguseitemtickarg"
  name="LivingUseItemTickArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingUseItemTickArg( val entity: LivingEntity, val item: ItemStack, var duration: Int ): CancellableEventArg()
```

物品使用勾选事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 使用该物品的LivingEntity |
| `item` | 正在使用的ItemStack |
| `duration` | 剩余使用时长（可修改） |

</ApiMemberCard>

## LivingUseItemStopArg

<ApiMemberCard
  id="livinguseitemstoparg"
  name="LivingUseItemStopArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingUseItemStopArg( val entity: LivingEntity, val item: ItemStack, val duration: Int ): CancellableEventArg()
```

物品使用停止事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 停止使用该物品的LivingEntity |
| `item` | 正在使用的ItemStack |
| `duration` | 停止时剩余使用时间 |

</ApiMemberCard>

## LivingUseItemFinishArg

<ApiMemberCard
  id="livinguseitemfinisharg"
  name="LivingUseItemFinishArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingUseItemFinishArg( val entity: LivingEntity, val item: ItemStack, val duration: Int, var result: ItemStack )
```

物品使用完成事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 使用完该物品的LivingEntity |
| `item` | 使用的ItemStack |
| `duration` | 总使用时长（以tick为单位） |
| `result` | 结果ItemStack（可修改） |

</ApiMemberCard>

## NeoPlayerAttackEntityArg

<ApiMemberCard
  id="neoplayerattackentityarg"
  name="NeoPlayerAttackEntityArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoPlayerAttackEntityArg( val player: Player, val target: Entity ) : CancellableEventArg()
```

NeoForge 玩家攻击实体事件的参数。

可以取消以防止攻击。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家进攻 |
| `target` | 被攻击的实体 |

</ApiMemberCard>

## NeoPlayerInteractEntityArg

<ApiMemberCard
  id="neoplayerinteractentityarg"
  name="NeoPlayerInteractEntityArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoPlayerInteractEntityArg( val player: Player, val entity: Entity, val hand: InteractionHand ) : CancellableEventArg()
```

NeoForge 玩家交互实体事件的参数。

可以取消以防止交互。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家互动 |
| `entity` | 正在与之交互的实体 |
| `hand` | 用于交互的手 |

</ApiMemberCard>

## NeoPlayerInteractBlockArg

<ApiMemberCard
  id="neoplayerinteractblockarg"
  name="NeoPlayerInteractBlockArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoPlayerInteractBlockArg( val player: Player, val pos: BlockPos, val face: Direction?, val hand: InteractionHand ) : CancellableEventArg()
```

NeoForge 玩家交互方块事件的参数。

可以取消以防止交互。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家互动 |
| `pos` | 正在与之交互的BlockPos |
| `face` | 交互的人脸方向 |
| `hand` | 用于交互的手 |

</ApiMemberCard>

## NeoPlayerInteractItemArg

<ApiMemberCard
  id="neoplayerinteractitemarg"
  name="NeoPlayerInteractItemArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoPlayerInteractItemArg( val player: Player, val hand: InteractionHand ) : CancellableEventArg()
```

NeoForge 玩家交互物品事件的参数。

可以取消以防止交互。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家互动 |
| `hand` | 拿着物品的手 |

</ApiMemberCard>

## NeoPlayerLeftClickBlockArg

<ApiMemberCard
  id="neoplayerleftclickblockarg"
  name="NeoPlayerLeftClickBlockArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoPlayerLeftClickBlockArg( val player: Player, val pos: BlockPos, val face: Direction? ) : CancellableEventArg()
```

NeoForge 玩家左键单击阻止事件的参数。

可以取消以阻止该操作。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家左键单击 |
| `pos` | 被点击的BlockPos |
| `face` | 被点击的面的方向 |

</ApiMemberCard>

## PlayerXpChangeArg

<ApiMemberCard
  id="playerxpchangearg"
  name="PlayerXpChangeArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerXpChangeArg( val player: Player, val amount: Int ): CancellableEventArg()
```

玩家XP更改事件的参数。

可以取消以防止 XP 更改。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家收到XP |
| `amount` | 增加的XP积分数量 |

</ApiMemberCard>

## PlayerXpLevelChangeArg

<ApiMemberCard
  id="playerxplevelchangearg"
  name="PlayerXpLevelChangeArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerXpLevelChangeArg( val player: Player, val levels: Int ): CancellableEventArg()
```

玩家XP等级变更事件的参数。

可以取消以防止世界变化。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家接收等级 |
| `levels` | 正在添加的世界数 |

</ApiMemberCard>

## PlayerPickupXpArg

<ApiMemberCard
  id="playerpickupxparg"
  name="PlayerPickupXpArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class PlayerPickupXpArg( val player: Player, val orb: ExperienceOrb ): CancellableEventArg()
```

玩家拾取 XP 球体事件的参数。

可以取消以防止取件。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 玩家捡起球体 |
| `orb` | ExperienceOrb 被拾取 |

</ApiMemberCard>

## LivingHurtArg

<ApiMemberCard
  id="livinghurtarg"
  name="LivingHurtArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingHurtArg( val entity: LivingEntity, val source: DamageSource, val amount: Float ): CancellableEventArg()
```

对生物体伤害事件的争论。

可以取消以防止损坏。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | LivingEntity受到伤害 |
| `source` | 造成伤害的DamageSource |
| `amount` | 伤害量 |

</ApiMemberCard>

## NeoLivingDamageArg

<ApiMemberCard
  id="neolivingdamagearg"
  name="NeoLivingDamageArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoLivingDamageArg( val entity: LivingEntity, val source: DamageSource, val amount: Float )
```

NeoForge 生命伤害事件的论证。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | LivingEntity受到伤害 |
| `source` | DamageSource |
| `amount` | 伤害量 |

</ApiMemberCard>

## NeoLivingDeathArg

<ApiMemberCard
  id="neolivingdeatharg"
  name="NeoLivingDeathArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class NeoLivingDeathArg( val entity: LivingEntity, val source: DamageSource )
```

NeoForge 活死事件的论证。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 死去的LivingEntity |
| `source` | 导致死亡的DamageSource |

</ApiMemberCard>

## LivingDropsArg

<ApiMemberCard
  id="livingdropsarg"
  name="LivingDropsArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingDropsArg( val entity: LivingEntity, val source: DamageSource, val drops: List<ItemStack> ): CancellableEventArg()
```

生物实体掉落事件的争论。

可以取消以防止掉落。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | LivingEntity掉落物品 |
| `source` | 导致掉落的DamageSource |
| `drops` | ItemStacks 被删除的列表 |

</ApiMemberCard>

## LivingFallArg

<ApiMemberCard
  id="livingfallarg"
  name="LivingFallArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class LivingFallArg( val entity: LivingEntity, val distance: Double, val damageMultiplier: Float ): CancellableEventArg()
```

生物体坠落事件的论证。

可以取消以防止坠落损坏。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | LivingEntity坠落 |
| `distance` | 以方块为单位的坠落距离 |
| `damageMultiplier` | 伤害倍数 |

</ApiMemberCard>

## LivingJumpArg

<ApiMemberCard
  id="livingjumparg"
  name="LivingJumpArg"
  kind="Value Class"
  kind-key="value-class"
  module="Common"
  module-key="common"
>

```kotlin
@JvmInline
value class LivingJumpArg(val entity: LivingEntity)
```

生物体跳跃事件的论证。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | LivingEntity跳跃 |

</ApiMemberCard>

## ServerChatArg

<ApiMemberCard
  id="serverchatarg"
  name="ServerChatArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ServerChatArg( val player: ServerPlayer, val message: String, val component: Component ) : CancellableEventArg()
```

服务器聊天事件的参数。

可以取消以防止发送消息。

### 属性

| 属性 | 说明 |
| --- | --- |
| `player` | 发送消息的ServerPlayer |
| `message` | 原始消息字符串 |
| `component` | 消息作为组件 |

</ApiMemberCard>

## ShieldBlockArg

<ApiMemberCard
  id="shieldblockarg"
  name="ShieldBlockArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class ShieldBlockArg( val entity: LivingEntity, val source: DamageSource, val blockedDamage: Float, val originalBlockedState: Boolean )
```

盾牌阻挡事件的参数。

### 属性

| 属性 | 说明 |
| --- | --- |
| `entity` | 用盾牌阻挡LivingEntity |
| `source` | DamageSource被封锁 |
| `blockedDamage` | 格挡伤害量 |
| `originalBlockedState` | 护盾原本是否有阻挡 |

</ApiMemberCard>

## MobEffectAllowAddArg

<ApiMemberCard
  id="mobeffectallowaddarg"
  name="MobEffectAllowAddArg"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class MobEffectAllowAddArg(val entity: Any, val effect: Any)
```

占位符生物效果参数存根

</ApiMemberCard>

