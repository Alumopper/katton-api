<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useData } from 'vitepress'
import {
  generateZip,
  fetchKattonVersions,
  type DependencyEnvironment,
  type KattonVersion,
  type PackInfo,
  type ScriptDependencyInput,
  type SupportedMinecraftVersion,
} from '../../../src/template/generator'

const { lang } = useData()
const isZh = computed(() => lang.value.startsWith('zh'))

const t = computed(() => ({
  modLoader: isZh.value ? '模组加载器' : 'Mod Loader',
  minecraftVersion: isZh.value ? 'Minecraft 版本' : 'Minecraft Version',
  minecraftVersionTooltip: isZh.value ? 'Katton、平台 API 和游戏必须使用同一个 Minecraft 版本' : 'Katton, the platform API, and the game must target the same Minecraft version',
  kattonVersion: isZh.value ? 'Katton 版本' : 'Katton Version',
  kattonVersionTooltip: isZh.value ? '列表只显示已发布且兼容所选 Minecraft 与平台的 Maven 产物' : 'Only published Maven artifacts compatible with the selected Minecraft version and platform are listed',
  mavenCoordinate: isZh.value ? 'Maven 版本' : 'Maven version',
  legacyMaven: isZh.value ? '旧版坐标不含 MC 标识' : 'legacy coordinate without MC qualifier',
  preRelease: isZh.value ? '预览版' : 'pre-release',
  packId: isZh.value ? '脚本包 ID' : 'Pack ID',
  packIdTooltip: isZh.value ? '你的脚本包在游戏中唯一的标识符，通常用于区分不同的脚本包' : 'The unique identifier of your script pack in-game, usually used to distinguish different script packs',
  packIdHint: isZh.value ? '仅限字母、数字、-、_' : 'Letters, numbers, -, _ only',
  packName: isZh.value ? '脚本包名称' : 'Pack Name',
  packNameTooltip: isZh.value ? '你的脚本包将会在游戏中展示的名称': 'The name of your script pack that will be displayed in-game',
  signing: isZh.value ? '附带签名插件' : 'With Sign Plugin',
  signingTooltip: isZh.value ? (modLoader.value === 'paper' ? '在paper端的脚本不会被发送到客户端，因此签名是不必要的' : '对于在服务端的需要被发送到客户端的脚本，请勾选此项以附带签名插件，确保客户端可以加载这些脚本') : (modLoader.value === 'paper' ? 'Signing is unnecessary because scriptpacks are never sent from paper-side to client-side' : 'For scripts that need to be sent to the client on the server side, check this option to include the signing plugin to ensure the client can load these scripts'),
  version: isZh.value ? '版本' : 'Version',
  authors: isZh.value ? '作者' : 'Authors',
  description: isZh.value ? '描述' : 'Description',
  dependencies: isZh.value ? '模组 / 插件依赖' : 'Mod / Plugin Dependencies',
  dependenciesTooltip: isZh.value
    ? '这些条目会写入 world_scripts/manifest.json；空的全局包保留 dependencies: []。运行时声明与 IDE 编译类路径是两回事。'
    : 'These entries are written to world_scripts/manifest.json; the empty global pack keeps dependencies: []. Runtime declarations and the IDE compile classpath are separate.',
  noDependencies: isZh.value ? '当前没有外部依赖，将生成 dependencies: []。' : 'No external dependencies; the manifests will contain dependencies: [].',
  addDependency: isZh.value ? '添加依赖' : 'Add Dependency',
  dependencyId: isZh.value ? '模组 ID / 插件名' : 'Mod ID / Plugin Name',
  dependencyVersion: isZh.value ? '版本范围' : 'Version Range',
  dependencyEnvironment: isZh.value ? '运行侧' : 'Environment',
  dependencyRequired: isZh.value ? '必需' : 'Required',
  removeDependency: isZh.value ? '移除依赖' : 'Remove dependency',
  environmentServer: isZh.value ? '服务端' : 'Server',
  environmentClient: isZh.value ? '客户端' : 'Client',
  environmentBoth: isZh.value ? '两端' : 'Both',
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

const modLoader = ref<PackInfo['modLoader']>('fabric')
const minecraftVersion = ref<SupportedMinecraftVersion>('26.2')
const kattonVersion = ref('0.4.0+mc26.2')
const packId = ref('my_pack')
const packName = ref('My Pack')
const packVersion = ref('1.0.0')
const authors = ref('Dev')
const description = ref('')
const signingKey = ref(false)
const dependencies = ref<ScriptDependencyInput[]>([])

const versions = ref<KattonVersion[]>([])
const versionsLoading = ref(false)
const generating = ref(false)
const progress = ref('')
const error = ref('')

const packInfo = computed<PackInfo>(() => ({
  modLoader: modLoader.value,
  minecraftVersion: minecraftVersion.value,
  kattonVersion: kattonVersion.value,
  packId: packId.value,
  packName: packName.value,
  signing: signingKey.value,
  packVersion: packVersion.value,
  authors: authors.value,
  description: description.value,
  dependencies: dependencies.value.map(dependency => ({ ...dependency })),
}))

const validPackId = computed(() => /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(packId.value))
const availableMinecraftVersions = computed<SupportedMinecraftVersion[]>(() => {
  const supported = new Set(
    versions.value
      .filter(version => version.loaders.includes(modLoader.value))
      .map(version => version.minecraftVersion)
  )
  return (['26.2', '26.1.2'] as SupportedMinecraftVersion[])
    .filter(version => supported.has(version))
})
const availableKattonVersions = computed(() =>
  versions.value.filter(version =>
    version.minecraftVersion === minecraftVersion.value &&
    version.loaders.includes(modLoader.value)
  )
)
const canGenerate = computed(() =>
  validPackId.value &&
  packName.value.trim().length > 0 &&
  dependencies.value.every(dependency => dependency.id.trim().length > 0) &&
  availableKattonVersions.value.some(version => version.mavenVersion === kattonVersion.value)
)

const selectedVersion = computed(() =>
  availableKattonVersions.value.find(version => version.mavenVersion === kattonVersion.value)
)
const loaderLabel = computed(() => {
  if (modLoader.value === 'fabric') return 'Fabric'
  if (modLoader.value === 'neoforge') return 'NeoForge'
  return 'Paper'
})

async function loadVersions() {
  versionsLoading.value = true
  try {
    const v = await fetchKattonVersions()
    versions.value = v
  } catch {
    // keep default
  } finally {
    versionsLoading.value = false
  }
}

loadVersions()

function selectModLoader(loader: PackInfo['modLoader']) {
  modLoader.value = loader
  if (loader === 'paper') signingKey.value = false
  if (loader === 'paper') {
    dependencies.value.forEach(dependency => {
      if (dependency.environment !== 'server') dependency.environment = 'server'
    })
  }
}

function addDependency() {
  dependencies.value.push({
    id: '',
    version: '*',
    required: true,
    environment: modLoader.value === 'paper' ? 'server' : 'both',
  })
}

function removeDependency(index: number) {
  dependencies.value.splice(index, 1)
}

function environmentOptions(): Array<{ value: DependencyEnvironment; label: string }> {
  const options: Array<{ value: DependencyEnvironment; label: string }> = [
    { value: 'server', label: t.value.environmentServer },
  ]
  if (modLoader.value !== 'paper') {
    options.push(
      { value: 'client', label: t.value.environmentClient },
      { value: 'both', label: t.value.environmentBoth },
    )
  }
  return options
}

watch([modLoader, minecraftVersion, versions], () => {
  if (!availableMinecraftVersions.value.includes(minecraftVersion.value)) {
    minecraftVersion.value = availableMinecraftVersions.value[0] ?? '26.2'
  }

  if (!availableKattonVersions.value.some(version => version.mavenVersion === kattonVersion.value)) {
    kattonVersion.value = availableKattonVersions.value[0]?.mavenVersion ?? ''
  }
})

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
        <div class="field-with-hint">
          <label class="field-label">{{ t.modLoader }}</label>
        </div>
        <div class="loader-toggle">
          <button
            type="button"
            class="loader-btn"
            :class="{ active: modLoader === 'fabric' }"
            @click="selectModLoader('fabric')"
          >
            <span class="loader-icon"><img src="https://fabricmc.net/assets/logo.png" alt="Fabric" /></span>
            <span>Fabric</span>
          </button>
          <button
            type="button"
            class="loader-btn"
            :class="{ active: modLoader === 'neoforge' }"
            @click="selectModLoader('neoforge')"
          >
            <span class="loader-icon"><img src="https://docs.neoforged.net/img/logo.svg" alt="NeoForge" /></span>
            <span>NeoForge</span>
          </button>
          <button
            type="button"
            class="loader-btn"
            :class="{ active: modLoader === 'paper' }"
            @click="selectModLoader('paper')"
          >
            <span class="loader-icon"><img src="https://assets.papermc.io/brand/papermc_logo.512.png" alt="Paper" /></span>
            <span>Paper</span>
          </button>
        </div>
      </div>

      <!-- Minecraft Version -->
      <div class="field-group">
        <div class="field-with-hint">
          <label class="field-label" for="minecraft-version">{{ t.minecraftVersion }}</label>
          <span v-tooltip="t.minecraftVersionTooltip" class="hint-icon" aria-label="help">?</span>
        </div>
        <div class="select-wrapper" :class="{ loading: versionsLoading }">
          <select
            id="minecraft-version"
            v-model="minecraftVersion"
            :disabled="versionsLoading"
            class="field-select"
          >
            <option
              v-for="version in availableMinecraftVersions"
              :key="version"
              :value="version"
            >{{ version }}</option>
          </select>
          <span v-if="versionsLoading" class="select-spinner">
            <svg class="spinner-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </span>
        </div>
      </div>

      <!-- Katton Version -->
      <div class="field-group">
        <div class="field-with-hint">
          <label class="field-label" for="katton-version">
            {{ t.kattonVersion }}
            <span v-if="selectedVersion?.prerelease" class="prerelease-badge">{{ t.preRelease }}</span>
          </label>
          <span v-tooltip="t.kattonVersionTooltip" class="hint-icon" aria-label="help">?</span>
        </div>
        <div class="select-wrapper" :class="{ loading: versionsLoading }">
          <select
            id="katton-version"
            v-model="kattonVersion"
            :disabled="versionsLoading"
            class="field-select"
          >
            <option
              v-for="version in availableKattonVersions"
              :key="version.mavenVersion"
              :value="version.mavenVersion"
            >{{ version.tag }}{{ version.prerelease ? ` (${t.preRelease})` : '' }}</option>
          </select>
          <span v-if="versionsLoading" class="select-spinner">
            <svg class="spinner-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
          </span>
        </div>
        <p v-if="selectedVersion" class="version-coordinate">
          {{ t.mavenCoordinate }}: <code>{{ selectedVersion.mavenVersion }}</code>
          <span v-if="selectedVersion.legacyMavenCoordinate"> · {{ t.legacyMaven }}</span>
        </p>
      </div>

      <!-- Pack Info -->
      <div class="field-group">
        <div class="field-with-hint">
          <label class="field-label" for="pack-id">
            {{ t.packId }}
            <span v-if="!validPackId && packId" class="field-hint error">{{ t.packIdHint }}</span>
          </label>
          <span v-tooltip="t.packIdTooltip" class="hint-icon" aria-label="help">?</span>
        </div>
        <input
          id="pack-id"
          v-model="packId"
          type="text"
          class="field-input"
          :class="{ invalid: packId.length > 0 && !validPackId }"
          placeholder="my_awesome_pack"
        />
      </div>

      <div class="field-row">
        <div class="field-group half">
          <div class="field-with-hint">
            <label class="field-label" for="pack-name">{{ t.packName }}</label>
            <span v-tooltip="t.packNameTooltip" class="hint-icon" aria-label="help">?</span>
          </div>
          <input
            id="pack-name"
            v-model="packName"
            type="text"
            class="field-input"
            :placeholder="t.packNamePlaceholder"
          />
        </div>
        <div class="field-checkbox">
          <div class="field-with-hint">
            <label class="field-label" for="pack-signing">{{ t.signing }}</label>
            <span v-tooltip="t.signingTooltip" class="hint-icon" aria-label="help">?</span>
          </div>
          <input
            id="pack-signing"
            v-model="signingKey"
            type="checkbox"
            class="field-checkbox"
            :disabled="modLoader === 'paper'"
          />
        </div>
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

      <section class="dependency-section">
        <div class="dependency-section__header">
          <div class="field-with-hint">
            <span class="field-label">{{ t.dependencies }}</span>
            <span v-tooltip="t.dependenciesTooltip" class="hint-icon" aria-label="help">?</span>
          </div>
          <button type="button" class="dependency-add" @click="addDependency">
            {{ t.addDependency }}
          </button>
        </div>

        <p v-if="dependencies.length === 0" class="dependency-empty">
          {{ t.noDependencies }}
        </p>

        <div
          v-for="(dependency, index) in dependencies"
          :key="index"
          class="dependency-card"
        >
          <div class="dependency-grid">
            <label class="dependency-field">
              <span>{{ t.dependencyId }}</span>
              <input
                v-model="dependency.id"
                type="text"
                class="field-input"
                :class="{ invalid: dependency.id.trim().length === 0 }"
                :placeholder="modLoader === 'paper' ? 'PlaceholderAPI' : 'create'"
              />
            </label>

            <label class="dependency-field">
              <span>{{ t.dependencyVersion }}</span>
              <input
                v-model="dependency.version"
                type="text"
                class="field-input"
                placeholder=">=1.0.0"
              />
            </label>

            <label class="dependency-field">
              <span>{{ t.dependencyEnvironment }}</span>
              <span class="select-wrapper">
                <select v-model="dependency.environment" class="field-select">
                  <option
                    v-for="option in environmentOptions()"
                    :key="option.value"
                    :value="option.value"
                  >{{ option.label }}</option>
                </select>
              </span>
            </label>
          </div>

          <div class="dependency-card__footer">
            <label class="dependency-required">
              <input v-model="dependency.required" type="checkbox" />
              <span>{{ t.dependencyRequired }}</span>
            </label>
            <button
              type="button"
              class="dependency-remove"
              :aria-label="t.removeDependency"
              @click="removeDependency(index)"
            >
              {{ t.removeDependency }}
            </button>
          </div>
        </div>
      </section>

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
        {{ t.footerBase }}{{ loaderLabel }}{{ t.footerSetup }}<code>gradle.properties</code>{{ t.footerPath }}<code>copyGameScripts</code>{{ t.footerRun }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.template-generator {
  width: min(840px, calc(100% - 32px));
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

.field-with-hint {
  display: flex;
  align-items: center;
  gap: 8px;
}

.field-label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  letter-spacing: 0.02em;
}

.hint-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--vp-c-text-2);
  color: var(--vp-c-bg);
  font-size: 10px;
  font-weight: bold;
  cursor: help;
  margin-bottom: 6px;
}

.field-hint {
  font-weight: 400;
  font-size: 11px;
  margin-left: 8px;
}

.field-hint.error {
  color: #ef4444;
}

.field-checkbox {
  width: auto;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  gap: 8px;
  margin: 0 16px;
}

.field-checkbox > .field-label {
  width: auto;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  align-self: center;
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

.dependency-section {
  margin: 8px 0 24px;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 22px;
}

.dependency-section__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 12px;
}

.dependency-section__header .field-label,
.dependency-section__header .hint-icon {
  margin-bottom: 0;
}

.dependency-add,
.dependency-remove {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font: inherit;
}

.dependency-add {
  padding: 7px 12px;
  color: var(--vp-c-brand-1);
}

.dependency-add:hover {
  border-color: var(--vp-c-brand-1);
}

.dependency-empty {
  margin: 0;
  border: 1px dashed var(--vp-c-divider);
  border-radius: 10px;
  padding: 14px;
  color: var(--vp-c-text-3);
  font-size: 13px;
}

.dependency-card {
  margin-top: 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 14px;
  background: color-mix(in srgb, var(--vp-c-bg) 72%, var(--vp-c-bg-soft) 28%);
}

.dependency-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(130px, 0.7fr);
  gap: 12px;
}

.dependency-field {
  display: grid;
  gap: 6px;
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 600;
}

.dependency-field .select-wrapper {
  display: block;
}

.dependency-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
}

.dependency-required {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-text-2);
  font-size: 13px;
}

.dependency-remove {
  padding: 5px 9px;
  color: #f87171;
  font-size: 12px;
}

.dependency-remove:hover {
  border-color: #f87171;
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
  border: 1px solid color-mix(in srgb, #f59e0b 30%, transparent);
}

.version-coordinate {
  margin: 7px 2px 0;
  color: var(--vp-c-text-3);
  font-size: 11px;
  line-height: 1.5;
}

.version-coordinate code {
  padding: 1px 4px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  font-size: 11px;
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

  .dependency-grid {
    grid-template-columns: 1fr;
  }

  .dependency-section__header {
    align-items: flex-start;
  }
}
</style>
