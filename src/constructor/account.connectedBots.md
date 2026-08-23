---
title: "account.connectedBots"
original: "https://core.telegram.org/constructor/account.connectedBots"
section: ref
description: "Info about currently connected business bots."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.connectedBots","url":"/constructor/account.connectedBots/"}]
layout: layout.njk
---

# account.connectedBots

Info about currently connected [business bots](/api/bots/connected-business-bots/).

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>connected_bots</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/ConnectedBot">ConnectedBot</a>&gt;</td><td>Info about the connected bots</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/User">User</a>&gt;</td><td>Bot information</td></tr></tbody></table>

### Type

[account.ConnectedBots](/type/account.ConnectedBots/)

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
