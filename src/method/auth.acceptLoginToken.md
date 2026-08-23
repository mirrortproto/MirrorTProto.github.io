---
title: "auth.acceptLoginToken"
original: "https://core.telegram.org/method/auth.acceptLoginToken"
section: ref
description: "Accept QR code login token, logging in the app that generated it."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.acceptLoginToken","url":"/method/auth.acceptLoginToken/"}]
layout: layout.njk
---

# auth.acceptLoginToken

Accept QR code login token, logging in the app that generated it.

Returns info about the new session.

For more info, see [login via QR code](/api/qr-login/).

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;
---functions---
auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>token</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Login token embedded in QR code, for more info, see <a href="/api/qr-login">login via QR code</a>.</td></tr></tbody></table>

### Result

[Authorization](/type/Authorization/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>AUTH_TOKEN_ALREADY_ACCEPTED</td><td>The specified auth token was already accepted.</td></tr><tr><td>400</td><td>AUTH_TOKEN_EXCEPTION</td><td>An error occurred while importing the auth token.</td></tr><tr><td>400</td><td>AUTH_TOKEN_EXPIRED</td><td>The authorization token has expired.</td></tr><tr><td>400</td><td>AUTH_TOKEN_INVALIDX</td><td>The specified auth token is invalid.</td></tr></tbody></table>

### Related pages

#### [Login via QR code](/api/qr-login/)

QR code login flow
