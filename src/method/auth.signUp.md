---
title: "auth.signUp"
original: "https://core.telegram.org/method/auth.signUp"
section: ref
description: "Registers a validated phone number in the system."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.signUp","url":"/method/auth.signUp/"}]
layout: layout.njk
---

# auth.signUp

Registers a validated phone number in the system.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.signUp#aac7b717 flags:# no_joined_notifications:flags.0?true phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_joined_notifications</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, users on Telegram that have already added <code>phone_number</code> to their contacts will <em>not</em> receive signup notifications about this user.</td></tr><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Phone number in the international format</td></tr><tr><td><strong>phone_code_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>SMS-message ID</td></tr><tr><td><strong>first_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>New user first name</td></tr><tr><td><strong>last_name</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>New user last name</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FIRSTNAME_INVALID</td><td>The first name is invalid.</td></tr><tr><td>400</td><td>LASTNAME_INVALID</td><td>The last name is invalid.</td></tr><tr><td>400</td><td>PHONE_CODE_EMPTY</td><td>phone_code is missing.</td></tr><tr><td>400</td><td>PHONE_CODE_EXPIRED</td><td>The phone code you provided has expired.</td></tr><tr><td>400</td><td>PHONE_CODE_INVALID</td><td>The provided phone code is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_FLOOD</td><td>You asked for the code too many times.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_OCCUPIED</td><td>The phone number is already in use.</td></tr></tbody></table>
