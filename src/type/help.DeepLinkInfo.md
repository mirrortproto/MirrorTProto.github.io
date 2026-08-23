---
title: "Help.DeepLinkInfo"
original: "https://core.telegram.org/type/help.DeepLinkInfo"
section: ref
description: "Contains information about an unsupported deep link »"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Help.DeepLinkInfo","url":"/type/help.DeepLinkInfo/"}]
layout: layout.njk
---

# Help.DeepLinkInfo

Contains information about an unsupported [deep link »](/api/links/#unsupported-links)

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;

---functions---

help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/help.deepLinkInfoEmpty">help.deepLinkInfoEmpty</a></td><td>Deep link info empty</td></tr><tr><td><a href="/constructor/help.deepLinkInfo">help.deepLinkInfo</a></td><td>Deep link info, see <a href="/api/links#unsupported-links">the here for more details</a></td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/help.getDeepLinkInfo">help.getDeepLinkInfo</a></td><td>Get info about an unsupported deep link, see <a href="/api/links#unsupported-links">here for more info »</a>.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
