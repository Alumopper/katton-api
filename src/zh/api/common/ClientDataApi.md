---
title: ClientDataApi
outline: [2, 2]
---

<ApiDocPage
  title="ClientDataApi"
  module="Common"
  module-key="common"
  package-name="top.katton.api"
  source-file="common/src/main/kotlin/top/katton/api/ClientDataApi.kt"
>
向所有已连接玩家同步一个键值对。 值为 `null` 时会在客户端删除该键。
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;syncClientData&quot;,&quot;href&quot;:&quot;#syncclientdata&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;syncClientData&quot;,&quot;href&quot;:&quot;#syncclientdata&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;syncClientData&quot;,&quot;href&quot;:&quot;#syncclientdata&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;syncClientData&quot;,&quot;href&quot;:&quot;#syncclientdata&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonClientData&quot;,&quot;href&quot;:&quot;#kattonclientdata&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;KattonClientData.get&quot;,&quot;href&quot;:&quot;#kattonclientdata-get&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonClientData.getString&quot;,&quot;href&quot;:&quot;#kattonclientdata-getstring&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonClientData.getNumber&quot;,&quot;href&quot;:&quot;#kattonclientdata-getnumber&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonClientData.getBool&quot;,&quot;href&quot;:&quot;#kattonclientdata-getbool&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;KattonClientData.all&quot;,&quot;href&quot;:&quot;#kattonclientdata-all&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;clientData&quot;,&quot;href&quot;:&quot;#clientdata&quot;,&quot;kind&quot;:&quot;Property&quot;,&quot;kindKey&quot;:&quot;property&quot;}]' />

## syncClientData

<ApiMemberCard
  id="syncclientdata"
  name="syncClientData"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun syncClientData(key: String, value: Any?)
```

向所有已连接玩家同步一个键值对。
值为 `null` 时会在客户端删除该键。

</ApiMemberCard>

## syncClientData

<ApiMemberCard
  id="syncclientdata"
  name="syncClientData"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun syncClientData(player: ServerPlayer, key: String, value: Any?)
```

向指定玩家同步一个键值对。
值为 `null` 时会在客户端删除该键。

</ApiMemberCard>

## syncClientData

<ApiMemberCard
  id="syncclientdata"
  name="syncClientData"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun syncClientData(entries: Map<String, Any?>)
```

向所有已连接玩家同步多个键值对。
值为 `null` 的条目会在客户端删除对应的键。

</ApiMemberCard>

## syncClientData

<ApiMemberCard
  id="syncclientdata"
  name="syncClientData"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun syncClientData(player: ServerPlayer, entries: Map<String, Any?>)
```

向指定玩家同步多个键值对。
值为 `null` 的条目会在客户端删除对应的键。

</ApiMemberCard>

## KattonClientData

<ApiMemberCard
  id="kattonclientdata"
  name="KattonClientData"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object KattonClientData
```

服务器同步数据的客户端访问入口。

### KattonClientData.get

<ApiMemberCard
  id="kattonclientdata-get"
  name="KattonClientData.get"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
operator fun get(key: String): Any?
```

按键获取原始值。如果找不到该键，返回 null。

</ApiMemberCard>

### KattonClientData.getString

<ApiMemberCard
  id="kattonclientdata-getstring"
  name="KattonClientData.getString"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getString(key: String, default: String = ""): String
```

获取字符串值，可指定默认值。

</ApiMemberCard>

### KattonClientData.getNumber

<ApiMemberCard
  id="kattonclientdata-getnumber"
  name="KattonClientData.getNumber"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getNumber(key: String, default: Number = 0): Number
```

获取数值，可指定默认值。

</ApiMemberCard>

### KattonClientData.getBool

<ApiMemberCard
  id="kattonclientdata-getbool"
  name="KattonClientData.getBool"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun getBool(key: String, default: Boolean = false): Boolean
```

获取布尔值，可指定默认值。

</ApiMemberCard>

### KattonClientData.all

<ApiMemberCard
  id="kattonclientdata-all"
  name="KattonClientData.all"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun all(): Map<String, Any?>
```

返回所有已同步的数据条目（只读快照）。

</ApiMemberCard>

</ApiMemberCard>

## clientData

<ApiMemberCard
  id="clientdata"
  name="clientData"
  kind="Property"
  kind-key="property"
  module="Common"
  module-key="common"
>

```kotlin
val clientData: KattonClientData
```

简写访问器 - 在客户端脚本中使用 `clientData["key"]`。

</ApiMemberCard>

