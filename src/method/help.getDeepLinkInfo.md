---
title: "help.getDeepLinkInfo"
original: "https://core.telegram.org/method/help.getDeepLinkInfo"
section: ref
description: "Get info about an unsupported deep link, see here for more info »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getDeepLinkInfo","url":"/method/help.getDeepLinkInfo/"}]
layout: layout.njk
---

# help.getDeepLinkInfo

Get info about an unsupported deep link, see [here for more info »](/api/links/#unsupported-links).

```
help.deepLinkInfoEmpty#66afa166 = help.DeepLinkInfo;
help.deepLinkInfo#6a4ee832 flags:# update_app:flags.0?true message:string entities:flags.1?Vector<MessageEntity> = help.DeepLinkInfo;
---functions---
help.getDeepLinkInfo#3fedc75f path:string = help.DeepLinkInfo;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>path</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Path component of a <code>tg:</code> link</td></tr></tbody></table>

### Result

[help.DeepLinkInfo](/type/help.DeepLinkInfo/)

### Only users can use this method

### This method can be invoked over an [unauthenticated connection »](/api/auth/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
