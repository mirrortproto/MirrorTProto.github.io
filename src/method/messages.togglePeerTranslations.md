---
title: "messages.togglePeerTranslations"
original: "https://core.telegram.org/method/messages.togglePeerTranslations"
section: ref
description: "Show or hide the real-time chat translation popup for a certain chat"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.togglePeerTranslations","url":"/method/messages.togglePeerTranslations/"}]
layout: layout.njk
---

# messages.togglePeerTranslations

Show or hide the [real-time chat translation popup](/api/translation/) for a certain chat

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.togglePeerTranslations#e47cb579 flags:# disabled:flags.0?true peer:InputPeer = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>disabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to disable or enable the real-time chat translation popup</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Message translation](/api/translation/)

Telegram allows translating chat messages: Telegram Premium users may even enable real-time chat translation.
