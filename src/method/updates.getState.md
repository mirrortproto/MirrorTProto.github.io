---
title: "updates.getState"
original: "https://core.telegram.org/method/updates.getState"
section: ref
description: "Returns a current state of updates."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"updates.getState","url":"/method/updates.getState/"}]
layout: layout.njk
---

# updates.getState

Returns a current state of updates.

```
updates.state#a56c2a3e pts:int qts:int date:int seq:int unread_count:int = updates.State;
---functions---
updates.getState#edd4882a = updates.State;
```

### Parameters

This constructor does not require any parameters.

### Result

[updates.State](/type/updates.State/)

### Both users and bots can use this method
