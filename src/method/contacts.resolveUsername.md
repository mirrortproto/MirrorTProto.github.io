---
title: "contacts.resolveUsername"
original: "https://core.telegram.org/method/contacts.resolveUsername"
section: ref
description: "Resolve a @username to get peer info"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.resolveUsername","url":"/method/contacts.resolveUsername/"}]
layout: layout.njk
---

# contacts.resolveUsername

Resolve a @username to get peer info

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolveUsername#725afbbc flags:# username:string referer:flags.0?string = contacts.ResolvedPeer;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>username</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>@username to resolve</td></tr><tr><td><strong>referer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td><a href="/api/links#referral-links">Referrer ID from referral links »</a>.</td></tr></tbody></table>

### Result

[contacts.ResolvedPeer](/type/contacts.ResolvedPeer/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CONNECTION_LAYER_INVALID</td><td>Layer invalid.</td></tr><tr><td>400</td><td>STARREF_EXPIRED</td><td>The specified referral link is invalid.</td></tr><tr><td>400</td><td>USERNAME_INVALID</td><td>The provided username is not valid.</td></tr><tr><td>400</td><td>USERNAME_NOT_OCCUPIED</td><td>The provided username is not occupied.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
