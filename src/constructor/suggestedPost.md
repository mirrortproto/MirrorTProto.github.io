---
title: "suggestedPost"
original: "https://core.telegram.org/constructor/suggestedPost"
section: ref
description: "Contains info about a suggested post »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"suggestedPost","url":"/constructor/suggestedPost/"}]
layout: layout.njk
---

# suggestedPost

Contains info about a [suggested post »](/api/suggested-posts/).

```
suggestedPost#e8e37e5 flags:# accepted:flags.1?true rejected:flags.2?true price:flags.3?StarsAmount schedule_date:flags.0?int = SuggestedPost;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>accepted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether the suggested post was accepted.</td></tr><tr><td><strong>rejected</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Whether the suggested post was rejected.</td></tr><tr><td><strong>price</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/StarsAmount">StarsAmount</a></td><td>Price of the suggested post.</td></tr><tr><td><strong>schedule_date</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Scheduling date.</td></tr></tbody></table>

### Type

[SuggestedPost](/type/SuggestedPost/)

### Related pages

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.
