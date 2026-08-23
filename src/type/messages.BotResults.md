---
title: "messages.BotResults"
original: "https://core.telegram.org/type/messages.BotResults"
section: ref
description: "Result of a query to an inline bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.BotResults","url":"/type/messages.BotResults/"}]
layout: layout.njk
---

# messages.BotResults

Result of a query to an inline bot

```
messages.botResults#e021f2f6 flags:# gallery:flags.0?true query_id:long next_offset:flags.1?string switch_pm:flags.2?InlineBotSwitchPM switch_webview:flags.3?InlineBotWebView results:Vector<BotInlineResult> cache_time:int users:Vector<User> = messages.BotResults;

---functions---

messages.getInlineBotResults#514e999d flags:# bot:InputUser peer:InputPeer geo_point:flags.0?InputGeoPoint query:string offset:string = messages.BotResults;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botResults">messages.botResults</a></td><td>Result of a query to an inline bot</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getInlineBotResults">messages.getInlineBotResults</a></td><td>Query an inline bot</td></tr></tbody></table>
