---
title: "MissingInvitee"
original: "https://core.telegram.org/type/MissingInvitee"
section: ref
description: "Info about why a specific user could not be invited »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MissingInvitee","url":"/type/MissingInvitee/"}]
layout: layout.njk
---

# MissingInvitee

Info about why a specific user could not be [invited »](/api/invites/#direct-invites).

```
missingInvitee#628c9224 flags:# premium_would_allow_invite:flags.0?true premium_required_for_pm:flags.1?true user_id:long = MissingInvitee;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/missingInvitee">missingInvitee</a></td><td>Info about why a specific user could not be <a href="/api/invites#direct-invites">invited »</a>.</td></tr></tbody></table>

### Related pages

#### [Invite links](/api/invites/)

Chats and channels may have a public username or a private invite link: private invite links may be further enhanced with per-user join requests.
