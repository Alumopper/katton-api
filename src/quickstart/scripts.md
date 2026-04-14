# Scripts

Katton provides two types of scripts: **Global Scripts** and **Packed Scripts**. Global scripts are executed once when the mod is loaded and are ideal for registering content and setting up global event listeners; however, they do not support hot-reloading. Packed scripts are executed every time a datapack or resourcepack is reloaded, making them perfect for content that requires frequent updates. Both global and packed scripts support client-side and server-side execution.

## Global Scripts

Global scripts are located in the `katton` folder within the game's root directory. Each sub-directory under `katton` represents a namespace. Server-side and client-side scripts are placed in the `server_scripts` and `client_scripts` subdirectories, respectively. 

Global scripts are compiled and executed only once when Katton is loaded, and thus do not support hot-reloading. You must restart the game to apply any changes made to these scripts.

## Packed Scripts

Packed scripts are contained within resourcepacks or datapacks. Resourcepacks house client-side scripts, while datapacks house server-side scripts. Packed scripts are executed whenever resourcepacks or datapacks are reloaded, enabling hot-reloading. Using `F3 + T` to reload resourcepacks or the `/reload` command to reload datapacks will apply your changes instantly without requiring a game restart.

### Client-Side Scripts

Packed client-side scripts are located in the `assets/<namespace>/client_scripts` directory of a resourcepack. They can be reloaded by pressing `F3 + T` in-game. Client-side scripts have access to client-only classes and APIs, such as those for rendering and client events. 

The following example demonstrates a client-side script that renders a custom HUD overlay:

<!--@include: ../example/quickstart/scripts/01.md-->

>[!Caution]
> Katton does not validate API usage across sides. Never attempt to access server-only APIs in client-side scripts, or client-only APIs in server-side scripts, as this will likely result in a game crash.

### Server-Side Scripts

Packed server-side scripts are located in the `data/<namespace>/server_scripts` directory of a datapack and can be reloaded via the `/reload` command. Server-side scripts can access server-only classes and APIs, such as commands and server events. For datapack developers, server-side scripts are likely the most familiar aspect of Katton.

The following example shows a server-side script that sends a welcome message to players upon joining:

<!--@include: ../example/quickstart/scripts/02.md-->

In this example, we subscribe to the [`onPlayerJoin`](../api/fabric/event/ServerPlayerEvent.html#serverplayerevent-onplayerjoin) event to send a greeting to the player. We also utilize the [`once`](../api/common/KattonAPI.md#once) API to determine if the player is joining for the first time, allowing us to tailor the message accordingly.

