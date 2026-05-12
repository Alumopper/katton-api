<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'
import { generateZip, fetchKattonVersions, type PackInfo, type KattonVersion } from '../../../src/template/generator'

const { lang } = useData()
const isZh = computed(() => lang.value.startsWith('zh'))

const t = computed(() => ({
  modLoader: isZh.value ? '模组加载器' : 'Mod Loader',
  kattonVersion: isZh.value ? 'Katton 版本' : 'Katton Version',
  preRelease: isZh.value ? '预览版' : 'pre-release',
  packId: isZh.value ? '脚本包 ID' : 'Pack ID',
  packIdHint: isZh.value ? '仅限字母、数字、-、_' : 'Letters, numbers, -, _ only',
  packName: isZh.value ? '脚本包名称' : 'Pack Name',
  version: isZh.value ? '版本' : 'Version',
  authors: isZh.value ? '作者' : 'Authors',
  description: isZh.value ? '描述' : 'Description',
  packNamePlaceholder: isZh.value ? '我的脚本包' : 'My Awesome Pack',
  authorPlaceholder: isZh.value ? '你的名字' : 'YourName',
  descPlaceholder: isZh.value ? '一个新鲜出炉的 Katton 脚本包！' : 'A cool Katton script pack!',
  generate: isZh.value ? '生成并下载' : 'Generate & Download',
  generating: isZh.value ? '生成中...' : 'Generating...',
  downloadStarted: isZh.value ? '下载已开始！' : 'Download started!',
  genFailed: isZh.value ? '生成失败' : 'Generation failed',
  footerBase: isZh.value
    ? '下载一个带有完整 Gradle 配置的最简 Katton 项目，包含 '
    : 'Downloads a minimal Gradle project with ',
  footerSetup: isZh.value ? ' 加载器。编辑 ' : ' setup. Edit ',
  footerPath: isZh.value
    ? ' 配置你的实际路径，然后运行 '
    : ' to configure your game path, then run ',
  footerRun: isZh.value ? '。' : '.',
} as const))

const modLoader = ref<'fabric' | 'neoforge'>('fabric')
const kattonVersion = ref('0.2.0')
const packId = ref('my_pack')
const packName = ref('My Pack')
const packVersion = ref('1.0.0')
const authors = ref('Dev')
const description = ref('')

const versions = ref<KattonVersion[]>([{ tag: '0.2.0', prerelease: false }])
const versionsLoading = ref(false)
const generating = ref(false)
const progress = ref('')
const error = ref('')

const packInfo = computed<PackInfo>(() => ({
  modLoader: modLoader.value,
  kattonVersion: kattonVersion.value,
  packId: packId.value,
  packName: packName.value,
  packVersion: packVersion.value,
  authors: authors.value,
  description: description.value,
}))

const validPackId = computed(() => /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(packId.value))
const canGenerate = computed(() =>
  validPackId.value && packName.value.trim().length > 0 && kattonVersion.value.length > 0
)

const selectedVersion = computed(() =>
  versions.value.find(v => v.tag === kattonVersion.value)
)

async function loadVersions() {
  versionsLoading.value = true
  try {
    const v = await fetchKattonVersions()
    versions.value = v
    if (v.length > 0 && !v.some(x => x.tag === kattonVersion.value)) {
      kattonVersion.value = v[0].tag
    }
  } catch {
    // keep default
  } finally {
    versionsLoading.value = false
  }
}

loadVersions()

// Auto-generate pack name from ID
watch(packId, (id) => {
  if (id) {
    packName.value = id
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
  }
})

async function doGenerate() {
  if (!canGenerate.value) return
  error.value = ''
  generating.value = true
  try {
    const blob = await generateZip(packInfo.value, (msg) => {
      progress.value = msg
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${packId.value}.zip`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    progress.value = t.value.downloadStarted
    setTimeout(() => { progress.value = '' }, 3000)
  } catch (err: any) {
    error.value = err.message || t.value.genFailed
  } finally {
    generating.value = false
  }
}
</script>

<template>
  <div class="template-generator">
    <div class="generator-card">
      <!-- Mod Loader -->
      <div class="field-group">
        <label class="field-label">{{ t.modLoader }}</label>
        <div class="loader-toggle">
          <button
            class="loader-btn"
            :class="{ active: modLoader === 'fabric' }"
            @click="modLoader = 'fabric'"
          >
            <span class="loader-icon"><img src="https://fabricmc.net/assets/logo.png" alt="Fabric" /></span>
            <span>Fabric</span>
          </button>
          <button
            class="loader-btn"
            :class="{ active: modLoader === 'neoforge' }"
            @click="modLoader = 'neoforge'"
          >
            <span class="loader-icon"><img src="https://docs.neoforged.net/img/logo.svg" alt="NeoForge" /></span>
            <span>NeoForge</span>
          </button>
        </div>
      </div>

      <!-- Katton Version -->
      <div class="field-group">
        <label class="field-label" for="katton-version">
          {{ t.kattonVersion }}
          <span v-if="selectedVersion?.prerelease" class="prerelease-badge">{{ t.preRelease }}</span>
        </label>
        <div class="select-wrapper" :class="{ loading: versionsLoading }">
          <select
            id="katton-version"
            v-model="kattonVersion"
            :disabled="versionsLoading"
            class="field-select"
          >
            <option
              v-for="v in versions"
              :key="v.tag"
              :value="v.tag"
            >{{ v.tag }}{{ v.prerelease ? ` (${t.preRelease})` : '' }}</option>
          </select>
          <span v-if="versionsLoading" class="select-spinner">
            <svg class="spinner-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </span>
        </div>
      </div>

      <!-- Pack Info -->
      <div class="field-group">
        <label class="field-label" for="pack-id">
          {{ t.packId }}
          <span v-if="!validPackId && packId" class="field-hint error">{{ t.packIdHint }}</span>
        </label>
        <input
          id="pack-id"
          v-model="packId"
          type="text"
          class="field-input"
          :class="{ invalid: packId.length > 0 && !validPackId }"
          placeholder="my_awesome_pack"
        />
      </div>

      <div class="field-group">
        <label class="field-label" for="pack-name">{{ t.packName }}</label>
        <input
          id="pack-name"
          v-model="packName"
          type="text"
          class="field-input"
          :placeholder="t.packNamePlaceholder"
        />
      </div>

      <div class="field-row">
        <div class="field-group half">
          <label class="field-label" for="pack-version">{{ t.version }}</label>
          <input
            id="pack-version"
            v-model="packVersion"
            type="text"
            class="field-input"
            placeholder="1.0.0"
          />
        </div>
        <div class="field-group half">
          <label class="field-label" for="pack-authors">{{ t.authors }}</label>
          <input
            id="pack-authors"
            v-model="authors"
            type="text"
            class="field-input"
            :placeholder="t.authorPlaceholder"
          />
        </div>
      </div>

      <div class="field-group">
        <label class="field-label" for="pack-desc">{{ t.description }}</label>
        <textarea
          id="pack-desc"
          v-model="description"
          class="field-textarea"
          :placeholder="t.descPlaceholder"
          rows="2"
        ></textarea>
      </div>

      <!-- Error -->
      <div v-if="error" class="error-msg">{{ error }}</div>

      <!-- Generate Button -->
      <button
        class="generate-btn"
        :disabled="!canGenerate || generating"
        @click="doGenerate"
      >
        <svg v-if="!generating" class="loader-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        <svg v-else class="spinner-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
        {{ generating ? (progress || t.generating) : t.generate }}
      </button>

      <p class="generator-footer">
        {{ t.footerBase }}{{ modLoader === 'fabric' ? 'Fabric' : 'NeoForge' }}{{ t.footerSetup }}<code>build.gradle.kts</code>{{ t.footerPath }}<code>copyGameScripts</code>{{ t.footerRun }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.template-generator {
  width: min(680px, calc(100% - 32px));
  margin: 0 auto;
  padding: 40px 0 60px;
}

.generator-card {
  border-radius: 18px;
  border: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg-soft) 70%, var(--vp-c-bg) 30%);
  padding: 32px;
}

.field-group {
  margin-bottom: 20px;
}

.field-label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  letter-spacing: 0.02em;
}

.field-hint {
  font-weight: 400;
  font-size: 11px;
  margin-left: 8px;
}

.field-hint.error {
  color: #ef4444;
}

.field-input,
.field-select,
.field-textarea {
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.field-input:focus,
.field-select:focus,
.field-textarea:focus {
  outline: none;
  border-color: var(--vp-c-green-2, #34d399);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--vp-c-green-2) 20%, transparent);
}

.field-input.invalid {
  border-color: #ef4444;
}

.field-textarea {
  resize: vertical;
  min-height: 52px;
}

.select-wrapper {
  position: relative;
}

.field-select {
  appearance: none;
  cursor: pointer;
  padding-right: 32px;
}

.select-wrapper::after {
  content: '';
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 7px;
  height: 7px;
  border-right: 2px solid var(--vp-c-text-2);
  border-bottom: 2px solid var(--vp-c-text-2);
  pointer-events: none;
  transition: opacity 0.2s;
}

.select-wrapper.loading::after {
  opacity: 0;
}

.select-spinner {
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  pointer-events: none;
}

.spinner-icon {
  display: block;
  animation: spin 0.7s linear infinite;
}

.field-row {
  display: flex;
  gap: 16px;
}

.field-row .half {
  flex: 1;
}

/* Loader toggle */
.loader-toggle {
  display: flex;
  gap: 10px;
}

.loader-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.loader-btn:hover {
  border-color: var(--vp-c-green-2);
}

.loader-btn.active {
  border-color: var(--vp-c-green-2);
  background: color-mix(in srgb, var(--vp-c-green-2) 12%, var(--vp-c-bg));
  color: var(--vp-c-green-2);
}

.loader-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-icon-svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

/* Pre-release badge next to version label */
.prerelease-badge {
  display: inline-block;
  margin-left: 8px;
  padding: 0px 7px;
  border-radius: 10px;
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: color-mix(in srgb, #f59e0b 18%, transparent);
  color: #fbbf24;
  border: px solid color-mix(in srgb, #f59e0b 30%, transparent);
}

/* Dark-themed select dropdown */
.field-select {
  appearance: none;
  cursor: pointer;
  padding-right: 32px;
  /* Custom dropdown arrow via wrapper */
}

.field-select option {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

/* Generate button */
.generate-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 24px;
  margin-top: 24px;
  border: none;
  border-radius: 12px;
  background: var(--vp-c-green-2, #34d399);
  color: #0d1117;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.generate-btn:hover:not(:disabled) {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

.generate-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-spinner {
  animation: spin 0.8s linear infinite;
}

.error-msg {
  margin-top: 16px;
  padding: 10px 14px;
  border-radius: 10px;
  background: color-mix(in srgb, #ef4444 15%, transparent);
  border: 1px solid color-mix(in srgb, #ef4444 35%, transparent);
  color: #fca5a5;
  font-size: 13px;
}

.generator-footer {
  margin-top: 20px;
  font-size: 12px;
  color: var(--vp-c-text-3);
  text-align: center;
  line-height: 1.6;
}

.generator-footer code {
  font-size: 11px;
  padding: 1px 5px;
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 640px) {
  .generator-card {
    padding: 20px;
  }

  .field-row {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
