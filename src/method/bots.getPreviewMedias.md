---
title: "bots.getPreviewMedias"
original: "https://core.telegram.org/method/bots.getPreviewMedias"
section: ref
description: "Fetch main mini app previews, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getPreviewMedias","url":"/method/bots.getPreviewMedias/"}]
layout: layout.njk
---

# bots.getPreviewMedias

Fetch [main mini app previews, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

```
---functions---
bots.getPreviewMedias#a2a5594d bot:InputUser = Vector<BotPreviewMedia>;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot that owns the Main Mini App.</td></tr></tbody></table>

### Result

[Vector](https://core.telegram.org/type/Vector%20t)<[BotPreviewMedia](/type/BotPreviewMedia/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
