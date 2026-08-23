---
title: "messages.emojiGameDiceInfo"
original: "https://core.telegram.org/constructor/messages.emojiGameDiceInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.emojiGameDiceInfo","url":"/constructor/messages.emojiGameDiceInfo/"}]
layout: layout.njk
---

# messages.emojiGameDiceInfo

Dice game information.

```
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;
```

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>game_hash</strong></td><td style="text-align: center;"><a href="/type/string">string</a></td><td>Game hash.</td></tr><tr><td><strong>prev_stake</strong></td><td style="text-align: center;"><a href="/type/long">long</a></td><td>Previous stake.</td></tr><tr><td><strong>current_streak</strong></td><td style="text-align: center;"><a href="/type/int">int</a></td><td>Current streak.</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/Vector%20t">Vector</a>&lt;<a href="/type/int">int</a>&gt;</td><td>Parameters.</td></tr><tr><td><strong>plays_left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators#conditional-fields">flags</a>.0?<a href="/type/int">int</a></td><td>Plays left.</td></tr></tbody></table>

### Type

[messages.EmojiGameInfo](/type/messages.EmojiGameInfo/)
