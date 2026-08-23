---
title: "inputBusinessChatLink"
original: "https://core.telegram.org/constructor/inputBusinessChatLink"
section: ref
description: "Contains info about a business chat deep link » to be created by the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBusinessChatLink","url":"/constructor/inputBusinessChatLink/"}]
layout: layout.njk
---

# inputBusinessChatLink

Contains info about a [business chat deep link »](/api/business/#business-chat-links) to be created by the current account.

```
inputBusinessChatLink#11679fa7 flags:# message:string entities:flags.0?Vector<MessageEntity> title:flags.1?string = InputBusinessChatLink;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Message to pre-fill in the message input field.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Message entities for styled text</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Human-readable name of the link, to simplify management in the UI (only visible to the creator of the link).</td></tr></tbody></table>

### Type

[InputBusinessChatLink](/type/InputBusinessChatLink/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
