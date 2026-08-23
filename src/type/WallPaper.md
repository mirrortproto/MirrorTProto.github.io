---
title: "WallPaper"
original: "https://core.telegram.org/type/WallPaper"
section: ref
description: "Object contains info on a wallpaper."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WallPaper","url":"/type/WallPaper/"}]
layout: layout.njk
---

# WallPaper

Object contains info on a [wallpaper](/api/wallpapers/).

```
wallPaper#a437c3ed id:long flags:# creator:flags.0?true default:flags.1?true pattern:flags.3?true dark:flags.4?true access_hash:long slug:string document:Document settings:flags.2?WallPaperSettings = WallPaper;
wallPaperNoFile#e0804116 id:long flags:# default:flags.1?true dark:flags.4?true settings:flags.2?WallPaperSettings = WallPaper;

---functions---

account.getWallPaper#fc8ddbea wallpaper:InputWallPaper = WallPaper;
account.uploadWallPaper#e39a8f03 flags:# for_chat:flags.0?true file:InputFile mime_type:string settings:WallPaperSettings = WallPaper;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/wallPaper">wallPaper</a></td><td>Represents a <a href="/api/wallpapers">wallpaper</a> based on an image.</td></tr><tr><td><a href="/constructor/wallPaperNoFile">wallPaperNoFile</a></td><td>Represents a <a href="/api/wallpapers">wallpaper</a> only based on colors/gradients.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getWallPaper">account.getWallPaper</a></td><td>Get info about a certain <a href="/api/wallpapers">wallpaper</a></td></tr><tr><td><a href="/method/account.uploadWallPaper">account.uploadWallPaper</a></td><td>Create and upload a new <a href="/api/wallpapers">wallpaper</a></td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
