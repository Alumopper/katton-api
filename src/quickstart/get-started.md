# Get Started

## Environment Setup

Katton only supports Minecraft 26.1 and above, and requires Java 25 or higher. Katton supports both Fabric and Neoforge mod loaders. Make sure you have the appropriate mod loader installed and set up for your Minecraft version.

We recommend using IntelliJ IDEA for development, as it has excellent support for Kotlin and Minecraft modding. You can also use other IDEs that support Kotlin, but you may need to configure them manually.

Katton loads Kotlin scripts from script packs in the `kattonpacks/` directory (see [Scripts](./scripts.md) for details). The quickest way to get started is to clone the [Katton Example](https://github.com/Alumopper/Katton-Example) repository and open it in your IDE. This example project is set up with all the necessary dependencies and configurations to start modding with Katton right away.

## Creating Your First Script

Although we call it "Kotlin Scripts", they are actually normal kotlin files ending with `.kt` instead of `.kts` for better IDE support. We assume you have cloned the example project and opened it in your IDE. The example project contains two modules: `fabric` and `neoforge`, which are set up for Fabric and Neoforge mod loaders respectively. Choose either module to work with based on your mod loader of choice. In both modules you will find up to four source folders:

| Folder | Purpose |
|---|---|
| `world_scripts/` | World-specific scripts (hot-reloadable) |
| `global_scripts/` | Scripts loaded once at startup (no hot reload) |

To make things simple, we'll only use `world_scripts/` in this tutorial.

<ImageCaptionZoom
   src="/docimg/1.png"
   alt="Script Folders"
   caption="Script folders in the example project"
   figure-width="400px"
/>

Before we start, we need to include Minecraft source code in our project for IDE code completion. The easiest way is to open the `versions` folder in your Minecraft game directory, find the correct version folder, and copy the jar file inside into the `lib/` folder of the example project. For example, if you're using Minecraft 26.1-Fabric, go to the `26.1-Fabric` folder and copy its jar to `lib/`. This gives us minecraft source code. You may still need to manually add some dependencies if you see some classes not found, but most of the common ones should work out of the box.

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
  "enabled": true
}
```

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

> You can also use `/reload` (vanilla) for server-only scripts, or `F3 + T` for client scripts. But `/katton reload` handles both at once and shows a visual progress bar so you always know what's happening. Check out the [Commands](commands.md) page for all built-in commands.

## Debugging

Katton supports debugging script pack Kotlin scripts through standard JVM remote debugging.

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
