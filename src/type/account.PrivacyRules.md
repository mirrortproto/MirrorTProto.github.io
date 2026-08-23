---
title: "Account.PrivacyRules"
original: "https://core.telegram.org/type/account.PrivacyRules"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Account.PrivacyRules","url":"/type/account.PrivacyRules/"}]
layout: layout.njk
---

# Account.PrivacyRules

Privacy rules

```
account.privacyRules#50a04e45 rules:Vector<PrivacyRule> chats:Vector<Chat> users:Vector<User> = account.PrivacyRules;

---functions---

account.getPrivacy#dadbc950 key:InputPrivacyKey = account.PrivacyRules;
account.setPrivacy#c9f81ce8 key:InputPrivacyKey rules:Vector<InputPrivacyRule> = account.PrivacyRules;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.privacyRules">account.privacyRules</a></td><td>Privacy rules</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getPrivacy">account.getPrivacy</a></td><td>Get privacy settings of current account</td></tr><tr><td><a href="/method/account.setPrivacy">account.setPrivacy</a></td><td>Change privacy settings of current account</td></tr></tbody></table>
