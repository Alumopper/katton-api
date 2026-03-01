import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Katton",
  description: "Modding your world with hot-reloadable Kotlin scripts",
  srcDir: 'src',
  cleanUrls: false,
  head: [
    [
      'script',
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
      }, true);`
    ]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/quickstart/getting-started' },
          { text: 'API', link: '/kdoc/index.html' }
        ],
        sidebar: [
          {
            text: 'Quick Start',
            items: [
              { text: 'Getting Started', link: '/quickstart/get-started' },
              { text: 'Event', link: '/quickstart/event' },
              { text: 'Registry', link: '/quickstart/registry' },
              { text: 'Code Injection', link: '/quickstart/inject' },
              { text: 'For Datapack Developers', link: '/quickstart/for-cber' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '快速开始', link: '/zh/quickstart/getting-started' },
          { text: 'API', link: '/kdoc/index.html' }
        ],
        sidebar: [
          {
            text: '快速开始',
            items: [
              { text: '入门指南', link: '/zh/quickstart/get-started' },
              { text: '事件', link: '/zh/quickstart/event' },
              { text: '注册', link: '/zh/quickstart/registry' },
              { text: '代码注入', link: '/zh/quickstart/inject' },
              { text: '数据包开发者指南', link: '/zh/quickstart/for-cber' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alumopper/Katton' }
    ]
  }
})
