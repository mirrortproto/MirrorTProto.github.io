---
title: "messages.getAvailableReactions"
original: "https://core.telegram.org/method/messages.getAvailableReactions"
section: ref
description: "Obtain available message reactions »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getAvailableReactions","url":"/method/messages.getAvailableReactions/"}]
layout: layout.njk
---

# messages.getAvailableReactions

Obtain available [message reactions »](/api/reactions/)

```
messages.availableReactionsNotModified#9f071957 = messages.AvailableReactions;
messages.availableReactions#768e3aad hash:int reactions:Vector<AvailableReaction> = messages.AvailableReactions;
---functions---
messages.getAvailableReactions#18dea0ac hash:int = messages.AvailableReactions;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[messages.AvailableReactions](/type/messages.AvailableReactions/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
