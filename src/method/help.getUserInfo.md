---
title: "help.getUserInfo"
original: "https://core.telegram.org/method/help.getUserInfo"
section: ref
description: "Can only be used by TSF members to obtain internal information."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getUserInfo","url":"/method/help.getUserInfo/"}]
layout: layout.njk
---

# help.getUserInfo

Can only be used by TSF members to obtain internal information.

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;
---functions---
help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/InputUser">InputUser</a></td><td>User ID</td></tr></tbody></table>

### Result

[help.UserInfo](/type/help.UserInfo/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>403</td><td>USER_INVALID</td><td>Invalid user provided.</td></tr></tbody></table>
