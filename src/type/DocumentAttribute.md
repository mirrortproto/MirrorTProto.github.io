---
title: "DocumentAttribute"
original: "https://core.telegram.org/type/DocumentAttribute"
section: ref
description: "Various possible attributes of a document (used to define if it's a sticker, a GIF, a video, a mask sticker, an image, an audio, and so on)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DocumentAttribute","url":"/type/DocumentAttribute/"}]
layout: layout.njk
---

# DocumentAttribute

Various possible attributes of a document (used to define if it's a sticker, a GIF, a video, a mask sticker, an image, an audio, and so on)

#### [End-to-end schema](/schema/end-to-end/)

```
===23===
documentAttributeAnimated#11b58939 = DocumentAttribute;
documentAttributeAudio#051448e5 duration:int = DocumentAttribute;
documentAttributeFilename#15590068 file_name:string = DocumentAttribute;
documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;
documentAttributeSticker#fb0a5727 = DocumentAttribute;
documentAttributeVideo#5910cccb duration:int w:int h:int = DocumentAttribute;

===45===
documentAttributeAudio#ded218e0 duration:int title:string performer:string = DocumentAttribute;
documentAttributeSticker#3a556302 alt:string stickerset:InputStickerSet = DocumentAttribute;

===46===
documentAttributeAudio#9852f9c6 flags:# duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;

===66===
documentAttributeVideo#0ef02ce6 flags:# duration:int w:int h:int = DocumentAttribute;
```

API schema:

```
documentAttributeImageSize#6c37c15c w:int h:int = DocumentAttribute;
documentAttributeAnimated#11b58939 = DocumentAttribute;
documentAttributeSticker#6319d612 flags:# mask:flags.1?true alt:string stickerset:InputStickerSet mask_coords:flags.0?MaskCoords = DocumentAttribute;
documentAttributeVideo#43c57c48 flags:# round_message:flags.0?true supports_streaming:flags.1?true nosound:flags.3?true duration:double w:int h:int preload_prefix_size:flags.2?int video_start_ts:flags.4?double video_codec:flags.5?string = DocumentAttribute;
documentAttributeAudio#9852f9c6 flags:# voice:flags.10?true duration:int title:flags.0?string performer:flags.1?string waveform:flags.2?bytes = DocumentAttribute;
documentAttributeFilename#15590068 file_name:string = DocumentAttribute;
documentAttributeHasStickers#9801d2f7 = DocumentAttribute;
documentAttributeCustomEmoji#fd149899 flags:# free:flags.0?true text_color:flags.1?true alt:string stickerset:InputStickerSet = DocumentAttribute;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/documentAttributeImageSize">documentAttributeImageSize</a></td><td>Defines the width and height of an image uploaded as document</td></tr><tr><td><a href="/constructor/documentAttributeAnimated">documentAttributeAnimated</a></td><td>Defines an animated GIF</td></tr><tr><td><a href="/constructor/documentAttributeSticker">documentAttributeSticker</a></td><td>Defines a sticker</td></tr><tr><td><a href="/constructor/documentAttributeVideo">documentAttributeVideo</a></td><td>Defines a video</td></tr><tr><td><a href="/constructor/documentAttributeAudio">documentAttributeAudio</a></td><td>Represents an audio file</td></tr><tr><td><a href="/constructor/documentAttributeFilename">documentAttributeFilename</a></td><td>A simple document with a file name</td></tr><tr><td><a href="/constructor/documentAttributeHasStickers">documentAttributeHasStickers</a></td><td>Whether the current document has stickers attached</td></tr><tr><td><a href="/constructor/documentAttributeCustomEmoji">documentAttributeCustomEmoji</a></td><td>Info about a custom emoji</td></tr></tbody></table>
