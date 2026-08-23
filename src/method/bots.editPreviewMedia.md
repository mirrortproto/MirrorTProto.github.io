---
title: "bots.editPreviewMedia"
original: "https://core.telegram.org/method/bots.editPreviewMedia"
section: ref
description: "Edit a main mini app preview, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.editPreviewMedia","url":"/method/bots.editPreviewMedia/"}]
layout: layout.njk
---

# bots.editPreviewMedia

Edit a [main mini app preview, see here »](/api/bots/webapps/#main-mini-app-previews) for more info.

Only owners of bots with a configured Main Mini App can use this method, see [see here »](/api/bots/webapps/#main-mini-app-previews) for more info on how to check if you can invoke this method.

```
botPreviewMedia#23e91ba3 date:int media:MessageMedia = BotPreviewMedia;
---functions---
bots.editPreviewMedia#8525606f bot:InputUser lang_code:string media:InputMedia new_media:InputMedia = BotPreviewMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>The bot that owns the Main Mini App.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>ISO 639-1 language code, indicating the localization of the preview to edit.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>The photo/video preview to replace, previously fetched as specified <a href="/api/bots/webapps#main-mini-app-previews">here »</a>.</td></tr><tr><td><strong>new_media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>The new photo/video preview, uploaded using <a href="/method/messages.uploadMedia">messages.uploadMedia</a>.</td></tr></tbody></table>

### Result

[BotPreviewMedia](/type/BotPreviewMedia/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr></tbody></table>

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [messages.uploadMedia](/method/messages.uploadMedia/)

Upload a file and associate it to a chat (without actually sending it to the chat)

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the business connection ID in the `business_connection_id` parameter.
