# 架构

这里解释 Katton 为什么这样重载、同步脚本包和修改注册表。

| 主题 | 内容 |
|---|---|
| [脚本加载生命周期](./script-loading.md) | 初始化、重载顺序、客户端/服务端执行时机。 |
| [脚本包同步与信任](./pack-sync.md) | 多人同步、签名、缓存布局、远程脚本信任提示。 |
| [Manifest 与签名](./manifest.md) | `manifest.json`、本地状态、hash、`clientSync`、Ed25519 签名。 |
| [注册表生命周期](./registry-lifecycle.md) | 可重载注册表所有权、stale 条目与 Paper 限制。 |