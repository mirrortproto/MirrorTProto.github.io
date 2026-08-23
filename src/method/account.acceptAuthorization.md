---
title: "account.acceptAuthorization"
original: "https://core.telegram.org/method/account.acceptAuthorization"
section: ref
description: "Sends a Telegram Passport authorization form, effectively sharing data with the service"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.acceptAuthorization","url":"/method/account.acceptAuthorization/"}]
layout: layout.njk
---

# account.acceptAuthorization

Sends a Telegram Passport authorization form, effectively sharing data with the service

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
account.acceptAuthorization#f3ed4c73 bot_id:long scope:string public_key:string value_hashes:Vector<SecureValueHash> credentials:SecureCredentialsEncrypted = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Bot ID</td></tr><tr><td><strong>scope</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Telegram Passport element types requested by the service</td></tr><tr><td><strong>public_key</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Service's public key</td></tr><tr><td><strong>value_hashes</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/SecureValueHash">SecureValueHash</a>&gt;</td><td>Types of values sent and their hashes</td></tr><tr><td><strong>credentials</strong></td><td style="text-align: center;"><a href="/type/SecureCredentialsEncrypted">SecureCredentialsEncrypted</a></td><td>Encrypted values</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>PUBLIC_KEY_REQUIRED</td><td>A public key is required.</td></tr></tbody></table>
