---
title: "updateInlineBotCallbackQuery"
original: "https://core.telegram.org/constructor/updateInlineBotCallbackQuery"
section: ref
description: "This notification is received by bots when a button is pressed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateInlineBotCallbackQuery","url":"/constructor/updateInlineBotCallbackQuery/"}]
layout: layout.njk
---

# updateInlineBotCallbackQuery

This notification is received by bots when a button is pressed

```
updateInlineBotCallbackQuery#691e9052 flags:# query_id:long user_id:long msg_id:InputBotInlineMessageID chat_instance:long data:flags.0?bytes game_short_name:flags.1?string = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Query ID</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>ID of the user that pressed the button</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>ID of the inline message with the button</td></tr><tr><td><strong>chat_instance</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Global identifier, uniquely corresponding to the chat to which the message with the callback button was sent. Useful for high scores in games.</td></tr><tr><td><strong>data</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/bytes">bytes</a></td><td>Data associated with the callback button. Be aware that a bad client can send arbitrary data in this field.</td></tr><tr><td><strong>game_short_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Short name of a Game to be returned, serves as the unique identifier for the game</td></tr></tbody></table>

### Type

[Update](/type/Update/)
