---
title: "stories.activateStealthMode"
original: "https://core.telegram.org/method/stories.activateStealthMode"
section: ref
description: "Activates stories stealth mode, see here » for more info."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"stories.activateStealthMode","url":"/method/stories.activateStealthMode/"}]
layout: layout.njk
---

# stories.activateStealthMode

Activates [stories stealth mode](/api/stories/#stealth-mode), see [here »](/api/stories/#stealth-mode) for more info.

Will return an [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/).

```
updatesTooLong#e317af7e = Updates;
updateShortMessage#313bc7f8 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int user_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShortChatMessage#4d6deea5 flags:# out:flags.1?true mentioned:flags.4?true media_unread:flags.5?true silent:flags.13?true id:int from_id:long chat_id:long message:string pts:int pts_count:int date:int fwd_from:flags.2?MessageFwdHeader via_bot_id:flags.11?long reply_to:flags.3?MessageReplyHeader entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
updateShort#78d4dec1 update:Update date:int = Updates;
updatesCombined#725b04c3 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq_start:int seq:int = Updates;
updates#74ae4240 updates:Vector<Update> users:Vector<User> chats:Vector<Chat> date:int seq:int = Updates;
updateShortSentMessage#9015e101 flags:# out:flags.1?true id:int pts:int pts_count:int date:int media:flags.9?MessageMedia entities:flags.7?Vector<MessageEntity> ttl_period:flags.25?int = Updates;
---functions---
stories.activateStealthMode#57bbd166 flags:# past:flags.0?true future:flags.1?true = Updates;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>past</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>Whether to erase views from any stories opened in the past <a href="/api/config#stories-stealth-past-period"><code>stories_stealth_past_period</code> seconds »</a>, as specified by the <a href="/api/config#client-configuration">client configuration</a>.</td></tr><tr><td><strong>future</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/constructor/true">true</a></td><td>Whether to hide future story views for the next <a href="/api/config#stories-stealth-future-period"><code>stories_stealth_future_period</code> seconds »</a>, as specified by the <a href="/api/config#client-configuration">client configuration</a>.</td></tr></tbody></table>

### Result

[Updates](/type/Updates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.

#### [Telegram Stories](/api/stories/)

Telegram users and channels can easily post and view stories through the API.

#### [updateStoriesStealthMode](/constructor/updateStoriesStealthMode/)

Indicates that [stories stealth mode](/api/stories/#stealth-mode) was activated.
