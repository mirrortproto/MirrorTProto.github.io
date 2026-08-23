---
title: "PhotoSize"
original: "https://core.telegram.org/type/PhotoSize"
section: ref
description: "Location of a certain size of a picture"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PhotoSize","url":"/type/PhotoSize/"}]
layout: layout.njk
---

# PhotoSize

Location of a certain size of a picture

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
photoCachedSize#e9a734fa type:string location:FileLocation w:int h:int bytes:bytes = PhotoSize;
photoSize#77bfb61b type:string location:FileLocation w:int h:int size:int = PhotoSize;
photoSizeEmpty#0e17e23c type:string = PhotoSize;
```

API schema:

```
photoSizeEmpty#e17e23c type:string = PhotoSize;
photoSize#75c78e60 type:string w:int h:int size:int = PhotoSize;
photoCachedSize#21e1ad6 type:string w:int h:int bytes:bytes = PhotoSize;
photoStrippedSize#e0b0bc2e type:string bytes:bytes = PhotoSize;
photoSizeProgressive#fa3efb95 type:string w:int h:int sizes:Vector<int> = PhotoSize;
photoPathSize#d8214d41 type:string bytes:bytes = PhotoSize;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/photoSizeEmpty">photoSizeEmpty</a></td><td>Empty constructor. Image with this thumbnail is unavailable.</td></tr><tr><td><a href="/constructor/photoSize">photoSize</a></td><td>Image description.</td></tr><tr><td><a href="/constructor/photoCachedSize">photoCachedSize</a></td><td>Description of an image and its content.</td></tr><tr><td><a href="/constructor/photoStrippedSize">photoStrippedSize</a></td><td>A low-resolution compressed JPG payload</td></tr><tr><td><a href="/constructor/photoSizeProgressive">photoSizeProgressive</a></td><td>Progressively encoded photosize</td></tr><tr><td><a href="/constructor/photoPathSize">photoPathSize</a></td><td>Messages with animated stickers can have a compressed svg (&lt; 300 bytes) to show the outline of the sticker before fetching the actual lottie animation.</td></tr></tbody></table>
