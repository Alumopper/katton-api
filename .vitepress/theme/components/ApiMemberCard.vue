<template>
  <article :id="id" class="api-member-card">
    <header class="api-member-card__header">
      <div class="api-member-card__meta">
                <span class="api-member-card__name">{{ name }}</span>
                <span class="api-member-card__pill api-member-card__pill--module" :data-module="moduleKey">{{ module }}</span>
                <span class="api-member-card__pill api-member-card__pill--kind" :data-kind="kindKey">{{ kind }}</span>
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
    kindKey: string
  module: string
    moduleKey: string
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
    align-items: center;
  gap: 0.5rem;
}

.api-member-card__pill {
    padding: 0.1rem 0.65rem;
  border-radius: 999px;
    border: 1px solid #30363d;
    background: rgba(110, 118, 129, 0.08);
    color: #8b949e;
  font-size: 0.78rem;
}

.api-member-card__pill--kind {
    color: #58a6ff;
}

.api-member-card__pill--module[data-module='common'] { border-color: rgba(88, 166, 255, 0.35); color: #79c0ff; background: rgba(88, 166, 255, 0.12); }
.api-member-card__pill--module[data-module='fabric'] { border-color: rgba(242, 201, 76, 0.35); color: #f2cc60; background: rgba(242, 201, 76, 0.1); }
.api-member-card__pill--module[data-module='neoforge'] { border-color: rgba(63, 185, 80, 0.35); color: #7ee787; background: rgba(63, 185, 80, 0.1); }
.api-member-card__pill--module[data-module='paper'] { border-color: rgba(230, 126, 34, 0.35); color: #f0a04b; background: rgba(230, 126, 34, 0.1); }

.api-member-card__pill--kind[data-kind='function'] { border-color: rgba(88, 166, 255, 0.35); color: #79c0ff; background: rgba(88, 166, 255, 0.1); }
.api-member-card__pill--kind[data-kind='property'] { border-color: rgba(242, 201, 76, 0.35); color: #f2cc60; background: rgba(242, 201, 76, 0.1); }
.api-member-card__pill--kind[data-kind='data-class'] { border-color: rgba(188, 140, 255, 0.35); color: #d2a8ff; background: rgba(188, 140, 255, 0.12); }
.api-member-card__pill--kind[data-kind='class'] { border-color: rgba(139, 148, 158, 0.35); color: #c9d1d9; background: rgba(139, 148, 158, 0.1); }
.api-member-card__pill--kind[data-kind='object'] { border-color: rgba(63, 185, 80, 0.35); color: #7ee787; background: rgba(63, 185, 80, 0.1); }
.api-member-card__pill--kind[data-kind='interface'] { border-color: rgba(56, 139, 253, 0.35); color: #58a6ff; background: rgba(56, 139, 253, 0.1); }
.api-member-card__pill--kind[data-kind='enum-class'],
.api-member-card__pill--kind[data-kind='annotation-class'],
.api-member-card__pill--kind[data-kind='value-class'],
.api-member-card__pill--kind[data-kind='sealed-class'],
.api-member-card__pill--kind[data-kind='type-alias'],
.api-member-card__pill--kind[data-kind='companion-object'] { border-color: rgba(210, 153, 34, 0.35); color: #e3b341; background: rgba(210, 153, 34, 0.1); }

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