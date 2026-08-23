---
title: "messages.Dialogs"
original: "https://core.telegram.org/type/messages.Dialogs"
section: ref
description: "Object contains a list of chats with messages and auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.Dialogs","url":"/type/messages.Dialogs/"}]
layout: layout.njk
---

# messages.Dialogs

Object contains a list of chats with messages and auxiliary data.

```
messages.dialogs#15ba6c40 dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsSlice#71e094f3 count:int dialogs:Vector<Dialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.Dialogs;
messages.dialogsNotModified#f0e3e596 count:int = messages.Dialogs;

---functions---

messages.getDialogs#a0f4cb4f flags:# exclude_pinned:flags.0?true folder_id:flags.1?int offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.Dialogs;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.dialogs">messages.dialogs</a></td><td>Full list of chats with messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.dialogsSlice">messages.dialogsSlice</a></td><td>Incomplete list of dialogs with messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.dialogsNotModified">messages.dialogsNotModified</a></td><td>Dialogs haven't changed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getDialogs">messages.getDialogs</a></td><td>Returns the current user dialog list.</td></tr></tbody></table>
