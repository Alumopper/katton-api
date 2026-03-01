import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Katton",
  description: "Modding your world with hot-reloadable Kotlin scripts",
  srcDir: 'src',
  cleanUrls: false,
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quick Start', link: '/quickstart/getting-started' },
      { text: 'API', link: '/kdoc/index.html' }
    ],

    search: {
      provider: 'local'
    },
    
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
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alumopper/Katton' }
    ]
  }
})
