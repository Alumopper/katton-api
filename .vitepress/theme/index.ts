import type { Theme } from 'vitepress'
import { VPCarbon } from 'vitepress-carbon'
import { h } from 'vue'
import ApiDocPage from './components/ApiDocPage.vue'
import ApiMembersList from './components/ApiMembersList.vue'
import ApiMemberCard from './components/ApiMemberCard.vue'
import HomeCodeShowcase from './components/HomeCodeShowcase.vue'
import ImageCaptionZoom from './components/ImageCaptionZoom.vue'
import KattonNotFound from './components/KattonNotFound.vue'
import TemplateGenerator from './components/TemplateGenerator.vue'
import './override.css'
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const KATTON_VERSION_LABEL = 'Alpha 0.5.0'

const theme: Theme = {
  ...VPCarbon,
  Layout: () => {
    return h(VPCarbon.Layout!, null, {
      'nav-bar-title-after': () =>
        h('sup', { class: 'katton-version' }, KATTON_VERSION_LABEL),
      'home-hero-after': () => h(HomeCodeShowcase),
      'not-found': () => h(KattonNotFound),
    })
  },
  enhanceApp(ctx) {
    ctx.app.use(FloatingVue)
    VPCarbon.enhanceApp?.(ctx)
    ctx.app.component('ApiDocPage', ApiDocPage)
    ctx.app.component('ApiMembersList', ApiMembersList)
    ctx.app.component('ApiMemberCard', ApiMemberCard)
    ctx.app.component('ImageCaptionZoom', ImageCaptionZoom)
    ctx.app.component('TemplateGenerator', TemplateGenerator)
  },
}

export default theme