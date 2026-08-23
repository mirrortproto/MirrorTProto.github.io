---
title: "messages.getDialogFilters"
original: "https://core.telegram.org/method/messages.getDialogFilters"
section: ref
description: "This constructor does not require any parameters."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDialogFilters","url":"/method/messages.getDialogFilters/"}]
layout: layout.njk
---

# messages.getDialogFilters

Get [folders](/api/folders/)

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;
---functions---
messages.getDialogFilters#efd48c89 = messages.DialogFilters;
```

### Parameters

This constructor does not require any parameters.

### Result

[messages.DialogFilters](/type/messages.DialogFilters/)

### Only users can use this method

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
