import JSZip from 'jszip'

export interface PackInfo {
  modLoader: 'fabric' | 'neoforge'
  kattonVersion: string
  packId: string
  packName: string
  packVersion: string
  authors: string
  description: string
}

const WRAPPER_JAR_URL =
  'https://raw.githubusercontent.com/FabricMC/fabric-example-mod/refs/heads/master/gradle/wrapper/gradle-wrapper.jar'

// ─── Build script templates ────────────────────────────────────────────────

const SYNC_TASK = `fun syncDirectoryAsHardLinks(sourceDir: File, targetDir: File) {
    val sourceRoot = sourceDir.toPath().toAbsolutePath().normalize()
    val targetRoot = targetDir.toPath().toAbsolutePath().normalize()

    require(Files.exists(sourceRoot) && Files.isDirectory(sourceRoot)) {
        "Source directory does not exist: \$sourceRoot"
    }

    Files.createDirectories(targetRoot)

    Files.walk(sourceRoot).use { stream ->
        stream.forEach { sourcePath ->
            if (sourcePath == sourceRoot) return@forEach

            val relativePath = sourceRoot.relativize(sourcePath)
            val targetPath = targetRoot.resolve(relativePath.toString())

            when {
                Files.isDirectory(sourcePath) -> Files.createDirectories(targetPath)
                Files.isRegularFile(sourcePath) -> {
                    Files.createDirectories(targetPath.parent)
                    if (Files.exists(targetPath)) {
                        if (Files.isSameFile(sourcePath, targetPath)) return@forEach
                        Files.deleteIfExists(targetPath)
                    }
                    Files.createLink(targetPath, sourcePath)
                }
            }
        }
    }

    fun pruneStaleEntries(targetPath: Path) {
        if (!Files.exists(targetPath)) return

        Files.list(targetPath).use { stream ->
            stream.forEach { child ->
                val relativePath = targetRoot.relativize(child)
                val sourcePath = sourceRoot.resolve(relativePath.toString())

                if (!Files.exists(sourcePath)) {
                    if (Files.isDirectory(child)) {
                        child.toFile().deleteRecursively()
                    } else {
                        Files.deleteIfExists(child)
                    }
                    return@forEach
                }

                if (Files.isDirectory(child)) {
                    pruneStaleEntries(child)
                    if (Files.list(child).use { it.findAny().isEmpty } && !Files.isDirectory(sourcePath)) {
                        child.toFile().deleteRecursively()
                    }
                }
            }
        }
    }

    pruneStaleEntries(targetRoot)
}

tasks.register("copyWorldScripts") {
    group = "distribution"
    description = "Mirrors world_scripts to the configured target path using hard links."
    doLast {
        worldScriptsTargetDir.forEach { syncDirectoryAsHardLinks(file("world_scripts"), it) }
    }
}

tasks.register("copyGlobalScripts") {
    group = "distribution"
    description = "Mirrors global_scripts to the configured target path using hard links."
    doLast {
        globalScriptsTargetDir.forEach { syncDirectoryAsHardLinks(file("global_scripts"), it) }
    }
}

tasks.register("copyGameScripts") {
    group = "distribution"
    description = "Mirrors world_scripts and global_scripts contents to their configured target paths."
    dependsOn("copyWorldScripts", "copyGlobalScripts")
}
`

function fabricBuildGradle(info: PackInfo): string {
  return `import java.nio.file.Files
import java.nio.file.Path

plugins {
    id("org.jetbrains.kotlin.jvm") version "2.3.0"
    id("fabric-loom") version "1.12-SNAPSHOT"
}

val kattonVersion = "${info.kattonVersion}"
val worldScriptsTargetDir: List<File> = listOf(
    file("/path/to/your/world/kattonpacks/${info.packId}/")
)
val globalScriptsTargetDir: List<File> = listOf()

repositories {
    mavenLocal()
    mavenCentral()
    maven("https://maven.fabricmc.net/")
    maven("https://libraries.minecraft.net")
    maven("https://nexus.mcfpp.top/repository/maven-public/")
}

dependencies {
    implementation("top.katton:katton-common:\${kattonVersion}")
    implementation("top.katton:katton-fabric:\${kattonVersion}")
    compileOnly(fileTree("lib") {
        include("*.jar")
    })
    compileOnly("com.mojang:brigadier:1.3.10")
    compileOnly("org.joml:joml:1.10.8")
}

kotlin {
    jvmToolchain(25)
    sourceSets.named("main") {
        kotlin.srcDirs("global_scripts", "world_scripts")
    }
}

${SYNC_TASK}`
}

function neoforgeBuildGradle(info: PackInfo): string {
  return `import java.nio.file.Files
import java.nio.file.Path

plugins {
    id("org.jetbrains.kotlin.jvm") version "2.3.0"
}

val kattonVersion = "${info.kattonVersion}"
val worldScriptsTargetDir: List<File> = listOf(
    file("/path/to/your/world/kattonpacks/${info.packId}/")
)
val globalScriptsTargetDir: List<File> = listOf()

repositories {
    mavenLocal()
    mavenCentral()
    maven("https://maven.neoforged.net/releases")
    maven("https://libraries.minecraft.net")
    maven("https://nexus.mcfpp.top/repository/maven-public/")
}

dependencies {
    implementation("top.katton:katton-common:\${kattonVersion}")
    implementation("top.katton:katton-neoforge:\${kattonVersion}")
    compileOnly(fileTree("lib") {
        include("*.jar")
    })
    compileOnly("com.mojang:brigadier:1.3.10")
    compileOnly("org.joml:joml:1.10.8")
}

kotlin {
    jvmToolchain(25)
    sourceSets.named("main") {
        kotlin.srcDirs("global_scripts", "world_scripts")
    }
}

${SYNC_TASK}`
}

function settingsGradle(): string {
  return `pluginManagement {
    repositories {
        mavenCentral()
        gradlePluginPortal()
    }
}
plugins {
    id 'org.gradle.toolchains.foojay-resolver-convention' version '0.8.0'
}

rootProject.name = "katton-template"
`
}

function gradleWrapperProperties(loader: 'fabric' | 'neoforge'): string {
  const distributionUrl =
    loader === 'fabric'
      ? 'https\\://services.gradle.org/distributions/gradle-8.13-bin.zip'
      : 'https\\://services.gradle.org/distributions/gradle-9.0-bin.zip'
  return `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=${distributionUrl}
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`
}

function gradlewScript(): string {
  // Use Array.join to avoid template literal issues with shell syntax (#, nested ${})
  const L = (s: string) => s
  return [
    '#!/bin/sh',
    '',
    '#',
    '# Copyright \u00a9 2015-2021 the original authors.',
    '#',
    '# Licensed under the Apache License, Version 2.0 (the "License");',
    '# you may not use this file except in compliance with the License.',
    '# You may obtain a copy of the License at',
    '#',
    '#      https://www.apache.org/licenses/LICENSE-2.0',
    '#',
    '# Unless required by applicable law or agreed to in writing, software',
    '# distributed under the License is distributed on an "AS IS" BASIS,',
    '# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
    '# See the License for the specific language governing permissions and',
    '# limitations under the License.',
    '#',
    '',
    '##############################################################################',
    '#',
    '#   Gradle start up script for POSIX generated by Gradle.',
    '#',
    '##############################################################################',
    '',
    '# Attempt to set APP_HOME',
    '# Resolve links: $0 may be a link',
    'app_path=$0',
    'while',
    L('    APP_HOME=${app_path%"${app_path##*/}"}  # leaves a trailing /; empty if no leading path'),
    L('    [ -h "$app_path" ]'),
    'do',
    L('    ls=$( ls -ld -- "$app_path" )'),
    L("    link=${ls#*' -> '}"),
    L('    case $link in'),
    L('      /*)   app_path=$link ;;'),
    L('      *)    app_path=$APP_HOME$link ;;'),
    '    esac',
    'done',
    L('APP_HOME=$( cd "${APP_HOME:-./}" > /dev/null && pwd -P ) || exit'),
    '',
    'APP_NAME="Gradle"',
    L('APP_BASE_NAME=${0##*/}'),
    '',
    '# Use the maximum available, or set MAX_FD != -1 to use that value.',
    'MAX_FD=maximum',
    '',
    'warn () {',
    L('    echo "$*"'),
    '} >&2',
    '',
    'die () {',
    '    echo',
    L('    echo "$*"'),
    '    echo',
    '    exit 1',
    '} >&2',
    '',
    "# OS specific support (must be 'true' or 'false').",
    'cygwin=false',
    'msys=false',
    'darwin=false',
    'nonstop=false',
    L('case "$( uname )" in'),
    '  CYGWIN* )         cygwin=true  ;;',
    '  Darwin* )         darwin=true  ;;',
    '  MSYS* | MINGW* )  msys=true    ;;',
    '  NonStop* )        nonstop=true ;;',
    'esac',
    '',
    'CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar',
    '',
    '',
    '# Determine the Java command to use to start the JVM.',
    L('if [ -n "$JAVA_HOME" ] ; then'),
    L('    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then'),
    L('        JAVACMD=$JAVA_HOME/jre/sh/java'),
    '    else',
    L('        JAVACMD=$JAVA_HOME/bin/java'),
    '    fi',
    L('    if [ ! -x "$JAVACMD" ] ; then'),
    L('        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME'),
    '',
    'Please set the JAVA_HOME variable in your environment to match the',
    'location of your Java installation."',
    '    fi',
    'else',
    '    JAVACMD=java',
    '    if ! command -v java >/dev/null 2>&1 ; then',
    '        die "ERROR: JAVA_HOME is not set and no \'java\' command could be found in your PATH.',
    '',
    'Please set the JAVA_HOME variable in your environment to match the',
    'location of your Java installation."',
    '    fi',
    'fi',
    '',
    '# Increase the maximum file descriptors if we can.',
    L('if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then'),
    L('    case $MAX_FD in'),
    '      max*)',
    L('        MAX_FD=$( ulimit -H -n ) ||'),
    '            warn "Could not query maximum file descriptor limit"',
    '      ;;',
    '    esac',
    L('    case $MAX_FD in'),
    "      '' | soft) :;;",
    '      *)',
    L('        ulimit -n "$MAX_FD" ||'),
    L('            warn "Could not set maximum file descriptor limit to $MAX_FD"'),
    '      ;;',
    '    esac',
    'fi',
    '',
    '# Collect all arguments for the java command, stacking the sun.java.command',
    '# property to handle the JVM internal representation of special characters.',
    'set -- \\',
    L('        "-Dorg.gradle.appname=$APP_BASE_NAME" \\'),
    L('        -classpath "$CLASSPATH" \\'),
    '        org.gradle.wrapper.GradleWrapperMain \\',
    L('        "$@"'),
    '',
    '# Stop when "xargs -0" is not available.',
    'if ! command -v xargs >/dev/null 2>&1',
    'then',
    '    die "xargs is not available"',
    'fi',
    '',
    L('exec "$JAVACMD" "$@"'),
  ].join('\n')
}

function gradlewBatScript(): string {
  return `@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

set CLASSPATH=%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar

@rem Execute Gradle
"%JAVA_HOME%/bin/java.exe" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*

:end
@rem End local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" endlocal

:omega
`
}

function manifestJson(info: PackInfo): string {
  const authors = info.authors
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
  return JSON.stringify(
    {
      id: info.packId,
      name: info.packName,
      version: info.packVersion,
      description: info.description,
      authors,
      enabled: true,
    },
    null,
    2
  )
}

function mainKt(info: PackInfo): string {
  return `import top.katton.api.ServerScriptEntrypoint

@ServerScriptEntrypoint
fun init() {
    println("Hello from ${info.packName}!")
}
`
}

// ─── Version fetching ──────────────────────────────────────────────────────

export interface KattonVersion {
  tag: string
  prerelease: boolean
}

// Hardcoded fallback when GitHub API is unreachable.
// Updated: 2026-05-12
const FALLBACK_VERSIONS: KattonVersion[] = [
  { tag: '0.2.0', prerelease: false },
  { tag: '0.2.0b5', prerelease: true },
  { tag: '0.2.0b3', prerelease: true },
  { tag: '0.1.3b1', prerelease: true },
  { tag: '0.1.1', prerelease: true },
  { tag: '0.1', prerelease: true },
]

const GITHUB_RELEASES_API =
  'https://api.github.com/repos/Alumopper/Katton/releases?per_page=30'

/**
 * Extract the base version by stripping pre-release suffix.
 * "0.2.0b5" → "0.2.0",  "0.2.0" → "0.2.0",  "0.1.3b1" → "0.1.3"
 */
function baseVersion(tag: string): string {
  return tag.replace(/b\d+$/, '')
}

/**
 * Sort tags descending (newest first). Handles semver + pre-release suffixes.
 */
function sortTagsDesc(a: string, b: string): number {
  const pa = a.split(/[.b-]/).map(Number).filter(n => !isNaN(n))
  const pb = b.split(/[.b-]/).map(Number).filter(n => !isNaN(n))
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const va = pa[i] ?? 0
    const vb = pb[i] ?? 0
    if (va !== vb) return vb - va
  }
  return a.localeCompare(b)
}

function filterAndSort(versions: KattonVersion[]): KattonVersion[] {
  // Group by base version
  const groups = new Map<string, KattonVersion[]>()
  for (const v of versions) {
    const base = baseVersion(v.tag)
    if (!groups.has(base)) groups.set(base, [])
    groups.get(base)!.push(v)
  }

  // For each base version group:
  // - If a stable (non-prerelease) exists → only keep stable versions
  // - Otherwise → keep all pre-releases
  const filtered: KattonVersion[] = []
  for (const [, group] of groups) {
    const stables = group.filter(v => !v.prerelease)
    if (stables.length > 0) {
      filtered.push(...stables)
    } else {
      filtered.push(...group)
    }
  }

  filtered.sort((a, b) => sortTagsDesc(a.tag, b.tag))
  return filtered
}

export async function fetchKattonVersions(): Promise<KattonVersion[]> {
  // Try GitHub API first
  try {
    const res = await fetch(GITHUB_RELEASES_API)
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data)) {
        const remote: KattonVersion[] = data
          .map((r: { tag_name: string; prerelease: boolean }) => ({
            tag: r.tag_name,
            prerelease: r.prerelease,
          }))
          .filter(v => v.tag)

        if (remote.length > 0) {
          return filterAndSort(remote)
        }
      }
    }
  } catch {
    // GitHub API unreachable — use fallback
  }

  return filterAndSort(FALLBACK_VERSIONS)
}

// ─── Zip generation ─────────────────────────────────────────────────────────

export async function generateZip(
  info: PackInfo,
  onProgress?: (msg: string) => void
): Promise<Blob> {
  const zip = new JSZip()
  const rootDir = `${info.packId}/`

  // 1. Build gradle
  onProgress?.('Generating build.gradle.kts...')
  const buildGradle =
    info.modLoader === 'fabric'
      ? fabricBuildGradle(info)
      : neoforgeBuildGradle(info)
  zip.file(`${rootDir}build.gradle.kts`, buildGradle)

  // 2. Settings
  zip.file(`${rootDir}settings.gradle`, settingsGradle())

  // 3. Gradle wrapper properties
  zip.file(
    `${rootDir}gradle/wrapper/gradle-wrapper.properties`,
    gradleWrapperProperties(info.modLoader)
  )

  // 4. Gradlew scripts
  zip.file(`${rootDir}gradlew`, gradlewScript())
  zip.file(`${rootDir}gradlew.bat`, gradlewBatScript())

  // 5. Gradle wrapper jar (fetch from remote)
  onProgress?.('Downloading Gradle wrapper...')
  try {
    const jarRes = await fetch(WRAPPER_JAR_URL)
    if (jarRes.ok) {
      const jarBuffer = await jarRes.arrayBuffer()
      zip.file(`${rootDir}gradle/wrapper/gradle-wrapper.jar`, jarBuffer, {
        binary: true,
      })
    }
  } catch {
    // Wrapper jar fetch failed — still generate, user can run `gradle wrapper` manually
    console.warn('Failed to download gradle-wrapper.jar')
  }

  // 6. Manifest
  onProgress?.('Generating manifest.json...')
  zip.file(`${rootDir}manifest.json`, manifestJson(info))

  // 7. Main.kt
  onProgress?.('Generating Main.kt...')
  zip.file(`${rootDir}src/main/kotlin/Main.kt`, mainKt(info))

  // 8. .gitignore
  zip.file(`${rootDir}.gitignore`, `/.gradle/\n/build/\n/run/\n/lib/\n`)

  // 9. README
  onProgress?.('Generating README...')
  zip.file(
    `${rootDir}README.md`,
    readmeTemplate(info)
  )

  onProgress?.('Packing zip...')
  const blob = await zip.generateAsync({ type: 'blob' })
  return blob
}

function readmeTemplate(info: PackInfo): string {
  const loaderName = info.modLoader === 'fabric' ? 'Fabric' : 'NeoForge'

  return `# ${info.packName}

> Generated by [Katton Template Generator](https://katton.alumopper.top)

A Katton script pack for ${loaderName}.

## Getting Started

1. Copy the official Minecraft jar (matching your Minecraft version) into \`lib/\`
2. Open this project in IntelliJ IDEA
3. Edit \`build.gradle.kts\` to configure \`worldScriptsTargetDir\` (point it to your world's \`kattonpacks/${info.packId}/\` directory)
4. Run the \`copyGameScripts\` Gradle task to link your scripts into the game

## Pack Info

| Field | Value |
|---|---|
| ID | \`${info.packId}\` |
| Name | ${info.packName} |
| Version | ${info.packVersion} |
| Katton | ${info.kattonVersion} |
| Loader | ${loaderName} |

## Development

Write your Kotlin scripts in the \`world_scripts/\` directory. Use:

- \`@ServerScriptEntrypoint\` — runs on server
- \`@ClientScriptEntrypoint\` — runs on client

Run \`/katton reload\` in-game to hot-reload your scripts without restarting.
`
}
