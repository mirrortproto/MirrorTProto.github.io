---
title: "help.AppUpdate"
original: "https://core.telegram.org/type/help.AppUpdate"
section: ref
description: "Contains info on app update availability."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.AppUpdate","url":"/type/help.AppUpdate/"}]
layout: layout.njk
---

# help.AppUpdate

Contains info on app update availability.

```
help.appUpdate#ccbbce30 flags:# can_not_skip:flags.0?true id:int version:string text:string entities:Vector<MessageEntity> document:flags.1?Document url:flags.2?string sticker:flags.3?Document = help.AppUpdate;
help.noAppUpdate#c45a6536 = help.AppUpdate;

---functions---

help.getAppUpdate#522d5a7d source:string = help.AppUpdate;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.appUpdate">help.appUpdate</a></td><td>An update is available for the application.</td></tr><tr><td><a href="/constructor/help.noAppUpdate">help.noAppUpdate</a></td><td>No updates are available for the application.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getAppUpdate">help.getAppUpdate</a></td><td>Returns information on update availability for the current application.</td></tr></tbody></table>
