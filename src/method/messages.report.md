---
title: "messages.report"
original: "https://core.telegram.org/method/messages.report"
section: ref
description: "Report a message in a chat for violation of telegram's Terms of Service"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.report","url":"/method/messages.report/"}]
layout: layout.njk
---

# messages.report

Report a message in a chat for violation of telegram's Terms of Service

```
reportResultChooseOption#f0e4e0b6 title:string options:Vector<MessageReportOption> = ReportResult;
reportResultAddComment#6f09ac31 flags:# optional:flags.0?true option:bytes = ReportResult;
reportResultReported#8db33c4b = ReportResult;
---functions---
messages.report#fc78af9b peer:InputPeer id:Vector<int> option:bytes message:string = ReportResult;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>IDs of messages to report</td></tr><tr><td><strong>option</strong></td><td style="text-align: center;"><a href="/type/bytes">bytes</a></td><td>Menu option, intially empty</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Comment for report moderation</td></tr></tbody></table>

### Result

[ReportResult](/type/ReportResult/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>MESSAGE_REQUIRED</td><td>A non-empty list of IDs must be passed to <code>id</code>.</td></tr><tr><td>400</td><td>OPTION_INVALID</td><td>Invalid option selected.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>
