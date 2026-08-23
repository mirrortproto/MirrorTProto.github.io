---
title: "stickers.suggestShortName"
original: "https://core.telegram.org/method/stickers.suggestShortName"
section: ref
description: "Suggests a short name for a given stickerpack name"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stickers.suggestShortName","url":"/method/stickers.suggestShortName/"}]
layout: layout.njk
---

# stickers.suggestShortName

Suggests a short name for a given stickerpack name

```
stickers.suggestedShortName#85fea03f short_name:string = stickers.SuggestedShortName;
---functions---
stickers.suggestShortName#4dafc503 title:string = stickers.SuggestedShortName;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Sticker pack name</td></tr></tbody></table>

### Result

[stickers.SuggestedShortName](/type/stickers.SuggestedShortName/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>TITLE_INVALID</td><td>The specified stickerpack title is invalid.</td></tr></tbody></table>
