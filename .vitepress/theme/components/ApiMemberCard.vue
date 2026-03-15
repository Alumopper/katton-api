<template>
  <article :id="id" class="api-member-card">
    <header class="api-member-card__header">
      <div class="api-member-card__meta">
        <span class="api-member-card__pill">{{ module }}</span>
        <span class="api-member-card__pill api-member-card__pill--kind">{{ kind }}</span>
      </div>
    </header>
    <div class="api-member-card__body">
      <slot />
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  name: string
  kind: string
  module: string
  sourceFile: string
}>()
</script>

<style scoped>
.api-member-card {
    margin: 1rem 0 1.4rem;
    padding: 1rem 1.05rem;
    border: 1px solid #30363d;
    border-radius: 12px;
    background: #161b22;
}

.api-member-card__header {
    margin-bottom: 0.8rem;
}

.api-member-card__name {
    color: #f0f6fc;
    font-weight: 600;
    overflow-wrap: anywhere;
}

.api-member-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
    align-items: flex-start;
}

.api-member-card__pill {
    padding: 0.34rem 0.65rem;
  border-radius: 999px;
    border: 1px solid #30363d;
    background: rgba(110, 118, 129, 0.08);
    color: #8b949e;
  font-size: 0.78rem;
    max-width: 100%;
    overflow-wrap: anywhere;
}

.api-member-card__pill--kind {
    color: #58a6ff;
}

.api-member-card__body {
    color: #c9d1d9;
  overflow-wrap: anywhere;
}

.api-member-card :deep(.language-kotlin) {
    margin: 0 0 1rem;
    border: 1px solid #30363d;
    border-radius: 10px;
  overflow-x: auto;
}

.api-member-card :deep(h3),
.api-member-card :deep(h4),
.api-member-card :deep(h5) {
  margin-top: 1rem;
    color: #f0f6fc;
}

.api-member-card :deep(table) {
  display: table;
  width: 100%;
}

.api-member-card :deep(th),
.api-member-card :deep(td),
.api-member-card :deep(p),
.api-member-card :deep(li) {
    color: #c9d1d9;
}

.api-member-card :deep(code) {
    color: #79c0ff;
}

@media (max-width: 640px) {
  .api-member-card {
    padding: 1rem;
        border-radius: 10px;
        margin: 0.9rem 0 1.15rem;
  }

  .api-member-card__header {
    margin-bottom: 0.7rem;
  }

  .api-member-card__meta {
    gap: 0.45rem;
  }

  .api-member-card__name {
    font-size: 1rem;
    line-height: 1.35;
  }

  .api-member-card__pill {
    width: fit-content;
    max-width: 100%;
    border-radius: 0.75rem;
  }

  .api-member-card :deep(table) {
    display: block;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  .api-member-card :deep(pre) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>