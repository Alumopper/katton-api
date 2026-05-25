# Katton Introduction

Welcome to Katton. This wiki contains documentation and guides for using the Katton modding framework. Whether you're a beginner looking to get started or an experienced modder seeking advanced tips, you'll find valuable information here.

## What is Katton?

Katton is a powerful modding framework for Minecraft that allows you to use Kotlin scripts to create and modify game content. With hot-reloadable scripts, you can see your changes in real-time without needing to restart the game.

Katton supports both Fabric and NeoForge, as well as Paper plugin servers. We are trying to keep the API as consistent as possible between the platforms, but there may be some differences in available events and features. Paper is server-only, so client-side features like rendering and the pack UI are not available there.

## Why Katton?

- **Ease of Use**: Katton's intuitive API and hot-reload feature make it easy for modders of all skill levels to create and test their mods quickly.
- **Flexibility**: With Kotlin's powerful features, you can create complex mods that interact with Minecraft in unique ways.
- **Performance**: Katton uses Kotlin Scripts to directly interact with Java objects during the runtime of Minecraft, ensuring high performance and seamless integration.
- **Powerful API**: Katton provides a comprehensive API that allows you to access and modify many parts of the game: events, commands, registries, datapack calls, rendering, and runtime injection.
- **Modify Existing Content**: Beyond adding new content, you can change vanilla blocks, items, recipes, loot tables, entity attributes, and villager trades — see the [Modify Content](../guide/modify/) guide.
- **In-Game Management**: Manage your script packs through a built-in GUI (press K!), toggle packs on/off, and monitor registries with diagnostic commands — all without leaving the game.

## Where to Go Next

<div class="next-card-grid">
  <a class="next-card" href="./get-started.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M8 7h8M8 11h7"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Get Started</strong>
      <span>Write your first pack</span>
    </span>
  </a>
  <a class="next-card" href="../guide/scripts.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/><path d="M8 4v16M16 4v10"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Script Packs</strong>
      <span>Learn pack layout and manifest fields</span>
    </span>
  </a>
  <a class="next-card" href="../platform/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M12 3v18M5 8h14M5 16h14"/><path d="M7 4c2 2 3 5 3 8s-1 6-3 8M17 4c-2 2-3 5-3 8s1 6 3 8"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Platforms</strong>
      <span>Compare Fabric, NeoForge, and Paper</span>
    </span>
  </a>
  <a class="next-card" href="../architecture/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 18V6l8-4 8 4v12l-8 4-8-4Z"/><path d="M12 22V12M4 6l8 6 8-6"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Architecture</strong>
      <span>Understand reload and client sync internals</span>
    </span>
  </a>
</div>

## I don't know Kotlin

Don't worry! Kotlin is a modern programming language that is easy to learn, especially if you have experience with Java or other C-style languages. There are plenty of resources available online to help you get started with Kotlin, including the official [Kotlin documentation](https://kotlinlang.org/docs/home.html) and various tutorials on platforms like YouTube and Udemy.

---

In the following sections, you'll find guides on how to get started with Katton, as well as detailed API documentation and examples to help you create your own scripts.
