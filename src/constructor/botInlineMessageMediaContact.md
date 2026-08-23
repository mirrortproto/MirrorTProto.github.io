---
title: "botInlineMessageMediaContact"
original: "https://core.telegram.org/constructor/botInlineMessageMediaContact"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"botInlineMessageMediaContact","url":"/constructor/botInlineMessageMediaContact/"}]
layout: layout.njk
---

# botInlineMessageMediaContact

Send a contact

```
botInlineMessageMediaContact#18d1cdc2 flags:# phone_number:string first_name:string last_name:string vcard:string reply_markup:flags.2?ReplyMarkup = BotInlineMessage;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>First name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Last name</td></tr><tr><td><strong>vcard</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>VCard info</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup">ReplyMarkup</a></td><td>Inline keyboard</td></tr></tbody></table>

### Type

[BotInlineMessage](/type/BotInlineMessage/)
