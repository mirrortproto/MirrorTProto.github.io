---
title: "messages.reportEncryptedSpam"
original: "https://core.telegram.org/method/messages.reportEncryptedSpam"
section: ref
description: "Report a secret chat for spam"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.reportEncryptedSpam","url":"/method/messages.reportEncryptedSpam/"}]
layout: layout.njk
---

# messages.reportEncryptedSpam

Report a secret chat for spam

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.reportEncryptedSpam#4b0c8c0f peer:InputEncryptedChat = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputEncryptedChat">InputEncryptedChat</a></td><td>The secret chat to report</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr></tbody></table>
