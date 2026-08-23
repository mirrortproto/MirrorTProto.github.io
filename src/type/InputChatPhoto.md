---
title: "InputChatPhoto"
original: "https://core.telegram.org/type/InputChatPhoto"
section: ref
description: "Defines a new group profile photo."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputChatPhoto","url":"/type/InputChatPhoto/"}]
layout: layout.njk
---

# InputChatPhoto

Defines a new group profile photo.

```
inputChatPhotoEmpty#1ca48f57 = InputChatPhoto;
inputChatUploadedPhoto#bdcdaec0 flags:# file:flags.0?InputFile video:flags.1?InputFile video_start_ts:flags.2?double video_emoji_markup:flags.3?VideoSize = InputChatPhoto;
inputChatPhoto#8953ad37 id:InputPhoto = InputChatPhoto;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputChatPhotoEmpty">inputChatPhotoEmpty</a></td><td>Empty constructor, remove group photo.</td></tr><tr><td><a href="/constructor/inputChatUploadedPhoto">inputChatUploadedPhoto</a></td><td>New photo to be set as group profile photo.<br><br>The <code>file</code>, <code>video</code> and <code>video_emoji_markup</code> flags are mutually exclusive.</td></tr><tr><td><a href="/constructor/inputChatPhoto">inputChatPhoto</a></td><td>Existing photo to be set as a chat profile photo.</td></tr></tbody></table>
