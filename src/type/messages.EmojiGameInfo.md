---
title: "Messages.EmojiGameInfo"
original: "https://core.telegram.org/type/messages.EmojiGameInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.EmojiGameInfo","url":"/type/messages.EmojiGameInfo/"}]
layout: layout.njk
---

# Messages.EmojiGameInfo

Dice game information.

```
messages.emojiGameUnavailable#59e65335 = messages.EmojiGameInfo;
messages.emojiGameDiceInfo#44e56023 flags:# game_hash:string prev_stake:long current_streak:int params:Vector<int> plays_left:flags.0?int = messages.EmojiGameInfo;

---functions---

messages.getEmojiGameInfo#fb7e8ca7 = messages.EmojiGameInfo;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.emojiGameUnavailable">messages.emojiGameUnavailable</a></td><td>Dice game information.</td></tr><tr><td><a href="/constructor/messages.emojiGameDiceInfo">messages.emojiGameDiceInfo</a></td><td>Dice game information.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiGameInfo">messages.getEmojiGameInfo</a></td><td>Fetch dice game information.</td></tr></tbody></table>
