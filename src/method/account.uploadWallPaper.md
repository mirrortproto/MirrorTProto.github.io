---
title: "account.uploadWallPaper"
original: "https://core.telegram.org/method/account.uploadWallPaper"
section: ref
description: "Create and upload a new wallpaper"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.uploadWallPaper","url":"/method/account.uploadWallPaper/"}]
layout: layout.njk
---

# account.uploadWallPaper

Create and upload a new [wallpaper](/api/wallpapers/)

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;
---functions---
account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>for_chat</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Set this flag when uploading wallpapers to be passed to <a href="/method/messages.setChatWallPaper">messages.setChatWallPaper</a>.</td></tr><tr><td><strong>file</strong></td><td style="text-align: center;"><a href="/type/InputFile">InputFile</a></td><td>The JPG/PNG wallpaper</td></tr><tr><td><strong>mime_type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>MIME type of uploaded wallpaper</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/WallPaperSettings">WallPaperSettings</a></td><td>Wallpaper settings</td></tr></tbody></table>

### Result

[WallPaper](/type/WallPaper/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_FILE_INVALID</td><td>The specified wallpaper file is invalid.</td></tr><tr><td>400</td><td>WALLPAPER_MIME_INVALID</td><td>The specified wallpaper MIME type is invalid.</td></tr></tbody></table>

### Related pages

#### [messages.setChatWallPaper](/method/messages.setChatWallPaper/)

Set a custom [wallpaper »](/api/wallpapers/) in a specific private chat with another user.

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
