---
title: "messages.getSponsoredMessages"
original: "https://core.telegram.org/method/messages.getSponsoredMessages"
section: ref
description: "Get a list of sponsored messages for a peer, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSponsoredMessages","url":"/method/messages.getSponsoredMessages/"}]
layout: layout.njk
---

# messages.getSponsoredMessages

Get a list of [sponsored messages for a peer, see here »](/api/sponsored-messages/) for more info.

```
messages.sponsoredMessages#ffda656d flags:# posts_between:flags.0?int start_delay:flags.1?int between_delay:flags.2?int messages:Vector<SponsoredMessage> chats:Vector<Chat> users:Vector<User> = messages.SponsoredMessages;
messages.sponsoredMessagesEmpty#1839490f = messages.SponsoredMessages;
---functions---
messages.getSponsoredMessages#3d6ce850 flags:# peer:InputPeer msg_id:flags.0?int = messages.SponsoredMessages;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The currently open channel/bot.</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Must be set when fetching <a href="/api/sponsored-messages#getting-sponsored-video-advertisements">sponsored messages to show on channel videos »</a>.</td></tr></tbody></table>

### Result

[messages.SponsoredMessages](/type/messages.SponsoredMessages/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr></tbody></table>

### Related pages

#### [Sponsored messages](/api/sponsored-messages/)

How clients should fetch, display and interact with sponsored messages.
