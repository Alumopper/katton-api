---
title: Template Generator
description: Generate a Katton script pack project template
layout: page
---

<script setup>
import TemplateGenerator from '../../.vitepress/theme/components/TemplateGenerator.vue'
</script>

Choose the exact Minecraft target before choosing Katton. Katton 0.5.1 is available for Minecraft 26.1.2 and 26.2. Its Maven version includes the Minecraft target, such as `0.5.1+mc26.2`. Legacy builds such as `0.3.0` keep their original Maven version. The generator selects the matching version.

Add every mod or Paper plugin used by your world scripts in the dependency section. The generator writes platform-aware entries to `world_scripts/manifest.json`, leaves the empty global pack with `dependencies: []`, and prepares a `lib/*.jar` compile-only fallback. A manifest declaration validates runtime availability; it does not download the dependency API for your IDE.

<TemplateGenerator />
