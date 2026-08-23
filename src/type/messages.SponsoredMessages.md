---
title: "messages.SponsoredMessages"
original: "https://core.telegram.org/type/messages.SponsoredMessages"
section: ref
description: "A set of sponsored messages associated with a channel"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.SponsoredMessages","url":"/type/messages.SponsoredMessages/"}]
layout: layout.njk
---

# messages.SponsoredMessages

A set of [sponsored messages](https://core.telegram.org/api/sponsored-messages) associated with a channel

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
messages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;

---functions---

messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.sponsoredMessages">messages.sponsoredMessages</a></td><td>A set of sponsored messages associated to a channel</td></tr><tr><td><a href="/constructor/messages.sponsoredMessagesEmpty">messages.sponsoredMessagesEmpty</a></td><td>No sponsored messages are available.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getSponsoredMessages">messages.getSponsoredMessages</a></td><td>Get a list of <a href="/api/sponsored-messages">sponsored messages for a peer, see here »</a> for more info.</td></tr></tbody></table>
