---
title: "account.updateColor"
original: "https://core.telegram.org/method/account.updateColor"
section: ref
description: "Update the accent color and background custom emoji » of the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.updateColor","url":"/method/account.updateColor/"}]
layout: layout.njk
---

# account.updateColor

Update the [accent color and background custom emoji »](/api/colors/) of the current account.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.updateColor#684d214e flags:# for_profile:flags.1?true color:flags.2?PeerColor = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>for_profile</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether to change the accent color emoji pattern of the profile page; otherwise, the accent color and emoji pattern of messages will be changed.</td></tr><tr><td><strong>color</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/PeerColor">PeerColor</a></td><td><a href="/api/colors">ID of the accent color palette »</a> to use (not RGB24, see <a href="/api/colors">here »</a> for more info).</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>COLOR_INVALID</td><td>The specified color palette ID was invalid.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Accent colors](/api/colors/)

Telegram users and channels can change the accent color and background pattern of their profile page and their messages!
