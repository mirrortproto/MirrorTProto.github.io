---
title: "account.sendChangePhoneCode"
original: "https://core.telegram.org/method/account.sendChangePhoneCode"
section: ref
description: "Verify a new phone number to associate to the current account"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.sendChangePhoneCode","url":"/method/account.sendChangePhoneCode/"}]
layout: layout.njk
---

# account.sendChangePhoneCode

Verify a new phone number to associate to the current account

```
auth.sentCode#5e002502 flags:# type:auth.SentCodeType phone_code_hash:string next_type:flags.1?auth.CodeType timeout:flags.2?int = auth.SentCode;
auth.sentCodeSuccess#2390fe44 authorization:auth.Authorization = auth.SentCode;
auth.sentCodePaymentRequired#e0955a3c store_product:string phone_code_hash:string support_email_address:string support_email_subject:string currency:string amount:long = auth.SentCode;
---functions---
account.sendChangePhoneCode#82574ae5 phone_number:string settings:CodeSettings = auth.SentCode;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>phone_number</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>New phone number</td></tr><tr><td><strong>settings</strong></td><td style="text-align: center;"><a href="/type/CodeSettings">CodeSettings</a></td><td>Phone code settings</td></tr></tbody></table>

### Result

[auth.SentCode](/type/auth.SentCode/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>406</td><td>FRESH_CHANGE_PHONE_FORBIDDEN</td><td>You can't change phone number right after logging in, please wait at least 24 hours.</td></tr><tr><td>400</td><td>PHONE_NUMBER_BANNED</td><td>The provided phone number is banned from telegram.</td></tr><tr><td>406</td><td>PHONE_NUMBER_INVALID</td><td>The phone number is invalid.</td></tr><tr><td>400</td><td>PHONE_NUMBER_OCCUPIED</td><td>The phone number is already in use.</td></tr></tbody></table>
