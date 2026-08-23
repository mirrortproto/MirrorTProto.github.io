---
title: "phone.GroupCallStreamRtmpUrl"
original: "https://core.telegram.org/type/phone.GroupCallStreamRtmpUrl"
section: ref
description: "RTMP URL and stream key to be used in streaming software"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"phone.GroupCallStreamRtmpUrl","url":"/type/phone.GroupCallStreamRtmpUrl/"}]
layout: layout.njk
---

# phone.GroupCallStreamRtmpUrl

RTMP URL and stream key to be used in streaming software

```
phone.groupCallStreamRtmpUrl#2dbf3432 url:string key:string = phone.GroupCallStreamRtmpUrl;

---functions---

phone.getGroupCallStreamRtmpUrl#5af4c73a flags:# live_story:flags.0?true peer:InputPeer revoke:Bool = phone.GroupCallStreamRtmpUrl;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/phone.groupCallStreamRtmpUrl">phone.groupCallStreamRtmpUrl</a></td><td>Contains the RTMP publishing URL and secret stream key, see <a href="/api/group-calls#creating-and-publishing-an-rtmp-livestream">creating and publishing an RTMP livestream »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/phone.getGroupCallStreamRtmpUrl">phone.getGroupCallStreamRtmpUrl</a></td><td>Get the RTMP URL and stream key used by the single external streamer that publishes all audio and video for an RTMP-mode video chat, livestream or live story.<br><br>See <a href="/api/group-calls#creating-and-publishing-an-rtmp-livestream">here »</a> for the full flow.</td></tr></tbody></table>
