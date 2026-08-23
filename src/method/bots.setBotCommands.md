---
title: "bots.setBotCommands"
original: "https://core.telegram.org/method/bots.setBotCommands"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.setBotCommands","url":"/method/bots.setBotCommands/"}]
layout: layout.njk
---

# bots.setBotCommands

Set bot command list

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
bots.setBotCommands#517165a scope:BotCommandScope lang_code:string commands:Vector<BotCommand> = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/BotCommandScope">BotCommandScope</a></td><td>Command scope</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Language code</td></tr><tr><td><strong>commands</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/BotCommand">BotCommand</a>&gt;</td><td>Bot commands</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_COMMAND_DESCRIPTION_INVALID</td><td>The specified command description is invalid.</td></tr><tr><td>400</td><td>BOT_COMMAND_INVALID</td><td>The specified command is invalid.</td></tr><tr><td>400</td><td>LANG_CODE_INVALID</td><td>The specified language code is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr><tr><td>400</td><td>USER_ID_INVALID</td><td>The provided user ID is invalid.</td></tr></tbody></table>
