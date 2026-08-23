---
title: "searchResultPosition"
original: "https://core.telegram.org/constructor/searchResultPosition"
section: ref
description: "Information about a message in a specific position"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"searchResultPosition","url":"/constructor/searchResultPosition/"}]
layout: layout.njk
---

# searchResultPosition

Information about a message in a specific position

```
searchResultPosition#7f648b67 msg_id:int date:int offset:int = SearchResultsPosition;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>When was the message sent</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>0-based message position in the full list of suitable messages</td></tr></tbody></table>

### Type

[SearchResultsPosition](/type/SearchResultsPosition/)
