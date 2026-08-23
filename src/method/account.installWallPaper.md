---
title: "account.installWallPaper"
original: "https://core.telegram.org/method/account.installWallPaper"
section: ref
description: "Telegram apps support generating, sharing and synchronizing chat backgrounds."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.installWallPaper","url":"/method/account.installWallPaper/"}]
layout: layout.njk
---

# account.installWallPaper

Install [wallpaper](/api/wallpapers/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.installWallPaper#feed5769 wallpaper:InputWallPaper settings:WallPaperSettings = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>wallpaper</strong></td><td style="text-align: center;"><a href="/type/InputWallPaper">InputWallPaper</a></td><td><a href="/api/wallpapers">Wallpaper</a> to install</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/WallPaperSettings">WallPaperSettings</a></td><td><a href="/api/wallpapers">Wallpaper</a> settings</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>WALLPAPER_INVALID</td><td>The specified wallpaper is invalid.</td></tr></tbody></table>

### Related pages

#### [Chat wallpapers](/api/wallpapers/)

Telegram apps support generating, sharing and synchronizing chat backgrounds.
