---
title: "InputBotInlineResult"
original: "https://core.telegram.org/type/InputBotInlineResult"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputBotInlineResult","url":"/type/InputBotInlineResult/"}]
layout: layout.njk
---

# InputBotInlineResult

Inline bot result

```
inputBotInlineResult#88bf9319 flags:# id:string type:string title:flags.1?string description:flags.2?string url:flags.3?string thumb:flags.4?InputWebDocument content:flags.5?InputWebDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultPhoto#a8d864a7 id:string type:string photo:InputPhoto send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultDocument#fff8fdc4 flags:# id:string type:string title:flags.1?string description:flags.2?string document:InputDocument send_message:InputBotInlineMessage = InputBotInlineResult;
inputBotInlineResultGame#4fa417f2 id:string short_name:string send_message:InputBotInlineMessage = InputBotInlineResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputBotInlineResult">inputBotInlineResult</a></td><td>An inline bot result</td></tr><tr><td><a href="/constructor/inputBotInlineResultPhoto">inputBotInlineResultPhoto</a></td><td>Photo</td></tr><tr><td><a href="/constructor/inputBotInlineResultDocument">inputBotInlineResultDocument</a></td><td>Document (media of any type except for photos)</td></tr><tr><td><a href="/constructor/inputBotInlineResultGame">inputBotInlineResultGame</a></td><td>Game</td></tr></tbody></table>
