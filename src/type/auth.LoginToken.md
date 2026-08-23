---
title: "auth.LoginToken"
original: "https://core.telegram.org/type/auth.LoginToken"
section: ref
description: "Login token (for QR code login)"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.LoginToken","url":"/type/auth.LoginToken/"}]
layout: layout.njk
---

# auth.LoginToken

Login token (for QR code login)

```
auth.loginToken#629f1980 expires:int token:bytes = auth.LoginToken;
auth.loginTokenMigrateTo#68e9916 dc_id:int token:bytes = auth.LoginToken;
auth.loginTokenSuccess#390d5c5e authorization:auth.Authorization = auth.LoginToken;

---functions---

auth.exportLoginToken#b7e085fe api_id:int api_hash:string except_ids:Vector<long> = auth.LoginToken;
auth.importLoginToken#95ac5ce4 token:bytes = auth.LoginToken;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.loginToken">auth.loginToken</a></td><td>Login token (for <a href="/api/qr-login">QR code login</a>)</td></tr><tr><td><a href="/constructor/auth.loginTokenMigrateTo">auth.loginTokenMigrateTo</a></td><td>Repeat the query to the specified DC</td></tr><tr><td><a href="/constructor/auth.loginTokenSuccess">auth.loginTokenSuccess</a></td><td>Login via token (QR code) succeeded!</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.exportLoginToken">auth.exportLoginToken</a></td><td>Generate a login token, for <a href="/api/qr-login">login via QR code</a>.<br>The generated login token should be encoded using base64url, then shown as a <code>tg://login?token=base64encodedtoken</code> <a href="/api/links#qr-code-login-links">deep link »</a> in the QR code.<br><br>For more info, see <a href="/api/qr-login">login via QR code</a>.</td></tr><tr><td><a href="/method/auth.importLoginToken">auth.importLoginToken</a></td><td>Login using a redirected login token, generated in case of DC mismatch during <a href="/api/qr-login">QR code login</a>.<br><br>For more info, see <a href="/api/qr-login">login via QR code</a>.</td></tr></tbody></table>
