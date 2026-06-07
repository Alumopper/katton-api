# 使用指北

这里是 Katton 使用的全面指南！对于萌新，建议先阅读[快速开始](../quickstart/)哦。然后，我们建议你先看看脚本包一章，再选择你感兴趣的主题深入了解。

关于 Katton 在各个平台的支持差异见 [平台](../platform/)。重载、联网同步和注册表生命周期等技术细节见 [架构](../architecture/)。

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
