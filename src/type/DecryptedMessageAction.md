---
title: "DecryptedMessageAction"
original: "https://core.telegram.org/type/DecryptedMessageAction"
section: ref
description: "Object describes the action to which a service message is linked."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DecryptedMessageAction","url":"/type/DecryptedMessageAction/"}]
layout: layout.njk
---

# DecryptedMessageAction

Object describes the action to which a service message is linked.

```
===8===
decryptedMessageActionSetMessageTTL#a1733aec ttl_seconds:int = DecryptedMessageAction;
decryptedMessageActionReadMessages#c4f40be random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageActionDeleteMessages#65614304 random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageActionScreenshotMessages#8ac1f475 random_ids:Vector<long> = DecryptedMessageAction;
decryptedMessageActionFlushHistory#6719e45c = DecryptedMessageAction;

===17===
decryptedMessageActionResend#511110b0 start_seq_no:int end_seq_no:int = DecryptedMessageAction;
decryptedMessageActionNotifyLayer#f3048883 layer:int = DecryptedMessageAction;
decryptedMessageActionTyping#ccb27641 action:SendMessageAction = DecryptedMessageAction;

===20===
decryptedMessageActionRequestKey#f3c9611b exchange_id:long g_a:bytes = DecryptedMessageAction;
decryptedMessageActionAcceptKey#6fe1735b exchange_id:long g_b:bytes key_fingerprint:long = DecryptedMessageAction;
decryptedMessageActionAbortKey#dd05ec6b exchange_id:long = DecryptedMessageAction;
decryptedMessageActionCommitKey#ec2e0b9b exchange_id:long key_fingerprint:long = DecryptedMessageAction;
decryptedMessageActionNoop#a82fdd63 = DecryptedMessageAction;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessageActionSetMessageTTL">decryptedMessageActionSetMessageTTL</a></td><td>Setting of a message lifetime after reading.<br><br>Upon receiving such message the client shall start deleting of all messages of an encrypted chat <strong>ttl_seconds</strong> seconds after the messages were read by user.</td></tr><tr><td><a href="/constructor/decryptedMessageActionReadMessages">decryptedMessageActionReadMessages</a></td><td>Messages marked as read.</td></tr><tr><td><a href="/constructor/decryptedMessageActionDeleteMessages">decryptedMessageActionDeleteMessages</a></td><td>Deleted messages.</td></tr><tr><td><a href="/constructor/decryptedMessageActionScreenshotMessages">decryptedMessageActionScreenshotMessages</a></td><td>A screenshot was taken.</td></tr><tr><td><a href="/constructor/decryptedMessageActionFlushHistory">decryptedMessageActionFlushHistory</a></td><td>The entire message history has been deleted.</td></tr><tr><td><a href="/constructor/decryptedMessageActionResend">decryptedMessageActionResend</a></td><td>Request for the other party in a Secret Chat to automatically resend a contiguous range of previously sent messages, as explained in <a href="/api/end-to-end/seq_no">Sequence number is Secret Chats</a>.</td></tr><tr><td><a href="/constructor/decryptedMessageActionNotifyLayer">decryptedMessageActionNotifyLayer</a></td><td>A notification stating the API layer that is used by the client. You should use your current layer and take notice of the layer used on the other side of a conversation when sending messages.</td></tr><tr><td><a href="/constructor/decryptedMessageActionTyping">decryptedMessageActionTyping</a></td><td>User is preparing a message: typing, recording, uploading, etc.</td></tr><tr><td><a href="/constructor/decryptedMessageActionRequestKey">decryptedMessageActionRequestKey</a></td><td>Request rekeying, see <a href="/api/end-to-end/pfs">rekeying process</a></td></tr><tr><td><a href="/constructor/decryptedMessageActionAcceptKey">decryptedMessageActionAcceptKey</a></td><td>Accept new key</td></tr><tr><td><a href="/constructor/decryptedMessageActionAbortKey">decryptedMessageActionAbortKey</a></td><td>Abort rekeying</td></tr><tr><td><a href="/constructor/decryptedMessageActionCommitKey">decryptedMessageActionCommitKey</a></td><td>Commit new key, see <a href="/api/end-to-end/pfs">rekeying process</a></td></tr><tr><td><a href="/constructor/decryptedMessageActionNoop">decryptedMessageActionNoop</a></td><td>NOOP action</td></tr></tbody></table>
