---
title: "channels.getChannelRecommendations"
original: "https://core.telegram.org/method/channels.getChannelRecommendations"
section: ref
description: "Obtain a list of similarly themed public channels, selected based on similarities in their subscriber bases."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"channels.getChannelRecommendations","url":"/method/channels.getChannelRecommendations/"}]
layout: layout.njk
---

# channels.getChannelRecommendations

Obtain a list of similarly themed public channels, selected based on similarities in their **subscriber bases**.

```
messages.chats#64ff9fd5 chats:Vector<Chat> = messages.Chats;
messages.chatsSlice#9cd81144 count:int chats:Vector<Chat> = messages.Chats;
---functions---
channels.getChannelRecommendations#25a71742 flags:# channel:flags.0?InputChannel = messages.Chats;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>channel</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputChannel">InputChannel</a></td><td>The method will return channels related to the passed <code>channel</code>. If not set, the method will returns channels related to channels the user has joined.</td></tr></tbody></table>

### Result

[messages.Chats](/type/messages.Chats/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr></tbody></table>
