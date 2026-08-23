---
title: "webViewMessageSent"
original: "https://core.telegram.org/constructor/webViewMessageSent"
section: ref
description: "Info about a sent inline webview message"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"webViewMessageSent","url":"/constructor/webViewMessageSent/"}]
layout: layout.njk
---

# webViewMessageSent

Info about a sent inline webview message

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputBotInlineMessageID">InputBotInlineMessageID</a></td><td>Message ID</td></tr></tbody></table>

### Type

[WebViewMessageSent](/type/WebViewMessageSent/)
