import type { DefaultTheme } from 'vitepress'

const apiSidebar: DefaultTheme.SidebarMulti = {
  '/api/': [
    {
      text: 'API',
      link: '/api/',
      items: [
        {
          text: 'Common',
          link: '/api/common/',
          collapsed: false,
          items: [
            { text: 'ClientDataApi', link: '/api/common/ClientDataApi' },
            { text: 'KattonAPI', link: '/api/common/KattonAPI' },
            { text: 'KattonClientApi', link: '/api/common/KattonClientApi' },
            { text: 'KattonClientRenderApi', link: '/api/common/KattonClientRenderApi' },
            { text: 'KattonComponentApi', link: '/api/common/KattonComponentApi' },
            { text: 'KattonConfigApi', link: '/api/common/KattonConfigApi' },
            { text: 'KattonContextApi', link: '/api/common/KattonContextApi' },
            { text: 'ScriptEntrypoint', link: '/api/common/ScriptEntrypoint' },
            { text: 'Recipes', link: '/api/common/datapack/Recipes' },
            { text: 'KattonBlockApi', link: '/api/common/dpcaller/KattonBlockApi' },
            { text: 'KattonBlockEntityApi', link: '/api/common/dpcaller/KattonBlockEntityApi' },
            { text: 'KattonEntityApi', link: '/api/common/dpcaller/KattonEntityApi' },
            { text: 'KattonItemApi', link: '/api/common/dpcaller/KattonItemApi' },
            { text: 'KattonLootTableApi', link: '/api/common/dpcaller/KattonLootTableApi' },
            { text: 'KattonMiscApi', link: '/api/common/dpcaller/KattonMiscApi' },
            { text: 'KattonNbtApi', link: '/api/common/dpcaller/KattonNbtApi' },
            { text: 'KattonPlayerApi', link: '/api/common/dpcaller/KattonPlayerApi' },
            { text: 'KattonRecipeApi', link: '/api/common/dpcaller/KattonRecipeApi' },
            { text: 'KattonScoreboardApi', link: '/api/common/dpcaller/KattonScoreboardApi' },
            { text: 'KattonServerApi', link: '/api/common/dpcaller/KattonServerApi' },
            { text: 'KattonSlotProviderApi', link: '/api/common/dpcaller/KattonSlotProviderApi' },
            { text: 'KattonWorldApi', link: '/api/common/dpcaller/KattonWorldApi' },
            { text: 'KattonEventsArg', link: '/api/common/event/KattonEventsArg' },
            { text: 'ManagedEvents', link: '/api/common/event/managed/ManagedEvents' },
            { text: 'InjectApi', link: '/api/common/inject/InjectApi' },
            { text: 'KattonBlockModificationApi', link: '/api/common/mod/KattonBlockModificationApi' },
            { text: 'KattonEntityTypeModificationApi', link: '/api/common/mod/KattonEntityTypeModificationApi' },
            { text: 'KattonItemModificationApi', link: '/api/common/mod/KattonItemModificationApi' },
            { text: 'KattonLootTableModificationApi', link: '/api/common/mod/KattonLootTableModificationApi' },
            { text: 'KattonRecipeModificationApi', link: '/api/common/mod/KattonRecipeModificationApi' },
            { text: 'KattonVillagerTradeModificationApi', link: '/api/common/mod/KattonVillagerTradeModificationApi' },
            { text: 'Block', link: '/api/common/registry/Block' },
            { text: 'BlockEntityType', link: '/api/common/registry/BlockEntityType' },
            { text: 'CreativeModeTab', link: '/api/common/registry/CreativeModeTab' },
            { text: 'DataComponentType', link: '/api/common/registry/DataComponentType' },
            { text: 'Effect', link: '/api/common/registry/Effect' },
            { text: 'Entity', link: '/api/common/registry/Entity' },
            { text: 'EntityRenderer', link: '/api/common/registry/EntityRenderer' },
            { text: 'EntityType', link: '/api/common/registry/EntityType' },
            { text: 'Item', link: '/api/common/registry/Item' },
            { text: 'ParticleType', link: '/api/common/registry/ParticleType' },
            { text: 'SoundEvent', link: '/api/common/registry/SoundEvent' }
          ]
        },
        {
          text: 'Fabric',
          link: '/api/fabric/',
          collapsed: false,
          items: [
            { text: 'ChunkAndBlockEvent', link: '/api/fabric/event/ChunkAndBlockEvent' },
            { text: 'ItemComponentEvent', link: '/api/fabric/event/ItemComponentEvent' },
            { text: 'ItemEvent', link: '/api/fabric/event/ItemEvent' },
            { text: 'LivingBehaviorEvent', link: '/api/fabric/event/LivingBehaviorEvent' },
            { text: 'LivingUseItemEvent', link: '/api/fabric/event/LivingUseItemEvent' },
            { text: 'LootTableEvent', link: '/api/fabric/event/LootTableEvent' },
            { text: 'PlayerEvent', link: '/api/fabric/event/PlayerEvent' },
            { text: 'ServerEntityCombatEvent', link: '/api/fabric/event/ServerEntityCombatEvent' },
            { text: 'ServerEntityEvent', link: '/api/fabric/event/ServerEntityEvent' },
            { text: 'ServerEvent', link: '/api/fabric/event/ServerEvent' },
            { text: 'ServerLivingEntityEvent', link: '/api/fabric/event/ServerLivingEntityEvent' },
            { text: 'ServerMessageEvent', link: '/api/fabric/event/ServerMessageEvent' },
            { text: 'ServerMobEffectEvent', link: '/api/fabric/event/ServerMobEffectEvent' },
            { text: 'ServerPlayerEvent', link: '/api/fabric/event/ServerPlayerEvent' },
            { text: 'FabricManagedEvents', link: '/api/fabric/event/managed/FabricManagedEvents' }
          ]
        },
        {
          text: 'NeoForge',
          link: '/api/neoforge/',
          collapsed: false,
          items: [
            { text: 'ChunkAndBlockEvent', link: '/api/neoforge/event/ChunkAndBlockEvent' },
            { text: 'ItemComponentEvent', link: '/api/neoforge/event/ItemComponentEvent' },
            { text: 'ItemEvent', link: '/api/neoforge/event/ItemEvent' },
            { text: 'LivingBehaviorEvent', link: '/api/neoforge/event/LivingBehaviorEvent' },
            { text: 'LivingUseItemEvent', link: '/api/neoforge/event/LivingUseItemEvent' },
            { text: 'LootTableEvent', link: '/api/neoforge/event/LootTableEvent' },
            { text: 'PlayerEvent', link: '/api/neoforge/event/PlayerEvent' },
            { text: 'ServerEntityCombatEvent', link: '/api/neoforge/event/ServerEntityCombatEvent' },
            { text: 'ServerEntityEvent', link: '/api/neoforge/event/ServerEntityEvent' },
            { text: 'ServerEvent', link: '/api/neoforge/event/ServerEvent' },
            { text: 'ServerLivingEntityEvent', link: '/api/neoforge/event/ServerLivingEntityEvent' },
            { text: 'ServerMessageEvent', link: '/api/neoforge/event/ServerMessageEvent' },
            { text: 'ServerMobEffectEvent', link: '/api/neoforge/event/ServerMobEffectEvent' },
            { text: 'ServerPlayerEvent', link: '/api/neoforge/event/ServerPlayerEvent' },
            { text: 'NeoForgeManagedEvents', link: '/api/neoforge/event/managed/NeoForgeManagedEvents' }
          ]
        },
        {
          text: 'Paper',
          link: '/api/paper/',
          collapsed: false,
          items: [
            { text: 'ChunkAndBlockEvent', link: '/api/paper/event/ChunkAndBlockEvent' },
            { text: 'ItemComponentEvent', link: '/api/paper/event/ItemComponentEvent' },
            { text: 'ItemEvent', link: '/api/paper/event/ItemEvent' },
            { text: 'LivingBehaviorEvent', link: '/api/paper/event/LivingBehaviorEvent' },
            { text: 'LivingUseItemEvent', link: '/api/paper/event/LivingUseItemEvent' },
            { text: 'LootTableEvent', link: '/api/paper/event/LootTableEvent' },
            { text: 'PlayerEvent', link: '/api/paper/event/PlayerEvent' },
            { text: 'ServerEntityCombatEvent', link: '/api/paper/event/ServerEntityCombatEvent' },
            { text: 'ServerEntityEvent', link: '/api/paper/event/ServerEntityEvent' },
            { text: 'ServerEvent', link: '/api/paper/event/ServerEvent' },
            { text: 'ServerLivingEntityEvent', link: '/api/paper/event/ServerLivingEntityEvent' },
            { text: 'ServerMessageEvent', link: '/api/paper/event/ServerMessageEvent' },
            { text: 'ServerMobEffectEvent', link: '/api/paper/event/ServerMobEffectEvent' },
            { text: 'ServerPlayerEvent', link: '/api/paper/event/ServerPlayerEvent' },
            { text: 'PaperManagedEvents', link: '/api/paper/event/managed/PaperManagedEvents' }
          ]
        }
      ]
    }
  ]
}

export default apiSidebar
