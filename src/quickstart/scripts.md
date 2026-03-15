# Scripts

In Katton, we provide two types of scripts: **Global Scripts** and **Packed Scripts**. Global scripts are executed once when the mod is loaded and are ideal for registering content and setting up global event listeners, but they are not hot-reloadable. Packed scripts are executed every time when the datapack or resourcepack is reloaded, making them perfect for content that needs to be hot-reloadable. Both global scripts and packed scripts support client and server side execution.

## Global Scripts

Global scripts are located in the `katton` folder under the game's root directory. Each directory under `katton` represents a namespace. Server side scripts and client side scripts are placed in the `server_scripts` and `client_scripts` subdirectories respectively. 

Global scripts will be compile and execute only once when Katton mod is loaded, so they are not hot-reloadable. You need to restart game to see the changes.

## Packed Scripts

Packed scripts are located in resourcepacks or datapacks. Resourcepacks contain client side scripts, while datapacks contain server side scripts. Packed scripts are executed when resourcepacks or datapacks are reloaded, so they are hot-reloadable. Using F3 to reload resourcepacks or `reload` command to reload datapacks will apply any changes you made to packed scripts without restarting the game.

### Client Side Scripts

Packed client side scripts are located in the `assets/<namespace>/client_scripts` directory of a resourcepack, so you can reload them by pressing F3+T in game. Client side scripts can access client only classes and APIs, such as rendering and client events. 

Here is a simple example of a client side script that renders a custom HUD overlay:

```kotlin
import top.katton.api.HudRenderLayer
import top.katton.api.clientFps
import top.katton.api.clientPos
import top.katton.api.clientScreenName
import top.katton.api.clientTell
import top.katton.api.drawHudText
import top.katton.api.drawHudTexture
import top.katton.api.fillHudRect
import top.katton.api.once
import top.katton.api.registerHudRenderer
import top.katton.api.unregisterHudRenderer

fun hudRenderTestMain() {

    unregisterHudRenderer("katton:test:hud")

    registerHudRenderer("katton:test:hud", HudRenderLayer.FOREGROUND, 20) { ctx ->
        fillHudRect(ctx, 6, 6, 258, 64, 0xAA000000.toInt())
        fillHudRect(ctx, 8, 8, 256, 62, 0x66002244)

        drawHudText(ctx, "Katton HUD Render Test", 14, 14, 0xFFE8F1FF.toInt(), true)
        drawHudText(ctx, "FPS: ${clientFps() ?: -1}", 14, 28, 0xFF9BD5FF.toInt(), false)
        drawHudText(ctx, "Screen: ${clientScreenName() ?: "In-World"}", 14, 40, 0xFFB5FFC5.toInt(), false)

        val p = clientPos()
        if (p != null) {
            drawHudText(ctx, "Pos: %.2f, %.2f, %.2f".format(p.x, p.y, p.z), 14, 52, 0xFFFFD38A.toInt(), false)
        }
    }
    clientTell("[Katton] HUD render test script loaded")
}

val hudRenderTestEntryPoint = hudRenderTestMain()
```

>[!Caution]
> Katton won't check for API misuse. Never try to access server only APIs in client side scripts, or access client only APIs in server side scripts, excepted you want to crash your game.

### Server Side Scripts

Packed server side scripts are located in the `data/<namespace>/server_scripts` directory of a datapack, so you can reload them by running `reload` command in game. Server side scripts can access server only classes and APIs, such as commands and server events. For datapack developers, server side scripts maybe the most familiar part of Katton.

Here is a simple example of a server side script that send a welcome message to players when they join the game:

```kotlin
ServerPlayerEvent.onPlayerJoin += join@ fun(arg: PlayerArg) {
    val player = arg.player
    val firstSeen = once(key = "welcome:${player.uuid}", namespace = "event_player_lifecycle_demo") {}

    if (firstSeen) {
        tell(player, "[event-demo] Welcome to the server! Enjoy your stay! ")
    } else {
        tell(player, "[event-demo] Welcome back!")
    }
}
```

In this example, we listen to the `onPlayerJoin` event and send a welcome message to the player. We also use the `once` API to check if this is the first time the player has joined the server, and send a different message accordingly.

