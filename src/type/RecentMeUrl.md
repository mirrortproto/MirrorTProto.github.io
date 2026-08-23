---
title: "RecentMeUrl"
original: "https://core.telegram.org/type/RecentMeUrl"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"RecentMeUrl","url":"/type/RecentMeUrl/"}]
layout: layout.njk
---

# RecentMeUrl

Recent t.me urls

```
recentMeUrlUnknown#46e1d13d url:string = RecentMeUrl;
recentMeUrlUser#b92c09e2 url:string user_id:long = RecentMeUrl;
recentMeUrlChat#b2da71d2 url:string chat_id:long = RecentMeUrl;
recentMeUrlChatInvite#eb49081d url:string chat_invite:ChatInvite = RecentMeUrl;
recentMeUrlStickerSet#bc0a57dc url:string set:StickerSetCovered = RecentMeUrl;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/recentMeUrlUnknown">recentMeUrlUnknown</a></td><td>Unknown t.me url</td></tr><tr><td><a href="/constructor/recentMeUrlUser">recentMeUrlUser</a></td><td>Recent t.me link to a user</td></tr><tr><td><a href="/constructor/recentMeUrlChat">recentMeUrlChat</a></td><td>Recent t.me link to a chat</td></tr><tr><td><a href="/constructor/recentMeUrlChatInvite">recentMeUrlChatInvite</a></td><td>Recent t.me invite link to a chat</td></tr><tr><td><a href="/constructor/recentMeUrlStickerSet">recentMeUrlStickerSet</a></td><td>Recent t.me stickerset installation URL</td></tr></tbody></table>
