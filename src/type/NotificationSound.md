---
title: "NotificationSound"
original: "https://core.telegram.org/type/NotificationSound"
section: ref
description: "Represents a notification sound"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"NotificationSound","url":"/type/NotificationSound/"}]
layout: layout.njk
---

# NotificationSound

Represents a notification sound

```
notificationSoundDefault#97e8bebe = NotificationSound;
notificationSoundNone#6f0c34df = NotificationSound;
notificationSoundLocal#830b9ae4 title:string data:string = NotificationSound;
notificationSoundRingtone#ff6c8049 id:long = NotificationSound;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/notificationSoundDefault">notificationSoundDefault</a></td><td>Indicates the default notification sound should be used</td></tr><tr><td><a href="/constructor/notificationSoundNone">notificationSoundNone</a></td><td>No notification sound should be used</td></tr><tr><td><a href="/constructor/notificationSoundLocal">notificationSoundLocal</a></td><td>Indicates a specific local notification sound should be used</td></tr><tr><td><a href="/constructor/notificationSoundRingtone">notificationSoundRingtone</a></td><td>A specific previously uploaded notification sound should be used</td></tr></tbody></table>
