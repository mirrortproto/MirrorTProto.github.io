---
title: "botInlineMediaResult"
original: "https://core.telegram.org/constructor/botInlineMediaResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botInlineMediaResult","url":"/constructor/botInlineMediaResult/"}]
layout: layout.njk
---

# botInlineMediaResult

Media result

```
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Result ID</td></tr><tr><td><strong>type</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Result type (see <a href="/bots/api#inlinequeryresult">bot API docs</a>)</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Photo">Photo</a></td><td>If type is <code>photo</code>, the photo to send</td></tr><tr><td><strong>document</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Document">Document</a></td><td>If type is <code>document</code>, the document to send</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/string">string</a></td><td>Result title</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>Description</td></tr><tr><td><strong>send_message</strong></td><td style="text-align: center;"><a href="/type/BotInlineMessage">BotInlineMessage</a></td><td>Depending on the <code>type</code> and on the <a href="/type/BotInlineMessage">constructor</a>, contains the caption of the media or the content of the message to be sent <strong>instead</strong> of the media</td></tr></tbody></table>

### Type

[BotInlineResult](/type/BotInlineResult/)

### Related pages

#### [Telegram Bot API](https://core.telegram.org/bots/api)

#### [BotInlineMessage](/type/BotInlineMessage/)

Inline message
