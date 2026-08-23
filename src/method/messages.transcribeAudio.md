---
title: "messages.transcribeAudio"
original: "https://core.telegram.org/method/messages.transcribeAudio"
section: ref
description: "messages.TranscribedAudio"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.transcribeAudio","url":"/method/messages.transcribeAudio/"}]
layout: layout.njk
---

# messages.transcribeAudio

[Transcribe voice message](/api/transcribe/)

```
messages.transcribedAudio#cfb9d957 flags:# pending:flags.0?true transcription_id:long text:string trial_remains_num:flags.1?int trial_remains_until_date:flags.1?int = messages.TranscribedAudio;
---functions---
messages.transcribeAudio#269e9a49 peer:InputPeer msg_id:int = messages.TranscribedAudio;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer ID where the voice message was sent</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Voice message ID</td></tr></tbody></table>

### Result

[messages.TranscribedAudio](/type/messages.TranscribedAudio/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>MSG_VOICE_MISSING</td><td>The specified message is not a voice message.</td></tr><tr><td>400</td><td>MSG_VOICE_TOO_LONG</td><td>The specified voice message is too long to be transcribed.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr><tr><td>400</td><td>TRANSCRIPTION_FAILED</td><td>Audio transcription failed.</td></tr></tbody></table>

### Related pages

#### [Voice message transcription](/api/transcribe/)

How to transcribe voice messages.
