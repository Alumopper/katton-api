<template>
  <section class="api-doc-page">
    <div class="api-doc-page__header">
      <p class="api-doc-page__eyebrow">{{ module }}</p>
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
defineProps<{
  title: string
  module: string
  packageName: string
  sourceFile: string
}>()
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

.api-doc-page__eyebrow {
  margin: 0 0 0.35rem;
  color: var(--api-accent);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
  text-transform: uppercase;
}

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
    max-width: 100%;
    overflow-wrap: anywhere;
}

.api-doc-page__body {
  margin-top: 1rem;
  color: var(--api-text);
    overflow-wrap: anywhere;
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
        margin-bottom: 1.25rem;
  }

  .api-doc-page__header {
    padding-bottom: 0;
  }

  .api-doc-page__eyebrow {
    margin-bottom: 0.45rem;
    font-size: 0.74rem;
    letter-spacing: 0.06em;
  }

  .api-doc-page__title {
    font-size: clamp(1.55rem, 8vw, 2rem);
    line-height: 1.2;
  }

  .api-doc-page__meta {
    gap: 0.45rem;
    margin-top: 0.85rem;
  }

  .api-doc-page__chip {
    width: 100%;
    border-radius: 0.8rem;
    font-size: 0.8rem;
    line-height: 1.35;
  }

  .api-doc-page__body {
    margin-top: 0.9rem;
  }
}
</style>