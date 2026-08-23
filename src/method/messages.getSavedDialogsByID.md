---
title: "messages.getSavedDialogsByID"
original: "https://core.telegram.org/method/messages.getSavedDialogsByID"
section: ref
description: "Obtain information about specific saved message dialogs » or monoforum topics »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedDialogsByID","url":"/method/messages.getSavedDialogsByID/"}]
layout: layout.njk
---

# messages.getSavedDialogsByID

Obtain information about specific [saved message dialogs »](/api/saved-messages/#saved-message-dialogs) or [monoforum topics »](/api/monoforum/).

```
messages.savedDialogs#f83ae221 dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsSlice#44ba9dd9 count:int dialogs:Vector<SavedDialog> messages:Vector<Message> chats:Vector<Chat> users:Vector<User> = messages.SavedDialogs;
messages.savedDialogsNotModified#c01f6fe8 count:int = messages.SavedDialogs;
---functions---
messages.getSavedDialogsByID#6f6f9c96 flags:# parent_peer:flags.1?InputPeer ids:Vector<InputPeer> = messages.SavedDialogs;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/InputPeer">InputPeer</a></td><td>If set, fetches <a href="/api/monoforum">monoforum topics »</a>, otherwise fetches <a href="/api/saved-messages#saved-message-dialogs">saved message dialogs »</a>.</td></tr><tr><td><strong>ids</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPeer">InputPeer</a>&gt;</td><td>IDs of dialogs (topics) to fetch.</td></tr></tbody></table>

### Result

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Only users can use this method

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
