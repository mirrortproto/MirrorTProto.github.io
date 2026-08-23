---
title: "auth.Authorization"
original: "https://core.telegram.org/type/auth.Authorization"
section: ref
description: "Object contains info on user authorization."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.Authorization","url":"/type/auth.Authorization/"}]
layout: layout.njk
---

# auth.Authorization

Object contains info on user authorization.

```
auth.authorization#2ea2c0d4 flags:# setup_password_required:flags.1?true otherwise_relogin_days:flags.1?int tmp_sessions:flags.0?int future_auth_token:flags.2?bytes user:User = auth.Authorization;
auth.authorizationSignUpRequired#44747e9a flags:# terms_of_service:flags.0?help.TermsOfService = auth.Authorization;

---functions---

auth.signUp#aac7b717 flags:# no_joined_notifications:flags.0?true phone_number:string phone_code_hash:string first_name:string last_name:string = auth.Authorization;
auth.signIn#8d52a951 flags:# phone_number:string phone_code_hash:string phone_code:flags.0?string email_verification:flags.1?EmailVerification = auth.Authorization;
auth.importAuthorization#a57a7dad id:long bytes:bytes = auth.Authorization;
auth.importBotAuthorization#67a3ff2c flags:int api_id:int api_hash:string bot_auth_token:string = auth.Authorization;
auth.checkPassword#d18b4d16 password:InputCheckPasswordSRP = auth.Authorization;
auth.recoverPassword#37096c70 flags:# code:string new_settings:flags.0?account.PasswordInputSettings = auth.Authorization;
auth.importWebTokenAuthorization#2db873a9 api_id:int api_hash:string web_auth_token:string = auth.Authorization;
auth.finishPasskeyLogin#9857ad07 flags:# credential:InputPasskeyCredential from_dc_id:flags.0?int from_auth_key_id:flags.0?long = auth.Authorization;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.authorization">auth.authorization</a></td><td>Contains user authorization info.</td></tr><tr><td><a href="/constructor/auth.authorizationSignUpRequired">auth.authorizationSignUpRequired</a></td><td>An account with this phone number doesn't exist on telegram: the user has to <a href="/api/auth">enter basic information and sign up</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.signUp">auth.signUp</a></td><td>Registers a validated phone number in the system.</td></tr><tr><td><a href="/method/auth.signIn">auth.signIn</a></td><td>Signs in a user with a validated phone number.</td></tr><tr><td><a href="/method/auth.importAuthorization">auth.importAuthorization</a></td><td>Logs in a user using a key transmitted from his native data-center.</td></tr><tr><td><a href="/method/auth.importBotAuthorization">auth.importBotAuthorization</a></td><td>Login as a bot</td></tr><tr><td><a href="/method/auth.checkPassword">auth.checkPassword</a></td><td>Try logging to an account protected by a <a href="/api/srp">2FA password</a>.</td></tr><tr><td><a href="/method/auth.recoverPassword">auth.recoverPassword</a></td><td>Reset the <a href="/api/srp">2FA password</a> using the recovery code sent using <a href="/method/auth.requestPasswordRecovery">auth.requestPasswordRecovery</a>.</td></tr><tr><td><a href="/method/auth.importWebTokenAuthorization">auth.importWebTokenAuthorization</a></td><td>Login by importing an authorization token</td></tr><tr><td><a href="/method/auth.finishPasskeyLogin">auth.finishPasskeyLogin</a></td><td>Complete login with a passkey over an unauthenticated connection, see <a href="/api/passkeys#logging-in-with-a-passkey">here »</a> for more info.<br><br>Must be sent to the user's native DC, as specified by the <code>user_handle</code> (<code>dcId:userId</code>) returned in the passkey assertion, see <a href="/api/passkeys#logging-in-with-a-passkey">here »</a> for the full flow.</td></tr></tbody></table>
