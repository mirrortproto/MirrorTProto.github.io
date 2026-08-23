---
title: "mediaAreaChannelPost"
original: "https://core.telegram.org/constructor/mediaAreaChannelPost"
section: ref
description: "Represents a channel post."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"mediaAreaChannelPost","url":"/constructor/mediaAreaChannelPost/"}]
layout: layout.njk
---

# mediaAreaChannelPost

Represents a channel post.

```
mediaAreaChannelPost#770416af coordinates:MediaAreaCoordinates channel_id:long msg_id:int = MediaArea;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>coordinates</strong></td><td style="text-align: center;"><a href="/type/MediaAreaCoordinates">MediaAreaCoordinates</a></td><td>The size and location of the media area corresponding to the location sticker on top of the story media.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>The channel that posted the message</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the channel message</td></tr></tbody></table>

### Type

[MediaArea](/type/MediaArea/)
