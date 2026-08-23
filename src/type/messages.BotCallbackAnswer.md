---
title: "Messages.BotCallbackAnswer"
original: "https://core.telegram.org/type/messages.BotCallbackAnswer"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.BotCallbackAnswer","url":"/type/messages.BotCallbackAnswer/"}]
layout: layout.njk
---

# Messages.BotCallbackAnswer

Callback answer of bot

```
messages.botCallbackAnswer#36585ea4 flags:# alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?string url:flags.2?string cache_time:int = messages.BotCallbackAnswer;

---functions---

messages.getBotCallbackAnswer#9342ca07 flags:# game:flags.1?true peer:InputPeer msg_id:int data:flags.0?bytes password:flags.2?InputCheckPasswordSRP = messages.BotCallbackAnswer;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botCallbackAnswer">messages.botCallbackAnswer</a></td><td>Callback answer sent by the bot in response to a button press</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getBotCallbackAnswer">messages.getBotCallbackAnswer</a></td><td>Press an inline callback button and get a callback answer from the bot</td></tr></tbody></table>
