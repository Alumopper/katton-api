<template>
  <figure class="image-caption-zoom" :style="{ '--figure-width': figureWidth }">
    <button
      class="image-caption-zoom__thumb"
      type="button"
      :aria-label="openButtonLabel"
      @click="openViewer"
    >
      <img :src="src" :alt="altText" :loading="loading" :decoding="decoding" />
    </button>

    <figcaption v-if="caption || $slots.caption" class="image-caption-zoom__caption">
      <slot name="caption">{{ caption }}</slot>
    </figcaption>

    <Teleport to="body">
      <transition name="image-caption-zoom-fade">
        <div
          v-if="isOpen"
          class="image-caption-zoom__dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="dialogLabel"
          @click.self="closeViewer"
        >
          <button class="image-caption-zoom__close" type="button" aria-label="Close image preview" @click="closeViewer">
            x
          </button>
          <img
            class="image-caption-zoom__full"
            :src="src"
            :alt="altText"
            :loading="loading"
            :decoding="decoding"
            :style="{ '--zoom-height': maxZoomHeight }"
          />
        </div>
      </transition>
    </Teleport>
  </figure>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  src: string
  alt?: string
  caption?: string
  figureWidth?: string
  maxZoomHeight?: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'auto' | 'sync'
}>(), {
  alt: '',
  caption: '',
  figureWidth: '100%',
  maxZoomHeight: '75vh',
  loading: 'lazy',
  decoding: 'async',
})

const isOpen = ref(false)
let previousOverflow = ''

const altText = computed(() => props.alt || props.caption || 'Preview image')
const openButtonLabel = computed(() => `Open image preview: ${altText.value}`)
const dialogLabel = computed(() => `Image preview: ${altText.value}`)

function openViewer() {
  isOpen.value = true
}

function closeViewer() {
  isOpen.value = false
}

watch(isOpen, (open) => {
  if (typeof document === 'undefined') {
    return
  }

  if (open) {
    previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return
  }

  document.body.style.overflow = previousOverflow
})

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeViewer()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = previousOverflow
  }
})
</script>

<style scoped>
.image-caption-zoom {
  width: min(100%, var(--figure-width));
  margin: 1rem auto;
}

.image-caption-zoom__thumb {
  width: 100%;
  border: 0;
  background: transparent;
  padding: 0;
  display: block;
  cursor: zoom-in;
}

.image-caption-zoom__thumb img {
  width: 100%;
  display: block;
  height: auto;
  border-radius: 10px;
  border: 1px solid rgba(125, 125, 125, 0.35);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
}

.image-caption-zoom__caption {
  margin-top: 0.55rem;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.45;
}

.image-caption-zoom__dialog {
  position: fixed;
  inset: 0;
  z-index: 1200;
  background: rgba(0, 0, 0, 0.72);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.4rem;
}

.image-caption-zoom__full {
  width: auto;
  max-width: min(92vw, 1400px);
  max-height: var(--zoom-height);
  height: auto;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.45);
}

.image-caption-zoom__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
}

.image-caption-zoom__close:hover {
  background: rgba(255, 255, 255, 0.28);
}

.image-caption-zoom-fade-enter-active,
.image-caption-zoom-fade-leave-active {
  transition: opacity 0.18s ease;
}

.image-caption-zoom-fade-enter-from,
.image-caption-zoom-fade-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .image-caption-zoom__dialog {
    padding: 0.9rem;
  }

  .image-caption-zoom__close {
    top: 0.7rem;
    right: 0.7rem;
  }
}
</style>