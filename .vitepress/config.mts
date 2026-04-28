import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "vitepress-carbon";
import baseConfig from "vitepress-carbon/config";

const apiSidebar = {
  "/api/": [
    {
      text: "API",
      link: "/api/",
      items: [
        {
          text: "Common",
          link: "/api/common/",
          collapsed: false,
          items: [
            { text: "KattonAPI", link: "/api/common/KattonAPI" },
            { text: "KattonClientApi", link: "/api/common/KattonClientApi" },
            {
              text: "KattonClientRenderApi",
              link: "/api/common/KattonClientRenderApi",
            },
            {
              text: "KattonComponentApi",
              link: "/api/common/KattonComponentApi",
            },
            {
              text: "KattonBlockApi",
              link: "/api/common/dpcaller/KattonBlockApi",
            },
            {
              text: "KattonBlockEntityApi",
              link: "/api/common/dpcaller/KattonBlockEntityApi",
            },
            {
              text: "KattonEntityApi",
              link: "/api/common/dpcaller/KattonEntityApi",
            },
            {
              text: "KattonItemApi",
              link: "/api/common/dpcaller/KattonItemApi",
            },
            {
              text: "KattonLootTableApi",
              link: "/api/common/dpcaller/KattonLootTableApi",
            },
            {
              text: "KattonMiscApi",
              link: "/api/common/dpcaller/KattonMiscApi",
            },
            { text: "KattonNbtApi", link: "/api/common/dpcaller/KattonNbtApi" },
            {
              text: "KattonPlayerApi",
              link: "/api/common/dpcaller/KattonPlayerApi",
            },
            {
              text: "KattonRecipeApi",
              link: "/api/common/dpcaller/KattonRecipeApi",
            },
            {
              text: "KattonScoreboardApi",
              link: "/api/common/dpcaller/KattonScoreboardApi",
            },
            {
              text: "KattonServerApi",
              link: "/api/common/dpcaller/KattonServerApi",
            },
            {
              text: "KattonSlotProviderApi",
              link: "/api/common/dpcaller/KattonSlotProviderApi",
            },
            {
              text: "KattonWorldApi",
              link: "/api/common/dpcaller/KattonWorldApi",
            },
            {
              text: "KattonEventsArg",
              link: "/api/common/event/KattonEventsArg",
            },
            { text: "InjectApi", link: "/api/common/inject/InjectApi" },
            {
              text: "KattonBlockModificationApi",
              link: "/api/common/mod/KattonBlockModificationApi",
            },
            {
              text: "KattonItemModificationApi",
              link: "/api/common/mod/KattonItemModificationApi",
            },
            { text: "Block", link: "/api/common/registry/Block" },
            { text: "Effect", link: "/api/common/registry/Effect" },
            { text: "Item", link: "/api/common/registry/Item" },
          ],
        },
        {
          text: "Fabric",
          link: "/api/fabric/",
          collapsed: false,
          items: [
            {
              text: "ChunkAndBlockEvent",
              link: "/api/fabric/event/ChunkAndBlockEvent",
            },
            {
              text: "ItemComponentEvent",
              link: "/api/fabric/event/ItemComponentEvent",
            },
            { text: "ItemEvent", link: "/api/fabric/event/ItemEvent" },
            {
              text: "LivingBehaviorEvent",
              link: "/api/fabric/event/LivingBehaviorEvent",
            },
            {
              text: "LivingUseItemEvent",
              link: "/api/fabric/event/LivingUseItemEvent",
            },
            {
              text: "LootTableEvent",
              link: "/api/fabric/event/LootTableEvent",
            },
            { text: "PlayerEvent", link: "/api/fabric/event/PlayerEvent" },
            {
              text: "ServerEntityCombatEvent",
              link: "/api/fabric/event/ServerEntityCombatEvent",
            },
            {
              text: "ServerEntityEvent",
              link: "/api/fabric/event/ServerEntityEvent",
            },
            { text: "ServerEvent", link: "/api/fabric/event/ServerEvent" },
            {
              text: "ServerLivingEntityEvent",
              link: "/api/fabric/event/ServerLivingEntityEvent",
            },
            {
              text: "ServerMessageEvent",
              link: "/api/fabric/event/ServerMessageEvent",
            },
            {
              text: "ServerMobEffectEvent",
              link: "/api/fabric/event/ServerMobEffectEvent",
            },
            {
              text: "ServerPlayerEvent",
              link: "/api/fabric/event/ServerPlayerEvent",
            },
          ],
        },
        {
          text: "NeoForge",
          link: "/api/neoforge/",
          collapsed: false,
          items: [
            {
              text: "ChunkAndBlockEvent",
              link: "/api/neoforge/event/ChunkAndBlockEvent",
            },
            {
              text: "ItemComponentEvent",
              link: "/api/neoforge/event/ItemComponentEvent",
            },
            { text: "ItemEvent", link: "/api/neoforge/event/ItemEvent" },
            {
              text: "LivingBehaviorEvent",
              link: "/api/neoforge/event/LivingBehaviorEvent",
            },
            {
              text: "LivingUseItemEvent",
              link: "/api/neoforge/event/LivingUseItemEvent",
            },
            {
              text: "LootTableEvent",
              link: "/api/neoforge/event/LootTableEvent",
            },
            { text: "PlayerEvent", link: "/api/neoforge/event/PlayerEvent" },
            {
              text: "ServerEntityCombatEvent",
              link: "/api/neoforge/event/ServerEntityCombatEvent",
            },
            {
              text: "ServerEntityEvent",
              link: "/api/neoforge/event/ServerEntityEvent",
            },
            { text: "ServerEvent", link: "/api/neoforge/event/ServerEvent" },
            {
              text: "ServerLivingEntityEvent",
              link: "/api/neoforge/event/ServerLivingEntityEvent",
            },
            {
              text: "ServerMessageEvent",
              link: "/api/neoforge/event/ServerMessageEvent",
            },
            {
              text: "ServerMobEffectEvent",
              link: "/api/neoforge/event/ServerMobEffectEvent",
            },
            {
              text: "ServerPlayerEvent",
              link: "/api/neoforge/event/ServerPlayerEvent",
            },
          ],
        },
      ],
    },
  ],
};

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Katton",
  description: "Modding your world with hot-reloadable Kotlin scripts",
  srcDir: "src",
  cleanUrls: false,
  markdown: {
    lineNumbers: true,
  },
  head: [
    [
      "script",
      {},
      `document.addEventListener('click', function (e) {
        const a = e.target && (e.target.closest ? e.target.closest('a[href]') : null);
        if (!a) return;
        const href = a.getAttribute('href') || '';
        if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#') || href.startsWith('mailto:')) return;
        if (href.includes('/kdoc/') && href.endsWith('/index.html')) {
          e.preventDefault();
          window.location.assign(a.href);
        }
      }, true);`,
    ],
  ],

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Home", link: "/" },
          { text: "Quick Start", link: "/quickstart" },
          { text: "API", link: "/api/index.html" },
        ],
        sidebar: {
          '/quickstart/': [
            {
              text: "Quick Start",
              items: [
                { text: "Getting Started", link: "/quickstart/get-started" },
                { text: "Scripts", link: "/quickstart/scripts" },
                { text: "Event", link: "/quickstart/event" },
                { text: "Registry", link: "/quickstart/registry" },
                { text: "Render", link: "/quickstart/render" },
                { text: "Code Injection", link: "/quickstart/inject" },
                { text: "Commands", link: "/quickstart/commands" },
                { text: "Script Pack UI", link: "/quickstart/pack-ui" },
                {
                  text: "For Datapack Developers",
                  link: "/quickstart/for-cber",
                },
              ],
            },
          ],
          ...apiSidebar,
        },
      },
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      themeConfig: {
        nav: [
          { text: "首页", link: "/zh/" },
          { text: "快速开始", link: "/zh/quickstart" },
          { text: "API", link: "/api/index.html" },
        ],
        sidebar: [
          {
            text: "快速开始",
            items: [
              { text: "入门指南", link: "/zh/quickstart/get-started" },
              { text: "脚本", link: "/zh/quickstart/scripts" },
              { text: "事件", link: "/zh/quickstart/event" },
              { text: "注册", link: "/zh/quickstart/registry" },
              { text: "渲染", link: "/zh/quickstart/render" },
              { text: "代码注入", link: "/zh/quickstart/inject" },
              { text: "命令", link: "/zh/quickstart/commands" },
              { text: "脚本包界面", link: "/zh/quickstart/pack-ui" },
              { text: "数据包开发者指南", link: "/zh/quickstart/for-cber" },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Alumopper/Katton" },
    ]
  },
  appearance: 'force-dark',
});
