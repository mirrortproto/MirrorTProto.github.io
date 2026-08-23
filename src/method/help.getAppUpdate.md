---
title: "help.getAppUpdate"
original: "https://core.telegram.org/method/help.getAppUpdate"
section: ref
description: "Returns information on update availability for the current application."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getAppUpdate","url":"/method/help.getAppUpdate/"}]
layout: layout.njk
---

# help.getAppUpdate

Returns information on update availability for the current application.

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;
---functions---
help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>source</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Source</td></tr></tbody></table>

### Result

[help.AppUpdate](/type/help.AppUpdate/)

### Only users can use this method
