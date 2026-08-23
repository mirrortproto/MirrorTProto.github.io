---
title: "help.appConfig"
original: "https://core.telegram.org/constructor/help.appConfig"
section: ref
description: "Contains various client configuration parameters"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.appConfig","url":"/constructor/help.appConfig/"}]
layout: layout.njk
---

# help.appConfig

Contains various [client configuration parameters](/api/config/#client-configuration)

```
help.appConfig#dd18782e hash:int config:JSONValue = help.AppConfig;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a></td></tr><tr><td><strong>config</strong></td><td style="text-align: center;"><a href="/type/JSONValue">JSONValue</a></td><td><a href="/api/config#client-configuration">Client configuration parameters</a></td></tr></tbody></table>

### Type

[help.AppConfig](/type/help.AppConfig/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
