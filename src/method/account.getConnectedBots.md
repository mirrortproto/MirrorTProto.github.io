---
title: "account.getConnectedBots"
original: "https://core.telegram.org/method/account.getConnectedBots"
section: ref
description: "List all currently connected business bots »"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getConnectedBots","url":"/method/account.getConnectedBots/"}]
layout: layout.njk
---

# account.getConnectedBots

List all currently connected [business bots »](/api/bots/connected-business-bots/)

```
account.connectedBots#17d7f87b connected_bots:Vector<ConnectedBot> users:Vector<User> = account.ConnectedBots;
---functions---
account.getConnectedBots#4ea4c80f = account.ConnectedBots;
```

### Parameters

This constructor does not require any parameters.

### Result

[account.ConnectedBots](/type/account.ConnectedBots/)

### Only users can use this method

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.
