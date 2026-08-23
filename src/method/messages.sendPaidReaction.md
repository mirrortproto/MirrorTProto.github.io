---
title: "messages.sendPaidReaction"
original: "https://core.telegram.org/method/messages.sendPaidReaction"
section: ref
description: "Sends one or more paid Telegram Star reactions », transferring Telegram Stars » to a channel's balance."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendPaidReaction","url":"/method/messages.sendPaidReaction/"}]
layout: layout.njk
---

# messages.sendPaidReaction

Sends one or more [paid Telegram Star reactions »](/api/reactions/#paid-reactions), transferring [Telegram Stars »](/api/stars/) to a channel's balance.

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendPaidReaction#58bbcb50 flags:# peer:InputPeer msg_id:int count:int random_id:long private:flags.0?PaidReactionPrivacy = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The channel</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The message to react to</td></tr><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>The number of <a href="/api/stars">stars</a> to send (each will increment the reaction counter by one).</td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Unique client message ID required to prevent message resending. <strong>Note</strong>: this argument <strong>must</strong> be composed of a 64-bit integer where the lower 32 bits are random, and the higher 32 bits <strong>are equal to the current unixtime</strong>, i.e. `uint64_t random_id = (time() &lt;&lt; 32). See <a href="/api/updates#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>private</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/PaidReactionPrivacy">PaidReactionPrivacy</a></td><td>Each post with star reactions has a leaderboard with the top senders, but users can opt out of appearing there if they prefer more privacy. Not populating this field will use the default reaction privacy, stored on the server and synced to clients using <a href="/constructor/updatePaidReactionPrivacy">updatePaidReactionPrivacy</a> (see <a href="/api/reactions#paid-reaction-privacy">here</a> for more info).</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BALANCE_TOO_LOW</td><td>The transaction cannot be completed because the current <a href="/api/stars">Telegram Stars balance</a> is too low.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>RANDOM_ID_EMPTY</td><td>Random ID empty.</td></tr><tr><td>400</td><td>RANDOM_ID_EXPIRED</td><td>The specified <code>random_id</code> was expired (most likely it didn't follow the required `uint64_t random_id = (time() &lt;&lt; 32)</td></tr><tr><td>400</td><td>REACTIONS_COUNT_INVALID</td><td>The specified number of reactions is invalid.</td></tr><tr><td>400</td><td>SEND_AS_PEER_INVALID</td><td>You can't send messages as the specified peer.</td></tr></tbody></table>

### Related pages

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [updatePaidReactionPrivacy](/constructor/updatePaidReactionPrivacy/)

Contains the current [default paid reaction privacy, see here »](/api/reactions/#paid-reactions) for more info.

Clients should invoke [messages.getPaidReactionPrivacy](/method/messages.getPaidReactionPrivacy/) on startup to fetch the current default reaction privacy because this update is only sent to currently online sessions and cannot be fetched using getDifference on client startup.

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.
