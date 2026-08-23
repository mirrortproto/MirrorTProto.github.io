---
title: "updateStory"
original: "https://core.telegram.org/constructor/updateStory"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateStory","url":"/constructor/updateStory/"}]
layout: layout.njk
---

# updateStory

A new story was posted.

```
updateStory#75b3b798 peer:Peer story:StoryItem = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>ID of the poster.</td></tr><tr><td><strong>story</strong></td><td style="text-align: center;"><a href="/type/StoryItem">StoryItem</a></td><td>The story that was posted.</td></tr></tbody></table>

### Type

[Update](/type/Update/)
