# Registry

Adding custom content to the game is the basic functionality of a modding framework. In Katton, you can register new blocks, items, mobeffects and more using Katton Registry API. 

>[!WARNING]
> The registry system in Katton is still under development, and the API may change in the future. 

## Item Registry

<!--@include: ../example/quickstart/registry/01.md-->

>[!CAUTION]
> When a minecraft client connects to a server, it will registry each item registered by the server. However, only the data components of the item are synchronized to the client, and the logic defined in the item class is not synchronized. Some interaction logic that needs to be executed on the client side may not work properly. 
>
> Block registry has the same problem, and currently we don't have a good solution for this. We are planning to introduce a "global script" system in the future like kubejs.

## Block Registry

<!--@include: ../example/quickstart/registry/02.md-->

## MobEffect Registry

<!--@include: ../example/quickstart/registry/03.md-->

## Command Registry

<!--@include: ../example/quickstart/registry/04.md-->

---

We are working hard to enable more content types registry.