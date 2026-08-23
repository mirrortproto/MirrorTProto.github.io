---
title: "peerNotifySettings"
original: "https://core.telegram.org/constructor/peerNotifySettings"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"peerNotifySettings","url":"/constructor/peerNotifySettings/"}]
layout: layout.njk
---

# peerNotifySettings

Notification settings.

```
peerNotifySettings#99622c0c flags:# show_previews:flags.0?Bool silent:flags.1?Bool mute_until:flags.2?int ios_sound:flags.3?NotificationSound android_sound:flags.4?NotificationSound other_sound:flags.5?NotificationSound stories_muted:flags.6?Bool stories_hide_sender:flags.7?Bool stories_ios_sound:flags.8?NotificationSound stories_android_sound:flags.9?NotificationSound stories_other_sound:flags.10?NotificationSound = PeerNotifySettings;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>show_previews</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Bool">Bool</a></td><td>(Ternary value) If set, indicates whether or not to display previews of messages in notifications; otherwise the default behavior should be used.</td></tr><tr><td><strong>silent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Bool">Bool</a></td><td>(Ternary value) If set, indicates whether to mute or unmute the peer; otherwise the default behavior should be used.</td></tr><tr><td><strong>mute_until</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/int">int</a></td><td>Mute all notifications until this date</td></tr><tr><td><strong>ios_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/NotificationSound">NotificationSound</a></td><td>Notification sound for the official iOS application</td></tr><tr><td><strong>android_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/NotificationSound">NotificationSound</a></td><td>Notification sound for the official android application</td></tr><tr><td><strong>other_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/NotificationSound">NotificationSound</a></td><td>Notification sound for other applications</td></tr><tr><td><strong>stories_muted</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.6?<a href="/type/Bool">Bool</a></td><td>Whether story notifications should be disabled.</td></tr><tr><td><strong>stories_hide_sender</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.7?<a href="/type/Bool">Bool</a></td><td>Whether the sender name should be displayed in story notifications.</td></tr><tr><td><strong>stories_ios_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.8?<a href="/type/NotificationSound">NotificationSound</a></td><td>Sound for story notifications on the official iOS application</td></tr><tr><td><strong>stories_android_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.9?<a href="/type/NotificationSound">NotificationSound</a></td><td>Sound for story notifications on the official Android application</td></tr><tr><td><strong>stories_other_sound</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.10?<a href="/type/NotificationSound">NotificationSound</a></td><td>Sound for story notifications on other applications</td></tr></tbody></table>

### Type

[PeerNotifySettings](/type/PeerNotifySettings/)

### Event flags (events\_mask)

<table class="table"><thead><tr><th scope="col"></th><th scope="col"></th></tr></thead><tbody><tr><td><code>0x00000001</code></td><td>Profile photo update notification</td></tr></tbody></table>
