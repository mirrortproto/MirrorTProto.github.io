---
title: "contacts.exportContactToken"
original: "https://core.telegram.org/method/contacts.exportContactToken"
section: ref
description: "Generates a temporary profile link for the currently logged-in user."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.exportContactToken","url":"/method/contacts.exportContactToken/"}]
layout: layout.njk
---

# contacts.exportContactToken

Generates a [temporary profile link](/api/links/#temporary-profile-links) for the currently logged-in user.

```
exportedContactToken#41bf109b url:string expires:int = ExportedContactToken;
---functions---
contacts.exportContactToken#f8654027 = ExportedContactToken;
```

### Parameters

This constructor does not require any parameters.

### Result

[ExportedContactToken](/type/ExportedContactToken/)

### Only users can use this method

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
