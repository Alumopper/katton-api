import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "vitepress-carbon";
import baseConfig from "vitepress-carbon/config";
import apiSidebar from "./api-sidebar";
import zhApiSidebar from "./zh-api-sidebar";

const datapackGuideItems = [
  { text: "Overview", link: "/guide/datapack/" },
  { text: "Structure & Reload", link: "/guide/datapack/project-structure" },
  { text: "mcfunction to Kotlin", link: "/guide/datapack/mcfunction-to-kotlin" },
  { text: "Commands", link: "/guide/datapack/commands" },
  { text: "Selectors", link: "/guide/datapack/selectors" },
  { text: "State", link: "/guide/datapack/state" },
  { text: "Load & Tick", link: "/guide/datapack/load-tick-schedule" },
  { text: "Mutations", link: "/guide/datapack/datapack-mutations" },
  { text: "Keep Datapacks", link: "/guide/datapack/keep-existing-datapacks" },
  { text: "Beyond Datapacks", link: "/guide/datapack/beyond-datapacks" },
  { text: "Platforms", link: "/guide/datapack/platform-notes" },
];

const zhDatapackGuideItems = [
  { text: "概览", link: "/zh/guide/datapack/" },
  { text: "结构与重载", link: "/zh/guide/datapack/project-structure" },
  { text: "mcfunction 到 Kotlin", link: "/zh/guide/datapack/mcfunction-to-kotlin" },
  { text: "命令", link: "/zh/guide/datapack/commands" },
  { text: "目标选择器", link: "/zh/guide/datapack/selectors" },
  { text: "状态", link: "/zh/guide/datapack/state" },
  { text: "Load 与 Tick", link: "/zh/guide/datapack/load-tick-schedule" },
  { text: "数据修改", link: "/zh/guide/datapack/datapack-mutations" },
  { text: "保留数据包", link: "/zh/guide/datapack/keep-existing-datapacks" },
  { text: "比数据包更强大", link: "/zh/guide/datapack/beyond-datapacks" },
  { text: "平台差异", link: "/zh/guide/datapack/platform-notes" },
];

const docsSidebar = [
  {
    text: "Quick Start",
    items: [
      { text: "Introduction", link: "/quickstart/" },
      { text: "Getting Started", link: "/quickstart/get-started" },
      { text: "Hot Reload and Debugging", link: "/quickstart/hot-reload" },
      { text: "Commands", link: "/quickstart/commands" },
    ],
  },
  {
    text: "Guide",
    items: [
      { text: "Overview", link: "/guide/" },
      { text: "Script Packs", link: "/guide/scripts" },
      { text: "Events", link: "/guide/events" },
      {
        text: "Registry",
        link: "/guide/registry/",
        items: [
          { text: "Entity Tutorial", link: "/guide/registry/entity" },
        ],
      },
      { text: "Modify Content", link: "/guide/modify/" },
      {
        text: "Datapack Migration",
        link: "/guide/datapack/",
        collapsed: false,
        items: datapackGuideItems,
      },
      {
        text: "Rendering",
        link: "/guide/render/",
        items: [
          { text: "HUD and World", link: "/guide/render/hud-world" },
          { text: "Item Markers", link: "/guide/render/item-markers" },
          { text: "Post Effects", link: "/guide/render/post-effects" },
        ],
      },
      { text: "Code Injection", link: "/guide/injection" },
      { text: "Script Pack UI", link: "/guide/pack-ui" },
    ],
  },
  {
    text: "Platforms",
    items: [
      { text: "Overview", link: "/platform/" },
      { text: "Fabric and NeoForge", link: "/platform/fabric-neoforge" },
      { text: "Paper", link: "/platform/paper" },
      { text: "Folia Scheduler", link: "/platform/folia" },
    ],
  },
  {
    text: "Architecture",
    items: [
      { text: "Overview", link: "/architecture/" },
      { text: "Script Loading Lifecycle", link: "/architecture/script-loading" },
      { text: "Script Pack Sync and Trust", link: "/architecture/pack-sync" },
      { text: "Manifest and Signing", link: "/architecture/manifest" },
      { text: "Registry Lifecycle", link: "/architecture/registry-lifecycle" },
    ],
  },
];

const zhDocsSidebar = [
  {
    text: "快速开始",
    items: [
      { text: "简介", link: "/zh/quickstart/" },
      { text: "入门指南", link: "/zh/quickstart/get-started" },
      { text: "热重载与调试", link: "/zh/quickstart/hot-reload" },
      { text: "命令", link: "/zh/quickstart/commands" },
    ],
  },
  {
    text: "使用指北",
    items: [
      { text: "概览", link: "/zh/guide/" },
      { text: "脚本包", link: "/zh/guide/scripts" },
      { text: "事件", link: "/zh/guide/events" },
      {
        text: "注册",
        link: "/zh/guide/registry/",
        items: [
          { text: "实体教程", link: "/zh/guide/registry/entity" },
        ],
      },
      { text: "修改内容", link: "/zh/guide/modify/" },
      {
        text: "数据包迁移",
        link: "/zh/guide/datapack/",
        collapsed: false,
        items: zhDatapackGuideItems,
      },
      {
        text: "渲染",
        link: "/zh/guide/render/",
        items: [
          { text: "HUD 与世界渲染", link: "/zh/guide/render/hud-world" },
          { text: "物品渲染标记", link: "/zh/guide/render/item-markers" },
          { text: "后处理效果", link: "/zh/guide/render/post-effects" },
        ],
      },
      { text: "代码注入", link: "/zh/guide/injection" },
      { text: "脚本包界面", link: "/zh/guide/pack-ui" },
    ],
  },
  {
    text: "平台",
    items: [
      { text: "概览", link: "/zh/platform/" },
      { text: "Fabric 与 NeoForge", link: "/zh/platform/fabric-neoforge" },
      { text: "Paper", link: "/zh/platform/paper" },
      { text: "Folia 调度器", link: "/zh/platform/folia" },
    ],
  },
  {
    text: "架构",
    items: [
      { text: "概览", link: "/zh/architecture/" },
      { text: "脚本加载生命周期", link: "/zh/architecture/script-loading" },
      { text: "脚本包同步与信任", link: "/zh/architecture/pack-sync" },
      { text: "Manifest 与签名", link: "/zh/architecture/manifest" },
      { text: "注册表生命周期", link: "/zh/architecture/registry-lifecycle" },
    ],
  },
];

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
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
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
          { text: "Template", link: "/template/" },
          { text: "API", link: "/api/index.html" },
        ],
        sidebar: {
          '/quickstart/': docsSidebar,
          '/guide/': docsSidebar,
          '/platform/': docsSidebar,
          '/architecture/': docsSidebar,
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
          { text: "模板生成器", link: "/zh/template/" },
          { text: "API", link: "/zh/api/index.html" },
        ],
        sidebar: {
          '/zh/quickstart/': zhDocsSidebar,
          '/zh/guide/': zhDocsSidebar,
          '/zh/platform/': zhDocsSidebar,
          '/zh/architecture/': zhDocsSidebar,
          ...zhApiSidebar,
        },
      },
    },
  },

  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Alumopper/Katton" },
    ]
  },
  appearance: 'force-dark',
});
