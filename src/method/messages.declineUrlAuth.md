---
title: "messages.declineUrlAuth"
original: "https://core.telegram.org/method/messages.declineUrlAuth"
section: ref
description: "Decline an incoming OAuth authorization request », notifying the server that the user refused the login request."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.declineUrlAuth","url":"/method/messages.declineUrlAuth/"}]
layout: layout.njk
---

# messages.declineUrlAuth

Decline an incoming [OAuth authorization request »](/api/url-authorization/#oauth-authorization), notifying the server that the user refused the login request.

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.declineUrlAuth#35436bbc url:string = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The OAuth deep link from the <a href="/api/push-updates#oauth-request">OAUTH_REQUEST push notification</a> or the <a href="/api/web-events#oauth-request"><code>oauth_request</code> web event</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr></tbody></table>

### Related pages

#### [Handling PUSH-notifications](/api/push-updates/)

How to subscribe to and handle PUSH notifications

#### [Web events](/api/web-events/)

How telegram apps interact with webpages

#### [Seamless Telegram Login](/api/url-authorization/)

Handle Seamless Telegram Login URL authorization requests.
