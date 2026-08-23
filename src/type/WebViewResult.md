---
title: "WebViewResult"
original: "https://core.telegram.org/type/WebViewResult"
section: ref
description: "Contains the webview URL with appropriate theme and user info parameters added"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebViewResult","url":"/type/WebViewResult/"}]
layout: layout.njk
---

# WebViewResult

Contains the webview URL with appropriate theme and user info parameters added

```
webViewResultUrl#4d22ff98 flags:# fullsize:flags.1?true fullscreen:flags.2?true query_id:flags.0?long url:string = WebViewResult;

---functions---

messages.requestWebView#269dc2c1 flags:# from_bot_menu:flags.4?true silent:flags.5?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser url:flags.1?string start_param:flags.3?string theme_params:flags.2?DataJSON platform:string reply_to:flags.0?InputReplyTo send_as:flags.13?InputPeer = WebViewResult;
messages.requestSimpleWebView#413a3e73 flags:# from_switch_webview:flags.1?true from_side_menu:flags.2?true compact:flags.7?true fullscreen:flags.8?true bot:InputUser url:flags.3?string start_param:flags.4?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
messages.requestAppWebView#53618bce flags:# write_allowed:flags.0?true compact:flags.7?true fullscreen:flags.8?true peer:InputPeer app:InputBotApp start_param:flags.1?string theme_params:flags.2?DataJSON platform:string = WebViewResult;
messages.requestMainWebView#c9e01e7b flags:# compact:flags.7?true fullscreen:flags.8?true peer:InputPeer bot:InputUser start_param:flags.1?string theme_params:flags.0?DataJSON platform:string = WebViewResult;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webViewResultUrl">webViewResultUrl</a></td><td>Contains the webview URL with appropriate theme and user info parameters added</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.requestWebView">messages.requestWebView</a></td><td>Open a <a href="/bots/webapps">bot mini app</a>, sending over user information after user confirmation.<br><br>After calling this method, until the user closes the webview, <a href="/method/messages.prolongWebView">messages.prolongWebView</a> must be called every 60 seconds.</td></tr><tr><td><a href="/method/messages.requestSimpleWebView">messages.requestSimpleWebView</a></td><td>Open a <a href="/api/bots/webapps">bot mini app</a>.</td></tr><tr><td><a href="/method/messages.requestAppWebView">messages.requestAppWebView</a></td><td>Open a <a href="/bots/webapps">bot mini app</a> from a <a href="/api/links#direct-mini-app-links">direct Mini App deep link</a>, sending over user information after user confirmation.<br><br>After calling this method, until the user closes the webview, <a href="/method/messages.prolongWebView">messages.prolongWebView</a> must be called every 60 seconds.</td></tr><tr><td><a href="/method/messages.requestMainWebView">messages.requestMainWebView</a></td><td>Open a <a href="/api/bots/webapps#main-mini-apps">Main Mini App</a>.</td></tr></tbody></table>
