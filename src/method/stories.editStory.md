---
title: "stories.editStory"
original: "https://core.telegram.org/method/stories.editStory"
section: ref
description: "May also be used in a business connection, _not_ by wrapping the query in invokeWithBusinessConnection », but rather by specifying the ID of a controlled business user in peer: in…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.editStory","url":"/method/stories.editStory/"}]
layout: layout.njk
---

# stories.editStory

Edit an uploaded [story](/api/stories/)

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`: in this context, the method can only be used to edit stories posted by the same business bot on behalf of the user with [stories.sendStory](/method/stories.sendStory/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
stories.editStory#b583ba46 flags:# peer:InputPeer id:int media:flags.0?InputMedia media_areas:flags.3?Vector<MediaArea> caption:flags.1?string entities:flags.1?Vector<MessageEntity> privacy_rules:flags.2?Vector<InputPrivacyRule> = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>Peer where the story was posted.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>ID of story to edit.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/InputMedia">InputMedia</a></td><td>If specified, replaces the story media.</td></tr><tr><td><strong>media_areas</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MediaArea">MediaArea</a>&gt;</td><td><a href="/api/stories#media-areas">Media areas</a> associated to the story, see <a href="/api/stories#media-areas">here »</a> for more info.</td></tr><tr><td><strong>caption</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>If specified, replaces the story caption.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/MessageEntity">MessageEntity</a>&gt;</td><td><a href="/api/entities">Message entities for styled text in the caption</a>, if allowed by the <a href="/api/config#stories-entities"><code>stories_entities</code> client configuration parameter »</a>.</td></tr><tr><td><strong>privacy_rules</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/InputPrivacyRule">InputPrivacyRule</a>&gt;</td><td>If specified, alters the <a href="/api/privacy">privacy settings »</a> of the story, changing who can or can't view the story.</td></tr><tr><td><strong>music</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/InputDocument">InputDocument</a></td><td>If set, the new audio track to play as background music for the story.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>STORY_NOT_MODIFIED</td><td>The new story information you passed is equal to the previous story information, thus it wasn't modified.</td></tr></tbody></table>

### Related pages

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Privacy settings](/api/privacy/)

Telegram allows users to specify granular privacy settings, choosing which users can or can't interact with them in certain ways.

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](/api/bots/connected-business-bots/).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.

#### [stories.sendStory](/method/stories.sendStory/)

Uploads a [Telegram Story](/api/stories/).

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the ID of a controlled business user in `peer`.
