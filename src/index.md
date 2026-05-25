---
# https://brenoepics.github.io/vitepress-carbon/guide/home-component.html
layout: home

hero:
  name: "Katton"
  text: ""
  tagline: Hot-reloadable Kotlin scripting for Minecraft Fabric, NeoForge, and Paper
  icon: ⚡
  image:
    src: ./logo.png
    alt: Banner
  actions:
    - theme: brand
      text: Quick Start
      link: /quickstart
    - theme: alt
      text: API Docs
      link: /api/index.html

features:
  - title: Script Packs
    details: Organize Kotlin and Java sources into local or world-specific packs with manifests, state files, and optional client sync.
  - title: Platform Aware
    details: Use Fabric and NeoForge for full client/mod features, or Paper for server-only Bukkit scripting and Folia-aware scheduling.
  - title: Hot Reload
    details: Reload events, registries, injections, rendering hooks, and datapack mutations without restarting your workflow.
---

