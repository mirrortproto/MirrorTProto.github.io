---
title: "Stats.PublicForwards"
original: "https://core.telegram.org/type/stats.PublicForwards"
section: ref
description: "Contains info about the forwards of a story as a message to public chats and reposts by public channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Stats.PublicForwards","url":"/type/stats.PublicForwards/"}]
layout: layout.njk
---

# Stats.PublicForwards

Contains info about the forwards of a [story](/api/stories/) as a message to public chats and reposts by public channels.

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;

---functions---

stats.getMessagePublicForwards#5f150144 channel:InputChannel msg_id:int offset:string limit:int = stats.PublicForwards;
stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/stats.publicForwards">stats.publicForwards</a></td><td>Contains info about the forwards of a <a href="/api/stories">story</a> as a message to public chats and reposts by public channels.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/stats.getMessagePublicForwards">stats.getMessagePublicForwards</a></td><td>Obtains a list of messages, indicating to which other public channels was a channel message forwarded.<br>Will return a list of <a href="/constructor/message">messages</a> with <code>peer_id</code> equal to the public channel to which this message was forwarded.</td></tr><tr><td><a href="/method/stats.getStoryPublicForwards">stats.getStoryPublicForwards</a></td><td>Obtain forwards of a <a href="/api/stories">story</a> as a message to public chats and reposts by public channels.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.
