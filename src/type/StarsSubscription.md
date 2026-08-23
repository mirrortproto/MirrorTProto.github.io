---
title: "StarsSubscription"
original: "https://core.telegram.org/type/StarsSubscription"
section: ref
description: "Represents a Telegram Star subscription »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"StarsSubscription","url":"/type/StarsSubscription/"}]
layout: layout.njk
---

# StarsSubscription

Represents a [Telegram Star subscription »](/api/invites/#paid-invite-links).

```
starsSubscription#2e6eab1a flags:# canceled:flags.0?true can_refulfill:flags.1?true missing_balance:flags.2?true bot_canceled:flags.7?true id:string peer:Peer until_date:int pricing:StarsSubscriptionPricing chat_invite_hash:flags.3?string title:flags.4?string photo:flags.5?WebDocument invoice_slug:flags.6?string = StarsSubscription;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/starsSubscription">starsSubscription</a></td><td>Represents a <a href="/api/invites#paid-invite-links">Telegram Star subscription »</a>.</td></tr></tbody></table>

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
