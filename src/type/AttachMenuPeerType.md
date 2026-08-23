---
title: "AttachMenuPeerType"
original: "https://core.telegram.org/type/AttachMenuPeerType"
section: ref
description: "Indicates a supported peer type for a bot mini app attachment menu"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"AttachMenuPeerType","url":"/type/AttachMenuPeerType/"}]
layout: layout.njk
---

# AttachMenuPeerType

Indicates a supported peer type for a [bot mini app attachment menu](https://core.telegram.org/bots/webapps#launching-mini-apps-from-the-attachment-menu)

```
attachMenuPeerTypeSameBotPM#7d6be90e = AttachMenuPeerType;
attachMenuPeerTypeBotPM#c32bfa1a = AttachMenuPeerType;
attachMenuPeerTypePM#f146d31f = AttachMenuPeerType;
attachMenuPeerTypeChat#509113f = AttachMenuPeerType;
attachMenuPeerTypeBroadcast#7bfbdefc = AttachMenuPeerType;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/attachMenuPeerTypeSameBotPM">attachMenuPeerTypeSameBotPM</a></td><td>The bot attachment menu entry is available in the chat with the bot that offers it</td></tr><tr><td><a href="/constructor/attachMenuPeerTypeBotPM">attachMenuPeerTypeBotPM</a></td><td>The bot attachment menu entry is available in private chats with other bots (excluding the bot that offers the current attachment menu)</td></tr><tr><td><a href="/constructor/attachMenuPeerTypePM">attachMenuPeerTypePM</a></td><td>The bot attachment menu entry is available in private chats with other users (not bots)</td></tr><tr><td><a href="/constructor/attachMenuPeerTypeChat">attachMenuPeerTypeChat</a></td><td>The bot attachment menu entry is available in <a href="/api/channel">groups and supergroups</a></td></tr><tr><td><a href="/constructor/attachMenuPeerTypeBroadcast">attachMenuPeerTypeBroadcast</a></td><td>The bot attachment menu entry is available in channels</td></tr></tbody></table>

### Related pages

#### [Telegram Mini Apps](https://core.telegram.org/bots/webapps)
