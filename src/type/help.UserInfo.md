---
title: "Help.UserInfo"
original: "https://core.telegram.org/type/help.UserInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.UserInfo","url":"/type/help.UserInfo/"}]
layout: layout.njk
---

# Help.UserInfo

User info

```
help.userInfoEmpty#f3ae2eed = help.UserInfo;
help.userInfo#1eb3758 message:string entities:Vector<MessageEntity> author:string date:int = help.UserInfo;

---functions---

help.getUserInfo#38a08d3 user_id:InputUser = help.UserInfo;
help.editUserInfo#66b91b70 user_id:InputUser message:string entities:Vector<MessageEntity> = help.UserInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.userInfoEmpty">help.userInfoEmpty</a></td><td>Internal use</td></tr><tr><td><a href="/constructor/help.userInfo">help.userInfo</a></td><td>Internal use</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getUserInfo">help.getUserInfo</a></td><td>Can only be used by TSF members to obtain internal information.</td></tr><tr><td><a href="/method/help.editUserInfo">help.editUserInfo</a></td><td>Internal use</td></tr></tbody></table>
