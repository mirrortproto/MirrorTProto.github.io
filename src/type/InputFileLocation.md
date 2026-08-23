---
title: "InputFileLocation"
original: "https://core.telegram.org/type/InputFileLocation"
section: ref
description: "Defines the location of a file for download."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputFileLocation","url":"/type/InputFileLocation/"}]
layout: layout.njk
---

# InputFileLocation

Defines the location of a file for download.

```
inputFileLocation#dfdaabe1 volume_id:long local_id:int secret:long file_reference:bytes = InputFileLocation;
inputEncryptedFileLocation#f5235d55 id:long access_hash:long = InputFileLocation;
inputDocumentFileLocation#bad07584 id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
inputSecureFileLocation#cbc7ee28 id:long access_hash:long = InputFileLocation;
inputTakeoutFileLocation#29be5899 = InputFileLocation;
inputPhotoFileLocation#40181ffe id:long access_hash:long file_reference:bytes thumb_size:string = InputFileLocation;
inputPhotoLegacyFileLocation#d83466f3 id:long access_hash:long file_reference:bytes volume_id:long local_id:int secret:long = InputFileLocation;
inputPeerPhotoFileLocation#37257e99 flags:# big:flags.0?true peer:InputPeer photo_id:long = InputFileLocation;
inputStickerSetThumb#9d84f3db stickerset:InputStickerSet thumb_version:int = InputFileLocation;
inputGroupCallStream#598a92a flags:# call:InputGroupCall time_ms:long scale:int video_channel:flags.0?int video_quality:flags.0?int = InputFileLocation;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputFileLocation">inputFileLocation</a></td><td>DEPRECATED location of a photo</td></tr><tr><td><a href="/constructor/inputEncryptedFileLocation">inputEncryptedFileLocation</a></td><td>Location of encrypted secret chat file.</td></tr><tr><td><a href="/constructor/inputDocumentFileLocation">inputDocumentFileLocation</a></td><td>Document location (video, voice, audio, basically every type except photo)</td></tr><tr><td><a href="/constructor/inputSecureFileLocation">inputSecureFileLocation</a></td><td>Location of encrypted telegram <a href="/passport">passport</a> file.</td></tr><tr><td><a href="/constructor/inputTakeoutFileLocation">inputTakeoutFileLocation</a></td><td>Used to download a JSON file that will contain all personal data related to features that do not have a specialized <a href="/api/takeout">takeout method</a> yet, see <a href="/api/takeout">here »</a> for more info on the takeout API.</td></tr><tr><td><a href="/constructor/inputPhotoFileLocation">inputPhotoFileLocation</a></td><td>Use this object to download a photo with <a href="/method/upload.getFile">upload.getFile</a> method</td></tr><tr><td><a href="/constructor/inputPhotoLegacyFileLocation">inputPhotoLegacyFileLocation</a></td><td>DEPRECATED legacy photo file location</td></tr><tr><td><a href="/constructor/inputPeerPhotoFileLocation">inputPeerPhotoFileLocation</a></td><td>Location of profile photo of channel/group/supergroup/user</td></tr><tr><td><a href="/constructor/inputStickerSetThumb">inputStickerSetThumb</a></td><td>Location of stickerset thumbnail (see <a href="/api/files">files</a>)</td></tr><tr><td><a href="/constructor/inputGroupCallStream">inputGroupCallStream</a></td><td>Identifies a media chunk of an RTMP-mode video chat, livestream or live story, see <a href="/api/group-calls#downloading-media-chunks">playing an RTMP livestream »</a>.</td></tr></tbody></table>
