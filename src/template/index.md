---
title: Template Generator
description: Generate a Katton script pack project template
layout: page
---

<script setup>
import TemplateGenerator from '../../.vitepress/theme/components/TemplateGenerator.vue'
</script>

Choose the exact Minecraft target before choosing Katton. Katton 0.4.0 builds use a Minecraft-qualified version such as `0.4.0+mc26.2`; legacy builds such as `0.3.0` keep their original unqualified Maven version. The generator selects the correct coordinate automatically.

Add every mod or Paper plugin used by your world scripts in the dependency section. The generator writes platform-aware entries to `world_scripts/manifest.json`, leaves the empty global pack with `dependencies: []`, and prepares a `lib/*.jar` compile-only fallback. A manifest declaration validates runtime availability; it does not download the dependency API for your IDE.

<TemplateGenerator />
