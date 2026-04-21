# Get Started

## Environment Setup

Katton only supports Minecraft 26.1 and above, and requires Java 25 or higher. Katton supports both Fabric and Neoforge mod loaders. Make sure you have the appropriate mod loader installed and set up for your Minecraft version.

We recommend using IntelliJ IDEA for development, as it has excellent support for Kotlin and Minecraft modding. You can also use other IDEs that support Kotlin, but you may need to configure them manually.

Katton will compile and execute kotlin scripts in all datapacks as [server scripts](./scripts.md#server-side-scripts), and kotlin scripts in all resourcepacks as [client scripts](./scripts.md#client-side-scripts). The quickest way to get started is to clone the [Katton Example](https://github.com/Alumopper/Katton-Example) repository and open it in your IDE. This example project is set up with all the necessary dependencies and configurations to start modding with Katton right away.

## Creating Your First Script

Although we call it "Kotlin Scripts", they are actually normal kotlin files end with `.kt` instead of `.kts` for better IDE support. We assume you have cloned the example project and opened it in your IDE. The example project contains two modules: `fabric` and `neoforge`, which are set up for Fabric and Neoforge mod loaders respectively. Choose either module to work with based on your mod loader of choice. In both modules you will find four source folders: `client-scripts`, `server-scripts`, `global-client-scripts`, and `global-server-scripts`. To make things simple, we only use `server-scripts` in this tutorial.

<ImageCaptionZoom
   src="/docimg/1.png"
   alt="Script Folders"
   caption="Script folders in the example project"
   figure-width="400px"
/>

Before we start, we need to include Minecraft source code in our project. The easiest way is to open the `version` folder in your Minecraft game folder, find the correct version folder and open it where you will find a jar file. For example, I'm using Minecraft 26.1-Fabric, so I will open the `26.1-Fabric` folder, and copy the jar file into the `lib` folder in our project. In this way we will include Minecraft source code for server sides, and client source code is still missing, but for this tutorial server source code is enough.  

As your first script, we will send a "Hello Katton" message to the player when they join the game. Create a new file named `hello.kt` in the `server-scripts` directory with the following content:

<!--@include: ../example/quickstart/get-started/01.md-->

For now, we are justing writing scipts in a independent project, and we need to copy these scripts into our datapack to ensure Katton can find and execute them. It can be a tedious task to copy the scripts manually every time we make a change, so the example project includes a convenient Gradle task to automate this process.

Open `build.gradle.kts`, edit the following lines: 

```kt
//In this project we only use server scripts, so we only need to set serverScriptsTargetDir, and other three can be null
val clientScriptsTargetDir: File? = null
val serverScriptsTargetDir: File? = file("path\\to\\datapack\\data\\test\\scripts")
val gClientScriptsTargetDir: File? = null
val gServerScriptsTargetDir: File? = null
```

Make sure to replace `path\\to\\datapack` with the actual path to your datapack. Then click the gradle button at the right side of you IDEA (looks like an elephant!), find and run the `copyGameScripts` Gradle task, and all the scripts will be in their right places. It's worth noting that this task will actually make a link to the original script files instead of copying them, so any changes you make to the scripts in the example project will be reflected in the datapack immediately without needing to run the task again. This allows for a much smoother development experience.

<ImageCaptionZoom
   src="/docimg/image-3.png"
   alt="Script Folders"
   caption="You can find the task here!"
   figure-width="400px"
/>

Now, launch the game with the Katton mod and join your world. You should see a "Hello Katton" message in the chat when you join. Congratulations! You've just created your first script with Katton!

Change the message in `hello.kt` to something else, save the file, and use `reload` command, you should see the new message when you join again without restarting the game. This is the power of hot-reloadable scripts!

## Debugging

Katton supports debugging datapack Kotlin scripts through standard JVM remote debugging.

1. Start Minecraft (or the dedicated server) with a debug agent, for example:

   <!--@include: ../example/quickstart/get-started/02.md-->

2. In IntelliJ IDEA, create an **Attach to remote JVM** run configuration and connect to the same host and port.

<ImageCaptionZoom
   src="/docimg/image-4.png"
   alt="Script Folders"
   caption="First click here"
   figure-width="400px"
/>

<ImageCaptionZoom
   src="/docimg/image-5.png"
   alt="Script Folders"
   caption="And then here!"
   figure-width="400px"
/>

3. Set breakpoints in the script file.
4. Enjoy debugging your scripts with the IDE's standard debugging tools.
