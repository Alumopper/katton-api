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
Sync a key-value pair to all connected players. A value of `null` removes the key on the client side.
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

Sync a key-value pair to all connected players.
A value of `null` removes the key on the client side.

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

Sync a key-value pair to a specific player.
A value of `null` removes the key on the client side.

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

Sync multiple key-value pairs to all connected players.
Entries with `null` values remove the key on the client side.

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

Sync multiple key-value pairs to a specific player.
Entries with `null` values remove the key on the client side.

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

Client-side accessor for server-synced data.

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

Get the raw value by key. Returns null if key not found.

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

Get a string value with an optional default.

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

Get a numeric value with an optional default.

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

Get a boolean value with an optional default.

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

Returns all synced data entries (read-only snapshot).

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

Shorthand accessor — use `clientData["key"]` in client scripts.

</ApiMemberCard>

