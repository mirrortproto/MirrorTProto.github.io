---
title: "help.getPeerColors"
original: "https://core.telegram.org/method/help.getPeerColors"
section: ref
description: "Get the set of accent color palettes » that can be used for message accents."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getPeerColors","url":"/method/help.getPeerColors/"}]
layout: layout.njk
---

# help.getPeerColors

Get the set of [accent color palettes »](/api/colors/) that can be used for message accents.

```
help.peerColorsNotModified#2ba1f5ce = help.PeerColors;
help.peerColors#f8ed08 hash:int colors:Vector<help.PeerColorOption> = help.PeerColors;
---functions---
help.getPeerColors#da80f42f hash:int = help.PeerColors;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/offsets#hash-generation">Hash used for caching, for more info click here</a>.</td></tr></tbody></table>

### Result

[help.PeerColors](/type/help.PeerColors/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
