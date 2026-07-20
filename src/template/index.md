---
title: Template Generator
description: Generate a Katton script pack project template
layout: page
---

<script setup>
import TemplateGenerator from '../../.vitepress/theme/components/TemplateGenerator.vue'
</script>

Choose the exact Minecraft target before choosing Katton. Current Maven builds use a Minecraft-qualified version such as `0.3.1b3+mc26.2`; legacy builds such as `0.3.0` keep their original unqualified Maven version. The generator selects the correct coordinate automatically.

<TemplateGenerator />
