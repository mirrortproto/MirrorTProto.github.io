---
title: "messages.editForumTopic"
original: "https://core.telegram.org/method/messages.editForumTopic"
section: ref
description: "Telegram allows including animated and static custom emojis inside of messages."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editForumTopic","url":"/method/messages.editForumTopic/"}]
layout: layout.njk
---

# messages.editForumTopic

Edit [forum topic](/api/forum/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
messages.editForumTopic#cecc1134 flags:# peer:InputPeer topic_id:int title:flags.0?string icon_emoji_id:flags.1?long closed:flags.2?Bool hidden:flags.3?Bool = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The supergroup forum, private chat (for forum-enabled bots) or bot forum (for users) where the topic is located.</td></tr><tr><td><strong>topic_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Topic ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>If present, will update the topic title (maximum UTF-8 length: 128).</td></tr><tr><td><strong>icon_emoji_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/long">long</a></td><td>If present, updates the <a href="/api/custom-emoji">custom emoji</a> used as topic icon. <a href="/api/premium">Telegram Premium</a> users can use any custom emoji, other users can only use the custom emojis contained in the <a href="/constructor/inputStickerSetEmojiDefaultTopicIcons">inputStickerSetEmojiDefaultTopicIcons</a> emoji pack. Pass 0 to switch to the fallback topic icon.</td></tr><tr><td><strong>closed</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Bool">Bool</a></td><td>If present, will update the open/closed status of the topic.</td></tr><tr><td><strong>hidden</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Bool">Bool</a></td><td>If present, will hide/unhide the topic (only valid for the "General" topic, <code>id=1</code>).</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>TOPIC_CLOSE_SEPARATELY</td><td>The <code>close</code> flag cannot be provided together with any of the other flags.</td></tr><tr><td>400</td><td>TOPIC_NOT_MODIFIED</td><td>The updated topic info is equal to the current topic info, nothing was changed.</td></tr></tbody></table>

### Related pages

#### [Custom emojis](/api/custom-emoji/)

Telegram allows including animated and static custom emojis inside of messages.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [inputStickerSetEmojiDefaultTopicIcons](/constructor/inputStickerSetEmojiDefaultTopicIcons/)

Default [custom emoji](/api/custom-emoji/) stickerset for [forum topic icons](/api/forum/#forum-topics)

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
