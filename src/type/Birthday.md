---
title: "Birthday"
original: "https://core.telegram.org/type/Birthday"
section: ref
description: "Birthday information for a user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Birthday","url":"/type/Birthday/"}]
layout: layout.njk
---

# Birthday

[Birthday](/api/profile/#birthday) information for a user.

```
birthday#6c8e1e06 flags:# day:int month:int year:flags.0?int = Birthday;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/birthday">birthday</a></td><td><a href="/api/profile#birthday">Birthday</a> information for a user.<br><br>Also used to invite users to gift <a href="/api/premium#gifting-telegram-premium">Telegram Premium subscriptions »</a> to other users with birthdays within a +1/-1 day time range, related to the current day.</td></tr></tbody></table>

### Related pages

#### [User profiles](/api/profile/)

Telegram offers many customization options for your profile!
