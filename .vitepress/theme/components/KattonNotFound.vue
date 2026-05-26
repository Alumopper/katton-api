<template>
  <main class="katton-not-found">
    <section class="katton-not-found__shell" aria-labelledby="katton-not-found-title">
      <div class="katton-not-found__art">
        <img src="/404.png" alt="" />
      </div>

      <p class="katton-not-found__code">404</p>
      <h1 id="katton-not-found-title">Page Not Found</h1>
      <p class="katton-not-found__copy">
        The page you are looking for is not in this script pack. > <
      </p>

      <a class="katton-not-found__button" href="/">Back to Home</a>
    </section>
  </main>
</template>

<style scoped>
.katton-not-found {
  display: grid;
  min-height: calc(100vh - var(--vp-nav-height));
  place-items: center;
  padding: 48px 24px;
}

.katton-not-found__shell {
  display: grid;
  justify-items: center;
  width: min(760px, 100%);
  text-align: center;
}

.katton-not-found__art {
  width: min(560px, 100%);
  aspect-ratio: 16 / 9;
  margin-bottom: 28px;
}

.katton-not-found__art img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.katton-not-found__code {
  margin: 0 0 8px;
  color: var(--vp-c-brand-1);
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.katton-not-found h1 {
  margin: 0;
  color: var(--vp-c-text-1);
  font-size: clamp(2.35rem, 7vw, 4rem);
  line-height: 1;
}

.katton-not-found__copy {
  max-width: 440px;
  margin: 18px 0 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.7;
}

.katton-not-found__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  margin-top: 28px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  padding: 0 18px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 700;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    background-color 0.18s ease,
    color 0.18s ease;
}

.katton-not-found__button:hover {
  border-color: var(--vp-c-brand-2);
  background: color-mix(in srgb, var(--vp-c-brand-soft) 78%, var(--vp-c-bg-soft));
  color: var(--vp-c-brand-2);
  text-decoration: none;
}

@media (max-width: 640px) {
  .katton-not-found {
    padding: 34px 18px;
  }

  .katton-not-found__art {
    margin-bottom: 22px;
  }
}
</style>
