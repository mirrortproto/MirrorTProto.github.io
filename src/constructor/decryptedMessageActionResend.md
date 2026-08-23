---
title: "decryptedMessageActionResend"
original: "https://core.telegram.org/constructor/decryptedMessageActionResend"
section: ref
description: "Request for the other party in a Secret Chat to automatically resend a contiguous range of previously sent messages, as explained in Sequence number is Secret Chats."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageActionResend","url":"/constructor/decryptedMessageActionResend/"}]
layout: layout.njk
---

# decryptedMessageActionResend

Request for the other party in a Secret Chat to automatically resend a contiguous range of previously sent messages, as explained in [Sequence number is Secret Chats](/api/end-to-end/seq_no/).

```
===17===
decryptedMessageActionResend#511110b0 start_seq_no:int end_seq_no:int = DecryptedMessageAction;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>start_seq_no</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>out_seq_no</code> of the first message to be resent, with correct parity</td></tr><tr><td><strong>end_seq_no</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td><code>out_seq_no</code> of the last message to be resent, with same parity.</td></tr></tbody></table>

### Type

[DecryptedMessageAction](/type/DecryptedMessageAction/)

### Related pages

#### [Sequence numbers in Secret Chats](/api/end-to-end/seq_no/)

How to assign and interpret seq\_no counters in secret chats to protect against message manipulation.
