<template>
  <article :id="id" class="api-member-card">
    <header class="api-member-card__header">
      <div class="api-member-card__meta">
                <span class="api-member-card__name">{{ name }}</span>
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
}

.api-member-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.api-member-card__pill {
    padding: 0.34rem 0.65rem;
  border-radius: 999px;
    border: 1px solid #30363d;
    background: rgba(110, 118, 129, 0.08);
    color: #8b949e;
  font-size: 0.78rem;
}

.api-member-card__pill--kind {
    color: #58a6ff;
}

.api-member-card__body {
    color: #c9d1d9;
}

.api-member-card :deep(.language-kotlin) {
    margin: 0 0 1rem;
    border: 1px solid #30363d;
    border-radius: 10px;
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
  }
}
</style>