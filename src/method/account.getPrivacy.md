---
title: "account.getPrivacy"
original: "https://core.telegram.org/method/account.getPrivacy"
section: ref
description: "Get privacy settings of current account"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getPrivacy","url":"/method/account.getPrivacy/"}]
layout: layout.njk
---

# account.getPrivacy

Get privacy settings of current account

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;
---functions---
account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>key</strong></td><td style="text-align: center;"><a href="/type/InputPrivacyKey">InputPrivacyKey</a></td><td>Peer category whose privacy settings should be fetched</td></tr></tbody></table>

### Result

[account.PrivacyRules](/type/account.PrivacyRules/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PRIVACY_KEY_INVALID</td><td>The privacy key is invalid.</td></tr></tbody></table>
