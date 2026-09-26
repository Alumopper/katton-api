---
layout: home

hero:
  name: "Katton"
  text: ""
  tagline: 面向 Fabric、NeoForge 和 Paper 的可热重载 Kotlin 脚本框架
  icon: ⚡
  image:
    src: ../logo.png
    alt: Banner
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/quickstart
    - theme: alt
      text: API 文档
      link: /zh/api/index.html

features:
  - title: 脚本游戏阶段通信
    details: Fabric 和 NeoForge 脚本可双向交换二进制消息。脚本重载时，Katton 保持数据包编解码器稳定。
  - title: 镜头演出
    details: 编排镜头路径、粒子、几何效果和可复用时间线。服务端可以向指定玩家触发演出。
  - title: 音频
    details: 播放包内文件、资源与声音事件，支持暂停、跳转、倍速、淡变与空间定位；三平台通用的原版安全基础声音 API。
  - title: 脚本包依赖
    details: 把项目拆成核心包与消费包，共享 Kotlin 类型和状态，支持显式导出与事务式重载。
  - title: 脚本包
    details: 用目录或 ZIP 包组织 Kotlin/Java 源码，支持私有库、状态文件和已签名客户端同步。
  - title: 多平台支持
    details: Fabric/NeoForge 提供完整客户端与模组能力，Paper 提供服务端 Bukkit 脚本和 Folia 调度。
  - title: 热重载
    details: 事件、注册表、注入、渲染钩子、音频和数据包修改都能随开发循环快速重载。
  - title: IDE 开发连接
    details: 让 Katton IDEA 插件发现运行实例、部署世界包，并把编译诊断流回编辑器。
---
