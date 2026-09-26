---
title: 模板生成器
description: 生成 Katton 脚本包项目模板
layout: page
---

<script setup>
import TemplateGenerator from '../../../.vitepress/theme/components/TemplateGenerator.vue'
</script>

请先选择 Minecraft 目标版本，再选择 Katton。Katton 0.5.1 支持 Minecraft 26.1.2 和 26.2。其 Maven 版本包含 Minecraft 目标，例如 `0.5.1+mc26.2`。`0.3.0` 等旧版本仍使用原有的 Maven 版本号。生成器会选择匹配的版本。

请在依赖区域添加世界脚本使用的每个模组或 Paper 插件。生成器会把与所选平台匹配的条目写入 `world_scripts/manifest.json`，让空的全局包保留 `dependencies: []`，并准备 `lib/*.jar` 的 compile-only 后备配置。清单声明负责校验运行时可用性，不会自动为 IDE 下载依赖 API。

<TemplateGenerator />
