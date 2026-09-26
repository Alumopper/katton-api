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
  - title: Script Play Networking
    details: Exchange binary messages between Fabric or NeoForge scripts. Katton keeps the packet codec stable across reloads.
  - title: Camera Scenes
    details: Build camera paths, particle and geometry effects, and reusable timelines. A server can start scenes for selected players.
  - title: Audio
    details: Play pack files, resources, and sound events with pause, seek, rate, fades, and spatial placement — plus a vanilla-safe basic sound API on every platform.
  - title: Script Pack Dependencies
    details: Split a project into a core pack and consumers that share its Kotlin types and state, with explicit exports and transactional reloads.
  - title: Script Packs
    details: Organize Kotlin and Java sources into directory or ZIP packs with manifests, private libraries, state files, and signed client sync.
  - title: Platform Aware
    details: Use Fabric and NeoForge for full client/mod features, or Paper for server-only Bukkit scripting and Folia-aware scheduling.
  - title: Hot Reload
    details: Reload events, registries, injections, rendering hooks, audio, and datapack mutations without restarting your workflow.
  - title: IDE Bridge
    details: Let the Katton IDEA plugin discover a running instance, deploy world packs, and stream compiler diagnostics back into your editor.
---
