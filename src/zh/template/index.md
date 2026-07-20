---
title: Template Generator
description: Generate a Katton script pack project template
layout: page
---

<script setup>
import TemplateGenerator from '../../../.vitepress/theme/components/TemplateGenerator.vue'
</script>

请先选择准确的 Minecraft 目标版本，再选择 Katton。新版 Maven 产物使用 `0.3.1b3+mc26.2` 这样的带 MC 标识版本；`0.3.0` 等旧产物仍保留不带 MC 标识的原坐标。生成器会自动选择正确的依赖版本。

<TemplateGenerator />
