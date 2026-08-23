---
title: "SavedDialog"
original: "https://core.telegram.org/type/SavedDialog"
section: ref
description: "Represents a saved message dialog »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SavedDialog","url":"/type/SavedDialog/"}]
layout: layout.njk
---

# SavedDialog

Represents a [saved message dialog »](/api/saved-messages/).

```
savedDialog#bd87cb6c flags:# pinned:flags.2?true peer:Peer top_message:int = SavedDialog;
monoForumDialog#64407ea7 flags:# unread_mark:flags.3?true nopaid_messages_exception:flags.4?true peer:Peer top_message:int read_inbox_max_id:int read_outbox_max_id:int unread_count:int unread_reactions_count:int draft:flags.1?DraftMessage = SavedDialog;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/savedDialog">savedDialog</a></td><td>Represents a <a href="/api/saved-messages">saved dialog »</a>.</td></tr><tr><td><a href="/constructor/monoForumDialog">monoForumDialog</a></td><td>Represents a <a href="/api/monoforum">monoforum topic »</a>.</td></tr></tbody></table>

### Related pages

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.
