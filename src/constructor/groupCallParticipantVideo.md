---
title: "groupCallParticipantVideo"
original: "https://core.telegram.org/constructor/groupCallParticipantVideo"
section: ref
description: "Info about a video stream"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"groupCallParticipantVideo","url":"/constructor/groupCallParticipantVideo/"}]
layout: layout.njk
---

# groupCallParticipantVideo

Info about a video stream

```
groupCallParticipantVideo#67753ac8 flags:# paused:flags.0?true endpoint:string source_groups:Vector<GroupCallParticipantVideoSourceGroup> audio_source:flags.1?int = GroupCallParticipantVideo;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>paused</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether the stream is currently paused</td></tr><tr><td><strong>endpoint</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Endpoint</td></tr><tr><td><strong>source_groups</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/GroupCallParticipantVideoSourceGroup">GroupCallParticipantVideoSourceGroup</a>&gt;</td><td>Source groups</td></tr><tr><td><strong>audio_source</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/int">int</a></td><td>Audio source ID</td></tr></tbody></table>

### Type

[GroupCallParticipantVideo](/type/GroupCallParticipantVideo/)
