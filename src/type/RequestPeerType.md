---
title: "RequestPeerType"
original: "https://core.telegram.org/type/RequestPeerType"
section: ref
description: "Filtering criteria to use for the peer selection list shown to the user."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RequestPeerType","url":"/type/RequestPeerType/"}]
layout: layout.njk
---

# RequestPeerType

Filtering criteria to use for the peer selection list shown to the user.

```
requestPeerTypeUser#5f3b8a00 flags:# bot:flags.0?Bool premium:flags.1?Bool = RequestPeerType;
requestPeerTypeChat#c9f06e1b flags:# creator:flags.0?true bot_participant:flags.5?true has_username:flags.3?Bool forum:flags.4?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
requestPeerTypeBroadcast#339bef6c flags:# creator:flags.0?true has_username:flags.3?Bool user_admin_rights:flags.1?ChatAdminRights bot_admin_rights:flags.2?ChatAdminRights = RequestPeerType;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/requestPeerTypeUser">requestPeerTypeUser</a></td><td>Choose a user.</td></tr><tr><td><a href="/constructor/requestPeerTypeChat">requestPeerTypeChat</a></td><td>Choose a chat or supergroup</td></tr><tr><td><a href="/constructor/requestPeerTypeBroadcast">requestPeerTypeBroadcast</a></td><td>Choose a channel</td></tr><tr><td><a href="/constructor/requestPeerTypeCreateBot">requestPeerTypeCreateBot</a></td><td>Used in a <a href="/constructor/keyboardButtonRequestPeer">keyboardButtonRequestPeer</a> by a <a href="/api/bots/managed-bots">manager bot</a> to ask a user to create a new <a href="/api/bots/managed-bots">managed bot »</a>, see <a href="/api/bots/buttons#requesting-a-managed-bot">here »</a> for more info.</td></tr></tbody></table>
