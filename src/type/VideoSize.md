---
title: "VideoSize"
original: "https://core.telegram.org/type/VideoSize"
section: ref
description: "Represents an animated video thumbnail"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"VideoSize","url":"/type/VideoSize/"}]
layout: layout.njk
---

# VideoSize

Represents an animated video thumbnail

```
videoSize#de33b094 flags:# type:string w:int h:int size:int video_start_ts:flags.0?double = VideoSize;
videoSizeEmojiMarkup#f85c413c emoji_id:long background_colors:Vector<int> = VideoSize;
videoSizeStickerMarkup#da082fe stickerset:InputStickerSet sticker_id:long background_colors:Vector<int> = VideoSize;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/videoSize">videoSize</a></td><td>An <a href="/api/files#animated-profile-pictures">animated profile picture</a> in MPEG4 format</td></tr><tr><td><a href="/constructor/videoSizeEmojiMarkup">videoSizeEmojiMarkup</a></td><td>An <a href="/api/files#animated-profile-pictures">animated profile picture</a> based on a <a href="/api/custom-emoji">custom emoji sticker</a>.</td></tr><tr><td><a href="/constructor/videoSizeStickerMarkup">videoSizeStickerMarkup</a></td><td>An <a href="/api/files#animated-profile-pictures">animated profile picture</a> based on a <a href="/api/stickers">sticker</a>.</td></tr></tbody></table>
