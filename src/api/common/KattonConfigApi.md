---
title: KattonConfigApi
outline: [2, 2]
---

<ApiDocPage
  title="KattonConfigApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/KattonConfigApi.kt"
>
Script-facing config API. Reads config values from the current script's pack manifest.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;KattonConfig&quot;,&quot;href&quot;:&quot;#kattonconfig&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonConfig.get&quot;,&quot;href&quot;:&quot;#kattonconfig-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonConfig.getString&quot;,&quot;href&quot;:&quot;#kattonconfig-getstring&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonConfig.getNumber&quot;,&quot;href&quot;:&quot;#kattonconfig-getnumber&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonConfig.getBool&quot;,&quot;href&quot;:&quot;#kattonconfig-getbool&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonConfig.all&quot;,&quot;href&quot;:&quot;#kattonconfig-all&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;config&quot;,&quot;href&quot;:&quot;#config&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## KattonConfig

<ApiMemberCard
  id="kattonconfig"
  name="KattonConfig"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object KattonConfig
```

Script-facing config API. Reads config values from the current script's pack manifest.

Usage in scripts:
```kotlin
import top.katton.api.*

val rate = config.getNumber("spawn_rate").toDouble()
val prefix = config.getString("message_prefix", "[Default]")
val debug = config.getBool("debug_mode")
val raw = config["some_key"]
```

Each script pack has its own independent config values (from manifest.json `"config"` field).
The current pack is auto-detected from the script execution context.

### KattonConfig.get

<ApiMemberCard
  id="kattonconfig-get"
  name="KattonConfig.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(key: String): Any?
```

Get the raw config value by key. Returns null if key not found or pack not resolved.

</ApiMemberCard>

### KattonConfig.getString

<ApiMemberCard
  id="kattonconfig-getstring"
  name="KattonConfig.getString"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getString(key: String, default: String = ""): String
```

Get a string config value with an optional default.

</ApiMemberCard>

### KattonConfig.getNumber

<ApiMemberCard
  id="kattonconfig-getnumber"
  name="KattonConfig.getNumber"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getNumber(key: String, default: Number = 0): Number
```

Get a numeric config value with an optional default.

</ApiMemberCard>

### KattonConfig.getBool

<ApiMemberCard
  id="kattonconfig-getbool"
  name="KattonConfig.getBool"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBool(key: String, default: Boolean = false): Boolean
```

Get a boolean config value with an optional default.

</ApiMemberCard>

### KattonConfig.all

<ApiMemberCard
  id="kattonconfig-all"
  name="KattonConfig.all"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun all(): Map<String, Any>
```

Returns all config entries for the current pack.

</ApiMemberCard>

</ApiMemberCard>

## config

<ApiMemberCard
  id="config"
  name="config"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val config: KattonConfig
```

Shorthand accessor — use `config["key"]` in scripts.

</ApiMemberCard>

