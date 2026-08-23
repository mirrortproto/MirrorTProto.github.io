---
title: "auth.importBotAuthorization"
original: "https://core.telegram.org/method/auth.importBotAuthorization"
section: ref
description: "Bots are small applications that run entirely within the Telegram app."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.importBotAuthorization","url":"/method/auth.importBotAuthorization/"}]
layout: layout.njk
---

# auth.importBotAuthorization

Login as a bot

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Reserved for future use</td></tr><tr><td><strong>api_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Application identifier (see. <a href="/myapp">App configuration</a>)</td></tr><tr><td><strong>api_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Application identifier hash (see. <a href="/myapp">App configuration</a>)</td></tr><tr><td><strong>bot_auth_token</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Bot token (see <a href="/bots">bots</a>)</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Both users and bots can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ACCESS_TOKEN_EXPIRED</td><td>Access token expired.</td></tr><tr><td>400</td><td>ACCESS_TOKEN_INVALID</td><td>Access token invalid.</td></tr><tr><td>400</td><td>API_ID_INVALID</td><td>API ID invalid.</td></tr><tr><td>400</td><td>API_ID_PUBLISHED_FLOOD</td><td>This API id was published somewhere, you can't use it now.</td></tr></tbody></table>

### Related pages

#### [Bots: An introduction for developers](https://core.telegram.org/bots)

Bots are small applications that run entirely within the Telegram app.
