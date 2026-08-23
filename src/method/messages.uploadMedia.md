---
title: "messages.uploadMedia"
original: "https://core.telegram.org/method/messages.uploadMedia"
section: ref
description: "Upload a file and associate it to a chat (without actually sending it to the chat)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.uploadMedia","url":"/method/messages.uploadMedia/"}]
layout: layout.njk
---

# messages.uploadMedia

Upload a file and associate it to a chat (without actually sending it to the chat)

May also be used in a [business connection](/api/bots/connected-business-bots/), _not_ by wrapping the query in [invokeWithBusinessConnection »](/method/invokeWithBusinessConnection/), but rather by specifying the business connection ID in the `business_connection_id` parameter.

```
messageMediaEmpty#3ded6320 = MessageMedia;
messageMediaPhoto#695150d7 flags:# spoiler:flags.3?true photo:flags.0?Photo ttl_seconds:flags.2?int = MessageMedia;
messageMediaGeo#56e0d474 geo:GeoPoint = MessageMedia;
messageMediaContact#70322949 phone_number:string first_name:string last_name:string vcard:string user_id:long = MessageMedia;
messageMediaUnsupported#9f84f49e = MessageMedia;
messageMediaDocument#52d8ccd9 flags:# nopremium:flags.3?true spoiler:flags.4?true video:flags.6?true round:flags.7?true voice:flags.8?true document:flags.0?Document alt_documents:flags.5?Vector<Document> video_cover:flags.9?Photo video_timestamp:flags.10?int ttl_seconds:flags.2?int = MessageMedia;
messageMediaWebPage#ddf10c3b flags:# force_large_media:flags.0?true force_small_media:flags.1?true manual:flags.3?true safe:flags.4?true webpage:WebPage = MessageMedia;
messageMediaVenue#2ec0533f geo:GeoPoint title:string address:string provider:string venue_id:string venue_type:string = MessageMedia;
messageMediaGame#fdb19008 game:Game = MessageMedia;
messageMediaInvoice#f6a548d3 flags:# shipping_address_requested:flags.1?true test:flags.3?true title:string description:string photo:flags.0?WebDocument receipt_msg_id:flags.2?int currency:string total_amount:long start_param:string extended_media:flags.4?MessageExtendedMedia = MessageMedia;
messageMediaGeoLive#b940c666 flags:# geo:GeoPoint heading:flags.0?int period:int proximity_notification_radius:flags.1?int = MessageMedia;
messageMediaPoll#4bd6e798 poll:Poll results:PollResults = MessageMedia;
messageMediaDice#8cbec07 flags:# value:int emoticon:string game_outcome:flags.0?messages.EmojiGameOutcome = MessageMedia;
messageMediaStory#68cb6283 flags:# via_mention:flags.1?true peer:Peer id:int story:flags.0?StoryItem = MessageMedia;
messageMediaGiveaway#aa073beb flags:# only_new_subscribers:flags.0?true winners_are_visible:flags.2?true channels:Vector<long> countries_iso2:flags.1?Vector<string> prize_description:flags.3?string quantity:int months:flags.4?int stars:flags.5?long until_date:int = MessageMedia;
messageMediaGiveawayResults#ceaa3ea1 flags:# only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:long additional_peers_count:flags.3?int launch_msg_id:int winners_count:int unclaimed_count:int winners:Vector<long> months:flags.4?int stars:flags.5?long prize_description:flags.1?string until_date:int = MessageMedia;
messageMediaPaidMedia#a8852491 stars_amount:long extended_media:Vector<MessageExtendedMedia> = MessageMedia;
messageMediaToDo#8a53b014 flags:# todo:TodoList completions:flags.0?Vector<TodoCompletion> = MessageMedia;
messageMediaVideoStream#ca5cab89 flags:# rtmp_stream:flags.0?true call:InputGroupCall = MessageMedia;
---functions---
messages.uploadMedia#14967978 flags:# business_connection_id:flags.0?string peer:InputPeer media:InputMedia = MessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>business_connection_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/string">string</a></td><td>Whether the media will be used only in the specified <a href="/api/bots/connected-business-bots">business connection »</a>, and not directly by the bot.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer">InputPeer</a></td><td>The chat, can be <a href="/constructor/inputPeerEmpty">inputPeerEmpty</a> for bots and <a href="/constructor/inputPeerSelf">inputPeerSelf</a> for users.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/type/InputMedia">InputMedia</a></td><td>File uploaded in chunks as described in <a href="/api/files">files »</a></td></tr></tbody></table>

### Result

[MessageMedia](/type/MessageMedia/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>400</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>CHAT_RESTRICTED</td><td>You can't send messages in this chat, you were restricted.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>FILE_PARTS_INVALID</td><td>The number of file parts is invalid.</td></tr><tr><td>400</td><td>FILE_PART_LENGTH_INVALID</td><td>The length of a file part is invalid.</td></tr><tr><td>400</td><td>IMAGE_PROCESS_FAILED</td><td>Failure while processing image.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MEDIA_INVALID</td><td>Media invalid.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr><tr><td>400</td><td>PHOTO_EXT_INVALID</td><td>The extension of the photo is invalid.</td></tr><tr><td>400</td><td>PHOTO_INVALID_DIMENSIONS</td><td>The photo dimensions are invalid.</td></tr><tr><td>400</td><td>PHOTO_SAVE_FILE_INVALID</td><td>Internal issues, try again later.</td></tr><tr><td>400</td><td>USER_BANNED_IN_CHANNEL</td><td>You're banned from sending messages in supergroups/channels.</td></tr><tr><td>400</td><td>VOICE_MESSAGES_FORBIDDEN</td><td>This user's privacy settings forbid you from sending voice messages.</td></tr><tr><td>400</td><td>WEBPAGE_CURL_FAILED</td><td>Failure while fetching the webpage with cURL.</td></tr></tbody></table>

### Related pages

#### [Connected business bots](/api/bots/connected-business-bots/)

Users can connect Telegram bots that will process and answer messages on their behalf. This allows them to seamlessly integrate any existing tools and workflows, or add AI assistants that manage their chats.

#### [inputPeerEmpty](/constructor/inputPeerEmpty/)

An empty constructor, no user or chat is defined.

#### [inputPeerSelf](/constructor/inputPeerSelf/)

Defines the current user.

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.

#### [invokeWithBusinessConnection](/method/invokeWithBusinessConnection/)

Invoke a method using a [Telegram Business Bot connection, see here » for more info, including a list of the methods that can be wrapped in this constructor](/api/bots/connected-business-bots/).

Make sure to always send queries wrapped in a `invokeWithBusinessConnection` to the datacenter ID, specified in the `dc_id` field of the [botBusinessConnection](/constructor/botBusinessConnection/) that is being used.
