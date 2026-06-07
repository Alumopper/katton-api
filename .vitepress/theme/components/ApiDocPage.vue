<template>
  <section class="api-doc-page">
    <div class="api-doc-page__header">
            <div class="api-doc-page__badges">
                <span class="api-doc-page__module-badge" :data-module="moduleKey">{{ displayModule }}</span>
            </div>
      <h1 class="api-doc-page__title">{{ title }}</h1>
      <div class="api-doc-page__meta">
        <span class="api-doc-page__chip">{{ packageName }}</span>
        <span class="api-doc-page__chip">{{ sourceFile }}</span>
      </div>
    </div>
    <div class="api-doc-page__body">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{
  title: string
  module: string
    moduleKey: string
  packageName: string
  sourceFile: string
}>()

const { lang } = useData()
const isZh = computed(() => lang.value.startsWith('zh'))

const zhModuleLabels: Record<string, string> = {
  common: '通用',
  fabric: 'Fabric',
  neoforge: 'NeoForge',
  paper: 'Paper',
}

const displayModule = computed(() => {
  if (!isZh.value) return props.module
  return zhModuleLabels[props.moduleKey] ?? props.module
})
</script>

<style scoped>
.api-doc-page {
    --api-bg: #0d1117;
    --api-panel: #161b22;
    --api-border: #30363d;
    --api-text: #c9d1d9;
    --api-muted: #8b949e;
    --api-accent: #58a6ff;
    margin: 0 0 1.5rem;
    padding: 1.25rem;
    border: 1px solid var(--api-border);
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(22, 27, 34, 0.96) 0%, rgba(13, 17, 23, 0.98) 100%);
}

.api-doc-page__header {
    padding-bottom: 0.25rem;
}

.api-doc-page__badges {
    margin-bottom: 0.55rem;
}

.api-doc-page__module-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.28rem 0.72rem;
    border: 1px solid #30363d;
    border-radius: 999px;
    background: rgba(88, 166, 255, 0.14);
    color: #c9d1d9;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.api-doc-page__module-badge[data-module='common'] { border-color: rgba(88, 166, 255, 0.35); color: #79c0ff; background: rgba(88, 166, 255, 0.12); }
.api-doc-page__module-badge[data-module='fabric'] { border-color: rgba(242, 201, 76, 0.34); color: #f2cc60; background: rgba(242, 201, 76, 0.1); }
.api-doc-page__module-badge[data-module='neoforge'] { border-color: rgba(63, 185, 80, 0.34); color: #7ee787; background: rgba(63, 185, 80, 0.1); }
.api-doc-page__module-badge[data-module='paper'] { border-color: rgba(230, 126, 34, 0.34); color: #f0a04b; background: rgba(230, 126, 34, 0.1); }

.api-doc-page__title {
  margin: 0;
  color: var(--api-text);
    font-size: clamp(1.9rem, 3.2vw, 2.6rem);
    line-height: 1.1;
}

.api-doc-page__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: 1rem;
}

.api-doc-page__chip {
    padding: 0.38rem 0.7rem;
    border: 1px solid var(--api-border);
    border-radius: 999px;
    background: rgba(110, 118, 129, 0.08);
  color: var(--api-muted);
  font-size: 0.82rem;
}

.api-doc-page__body {
  margin-top: 1rem;
  color: var(--api-text);
}

.api-doc-page :deep(p),
.api-doc-page :deep(li),
.api-doc-page :deep(td),
.api-doc-page :deep(th) {
  color: var(--api-text);
}

.api-doc-page :deep(code) {
    color: #79c0ff;
}

@media (max-width: 640px) {
  .api-doc-page {
    padding: 1.1rem;
        border-radius: 10px;
  }
}
</style>
