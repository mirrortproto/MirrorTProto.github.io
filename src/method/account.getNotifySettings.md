---
title: "account.getNotifySettings"
original: "https://core.telegram.org/method/account.getNotifySettings"
section: ref
description: "Gets current notification settings for a given user/group, from all users/all groups."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.getNotifySettings","url":"/method/account.getNotifySettings/"}]
layout: layout.njk
---

# account.getNotifySettings

Gets current notification settings for a given user/group, from all users/all groups.

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;
---functions---
account.getNotifySettings#12b3ad31 peer:InputNotifyPeer = PeerNotifySettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputNotifyPeer">InputNotifyPeer</a></td><td>Notification source</td></tr></tbody></table>

### Result

[PeerNotifySettings](/type/PeerNotifySettings/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
