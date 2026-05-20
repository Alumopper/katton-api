import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ApiDocPage from './components/ApiDocPage.vue'
import ApiMembersList from './components/ApiMembersList.vue'
import ApiMemberCard from './components/ApiMemberCard.vue'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp?.(ctx)
    ctx.app.component('ApiDocPage', ApiDocPage)
        ctx.app.component('ApiMembersList', ApiMembersList)
    ctx.app.component('ApiMemberCard', ApiMemberCard)
  },
}

export default theme