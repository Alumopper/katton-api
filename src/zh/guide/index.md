# 使用指北

本指南介绍 Katton 的脚本功能。首次使用时，请先阅读[快速开始](../quickstart/)和[脚本包](./scripts.md)，再按需要选择主题。

平台支持情况见[平台](../platform/)。重载、脚本包同步和注册表生命周期见[架构](../architecture/)。

<div class="next-card-grid next-card-grid--compact">
  <a class="next-card" href="./scripts.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10"/><path d="M8 4v16M16 4v10"/></svg>
    </span>
    <span class="next-card__body">
      <strong>脚本包</strong>
      <span>目录结构、manifest 字段、入口函数、本地状态、客户端同步。</span>
    </span>
  </a>
  <a class="next-card" href="./events.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Z"/><path d="M10 21h4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>事件</strong>
      <span>跨平台事件分类与参数类型。</span>
    </span>
  </a>
  <a class="next-card" href="./play-networking.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M3 7h7l3 5h8M3 17h7l3-5h8"/><circle cx="3" cy="7" r="1"/><circle cx="21" cy="12" r="1"/></svg>
    </span>
    <span class="next-card__body">
      <strong>游戏阶段网络通信</strong>
      <span>Fabric 和 NeoForge 脚本通过可重载频道交换二进制消息。</span>
    </span>
  </a>
  <a class="next-card" href="./lifecycle.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M12 3v6l4 2"/><circle cx="12" cy="12" r="9"/></svg>
    </span>
    <span class="next-card__body">
      <strong>入口生命周期</strong>
      <span>选择执行阶段、使用调用上下文并控制世界脚本重放。</span>
    </span>
  </a>
  <a class="next-card" href="./dependencies.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M8 12h8M5 8h4v8H5zM15 8h4v8h-4z"/></svg>
    </span>
    <span class="next-card__body">
      <strong>模组与插件依赖</strong>
      <span>声明依赖并调用 Fabric、NeoForge 或 Paper API。</span>
    </span>
  </a>

  <a class="next-card" href="./pack-dependencies.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 7h6v10H4zM14 7h6v10h-6z"/><path d="M10 12h4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>脚本包依赖</strong>
      <span>在包之间共享 Kotlin 类型与状态，支持显式导出。</span>
    </span>
  </a>
  <a class="next-card" href="./registry/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>注册</strong>
      <span>在Minecraft中注册物品、方块、实体、组件、渲染器等。</span>
    </span>
  </a>
  <a class="next-card" href="./modify/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><path d="M14 5v4M8 15v4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>修改已有内容</strong>
      <span>修改已有的物品、方块、配方、战利品表、实体属性和村民交易。</span>
    </span>
  </a>
  <a class="next-card" href="./datapack/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3Z"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
    </span>
    <span class="next-card__body">
      <strong>数据包迁移</strong>
      <span>把 mcfunction 逻辑迁移到 Kotlin，同时保留热重载。</span>
    </span>
  </a>
  <a class="next-card" href="./render/">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"/><path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>
    </span>
    <span class="next-card__body">
      <strong>渲染</strong>
      <span>HUD/世界回调、无实体物品模型渲染和后处理效果。</span>
    </span>
  </a>

  <a class="next-card" href="./audio.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>
    </span>
    <span class="next-card__body">
      <strong>音频</strong>
      <span>播放包内文件、资源与声音事件；三平台通用的基础声音。</span>
    </span>
  </a>
  <a class="next-card" href="./injection.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m8 9-4 3 4 3M16 9l4 3-4 3"/><path d="m14 5-4 14"/></svg>
    </span>
    <span class="next-card__body">
      <strong>代码注入</strong>
      <span>Fabric/NeoForge 上的运行时 ByteBuddy/ASM 注入。</span>
    </span>
  </a>
  <a class="next-card" href="./pack-ui.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 9h16M8 13h3M8 16h6"/></svg>
    </span>
    <span class="next-card__body">
      <strong>脚本包界面</strong>
      <span>Fabric/NeoForge 客户端的游戏内脚本包管理。</span>
    </span>
  </a>
</div>
