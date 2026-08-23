---
title: "help.getRecentMeUrls"
original: "https://core.telegram.org/method/help.getRecentMeUrls"
section: ref
description: "Get recently used t.me links."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"help.getRecentMeUrls","url":"/method/help.getRecentMeUrls/"}]
layout: layout.njk
---

# help.getRecentMeUrls

Get recently used `t.me` links.

When installing official applications from "Download Telegram" buttons present in [t.me](https://t.me) pages, a referral parameter is passed to applications after installation.  
If, after downloading the application, the user creates a new account (instead of logging into an existing one), the referral parameter should be imported using this method, which returns the [t.me](https://t.me) pages the user recently opened, before installing Telegram.

```
help.recentMeUrls#e0310d7 urls:Vector<RecentMeUrl> chats:Vector<Chat> users:Vector<User> = help.RecentMeUrls;
---functions---
help.getRecentMeUrls#3dc0f114 referer:string = help.RecentMeUrls;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>referer</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Referrer</td></tr></tbody></table>

### Result

[help.RecentMeUrls](/type/help.RecentMeUrls/)

### Only users can use this method
