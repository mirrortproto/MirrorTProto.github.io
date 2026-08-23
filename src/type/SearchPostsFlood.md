---
title: "SearchPostsFlood"
original: "https://core.telegram.org/type/SearchPostsFlood"
section: ref
description: "Indicates if the specified global post search » requires payment."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"SearchPostsFlood","url":"/type/SearchPostsFlood/"}]
layout: layout.njk
---

# SearchPostsFlood

Indicates if the specified [global post search »](/api/search/#posts-tab) requires payment.

```
searchPostsFlood#3e0b5b6a flags:# query_is_free:flags.0?true total_daily:int remains:int wait_till:flags.1?int stars_amount:long = SearchPostsFlood;

---functions---

channels.checkSearchPostsFlood#22567115 flags:# query:flags.0?string = SearchPostsFlood;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/searchPostsFlood">searchPostsFlood</a></td><td>Indicates if the specified <a href="/api/search#posts-tab">global post search »</a> requires payment.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.checkSearchPostsFlood">channels.checkSearchPostsFlood</a></td><td>Check if the specified <a href="/api/search#posts-tab">global post search »</a> requires payment.</td></tr></tbody></table>

### Related pages

#### [Search and filters](/api/search/)

Telegram allows applying detailed message filters while looking for messages in chats.
