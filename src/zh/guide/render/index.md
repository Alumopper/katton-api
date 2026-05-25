# 渲染

> [!WARNING]
> 渲染功能仅适用于 Fabric/NeoForge 客户端。Paper 是纯服务端平台，不支持客户端渲染。

Katton 的客户端渲染 API 覆盖逐帧回调、HUD 绘制、简单世界空间辅助绘制、服务端驱动的物品渲染标记，以及全屏后处理效果。

实体渲染器属于自定义实体注册流程，不放在本章节展开。模型层、动画实体渲染器和关键帧回调见 [注册 / 实体教程](../registry/entity.md) 与 [EntityRenderer API](../../../api/common/registry/EntityRenderer.md)。

<div class="next-card-grid next-card-grid--compact">
  <a class="next-card" href="./hud-world.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 10h16M8 14h4M8 17h7"/></svg>
    </span>
    <span class="next-card__body">
      <strong>HUD 与世界渲染</strong>
      <span>每帧绘制文字、矩形、纹理和世界空间调试线。</span>
    </span>
  </a>
  <a class="next-card" href="./item-markers.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9"/></svg>
    </span>
    <span class="next-card__body">
      <strong>物品渲染标记</strong>
      <span>从服务端脚本让客户端在世界中显示轻量物品模型。</span>
    </span>
  </a>
  <a class="next-card" href="./post-effects.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"/><path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>
    </span>
    <span class="next-card__body">
      <strong>后处理效果</strong>
      <span>注册、启用和清除全屏 shader 效果。提供预设 shader 以快速调用。</span>
    </span>
  </a>
</div>

## 如何选择

客户端脚本需要每帧绘制内容时，使用 [HUD 与世界渲染](./hud-world.md)。服务端脚本想让客户端看到临时物品模型、但不生成真实实体时，使用 [物品渲染标记](./item-markers.md)。需要模糊、染色、灰度或自定义全屏 shader 时，使用 [后处理效果](./post-effects.md)。
