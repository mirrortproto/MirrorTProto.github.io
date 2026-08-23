---
title: "MessageMedia"
original: "https://core.telegram.org/type/MessageMedia"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"MessageMedia","url":"/type/MessageMedia/"}]
layout: layout.njk
---

# MessageMedia

Media

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
messages.uploadImportedMedia#2a862092 peer:InputPeer import_id:long file_name:string media:InputMedia = MessageMedia;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messageMediaEmpty">messageMediaEmpty</a></td><td>Empty constructor.</td></tr><tr><td><a href="/constructor/messageMediaPhoto">messageMediaPhoto</a></td><td>Attached photo.</td></tr><tr><td><a href="/constructor/messageMediaGeo">messageMediaGeo</a></td><td>Attached map.</td></tr><tr><td><a href="/constructor/messageMediaContact">messageMediaContact</a></td><td>Attached contact.</td></tr><tr><td><a href="/constructor/messageMediaUnsupported">messageMediaUnsupported</a></td><td>Current version of the client does not support this media type.</td></tr><tr><td><a href="/constructor/messageMediaDocument">messageMediaDocument</a></td><td>Document (video, audio, voice, sticker, any media type except photo)</td></tr><tr><td><a href="/constructor/messageMediaWebPage">messageMediaWebPage</a></td><td>Preview of webpage</td></tr><tr><td><a href="/constructor/messageMediaVenue">messageMediaVenue</a></td><td>Venue</td></tr><tr><td><a href="/constructor/messageMediaGame">messageMediaGame</a></td><td>Telegram game</td></tr><tr><td><a href="/constructor/messageMediaInvoice">messageMediaInvoice</a></td><td>Invoice</td></tr><tr><td><a href="/constructor/messageMediaGeoLive">messageMediaGeoLive</a></td><td>Indicates a <a href="/api/live-location">live geolocation</a></td></tr><tr><td><a href="/constructor/messageMediaPoll">messageMediaPoll</a></td><td>Poll</td></tr><tr><td><a href="/constructor/messageMediaDice">messageMediaDice</a></td><td><a href="/api/dice">Dice-based animated sticker</a></td></tr><tr><td><a href="/constructor/messageMediaStory">messageMediaStory</a></td><td>Represents a forwarded <a href="/api/stories">story</a> or a story mention.</td></tr><tr><td><a href="/constructor/messageMediaGiveaway">messageMediaGiveaway</a></td><td>Contains info about a <a href="/api/giveaways">giveaway, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/messageMediaGiveawayResults">messageMediaGiveawayResults</a></td><td>A <a href="/api/giveaways">giveaway</a> with public winners has finished, this constructor contains info about the winners.</td></tr><tr><td><a href="/constructor/messageMediaPaidMedia">messageMediaPaidMedia</a></td><td><a href="/api/paid-media">Paid media, see here »</a> for more info.</td></tr><tr><td><a href="/constructor/messageMediaToDo">messageMediaToDo</a></td><td>Represents a <a href="/api/todo">todo list »</a>.</td></tr><tr><td><a href="/constructor/messageMediaVideoStream">messageMediaVideoStream</a></td><td>Identifies the active group call associated with a <a href="/api/group-calls#live-stories">live story »</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.uploadMedia">messages.uploadMedia</a></td><td>Upload a file and associate it to a chat (without actually sending it to the chat)<br><br>May also be used in a <a href="/api/bots/connected-business-bots">business connection</a>, <em>not</em> by wrapping the query in <a href="/method/invokeWithBusinessConnection">invokeWithBusinessConnection »</a>, but rather by specifying the business connection ID in the <code>business_connection_id</code> parameter.</td></tr><tr><td><a href="/method/messages.uploadImportedMedia">messages.uploadImportedMedia</a></td><td>Upload a media file associated with an <a href="/api/import">imported chat, click here for more info »</a>.</td></tr></tbody></table>
