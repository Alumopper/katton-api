# Architecture

This section is for readers who want to understand why Katton reloads, syncs, and mutates content the way it does.

<div class="next-card-grid">
  <a class="next-card" href="./script-loading.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M8 9h8M8 13h5M8 17h7"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Script Loading Lifecycle</strong>
      <span>Initialization, reload order, and client/server execution timing.</span>
    </span>
  </a>
  <a class="next-card" href="./pack-sync.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M7 7h10v10H7z"/><path d="M3 12h4M17 12h4M12 3v4M12 17v4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Script Pack Sync and Trust</strong>
      <span>Multiplayer pack sync, signatures, cache layout, and remote trust prompts.</span>
    </span>
  </a>
  <a class="next-card" href="./manifest.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"/><path d="M14 3v4h4"/><path d="m9 15 2 2 4-5"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Manifest and Signing</strong>
      <span>manifest.json, local state files, hashes, clientSync, and Ed25519 signing.</span>
    </span>
  </a>
  <a class="next-card" href="./registry-lifecycle.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m4 7 8-4 8 4-8 4-8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></svg>
    </span>
    <span class="next-card__body">
      <strong>Registry Lifecycle</strong>
      <span>Reloadable registry ownership, stale entries, and Paper limitations.</span>
    </span>
  </a>
</div>
