---
title: "contacts.resolvePhone"
original: "https://core.telegram.org/method/contacts.resolvePhone"
section: ref
description: "Resolve a phone number to get user info, if their privacy settings allow it."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"contacts.resolvePhone","url":"/method/contacts.resolvePhone/"}]
layout: layout.njk
---

# contacts.resolvePhone

Resolve a phone number to get user info, if their privacy settings allow it.

Make sure to implement client-side ratelimiting/debounce for this method, allowing at most 1 call every 3 seconds.

```
contacts.resolvedPeer#7f077ad9 peer:Peer chats:Vector<Chat> users:Vector<User> = contacts.ResolvedPeer;
---functions---
contacts.resolvePhone#8af94344 phone:string = contacts.ResolvedPeer;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number in international format, possibly obtained from a <a href="/api/links#phone-number-links">phone number deep link</a>.</td></tr></tbody></table>

### Result

[contacts.ResolvedPeer](/type/contacts.ResolvedPeer/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PHONE_NOT_OCCUPIED</td><td>No user is associated to the specified phone number.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
