---
title: "PeerNotifySettings"
original: "https://core.telegram.org/type/PeerNotifySettings"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"PeerNotifySettings","url":"/type/PeerNotifySettings/"}]
layout: layout.njk
---

# PeerNotifySettings

Notification settings.

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;

---functions---

account.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/peerNotifySettings">peerNotifySettings</a></td><td>Notification settings.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getNotifySettings">account.getNotifySettings</a></td><td>Gets current notification settings for a given user/group, from all users/all groups.</td></tr></tbody></table>
