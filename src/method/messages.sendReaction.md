---
title: "messages.sendReaction"
original: "https://core.telegram.org/method/messages.sendReaction"
section: ref
description: "Starting from layer 159, the reaction will be sent from the peer specified using messages.saveDefaultSendAs."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.sendReaction","url":"/method/messages.sendReaction/"}]
layout: layout.njk
---

# messages.sendReaction

React to message.

Starting from layer 159, the reaction will be sent from the peer specified using [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.sendReaction#d30d78d4 flags:# big:flags.1?true add_to_recent:flags.2?true peer:InputPeer msg_id:int reaction:flags.0?Vector<Reaction> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>big</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether a bigger and longer reaction should be shown</td></tr><tr><td><strong>add_to_recent</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>Whether to add this reaction to the <a href="/api/reactions#recent-reactions">recent reactions list »</a>.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Message ID to react to</td></tr><tr><td><strong>reaction</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/Reaction">Reaction</a>&gt;</td><td>A list of reactions (doesn't accept <a href="/constructor/reactionPaid">reactionPaid</a> constructors, use <a href="/method/messages.sendPaidReaction">messages.sendPaidReaction</a> to send paid reactions, instead).</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>CUSTOM_REACTIONS_TOO_MANY</td><td>Too many custom reactions were specified.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MESSAGE_NOT_MODIFIED</td><td>The provided message data is identical to the previous message data, the message wasn't modified.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr><tr><td>400</td><td>REACTIONS_TOO_MANY</td><td>The message already has exactly <code>reactions_uniq_max</code> reaction emojis, you can't react with a new emoji, see <a href="/api/config#client-configuration">the docs for more info&nbsp;»</a>.</td></tr><tr><td>400</td><td>REACTION_EMPTY</td><td>Empty reaction provided.</td></tr><tr><td>400</td><td>REACTION_INVALID</td><td>The specified reaction is invalid.</td></tr><tr><td>403</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr></tbody></table>

### Related pages

#### [Message reactions](/api/reactions/)

Telegram allows users to react on any message using specific emojis, triggering cute lottie animations.

#### [reactionPaid](/constructor/reactionPaid/)

Represents a [paid Telegram Star reaction »](/api/reactions/#paid-reactions).

#### [messages.sendPaidReaction](/method/messages.sendPaidReaction/)

Sends one or more [paid Telegram Star reactions »](/api/reactions/#paid-reactions), transferring [Telegram Stars »](/api/stars/) to a channel's balance.

#### [messages.saveDefaultSendAs](/method/messages.saveDefaultSendAs/)

Change the default peer that should be used when sending messages, reactions, poll votes to a specific group

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
