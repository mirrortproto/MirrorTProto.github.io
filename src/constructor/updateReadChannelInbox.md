---
title: "updateReadChannelInbox"
original: "https://core.telegram.org/constructor/updateReadChannelInbox"
section: ref
description: "Incoming messages in a channel/supergroup were read"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadChannelInbox","url":"/constructor/updateReadChannelInbox/"}]
layout: layout.njk
---

# updateReadChannelInbox

Incoming messages in a [channel/supergroup](/api/channel/) were read

```
updateReadChannelInbox#922e6e10 flags:# folder_id:flags.0?int channel_id:long max_id:int still_unread_count:int pts:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td><a href="/api/folders#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Channel/supergroup ID</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Position up to which all incoming messages are read.</td></tr><tr><td><strong>still_unread_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Count of messages weren't read yet</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/updates">Event count after generation</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
