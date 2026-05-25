import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "vitepress-carbon";
import baseConfig from "vitepress-carbon/config";
import apiSidebar from "./api-sidebar";

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
      { text: "For Datapack Developers", link: "/guide/datapack" },
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
      { text: "数据包开发者指南", link: "/zh/guide/datapack" },
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
          { text: "API", link: "/api/index.html" },
        ],
        sidebar: {
          '/zh/quickstart/': zhDocsSidebar,
          '/zh/guide/': zhDocsSidebar,
          '/zh/platform/': zhDocsSidebar,
          '/zh/architecture/': zhDocsSidebar,
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
