---
title: "messages.rateTranscribedAudio"
original: "https://core.telegram.org/method/messages.rateTranscribedAudio"
section: ref
description: "Rate transcribed voice message"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.rateTranscribedAudio","url":"/method/messages.rateTranscribedAudio/"}]
layout: layout.njk
---

# messages.rateTranscribedAudio

Rate [transcribed voice message](/api/transcribe/)

```
boolFalse#bc799737 = Bool;
boolTrue#997275b5 = Bool;
---functions---
messages.rateTranscribedAudio#7f1d072f peer:InputPeer msg_id:int transcription_id:long good:Bool = Bool;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the voice message was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID</td></tr><tr><td><strong>transcription_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Transcription ID</td></tr><tr><td><strong>good</strong></td><td style="text-align: center;"><a href="/type/Bool">Bool</a></td><td>Whether the transcription was correct</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Related pages

#### [Voice message transcription](/api/transcribe/)

How to transcribe voice messages.
