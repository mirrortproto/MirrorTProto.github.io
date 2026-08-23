---
title: "auth.importWebTokenAuthorization"
original: "https://core.telegram.org/method/auth.importWebTokenAuthorization"
section: ref
description: "Login by importing an authorization token"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.importWebTokenAuthorization","url":"/method/auth.importWebTokenAuthorization/"}]
layout: layout.njk
---

# auth.importWebTokenAuthorization

Login by importing an authorization token

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><a href="/api/obtaining_api_id">API ID</a></td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td><a href="/api/obtaining_api_id">API hash</a></td></tr><tr><td><strong>web_auth_token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>The authorization token</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>400</td><td>WEBAUTH_TOKEN_EXPIRED</td><td>The specified auth token has expired.</td></tr></tbody></table>

### Related pages

#### [Creating your Telegram Application](/api/obtaining_api_id/)

How to get your application identifier and create a new Telegram app.
