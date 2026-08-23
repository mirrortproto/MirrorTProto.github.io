---
title: "bots.BotInfo"
original: "https://core.telegram.org/type/bots.BotInfo"
section: ref
description: "Localized name, about text and description of a bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.BotInfo","url":"/type/bots.BotInfo/"}]
layout: layout.njk
---

# bots.BotInfo

Localized name, about text and description of a bot.

```
bots.botInfo#e8a775b0 name:string about:string description:string = bots.BotInfo;

---functions---

bots.getBotInfo#dcd914fd flags:# bot:flags.0?InputUser lang_code:string = bots.BotInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/bots.botInfo">bots.botInfo</a></td><td>Localized information about a bot.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotInfo">bots.getBotInfo</a></td><td>Get localized name, about text and description of a bot (or of the current account, if called by a bot).</td></tr></tbody></table>
