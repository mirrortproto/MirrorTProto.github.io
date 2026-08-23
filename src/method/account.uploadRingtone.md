---
title: "account.uploadRingtone"
original: "https://core.telegram.org/method/account.uploadRingtone"
section: ref
description: "Upload notification sound, use account.saveRingtone to convert it and add it to the list of saved notification sounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.uploadRingtone","url":"/method/account.uploadRingtone/"}]
layout: layout.njk
---

# account.uploadRingtone

Upload notification sound, use [account.saveRingtone](/method/account.saveRingtone/) to convert it and add it to the list of saved notification sounds.

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
account.uploadRingtone#831a83a2 file:InputFile file_name:string mime_type:string = Document;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td>Notification sound</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>File name</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME type of file</td></tr></tbody></table>

### Result

[Document](/type/Document/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>RINGTONE_MIME_INVALID</td><td>The MIME type for the ringtone is invalid.</td></tr></tbody></table>

### Related pages

#### [account.saveRingtone](/method/account.saveRingtone/)

Save or remove saved notification sound.

If the notification sound is already in MP3 format, [account.savedRingtone](/constructor/account.savedRingtone/) will be returned.  
Otherwise, it will be automatically converted and a [account.savedRingtoneConverted](/constructor/account.savedRingtoneConverted/) will be returned, containing a new [document](/constructor/document/) object that should be used to refer to the ringtone from now on (ie when deleting it using the `unsave` parameter, or when downloading it).
