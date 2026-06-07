# Katton 简介

欢迎使用 Katton。本站包含了使用 Katton 模组开发框架的文档和指南。无论你是想要入门的初学者，还是经验丰富的模组开发者，你都能在这里找到有价值的信息。

<div class="download-card-grid">
  <a class="download-card download-card--modrinth" href="https://modrinth.com/mod/katton" target="_blank" rel="noopener noreferrer">
    <span class="download-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M12 2 3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2Z"/><path d="m8 16 2-8 2 5 2-5 2 8"/></svg>
    </span>
    <span class="download-card__body">
      <strong>在 Modrinth 下载</strong>
      <span>获取最新最热 Katton 版本</span>
    </span>
  </a>
  <a class="download-card download-card--github" href="https://github.com/Alumopper/Katton" target="_blank" rel="noopener noreferrer">
    <span class="download-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M9 19c-4 1.5-4-2.5-5.5-3m11 5v-3.5c0-1 .1-1.4-.5-2 2.9-.3 6-1.4 6-6A4.7 4.7 0 0 0 18.7 6c.1-.4.5-1.8-.1-3.5 0 0-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6.5 0C6 2.2 4.9 2.5 4.9 2.5 4.3 4.2 4.7 5.6 4.8 6A4.7 4.7 0 0 0 3.5 9.5c0 4.6 3.1 5.7 6 6-.6.6-.6 1.2-.5 2V21"/></svg>
    </span>
    <span class="download-card__body">
      <strong>在 GitHub 查看源码</strong>
      <span>浏览代码、反馈问题和发起讨论</span>
    </span>
  </a>
</div>

## 什么是 Katton？

Katton 是一个强大的 Minecraft 脚本开发框架，允许你使用 Kotlin 脚本创建和修改游戏内容。借助热重载脚本，你可以实时查看更改，无需重启游戏。

Katton 同时支持 Fabric、NeoForge 和 Paper 插件服。我们会尽可能保持 API 在各平台之间保持一致，但是仍然可能会存在一些差别。Paper 为纯服务端，因此渲染、脚本包界面等客户端功能在 Paper 上不可用。

## 为什么选择 Katton？

- **易用**：Katton 直观的 API 和热重载功能让各水平的模组开发者都能快速创建和测试他们的模组。
- **灵活**：借助 Kotlin 的强大功能，你可以创建与 Minecraft 交互的复杂模组。
- **高性能**：Katton 使用 Kotlin 脚本在 Minecraft 运行时直接与 Java 对象交互，确保高性能和无缝集成。
- **强大的 API**：Katton 提供了覆盖事件、命令、注册表、数据包调用、渲染和运行时注入的脚本 API。
- **修改已有内容**：除了添加新内容，你还可以修改原版方块、物品、配方、战利品表、实体属性和村民交易，见 [修改已有内容](../guide/modify/)。
- **游戏内管理**：通过内置 GUI（按 K 键！）管理脚本包、一键开关、用诊断命令查看注册表——全都不用退出游戏。

## 接下来？

<div class="next-card-grid">
  <a class="next-card" href="./get-started.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z"/><path d="M8 7h8M8 11h7"/></svg>
    </span>
    <span class="next-card__body">
      <strong>入门指南</strong>
      <span>写第一个脚本包</span>
    </span>
  </a>
  <a class="next-card" href="../guide/scripts.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/><path d="M8 4v16M16 4v10"/></svg>
    </span>
    <span class="next-card__body">
      <strong>脚本包</strong>
      <span>理解目录结构和 manifest 字段</span>
    </span>
  </a>
  <a class="next-card" href="../platform/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M12 3v18M5 8h14M5 16h14"/><path d="M7 4c2 2 3 5 3 8s-1 6-3 8M17 4c-2 2-3 5-3 8s1 6 3 8"/></svg>
    </span>
    <span class="next-card__body">
      <strong>平台</strong>
      <span>比较 Fabric、NeoForge 和 Paper</span>
    </span>
  </a>
  <a class="next-card" href="../architecture/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 18V6l8-4 8 4v12l-8 4-8-4Z"/><path d="M12 22V12M4 6l8 6 8-6"/></svg>
    </span>
    <span class="next-card__body">
      <strong>架构</strong>
      <span>理解重载和客户端同步内部流程</span>
    </span>
  </a>
</div>

## 我不会 Kotlin！

没问题，Kotlin 是一种~~甜度爆炸的~~现代编程语言，易于学习，特别是如果你有 Java 或其他 C 风格语言的经验。网上有大量教程可以帮助你学习 Kotlin，包括官方 [Kotlin 文档](https://kotlinlang.org/docs/home.html) 以及Bilibili和菜鸟教程等平台上的各种教程。

---

选择入门指南章节，你就可以一步步了解 Katton 的基本使用方式，以及详细的 API 文档和示例，并创建出自己的脚本。
