---
title: "auth.finishPasskeyLogin"
original: "https://core.telegram.org/method/auth.finishPasskeyLogin"
section: ref
description: "Complete login with a passkey over an unauthenticated connection, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"auth.finishPasskeyLogin","url":"/method/auth.finishPasskeyLogin/"}]
layout: layout.njk
---

# auth.finishPasskeyLogin

Complete login with a passkey over an unauthenticated connection, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info.

Must be sent to the user's native DC, as specified by the `user_handle` (`dcId:userId`) returned in the passkey assertion, see [here »](/api/passkeys/#logging-in-with-a-passkey) for the full flow.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;
---functions---
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>credential</strong></td><td style="text-align: center;"><a href="/type/InputPasskeyCredential">InputPasskeyCredential</a></td><td>Passkey assertion result.</td></tr><tr><td><strong>from_dc_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>DC ID used for the initial <a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a> request; set only if the user's DC is different from the DC used for the initial <a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a>.</td></tr><tr><td><strong>from_auth_key_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/long">long</a></td><td>Auth key ID for the connection to <code>from_dc_id</code> (use the permanent auth key ID if PFS is enabled); set only if the user's DC is different from the DC used for the initial <a href="/method/auth.initPasskeyLogin">auth.initPasskeyLogin</a>.</td></tr></tbody></table>

### Result

[auth.Authorization](/type/auth.Authorization/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>500</td><td>AUTH_RESTART</td><td>Restart the authorization process.</td></tr><tr><td>400</td><td>CREDENTIAL_INVALID</td><td>The specified credential is invalid.</td></tr><tr><td>400</td><td>PASSKEY_ORIGIN_MISMATCH</td><td>Third-party clients currently don't support passkeys even when changing the origin.</td></tr></tbody></table>

### Related pages

#### [auth.initPasskeyLogin](/method/auth.initPasskeyLogin/)

Initialize login with a passkey over an unauthenticated connection, see [here »](/api/passkeys/#logging-in-with-a-passkey) for more info.

#### [Passkey login](/api/passkeys/)

Log in to Telegram instantly with a passkey using a PIN or biometrics instead of an SMS code.
