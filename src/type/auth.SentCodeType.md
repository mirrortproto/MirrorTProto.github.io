---
title: "auth.SentCodeType"
original: "https://core.telegram.org/type/auth.SentCodeType"
section: ref
description: "Type of the verification code that was sent"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"auth.SentCodeType","url":"/type/auth.SentCodeType/"}]
layout: layout.njk
---

# auth.SentCodeType

Type of the verification code that was sent

```
auth.sentCodeTypeApp#3dbb5986 length:int = auth.SentCodeType;
auth.sentCodeTypeSms#c000bba2 length:int = auth.SentCodeType;
auth.sentCodeTypeCall#5353e5a7 length:int = auth.SentCodeType;
auth.sentCodeTypeFlashCall#ab03c6d9 pattern:string = auth.SentCodeType;
auth.sentCodeTypeMissedCall#82006484 prefix:string length:int = auth.SentCodeType;
auth.sentCodeTypeEmailCode#f450f59b flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true email_pattern:string length:int reset_available_period:flags.3?int reset_pending_date:flags.4?int = auth.SentCodeType;
auth.sentCodeTypeSetUpEmailRequired#a5491dea flags:# apple_signin_allowed:flags.0?true google_signin_allowed:flags.1?true = auth.SentCodeType;
auth.sentCodeTypeFragmentSms#d9565c39 url:string length:int = auth.SentCodeType;
auth.sentCodeTypeFirebaseSms#9fd736 flags:# nonce:flags.0?bytes play_integrity_project_id:flags.2?long play_integrity_nonce:flags.2?bytes receipt:flags.1?string push_timeout:flags.1?int length:int = auth.SentCodeType;
auth.sentCodeTypeSmsWord#a416ac81 flags:# beginning:flags.0?string = auth.SentCodeType;
auth.sentCodeTypeSmsPhrase#b37794af flags:# beginning:flags.0?string = auth.SentCodeType;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/auth.sentCodeTypeApp">auth.sentCodeTypeApp</a></td><td>The code was sent through the telegram app</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSms">auth.sentCodeTypeSms</a></td><td>The code was sent via SMS</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeCall">auth.sentCodeTypeCall</a></td><td>The code will be sent via a phone call: a synthesized voice will tell the user which verification code to input.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeFlashCall">auth.sentCodeTypeFlashCall</a></td><td>The code will be sent via a flash phone call, that will be closed immediately. The phone code will then be the phone number itself, just make sure that the phone number matches the specified pattern.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeMissedCall">auth.sentCodeTypeMissedCall</a></td><td>The code will be sent via a flash phone call, that will be closed immediately. The last digits of the phone number that calls are the code that must be entered manually by the user.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeEmailCode">auth.sentCodeTypeEmailCode</a></td><td>The code was sent via the <a href="/api/auth#email-verification">previously configured login email »</a></td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSetUpEmailRequired">auth.sentCodeTypeSetUpEmailRequired</a></td><td>The user should add and verify an email address in order to login as described <a href="/api/auth#email-verification">here »</a>.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeFragmentSms">auth.sentCodeTypeFragmentSms</a></td><td>The code was delivered via <a href="https://fragment.com">fragment.com</a>.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeFirebaseSms">auth.sentCodeTypeFirebaseSms</a></td><td>An authentication code should be delivered via SMS after Firebase attestation, as described in the <a href="/api/auth">auth documentation »</a>.</td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSmsWord">auth.sentCodeTypeSmsWord</a></td><td>The code was sent via SMS as a secret word, starting with the letter specified in <code>beginning</code></td></tr><tr><td><a href="/constructor/auth.sentCodeTypeSmsPhrase">auth.sentCodeTypeSmsPhrase</a></td><td>The code was sent via SMS as a secret phrase starting with the word specified in <code>beginning</code></td></tr></tbody></table>
