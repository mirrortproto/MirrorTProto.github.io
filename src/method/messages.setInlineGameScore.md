---
title: "messages.setInlineGameScore"
original: "https://core.telegram.org/method/messages.setInlineGameScore"
section: ref
description: "Use this method to set the score of the specified user in a game sent as an inline message (bots only)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setInlineGameScore","url":"/method/messages.setInlineGameScore/"}]
layout: layout.njk
---

# messages.setInlineGameScore

Use this method to set the score of the specified user in a game sent as an inline message (bots only).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.setInlineGameScore#15ad9f64 flags:# edit_message:flags.0?true force:flags.1?true id:InputBotInlineMessageID user_id:InputUser score:int = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>edit_message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Set this flag if the game message should be automatically edited to include the current scoreboard</td></tr><tr><td><strong>force</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Set this flag if the high score is allowed to decrease. This can be useful when fixing mistakes or banning cheaters</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>ID of the inline message</td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>User identifier</td></tr><tr><td><strong>score</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>New score</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
