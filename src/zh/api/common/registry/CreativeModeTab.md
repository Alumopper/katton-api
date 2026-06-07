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
注册具有热重载支持的本机 CreativeModeTab。
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

注册具有热重载支持的本机 CreativeModeTab。

### 参数

| 参数 | 说明 |
| --- | --- |
| `id` | 选项卡标识符（例如，"mymod:custom_tab"） |
| `registerMode` | 注册模式（GLOBAL、WORLD或RELOADABLE） |
| `tabFactory` | 用于创建 CreativeModeTab 实例的工厂函数 |

### 返回值

已注册KattonCreativeTabEntry

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

注册具有热重载支持（标识符重载）的本机 CreativeModeTab。

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

对全局选项卡列表中的广告素材选项卡重新排序。

使用 Minecraft 内部 `CreativeModeTabs` 的反射来移动选项卡
在另一个选项卡之后或之前。如果反射失败，选项卡将保持在其状态
默认位置。

### 参数

| 参数 | 说明 |
| --- | --- |
| `tab` | 要重新排序的选项卡 |
| `after` | 移动到该选项卡标识符之后（例如，"minecraft:building_blocks"） |
| `before` | 移至该选项卡标识符之前 |

</ApiMemberCard>

