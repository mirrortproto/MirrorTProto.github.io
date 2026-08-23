---
title: "BotPreviewMedia"
original: "https://core.telegram.org/type/BotPreviewMedia"
section: ref
description: "Represents a Main Mini App preview media, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotPreviewMedia","url":"/type/BotPreviewMedia/"}]
layout: layout.njk
---

# BotPreviewMedia

Represents a [Main Mini App preview media, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;

---functions---

bots.addPreviewMedia#17aeb75a bot:InputUser lang_code:string media:InputMedia = BotPreviewMedia;
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botPreviewMedia">botPreviewMedia</a></td><td>Represents a <a href="/api/bots/webapps#main-mini-app-previews">Main Mini App preview media, see here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.addPreviewMedia">bots.addPreviewMedia</a></td><td>Add a <a href="/api/bots/webapps#main-mini-app-previews">main mini app preview, see here »</a> for more info.<br><br>Only owners of bots with a configured Main Mini App can use this method, see <a href="/api/bots/webapps#main-mini-app-previews">see here »</a> for more info on how to check if you can invoke this method.</td></tr><tr><td><a href="/method/bots.editPreviewMedia">bots.editPreviewMedia</a></td><td>Edit a <a href="/api/bots/webapps#main-mini-app-previews">main mini app preview, see here »</a> for more info.<br><br>Only owners of bots with a configured Main Mini App can use this method, see <a href="/api/bots/webapps#main-mini-app-previews">see here »</a> for more info on how to check if you can invoke this method.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
