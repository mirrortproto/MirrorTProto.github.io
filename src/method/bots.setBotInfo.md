---
title: "bots.setBotInfo"
original: "https://core.telegram.org/method/bots.setBotInfo"
section: ref
description: "Set localized name, about text and description of a bot (or of the current account, if called by a bot)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.setBotInfo","url":"/method/bots.setBotInfo/"}]
layout: layout.njk
---

# bots.setBotInfo

Set localized name, about text and description of a bot (or of the current account, if called by a bot).

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotInfo#10cf3123 flags:# bot:flags.2?InputUser lang_code:string name:flags.3?string about:flags.0?string description:flags.1?string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/InputUser">InputUser</a></td><td>If called by a user, <strong>must</strong> contain the peer of a bot we own.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Language code, if left empty update the fallback about text and description</td></tr><tr><td><strong>name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/string">string</a></td><td>New bot name</td></tr><tr><td><strong>about</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>New about text</td></tr><tr><td><strong>description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>New description</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>USER_BOT_INVALID</td><td>User accounts must provide the <code>bot</code> method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts.</td></tr></tbody></table>
