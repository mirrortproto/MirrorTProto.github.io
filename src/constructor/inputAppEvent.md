---
title: "inputAppEvent"
original: "https://core.telegram.org/constructor/inputAppEvent"
section: ref
description: "Event that occurred in the application."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputAppEvent","url":"/constructor/inputAppEvent/"}]
layout: layout.njk
---

# inputAppEvent

Event that occurred in the application.

```
inputAppEvent#1d1b1245 time:double type:string peer:long data:JSONValue = InputAppEvent;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>time</strong></td><td style="text-align: center;"><a href="/type/double">double</a></td><td>Client's exact timestamp for the event</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Type of event</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Arbitrary numeric value for more convenient selection of certain event types, or events referring to a certain object</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/type/JSONValue">JSONValue</a></td><td>Details of the event</td></tr></tbody></table>

### Type

[InputAppEvent](/type/InputAppEvent/)
