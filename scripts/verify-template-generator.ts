import assert from 'node:assert/strict'

import JSZip from 'jszip'

import {
  fetchKattonVersions,
  generateZip,
  type PackInfo,
  type SupportedMinecraftVersion,
} from '../src/template/generator'

const platformVersions = {
  '26.1.2': {
    fabricApi: '0.144.0+26.1',
    neoForge: '26.1.2.30-beta',
    paper: '26.1.2.build.71-stable',
  },
  '26.2': {
    fabricApi: '0.154.0+26.2',
    neoForge: '26.2.0.7-beta',
    paper: '26.2.build.41-alpha',
  },
} satisfies Record<SupportedMinecraftVersion, object>

globalThis.fetch = async () => new Response(new Uint8Array([0x50, 0x4b]))

async function main() {
  const versions = await fetchKattonVersions()
  const targets = (Object.keys(platformVersions) as SupportedMinecraftVersion[]).flatMap(
    minecraftVersion => ['0.5.0', '0.4.0'].map(releaseVersion => ({ minecraftVersion, releaseVersion })),
  )
  for (const { minecraftVersion, releaseVersion } of targets) {
    const mavenVersion = `${releaseVersion}+mc${minecraftVersion}`
    const release = versions.find(version =>
      version.mavenVersion === mavenVersion && version.minecraftVersion === minecraftVersion
    )
    assert.ok(release, `missing ${mavenVersion}`)
    assert.deepEqual(release.loaders, ['fabric', 'neoforge', 'paper'])

    for (const modLoader of release.loaders) {
      const info: PackInfo = {
        modLoader,
        minecraftVersion,
        kattonVersion: mavenVersion,
        packId: 'verification_pack',
        packName: 'Verification Pack',
        packVersion: '1.0.0',
        authors: 'Katton',
        description: 'Template verification fixture',
        signing: modLoader !== 'paper',
        dependencies: [],
      }
      const generated = await generateZip(info)
      const zip = await JSZip.loadAsync(await generated.arrayBuffer())
      const root = 'verification_pack/'
      const read = async (path: string) => {
        const file = zip.file(`${root}${path}`)
        assert.ok(file, `missing ${modLoader}/${minecraftVersion} ${path}`)
        return file.async('string')
      }

      const build = await read('build.gradle.kts')
      const moduleName = modLoader === 'paper' ? 'paper' : modLoader
      assert.ok(build.includes(`katton-${moduleName}:` + '${kattonVersion}'))
      assert.match(build, /configuredDirectories\("kattonWorldScriptsDir"\)/)
      assert.match(await read('settings.gradle.kts'), /maven\("https:\/\/nexus\.mcfpp\.top\/repository\/maven-public\/"\)/)

      if (modLoader === 'fabric') {
        assert.match(build, /id\("net\.fabricmc\.fabric-loom"\) version "1\.15-SNAPSHOT"/)
        assert.match(build, /minecraft\("com\.mojang:minecraft:\$\{minecraftVersion\}"\)/)
        assert.match(build, new RegExp(platformVersions[minecraftVersion].fabricApi.replaceAll('.', '\\.').replace('+', '\\+')))
      } else if (modLoader === 'neoforge') {
        assert.match(build, /id\("net\.neoforged\.moddev"\) version "2\.0\.141"/)
        assert.match(build, new RegExp(`version = "${platformVersions[minecraftVersion].neoForge.replaceAll('.', '\\.')}"`))
      } else {
        assert.match(build, new RegExp(platformVersions[minecraftVersion].paper.replaceAll('.', '\\.').replace('+', '\\+')))
      }

      assert.match(await read('world_scripts/Main.kt'), /@ServerScriptEntrypoint\(ServerPhase\.READY\)/)
      if (modLoader === 'paper') {
        assert.equal(zip.file(`${root}world_scripts/ClientMain.kt`), null)
      } else {
        assert.match(await read('world_scripts/ClientMain.kt'), /@ClientScriptEntrypoint\(ClientPhase\.JOINED\)/)
      }

      const worldManifest = JSON.parse(await read('world_scripts/manifest.json'))
      const globalManifest = JSON.parse(await read('global_scripts/manifest.json'))
      assert.deepEqual(worldManifest.dependencies, [])
      assert.deepEqual(globalManifest.dependencies, [])
      assert.match(await read('gradle.properties'), /kattonWorldScriptsDir=/)
    }
  }

  console.log('Verified Katton 0.5.0 and 0.4.0 templates for Fabric, NeoForge, and Paper on both Minecraft targets.')
}

main().catch(error => {
  console.error(error)
  process.exitCode = 1
})
