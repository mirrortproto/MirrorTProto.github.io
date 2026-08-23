---
title: "stats.getStoryPublicForwards"
original: "https://core.telegram.org/method/stats.getStoryPublicForwards"
section: ref
description: "Obtain forwards of a story as a message to public chats and reposts by public channels."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stats.getStoryPublicForwards","url":"/method/stats.getStoryPublicForwards/"}]
layout: layout.njk
---

# stats.getStoryPublicForwards

Obtain forwards of a [story](/api/stories/) as a message to public chats and reposts by public channels.

```
stats.publicForwards#93037e20 flags:# count:int forwards:Vector<PublicForward> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = stats.PublicForwards;
---functions---
stats.getStoryPublicForwards#a6437ef6 peer:InputPeer id:int offset:string limit:int = stats.PublicForwards;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the story was originally posted</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/stories">Story</a> ID</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Offset for pagination, from <a href="/constructor/stats.publicForwards">stats.PublicForwards</a>.<code>next_offset</code>.</td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Maximum number of results to return, <a href="/api/offsets">see pagination</a></td></tr></tbody></table>

### Result

[stats.PublicForwards](/type/stats.PublicForwards/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [stats.publicForwards](/constructor/stats.publicForwards/)

Contains info about the forwards of a [story](/api/stories/) as a message to public chats and reposts by public channels.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
