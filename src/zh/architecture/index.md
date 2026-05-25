# 架构

这里解释 Katton 为什么这样重载、同步脚本包和修改注册表。

<div class="next-card-grid">
  <a class="next-card" href="./script-loading.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5M8 17h7"/></svg>
    </span>
    <span class="next-card__body">
      <strong>脚本加载生命周期</strong>
      <span>初始化、重载顺序、客户端/服务端执行时机。</span>
    </span>
  </a>
  <a class="next-card" href="./pack-sync.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M7 7h10v10H7z"/><path d="M3 12h4M17 12h4M12 3v4M12 17v4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>脚本包同步与信任</strong>
      <span>多人同步、签名、缓存布局、远程脚本信任提示。</span>
    </span>
  </a>
  <a class="next-card" href="./manifest.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4"/><path d="m9 15 2 2 4-5"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Manifest 与签名</strong>
      <span>manifest.json、本地状态、hash、clientSync、Ed25519 签名。</span>
    </span>
  </a>
  <a class="next-card" href="./registry-lifecycle.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>注册表生命周期</strong>
      <span>可重载注册表所有权、stale 条目与 Paper 限制。</span>
    </span>
  </a>
</div>
