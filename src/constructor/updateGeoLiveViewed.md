---
title: "updateGeoLiveViewed"
original: "https://core.telegram.org/constructor/updateGeoLiveViewed"
section: ref
description: "Live geoposition message was viewed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateGeoLiveViewed","url":"/constructor/updateGeoLiveViewed/"}]
layout: layout.njk
---

# updateGeoLiveViewed

Live geoposition message was viewed

```
updateGeoLiveViewed#871fb939 peer:Peer msg_id:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer">Peer</a></td><td>The user that viewed the live geoposition</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID of geoposition message</td></tr></tbody></table>

### Type

[Update](/type/Update/)
