import type { Theme } from 'vitepress'
import { VPCarbon } from 'vitepress-carbon'
import { h } from 'vue'
import ApiDocPage from './components/ApiDocPage.vue'
import ApiMembersList from './components/ApiMembersList.vue'
import ApiMemberCard from './components/ApiMemberCard.vue'
import HomeCodeShowcase from './components/HomeCodeShowcase.vue'

const theme: Theme = {
  ...VPCarbon,
  Layout: () => {
    return h(VPCarbon.Layout!, null, {
      'home-hero-after': () => h(HomeCodeShowcase),
    })
  },
  enhanceApp(ctx) {
    VPCarbon.enhanceApp?.(ctx)
    ctx.app.component('ApiDocPage', ApiDocPage)
    ctx.app.component('ApiMembersList', ApiMembersList)
    ctx.app.component('ApiMemberCard', ApiMemberCard)
  },
}

export default theme