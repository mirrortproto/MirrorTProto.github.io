---
title: "auth.SentCode"
original: "https://core.telegram.org/type/auth.SentCode"
section: ref
description: "Contains info on a confirmation code message sent via SMS, phone call or Telegram."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.SentCode","url":"/type/auth.SentCode/"}]
layout: layout.njk
---

# auth.SentCode

Contains info on a confirmation code message sent via SMS, phone call or Telegram.

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;

---functions---

auth.sendCode#a677244f phone_number:string api_id:int api_hash:string settings:CodeSettings = auth.SentCode;
auth.resendCode#cae47523 flags:# phone_number:string phone_code_hash:string reason:flags.0?string = auth.SentCode;
auth.resetLoginEmail#7e960193 phone_number:string phone_code_hash:string = auth.SentCode;
auth.checkPaidAuth#56e59f9c phone_number:string phone_code_hash:string form_id:long = auth.SentCode;

account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
account.sendConfirmPhoneCode#1b3faa88 hash:string settings:CodeSettings = auth.SentCode;
account.sendVerifyPhoneCode#a5a356f9 phone_number:string settings:CodeSettings = auth.SentCode;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.sentCode">auth.sentCode</a></td><td>Contains info about a sent verification code.</td></tr><tr><td><a href="/constructor/auth.sentCodeSuccess">auth.sentCodeSuccess</a></td><td>The user successfully authorized using <a href="/api/auth#future-auth-tokens">future auth tokens</a></td></tr><tr><td><a href="/constructor/auth.sentCodePaymentRequired">auth.sentCodePaymentRequired</a></td><td>Official apps may receive this constructor, indicating that due to the high cost of SMS verification codes for the user's country/provider, the user must purchase a <a href="/api/premium">Telegram Premium</a> subscription in order to proceed with the login/signup, see <a href="/api/auth#paid-auth">here »</a> for more info.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/auth.sendCode">auth.sendCode</a></td><td>Send the verification code for login</td></tr><tr><td><a href="/method/auth.resendCode">auth.resendCode</a></td><td>Resend the login code via another medium, the phone code type is determined by the return value of the previous auth.sendCode/auth.resendCode: see <a href="/api/auth">login</a> for more info.</td></tr><tr><td><a href="/method/auth.resetLoginEmail">auth.resetLoginEmail</a></td><td>Reset the <a href="https://core.telegram.org/api/auth#email-verification">login email »</a>.</td></tr><tr><td><a href="/method/auth.checkPaidAuth">auth.checkPaidAuth</a></td><td>Checks the status of a <a href="/api/auth#paid-auth">login payment</a>.</td></tr><tr><td><a href="/method/account.sendChangePhoneCode">account.sendChangePhoneCode</a></td><td>Verify a new phone number to associate to the current account</td></tr><tr><td><a href="/method/account.sendConfirmPhoneCode">account.sendConfirmPhoneCode</a></td><td>Send confirmation code to cancel account deletion, for more info <a href="/api/account-deletion">click here »</a></td></tr><tr><td><a href="/method/account.sendVerifyPhoneCode">account.sendVerifyPhoneCode</a></td><td>Send the verification phone code for telegram <a href="/passport">passport</a>.</td></tr></tbody></table>
