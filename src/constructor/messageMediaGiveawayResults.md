---
title: "messageMediaGiveawayResults"
original: "https://core.telegram.org/constructor/messageMediaGiveawayResults"
section: ref
description: "A giveaway with public winners has finished, this constructor contains info about the winners."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaGiveawayResults","url":"/constructor/messageMediaGiveawayResults/"}]
layout: layout.njk
---

# messageMediaGiveawayResults

A [giveaway](/api/giveaways/) with public winners has finished, this constructor contains info about the winners.

```
messageMediaGiveawayResults#ceaa3ea1 flags:# only_new_subscribers:flags.0?true refunded:flags.2?true channel_id:long additional_peers_count:flags.3?int launch_msg_id:int winners_count:int unclaimed_count:int winners:Vector<long> months:flags.4?int stars:flags.5?long prize_description:flags.1?string until_date:int = MessageMedia;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>only_new_subscribers</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/constructor/true">true</a></td><td>If set, only new subscribers starting from the giveaway creation date participated in the giveaway.</td></tr><tr><td><strong>refunded</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.2?<a href="/constructor/true">true</a></td><td>If set, the giveaway was canceled and was fully refunded.</td></tr><tr><td><strong>channel_id</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>ID of the channel/supergroup that was automatically <a href="/api/boost">boosted</a> by the winners of the giveaway for duration of the Premium subscription.</td></tr><tr><td><strong>additional_peers_count</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.3?<a href="/type/int">int</a></td><td>Number of other channels that participated in the giveaway.</td></tr><tr><td><strong>launch_msg_id</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Identifier of the message with the giveaway in <code>channel_id</code>.</td></tr><tr><td><strong>winners_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Total number of winners in the giveaway.</td></tr><tr><td><strong>unclaimed_count</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Number of not-yet-claimed prizes.</td></tr><tr><td><strong>winners</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/long">long</a>&gt;</td><td>Up to 100 user identifiers of the winners of the giveaway.</td></tr><tr><td><strong>months</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.4?<a href="/type/int">int</a></td><td>Duration in months of each <a href="/api/premium">Telegram Premium</a> subscription in the giveaway.</td></tr><tr><td><strong>stars</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.5?<a href="/type/long">long</a></td><td>For <a href="/api/stars#star-giveaways">Telegram Star giveaways</a>, the total number of Telegram Stars being given away.</td></tr><tr><td><strong>prize_description</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.1?<a href="/type/string">string</a></td><td>Can contain a textual description of additional giveaway prizes.</td></tr><tr><td><strong>until_date</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Point in time (Unix timestamp) when the winners were selected. May be bigger than winners selection date specified in initial parameters of the giveaway.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [Channel and supergroup boosts](/api/boost/)

Telegram Premium users can grant their favorite channels and supergroups additional features like the ability to post stories by giving them boosts.

#### [Telegram Premium](/api/premium/)

Telegram Premium is an optional subscription service that unlocks additional exclusive client-side and API-side features, while helping support the development of the app.

#### [Telegram Stars](/api/stars/)

Telegram Stars are virtual items that allow users to purchase digital goods and services from bots and mini apps inside the Telegram ecosystem, send gifts to content creators on the Telegram platform, and more.

#### [Giveaways and gifts](/api/giveaways/)

Telegram channel and supergroup administrators may launch giveaways to randomly distribute Telegram Premium subscriptions and other gifts among their followers, in exchange for boosts.
