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
面向脚本的配置 API，会从当前脚本包的 manifest 里读取配置值。
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

面向脚本的配置 API，会从当前脚本包的 manifest 里读取配置值。

脚本中的用法：
```kotlin
import top.katton.api.*

val rate = config.getNumber("spawn_rate").toDouble()
val prefix = config.getString("message_prefix", "[Default]")
val debug = config.getBool("debug_mode")
val raw = config["some_key"]
```

每个脚本包都有自己独立的配置值，来自 manifest.json 里的 `"config"` 字段。
当前脚本包会根据脚本执行上下文自动识别。

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

按键获取原始配置值。如果键不存在，或者当前脚本包无法解析，则返回 null。

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

获取字符串配置值，可指定默认值。

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

获取数值配置，可指定默认值。

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

获取布尔配置值，可指定默认值。

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

返回当前脚本包的全部配置项。

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

简写访问器 - 在脚本中使用 `config["key"]`。

</ApiMemberCard>

