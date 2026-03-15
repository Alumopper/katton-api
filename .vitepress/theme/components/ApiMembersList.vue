<template>
    <nav class="api-members-list" aria-label="Members navigation">
        <div class="api-members-list__header">
            <p class="api-members-list__title">Members</p>
            <p class="api-members-list__subtitle">Jump directly to declarations on this page.</p>
        </div>
        <ul class="api-members-list__grid">
            <li v-for="item in parsedItems" :key="item.href" class="api-members-list__item">
                <a :href="item.href" class="api-members-list__link">
                    <span class="api-members-list__label">{{ item.label }}</span>
                    <span class="api-members-list__kind">{{ item.kind }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Item = {
    label: string
    href: string
    kind: string
}

const props = defineProps<{
    itemsJson: string
}>()

const parsedItems = computed<Item[]>(() => {
    try {
        return JSON.parse(props.itemsJson) as Item[]
    } catch {
        return []
    }
})
</script>

<style scoped>
.api-members-list {
    margin: 1.25rem 0 1.75rem;
    padding: 1rem;
    border: 1px solid #30363d;
    border-radius: 12px;
    background: #161b22;
}

.api-members-list__header {
    margin-bottom: 0.9rem;
}

.api-members-list__title {
    margin: 0;
    color: #f0f6fc;
    font-size: 1rem;
    font-weight: 600;
}

.api-members-list__subtitle {
    margin: 0.3rem 0 0;
    color: #8b949e;
    font-size: 0.86rem;
}

.api-members-list__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style: none;
}

.api-members-list__item {
    margin: 0;
}

.api-members-list__link {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    align-items: center;
    padding: 0.75rem 0.9rem;
    border: 1px solid #30363d;
    border-radius: 10px;
    background: rgba(13, 17, 23, 0.86);
    color: #c9d1d9;
    text-decoration: none;
    transition: border-color 0.15s ease, background-color 0.15s ease;
}

.api-members-list__link:hover {
    border-color: #58a6ff;
    background: rgba(17, 24, 39, 0.96);
}

.api-members-list__label {
    font-weight: 500;
    word-break: break-word;
}

.api-members-list__kind {
    flex-shrink: 0;
    color: #8b949e;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
</style>