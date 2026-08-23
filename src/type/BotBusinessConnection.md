---
title: "BotBusinessConnection"
original: "https://core.telegram.org/type/BotBusinessConnection"
section: ref
description: "Contains info about a bot business connection."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotBusinessConnection","url":"/type/BotBusinessConnection/"}]
layout: layout.njk
---

# BotBusinessConnection

Contains info about a [bot business connection](/api/bots/connected-business-bots/).

```
botBusinessConnection#8f34b2f5 flags:# disabled:flags.1?true connection_id:string user_id:long dc_id:int date:int rights:flags.2?BusinessBotRights = BotBusinessConnection;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botBusinessConnection">botBusinessConnection</a></td><td>Contains info about a <a href="/api/bots/connected-business-bots">bot business connection</a>.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
