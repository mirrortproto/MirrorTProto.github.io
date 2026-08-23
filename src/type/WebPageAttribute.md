---
title: "WebPageAttribute"
original: "https://core.telegram.org/type/WebPageAttribute"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"WebPageAttribute","url":"/type/WebPageAttribute/"}]
layout: layout.njk
---

# WebPageAttribute

Webpage attributes

```
webPageAttributeTheme#54b56617 flags:# documents:flags.0?Vector<Document> settings:flags.1?ThemeSettings = WebPageAttribute;
webPageAttributeStory#2e94c3e7 flags:# peer:Peer id:int story:flags.0?StoryItem = WebPageAttribute;
webPageAttributeStickerSet#50cc03d3 flags:# emojis:flags.0?true text_color:flags.1?true stickers:Vector<Document> = WebPageAttribute;
webPageAttributeUniqueStarGift#cf6f6db8 gift:StarGift = WebPageAttribute;
webPageAttributeStarGiftCollection#31cad303 icons:Vector<Document> = WebPageAttribute;
webPageAttributeStarGiftAuction#1c641c2 gift:StarGift end_date:int = WebPageAttribute;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/webPageAttributeTheme">webPageAttributeTheme</a></td><td>Page theme</td></tr><tr><td><a href="/constructor/webPageAttributeStory">webPageAttributeStory</a></td><td>Webpage preview of a Telegram story</td></tr><tr><td><a href="/constructor/webPageAttributeStickerSet">webPageAttributeStickerSet</a></td><td>Contains info about a <a href="/api/stickers">stickerset »</a>, for a <a href="/constructor/webPage">webPage</a> preview of a <a href="/api/links#stickerset-links">stickerset deep link »</a> (the <a href="/constructor/webPage">webPage</a> will have a <code>type</code> of <code>telegram_stickerset</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeUniqueStarGift">webPageAttributeUniqueStarGift</a></td><td>Contains info about <a href="/api/gifts#collectible-gifts">collectible gift »</a> for a <a href="/constructor/webPage">webPage</a> preview of a <a href="/api/gifts#collectible-gifts">collectible gift »</a> (the <a href="/constructor/webPage">webPage</a> will have a <code>type</code> of <code>telegram_nft</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeStarGiftCollection">webPageAttributeStarGiftCollection</a></td><td>Contains info about a <a href="/api/gifts#gift-collections">gift collection »</a> for a <a href="/constructor/webPage">webPage</a> preview of a <a href="/api/gifts#gift-collections">gift collection »</a> (the <a href="/constructor/webPage">webPage</a> will have a <code>type</code> of <code>telegram_collection</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeStarGiftAuction">webPageAttributeStarGiftAuction</a></td><td>Contains info about a <a href="/api/auctions">collectible gift auction »</a> for a <a href="/constructor/webPage">webPage</a> preview of an <a href="/api/auctions">auction »</a> (the <a href="/constructor/webPage">webPage</a> will have a <code>type</code> of <code>telegram_auction</code>).</td></tr><tr><td><a href="/constructor/webPageAttributeAiComposeTone">webPageAttributeAiComposeTone</a></td><td><a href="/type/WebPageAttribute">Webpage attribute</a> attached to a <a href="/constructor/webPage">webPage</a> of type <code>telegram_aicomposetone</code>, generated when previewing a shared <a href="/api/ai#ai-compose-tones">AI composer tone »</a> via an <a href="/api/links#ai-compose-tone-links">AI compose tone link »</a>.</td></tr></tbody></table>
