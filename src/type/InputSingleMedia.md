---
title: "InputSingleMedia"
original: "https://core.telegram.org/type/InputSingleMedia"
section: ref
description: "A single media in an album or grouped media sent with messages.sendMultiMedia."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputSingleMedia","url":"/type/InputSingleMedia/"}]
layout: layout.njk
---

# InputSingleMedia

A single media in an [album or grouped media](/api/files/#albums-grouped-media) sent with [messages.sendMultiMedia](/method/messages.sendMultiMedia/).

```
inputSingleMedia#1cc6e91f flags:# media:InputMedia random_id:long message:string entities:flags.0?Vector<MessageEntity> = InputSingleMedia;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputSingleMedia">inputSingleMedia</a></td><td>A single media in an <a href="/api/files#albums-grouped-media">album or grouped media</a> sent with <a href="/method/messages.sendMultiMedia">messages.sendMultiMedia</a>.</td></tr></tbody></table>

### Related pages

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [messages.sendMultiMedia](/method/messages.sendMultiMedia/)

Send an [album or grouped media](/api/files/#albums-grouped-media)
