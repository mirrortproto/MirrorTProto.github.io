---
title: "messages.SavedDialogs"
original: "https://core.telegram.org/type/messages.SavedDialogs"
section: ref
description: "Represents some saved message dialogs »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SavedDialogs","url":"/type/messages.SavedDialogs/"}]
layout: layout.njk
---

# messages.SavedDialogs

Represents some [saved message dialogs »](/api/saved-messages/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;

---functions---

messages.getSavedDialogs#1e91fc99 flags:# exclude_pinned:flags.0?true parent_peer:flags.1?InputPeer offset_date:int offset_id:int offset_peer:InputPeer limit:int hash:long = messages.SavedDialogs;
messages.getPinnedSavedDialogs#d63d94e0 = messages.SavedDialogs;
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.savedDialogs">messages.savedDialogs</a></td><td>Represents some <a href="/api/saved-messages">saved message dialogs »</a>.</td></tr><tr><td><a href="/constructor/messages.savedDialogsSlice">messages.savedDialogsSlice</a></td><td>Incomplete list of <a href="/api/saved-messages">saved message dialogs »</a> with messages and auxiliary data.</td></tr><tr><td><a href="/constructor/messages.savedDialogsNotModified">messages.savedDialogsNotModified</a></td><td>The saved dialogs haven't changed</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSavedDialogs">messages.getSavedDialogs</a></td><td>Returns the current <a href="/api/saved-messages">saved dialog list »</a> or <a href="/api/monoforum">monoforum topic list »</a>.</td></tr><tr><td><a href="/method/messages.getPinnedSavedDialogs">messages.getPinnedSavedDialogs</a></td><td>Get pinned <a href="/api/saved-messages">saved dialogs, see here »</a> for more info.</td></tr><tr><td><a href="/method/messages.getSavedDialogsByID">messages.getSavedDialogsByID</a></td><td>Obtain information about specific <a href="/api/saved-messages#saved-message-dialogs">saved message dialogs »</a> or <a href="/api/monoforum">monoforum topics »</a>.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
