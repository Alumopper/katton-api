<script setup lang="ts">
import Prism from 'prismjs'
import 'prismjs/components/prism-kotlin'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useData } from 'vitepress'

import quickstartSnippet from '../../../src/example/quickstart/get-started/01.md?raw'
import scriptSnippet from '../../../src/example/quickstart/scripts/02.md?raw'
import registrySnippet from '../../../src/example/quickstart/registry/02.md?raw'
import renderSnippet from '../../../src/example/quickstart/render/01.md?raw'
import datapackSnippet from '../../../src/example/quickstart/for-cber/01.md?raw'

type RawSnippet = {
  title: string
  category: string
  source: string
}

type ParsedSnippet = {
  title: string
  category: string
  lang: string
  prismLang: string
  highlighted: string
}

const rawSnippets: RawSnippet[] = [
  {
    title: 'Attach JVM Debugger',
    category: 'Quick Start',
    source: quickstartSnippet,
  },
  {
    title: 'Player Join Event Hook',
    category: 'Script',
    source: scriptSnippet,
  },
  {
    title: 'Register Native Block',
    category: 'Registry',
    source: registrySnippet,
  },
  {
    title: 'HUD Render Bootstrap',
    category: 'Render',
    source: renderSnippet,
  },
  {
    title: 'Scoreboard Setup',
    category: 'Datapack',
    source: datapackSnippet,
  },
]

const prismLangAlias: Record<string, string> = {
  kotlin: 'kotlin',
  kt: 'kotlin',
  text: 'none',
  txt: 'none',
  shell: 'bash',
  sh: 'bash',
  js: 'javascript',
  ts: 'typescript',
}

function parseMarkdownFence(markdown: string): { lang: string; code: string } {
  const normalized = markdown.replace(/\r\n/g, '\n')
  const lines = normalized.split('\n')
  const openIndex = lines.findIndex((line) => line.trimStart().startsWith('```'))

  if (openIndex < 0) {
    return {
      lang: 'txt',
      code: markdown.trim(),
    }
  }

  const openLine = lines[openIndex]
  const openIndent = openLine.match(/^\s*/)?.[0] || ''
  const openFence = openLine.trimStart().slice(3).trim()
  const lang = (openFence.split(/\s+/)[0] || 'txt').trim()

  let closeIndex = -1
  for (let i = openIndex + 1; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith(openIndent) && line.slice(openIndent.length).startsWith('```')) {
      closeIndex = i
      break
    }
    if (line.trimStart().startsWith('```')) {
      closeIndex = i
      break
    }
  }

  const rawCodeLines = lines.slice(openIndex + 1, closeIndex < 0 ? lines.length : closeIndex)
  const codeLines = rawCodeLines.map((line) =>
    openIndent && line.startsWith(openIndent) ? line.slice(openIndent.length) : line
  )
  const code = codeLines.join('\n').replace(/\s+$/g, '')

  return { lang, code }
}

function formatPreview(code: string, maxLines: number): string {
  const lines = code.split(/\r?\n/)
  if (lines.length <= maxLines) {
    return code
  }
  return `${lines.slice(0, maxLines).join('\n')}\n...`
}

function escapeHtml(source: string): string {
  return source
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function toPrismLang(lang: string): string {
  const normalized = lang.toLowerCase()
  return prismLangAlias[normalized] || normalized
}

function highlightCode(code: string, lang: string): string {
  if (lang === 'none') {
    return escapeHtml(code)
  }
  const grammar = Prism.languages[lang]
  if (!grammar) {
    return escapeHtml(code)
  }
  return Prism.highlight(code, grammar, lang)
}

const snippets: ParsedSnippet[] = rawSnippets.map((snippet) => {
  const parsed = parseMarkdownFence(snippet.source)
  const prismLang = toPrismLang(parsed.lang)
  const preview = formatPreview(parsed.code, 12)
  return {
    title: snippet.title,
    category: snippet.category,
    lang: parsed.lang,
    prismLang,
    highlighted: highlightCode(preview, prismLang),
  }
})

const activeIndex = ref(Math.floor(Date.now() / 1000) % snippets.length)
const activeSnippet = computed(() => snippets[activeIndex.value])

function randomNextIndex(current: number, length: number): number {
  if (length <= 1) {
    return 0
  }
  let next = current
  while (next === current) {
    next = Math.floor(Math.random() * length)
  }
  return next
}

const switchIntervalMs = 10000
let timer: ReturnType<typeof setInterval> | null = null
const showcaseRef = ref<HTMLElement | null>(null)
let glowRafId: number | null = null
let queuedX = 0
let queuedY = 0
let queuedActive = false

function setGlowPosition(x: number, y: number, active: boolean) {
  const el = showcaseRef.value
  if (!el) {
    return
  }
  el.style.setProperty('--glow-x', `${x}px`)
  el.style.setProperty('--glow-y', `${y}px`)
  el.style.setProperty('--glow-opacity', active ? '0.88' : '0.45')
}

function queueGlowPosition(x: number, y: number, active: boolean) {
  queuedX = x
  queuedY = y
  queuedActive = active
  if (glowRafId !== null) {
    return
  }
  glowRafId = requestAnimationFrame(() => {
    glowRafId = null
    setGlowPosition(queuedX, queuedY, queuedActive)
  })
}

function setupGlowTracking() {
  const el = showcaseRef.value
  if (!el) {
    return () => undefined
  }

  const rect = el.getBoundingClientRect()
  queueGlowPosition(rect.width / 2, rect.height / 2, false)

  const onMove = (event: PointerEvent) => {
    const nextRect = el.getBoundingClientRect()
    queueGlowPosition(event.clientX - nextRect.left, event.clientY - nextRect.top, true)
  }

  const onEnter = (event: PointerEvent) => {
    const nextRect = el.getBoundingClientRect()
    queueGlowPosition(event.clientX - nextRect.left, event.clientY - nextRect.top, true)
  }

  const onLeave = () => {
    const nextRect = el.getBoundingClientRect()
    queueGlowPosition(nextRect.width / 2, nextRect.height / 2, false)
  }

  el.addEventListener('pointerenter', onEnter)
  el.addEventListener('pointermove', onMove)
  el.addEventListener('pointerleave', onLeave)

  return () => {
    el.removeEventListener('pointerenter', onEnter)
    el.removeEventListener('pointermove', onMove)
    el.removeEventListener('pointerleave', onLeave)
  }
}

let cleanupGlowTracking: (() => void) | null = null

onMounted(() => {
  cleanupGlowTracking = setupGlowTracking()
  timer = setInterval(() => {
    activeIndex.value = randomNextIndex(activeIndex.value, snippets.length)
  }, switchIntervalMs)
})

onBeforeUnmount(() => {
  cleanupGlowTracking?.()
  cleanupGlowTracking = null
  if (glowRafId !== null) {
    cancelAnimationFrame(glowRafId)
    glowRafId = null
  }
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})

const { lang } = useData()
const isZh = computed(() => lang.value.startsWith('zh'))
const heading = computed(() =>
  isZh.value ? 'Katton能做什么' : 'What can Katton do'
)
const subtitle = computed(() =>
  isZh.value
    ? '这些例子或许能告诉你答案'
    : 'Check out those snippets to get a quick glimpse of what Katton\'s capable of'
)
</script>

<template>
  <section ref="showcaseRef" class="home-code-showcase">
    <div class="home-code-showcase__intro">
      <p class="home-code-showcase__tag">Katton Live Preview</p>
      <h2>{{ heading }}</h2>
      <p>{{ subtitle }}</p>
    </div>

    <Transition name="showcase-swap" mode="out-in">
      <article :key="`${activeIndex}-${activeSnippet.title}`" class="home-code-showcase__card">
        <div class="home-code-showcase__meta">
          <span>{{ activeSnippet.category }}</span>
          <span>{{ activeSnippet.title }}</span>
          <span>{{ activeSnippet.lang }}</span>
        </div>
        <pre><code :class="`language-${activeSnippet.prismLang}`" v-html="activeSnippet.highlighted"></code></pre>
      </article>
    </Transition>
  </section>
</template>

<style scoped>
.home-code-showcase {
  --showcase-glow: var(--vp-c-green-2, #34d399);
  --glow-x: 56px;
  --glow-y: 56px;
  --glow-opacity: 0.45;
  position: relative;
  width: min(1120px, calc(100% - 48px));
  margin: 18px auto 42px;
  padding: 28px;
  border-radius: 22px;
  border: 1px solid var(--vp-c-divider);
  background: linear-gradient(145deg, color-mix(in srgb, var(--vp-c-bg-soft) 90%, black 10%), var(--vp-c-bg-alt));
  overflow: hidden;
}

.home-code-showcase::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 560px;
  height: 560px;
  transform: translate3d(calc(var(--glow-x) - 50%), calc(var(--glow-y) - 50%), 0);
  opacity: var(--glow-opacity);
  z-index: 0;
  pointer-events: none;
  border-radius: 999px;
  background: radial-gradient(circle, color-mix(in srgb, var(--showcase-glow) 36%, transparent) 0%, color-mix(in srgb, var(--showcase-glow) 24%, transparent) 22%, transparent 75%);
  filter: blur(42px);
  will-change: transform, opacity;
  transition: opacity 140ms ease;
}

.home-code-showcase__intro {
  position: relative;
  z-index: 1;
  margin-bottom: 14px;
}

.home-code-showcase__tag {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--showcase-glow);
}

.home-code-showcase__intro h2 {
  margin: 6px 0 8px;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.15;
}

.home-code-showcase__intro p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.home-code-showcase__card {
  position: relative;
  z-index: 1;
  border-radius: 16px;
  border: 1px solid color-mix(in srgb, var(--vp-c-divider) 65%, var(--showcase-glow) 35%);
  background: color-mix(in srgb, var(--vp-c-bg) 85%, black 15%);
  box-shadow: inset 0 1px 0 color-mix(in srgb, white 15%, transparent);
}

.home-code-showcase__meta {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  padding: 10px 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.home-code-showcase__meta span:first-child {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  color: var(--showcase-glow);
  background: color-mix(in srgb, var(--showcase-glow) 20%, transparent);
}

.home-code-showcase pre {
  margin: 0;
  padding: 16px 18px 18px;
  overflow-x: auto;
}

.home-code-showcase code {
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.home-code-showcase :deep(.token.comment),
.home-code-showcase :deep(.token.prolog),
.home-code-showcase :deep(.token.doctype),
.home-code-showcase :deep(.token.cdata) {
  color: #7c8aa4;
}

.home-code-showcase :deep(.token.keyword),
.home-code-showcase :deep(.token.selector),
.home-code-showcase :deep(.token.important),
.home-code-showcase :deep(.token.builtin) {
  color: #7ff2b6;
}

.home-code-showcase :deep(.token.string),
.home-code-showcase :deep(.token.char),
.home-code-showcase :deep(.token.attr-value) {
  color: #c4f68a;
}

.home-code-showcase :deep(.token.function),
.home-code-showcase :deep(.token.class-name),
.home-code-showcase :deep(.token.method),
.home-code-showcase :deep(.token.property) {
  color: #89deff;
}

.home-code-showcase :deep(.token.number),
.home-code-showcase :deep(.token.boolean),
.home-code-showcase :deep(.token.constant) {
  color: #ffd27a;
}

.showcase-swap-enter-active,
.showcase-swap-leave-active {
  transition: opacity 280ms ease, transform 280ms ease;
}

.showcase-swap-enter-from,
.showcase-swap-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 768px) {
  .home-code-showcase {
    width: calc(100% - 28px);
    margin: 14px auto 26px;
    padding: 18px;
    border-radius: 16px;
  }

  .home-code-showcase__meta {
    grid-template-columns: 1fr;
    gap: 6px;
  }

  .home-code-showcase pre {
    padding: 12px;
  }

  .home-code-showcase code {
    font-size: 12px;
  }
}
</style>
