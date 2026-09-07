---
title: EventCapabilities
outline: [2, 2]
---

<ApiDocPage
  title="EventCapabilities"
  module="Common"
  module-key="common"
  package-name="top.katton.api.event"
  source-file="common/src/main/kotlin/top/katton/api/event/EventCapabilities.kt"
>
Runtime capability query for event APIs whose platform parity is not exact.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;EventCapabilities&quot;,&quot;href&quot;:&quot;#eventcapabilities&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;EventCapabilities.query&quot;,&quot;href&quot;:&quot;#eventcapabilities-query&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;EventCapabilities.notable&quot;,&quot;href&quot;:&quot;#eventcapabilities-notable&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## EventCapabilities

<ApiMemberCard
  id="eventcapabilities"
  name="EventCapabilities"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object EventCapabilities
```

Runtime capability query for event APIs whose platform parity is not exact.

### EventCapabilities.query

<ApiMemberCard
  id="eventcapabilities-query"
  name="EventCapabilities.query"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@JvmStatic
@JvmStatic fun query(eventId: String): EventCapability
```

Returns a capability record for `EventObject.onEvent` (FQCN is also accepted).

</ApiMemberCard>

### EventCapabilities.notable

<ApiMemberCard
  id="eventcapabilities-notable"
  name="EventCapabilities.notable"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@JvmStatic
@JvmStatic fun notable(): List<EventCapability>
```

Lists every known non-portable event for diagnostics and feature gating.

</ApiMemberCard>

</ApiMemberCard>
