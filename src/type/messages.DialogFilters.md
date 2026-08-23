---
title: "messages.DialogFilters"
original: "https://core.telegram.org/type/messages.DialogFilters"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.DialogFilters","url":"/type/messages.DialogFilters/"}]
layout: layout.njk
---

# messages.DialogFilters

[Folder](/api/folders/) information

```
messages.dialogFilters#2ad93719 flags:# tags_enabled:flags.0?true filters:Vector<DialogFilter> = messages.DialogFilters;

---functions---

messages.getDialogFilters#efd48c89 = messages.DialogFilters;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.dialogFilters">messages.dialogFilters</a></td><td><a href="/api/folders">Folder and folder tags</a> information</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getDialogFilters">messages.getDialogFilters</a></td><td>Get <a href="/api/folders">folders</a></td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
