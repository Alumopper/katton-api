---
title: InjectionCapabilities
outline: [2, 2]
---

<ApiDocPage
  title="InjectionCapabilities"
  module="Common"
  module-key="common"
  package-name="top.katton.api.inject"
  source-file="common/src/main/kotlin/top/katton/api/inject/InjectionCapabilities.kt"
>
Current availability of Katton's unsafe runtime bytecode injection.
</ApiDocPage>

<ApiMembersList items-json='[{&quot;label&quot;:&quot;InjectionCapabilityStatus&quot;,&quot;href&quot;:&quot;#injectioncapabilitystatus&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;InjectionAcquisitionMode&quot;,&quot;href&quot;:&quot;#injectionacquisitionmode&quot;,&quot;kind&quot;:&quot;Enum Class&quot;,&quot;kindKey&quot;:&quot;enum-class&quot;}, {&quot;label&quot;:&quot;InjectionCapabilityReport&quot;,&quot;href&quot;:&quot;#injectioncapabilityreport&quot;,&quot;kind&quot;:&quot;Data Class&quot;,&quot;kindKey&quot;:&quot;data-class&quot;}, {&quot;label&quot;:&quot;InjectionCapabilityReport.diagnosticLines&quot;,&quot;href&quot;:&quot;#injectioncapabilityreport-diagnosticlines&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}, {&quot;label&quot;:&quot;InjectionCapabilities&quot;,&quot;href&quot;:&quot;#injectioncapabilities&quot;,&quot;kind&quot;:&quot;Object&quot;,&quot;kindKey&quot;:&quot;object&quot;}, {&quot;label&quot;:&quot;InjectionCapabilities.query&quot;,&quot;href&quot;:&quot;#injectioncapabilities-query&quot;,&quot;kind&quot;:&quot;Function&quot;,&quot;kindKey&quot;:&quot;function&quot;}]' />

## InjectionCapabilityStatus

<ApiMemberCard
  id="injectioncapabilitystatus"
  name="InjectionCapabilityStatus"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class InjectionCapabilityStatus
```

Current availability of Katton's unsafe runtime bytecode injection.

</ApiMemberCard>

## InjectionAcquisitionMode

<ApiMemberCard
  id="injectionacquisitionmode"
  name="InjectionAcquisitionMode"
  kind="Enum Class"
  kind-key="enum-class"
  module="Common"
  module-key="common"
>

```kotlin
enum class InjectionAcquisitionMode
```

How Katton acquired the JVM [java.lang.instrument.Instrumentation] instance.

</ApiMemberCard>

## InjectionCapabilityReport

<ApiMemberCard
  id="injectioncapabilityreport"
  name="InjectionCapabilityReport"
  kind="Data Class"
  kind-key="data-class"
  module="Common"
  module-key="common"
>

```kotlin
data class InjectionCapabilityReport( val status: InjectionCapabilityStatus, val mode: InjectionAcquisitionMode, val platform: String, val fclDetected: Boolean, val androidDetected: Boolean, val javaVersion: String, val javaVendor: String, val vmName: String, val os: String, val architecture: String, val instrumentationModulePresent: Boolean, val attachModulePresent: Boolean, val attachProviderCount: Int, val redefineClassesSupported: Boolean?, val retransformClassesSupported: Boolean?, val detail: String, val remediation: String?, val startupAgentArgument: String, val relevantJvmArguments: List<String> )
```

Structured injection capability report suitable for scripts, commands, and support logs.

### InjectionCapabilityReport.diagnosticLines

<ApiMemberCard
  id="injectioncapabilityreport-diagnosticlines"
  name="InjectionCapabilityReport.diagnosticLines"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
fun diagnosticLines(): List<String>
```

Lines formatted for `/katton capabilities injection` or support logs.

</ApiMemberCard>

</ApiMemberCard>

## InjectionCapabilities

<ApiMemberCard
  id="injectioncapabilities"
  name="InjectionCapabilities"
  kind="Object"
  kind-key="object"
  module="Common"
  module-key="common"
>

```kotlin
object InjectionCapabilities
```

Capability query for the experimental unsafe injection API.

### InjectionCapabilities.query

<ApiMemberCard
  id="injectioncapabilities-query"
  name="InjectionCapabilities.query"
  kind="Function"
  kind-key="function"
  module="Common"
  module-key="common"
>

```kotlin
@JvmStatic
@JvmStatic fun query(): InjectionCapabilityReport
```

Performs the same instrumentation acquisition used by an actual injection and returns
an explicit supported/unsupported report. Calling this may install Byte Buddy dynamically
when the current JVM supports Attach.

</ApiMemberCard>

</ApiMemberCard>
