---
title: "inputWallPaperNoFile"
original: "https://core.telegram.org/constructor/inputWallPaperNoFile"
section: ref
description: "Wallpaper with no file access hash, used for example when deleting (unsave=true) wallpapers using account.saveWallPaper, specifying just the wallpaper ID."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputWallPaperNoFile","url":"/constructor/inputWallPaperNoFile/"}]
layout: layout.njk
---

# inputWallPaperNoFile

[Wallpaper](/api/wallpapers/) with no file access hash, used for example when deleting (`unsave=true`) wallpapers using [account.saveWallPaper](/method/account.saveWallPaper/), specifying just the wallpaper ID.

```
inputWallPaperNoFile#967a462e id:long = InputWallPaper;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Wallpaper ID</td></tr></tbody></table>

### Type

[InputWallPaper](/type/InputWallPaper/)

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.

#### [account.saveWallPaper](/method/account.saveWallPaper/)

Install/uninstall [wallpaper](/api/wallpapers/)
