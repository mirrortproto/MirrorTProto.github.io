---
title: "help.PromoData"
original: "https://core.telegram.org/type/help.PromoData"
section: ref
description: "Info about pinned MTProxy or Public Service Announcement peers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"help.PromoData","url":"/type/help.PromoData/"}]
layout: layout.njk
---

# help.PromoData

Info about pinned MTProxy or Public Service Announcement peers.

```
help.promoDataEmpty#98f6ac75 expires:int = help.PromoData;
help.promoData#8a4d87a flags:# proxy:flags.0?true expires:int peer:flags.3?Peer psa_type:flags.1?string psa_message:flags.2?string pending_suggestions:Vector<string> dismissed_suggestions:Vector<string> custom_pending_suggestion:flags.4?PendingSuggestion chats:Vector<Chat> users:Vector<User> = help.PromoData;

---functions---

help.getPromoData#c0977421 = help.PromoData;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.promoDataEmpty">help.promoDataEmpty</a></td><td>No PSA/MTProxy info is available</td></tr><tr><td><a href="/constructor/help.promoData">help.promoData</a></td><td>A set of useful suggestions and a PSA/MTProxy sponsored peer, see <a href="/api/config#suggestions">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getPromoData">help.getPromoData</a></td><td>Returns a set of useful suggestions and PSA/MTProxy sponsored peers, see <a href="/api/config#suggestions">here »</a> for more info.</td></tr></tbody></table>
