---
title: "payments.SavedStarGifts"
original: "https://core.telegram.org/type/payments.SavedStarGifts"
section: ref
description: "Represents a list of gifts."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"payments.SavedStarGifts","url":"/type/payments.SavedStarGifts/"}]
layout: layout.njk
---

# payments.SavedStarGifts

Represents a list of [gifts](/api/gifts/).

```
payments.savedStarGifts#95f389b1 flags:# count:int chat_notifications_enabled:flags.1?Bool gifts:Vector<SavedStarGift> next_offset:flags.0?string chats:Vector<Chat> users:Vector<User> = payments.SavedStarGifts;

---functions---

payments.getSavedStarGifts#a319e569 flags:# exclude_unsaved:flags.0?true exclude_saved:flags.1?true exclude_unlimited:flags.2?true exclude_unique:flags.4?true sort_by_value:flags.5?true exclude_upgradable:flags.7?true exclude_unupgradable:flags.8?true peer_color_available:flags.9?true exclude_hosted:flags.10?true peer:InputPeer collection_id:flags.6?int offset:string limit:int = payments.SavedStarGifts;
payments.getSavedStarGift#b455a106 stargift:Vector<InputSavedStarGift> = payments.SavedStarGifts;
payments.getCraftStarGifts#fd05dd00 gift_id:long offset:string limit:int = payments.SavedStarGifts;
```

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/payments.savedStarGifts">payments.savedStarGifts</a></td><td>Represents a list of <a href="/api/gifts">gifts</a>.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/payments.getSavedStarGifts">payments.getSavedStarGifts</a></td><td>Fetch the full list of <a href="/api/gifts#list-all-received-gifts">gifts »</a> owned, received or <a href="/api/gifts#hosted-collectible-gifts">hosted »</a> by a peer.<br><br>Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned) to the profile, depending on the passed flags.</td></tr><tr><td><a href="/method/payments.getSavedStarGift">payments.getSavedStarGift</a></td><td>Fetch info about specific <a href="/api/gifts">gifts</a> owned by a peer we control.<br><br>Note that unlike what the name suggests, the method can be used to fetch both "saved" and "unsaved" gifts (aka gifts both pinned and not pinned to the profile).</td></tr><tr><td><a href="/method/payments.getCraftStarGifts">payments.getCraftStarGifts</a></td><td>Obtain owned <a href="/api/gifts#collectible-gifts">collectible gifts »</a> of a specific type that can be used for <a href="/api/gifts#crafting-collectible-gifts">crafting »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Gifts](/api/gifts/)

Users can send Gifts to their friends. The recipients of gifts can display them on their profile pages or turn them into Telegram Stars ». Telegram Stars can be used for many things, including supporting creators and buying services in mini apps.
