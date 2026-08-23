---
title: "StatsGraph"
original: "https://core.telegram.org/type/StatsGraph"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StatsGraph","url":"/type/StatsGraph/"}]
layout: layout.njk
---

# StatsGraph

Channel statistics graph

```
statsGraphAsync#4a27eb2d token:string = StatsGraph;
statsGraphError#bedc9822 error:string = StatsGraph;
statsGraph#8ea464b6 flags:# json:DataJSON zoom_token:flags.0?string = StatsGraph;

---functions---

stats.loadAsyncGraph#621d5fa0 flags:# token:string x:flags.0?long = StatsGraph;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/statsGraphAsync">statsGraphAsync</a></td><td>This <a href="/api/stats">channel statistics graph</a> must be generated asynchronously using <a href="/method/stats.loadAsyncGraph">stats.loadAsyncGraph</a> to reduce server load</td></tr><tr><td><a href="/constructor/statsGraphError">statsGraphError</a></td><td>An error occurred while generating the <a href="/api/stats">statistics graph</a></td></tr><tr><td><a href="/constructor/statsGraph">statsGraph</a></td><td><a href="/api/stats">Channel statistics graph</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stats.loadAsyncGraph">stats.loadAsyncGraph</a></td><td>Load <a href="/api/stats">channel statistics graph</a> asynchronously</td></tr></tbody></table>
