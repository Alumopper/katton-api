# Get Started

## Environment Setup

Katton only supports Minecraft 26.1 and above, and requires Java 25 or higher. Currently, Katton only supports the Fabric modloader, but we are planning to support Forge/Neoforge in the future.

We recommend using IntelliJ IDEA for development, as it has excellent support for Kotlin and Minecraft modding. You can also use other IDEs that support Kotlin, but you may need to configure them manually.

Katton will compile and execute kotlin scripts in all datapacks, so your project structure should follow the standard Minecraft datapack format. We also recommend using a build tool like Gradle or Maven to manage your dependencies. The quickest way to get started is to clone the [Katton Example](https://github.com/Alumopper/Katton-Example) repository and open it in your IDE. This example project is set up with all the necessary dependencies and configurations to start modding with Katton right away.

## Creating Your First Mod

Although we call it "Kotlin Scripts", they are actually normal kotlin files end with `.kt` instead of `.kts` for better IDE support. Under your namespace folder, create a new directory named `scripts`. Katton will automatically compile and execute all `.kt` files in this directory as scripts.

If you are using the example project, remember to copy necessary dependencies jar to `libs` folder. It basically includes minecraft jar which can be found in your `version` folder in your `.minecraft` directory, and the Katton mod jar. You may also copy any other mod jar you want to use in your scripts. They will be used to provide code completion and type checking in your IDE.

As your first script, we will send a "Hello Katton" message to the player when they join the game. Create a new file named `hello.kt` in the `scripts` directory with the following content:

<!--@include: ../example/quickstart/get-started/01.md-->

Launch the game with the Katton mod and join your world. You should see a "Hello Katton" message in the chat when you join. Congratulations, you've just created your first mod with Katton!

Change the message in `hello.kt` to something else, save the file, and use `reload` command, you shold see the new message when you join again without restarting the game. This is the power of hot-reloadable scripts!

## Debugging

Katton supports debugging datapack Kotlin scripts through standard JVM remote debugging.

1. Start Minecraft (or the dedicated server) with a debug agent, for example:

   <!--@include: ../example/quickstart/get-started/02.md-->

2. In IntelliJ IDEA, create an **Attach to remote JVM** run configuration and connect to the same host and port.
3. Set breakpoints in the actual datapack script file (for example, `data/<namespace>/scripts/*.kt`).
4. Enjoy debugging your scripts with the IDE's standard debugging tools.
