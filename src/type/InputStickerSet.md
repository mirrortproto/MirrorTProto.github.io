---
title: "InputStickerSet"
original: "https://core.telegram.org/type/InputStickerSet"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"InputStickerSet","url":"/type/InputStickerSet/"}]
layout: layout.njk
---

# InputStickerSet

Represents a stickerset

#### [End-to-end schema](/schema/end-to-end/)

```
===45===
inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
```

API schema:

```
inputStickerSetEmpty#ffb62b95 = InputStickerSet;
inputStickerSetID#9de7a269 id:long access_hash:long = InputStickerSet;
inputStickerSetShortName#861cc8a0 short_name:string = InputStickerSet;
inputStickerSetAnimatedEmoji#28703c8 = InputStickerSet;
inputStickerSetDice#e67f520e emoticon:string = InputStickerSet;
inputStickerSetAnimatedEmojiAnimations#cde3739 = InputStickerSet;
inputStickerSetPremiumGifts#c88b3b02 = InputStickerSet;
inputStickerSetEmojiGenericAnimations#4c4d4ce = InputStickerSet;
inputStickerSetEmojiDefaultStatuses#29d0f5ee = InputStickerSet;
inputStickerSetEmojiDefaultTopicIcons#44c1f8e9 = InputStickerSet;
inputStickerSetEmojiChannelDefaultStatuses#49748553 = InputStickerSet;
inputStickerSetTonGifts#1cf671a0 = InputStickerSet;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/inputStickerSetShortName">inputStickerSetShortName</a></td><td>Stickerset by short name, from a <a href="/api/links#stickerset-links">stickerset deep link »</a></td></tr><tr><td><a href="/constructor/inputStickerSetEmpty">inputStickerSetEmpty</a></td><td>Empty constructor</td></tr><tr><td><a href="/constructor/inputStickerSetID">inputStickerSetID</a></td><td>Stickerset by ID</td></tr><tr><td><a href="/constructor/inputStickerSetAnimatedEmoji">inputStickerSetAnimatedEmoji</a></td><td>Animated emojis stickerset</td></tr><tr><td><a href="/constructor/inputStickerSetDice">inputStickerSetDice</a></td><td>Used for fetching <a href="/api/dice">animated dice stickers</a></td></tr><tr><td><a href="/constructor/inputStickerSetAnimatedEmojiAnimations">inputStickerSetAnimatedEmojiAnimations</a></td><td>Animated emoji reaction stickerset (contains animations to play when a user clicks on a given animated emoji)</td></tr><tr><td><a href="/constructor/inputStickerSetPremiumGifts">inputStickerSetPremiumGifts</a></td><td>Stickers to show when receiving a gifted Telegram Premium subscription</td></tr><tr><td><a href="/constructor/inputStickerSetEmojiGenericAnimations">inputStickerSetEmojiGenericAnimations</a></td><td>Generic animation stickerset containing animations to play when <a href="/api/reactions">reacting to messages using a normal emoji without a custom animation</a></td></tr><tr><td><a href="/constructor/inputStickerSetEmojiDefaultStatuses">inputStickerSetEmojiDefaultStatuses</a></td><td>Default <a href="/api/emoji-status">custom emoji status</a> stickerset</td></tr><tr><td><a href="/constructor/inputStickerSetEmojiDefaultTopicIcons">inputStickerSetEmojiDefaultTopicIcons</a></td><td>Default <a href="/api/custom-emoji">custom emoji</a> stickerset for <a href="/api/forum#forum-topics">forum topic icons</a></td></tr><tr><td><a href="/constructor/inputStickerSetEmojiChannelDefaultStatuses">inputStickerSetEmojiChannelDefaultStatuses</a></td><td>Default <a href="/api/emoji-status">custom emoji status</a> stickerset for channel statuses</td></tr><tr><td><a href="/constructor/inputStickerSetTonGifts">inputStickerSetTonGifts</a></td><td>TON gifts stickerset.</td></tr></tbody></table>
