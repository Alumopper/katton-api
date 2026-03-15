import type { Theme } from 'vitepress'
import { VPCarbon } from 'vitepress-carbon'
import ApiDocPage from './components/ApiDocPage.vue'
import ApiMembersList from './components/ApiMembersList.vue'
import ApiMemberCard from './components/ApiMemberCard.vue'

const theme: Theme = {
  ...VPCarbon,
  enhanceApp(ctx) {
    VPCarbon.enhanceApp?.(ctx)
    ctx.app.component('ApiDocPage', ApiDocPage)
    ctx.app.component('ApiMembersList', ApiMembersList)
    ctx.app.component('ApiMemberCard', ApiMemberCard)
  },
}

export default theme