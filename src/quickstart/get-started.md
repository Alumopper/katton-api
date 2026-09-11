# Get Started

<div class="instruction-line">

## Environment Setup

Katton currently targets Minecraft 26.1.2 and 26.2 and requires Java 25 or higher. Katton supports Fabric and NeoForge mod loaders, as well as Paper plugin servers. Make sure you have the appropriate mod loader or plugin environment installed and set up for your exact Minecraft version.

> [!NOTE]
> Paper is a server-only platform. If you are developing for Paper, there is no client side, so client scripts, rendering, and the pack UI are not available. Script packs on Paper are loaded from `<serverDir>/kattonpacks/`.

We recommend using IntelliJ IDEA for development, as it has excellent support for Kotlin and Minecraft modding. You can also use other IDEs that support Kotlin, but you may need to configure them manually.

Katton loads Kotlin scripts from script packs in the `kattonpacks/` directory (see [Script Packs](../guide/scripts.md) for details). The quickest way to get started is to generate a template project from [Template](../template/) page and open it in your IDE. This template project is set up with the dependencies and configurations needed to start modding with Katton right away.

## Creating Your First Script

Although we call them "Kotlin scripts", they are normal Kotlin files ending with `.kt` instead of `.kts` for better IDE support. We assume you have cloned the example project and opened it in your IDE. Choose the platform setup that matches your runtime. In the example source layout you will find script source folders such as:

| Folder | Purpose |
|---|---|
| `world_scripts/` | World-specific scripts (hot-reloadable) |
| `global_scripts/` | Process-lifetime bootstrap/ready scripts (not replayed by hot reload) |

To make things simple, we'll only use `world_scripts/` in this tutorial.

<ImageCaptionZoom
   src="/docimg/1.png"
   alt="Script Folders"
   caption="Script folders in the example project"
   figure-width="400px"
/>

Before we start, we need to include Minecraft classes in our project for IDE code completion. The template generator selects Katton and platform dependencies for the chosen Minecraft version. Fabric Loom and NeoForge ModDevGradle supply the matching Minecraft compile classpath automatically. Add external mods or plugins in the generator's dependency section, then provide their API through a Gradle `compileOnly` dependency or another jar in `lib/`.

> [!NOTE]
> For Paper, you don't need to manually include Minecraft source code. Paper provides a lightweight plugin development environment, and you can simply add the following to your `build.gradle.kts` to get access to the Paper API and Minecraft source code:
> ```kts
> plugins {
>     id("io.papermc.paperweight.userdev") version "2.0.0-beta.21"
> }
> ```
> This will set up the necessary dependencies for Paper plugin development.

As your first script, we'll send a "Hello Katton" message to the player when they join the game. Create a new file named `hello.kt` in the `world_scripts/` directory with the following content:

<!--@include: ../example/quickstart/get-started/01.md-->

Right now we're just writing scripts in a standalone project. We need to get these scripts into a location Katton can find. The recommended way is to place them in a **script pack** under your world's `kattonpacks/` directory.

### Create your script pack

Create a new folder inside your world's `kattonpacks/` directory (e.g. `<worldDir>/kattonpacks/my_first_pack/`), and add a `manifest.json`:

```json
{
  "id": "my_first_pack",
  "name": "My First Katton Pack",
  "version": "1.0.0",
  "enabled": true,
  "dependencies": []
}
```

`dependencies` is mandatory in every pack manifest. Declare mod or plugin APIs here before importing their classes; see [Manifest, Dependencies, and Signing](../architecture/manifest.md).

If the `kattonpacks/` directory doesn't exist yet, create it manually or let Katton create it on first reload.

### Configure the Gradle sync task

The example project includes a `copyGameScripts` Gradle task that creates **hard links** from your source folders to your game directory — so any changes you make in the IDE are instantly reflected in the game without running the task again.

>[!NOTE]
> Hard links can only be created on the same drive.
>
> If you create or delete files in the source folders, you may need to run the `copyGameScripts` task again to update the links.

Open `build.gradle.kts` and set the target directories:

```kt
// In this tutorial we only use server scripts, so set the others to null
val worldScriptsTargetDir: List<File> = listOf(
   file("/path/to/your/world/kattonpacks/my_first_pack/")
)
val globalScriptsTargetDir: List<File> = listOf()
```

Make sure to replace the path with the actual path to your world save. Then click the Gradle button on the right side of IntelliJ IDEA (the elephant icon!), find the `copyGameScripts` task, and run it. Your scripts now appear inside your pack as hard links.

<ImageCaptionZoom
   src="/docimg/image-3.png"
   alt=""
   caption="You can find the task here!"
   figure-width="400px"
/>

Now, launch the game with the Katton mod and join your world. You should see a "Hello Katton" message in the chat when you join. Congratulations! You've just created your first script with Katton!

Change the message in `hello.kt` to something else, save the file, and use `/katton reload` command — you should see the new message when you rejoin without restarting the game. This is the power of hot-reloadable scripts!

> You can also use `/reload` (vanilla) for server-side scripts. `F3 + T` reloads Minecraft resources, not Katton scripts. `/katton reload` is the normal Katton workflow and shows a visual progress bar. See [Hot Reload and Debugging](./hot-reload.md) and [Commands](commands.md) for details.

## Debugging

Katton supports debugging script pack Kotlin scripts through standard JVM remote debugging.

> [!TIP]
> For a faster inner loop, enable the [IDE development bridge](./ide.md) and deploy world packs directly from the Katton IDEA plugin. The bridge deploys scripts and streams diagnostics; it is not a debugger, so keep the remote attach below for breakpoints.

1. Start Minecraft (or the dedicated server) with a debug agent, for example:

   <!--@include: ../example/quickstart/get-started/02.md-->

2. In IntelliJ IDEA, create an **Attach to remote JVM** run configuration and connect to the same host and port.

<ImageCaptionZoom
   src="/docimg/image-4.png"
   alt=""
   caption="First click here"
   figure-width="400px"
/>

<ImageCaptionZoom
   src="/docimg/image-5.png"
   alt=""
   caption="And then here!"
   figure-width="400px"
/>

3. Set breakpoints in the actual script pack file (for example, `<worldDir>/kattonpacks/my_first_pack/hello.kt`).
4. Enjoy debugging your scripts with the IDE's standard debugging tools.

</div>
