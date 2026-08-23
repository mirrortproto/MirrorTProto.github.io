---
title: "updateReadStories"
original: "https://core.telegram.org/constructor/updateReadStories"
section: ref
description: "Stories of a specific peer were marked as read."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateReadStories","url":"/constructor/updateReadStories/"}]
layout: layout.njk
---

# updateReadStories

Stories of a specific peer were marked as read.

```
updateReadStories#f74e932b peer:Peer max_id:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The peer</td></tr><tr><td><strong>max_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of the last story that was marked as read</td></tr></tbody></table>

### Type

[Update](/type/Update/)
