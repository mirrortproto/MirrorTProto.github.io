---
title: "stories.togglePinned"
original: "https://core.telegram.org/method/stories.togglePinned"
section: ref
description: "Pin or unpin one or more stories"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.togglePinned","url":"/method/stories.togglePinned/"}]
layout: layout.njk
---

# stories.togglePinned

Pin or unpin one or more stories

```
---functions---
stories.togglePinned#9a75a1ef peer:InputPeer id:Vector<int> pinned:Bool = Vector<int>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where to pin or unpin stories</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>IDs of stories to pin or unpin</td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether to pin or unpin the stories</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)&lt;[int](/type/int/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
