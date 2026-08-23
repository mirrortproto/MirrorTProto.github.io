---
title: "InputWebFileLocation"
original: "https://core.telegram.org/type/InputWebFileLocation"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputWebFileLocation","url":"/type/InputWebFileLocation/"}]
layout: layout.njk
---

# InputWebFileLocation

Location of remote file

```
inputWebFileLocation#c239d686 url:string access_hash:long = InputWebFileLocation;
inputWebFileGeoPointLocation#9f2221c9 geo_point:InputGeoPoint access_hash:long w:int h:int zoom:int scale:int = InputWebFileLocation;
inputWebFileAudioAlbumThumbLocation#f46fe924 flags:# small:flags.2?true document:flags.0?InputDocument title:flags.1?string performer:flags.1?string = InputWebFileLocation;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputWebFileLocation">inputWebFileLocation</a></td><td>Location of a remote HTTP(s) file</td></tr><tr><td><a href="/constructor/inputWebFileGeoPointLocation">inputWebFileGeoPointLocation</a></td><td>Used to download a server-generated image with the map preview from a <a href="/constructor/geoPoint">geoPoint</a>, see the <a href="/api/files#downloading-webfiles">webfile docs for more info »</a>.</td></tr><tr><td><a href="/constructor/inputWebFileAudioAlbumThumbLocation">inputWebFileAudioAlbumThumbLocation</a></td><td>Used to download an album cover for any music file using <a href="/method/upload.getWebFile">upload.getWebFile</a>, see the <a href="/api/files#downloading-webfiles">webfile docs for more info »</a>.</td></tr></tbody></table>
