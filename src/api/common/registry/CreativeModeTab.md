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
Registers a native CreativeModeTab with hot-reload support.
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

Registers a native CreativeModeTab with hot-reload support.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Tab identifier (e.g., "mymod:custom_tab") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `tabFactory` | Factory function to create the CreativeModeTab instance |

### Returns

The registered KattonCreativeTabEntry

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

Registers a native CreativeModeTab with hot-reload support (Identifier overload).

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

Reorders a creative tab within the global tabs list.

Uses reflection on Minecraft's internal `CreativeModeTabs` to move a tab
after or before another tab. If reflection fails, the tab stays at its
default position.

### Parameters

| Parameter | Description |
| --- | --- |
| `tab` | The tab to reorder |
| `after` | Move after this tab identifier (e.g., "minecraft:building_blocks") |
| `before` | Move before this tab identifier |

</ApiMemberCard>

