---
title: Template Generator
description: Generate a Katton script pack project template
layout: page
---

<script setup>
import TemplateGenerator from '../../../.vitepress/theme/components/TemplateGenerator.vue'
</script>

请先选择准确的 Minecraft 目标版本，再选择 Katton。Katton 0.4.0 的 Maven 产物使用 `0.4.0+mc26.2` 这样的带 MC 标识版本；`0.3.0` 等旧产物仍保留不带 MC 标识的原坐标。生成器会自动选择正确的依赖版本。

请在依赖区域添加世界脚本使用的每个模组或 Paper 插件。生成器会把与所选平台匹配的条目写入 `world_scripts/manifest.json`，让空的全局包保留 `dependencies: []`，并准备 `lib/*.jar` 的 compile-only 后备配置。清单声明负责校验运行时可用性，不会自动为 IDE 下载依赖 API。

<TemplateGenerator />
