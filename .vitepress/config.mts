import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "vitepress-carbon";
import baseConfig from "vitepress-carbon/config";
import apiSidebar from "./api-sidebar";

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
          '/quickstart/': [
            {
              text: "Quick Start",
              items: [
                { text: "Getting Started", link: "/quickstart/get-started" },
                { text: "Scripts", link: "/quickstart/scripts" },
                { text: "Event", link: "/quickstart/event" },
                {
                  text: "Registry",
                  link: "/quickstart/registry/",
                  items: [
                    { text: "Entity Tutorial", link: "/quickstart/registry/entity" },
                  ],
                },
                { text: "Render", link: "/quickstart/render" },
                { text: "Code Injection", link: "/quickstart/inject" },
                { text: "Commands", link: "/quickstart/commands" },
                { text: "Modify Content", link: "/quickstart/modify/" },
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
          { text: "模板生成器", link: "/zh/template/" },
          { text: "API", link: "/api/index.html" },
        ],
        sidebar: {
          '/zh/quickstart/': [
            {
              text: "快速开始",
              items: [
                { text: "入门指南", link: "/zh/quickstart/get-started" },
                { text: "脚本", link: "/zh/quickstart/scripts" },
                { text: "事件", link: "/zh/quickstart/event" },
                {
                  text: "注册",
                  link: "/zh/quickstart/registry/",
                  items: [
                    { text: "实体教程", link: "/zh/quickstart/registry/entity" },
                  ],
                },
                { text: "渲染", link: "/zh/quickstart/render" },
                { text: "代码注入", link: "/zh/quickstart/inject" },
                { text: "命令", link: "/zh/quickstart/commands" },
                { text: "修改内容", link: "/zh/quickstart/modify/" },
                { text: "脚本包界面", link: "/zh/quickstart/pack-ui" },
                { text: "数据包开发者指南", link: "/zh/quickstart/for-cber" },
              ],
            },
          ],
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
