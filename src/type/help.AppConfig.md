---
title: "help.AppConfig"
original: "https://core.telegram.org/type/help.AppConfig"
section: ref
description: "Contains various client configuration parameters"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.AppConfig","url":"/type/help.AppConfig/"}]
layout: layout.njk
---

# help.AppConfig

Contains various [client configuration parameters](/api/config/#client-configuration)

```
help.appConfigNotModified#7cde641d = help.AppConfig;
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;

---functions---

help.getAppConfig#61e3f854 hash:int = help.AppConfig;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.appConfigNotModified">help.appConfigNotModified</a></td><td>The client configuration parameters haven't changed</td></tr><tr><td><a href="/constructor/help.appConfig">help.appConfig</a></td><td>Contains various <a href="/api/config#client-configuration">client configuration parameters</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getAppConfig">help.getAppConfig</a></td><td>Get app-specific configuration, see <a href="/api/config#client-configuration">client configuration</a> for more info on the result.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
