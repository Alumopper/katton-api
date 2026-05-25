# Rendering

> [!WARNING]
> Rendering is available on Fabric and NeoForge clients only. Paper is a server-only platform and does not support client-side rendering.

Katton's client rendering APIs cover frame callbacks, HUD drawing, simple world-space helpers, server-driven item markers, and full-screen post effects.

Entity renderers are documented with registration because they belong to the custom entity pipeline. See [Registry / Entity Tutorial](./registry/entity.md) and the [EntityRenderer API](../api/common/registry/EntityRenderer.md) for model layers, animated entity renderers, and keyframe callbacks.

<div class="next-card-grid">
  <a class="next-card" href="./render-hud-world.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 10h16M8 14h4M8 17h7"/></svg>
    </span>
    <span class="next-card__body">
      <strong>HUD and World Renderers</strong>
      <span>Draw text, rectangles, textures, and world-space debug lines every frame.</span>
    </span>
  </a>
  <a class="next-card" href="./render-item-markers.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12 4 7.5M12 12l8-4.5M12 12v9"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Item Render Markers</strong>
      <span>Show lightweight client-side item models in the world from server scripts.</span>
    </span>
  </a>
  <a class="next-card" href="./render-post-effects.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"/><path d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Post Effects</strong>
      <span>Register, activate, and clear full-screen shader effects.</span>
    </span>
  </a>
</div>

## Choosing an API

Use [HUD and World Renderers](./render-hud-world.md) when your client script needs to draw every frame. Use [Item Render Markers](./render-item-markers.md) when a server script wants clients to see a temporary item model in the world without spawning a real entity. Use [Post Effects](./render-post-effects.md) for screen-wide visual states such as blur, tint, grayscale, or custom shader passes.
