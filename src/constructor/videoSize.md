---
title: "videoSize"
original: "https://core.telegram.org/constructor/videoSize"
section: ref
description: "An animated profile picture in MPEG4 format"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"videoSize","url":"/constructor/videoSize/"}]
layout: layout.njk
---

# videoSize

An [animated profile picture](/api/files/#animated-profile-pictures) in MPEG4 format

```
videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/files#videosizetype-values">videoSize.type value »</a></td></tr><tr><td><strong>w</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Video width</td></tr><tr><td><strong>h</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Video height</td></tr><tr><td><strong>size</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>File size</td></tr><tr><td><strong>video_start_ts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/double">double</a></td><td>Timestamp that should be shown as static preview to the user (seconds)</td></tr></tbody></table>

### Type

[VideoSize](/type/VideoSize/)

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
