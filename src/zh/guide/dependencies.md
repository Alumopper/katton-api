# 使用其他模组与插件

脚本包必须声明它使用 API 的每个外部模组或 Paper 插件。清单声明负责运行时校验和类加载；开发项目还需要单独把 API 放进编译类路径。

## 必需集成

下面的清单在 Fabric/NeoForge 上接受 Create 6.x：

<!--@include: ../../example/guide/dependencies/01.md-->

Katton 只校验当前平台和运行侧适用的条目。必需依赖缺失、未启用或版本不满足时，脚本包会在编译前被排除。

版本表达式支持精确版本、比较条件、以空格或逗号连接的 AND 条件，以及 `||` 分支。

## 可选集成

基础脚本包可以在没有该集成时继续运行，就把 `required` 设为 `false`：

```json
{
  "dependencies": [
    {
      "id": "spark",
      "version": "*",
      "required": false,
      "platforms": ["fabric", "neoforge", "paper"],
      "environment": "server"
    }
  ]
}
```

调用可选 API 前先判断：

<!--@include: ../../example/guide/dependencies/02.md-->

在明确检查可用性后，或希望得到更清楚的运行时错误时，可以使用 `dependencies.require(id)`。它不能替代清单中的必需依赖声明。

## 调用 Paper 插件类型 API

Paper 依赖的 `id` 使用 `PluginManager` 识别的插件名：

```json
{
  "dependencies": [
    {
      "id": "PlaceholderAPI",
      "version": "*",
      "required": true,
      "platforms": ["paper"],
      "environment": "server"
    }
  ]
}
```

声明之后，世界脚本可正常导入并调用插件 API：

<!--@include: ../../example/guide/dependencies/03.md-->

Katton 使用插件真实 JAR 或类目录编译，并在运行时委托给其现有 ClassLoader。普通类型调用不会每次经过反射。Paper 依赖只能在 `ServerPhase.READY` 使用，不要在 `BOOTSTRAP` 引用插件类。

## 开发编译类路径

清单不会为 IntelliJ 或 Gradle 下载 API。脚本包项目可使用以下任一种方式：

```kotlin
dependencies {
    // API 有 Maven 产物时优先使用：
    compileOnly("group:artifact:version")

    // 或把依赖 JAR 放进 lib/：
    compileOnly(fileTree("lib") { include("*.jar") })
}
```

模板生成器始终生成 `lib/*.jar` 的 compile-only 后备配置，并允许在下载项目前添加世界包依赖。空的全局包初始使用 `dependencies: []`；只有全局脚本确实使用外部 API 时，才应在其清单中补充依赖。

## 平台行为

| 平台 | 解析与执行方式 |
|---|---|
| Fabric | 通过 Fabric Loader 解析模组 ID，并包含必需的传递模组依赖。 |
| NeoForge | 通过 NeoForge 解析模组 ID，并包含必需的传递模组依赖。 |
| Paper | 在 `ServerPhase.READY` 通过 `PluginManager` 解析已启用插件，并委托给其 ClassLoader。 |

多人连接的接收客户端会独立校验自己的适用依赖。服务端安装了某依赖，并不代表客户端也安装了对应模组。

完整字段与版本语法见[清单、依赖与签名](../architecture/manifest.md)。
