---
title: "statsGraphAsync"
original: "https://core.telegram.org/constructor/statsGraphAsync"
section: ref
description: "This channel statistics graph must be generated asynchronously using stats.loadAsyncGraph to reduce server load"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"statsGraphAsync","url":"/constructor/statsGraphAsync/"}]
layout: layout.njk
---

# statsGraphAsync

This [channel statistics graph](/api/stats/) must be generated asynchronously using [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/) to reduce server load

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Token to use for fetching the async graph</td></tr></tbody></table>

### Type

[StatsGraph](/type/StatsGraph/)

### Related pages

#### [Channel statistics](/api/stats/)

Telegram offers detailed channel statistics for channels and supergroups.

#### [stats.loadAsyncGraph](/method/stats.loadAsyncGraph/)

Load [channel statistics graph](/api/stats/) asynchronously
