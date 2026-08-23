---
title: "account.setPrivacy"
original: "https://core.telegram.org/method/account.setPrivacy"
section: ref
description: "Change privacy settings of current account"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.setPrivacy","url":"/method/account.setPrivacy/"}]
layout: layout.njk
---

# account.setPrivacy

Change privacy settings of current account

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/InputPrivacyKey">InputPrivacyKey</a></td><td>New privacy rule</td></tr><tr><td><strong>rules</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPrivacyRule">InputPrivacyRule</a>&gt;</td><td>Peers to which the privacy rule will apply.</td></tr></tbody></table>

### Result

[account.PrivacyRules](/type/account.PrivacyRules/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PRIVACY_KEY_INVALID</td><td>The privacy key is invalid.</td></tr><tr><td>400</td><td>PRIVACY_TOO_LONG</td><td>Too many privacy rules were specified, the current limit is 1000.</td></tr><tr><td>400</td><td>PRIVACY_VALUE_INVALID</td><td>The specified privacy rule combination is invalid.</td></tr></tbody></table>
