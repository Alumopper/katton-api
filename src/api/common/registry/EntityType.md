---
title: EntityType
outline: [2, 2]
---

<ApiDocPage
  title="EntityType"
  module="Common"
  module-key="common"
  package-name="top.katton.api.registry"
  source-file="common/src/main/kotlin/top/katton/api/registry/EntityType.kt"
>
Registers a native EntityType with hot-reload support.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;registerNativeEntityType&quot;,&quot;href&quot;:&quot;#registernativeentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;registerNativeEntityType&quot;,&quot;href&quot;:&quot;#registernativeentitytype&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## registerNativeEntityType

<ApiMemberCard
  id="registernativeentitytype"
  name="registerNativeEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEntityType(id: String, registerMode: RegisterMode = RegisterMode.WORLD, entityTypeFactory: () -> EntityType<*>): KattonRegistry.KattonEntityTypeEntry
```

Registers a native EntityType with hot-reload support.

This is a lower-level API that only registers the EntityType itself.
For complete entity registration (including attributes, spawn egg, and
spawn placement), use [registerNativeEntity] instead.

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Entity identifier (e.g., "mymod:custom_entity") |
| `registerMode` | Registration mode (GLOBAL, WORLD, or RELOADABLE) |
| `entityTypeFactory` | Factory function to create the EntityType instance |

### Returns

The registered KattonEntityTypeEntry

</ApiMemberCard>

## registerNativeEntityType

<ApiMemberCard
  id="registernativeentitytype"
  name="registerNativeEntityType"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun registerNativeEntityType(id: Identifier, registerMode: RegisterMode = RegisterMode.WORLD, entityTypeFactory: () -> EntityType<*>): KattonRegistry.KattonEntityTypeEntry
```

Registers a native EntityType with hot-reload support (Identifier overload).

### Parameters

| Parameter | Description |
| --- | --- |
| `id` | Entity identifier |
| `registerMode` | Registration mode |
| `entityTypeFactory` | Factory function to create the EntityType instance |

### Returns

The registered KattonEntityTypeEntry

</ApiMemberCard>

