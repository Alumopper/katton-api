---
title: CreativeModeTab
outline: [2, 2]
---

<ApiDocPage
  title="CreativeModeTab"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/CreativeModeTab.kt"
>
注册原生 CreativeModeTab，并支持热重载。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeCreativeTab&quot;,&quot;href&quot;:&quot;#registernativecreativetab&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeCreativeTab&quot;,&quot;href&quot;:&quot;#registernativecreativetab&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;reorderCreativeTab&quot;,&quot;href&quot;:&quot;#reordercreativetab&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeCreativeTab

<ApiMemberCard
  id="registernativecreativetab"
  name="registerNativeCreativeTab"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeCreativeTab(id: String, registerMode: RegisterMode = RegisterMode.WORLD, tabFactory: () -> CreativeModeTab): KattonRegistry.KattonCreativeTabEntry
```

注册原生 CreativeModeTab，并支持热重载。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 标签页标识符，例如 "mymod:custom_tab"。 |
| `registerMode` | 注册模式（GLOBAL、WORLD 或 RELOADABLE）。 |
| `tabFactory` | 创建 CreativeModeTab 实例的工厂函数。 |

### 返回值

已注册的 KattonCreativeTabEntry。

</ApiMemberCard>

## registerNativeCreativeTab

<ApiMemberCard
  id="registernativecreativetab"
  name="registerNativeCreativeTab"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun registerNativeCreativeTab(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, tabFactory: () -> CreativeModeTab): KattonRegistry.KattonCreativeTabEntry
```

注册原生 CreativeModeTab，并支持热重载（Identifier 重载）。

</ApiMemberCard>

## reorderCreativeTab

<ApiMemberCard
  id="reordercreativetab"
  name="reorderCreativeTab"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@ApiStatus.Experimental
@ApiStatus.Experimental fun reorderCreativeTab(tab: CreativeModeTab, after: String? = null, before: String? = null)
```

在全局标签页列表中重新排序某个 CreativeModeTab。
该方法会反射 Minecraft 内部的 `CreativeModeTabs`，将标签页移动到其他标签页之后或之前。
如果反射失败，标签页会保持在默认位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `tab` | 需要重新排序的标签页。 |
| `after` | 移动到该标签页之后，例如 "minecraft:building_blocks"。 |
| `before` | 移动到该标签页之前。 |

</ApiMemberCard>

