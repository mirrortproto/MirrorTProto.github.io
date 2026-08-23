---
title: "updateBotStopped"
original: "https://core.telegram.org/constructor/updateBotStopped"
section: ref
description: "A bot was stopped or re-started."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotStopped","url":"/constructor/updateBotStopped/"}]
layout: layout.njk
---

# updateBotStopped

A bot was stopped or re-started.

```
updateBotStopped#c4870a49 user_id:long date:int stopped:Bool qts:int = Update;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>The user ID</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>When did this action occur</td></tr><tr><td><strong>stopped</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether the bot was stopped or started</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
