---
title: "WebViewMessageSent"
original: "https://core.telegram.org/type/WebViewMessageSent"
section: ref
description: "Contains information about an inline message sent by a Web App on behalf of a user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebViewMessageSent","url":"/type/WebViewMessageSent/"}]
layout: layout.njk
---

# WebViewMessageSent

Contains information about an inline message sent by a [Web App](https://core.telegram.org/bots/webapps) on behalf of a user.

```
webViewMessageSent#c94511c flags:# msg_id:flags.0?InputBotInlineMessageID = WebViewMessageSent;

---functions---

messages.sendWebViewResultMessage#a4314f5 bot_query_id:string result:InputBotInlineResult = WebViewMessageSent;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webViewMessageSent">webViewMessageSent</a></td><td>Info about a sent inline webview message</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.sendWebViewResultMessage">messages.sendWebViewResultMessage</a></td><td>Terminate webview interaction started with <a href="/method/messages.requestWebView">messages.requestWebView</a>, sending the specified message to the chat on behalf of the user.</td></tr></tbody></table>
