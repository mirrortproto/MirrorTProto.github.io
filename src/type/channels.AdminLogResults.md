---
title: "Channels.AdminLogResults"
original: "https://core.telegram.org/type/channels.AdminLogResults"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Channels.AdminLogResults","url":"/type/channels.AdminLogResults/"}]
layout: layout.njk
---

# Channels.AdminLogResults

Admin log events

```
channels.adminLogResults#ed8af74d events:Vector<ChannelAdminLogEvent> chats:Vector<Chat> users:Vector<User> = channels.AdminLogResults;

---functions---

channels.getAdminLog#33ddf480 flags:# channel:InputChannel q:string events_filter:flags.0?ChannelAdminLogEventsFilter admins:flags.1?Vector<InputUser> max_id:long min_id:long limit:int = channels.AdminLogResults;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/channels.adminLogResults">channels.adminLogResults</a></td><td>Admin log events</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/channels.getAdminLog">channels.getAdminLog</a></td><td>Get the admin log of a <a href="/api/channel">channel/supergroup</a></td></tr></tbody></table>
