---
title: "inputPeerPhotoFileLocation"
original: "https://core.telegram.org/constructor/inputPeerPhotoFileLocation"
section: ref
description: "Location of profile photo of channel/group/supergroup/user"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputPeerPhotoFileLocation","url":"/constructor/inputPeerPhotoFileLocation/"}]
layout: layout.njk
---

# inputPeerPhotoFileLocation

Location of profile photo of channel/group/supergroup/user

```
inputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>big</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to download the high-quality version of the picture</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The peer whose profile picture should be downloaded</td></tr><tr><td><strong>photo_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Photo ID</td></tr></tbody></table>

### Type

[InputFileLocation](/type/InputFileLocation/)
