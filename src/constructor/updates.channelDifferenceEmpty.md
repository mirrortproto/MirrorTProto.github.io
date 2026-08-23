---
title: "updates.channelDifferenceEmpty"
original: "https://core.telegram.org/constructor/updates.channelDifferenceEmpty"
section: ref
description: "updates.ChannelDifference"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updates.channelDifferenceEmpty","url":"/constructor/updates.channelDifferenceEmpty/"}]
layout: layout.njk
---

# updates.channelDifferenceEmpty

There are no new updates

```
updates.channelDifferenceEmpty#3e11affb flags:# final:flags.0?true pts:int timeout:flags.1?int = updates.ChannelDifference;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>final</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether there are more updates that must be fetched (always false)</td></tr><tr><td><strong>pts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The latest <a href="/api/updates">PTS</a></td></tr><tr><td><strong>timeout</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Clients are supposed to refetch the channel difference after timeout seconds have elapsed, if the user is <a href="/api/updates#subscribing-to-updates-of-channels-supergroups">currently viewing the chat, see here »</a> for more info.</td></tr></tbody></table>

### Type

[updates.ChannelDifference](/type/updates.ChannelDifference/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
