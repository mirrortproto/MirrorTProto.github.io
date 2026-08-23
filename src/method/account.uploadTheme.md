---
title: "account.uploadTheme"
original: "https://core.telegram.org/method/account.uploadTheme"
section: ref
description: "Telegram apps support generating, sharing and synchronizing app themes."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.uploadTheme","url":"/method/account.uploadTheme/"}]
layout: layout.njk
---

# account.uploadTheme

Upload theme

```
documentEmpty#36f8c871 id:long = Document;
document#8fd4c4d8 flags:# id:long access_hash:long file_reference:bytes date:int mime_type:string size:long thumbs:flags.0?Vector<PhotoSize> video_thumbs:flags.1?Vector<VideoSize> dc_id:int attributes:Vector<DocumentAttribute> = Document;
---functions---
account.uploadTheme#1c3db333 flags:# file:InputFile thumb:flags.0?InputFile file_name:string mime_type:string = Document;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td><a href="/api/themes#uploading-theme-files">Previously uploaded</a> theme file with platform-specific colors for UI components, can be left unset when creating themes that only modify the wallpaper or accent colors.</td></tr><tr><td><strong>thumb</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputFile">InputFile</a></td><td>Thumbnail</td></tr><tr><td><strong>file_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>File name</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME type, must be <code>application/x-tgtheme-{format}</code>, where <code>format</code> depends on the client</td></tr></tbody></table>

### Result

[Document](/type/Document/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>THEME_FILE_INVALID</td><td>Invalid theme file provided.</td></tr><tr><td>400</td><td>THEME_MIME_INVALID</td><td>The theme's MIME type is invalid.</td></tr></tbody></table>

### Related pages

#### [Telegram themes](/api/themes/)

Telegram apps support generating, sharing and synchronizing app themes.
