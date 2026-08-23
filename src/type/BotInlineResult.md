---
title: "BotInlineResult"
original: "https://core.telegram.org/type/BotInlineResult"
section: ref
description: "Results of an inline query"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BotInlineResult","url":"/type/BotInlineResult/"}]
layout: layout.njk
---

# BotInlineResult

Results of an inline query

```
botInlineResult#11965f3a flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?WebDocument content:flags.5?WebDocument send_message:BotInlineMessage = BotInlineResult;
botInlineMediaResult#17db940b flags:# id:string type:string photo:flags.0?Photo document:flags.1?Document title:flags.2?string description:flags.3?string send_message:BotInlineMessage = BotInlineResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/botInlineResult">botInlineResult</a></td><td>Generic result</td></tr><tr><td><a href="/constructor/botInlineMediaResult">botInlineMediaResult</a></td><td>Media result</td></tr></tbody></table>
