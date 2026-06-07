# 从数据包过渡到 Katton

如果你是数据包糕手，那你肯定可以很快适应 Katton：依然可以快速重载，依然可以调用类似命令的辅助函数，也甚至可以迁移过程中保留现有的 `.mcfunction` 文件。

最大的区别就是，你不再需要像写汇编一样去实现各种基础逻辑。Kotlin 是一门高级语言，你可以直接中里面写函数、保存变量、监听事件、直接操作实体对象，并在热重载循环里使用接近模组级别的能力。

> [!NOTE]
> Paper 支持服务端数据包风格 API 和事件，但不能注册自定义物品、方块、实体或客户端功能，因为原版客户端无法接收这些注册表内容。

## 参考

| 我们在数据包中写的 | Katton 中对应的 | 章节传送门 |
| --- | --- | --- |
| `data/<namespace>/function/*.mcfunction` | 带 `@ServerScriptEntrypoint` 的 `.kt` 文件 | [项目结构](./project-structure.md) |
| 命令函数与逻辑 | Kotlin 函数、循环、命令辅助函数 | [把 mcfunction 翻译成 Kotlin](./mcfunction-to-kotlin.md) |
| 原版命令 | `top.katton.api.dpcaller` 辅助函数 | [调用原版命令](./commands.md) |
| `@e[...]`、`@a[...]` | `EntitySelectorBuilder` 和真实实体对象 | [选择器与实体访问](./selectors.md) |
| 计分板、标签、NBT、storage | 类似的，但是更方便的变量操作 | [计分板、标签、NBT 与 Storage](./state.md) |
| `#load`、`#tick`、`schedule function` | 服务端生命周期事件与 tick 事件 | [替代 Load、Tick 与 Schedule](./load-tick-schedule.md) |
| 配方和战利品表 JSON | `modifyRecipe`、`modifyLootTable` 等 API | [配方、战利品表与数据包修改](./datapack-mutations.md) |
| 调用mcfunction | 保留并用 `runFunction` 调用 | [保留现有数据包](./keep-existing-datapacks.md) |
| 数据包的局限 | 事件、注册表、客户端渲染、注入、包 UI | [比数据包更强大](./beyond-datapacks.md) |

## 推荐的第一步

不要一上来重写整个数据包。Katton 允许你方便地在 kotlin 调用 mcfunction 函数，所以可以先挑一个小工具函数，比如选择器很复杂的一段逻辑、计分板计算、或者带很多分支的命令链，来熟悉 Katton 的编写逻辑。

1. 创建一个脚本包。
2. 添加一个 `@ServerScriptEntrypoint` 函数。
3. 用 Kotlin 复现原行为。
4. 使用 `/katton reload` 重载。
5. 其余数据包先保持不动，等新脚本稳定后再继续迁移。

<div class="next-card-grid">
  <a class="next-card" href="./project-structure.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M4 5h6l2 2h8v12H4z"/><path d="M8 11h8M8 15h5"/></svg>
    </span>
    <span class="next-card__body">
      <strong>搭好脚本包</strong>
      <span>把数据包目录映射到 Katton 文件</span>
    </span>
  </a>
  <a class="next-card" href="./mcfunction-to-kotlin.html">
    <span class="next-card__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="m7 8-4 4 4 4M17 8l4 4-4 4"/><path d="m14 4-4 16"/></svg>
    </span>
    <span class="next-card__body">
      <strong>翻译第一个函数</strong>
      <span>把命令链变成 Kotlin 逻辑</span>
    </span>
  </a>
</div>

