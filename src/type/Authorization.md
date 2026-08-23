---
title: "Authorization"
original: "https://core.telegram.org/type/Authorization"
section: ref
description: "Represents a logged-in session"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Authorization","url":"/type/Authorization/"}]
layout: layout.njk
---

# Authorization

Represents a logged-in session

```
authorization#ad01d61d flags:# current:flags.0?true official_app:flags.1?true password_pending:flags.2?true encrypted_requests_disabled:flags.3?true call_requests_disabled:flags.4?true unconfirmed:flags.5?true hash:long device_model:string platform:string system_version:string api_id:int app_name:string app_version:string date_created:int date_active:int ip:string country:string region:string = Authorization;

---functions---

auth.acceptLoginToken#e894ad4d token:bytes = Authorization;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/authorization">authorization</a></td><td>Logged-in session</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.acceptLoginToken">auth.acceptLoginToken</a></td><td>Accept QR code login token, logging in the app that generated it.<br><br>Returns info about the new session.<br><br>For more info, see <a href="/api/qr-login">login via QR code</a>.</td></tr></tbody></table>
