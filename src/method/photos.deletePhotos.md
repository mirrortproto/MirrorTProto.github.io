---
title: "photos.deletePhotos"
original: "https://core.telegram.org/method/photos.deletePhotos"
section: ref
description: "Deletes profile photos. The method returns a list of successfully deleted photo IDs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"photos.deletePhotos","url":"/method/photos.deletePhotos/"}]
layout: layout.njk
---

# photos.deletePhotos

Deletes profile photos. The method returns a list of successfully deleted photo IDs.

```
---functions---
photos.deletePhotos#87cf7f2f id:Vector<InputPhoto> = Vector<long>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPhoto">InputPhoto</a>&gt;</td><td>Input photos to delete</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[long](/type/long/)\>

### Only users can use this method
