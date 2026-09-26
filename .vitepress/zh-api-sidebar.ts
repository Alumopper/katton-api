import type { DefaultTheme } from 'vitepress'

const apiSidebar: DefaultTheme.SidebarMulti = {
  '/zh/api/': [
    {
      text: 'API',
      link: '/zh/api/',
      items: [
        {
          text: 'Common',
          link: '/zh/api/common/',
          collapsed: false,
          items: [
            { text: 'ClientDataApi', link: '/zh/api/common/ClientDataApi' },
            { text: 'ClientItemRenderAnimation', link: '/zh/api/common/ClientItemRenderAnimation' },
            { text: 'ClientItemRenderMarkerApi', link: '/zh/api/common/ClientItemRenderMarkerApi' },
            { text: 'ClientPostEffectApi', link: '/zh/api/common/ClientPostEffectApi' },
            { text: 'ClientPostEffectPresetsApi', link: '/zh/api/common/ClientPostEffectPresetsApi' },
            { text: 'ClientPostEffectServerApi', link: '/zh/api/common/ClientPostEffectServerApi' },
            { text: 'KattonAPI', link: '/zh/api/common/KattonAPI' },
            { text: 'KattonClientApi', link: '/zh/api/common/KattonClientApi' },
            { text: 'KattonClientRenderApi', link: '/zh/api/common/KattonClientRenderApi' },
            { text: 'KattonComponentApi', link: '/zh/api/common/KattonComponentApi' },
            { text: 'KattonConfigApi', link: '/zh/api/common/KattonConfigApi' },
            { text: 'KattonContextApi', link: '/zh/api/common/KattonContextApi' },
            { text: 'KattonDependencyApi', link: '/zh/api/common/KattonDependencyApi' },
            { text: 'ScriptEntrypoint', link: '/zh/api/common/ScriptEntrypoint' },
            { text: 'AudioApi', link: '/zh/api/common/audio/AudioApi' },
            { text: 'AudioServerApi', link: '/zh/api/common/audio/AudioServerApi' },
            { text: 'BasicSoundApi', link: '/zh/api/common/audio/BasicSoundApi' },
            { text: 'Recipes', link: '/zh/api/common/datapack/Recipes' },
            { text: 'KattonBlockApi', link: '/zh/api/common/dpcaller/KattonBlockApi' },
            { text: 'KattonBlockEntityApi', link: '/zh/api/common/dpcaller/KattonBlockEntityApi' },
            { text: 'KattonEntityApi', link: '/zh/api/common/dpcaller/KattonEntityApi' },
            { text: 'KattonItemApi', link: '/zh/api/common/dpcaller/KattonItemApi' },
            { text: 'KattonLootTableApi', link: '/zh/api/common/dpcaller/KattonLootTableApi' },
            { text: 'KattonMiscApi', link: '/zh/api/common/dpcaller/KattonMiscApi' },
            { text: 'KattonNbtApi', link: '/zh/api/common/dpcaller/KattonNbtApi' },
            { text: 'KattonPlayerApi', link: '/zh/api/common/dpcaller/KattonPlayerApi' },
            { text: 'KattonRecipeApi', link: '/zh/api/common/dpcaller/KattonRecipeApi' },
            { text: 'KattonScoreboardApi', link: '/zh/api/common/dpcaller/KattonScoreboardApi' },
            { text: 'KattonServerApi', link: '/zh/api/common/dpcaller/KattonServerApi' },
            { text: 'KattonSlotProviderApi', link: '/zh/api/common/dpcaller/KattonSlotProviderApi' },
            { text: 'KattonWorldApi', link: '/zh/api/common/dpcaller/KattonWorldApi' },
            { text: 'EventCapabilities', link: '/zh/api/common/event/EventCapabilities' },
            { text: 'KattonEventsArg', link: '/zh/api/common/event/KattonEventsArg' },
            { text: 'ManagedEvents', link: '/zh/api/common/event/managed/ManagedEvents' },
            { text: 'InjectApi', link: '/zh/api/common/inject/InjectApi' },
            { text: 'InjectionCapabilities', link: '/zh/api/common/inject/InjectionCapabilities' },
            { text: 'KattonBlockModificationApi', link: '/zh/api/common/mod/KattonBlockModificationApi' },
            { text: 'KattonEntityTypeModificationApi', link: '/zh/api/common/mod/KattonEntityTypeModificationApi' },
            { text: 'KattonItemModificationApi', link: '/zh/api/common/mod/KattonItemModificationApi' },
            { text: 'KattonLootTableModificationApi', link: '/zh/api/common/mod/KattonLootTableModificationApi' },
            { text: 'KattonRecipeModificationApi', link: '/zh/api/common/mod/KattonRecipeModificationApi' },
            { text: 'KattonVillagerTradeModificationApi', link: '/zh/api/common/mod/KattonVillagerTradeModificationApi' },
            { text: 'Block', link: '/zh/api/common/registry/Block' },
            { text: 'BlockEntityType', link: '/zh/api/common/registry/BlockEntityType' },
            { text: 'CreativeModeTab', link: '/zh/api/common/registry/CreativeModeTab' },
            { text: 'DataComponentType', link: '/zh/api/common/registry/DataComponentType' },
            { text: 'Effect', link: '/zh/api/common/registry/Effect' },
            { text: 'Entity', link: '/zh/api/common/registry/Entity' },
            { text: 'EntityRenderer', link: '/zh/api/common/registry/EntityRenderer' },
            { text: 'EntityType', link: '/zh/api/common/registry/EntityType' },
            { text: 'Item', link: '/zh/api/common/registry/Item' },
            { text: 'ParticleType', link: '/zh/api/common/registry/ParticleType' },
            { text: 'SoundEvent', link: '/zh/api/common/registry/SoundEvent' },
            { text: 'SceneClientApi', link: '/zh/api/common/scene/SceneClientApi' },
            { text: 'SceneServerApi', link: '/zh/api/common/scene/SceneServerApi' },
            { text: 'SceneTimeline', link: '/zh/api/common/scene/SceneTimeline' },
            { text: 'SceneTypes', link: '/zh/api/common/scene/SceneTypes' }
          ]
        },
        {
          text: 'Fabric',
          link: '/zh/api/fabric/',
          collapsed: false,
          items: [
            { text: 'ClientScriptPlayNetworking', link: '/zh/api/fabric/ClientScriptPlayNetworking' },
            { text: 'ScriptPlayNetworking', link: '/zh/api/fabric/ScriptPlayNetworking' },
            { text: 'ChunkAndBlockEvent', link: '/zh/api/fabric/event/ChunkAndBlockEvent' },
            { text: 'ItemComponentEvent', link: '/zh/api/fabric/event/ItemComponentEvent' },
            { text: 'ItemEvent', link: '/zh/api/fabric/event/ItemEvent' },
            { text: 'LivingBehaviorEvent', link: '/zh/api/fabric/event/LivingBehaviorEvent' },
            { text: 'LivingUseItemEvent', link: '/zh/api/fabric/event/LivingUseItemEvent' },
            { text: 'LootTableEvent', link: '/zh/api/fabric/event/LootTableEvent' },
            { text: 'PlayerEvent', link: '/zh/api/fabric/event/PlayerEvent' },
            { text: 'ServerEntityCombatEvent', link: '/zh/api/fabric/event/ServerEntityCombatEvent' },
            { text: 'ServerEntityEvent', link: '/zh/api/fabric/event/ServerEntityEvent' },
            { text: 'ServerEvent', link: '/zh/api/fabric/event/ServerEvent' },
            { text: 'ServerLivingEntityEvent', link: '/zh/api/fabric/event/ServerLivingEntityEvent' },
            { text: 'ServerMessageEvent', link: '/zh/api/fabric/event/ServerMessageEvent' },
            { text: 'ServerMobEffectEvent', link: '/zh/api/fabric/event/ServerMobEffectEvent' },
            { text: 'ServerPlayerEvent', link: '/zh/api/fabric/event/ServerPlayerEvent' },
            { text: 'FabricManagedEvents', link: '/zh/api/fabric/event/managed/FabricManagedEvents' }
          ]
        },
        {
          text: 'NeoForge',
          link: '/zh/api/neoforge/',
          collapsed: false,
          items: [
            { text: 'ClientScriptPlayNetworking', link: '/zh/api/neoforge/ClientScriptPlayNetworking' },
            { text: 'ScriptPlayNetworking', link: '/zh/api/neoforge/ScriptPlayNetworking' },
            { text: 'ChunkAndBlockEvent', link: '/zh/api/neoforge/event/ChunkAndBlockEvent' },
            { text: 'ItemComponentEvent', link: '/zh/api/neoforge/event/ItemComponentEvent' },
            { text: 'ItemEvent', link: '/zh/api/neoforge/event/ItemEvent' },
            { text: 'LivingBehaviorEvent', link: '/zh/api/neoforge/event/LivingBehaviorEvent' },
            { text: 'LivingUseItemEvent', link: '/zh/api/neoforge/event/LivingUseItemEvent' },
            { text: 'LootTableEvent', link: '/zh/api/neoforge/event/LootTableEvent' },
            { text: 'PlayerEvent', link: '/zh/api/neoforge/event/PlayerEvent' },
            { text: 'ServerEntityCombatEvent', link: '/zh/api/neoforge/event/ServerEntityCombatEvent' },
            { text: 'ServerEntityEvent', link: '/zh/api/neoforge/event/ServerEntityEvent' },
            { text: 'ServerEvent', link: '/zh/api/neoforge/event/ServerEvent' },
            { text: 'ServerLivingEntityEvent', link: '/zh/api/neoforge/event/ServerLivingEntityEvent' },
            { text: 'ServerMessageEvent', link: '/zh/api/neoforge/event/ServerMessageEvent' },
            { text: 'ServerMobEffectEvent', link: '/zh/api/neoforge/event/ServerMobEffectEvent' },
            { text: 'ServerPlayerEvent', link: '/zh/api/neoforge/event/ServerPlayerEvent' },
            { text: 'NeoForgeManagedEvents', link: '/zh/api/neoforge/event/managed/NeoForgeManagedEvents' }
          ]
        },
        {
          text: 'Paper',
          link: '/zh/api/paper/',
          collapsed: false,
          items: [
            { text: 'ChunkAndBlockEvent', link: '/zh/api/paper/event/ChunkAndBlockEvent' },
            { text: 'ItemComponentEvent', link: '/zh/api/paper/event/ItemComponentEvent' },
            { text: 'ItemEvent', link: '/zh/api/paper/event/ItemEvent' },
            { text: 'LivingBehaviorEvent', link: '/zh/api/paper/event/LivingBehaviorEvent' },
            { text: 'LivingUseItemEvent', link: '/zh/api/paper/event/LivingUseItemEvent' },
            { text: 'LootTableEvent', link: '/zh/api/paper/event/LootTableEvent' },
            { text: 'PlayerEvent', link: '/zh/api/paper/event/PlayerEvent' },
            { text: 'ServerEntityCombatEvent', link: '/zh/api/paper/event/ServerEntityCombatEvent' },
            { text: 'ServerEntityEvent', link: '/zh/api/paper/event/ServerEntityEvent' },
            { text: 'ServerEvent', link: '/zh/api/paper/event/ServerEvent' },
            { text: 'ServerLivingEntityEvent', link: '/zh/api/paper/event/ServerLivingEntityEvent' },
            { text: 'ServerMessageEvent', link: '/zh/api/paper/event/ServerMessageEvent' },
            { text: 'ServerMobEffectEvent', link: '/zh/api/paper/event/ServerMobEffectEvent' },
            { text: 'ServerPlayerEvent', link: '/zh/api/paper/event/ServerPlayerEvent' },
            { text: 'PaperManagedEvents', link: '/zh/api/paper/event/managed/PaperManagedEvents' }
          ]
        }
      ]
    }
  ]
}

export default apiSidebar
